import React from 'react'
import style from './nav.module.css'
const KidsGlassCard = () => {
  return (
    <div>
        <span>
              <img src="https://static1.lenskart.com/media/desktop/img/7-feb-25/Kids-Home-Main-v3.png" alt="" />
                </span>
                <h1 class={style.heading}>Shop by Gender</h1>
                <card class={style.EssentialCard}>
                <img src="https://static5.lenskart.com/media/uploads/home-kids-topslider-swaps.png" alt="" />
                <img src="https://static5.lenskart.com/media/uploads/creatrthumb-slider-28-jan-25.png" alt="" />
                <img src= "https://static5.lenskart.com/media/uploads/unbreakablethumb-slider-28-jan-25.png" alt="" />
                </card>
                <h1 class={style.heading}>Shop by Age</h1>
                <card class={style.ClassicCard} >
                                <img src="https://static5.lenskart.com/media/uploads/Toddlers.gif" alt="" />
                                <img src="https://static5.lenskart.com/media/uploads/Juniors.gif" alt="" />
                                <img src="https://static5.lenskart.com/media/uploads/Tweens.gif" alt="" />
                                <img src="https://static5.lenskart.com/media/uploads/Teens.gif" alt="" />
                
                
                            </card>
                            <span>
                              <img src="https://static1.lenskart.com/media/desktop/img/17-jan-25/Kids-Footer-v2.png" alt="" />
                            </span>
    </div>
  )
}

export default KidsGlassCard