import React from "react";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar.js";
import backGroundImage from "./backgorund-head-img.jpg";
import { DeliciousFoodCard } from "../../components/DeliciousFoodCard/DeliciousFoodCard.js";
import {
  BRANDS,
  DELICIOUSFOODCARDS,
  TRENDINGFOODCARDS,
} from "../../config/homeData.js";
import DeliveryImg from "./food-delivery.png";
import Sign from "./agreement.png";
import Food from "./diet.png";
import TrendingFoodCard from "../../components/TrendingFoodCard/TrendingFoodCard.js";
import BrandsCard from "../../components/BrandsCard/BrandsCard.js";

function Home() {
  return (
    <div>
      <Navbar />
      {/* Head image section*/}

      <img src={backGroundImage} className="home-background-head-img" />
      <div className="background-img-text-div">
        <h3 className="heading-text-red">Welcome To Test Treasures</h3>
        <h1 className="heading-text-white">
          Fresh ,Delicious meal to reach your optimum health and fitness
        </h1>
        <button className="button">View Menu</button>
      </div>

      {/* Delivery section */}

      <h2 className="text-align-center">How it works</h2>

      <div className="Delivery-container">
        <div className="delivery-div">
          <img src={Sign} className="delivery-logo-img" />
          <p>Sign and choose from Our Weekly Menu</p>
        </div>

        <div className="delivery-div">
          <img src={DeliveryImg} className="delivery-logo-img" />
          <p>We Will Deliver Your Purchase</p>
        </div>

        <div className="delivery-div">
          <img src={Food} className="delivery-logo-img" />
          <p>Enjoy Our Tasty Organic Food!</p>
        </div>
      </div>
      <button className="button button-center">Subscribe Now</button>

      {/* delicious-food-card-section */}

      <h2 className="text-align-center">We have delicious dood in the town</h2>

      <div className="display-flex">
        {DELICIOUSFOODCARDS.map((fooditem, i) => {
          return (
            <DeliciousFoodCard
              imgUrl={fooditem.imgUrl}
              title={fooditem.title}
              description={fooditem.description}
              price={fooditem.price}
            />
          );
        })}
      </div>

      {/* Top Brands section */}

      <h1 className="text-align-center">Top brands for you</h1>

      <div className="display-flex brand-logo-container">
        {BRANDS.map((brand, i) => {
          const { imgUrl, title } = brand;
          return <BrandsCard imgUrl={imgUrl} title={title} />;
        })}
      </div>

      {/* trending cards section */}

      <h1 className="text-align-center">Trending Now</h1>

      <div className="display-flex">
        {TRENDINGFOODCARDS.map((item, i) => {
          const { 
            imgUrl, 
            title } = item;
          return <TrendingFoodCard
           imgUrl={imgUrl}
            title={title} />;
        })}
      </div>
    </div>
  );
}

export default Home;
