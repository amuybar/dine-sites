import React, { useState, useEffect } from 'react';
import './../css/Carousel.css'; // Import CSS file for Carousel styles

function Carousel() {
    const [activeSlide, setActiveSlide] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setActiveSlide((prevSlide) => (prevSlide === 2 ? 0 : prevSlide + 1)); // Change 2 to the total number of slides minus 1
      }, 5000); // Adjust interval as needed
      return () => clearInterval(interval);
    }, []);
  
    return (
        <><div id='c' className="carousel-container">

            <div className="slide" style={{ transform: `translateX(-${activeSlide * 100}%)` }}>
                <img src="images/heropa.png" alt="" />
            </div>
            <div className="slide" style={{ transform: `translateX(-${activeSlide * 100}%)` }}>
                <img src="images/hero3.png" alt="" />
            </div>
            <div className="slide" style={{ transform: `translateX(-${activeSlide * 100}%)` }}>
                <img src="images/hero4.png" alt="" />
            </div>
           
        </div><div className="carousel-content">
                <h2>Discover a Unique Dining Experience</h2>
                <p>Explore our diverse menu and indulge in a culinary journey that will delight your senses.</p>
                <div className="call-to-action">
                    <button>View Menu</button>
                    <button>Book a Table</button>
                </div>
            </div></>
        
    );
}

export default Carousel;
