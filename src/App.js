import React from 'react';
import './resources/styles.css';
import {Element} from 'react-scroll';


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

       <Element name="eventInfo"> 
      <Featured/>
      </Element>


      <Element name="venueInfo"> 
      <VenueNfo/>
      </Element>
      
      <Element name="lineup">
      <Highlights />
      </Element>

      <Element name="location">  
      <Location />
      </Element>

      <Footer/>
    </div>
  );
}

export default App;
