import React from 'react';
import { useNavigate } from 'react-router';
import './SrPauloFamily.css';


function SrPauloFamily() {
    const navigator = useNavigate();

    return (
        <div className='activities-container'>
            <div className="activities-content">
               <h1>Sr. Paulo Family</h1>  
               <button onClick={() => navigator(-1)} >Back</button>
            </div>
        </div>
    );
}

export default SrPauloFamily;