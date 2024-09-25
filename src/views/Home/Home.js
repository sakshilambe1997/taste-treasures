import React from "react";
import "./Home.css"
import Navbar from "../../components/Navbar/Navbar.js";
import backGroundImage from "./backgorund-head-img.jpg"
import { DeliciousFoodCard } from "../../components/DeliciousFoodCard/DeliciousFoodCard.js";
import { DELICIOUSFOODCARDS } from "../../config/homeData.js";
import DeliveryImg from "./food-delivery.png"
import Sign from "./agreement.png"
import Food from "./diet.png"


function Home() {
  return (
    <div>
      <Navbar/>
      {/* Head image section*/}

      <img src={backGroundImage} className="home-background-head-img"/>
      <div className="background-img-text-div">
        <h3 className="heading-text-red">Welcome To Test Treasures</h3>
        <h1 className="heading-text-white">Fresh ,Delicious meal to reach your optimum health and fitness</h1>
        <button className="button">View Menu</button>
      </div>

      {/* Delivery section */}

      <h2 className="text-align-center">How it works</h2>

<div className="Delivery-container">
  <div className="delivery-div">
  <img src={Sign} className="delivery-logo-img"/>
  <p>Sign and choose from Our Weekly Menu</p>
  </div>

  <div className="delivery-div">
  <img src={DeliveryImg} className="delivery-logo-img"/>
  <p>We Will Deliver Your Purchase</p></div>

  <div className="delivery-div">
  <img src={Food} className="delivery-logo-img"/>
  <p>Enjoy Our Tasty Organic Food!</p>
  </div>
</div>
<button className="button button-center">Subscribe Now</button>


    
    {/* delicious-food-card-section */}

      <h2 className="text-align-center">We have Delicious Food in the town</h2>

        <div className="delicious-food-cards-container">

          {
            DELICIOUSFOODCARDS.map((fooditem,i)=>{
              return<DeliciousFoodCard
              imgUrl={fooditem.imgUrl}
              title={fooditem.title}
              description={fooditem.description}
              price={fooditem.price}
              />
            })
          }
        </div>

       
    </div>
  );
}

export default Home;
