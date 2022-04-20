import React from 'react';
import Image from 'next/image';
// import router from 'next/router';

const Footer = (props: any) => {
    console.log(props);

    return (
        <div className="footer-footer-SAHlos">
            <div className="footer-background-BaKdMY"></div>
            <div className="footer-menu-footer-BaKdMY">
                <div className="footer-mentions-lgales-dKcD8f sourcesanspro-semi-bold-sonic-silver-14px">
                    Mentions légales
                </div>
                <div className="footer-cgu-dKcD8f sourcesanspro-semi-bold-sonic-silver-14px">CGU</div>
                <div className="footer-cgv-dKcD8f sourcesanspro-semi-bold-sonic-silver-14px">CGV</div>
                <div className="footer-politique-de-confidentialit-dKcD8f sourcesanspro-semi-bold-sonic-silver-14px">
                    Politique de confidentialité
                </div>
                <div className="footer-politique-de-confidentialit-oLo3wS sourcesanspro-semi-bold-sonic-silver-14px">
                    Politique de confidentialité
                </div>
                <div className="footer-contact-dKcD8f sourcesanspro-semi-bold-sonic-silver-14px">Contact</div>
            </div>
            <div className="footer-x2022-6-fire-invest-BaKdMY sourcesanspro-semi-bold-gray-14px">
                Ⓒ 2022 - 6FIRE INVEST
            </div>
            <div className="footer-logo-BaKdMY">
                <div className="footer-groupe-2-4tGdAy">
                    <div className="footer-groupe-1-xjk9Ad">
                        <Image src="/img/group-1-10@1x.png" layout="fill" />
                    </div>
                </div>
                <div className="footer-effect-4tGdAy">
                    <Image src="/img/effect-12@1x.png" layout="fill" />
                </div>
            </div>
            <div className="footer-ligne-31-BaKdMY">
                <Image src="/img/line-31-1@1x.png" layout="fill" />
            </div>
            <div className="footer-groupe-3011-BaKdMY">
                <div className="footer-icon-instagram-GiDxHj">
                    <Image src="/img/fontawsome--instagram--1@1x.png" layout="fill" />
                </div>
            </div>
            <div className="footer-groupe-3010-BaKdMY">
                <div className="footer-icon-simple-tiktok-2zSnac">
                    <Image src="/img/icon-simple-tiktok-1@1x.png" layout="fill" />
                </div>
            </div>
        </div>
    );
};

export default Footer;
