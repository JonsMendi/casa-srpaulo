import React from "react";
import Container from 'react-bootstrap/Container';
import { ButtonContact, ButtonGallery } from '../Button/Button';
import './Home.css';

function Home () {    

    return (
        <Container className="home-container" id="home">
            <div className="home-content">
                <h1 className="home-title">Casa do Sr. Paulo</h1>
                 <div className="bubble"></div>
                <ButtonContact 
                    className='btns'
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'
                    >
                    Reserve</ButtonContact>
                <ButtonGallery 
                    className='btns'
                    buttonStyle='btn--primary'
                    buttonSize='btn--large'
                    >
                    Watch the House</ButtonGallery>
            </div>
           
            {/* <div className="curve"></div> */}
        </Container>
    )
}

export default Home;