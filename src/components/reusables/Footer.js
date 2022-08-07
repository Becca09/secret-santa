import React from 'react';
import twitter from "../../assets/twitter.svg"
import facebook from "../../assets/facebook.svg"
import instagram from "../../assets/instagram.svg"

const Footer = () => {
    return (
        <div className="footer">
            <div className="footerImages">
                <img src={facebook} width={300} alt="img"/>
                <img src={twitter} width={300} alt="img"/>
                <img src={instagram} width={300} alt="img"/>
            </div>
            <ul>

               <a>info</a>
                <li><a>Support</a></li>
                <li><a>Marketing</a></li>
            </ul>
            <p>© 2022 Parenthesis</p>
        </div>
    );
};

export default Footer;