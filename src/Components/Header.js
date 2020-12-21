import React from 'react'
import '../Css/Header.css';

function Header(){

    return (
        <header>
            <div id="/" className="header-content">
                <div className="header-content-inner">
                    <h1 id="name">Minh Truong</h1>
                    <hr></hr>
                    <p id="title">CS Student - Aspiring Software Engineer</p>
                </div>
            </div>
        </header>
    )
}

export default Header;