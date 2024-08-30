import React from 'react'
import "./FoodCard.css"
import VegImg from "./veg.png"
import NonVegImg from "./non-veg.png"

function FoodCard({imgUrl,title,description,isVeg,price}) {
  return (
   <>

   <div className='food-card'>
   <img src={imgUrl} className='food-img'/>
  <h1 className='food-card-title'>{title}</h1>
  <p className='food-card-description'>{description}</p>
  
  <img src={isVeg?VegImg : NonVegImg } className='veg-icon'/>
{
  price ? <p className='food-price'>₹ {price}</p>
  : null
}

<button className='food-btn'>Add To Cart</button>
  

   </div>
   
   
   </>

  )
}

export default FoodCard