import React from "react";
import "./Home.css"
import FoodCard from "./../../components/FoodCard/FoodCard.js";
import {PRODUCTS} from "./../../config/data.js"
import Navbar from "../../components/Navbar/Navbar.js";

function Home() {
  return (
    <div>
      <Navbar/>
      <h1 className="website-heading">Taste Treasures</h1>
      <div className="food-cards-container">

        {
          PRODUCTS.map((foodItem)=>{
            return <FoodCard
            imgUrl={foodItem.imgUrl}
            title={foodItem.title}
            description={foodItem.description}
            isVeg={foodItem.isVeg}
            price={foodItem.price}
           
          />
              
          })
        }
       
      
      </div>
    </div>
  );
}

export default Home;
