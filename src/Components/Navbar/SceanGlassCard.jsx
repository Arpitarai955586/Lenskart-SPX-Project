import React from 'react'
import style from './nav.module.css'
const SceanGlassCard = () => {
  return (
    <div>
         <span>
                     <img src="https://static1.lenskart.com/media/desktop/img/7-feb-25/Screen%20Glasses-Home-Main-v3.png" alt="" />
                        </span>
                       <h1 class={style.heading}>Shop by Category </h1>
                        <card class={style.EssentialCard}>
                                <img src="https://static5.lenskart.com/media/uploads/Home-all-online-exclusive-men-3_4.png" alt="" />
                                   <img src="https://static1.lenskart.com/media/desktop/img/h24/nov/home/On%20Sale-%20shop%20by%20gender/Home-OnSale-shop-by-gender-women-3_4.png" alt="" />
                                   <img src= "https://static5.lenskart.com/media/uploads/Home-all-online-exclusive-kids-3_4.png" alt="" />
                                </card>
                                 <card class={style.ClassicCard} style={{backgroundColor:"backgroundColor:blue"}}>
                                        <img src="https://static1.lenskart.com/media/desktop/img/27-nov-24/x-1/Exclusives-l1-hustlr-peyush.png" alt="" />
                                        <img src="https://static1.lenskart.com/media/desktop/img/27-nov-24/x-1/Exclusives-l1-hustlr-namita.png" alt="" />
                                
                                        <button class={style.shopNow}>Shop Now</button>
                                        </card>

    </div>
  )
}

export default SceanGlassCard