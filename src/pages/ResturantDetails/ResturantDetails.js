import React, { useState, useEffect } from "react";
import style from "./ResturantDetails.module.scss";
import { Button, Card, Grid } from "@mui/material";
import { useParams } from "react-router-dom";
import { resturantId } from "../../redux/actions/resturant";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../../components/Spinner/Spinner";
import moment from "moment";
import Cards from "../../components/Card/Cards";
import AddIcon from "@mui/icons-material/Add";
import { AddItems } from "../../redux/actions/addcard";
const ResturantDetails = () => {
  const [count, setCount] = useState();
  const singleResturantData = useSelector(
    (state) => state.resturant?.singleResturant
  );
  // console.log(singleResturantData)

  let foodItemData = useSelector(
    (state) => state.resturant?.restaurant?.fooditems
  );
  
  // console.log(ItemData)
  const addFooditem = (list)=> {
    dispatch(AddItems(list));
  };
  const [loading, setLoading] = useState(false);
  let { id } = useParams();
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(resturantId(id, setLoading));
  }, []);

  if (loading) return <Spinner />;

 
  return (
    <Grid container spacing={0}>
      <Grid item md={9} lg={9} sm={12}>
        <div className={style.ResturantDetails_container}>
          <img
            src={singleResturantData?.image}
            alt="image"
            className={style.image}
          />
          <div className={style.resturant_details}>
            <div>
              <h1>{singleResturantData?.name}</h1>
              <p>{moment(singleResturantData?.date).format("LLLL")}</p>

              <Button variant="contained" color="warning">
                {singleResturantData?.restaurantStatus ? "Open" : "Closed"}
              </Button>
              <span>4.35/{"(1000+)"}</span>
              <p>$$$ . Sandwiches . Desserts . Burger . Pakistani</p>
            </div>
            <div>
              <h3>Resturant Information</h3>
            </div>
          </div>

          {foodItemData?.map((item, i) => (
            <div className={style.popular_item}>
              <div>
                <h1>{item?.name}</h1>
                <p>Most odered right now</p>
                <div>
                  <Grid container spacing={2}>
                    {item?.items?.map((list, index) => (
                      <Grid item lg={6} md={5} xs={12} key={index}>
                        <div className={style.order}>
                          <div className={style.right_side}>
                            <h2>{list?.title}</h2>
                            <p>{list?.description}</p>
                            <h4>{list?.price}</h4>
                          </div>
                          <div className={style.left_side}>
                            <img src={list?.image} alt="pulao_image" />
                            <Button onClick={()=> addFooditem(list)}>
                              <AddIcon />
                            </Button>
                          </div>
                        </div>
                      </Grid>
                    ))}
                  </Grid>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Grid>
      <Grid item lg={3} md={3} sx={12}>
        <Cards />
      </Grid>
    </Grid>
  );
};

export default ResturantDetails;
