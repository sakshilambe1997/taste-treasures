import React from 'react'
import "./BrandsCard.css"


function BrandsCard({imgUrl,title, brandUrl}) {
  return (
    <div className='brand-card' onClick={()=>{
      window.open(brandUrl, "_blank")
    }}>
        <img src={imgUrl} className='brand-logo-img '/>
        <p className='brand-title'>{title}</p>
    </div>
  )
}

export default BrandsCard