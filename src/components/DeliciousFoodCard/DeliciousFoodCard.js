import "./DeliciousFoodCard.css"
import LikeImage from "./like.png"

function DeliciousFoodCard({imgUrl,title,description,price}) {
  return (
    <div className="delicious-food-card-container">
        <img src={imgUrl} className="delicious-card-img"/>
        <h3 className="delicious-card-title">{title}</h3>
        <img src={LikeImage} className="like-img"/>
        <p className="delicious-card-description">{description}</p>
        <div className="button-container">
        <span className="delicious-card-price">₹ {price}</span>
        <button className="button button-padding">Know More</button>
        </div>
        
    </div>

  )
}

export
{
    DeliciousFoodCard
} 

