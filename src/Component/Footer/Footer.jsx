import React from 'react';
import './Footer.css'
import {FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn} from 'react-icons/fa'
import {Link} from 'react-router-dom'
const Footer = () => {
    return (
        <footer>
           <div className='container'>
            <div className='row'>
                <div className='col-md-4'>
                    <div className='footer-text'>
                        <img className='footer-logo' src="/img/Logo/white_logo.png" alt='Not Found'/>
                        <p>Some footer text about the  Agency. Just a little description to help people understand you better</p>
                        <ul className='social-icons'>
                            <li><a href=''><FaFacebookF/></a></li>
                            <li><a href=''><FaTwitter/></a></li>
                            <li><a href=''><FaInstagram/></a></li>
                            <li><a href=''><FaLinkedinIn/></a></li>
                        </ul>
                    </div>
                </div>
                <div className='col-md-4'>
                    <div className='footer-text'>
                        <h5>Quick Links</h5>
                        <ul className='quick-link'>
                            <li> <Link to="/services">Services</Link> </li>
                            <li> <Link to="/portfolio">Portfolio</Link> </li>
                            <li> <Link to="/aboutUs">About Us</Link> </li>
                            <li> <Link to="/contactUs">Contact Us</Link> </li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-4">
                        <div className='footer-text'>
                            <h5>Address</h5>
                            <address>
                                Design Agency Head Office. <br /> Airport Road <br /> Jashore, Bangladesh
                            </address>
                        </div>
                </div>
            </div>
            <div>
                <p className='copyright'>Copyright Design Agency {new Date().getFullYear() }</p>
            </div>
           </div>
        </footer>
    );
};

export default Footer;