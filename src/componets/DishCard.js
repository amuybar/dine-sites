import React, { useState } from 'react';
import OrderPopup from './OrderPopup';
import axios from 'axios';

import '../css/DishCard.css';

function DishCard({ name, description, price, image }) {
  const [showOrderPopup, setShowOrderPopup] = useState(false);

  const toggleOrderPopup = () => {
    setShowOrderPopup(!showOrderPopup);
  };

  const closeOrderPopup = () => {
    setShowOrderPopup(false);
  };

  const sendOrder = async () => {
    try {
      // Make an HTTP POST request to your backend API
      const response = await axios.post('http://localhost:3004/api/orders', {
        name,
        price,
        description,
        image,
      });

      // Handle successful response (e.g., show a success message)
      console.log('Order sent successfully:', response.data);
    } catch (error) {
      // Handle error (e.g., show an error message)
      console.error('Error sending order:', error);
    }
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
