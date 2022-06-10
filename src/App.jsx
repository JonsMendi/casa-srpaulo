import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import ErrorPage from './pages/ErrorPage/Error-Page';
import NavigationBar from './pages/Navbar/Navbar';
import History from './pages/History/History';
import Gallery from './pages/Gallery/Gallery';
import References from './pages/References/References';
import Footer from './pages/Footer/Footer'
import { GalleryData } from './pages/Gallery/Gallery-Data';
import { Container } from 'react-bootstrap';

function App() {
  

  return (
    <Container className='app-container'>
      <div className='app-div-wrapper'>
        <Router>
          <NavigationBar/>
      {/* Routes defined under. Important to remember that default path ('/') need to be in the top and ('*') in the bottom*/}
          {/* <Routes>
            <Route path='/' element={<Home  />}/>
            <Route path='/about' element={<About />}/>
            <Route path='/contact' element={<Contact />}/>
            <Route path='/history' element={<History />}/>
            <Route path='/gallery' element={<Gallery />}/>
            <Route path='/references' element={<References />}/>
            <Route path='*' element={<ErrorPage  />}/>
          </Routes> */}
          <Home />
          <About />
          <Contact />
          <References/>
          <Gallery slides={GalleryData}/>
          <History />
          <Footer/>
        </Router>
      </div>
    </Container>
    
      
    
  );
}

export default App;
