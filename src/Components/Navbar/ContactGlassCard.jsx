import React from 'react'
import style from './nav.module.css'
const ContactGlassCard = () => {
  return (
    <div>
        <span>
                <img src="https://static1.lenskart.com/media/desktop/img/7-feb-25/Contact%20Lenses-Home-Main-v3.png" alt="" />
            </span>
            <card class={style.ClassicCard} >
                <img src="https://static5.lenskart.com/media/uploads/zCl-lp-grid-clear.png" alt="" />
                <img src="https://static5.lenskart.com/media/uploads/zCl-lp-grid-color.png" alt="" />
                <img src="https://static5.lenskart.com/media/uploads/Cl-lp-grid-solution.png" alt="" />
                <img src="https://static5.lenskart.com/media/uploads/Cl-lp-grid-accessories.png" alt="" />


            </card>
    </div>
  )
}

export default ContactGlassCard