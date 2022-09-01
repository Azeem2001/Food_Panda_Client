import React from 'react'
import style from  "./ResturantDetails.module.scss"
import { Button ,Grid } from '@mui/material'
const ResturantDetails = () => {
  const header_image = "./images/header_image.jpg"
  const pulao_image = "./images/pulao_image.webp"
  return (
    <div className={style.ResturantDetails_container}>
       <img src={header_image} alt="image" />
        <div className={style.resturant_details}>
          <div>
            <h1>Karachi Resturant</h1>
            <Button variant='contained' color='warning' >Closed</Button>
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
                  <Grid item lg={6} xs={12} >
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
                  <Grid item lg={6} xs={12} >
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
                  <Grid item lg={6} xs={12} >
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
                  </Grid> <Grid item lg={6} xs={12} >
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
                  </Grid> <Grid item lg={6} xs={12} >
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
  )
}

export default ResturantDetails