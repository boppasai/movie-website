import React ,{useState} from 'react'
import Foodcard from './Foodcard'
import FoodData from './FoodData'
import './style.css'


const Resturant = () => {
  const [Runmenu,setRunmenu]=useState(FoodData);
  console.log(Runmenu)
  return (
    <>
    <Foodcard  Runmenu={Runmenu}/>
    </>
  )
}

export default Resturant