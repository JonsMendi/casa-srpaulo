import React from 'react';
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import Contact from '../pages/Contact/Contact';
import Navbar from '../pages/Navbar/Navbar';
/* import History from '../pages/History/History'; */
import Gallery from '../pages/Gallery/Gallery';
import References from '../pages/References/References';
import Footer from '../pages/Footer/Footer';
import { GalleryData } from '../pages/Gallery/Gallery-Data';
import './Main.css';
import HouseContent from './HouseContent/HouseContent';
import Feedback from './Feedback/Feedback';

function Main() {
  return (
    <section className='main-container'>
        <Navbar/>
        <Home />
        <About />
        <HouseContent />
        <References/>
        <Gallery slides={GalleryData}/>
        <Feedback />
        {/* <History /> */}
        <Contact />
        <Footer/>
    </section>
  )
}

export default Main