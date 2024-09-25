import React from "react";
import "./Home.css"
import Navbar from "../../components/Navbar/Navbar.js";
import backGroundImage from "./backgorund-head-img.jpg"


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
    
     
      <div>
           
      </div>
      
    </div>
  );
}

export default Home;
