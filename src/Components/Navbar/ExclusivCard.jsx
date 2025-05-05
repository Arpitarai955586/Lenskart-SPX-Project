import React from 'react'
import style from './nav.module.css'
const ExclusivCard = () => {
    return (
        <div>
            <span>
                <img src="https://static1.lenskart.com/media/desktop/img/7-feb-25/Exclusive-Home-Main-v3.png" alt="" />
            </span>
            <card class={style.ClassicCard} >
                <img src="https://static1.lenskart.com/media/desktop/img/26-dec-24/Exclusive%20Tab/Smart%20Glasses/Home-exclusives-eyeglasses-alifazal.png" alt="" />
                <img src="https://static5.lenskart.com/media/uploads/Home-exclusives-eyeglasses-swaps1.png" alt="" />
                <img src="	https://static5.lenskart.com/media/uploads/Home-exclusives-eyeglasses-tilakvarma.png" alt="" />
                <img src="https://static5.lenskart.com/media/uploads/Home-exclusives-eyeglasses-switchflip-min-tab.png" alt="" />


            </card>
            <h1 class={style.heading}>Special prower of you </h1>
            <card class={style.ClassicCard} >
                <img src="https://static5.lenskart.com/media/uploads/Home-exclusives-eyeglasses0specialpower-progressive-min-tab.png" alt="" />
                <img src="https://static5.lenskart.com/media/uploads/Home-exclusives-eyeglasses0specialpower-reader-min-tab.png" alt="" />

            </card>
            <span>
                <img src="https://static1.lenskart.com/media/desktop/img/26-dec-24/Smart%20Glasses/Common-banner.png" alt="" />

            </span>
            <card class={style.static}>
                    
                    <img src="https://static1.lenskart.com/media/desktop/img/Aug24/ex-lp/Home-exclusives-thinoptics-inlinestory2.png" alt=""  />
                    <button class={style.shopNow}>Shop Now</button>
                   </card>

        </div>
    )
}

export default ExclusivCard