import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown} from '@fortawesome/free-solid-svg-icons';

import MenuCard from './MenuCard';
import foodItems from './AllFood'; // Assuming you have defined foodItems

function Menu() {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const handleNextCard = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex + 1) % foodItems.length);
  };

  const handlePrevCard = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex - 1 + foodItems.length) % foodItems.length);
  };

  return (
    <div id='m' className='menu-'>
      <div><h2>Menu</h2>
      
    </div>
    <div className="menu">
      <button onClick={handleNextCard} className="arrow-button">
        <FontAwesomeIcon icon={faChevronUp} />
      </button>
      <div className="menu-card-container">
        <MenuCard
          name={foodItems[currentCardIndex].name}
          price={foodItems[currentCardIndex].price}
          description={foodItems[currentCardIndex].description}
          image={foodItems[currentCardIndex].image} />
      </div>

      <button onClick={handlePrevCard} className="arrow-button">
        <FontAwesomeIcon icon={faChevronDown} />
      </button>

    </div></div>
  );
}

export default Menu;
