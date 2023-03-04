import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (
        <footer className="mt-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 mt-3 mb-3">
                        <p className="text-center">&copy; Copyright Gurdeep Bangar. All Rights Reserved</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;