// src/components/Home.js
import React from 'react';

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Body from './pages/Body'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Body/>
      <Footer/>
     
    </div>
  );
};

export default Home;
