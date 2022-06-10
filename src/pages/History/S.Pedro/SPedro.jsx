import React from 'react';
import { useNavigate } from 'react-router';
import './SPedro.css';


function SPedro() {
    const navigator = useNavigate();

    return (
        <div className='activities-container'>
            <div className="activities-content">
               <h1>São Pedro</h1>  
               <button onClick={() => navigator(-1)} >Back</button>
            </div>
        </div>
    );
}

export default SPedro;