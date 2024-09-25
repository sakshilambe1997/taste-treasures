import React from "react";
import "./Home.css"
import Navbar from "../../components/Navbar/Navbar.js";
import backGroundImage from "./backgorund-head-img.jpg"
import { DeliciousFoodCard } from "../../components/DeliciousFoodCard/DeliciousFoodCard.js";
import { PRODUCTS } from "../../config/homeData.js";


function Home() {
  return (
    <div>
      <Navbar/>
      <img src={backGroundImage} className="home-background-head-img"/>
      <div className="background-img-text-div">
        <h3 className="heading-text-red">Welcome To Test Treasures</h3>
        <h1 className="heading-text-white">Fresh ,Delicious meal to reach your optimum health and fitness</h1>
        <button className="button">View Menu</button>
      </div>
    
     
      <h2>We have Delicious Food in the town</h2>

        <div className="delicious-food-cards-container">

          {
            PRODUCTS.map((fooditem,i)=>{
              return<DeliciousFoodCard
              imgUrl={fooditem.imgUrl}
              title={fooditem.title}
              description={fooditem.description}
              price={fooditem.price}
              />
            })
          }
          <DeliciousFoodCard/>

      
        </div>
    </div>
  );
}

export default Home;
