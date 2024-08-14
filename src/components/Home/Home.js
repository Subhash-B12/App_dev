// src/components/Home/Home.js

import React from 'react';
import Navbar from '../Navbar/Navbar';
import Middle from '../Middle/Middle';
import Footer from '../Footer/Footer';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Middle />
      <Footer />
      <header className="App-header">
        {/* Add any additional content for the header here */}
      </header>
    </div>
  );
}

export default Home;
