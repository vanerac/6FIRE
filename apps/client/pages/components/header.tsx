import React from 'react';
import Image from 'next/image';
import router from 'next/router';
import $ from 'jquery';
import LoginPopup from './login';

/* Hamburger toggle script */
const handleForm = () => {
    $('.login_popup_wrapper').toggleClass('open');
};
/* Mobile mnue toggle script */
const mobileToggle = () => {
    $('.nav-item-wrap').toggleClass('open');
};

const Header = (props: any) => {
    console.log(props);

    return (
        <>
            <LoginPopup />

            <div>
                {/* Hamburger icon style */}
                <input id="menu__toggle" type="checkbox" />
                <label
                    onClick={() => {handleForm(); }}
                    className="menu__btn"
                    htmlFor="menu__toggle">
                    <span></span>
                </label>
                {/* Hamburger icon END */}

                {/* Hamburger mobile */}
                    <div className="mobile-hamburger" onClick={() => {mobileToggle(); }}>menu</div>
                {/* Hamburger mobile end */}

                <div className="header-top">
                    {/* <div className="header-rectangle_1"></div>
            <div className="header-logo">
                <div className="header-image">
                    <Image layout="fill" src="/img/effect-13@1x.png" />
                </div>
            </div>

            {props.isEspaceTradingCrypto == true ? (
                <div className="header-menu">
                    <div className="header-rectangle_2"></div>
                    <div className="header-cryptommonnaies-R5LSYq">
                        <div className="header-club-premium-rofYOU lato-normal-white-14px">Cryptommonaies</div>
                        <div className="header-icon-actif-rofYOU">
                            <div className="header-groupe-1490-2aycJd">
                                <Image layout="fill" src="/img/group-1490-1@1x.png" />
                            </div>
                        </div>
                    </div>

                    <div className="header-nft-R5LSYq">
                        <div className="header-trading-PNeNRG lato-normal-white-14px">NFT</div>
                        <div className="header-icon-PNeNRG">
                            <div className="header-ellipse-17691-Q6aYQM"></div>
                            <div className="header-nft-Q6aYQM">
                                <Image layout="fill" src="/img/nft-1@1x.png" />
                            </div>
                        </div>
                    </div>
                    <div className="header-play-to-earn-R5LSYq">
                        <div className="header-trading-pcy4yC lato-normal-white-14px">Play to Earn</div>
                        <div className="header-icon-pcy4yC">
                            <div className="header-ellipse-17691-ti8Jhx"></div>
                            <div className="header-gamepad-ti8Jhx">
                                <div className="header-trac-1021-P5lkcx">
                                    <Image layout="fill" src="/img/path-1021-1@1x.png" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="header-immobiler-R5LSYq">
                        <div className="header-trading-qnUGH1 lato-normal-white-14px">Immobilier</div>
                        <div className="header-icon-qnUGH1">
                            <div className="header-ellipse-17691-WR19dA"></div>
                            <div className="header-groupe-1502-WR19dA">
                                <div className="header-groupe-1504-1uxZ3P">
                                    <Image layout="fill" src="/img/group-1504-1@1x.png" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="header-e-commerce-R5LSYq">
                        <div className="header-trading-fftvIH lato-normal-white-14px">E-Commerce</div>
                        <div className="header-icon-fftvIH">
                            <div className="header-ellipse-17692-Qw8ovD"></div>
                            <div className="header-website-Qw8ovD">
                                <Image layout="fill" src="/img/website-1@1x.png" />
                            </div>
                        </div>
                    </div>
                    <div className="header-autres-thmes-R5LSYq">
                        <div className="header-autres-thmatiques-PxHQPI">
                            <div className="header-trading-MWZdyg lato-normal-white-14px">Autres thématiques</div>
                        </div>
                    </div>
                    <div
                        onClick={() => {
                            router.push('/trading');
                        }}
                        className="header-trading-R5LSYq">
                        <div className="header-rectangle-3556-O3OwxW"></div>
                        <div className="header-trading-O3OwxW lato-bold-white-14px">
                            Espace <br />
                            Trading &amp; Crypto
                        </div>
                    </div>
                </div>
            ) : (
                <div className="header-trading-crypto-menu-7V8uSq">
                    <div className="header-trading-crypto-rectangle-3484-LdomJT"></div>
                    <div className="header-trading-crypto-espace-trading-crypto-LdomJT">
                        <div className="header-trading-crypto-formations-8XkrAY lato-normal-white-14px">
                            Espace Trading &amp; Crypto
                        </div>
                        <img className="header-trading-crypto-ligne-8-8XkrAY hidden" src="img/line-8-22@1x.png" />
                    </div>
                    <div
                        onClick={() => router.push('/tradingFormations')}
                        className="header-trading-crypto-formations-LdomJT">
                        <div className="header-trading-crypto-club-premium-hbskOF lato-normal-white-14px">
                            Formations
                        </div>
                        <img className="header-trading-crypto-ligne-8-hbskOF" src="img/line-8-23@1x.png" />
                        <div className="header-trading-crypto-icon-actif-hbskOF">
                            <div className="header-trading-crypto-ellipse-17693-hleXe8"></div>
                            <img
                                className="header-trading-crypto-font-awsome-graduation-cap-hleXe8"
                                src="img/fontawsome--graduation-cap--2@1x.png"
                            />
                        </div>
                    </div>
                    <div onClick={() => router.push('/tradingForex')} className="header-trading-crypto-forex-LdomJT">
                        <div className="header-trading-crypto-formations-mrKxvG lato-normal-white-14px">Forex</div>
                        <img className="header-trading-crypto-ligne-8-mrKxvG hidden" src="img/line-8-12@1x.png" />
                        <div className="header-trading-crypto-icon-actif-mrKxvG">
                            <div className="header-trading-crypto-ellipse-17693-c2xpkG"></div>
                            <img
                                className="header-trading-crypto-font-awsome-dollar-sign-c2xpkG"
                                src="img/fontawsome--dollar-sign--2@1x.png"
                            />
                        </div>
                    </div>
                    <div
                        onClick={() => router.push('/cryptoWallet')}
                        className="header-trading-crypto-crypto-wallet-LdomJT">
                        <div className="header-trading-crypto-formations-YzLUiC lato-normal-white-14px">
                            Crypto Wallet
                        </div>
                        <img className="header-trading-crypto-ligne-8-YzLUiC hidden" src="img/line-8-12@1x.png" />
                        <div className="header-trading-crypto-icon-actif-YzLUiC">
                            <div className="header-trading-crypto-ellipse-17693-ijtOC6"></div>
                            <img
                                className="header-trading-crypto-font-awsome-wallet-ijtOC6"
                                src="img/fontawsome--wallet--2@1x.png"
                            />
                        </div>
                    </div>
                    <div onClick={() => router.push('botTrading')} className="header-trading-crypto-bot-trading-LdomJT">
                        <div className="header-trading-crypto-formations-RVZ8dC lato-normal-white-14px">
                            Bot Trading
                        </div>
                        <img className="header-trading-crypto-ligne-8-RVZ8dC hidden" src="img/line-8-12@1x.png" />
                        <div className="header-trading-crypto-icon-actif-RVZ8dC">
                            <div className="header-trading-crypto-ellipse-17693-uCqR6W"></div>
                            <img
                                className="header-trading-crypto-icon-awesome-robot-uCqR6W"
                                src="img/icon-awesome-robot-2@1x.png"
                            />
                        </div>
                    </div>
                    <a href="nos-trades.html">
                        <div className="header-trading-crypto-trading-LdomJT">
                            <div className="header-trading-crypto-rectangle-3556-Bi3V6Y"></div>
                            <div className="header-trading-crypto-trading-Bi3V6Y lato-bold-white-14px">Nos trades</div>
                            <div className="header-trading-crypto-icon-actif-Bi3V6Y">
                                <div className="header-trading-crypto-ellipse-17693-qYW5AI"></div>
                                <img
                                    className="header-trading-crypto-icon-simple-graphcool-qYW5AI"
                                    src="img/icon-simple-graphcool-2@1x.png"
                                />
                            </div>
                        </div>
                    </a>
                </div>
            )}
            <div className="header-espace-membre-qecRh8">
                <div className="header-connexion-Psocj5">
                    <div className="header-club-premium-POMvsT lato-normal-white-14px">Mon compte</div>
                </div>
            </div>
            <div onClick={() => props.isOpenSideBar(true)} className="header-menu-2-qecRh8">
                <div className="header-icon-ionic-ios-menu-HLXizF">
                    <div className="header-trac-1-QKxW1t">
                        <Image layout="fill" src="/img/path-1-10@1x.png" />
                    </div>
                    <div className="header-trac-2-QKxW1t">
                        <Image layout="fill" src="/img/path-2-10@1x.png" />
                    </div>
                </div>
            </div>
            <div className="header-toogle-button-qecRh8">
                <div className="header-icon-ionic-ios-moon-TBfV2N">
                    <Image layout="fill" src="/img/icon-ionic-ios-moon-1@1x.png" />
                </div>
                <div className="header-toogle-button-TBfV2N">
                    <label className="switch">
                        <input type="checkbox" />
                        <span className="slider round"></span>
                    </label>
                </div>
            </div>
            <div className="header-search-bar-qecRh8">
                <div className="header-icon-search-lJwrC9">
                    <Image layout="fill" src="/img/icon-ionic-ios-search-11@1x.png" />
                </div>
            </div> */}

                    <div className="main-nav">
                        <div className="top-nav">
                            <div className="logo">
                                <a href="./">
                                    <Image layout="fill" src="/img/effect-13@1x.png" />
                                </a>
                            </div>
                            <div className="right-nav-items">
                                <div className="dark-light">
                                    <div className="light-icon">
                                        <Image layout="fill" src="/img/icon-ionic-ios-moon-1@1x.png" />
                                    </div>
                                    <label className="switch">
                                        <input type="checkbox" />
                                        <span className="slider round"></span>
                                    </label>
                                </div>

                                <a href="#" className="my-account">
                                    Mon compte
                                </a>
                                <div className="search-bar">
                                    <img src="" alt="" />
                                </div>

                                <div className="hamburger-icon">
                                    <div className="line"></div>
                                </div>
                            </div>
                        </div>
                        <div className="main-nav-bar">
                            <div className="nav-grid">
                                <div className="nav-item-wrap">
                                    <ul>
                                        <li>
                                            <a href="#">
                                                <span className="icon">
                                                    <img src="/img/icon/Cryptomonnaies.png" alt="" />
                                                </span>
                                                <span className='nav-item'>Cryptommonaies</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <span className="icon">
                                                    <img src="/img/icon/nft.png" alt="" />
                                                </span>
                                                <span className='nav-item'>NFT</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <span className="icon">
                                                    <img src="/img/icon/playtoearn.png" alt="" />
                                                </span>
                                                
                                                <span className='nav-item'>Play to Earn</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <span className="icon">
                                                    <img src="/img/icon/immobilier.png" alt="" />
                                                </span>
                                                
                                                <span className='nav-item'>Immobilier</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <span className="icon">
                                                    <img src="/img/icon/ecommerce.png" alt="" />
                                                </span>
                                                
                                                <span className='nav-item'>E-Commerce</span>
                                            </a>
                                        </li>
                                        <li><a href="#"><span className="nav-item">Autres thématiques</span></a>
                                            <ul className='dropdown'>
                                                <li><a href="#"><span className='nav-item'>Cryptommonaies</span></a></li>
                                                <li><a href="#"><span className='nav-item'>Immobilier</span></a></li>
                                                <li><a href="#"><span className='nav-item'>NFT</span></a></li>
                                                <li><a href="#"><span className='nav-item'>Play to Earn</span></a></li>
                                            </ul>
                                        
                                        </li>
                                    </ul>
                                    
                                </div>


                                <a href="#" className="espace">
                                    {' '}
                                    Espace <br />
                                    Trading &amp; Crypto
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;
