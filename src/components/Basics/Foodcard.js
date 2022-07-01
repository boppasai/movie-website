import React, { useState } from 'react'
import './style.css'
// import FoodData from './FoodData.js'
import Resturant from './Resturant.js'

const Foodcard = ({Runmenu}) => {
  // console.log(Runmenu)
  return (
    <>
    <div className='SetBooks'>
    {
      Runmenu.map((trail)=>{
        console.log(trail.name)
        return<>
        {/* <h1>hello</h1> */}
        
    <div className='FoodCard1'>
    <h1>{trail.name}</h1>
    <img src={trail.img} alt="" />
    <h3>TICKET Price:{trail.price}</h3>
    <hr />
    <label htmlFor="">ABOUT:</label>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos temporibus
         expedita sunt eaque dolorum nobis delectus odio adipisci odit consequatur?</p>
     </div> 
 
        </>
      })
    }
    </div>
    </>
  )
}

export default Foodcard