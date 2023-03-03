import React from 'react';
import './style.css';
function Nav(){
    return(
        <header>
     <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <a className="navbar-brand" href="/">
                    <img src="./images/logo.png" alt="Gurdeep Bangar logo image" className="logo"/>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="#work-section">Work</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#skills-section">Skills</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contact-section">About me</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contact-section">Contact me</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Nav;