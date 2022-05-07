import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import router from 'next/router';
// import router from 'next/router';

const Footer = (props: any) => {
    console.log(props);
    const [isFooterWarning, setIsFooterWarning] = useState(true);

    useEffect(() => {
        if (router.pathname == '/') setIsFooterWarning(false);
    }, []);

    return (
        <div>
            <footer id="footer_block">
                {isFooterWarning == true ? (
                    <div className="footer-text text-center">
                        <p>
                            <strong>Tout investissement comporte un risque.</strong> Les utilisateurs doivent faire
                            leurs propres recherches et n’investir que dans les limites de leurs capacités financières.
                            Notre contenu est à titre pédagogique et ne confère aucun conseil professionnel en
                            investissement.
                        </p>
                    </div>
                ) : null}
                <div className="flex footer-menu-wrapper">
                    <div className="footer-logo">
                        <Link href="./">
                            <img
                                src="/img/logo/6fire-footer.png"
                                alt="Footer Logo"
                                className="invisible hidden md:block md:visible"
                            />
                        </Link>
                    </div>
                    <div className="footer-nav">
                        <div className="grid grid-cols-2">
                            <Link href="./">
                                <img
                                    src="/img/logo/6fire-footer.png"
                                    alt="Footer Logo"
                                    className="md:invisible md:hidden block visible"
                                />
                            </Link>
                            <div className="social flex pl-[15px] grow justify-end items-center md:col-span-2">
                                <Link href="https://www.instagram.com/6fireinvest/">
                                    <img
                                        src="/img/fontawsome--instagram--1@1x.png"
                                        alt="social icon"
                                        className="w-[21px] h-[21px]"
                                    />
                                </Link>
                                <Link href="https://t.me/+qLDAoR3i3v43Mjdk">
                                    <img
                                        src="/img/icon-awesome-telegram-plane-9@1x.png"
                                        alt="social icon"
                                        className="w-[21px] h-[21px]"
                                    />
                                </Link>
                                <Link href="https://www.tiktok.com/@haik.13?lang=fr">
                                    <img
                                        src="/img/icon-simple-tiktok-1@1x.png"
                                        alt="social icon"
                                        className="w-[21px] h-[21px]"
                                    />
                                </Link>
                            </div>
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
