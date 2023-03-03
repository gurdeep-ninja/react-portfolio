import React from 'react';
import { NavLink } from 'react-router-dom';
import logoSrc from '../../assets/images/logo.png'
function Nav() {
    return (
        <header>
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <NavLink className="navbar-brand" to="/" end>
                    <img src={logoSrc} alt="Gurdeep Bangar logo image" className="logo" />
                </NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/projects" end>Projects</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about" end>About Me</NavLink>
                        </li>                        
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/contact" end>Contact me</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Nav;