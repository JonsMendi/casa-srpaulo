import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate} from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import ErrorPage from './pages/Error-Page';
import NavigationBar from './pages/Navbar';
import History from './pages/History';
import Gallery from './pages/Gallery';
import References from './pages/References';
import RoundImages from './pages/RoundImages';
import { Container } from 'react-bootstrap';

function App() {

  return (
    <Container className='app-container'>
      <div className='app-div-wrapper'>
        <Router>
      <NavigationBar/>
      {/* Routes defined under. Important to remember that default path ('/') need to be in the top and ('*') in the bottom*/}
      <Routes>
        <Route path='/' element={<Home  />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/history' element={<History />}/>
        <Route path='/gallery' element={<Gallery />}/>
        <Route path='/references' element={<References />}/>
        <Route path='*' element={<ErrorPage />}/>
      </Routes>
    </Router>
      </div>
    </Container>
    
      
    
  );
}

export default App;
