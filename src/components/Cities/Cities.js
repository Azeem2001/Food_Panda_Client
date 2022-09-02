import React, { Fragment, useState } from "react";
import City from "../City/City";
import style from "./cities.module.scss";
import { Grid, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux/es/exports";
const Cities = () => {
  const [allCities, setAllCities] = useState([
    {
      image: "/images/Karachi.webp",
      text: "Karachi",
    },
    {
      image: "/images/Lahore.webp",
      text: "Lahore",
    },
    {
      image: "/images/islamabad.webp",
      text: "Islamabad",
    },
    {
      image: "/images/Rawalpindi.webp",
      text: "Rawalpindi",
    },
    {
      image: "/images/Faisalabad.webp",
      text: "Faisalabad",
    },
    {
      image: "/images/Multan.webp",
      text: "Multan",
    },
    {
      image: "/images/Hyderabad.webp",
      text: "Hyderabad",
    },
    {
      image: "/images/Sialkot.webp",
      text: "Sialkot",
    },
    {
      image: "/images/Peshawar.webp",
      text: "Peshawar",
    },
    {
      image: "/images/Sukkur.webp",
      text: "Sukkur",
    },
    {
      image: "/images/city-tile-Murree.webp",
      text: "Murree",
    },
    {
      image: "/images/city-tile-Mangla.webp",
      text: "Mangla",
    },
    {
      image: "/images/city-tile-PanoAqil.webp",
      text: "Pano Aqil",
    },
    {
      image: "/images/city-tile-Bahawalpur.webp",
      text: "Bahawalpur",
    },
    {
      image: "/images/city-tile-Sadiqabad.webp",
      text: "Sadiqabad",
    },
    {
      image: "/images/city-tile-Larkana.webp",
      text: "Larkana",
    },
    {
      image: "/images/city-tile-WahhCannt.webp",
      text: "Wah Cantt",
    },
    {
      image: "/images/city-tile-Abottabad.webp",
      text: "Abottabad",
    },
    {
      image: "/images/city-tile-RahimYarKhan.webp",
      text: "Rahim Yar Khan",
    },
    {
      image: "/images/city-tile-DeraGhaziKhan.webp",
      text: "Dera Ghazi Khan",
    },
    {
      image: "/images/city-tile-Quetta.webp",
      text: "Quetta",
    },
    {
      image: "/images/city-tile-Okara.webp",
      text: "Okara",
    },
    {
      image: "/images/city-tile-Jhelum.webp",
      text: "Jhelum",
    },
    {
      image: "/images/city-tile-Mardan.webp",
      text: "Mardan",
    },
    {
      image: "/images/city-tile-Kamoke.webp",
      text: "Kamoke",
    },
    {
      image: "/images/city-tile-Gujrat.jpg.webp",
      text: "Gujrat",
    },
    {
      image: "/images/city-tile-Sheikhupura.jpg.webp",
      text: "Sheikhupura",
    },
  ]);
  let navigate = useNavigate();

  const pageRedirector = (text) => {
    navigate(`/city/${text}`)
  };

  return (
    <Fragment>
      <div className={style.Cities_container}>
        <div className={style.city}>
          <div className={style.heading}>
            <p>Find us in these cities and many more!</p>
          </div>
          <div className={style.city_cards}>
            <Grid container spacing={5}>
              {allCities?.map((items, i) => (
                <Grid item xs={12} md={6} lg={2.4}>
                  <div key={i} onClick={() => pageRedirector(items.text)}>
                    <City setItem={items} />
                  </div>
                </Grid>
              ))}
              ;
            </Grid>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Cities;
