import React, {useState, useEffect} from "react";
import Container from 'react-bootstrap/Container';
import './Home.css';

function Home () {
    //this variable contains the navigation from react-router. Anytime that we want to create links independent from the Routes, we use useNavigation()
    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => { setOffsetY(window.pageYOffset) };

    useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll)
  }, []);


    return (
        <Container className="home-container" id="home">
            <h1 className="home-title">Home</h1>
            <div className="round-hole" style={{transform: `translateY(${offsetY * 0.5}px)`}}></div>
            <div className="round-hole2" style={{transform: `translateY(${offsetY * 0.8}px)`}}></div>
        </Container>
    )
}

export default Home;