import React, { useState } from 'react';
import OrderPopup from './OrderPopup';


import '../css/DishCard.css';

function DishCard({ name, description, price, image }) {
  const [showOrderPopup, setShowOrderPopup] = useState(false);

  const toggleOrderPopup = () => {
    setShowOrderPopup(!showOrderPopup);
  };

  const closeOrderPopup = () => {
    setShowOrderPopup(false);
  };

  return (
    <div className='fragment'>
      <div className="dish-card">
        <img src={image} alt={name} className="dish-image" />
        <div className="dish-details">
          <h3>{name}</h3>
          <p><strong>{price}</strong></p>
          <button className='order-cta' onClick={toggleOrderPopup}>Order</button>
        </div>
        {showOrderPopup && <OrderPopup onClose={closeOrderPopup} meal={{ name, price, image, description }} />}
      </div>
      <p>{description}</p>
    </div>
  );
}

export default DishCard;
