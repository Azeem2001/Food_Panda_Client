import { Grid, CircularProgress } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import style from "./Resturant.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { allCities_ByName } from "../../redux/actions/resturant";

const Resturant = () => {
  const [loading, setLoading] = useState(true);
  let resturant_data = useSelector((state) => state.resturant?.restaurant);

  const dispatch = useDispatch();
  const biryani = "/images/product_1.webp";
  const navigate = useNavigate();
  let { id } = useParams();
  useEffect(() => {
    dispatch(allCities_ByName(id, setLoading));
  }, []);
  return (
    <div className={style.Resturant_container}>
      <h1>Popular Resturant</h1>
      <div className={style.Resturant_Details}>
        <Grid container spacing={5}>
          <>
            {loading ? (
              <CircularProgress color="secondary" />
            ) : (
              <Grid item xs={12} md={6} lg={3}>
                {resturant_data?.map((items, i) => (
                  <div className={style.card}>
                    <img
                      onClick={() => navigate("/resturantdetail")}
                      src={items.image}
                      alt="biryani"
                    />
                    <h5>PAU PAU FAVOURITE</h5>
                    <h3>{items.name}</h3>
                  </div>
                ))}
              </Grid>
            )}
          </>
        </Grid>
      </div>
    </div>
  );
};

export default Resturant;
