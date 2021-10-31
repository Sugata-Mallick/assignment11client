
import React from "react";
import './Footer.css'
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


import { faMapMarkedAlt, faPhoneVolume } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
    return (
        <div>
            <div className="footer-container">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5">
                            <div className="left-container text-start">
                                <h1>Saint Martin Tour</h1>

                                <div className="icons-container d-flex text-center ">
                                    <div className="icon">
                                        <i class="fab fa-youtube"></i>
                                    </div>
                                    <div className="icon">
                                        <i class="fab fa-facebook-square"></i>
                                    </div>
                                    <div className="icon">
                                        <i class="fab fa-instagram-square"></i>
                                    </div>
                                    <div className="icon">
                                        <i class="fab fa-twitter"></i>
                                    </div>
                                </div>

                                <p className="mt-4 ">
                                    <small>
                                        *The island is locally known as Narikel Jinjira because there are plenty of coconut trees on the island of St. Martin..
                                    </small>
                                </p>

                                <p className="mt-5">
                                    <small>Zemez © . All rights reserved.</small>
                                </p>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="footer-menu-container">
                                <ul>
                                    <li className="footer-menu">Home</li>
                                    <li className="footer-menu">Services</li>
                                    ``
                                    <li className="footer-menu">Contact us</li>
                                    <li className="footer-menu"> About us</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="right-footer-container">
                                <h3>Sign up for the newsletter</h3>
                                <input
                                    className="footer-input"
                                    type="text"
                                    placeholder="Enter Email"
                                />
                                <div className="phone d-flex align-items-center justify-content-center mt-4">
                                    <div className="foter-phone-icon">
                                        <FontAwesomeIcon icon={faPhoneVolume} />
                                    </div>
                                    <div>
                                        <h5>01811177722</h5>
                                    </div>
                                </div>
                                <div className="map d-flex align-items-center justify-content-center">
                                    <div className="foter-phone-icon">
                                        <FontAwesomeIcon icon={faMapMarkedAlt} />
                                    </div>
                                    <div>
                                        <p>
                                            Northeastern Part Of Bay of Bengal  ,
                                            <br /> 9 km of Coxs Bazar-Teknaf
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Footer;