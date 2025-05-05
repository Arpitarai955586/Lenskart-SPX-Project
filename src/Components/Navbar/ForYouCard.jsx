import React from 'react'
import style from './nav.module.css'
const ForYouCard = () => {
  return (
    <div>
          <span>
             <img src="https://static5.lenskart.com/media/uploads/for-you-top-banner-IN-110325.png" alt="" />
                </span>
               <h1 class={style.heading}>Shop by Category </h1>
                 <card class={style.ClassicCard} >
                           <img src="https://static1.lenskart.com/media/desktop/img/31-jan-25/Classic/Shop%20by%20category/Classic-Eyeglasses.png" alt="" />
                           <img src="https://static1.lenskart.com/media/desktop/img/31-jan-25/Classic/Shop%20by%20category/Classic-screen.png" alt="" />
                           <img src="https://static1.lenskart.com/media/desktop/img/31-jan-25/Classic/Shop%20by%20category/Classic-sunglasses.png" alt="" />
                           <img src= "https://static1.lenskart.com/media/desktop/img/31-jan-25/Classic/Shop%20by%20category/Classic-powersun.png" alt="" />
                        </card>
    </div>
  )
}

export default ForYouCard