import React from 'react';
import { AiOutlinePlusCircle } from "react-icons/ai";
import { useNavigate } from 'react-router';
import './History.css'


function History () {
    const navigator = useNavigate();

    return (
        <section className='history-container'>
            <div className='history-content' id='history'>
                <h1>History</h1>
                <div className="explanation-wrapper">
                   <div className="explanation-content">
                    <h5 className="transparent-bg">Nordeste</h5>
                    <div className="text_plus-wrapper"> 
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque 
                            laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi 
                            architecto beatae vitae dicta sunt explicabo.
                            </p>
                            <AiOutlinePlusCircle fill='#e9d856' className='plus-icon' size={28} onClick={() => navigator('/nordeste')}/>
                        </div> 
                    </div>
                    <div className="explanation-content">
                    <h5 className="transparent-bg">S. Pedro</h5>
                    <div className="text_plus-wrapper"> 
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque 
                            laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi 
                            architecto beatae vitae dicta sunt explicabo.
                            </p>
                            <AiOutlinePlusCircle fill='#e9d856' className='plus-icon' size={28} onClick={() => navigator('/spedro')}/>
                        </div> 
                    </div>
                    <div className="explanation-content">
                    <h5 className="transparent-bg">Sr. Paulo family</h5> 
                    <div className="text_plus-wrapper"> 
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque 
                            laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi 
                            architecto beatae vitae dicta sunt explicabo.
                            </p>
                            <AiOutlinePlusCircle fill='#e9d856' className='plus-icon' size={28} onClick={() => navigator('/srpaulofamily')}/>
                        </div> 
                    </div> 
                </div>
            </div>
        </section>
        
    );
};

export default History;