import React from 'react';
import '../css/Menu.css'
function MenuCard({ name, price, description, image, onClick }) {
  return (
    <div className="menu-card" onClick={onClick}>
      <img src={image} alt={name} />
      <div className="menu-details">
        <h3>{name}</h3>
        <p>{description}</p>
        <p>Price: {price}</p>
      </div>
    </div>
  );
}

export default MenuCard;
