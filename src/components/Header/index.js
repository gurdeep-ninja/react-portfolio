import React from 'react';
import { NavLink } from 'react-router-dom';
import { Nav, Navbar} from 'react-bootstrap';
import logoSrc from '../../assets/images/logo.png'
function Header() {
    return (
        <header>
             <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="p-3">
                <NavLink className="navbar-brand" to="/" end>
                    <img src={logoSrc} alt="Gurdeep Bangar logo image" className="logo" />
                </NavLink>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id ="responsive-navbar-nav">
                    <Nav.Link as={NavLink} to="/">
                        New

                    </Nav.Link>
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

                </Navbar.Collapse>
            </Navbar>
        </header>
    )
}

export default Header;