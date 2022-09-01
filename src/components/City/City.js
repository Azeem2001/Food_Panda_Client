import React from "react";
import style from "./City.module.scss";
import Box from "@mui/material/Box";
import { extractFirstCharacter } from "../../Function/Function";
const City = ({ setItem }) => {
  
   
  return (
    <div className={style.city_contianer}>
      <Box>
        <img src={setItem.image} alt="karachi"  />
        <div className={style.city_hover}>
          <h1>{extractFirstCharacter(setItem.text)}</h1>
        </div>
        <p>{setItem.text}</p>
      </Box>
    </div>
  );
};

export default City;
