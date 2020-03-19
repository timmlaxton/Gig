import React, { Component } from 'react';
import './resources/styles.css'

import Header from './components/header_footer/Header'
import Featured from './components/featured';
import VenueNfo from './components/venueNfo';
import Highlights from './components/Highlights'
import Location from './components/Location';
import Footer from './components/header_footer/Footer';

function App() {
  return (
    <div className="App" style={{ height: "1500px", background: "white"}}>
      <Header />
      <Featured />
      <VenueNfo/>
      <Highlights/>
      <Location/>
      <Footer/>
    </div>
  );
}

export default App;
