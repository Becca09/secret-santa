import React from 'react';
import logo from '../../assets/logo.png'
import Button from "../reusables/Button";
import "../reusables/resusables.css"

const NavBar = () => {
    return (
        <div className="navbar">
            <img src={logo} width={100} height={40}  alt="logo" className="logo"/>
                <Button onClick={onclick} type={"button"} buttonStyle={"solid"}>Generate Matches</Button>
        </div>
    );
};

export default NavBar;