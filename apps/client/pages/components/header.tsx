import React, { useEffect, useState } from 'react';
import Image from 'next/image';
// import router from 'next/router';
import $ from 'jquery';
import LoginPopup from './login';
import { useCookies } from 'react-cookie';
import { Theme } from '@services/index';
import router from 'next/router';
import getAPIClient from '@shared/tools/apiClient';
import Link from 'next/link';

if (typeof window !== "undefined"){

    $('.scroll_off').on("click",function(){
        if(!$('body').hasClass("overflo-y-hidden"))
        {
            $('body').removeClass('overflo-y-hidden');
        }
        else
        {
            $('body').addClass('overflo-y-hidden');
        }
    });
}

/* Hamburger toggle script */
const handleForm = () => {
    $('.login_popup_wrapper').toggleClass('open');
};
/* Mobile mnue toggle script */
const mobileToggle = () => {
    $('.nav-item-wrap').toggleClass('open');
};

/* mobile main button toggel */
if (typeof window !== 'undefined') {
    $('.mobile-hamburger').click(function () {
        $(this).css({ 'z-index': '-1', 'ponter-event': 'none' });
    });
}
if (typeof window !== 'undefined') {
    $('.nav-close-btn').click(function () {
        $('.mobile-hamburger').css({ 'z-index': '3', 'ponter-event': 'visible' });
    });
}

const Header = (props: any) => {
    console.log(props);
    const [cookies, $setCookie, removeCookie] = useCookies(['API_TOKEN']);
    const [themes, setThemes] = useState<Theme[]>([]);
    const [themesDropDown, setThemesDropDown] = useState<Theme[]>([]);
    const apiClient = getAPIClient(cookies['API_TOKEN']);

    const fetchThemes = async () => {
        const response = await apiClient.themes.getThemes();
        if (response.length === 0) {
            router.push('/pricePage');
        }
        const slicedThemes = [...response].slice(0, 5) as Theme[];
        const slicedThemesDropDown = [...response].slice(5) as Theme[];
        setThemes(slicedThemes);
        setThemesDropDown(slicedThemesDropDown);
        // setThemesDropDown(response.slice(4) as Theme[]);
    };

    useEffect(() => {
        if (
            router.pathname === '/cgv' ||
            router.pathname === '/cgu' ||
            router.pathname === '/mentionsLegales' ||
            router.pathname === '/politiqueDeConfidentialite' ||
            router.pathname === '/404'
        ) {
            console.log('no check required');
        } else {
            if (!cookies['API_TOKEN']) {
                console.log('no token');
                router.replace('/');
                return;
            }
            console.log('token', cookies['API_TOKEN']);
            fetchThemes();
        }
    }, []);

    return (
        <>
            <LoginPopup />

            <div>
                {/* Hamburger icon style */}
                <input id="menu__toggle" type="checkbox" />
                <label
                    onClick={() => {
                        console.log('click');
                        handleForm();
                    }}
                    className="menu__btn scroll_off invisible-mobile"
                    htmlFor="menu__toggle">
                    <span></span>
                </label>
                {/* Hamburger icon END */}

                {/* Hamburger mobile */}
                <div
                    className="mobile-hamburger"
                    onClick={() => {
                        console.log('mobile');
                        mobileToggle();
                    }}>
                    <label className="menu__btn scroll_off" htmlFor="menu__toggle">
                        <span></span>
                    </label>
                </div>

                {/* Hamburger mobile end */}

                <div className="header-top">
                    <div className="main-nav">
                        <div className="top-nav">
                            <div className="logo">
                                <a href={cookies['API_TOKEN'] ? '/' : '/articlesPage'}>
                                    <img src="/img/logo/logo.svg" alt="" />
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

                                {/* <a href="/compte" className="my-account">
                                    Mon compte
                                </a> */}
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
                                    <div className="nav-close-btn">
                                        <img src="img/icon/close.svg" alt="" />
                                    </div>
                                    <ul id="visible-only-mobile">
                                        <li>
                                            <a href="#">Espace Trading &amp; Crypto</a>
                                        </li>
                                    </ul>
                                    <ul>
                                        {themes.map((theme, index) => (
                                            <li key={index}>
                                                <a
                                                    style={{ cursor: 'pointer' }}
                                                    onClick={() => {
                                                        console.log('theme', theme);
                                                        router.push({
                                                            pathname: '/articlesPage',
                                                            query: {
                                                                themeId: theme.id,
                                                            },
                                                        });
                                                    }}>
                                                    <span className="icon">
                                                        <img src="/img/icon/Cryptomonnaies.png" alt="" />
                                                    </span>
                                                    <span className="nav-item">{theme.name}</span>
                                                </a>
                                            </li>
                                        ))}
                                        {/* <li>
                                            <a href="#">
                                                <span className="icon">
                                                    <img src="/img/icon/nft.png" alt="" />
                                                </span>
                                                <span className="nav-item">NFT</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <span className="icon">
                                                    <img src="/img/icon/playtoearn.png" alt="" />
                                                </span>

                                                <span className="nav-item">Play to Earn</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <span className="icon">
                                                    <img src="/img/icon/immobilier.png" alt="" />
                                                </span>

                                                <span className="nav-item">Immobilier</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <span className="icon">
                                                    <img src="/img/icon/ecommerce.png" alt="" />
                                                </span>

                                                <span className="nav-item">E-Commerce</span>
                                            </a>
                                        </li> */}
                                        {themesDropDown.length > 0 ? (
                                            <li>
                                                <a href="#">
                                                    <span className="nav-item">Autres thématiques</span>
                                                </a>
                                                <ul className="dropdown">
                                                    {themesDropDown.map((theme, $index) => (
                                                        <li key={theme.id}>
                                                            <a
                                                                style={{ cursor: 'pointer' }}
                                                                onClick={() => {
                                                                    console.log('theme', theme);
                                                                    router.push({
                                                                        pathname: '/articlesPage',
                                                                        query: {
                                                                            themeId: theme.id,
                                                                        },
                                                                    });
                                                                }}>
                                                                <span className="nav-item">{theme.name}</span>
                                                            </a>
                                                        </li>
                                                    ))}
                                                    {/* <li>
                                                    <a href="#">
                                                        <span className="nav-item">Immobilier</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <span className="nav-item">NFT</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <span className="nav-item">Play to Earn</span>
                                                    </a>
                                                </li> */}
                                                </ul>
                                            </li>
                                        ) : null}
                                    </ul>

                                    {/* mobile menu */}
                                    <ul id="visible-mobile">
                                        <li>
                                            <Link href="/compte">
                                                <a>Mon compte</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <a
                                                onClick={() => {
                                                    removeCookie('API_TOKEN');
                                                    router.push('/');
                                                }}
                                                href="#">
                                                Deconnexion
                                            </a>
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
