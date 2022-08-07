import React from 'react';
import logo from '../../assets/logo.png'
import Button from "../reusables/Button";
import "../reusables/resusables.css"

const NavBar = (props) => {
    return (
        <div className="navbar">
            <img src={logo} width={100} height={40}  alt="logo" className="logo"/>
                <Button onClick={()=>props.marker(!props.markerValue)} type={"button"} buttonStyle={"solid"}>{props.markerValue ? "Create Event ": "Go Back"}</Button>
        </div>
    );
};

export default NavBar;