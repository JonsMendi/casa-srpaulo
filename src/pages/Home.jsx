import React from "react";
import  { useNavigate } from 'react-router-dom';

function Home () {
    //this variable contains the navigation from react-router. Anytime that we want to create links independent from the Routes, we use useNavigation()
    let navigate = useNavigate();


    return (
        <div>
            <h1>Home</h1>
        </div>
    )
}

export default Home;