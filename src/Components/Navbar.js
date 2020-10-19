import React, { useState } from 'react';
import '../Css/Navbar.css';
import Logo from '../Logo.png';

function Navbar() {

    const [open, toggleOpen] = useState(false);

    function handleButtonClick() {
        toggleOpen(!open);
    };

    return (
        <div className="navbar">
            <div className="navbar-section">
                <img id="logo" src={Logo} alt="logo" />
                <div className="links">
                    <a id="right-border" className="link" href="#about-page">About Me</a>
                    <a id="right-border" className="link" href="#project-page">Projects</a>
                    <a className="link" href="#contact-page">Contact</a>
                    <div className="mobile" onClick={handleButtonClick}>
                        <i className={open ? 'fas fa-times fa-lg' : 'fas fa-bars fa-lg'}></i>
                    </div>
                </div>
                <ul className={open ? 'nav-menu active' : 'nav-menu'}>
                    <a className="mobile-link" href="#about-page">
                        About Me
                    </a>
                    <a className="mobile-link" href="#project-page">
                        Projects
                    </a>
                    <a className="mobile-link" href="#contact-page">
                        Contact
                    </a>
                </ul>

            </div>

        </div>
    )
}

export default Navbar;

