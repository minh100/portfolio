import React from 'react'
import '../Css/Contact.css';

function Contact() {
    return (
        <div id="contact-page" className="contact-container">
            <div className="contact-content">
                <div className="contact-content-inner">
                    <h2 className="contact-title">
                        Contact Me
                    </h2>
                    <hr className="space"></hr>
                </div>
            </div>
            <div className="contact-content">
                <div className="contact-content-inner">
                    <div className="contact-info">
                        <i className="fab fa-linkedin-in fa-2x"></i>
                        <a className="text"
                            href="https://www.linkedin.com/in/minh-truong-1961a01a1/"
                            target="_blank"
                            rel="noopener noreferrer">
                            Linkedin
                        </a>
                    </div>
                    <div className="contact-info">
                        <i className="fab fa-github fa-2x"></i>
                        <a className="text"
                            href="https://github.com/minh100"
                            target="_blank"
                            rel="noopener noreferrer">
                            Github
                            </a>
                    </div>
                    <div className="contact-info">
                        <i className="fas fa-at fa-2x"></i>
                        <a className="text" href="mailto:minh100@live.unc.edu">Email</a>
                    </div>
                    <div className="contact-info">
                        <i className="fas fa-file fa-2x"></i>
                        <a className="text"
                            href="https://drive.google.com/file/d/1ZmHHbRjCIILF7sOQ_9r11bHHCpJlQaBE/view?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer">
                            Resume
                            </a>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Contact;