

import React from 'react';

import '../src/css/App.css'
import '../src/css/header.css'
import Carousel from './componets/Couresol'
import DealoftheDay from './componets/DealoftheDay';
import Navigation from './componets/Navigation';
import Footer from './componets/Footer';
import Menu from './componets/Menu';
import About from './componets/About';
import Rsv from './componets/resv';
import YourCombo from './componets/YourCombo';


function App() {
  return (
    <div className="App">
      <header>
        <h1>Thika Dine Space</h1>
      </header>
      <Navigation />
      <Carousel />
      <DealoftheDay />
      <YourCombo/>
       <Menu/>
       <About/>
      <Footer />
      <Rsv/>
    </div>
  );
}

export default App;
