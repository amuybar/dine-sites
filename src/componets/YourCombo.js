import React from 'react';
import DishCard from './DishCard';
import foodItems from '../model/FoodData'; 
import '../css/DealoftheDay.css'
function YourCombo() {
  const renderedFoodItems = foodItems.map((foodItem, index) => (
    <DishCard
      key={index} 
      name={foodItem.name}
      description={foodItem.description}
      price={foodItem.price}
      image={foodItem.image}
    />
  ));
  return (
    <section className="stack-description">
      <h2>Your Combination</h2>
      <div className="dish-list">
      {renderedFoodItems}
      </div>
      
    </section>
  );
}

export default YourCombo;
