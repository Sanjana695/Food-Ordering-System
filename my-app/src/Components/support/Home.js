import Button from "../buttons/Button";
import React from 'react';
import { NavLink } from 'react-router-dom';
import bg from '../../utils/images/bg.jpg';

function Home() {

    const mystyle = {
        backgroundImage: `url(${bg})`,
        width: "100%",
        height: "81.5vh"
    }

    return (<>
        <div className="home" style={mystyle}>
            <div className="container">
                <h1>Foodies</h1>
                <p>Pakistani Food at a click!</p>
                <NavLink to="/menu"><Button title="Order Now"  cls='order-now' /></NavLink>
            </div>
        </div>
    </> 
    );
}

export default Home;