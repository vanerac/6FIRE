import React from 'react';
import Image from 'next/image';
import router from 'next/router';

const Header = (props: any) => {
    console.log(props);
    return (
        <div className="header-top">
            <div className="header-rectangle_1"></div>
            <div className="header-logo">
                <div className="header-image">
                    <Image layout="fill" src="/img/effect-13@1x.png" />
                </div>
            </div>
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
                <div onClick={() => router.push('/trading')} className="header-trading-R5LSYq">
                    <div className="header-rectangle-3556-O3OwxW"></div>
                    <div className="header-trading-O3OwxW lato-bold-white-14px">
                        Espace <br />
                        Trading &amp; Crypto
                    </div>
                </div>
            </div>
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
                    <div className="header-rectangle-3485-CyrDiO"></div>
                    <div className="header-ellipse-17688-CyrDiO"></div>
                </div>
            </div>
            <div className="header-search-bar-qecRh8">
                <div className="header-icon-search-lJwrC9">
                    <Image layout="fill" src="/img/icon-ionic-ios-search-11@1x.png" />
                </div>
            </div>
        </div>
    );
};

export default Header;
