import React from 'react';
import { useNavigate } from 'react-router';
import './Activities.css';


function Activities() {
    const navigator = useNavigate();

    return (
        <div className='activities-container'>
            <div className="activities-content">
               <h1>Activities</h1>  
               <button onClick={() => navigator(-1)} >Back</button>
            </div>
        </div>
    );
}

export default Activities;