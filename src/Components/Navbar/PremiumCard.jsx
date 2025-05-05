import React from 'react'
import style from './nav.module.css'
const PremiumCard = () => {
  return (
    <div>
        <span>
            <img src="https://static1.lenskart.com/media/desktop/img/7-feb-25/Premium-Home-Main-v3.png" alt="" />
        </span>
        <h1 class={style.heading}>New Drops</h1>
        <card class={style.ClassicCard} >
           <img src="https://static1.lenskart.com/media/desktop/img/31-jan-25/Classic/Shop%20by%20category/Classic-Eyeglasses.png" alt="" />
           <img src="https://static1.lenskart.com/media/desktop/img/31-jan-25/Classic/Shop%20by%20category/Classic-screen.png" alt="" />
           <img src="https://static1.lenskart.com/media/desktop/img/31-jan-25/Classic/Shop%20by%20category/Classic-sunglasses.png" alt="" />
           <img src= "https://static1.lenskart.com/media/desktop/img/31-jan-25/Classic/Shop%20by%20category/Classic-powersun.png" alt="" />
        </card>
        <h1 class={style.heading}>Top selling Collection</h1>
        <text class={style.paragraph} >Most in demand</text>
        <card class={style.static}>
                {/* <img src="https://static5.lenskart.com/media/uploads/home-stylefinder-banner-4dec.png" alt="" /> */}
                <img src="https://static1.lenskart.com/media/desktop/img/Lenskart/Tilak-Verma/Premium/Top-selling-collection.png" alt=""  />
               </card>
    </div>
  )
}

export default PremiumCard;