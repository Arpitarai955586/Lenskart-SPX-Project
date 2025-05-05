import React from 'react'
import style from './nav.module.css'
const SunGlassCard = () => {
  return (
    <div>
        <span>
                     <img src="https://static1.lenskart.com/media/desktop/img/7-feb-25/Sunglasses-Home-Main-v3.png" alt="" />
                        </span>
                       <h1 class={style.heading}>Shop by Category </h1>
                        <card class={style.EssentialCard}>
                        <img src="https://static5.lenskart.com/media/uploads/Home-all-online-exclusive-men-3_4.png" alt="" />
                        <img src="https://static1.lenskart.com/media/desktop/img/h24/nov/home/On%20Sale-%20shop%20by%20gender/Home-OnSale-shop-by-gender-women-3_4.png" alt="" />
                        <img src= "https://static5.lenskart.com/media/uploads/Home-all-online-exclusive-kids-3_4.png" alt="" />
                                                       </card>
                        <h1 class={style.heading}>Shop by Price </h1>
                        <card class={style.EssentialCard}>
                          <img src="https://static1.lenskart.com/media/desktop/img/19-dec-24/sung/Home-OnSale-shop-by-price-1000-3_4.png" />
                                   <img src="https://static1.lenskart.com/media/desktop/img/19-dec-24/sung/Home-OnSale-shop-by-price-1500-3_4.png" alt="" />
                                   <img src= "https://static1.lenskart.com/media/desktop/img/19-dec-24/sung/Home-OnSale-shop-by-price-2000-3_4.png" alt="" />
                                </card>
                                <span>
                                  <img src=" https://static1.lenskart.com/media/desktop/img/17-jan-25/Sunglasses-Footer-v2.png" alt="" />
                                </span>
    </div>
  )
}

export default SunGlassCard