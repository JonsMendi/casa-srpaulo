import React from 'react';
import { useNavigate } from 'react-router';
import './Attractions.css';


function Attractions() {
    const navigator = useNavigate();

    return (
        <div className='activities-container'>
            <div className="activities-content">
               <h1>Attractions</h1>  
               <button onClick={() => navigator(-1)} >Back</button>
            </div>
        </div>
    );
}

export default Attractions;