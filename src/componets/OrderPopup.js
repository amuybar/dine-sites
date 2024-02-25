import React, { useState } from 'react';
import axios from 'axios';
import '../css/Order_popup.css';

function OrderPopup({ meal, onClose }) {
  const [email, setEmail] = useState('');
  const [orderSent, setOrderSent] = useState(false);

  const sendOrder = async () => {
    try {
      // Check if the order for this meal has already been sent
      if (orderSent) {
        console.log('Order already sent for this meal');
        return;
      }

      // Make an HTTP POST request to your backend API
      const response = await axios.post('http://localhost:3004/api/orders', {
        mealId: meal.id,
        name: meal.name,
        price: meal.price,
        email: email,
      description:meal.description
      });

      // Handle successful response
      console.log('Order sent successfully:', response.data);

      // Set the orderSent state to true to prevent duplicate orders
      setOrderSent(true);

      // Send confirmation email to the user
      await sendConfirmationEmail(email, meal);

      // Close the OrderPopup
      onClose();
    } catch (error) {
      // Handle error
      console.error('Error sending order:', error);
    }
  };
  const sendConfirmationEmail = async (email, meal) => {
    try {
      // Make an HTTP POST request to send confirmation email
      await axios.post('http://localhost:3004/api/send-email', {
        to: email,
        subject: 'Order Confirmation',
        body: `Thank you for your order! You ordered ${meal.name} for ${meal.price}. You can pay using the Till No:333222`,
      });

      // Confirmation email sent successfully
      console.log('Confirmation email sent to:', email);
    } catch (error) {
      // Handle error sending confirmation email
      console.error('Error sending confirmation email:', error);
    }
  };
  return (
    <div className="order-popup">
      <h2>{meal.name}</h2>
      <p>Price: {meal.price}</p>
      <img src={meal.image} alt={meal.name} />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        required
      />
      <div className="buttons">
        <button onClick={sendOrder}>Send Order</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
}

export default OrderPopup;
