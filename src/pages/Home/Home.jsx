import React from "react";
import { ButtonContact, ButtonGallery } from '../Button/Button';
import './Home.css';

function Home () {    

    return (
        <section className="home-container" id="home">
            <div className="home-content">
                <div className="all-content-wrapper"></div>
                <div className="content-wrapper">
                   <h1 className="home-title">Casa do Sr. Paulo</h1>
                   <p className="home-title" style={{color: 'white'}}>Guest House</p>
                    <div className="button-wrapper">
                        <ButtonContact 
                            className='btn'
                            buttonStyle='btn--outline'
                            buttonSize='btn--large'
                        >
                        Reserve</ButtonContact>
                        <ButtonGallery 
                            className='btn'
                            buttonStyle='btn--primary'
                            buttonSize='btn--large'
                        >
                        Watch the House</ButtonGallery> 
                    </div> 
                </div>
                {/* <div className="bubble"></div> */}
            </div>
           
            {/* <div className="curve"></div> */}
        </section>
    )
}

export default Home;