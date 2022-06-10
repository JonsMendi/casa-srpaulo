import React from 'react';
import { AiOutlinePlusCircle } from "react-icons/ai";
import {useNavigate} from 'react-router';
import './References.css';

function References  ()  {
    const navigator = useNavigate();


    return (
        <section className="references-container">
            <div className='references-content' id='references'>
                <h1>References</h1>
                <div className="explanation-wrapper">
                    <div className="explanation-content">
                        <h5 className="transparent-bg">Activities</h5>
                        <div className="text_plus-wrapper"> 
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque 
                            laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi 
                            architecto beatae vitae dicta sunt explicabo.
                            </p>
                            <AiOutlinePlusCircle fill='#e9d856' className='plus-icon' size={28} onClick={() => navigator('/activities')} />
                        </div> 
                    </div>
                    <div className="explanation-content">
                        <h5 className="transparent-bg">Gastronomy</h5>
                        <div className="text_plus-wrapper"> 
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque 
                            laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi 
                            architecto beatae vitae dicta sunt explicabo.
                            </p>
                            <AiOutlinePlusCircle fill='#e9d856' className='plus-icon' size={28} onClick={() => navigator('/gastronomy')} />
                        </div> 
                    </div>
                    <div className="explanation-content">
                        <h5 className="transparent-bg">Attractions</h5>
                        <div className="text_plus-wrapper"> 
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque 
                            laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi 
                            architecto beatae vitae dicta sunt explicabo.
                            </p>
                            <AiOutlinePlusCircle fill='#e9d856' className='plus-icon' size={28} onClick={() => navigator('/attractions')} />
                        </div>  
                    </div> 
                </div>
            </div> 
        </section>
        
    );
};

export default References;