import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (
        <footer className="mt-5">
            <div className="container">
                <div className="row">

                    <div className="col-md-6 mb-md-0 mb-3">
                        <a href="https://www.edx.org/" className="btn btn-dark w-100">Click Here To Visit the EdX
                            Website</a>
                    </div>

                    <div className="col-md-6">
                        <ul className="contact-details">
                            <li className="">Email <a href="mailto:gurdeep.bangar@proton.me"><FontAwesomeIcon icon={faEnvelope} /></a></li>
                            <li className="">GitHub <a href="https://github.com/gurdeep-ninja/"><FontAwesomeIcon icon={faGithub} /></a></li>
                            <li className="">LinkedIn <a href="https://www.linkedin.com/in/gurdeep-bangar-393543259/"><FontAwesomeIcon icon={faLinkedin} /></a></li>
                        </ul>
                    </div>

                    <div className="col-md-12 mt-3 mb-3">
                        <p className="text-center">&copy; Copyright Gurdeep Bangar. All Rights Reserved</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;