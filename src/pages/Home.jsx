import React from "react";
import RoundImages from "./RoundImages";
import  { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container'
import './Home.css';

function Home () {
    //this variable contains the navigation from react-router. Anytime that we want to create links independent from the Routes, we use useNavigation()
    let navigate = useNavigate();


    return (
        <Container className="home-container">
            <h1 className="home-title">Home</h1>
            <RoundImages />
        </Container>
    )
}

export default Home;