import React from 'react'
import "./BrandsCard.css"


function BrandsCard({imgUrl,title}) {
  return (
    <div className='brand-card'>
        <img src={imgUrl} className='brand-logo-img '/>
        <p className='brand-title'>{title}</p>
    </div>
  )
}

export default BrandsCard