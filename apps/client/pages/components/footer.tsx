import React from 'react';
import Link from 'next/link';
// import router from 'next/router';

const Footer = (props: any) => {
    console.log(props);

    return (
        <div>
            <footer id="footer_block">
                <div className="footer-menu-wrapper">
                    <div className="footer-logo">
                        <Link href="./">
                            <img src="/img/logo/logo-footer.svg" alt="Footer Logo" />
                        </Link>
                    </div>
                    <div className="footer-nav">
                        <div className="social">
                            <Link href="#">
                                <img src="/img/fontawsome--instagram--1@1x.png" alt="social icon" />
                            </Link>
                            <Link href="#">
                                <img src="/img/icon-simple-tiktok-1@1x.png" alt="social icon" />
                            </Link>
                            <Link href="#">
                                <img src="/img/icon-awesome-telegram-plane-9@1x.png" alt="social icon" />
                            </Link>
                        </div>
                        <ul className="footer-nav-items">
                            <li>
                                <Link href="/mentionsLegales">Mentions légales</Link>
                            </li>
                            <li>
                                <Link href="/cgu">CGU</Link>
                            </li>
                            <li>
                                <Link href="/cgv">CGV</Link>
                            </li>
                            <li>
                                <Link href="/politiqueConfidentialite">Politique de confidentialité</Link>
                            </li>
                            <li>
                                <Link href="#">Contact</Link>
                            </li>
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
