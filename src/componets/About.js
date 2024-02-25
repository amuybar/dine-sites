import React from 'react';
import '../css/About.css';


function About() {
  return (
    <div className="about">
      
   <div className='about-p'>
   <h2>About Us</h2>
   <p>
        Welcome to our dine business located in Thika! We pride ourselves on serving delicious meals in a cozy and welcoming atmosphere.
      </p>
      <p>
        Our business owner, Isaac Gatama, has a passion for food and hospitality, and he personally oversees the operations to ensure every guest has a delightful experience.
      </p>
      <p>
        Come visit us at our location in Thika and indulge in our mouthwatering dishes crafted with love and care.
      </p>
   </div>
      <div className="map">
        {/* Embed Google Maps or any other map component */}
        <iframe
          title="Map"
          width="400"
          height="350"
          loading="lazy"
          allowFullScreen
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3196.917939775693!2d36.66104431534303!3d-1.033183199445324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f18a9e45b1c6b%3A0x66e343d21c631db4!2sThika%2C%20Kenya!5e0!3m2!1sen!2s!4v1643268457170!5m2!1sen!2s"
        ></iframe>
      </div>
    </div>
  );
}
export default About;
