import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { NavLink } from 'react-router-dom';
import foodies from '../../utils/images/foodies.png';

function NavBar({setShow,size}) {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <NavLink className="navbar-brand" to="#">
                    <img src={foodies} alt="logo" width={100}/>
                </NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav h3">
                        <li className="nav-item active">
                            <NavLink className="nav-link" to="/">Home</NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link" to="menu">Menu</NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link" to="login">Login</NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link" to="registration">Registration</NavLink>
                        </li>

                        <li className="nav-item"onClick={()=>setShow(false)}>
                            <NavLink className="nav-link" to="/cart"><i class="zmdi zmdi-shopping-cart"></i>{size}</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default NavBar;