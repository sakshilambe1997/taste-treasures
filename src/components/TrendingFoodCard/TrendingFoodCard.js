import React from 'react'
import "./TrendingFoodCard.css"

function TrendingFoodCard({imgUrl,title}) {
  return (

    <div className='trending-card-div'>
        <img src={imgUrl} className='trending-card-img'/>
        <p className='trending-title'>{title}</p>
    </div>
  )
}

export default TrendingFoodCard