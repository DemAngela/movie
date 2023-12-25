import React from 'react';
import logo from '../assets/logo-gray.png'
import './Footer.css'

const Footer = () => {
    return (
        <div className={'footer'}>
            <div className={'container'}>
                <div className={'footer-logo'}>
                    <img src={logo} alt="" className={'footerImg'}/>
                    <h6 className={'footerText'}>2023</h6>
                </div>
            </div>
        </div>
    );
};

export default Footer;