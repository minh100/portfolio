import React from 'react'
import '../Css/About.css';

function About() {
    return (
        <div id="about-page" className="about-container">
            <div className="about-content">
                <div className="about-content-inner">
                    <div className="about-title-container">
                        <h2 className="about-title">
                            About Me
                        </h2>
                        <hr className="space"></hr>
                        <p className="about-description">
                            Hello! My name is Minh Truong. I am currently a sophomore at the University of North Carolina at Chapel Hill
                            pursuing a B.S. in Computer Science. I am confident in my abilities
                            and am determined to produce meaningful work while positively contributing to the workplace culture.
                        </p>
                        <hr style={{display: "none"}}></hr>
                        <p className="about-description">
                            Aside from CS, I enjoy trying new things and being with friends. Some things I like to do are play games (video/board), 
                            play volleyball, learn and enjoy Korean culture, and watch horror movies although only with friends :) 
                        </p>
                        <a id="sublink-to-contact" href="/">Contact Me Here!</a>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default About;