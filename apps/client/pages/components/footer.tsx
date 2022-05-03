import React from 'react';
import Link from 'next/link';
// import router from 'next/router';

const Footer = (props: any) => {
    console.log(props);

    return (
        <div>
            <footer id="footer_block">
                <div className="footer-text">
                    <p>Les investissements sont risqués. Les investissements sont risqués par nature, les utilisateurs doivent faire leurs propres recherches avant d’entreprendre toute action et n’investir que dans les limites de leurs capacités financières. Cet article ne constitue pas un conseil en investissement.</p>
                </div>
                <div className="footer-menu-wrapper">
                    <div className="footer-logo">
                        <Link href="./">
                            <img src="/img/logo/6fire-footer.png" alt="Footer Logo" />
                        </Link>
                    </div>
                    <div className="footer-nav">
                        <div className="social">
                            <Link href="https://www.instagram.com/6fireinvest/">
                                <img src="/img/fontawsome--instagram--1@1x.png" alt="social icon" />
                            </Link>
                            <Link href="https://t.me/+qLDAoR3i3v43Mjdk">
                                <img src="/img/icon-awesome-telegram-plane-9@1x.png" alt="social icon" />
                            </Link>
                            <Link href="https://www.tiktok.com/@haik.13?lang=fr">
                                <img src="/img/icon-simple-tiktok-1@1x.png" alt="social icon" />
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
