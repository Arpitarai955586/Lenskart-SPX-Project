import React from 'react'
import style from './nav.module.css'
const HustrilCard = () => {
  return (
    <div>
        <span>
            <img src="https://static1.lenskart.com/media/desktop/img/7-feb-25/Hustlr-Home-Main-v3.png" alt="" />
        </span>
        <h1 class={style.heading}> #trending on Sharp Trank </h1>
        <card class={style.static}>
           <img src="https://static1.lenskart.com/media/desktop/img/21-jan-25/ezgif-4-1be7d8c91b.gif" alt=""  />
        </card>
     <h1 class={style.heading}>Shop by Category </h1>
        <card class={style.ClassicCard} >
                        <img src="https://static5.lenskart.com/media/uploads/hustlreye5.png" alt="" />
                        <img src="https://static5.lenskart.com/media/uploads/Frame_1991633452.png" alt="" />
                        <img src="https://static5.lenskart.com/media/uploads/Frame_1991633452-7Jan.png" alt="" />
                        <img src="https://static5.lenskart.com/media/uploads/Frame_1991633456.png" alt="" />
        </card>
        <span>
          <img src="https://static5.lenskart.com/media/uploads/Exclusives-l1-hustlr-headiing-newnew.png" alt="" />
        </span>
        <card class={style.ClassicCard} style={{backgroundColor:"backgroundColor:blue"}}>
        <img src="https://static1.lenskart.com/media/desktop/img/27-nov-24/x-1/Exclusives-l1-hustlr-peyush.png" alt="" />
        <img src="https://static1.lenskart.com/media/desktop/img/27-nov-24/x-1/Exclusives-l1-hustlr-namita.png" alt="" />

        <button class={style.shopNow}>Shop Now</button>
        </card>
         
    </div>
  )
}

export default HustrilCard