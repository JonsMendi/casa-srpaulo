import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import ErrorPage from './pages/ErrorPage/Error-Page';
import NavigationBar from './pages/Navbar/Navbar';
import Activities from './pages/References/Activities/Activities';
import Main from './pages/Main';
import Attractions from './pages/References/Attractions/Attractions';
import Gastronomy from './pages/References/Gastronomy/Gastronomy';
import Nordeste from './pages/History/Nordeste/Nordeste';
import SPedro from './pages/History/S.Pedro/SPedro';
import SrPauloFamily from './pages/History/Sr.PauloFamily/SrPauloFamily';

function App() {

  return (
    <section className='app-container'>
      <div className='app-div-wrapper'>
        <Router>
          <NavigationBar/>
      {/* Routes defined under. Important to remember that default path ('/') need to be in the top and ('*') in the bottom*/}
          <Routes>
            <Route path='/' element={<Main />}/>
            <Route path='/activities' element={<Activities />}/>
            <Route path='/attractions' element={<Attractions />}/>
            <Route path='/gastronomy' element={<Gastronomy />}/>
            <Route path='/nordeste' element={<Nordeste />}/>
            <Route path='/spedro' element={<SPedro />}/>
            <Route path='/srpaulofamily' element={<SrPauloFamily />}/>
            <Route path='*' element={<ErrorPage  />}/>
          </Routes>
        </Router>
      </div>
    </section>
    
      
    
  );
}

export default App;
