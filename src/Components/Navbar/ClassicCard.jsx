import React from 'react'
import style from "./nav.module.css"


const ClassicCard = () => {
  return (
    <div>
        <span>
            <img src="https://static1.lenskart.com/media/desktop/img/7-feb-25/Classic-Home-Main-v3.png" alt="" />
        </span>
        <card class={style.ClassicCard} >
           <img src="https://static1.lenskart.com/media/desktop/img/31-jan-25/Classic/Shop%20by%20category/Classic-Eyeglasses.png" alt="" />
           <img src="https://static1.lenskart.com/media/desktop/img/31-jan-25/Classic/Shop%20by%20category/Classic-screen.png" alt="" />
           <img src="https://static1.lenskart.com/media/desktop/img/31-jan-25/Classic/Shop%20by%20category/Classic-sunglasses.png" alt="" />
           <img src= "https://static1.lenskart.com/media/desktop/img/31-jan-25/Classic/Shop%20by%20category/Classic-powersun.png" alt="" />
        </card>
        <h1 class={style.heading}># trending at Lenskart</h1>
        <card class={style.ClassicCard} >
        <img src="https://static1.lenskart.com/media/desktop/img/30-jan-25/ple/Trending-Phonic-Thumbnail.png" alt="" />
        <img src="https://static5.lenskart.com/media/uploads/Trending-swaps-Thumbnail-min.png" alt="" />
        </card>
       <card class={style.static}>
        {/* <img src="https://static5.lenskart.com/media/uploads/home-stylefinder-banner-4dec.png" alt="" /> */}
        <img src="https://static5.lenskart.com/media/uploads/NEW_AT_LK-swaps-230325.png" alt=""  />
       </card>
    </div>
  )
}

export default ClassicCard;