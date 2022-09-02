import React, { useState, useEffect } from "react";
import style from "./ResturantDetails.module.scss";
import { Button, Grid } from "@mui/material";
import { useParams } from "react-router-dom";
import { resturantId } from "../../redux/actions/resturant";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../../components/Spinner/Spinner";
import moment from "moment"

const ResturantDetails = () => {
  const pulao_image = "/images/pulao_image.webp";
  const singleResturantData = useSelector(
    (state) => state.resturant.singleResturant
  );
  console.log(singleResturantData);
  const [loading, setLoading] = useState(false);
  let { id } = useParams();
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(resturantId(id, setLoading));
  }, []);

  if (loading) return <Spinner />;

  return (
    <div className={style.ResturantDetails_container}>
      <img src={singleResturantData?.image} alt="image" className={style.image}/>
      <div className={style.resturant_details}>
        <div>
          <h1>{singleResturantData?.name}</h1>
          <p>{moment(singleResturantData?.date).format("LLLL")}</p> 

          <Button variant="contained" color="warning">
          {singleResturantData?.restaurantStatus ? ("Open") : ("Closed")}
            
          </Button>
          <span>4.35/{"(1000+)"}</span>
          <p>$$$ . Sandwiches . Desserts . Burger . Pakistani</p>
        </div>
        <div>
          <h3>Resturant Information</h3>
        </div>
      </div>
      <div className={style.resturant_item}>
        <div>
          <p>Popular</p>
          <p>SPECIAL ITEMS</p>
          <p>CHIKEN CHARGA</p>
          <p>MUTTON KARAHI</p>
          <p>CHIKEN KARAHI</p>
          <p>BIRYANI AND PULAO</p>
          <p>BAR BQ</p>
          <p>ROLLS</p>
          <p>KABAB</p>
          <p>SAVOURIES</p>
          <p>TANDOOR</p>
          <p>ICE CREAM</p>
        </div>
      </div>
      <div className={style.popular_item}>
        <div>
          <h1>POPUlAR</h1>
          <p>Most odered right now</p>
          <div>
            <Grid container spacing={5}>
              <Grid item lg={6} xs={12}>
                <div className={style.order}>
                  <div className={style.right_side}>
                    <h2>Chiken Biryani</h2>
                    <p>Net weight half kg</p>
                    <h4>Rs.330</h4>
                  </div>
                  <div className={style.left_side}>
                    <img src={pulao_image} alt="pulao_image" />
                  </div>
                </div>
              </Grid>
              <Grid item lg={6} xs={12}>
                <div className={style.order}>
                  <div className={style.right_side}>
                    <h2>Chiken Biryani</h2>
                    <p>Net weight half kg</p>
                    <h4>Rs.330</h4>
                  </div>
                  <div className={style.left_side}>
                    <img src={pulao_image} alt="pulao_image" />
                  </div>
                </div>
              </Grid>
              <Grid item lg={6} xs={12}>
                <div className={style.order}>
                  <div className={style.right_side}>
                    <h2>Chiken Biryani</h2>
                    <p>Net weight half kg</p>
                    <h4>Rs.330</h4>
                  </div>
                  <div className={style.left_side}>
                    <img src={pulao_image} alt="pulao_image" />
                  </div>
                </div>
              </Grid>{" "}
              <Grid item lg={6} xs={12}>
                <div className={style.order}>
                  <div className={style.right_side}>
                    <h2>Chiken Biryani</h2>
                    <p>Net weight half kg</p>
                    <h4>Rs.330</h4>
                  </div>
                  <div className={style.left_side}>
                    <img src={pulao_image} alt="pulao_image" />
                  </div>
                </div>
              </Grid>{" "}
              <Grid item lg={6} xs={12}>
                <div className={style.order}>
                  <div className={style.right_side}>
                    <h2>Chiken Biryani</h2>
                    <p>Net weight half kg</p>
                    <h4>Rs.330</h4>
                  </div>
                  <div className={style.left_side}>
                    <img src={pulao_image} alt="pulao_image" />
                  </div>
                </div>
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResturantDetails;
