import "./DeliciousFoodCard.css"
import { PRODUCTS } from "../../config/homeData"

function DeliciousFoodCard({imgUrl,title,description,price}) {
  return (
    <div className="delicious-food-card-container">
        <img src={imgUrl} className="delicious-card-img"/>
        <h3 className="delicious-card-title">{title}</h3>
        <p className="delicious-card-description">{description}</p>
        <p className="delicious-card-price">{price}</p>
    </div>

  )
}

export
{
    DeliciousFoodCard
} 

