import React from "react";
import style from "./Delivery.module.scss";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Button } from "@mui/material";
import Box from "@mui/material";
import TextField from "@mui/material/TextField";
import CottageOutlinedIcon from '@mui/icons-material/CottageOutlined';
import RedeemOutlinedIcon from '@mui/icons-material/RedeemOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import Map from "../../components/GoogleMap/Map";
import Slip from "../../components/DeliverySlip/Slip";
const Delivery = () => {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  let d =  new Date();
  let datestring = ("0" + d.getDate()).slice(-2) + "-" + ("0"+(d.getMonth()+1)).slice(-2) + "-" +
    d.getFullYear();



  return (
    <div className={style.DeliveryContainer}>
      <div className={style.DeliveryDetails}>
        <h1>Delivery Details</h1>
        <div className={style.contactLess}>
          <h3>Contactless delivery</h3>
          <p>To keep you safe, the rider will place your order at your door</p>
        </div>
        <div className={style.deliveryTime}>
          <h3>Est. Delivery Time :</h3>
          <div className={style.Date}>
            <FormControl sx={{ minWidth: "53%" }}>
              <InputLabel id="demo-simple-select-standard-label">
              {datestring}
              </InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={age}
                onChange={handleChange}
                label="Age"
              >
                <MenuItem value={10}>{datestring}</MenuItem>
              </Select>
            </FormControl>
            <FormControl sx={{ minWidth: "53%" }}>
              <InputLabel id="demo-simple-select-standard-label">
                ASAP
              </InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={age}
                onChange={handleChange}
                label="Age"
              >
                <MenuItem value={10}>ASAP</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
        <div className={style.location}>
          <div className={style.maproute}>
             <Map/>
          </div>
          <div className={style.setAdress}>
            <div className={style.address}>
              <div>
                <h3>C71/1</h3>
                <h4>karachi</h4>
              </div>
              <div className={style.btn}>
                <Button className={style.mapBtn} variant="text">
                  Edit
                </Button>
              </div>
           
            </div>
            <p>We're missing your street</p>

            <TextField color="grey"  className={style.Box} />
          
          </div>
        </div>
        <div className={style.SubmitData}>
              <h4>Add A Label</h4>
              <button>
                  <CottageOutlinedIcon />
              </button>
              <button>
                  <RedeemOutlinedIcon />
              </button> <button>
                  <FavoriteBorderOutlinedIcon />
              </button> <button>
                  <AddOutlinedIcon />
              </button>
        </div>
        <div className={style.btn}>
          <button className={style.subBtn}>Submit</button>
        </div>
      </div>
      <Slip/>
    </div>
  );
};

export default Delivery;
