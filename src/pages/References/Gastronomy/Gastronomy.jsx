import React from 'react';
import { useNavigate } from 'react-router';
import './Gastronomy.css';


function Gastronomy() {
    const navigator = useNavigate();

    return (
        <div className='activities-container'>
            <div className="activities-content">
               <h1>Gastronomy</h1>  
               <button onClick={() => navigator(-1)} >Back</button>
            </div>
        </div>
    );
}

export default Gastronomy;