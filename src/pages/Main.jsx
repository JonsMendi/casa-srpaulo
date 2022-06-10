import React from 'react';
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import Contact from '../pages/Contact/Contact';
import NavigationBar from '../pages/Navbar/Navbar';
import History from '../pages/History/History';
import Gallery from '../pages/Gallery/Gallery';
import References from '../pages/References/References';
import Footer from '../pages/Footer/Footer';
import { GalleryData } from '../pages/Gallery/Gallery-Data';
import './Main.css';

function Main() {
  return (
    <section className='main-container'>
        <NavigationBar/>
        <Home />
        <About />
        <Contact />
        <References/>
        <Gallery slides={GalleryData}/>
        <History />
        <Footer/>
    </section>
  )
}

export default Main