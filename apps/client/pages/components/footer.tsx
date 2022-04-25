import React from 'react';
import Image from 'next/image';
// import router from 'next/router';

const Footer = (props: any) => {
    console.log(props);

    return (
        <div>
            <footer id='footer_block'>
                <div className="footer-menu-wrapper">
                    <div className="footer-logo">
                        <a href="./"><img src="/img/logo/logo.svg" alt="Footer Logo" /></a>
                    </div>
                    <div className="footer-nav">
                        <div className="social">
                            <a href="#"><img src="/img/fontawsome--instagram--1@1x.png" alt="social icon" /></a>
                            <a href="#"><img src="/img/icon-simple-tiktok-1@1x.png" alt="social icon" /></a>
                        </div>
                        <ul className='footer-nav-items'>
                            <li><a href="/mentionsLegales">Mentions légales</a></li>
                            <li><a href="/cgu">CGU</a></li>
                            <li><a href="/cgv">CGV</a></li>
                            <li><a href="/politiqueConfidentialite">Politique de confidentialité</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                </div>
                <div className="copyright">
                    <p>Ⓒ 2022 - 6FIRE INVEST</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
