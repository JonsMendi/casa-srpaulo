import React from 'react';
import { useNavigate } from 'react-router';
import './Nordeste.css';


function Nordeste() {
    const navigator = useNavigate();

    return (
        <div className='activities-container'>
            <div className="activities-content">
               <h1>Nordeste</h1>  
               <button onClick={() => navigator(-1)}>Back</button>
            </div>
        </div>
    );
}

export default Nordeste;