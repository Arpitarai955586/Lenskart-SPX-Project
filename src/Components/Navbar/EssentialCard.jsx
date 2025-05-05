import React from 'react'
import style from './nav.module.css'
const EssentialCard = () => {
  return (
    <div>
        <span>
            <img src="https://static5.lenskart.com/media/uploads/On_Sale-Home-Main-with-price-v3.png" alt="" />
        </span>
        <card class={style.ClassicCard} >
           <img src="https://static1.lenskart.com/media/desktop/img/31-jan-25/Classic/Shop%20by%20category/Classic-Eyeglasses.png" alt="" />
           <img src="https://static1.lenskart.com/media/desktop/img/31-jan-25/Classic/Shop%20by%20category/Classic-screen.png" alt="" />
           <img src="https://static1.lenskart.com/media/desktop/img/31-jan-25/Classic/Shop%20by%20category/Classic-sunglasses.png" alt="" />
           <img src= "https://static1.lenskart.com/media/desktop/img/31-jan-25/Classic/Shop%20by%20category/Classic-powersun.png" alt="" />
           <img src="https://static5.lenskart.com/media/uploads/11Jan-grid-sunglasses-3_4.png" alt="" />
           <img src="https://static5.lenskart.com/media/uploads/11Jan-grid-PowerSun-3_4.png" alt="" />
        </card>
        <h1 class={style.heading}>Shop by Gender <span class={style.EssentialCardHeading}>Up to 60% Off</span> </h1>
        <card class={style.EssentialCard}>
         <img src="https://static5.lenskart.com/media/uploads/Home-all-online-exclusive-men-3_4.png" alt="" />
        <img src="https://static1.lenskart.com/media/desktop/img/h24/nov/home/On%20Sale-%20shop%20by%20gender/Home-OnSale-shop-by-gender-women-3_4.png" alt="" />
         <img src= "https://static5.lenskart.com/media/uploads/Home-all-online-exclusive-kids-3_4.png" alt="" />
          </card>
    </div>
  )
}

export default EssentialCard