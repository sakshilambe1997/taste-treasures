import React from "react";
import "./Home.css"
import FoodCard from "./../../components/FoodCard/FoodCard.js";

function Home() {
  return (
    <div>
      <h1 className="website-heading">Taste Treasures</h1>
      <div className="food-cards-container">
        <FoodCard
          imgUrl="https://img.freepik.com/free-photo/delicious-indian-dosa-composition_23-2149086051.jpg"
          title="Alu Paratha"
          description="Delicious 'Alu Paratha' made with fresh ingridients"
          isVeg={true}
          price='120'
        />

        <FoodCard
          imgUrl="https://img.freepik.com/premium-photo/malai-paneer-tikka-kabab-is-indian-dish-made-from-chunks-cottage-cheese_960396-530415.jpg"
          title="Panner Tikka"
          description="Spicy 'Paneer Tikka' made with fresh ingridients"
          isVeg={true}
          price='180'
        />

        <FoodCard
          imgUrl="https://img.freepik.com/premium-photo/plate-rice-with-chicken-rice-rice_1013545-2278.jpg"
          title="Chiken Biryani"
          description="Spicy 'Chiken Biryani' made with fresh ingridients"
          isVeg={false}
          price='250'
        />

        <FoodCard
          imgUrl="https://img.freepik.com/free-photo/penne-pasta-tomato-sauce-with-chicken-tomatoes-wooden-table_2829-19739.jpg"
          title="Pasta"
          description="Delicious 'Pasta' made with fresh ingridients"
          isVeg={true}
          price='90'
        />
      </div>
    </div>
  );
}

export default Home;
