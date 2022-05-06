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

/* if (typeof window !== 'undefined') {
    $('.scroll_off').on('click', function () {
        if (!$('body').hasClass('overflo-y-hidden')) {
            $('body').removeClass('overflo-y-hidden');
        } else {
            $('body').addClass('overflo-y-hidden');
        }
    });
} */

const Header = (props: any) => {
    console.log(props);
    const [cookies, $setCookie, removeCookie] = useCookies(['API_TOKEN']);
    const [themes, setThemes] = useState<(Theme & { url: string })[]>([]);
    const [themesDropDown, setThemesDropDown] = useState<Theme[]>([]);
    const apiClient = getAPIClient(cookies['API_TOKEN']);
    const [isMoney, setisMoney] = useState('');
    const [isCookie, setIsCookie] = useState('');
    const [isMobileView, setIsMobileView] = useState(false);
    const [subscriptionLevel, setSubscriptionLevel] = useState<any>();
    const [$error, setError] = useState(false);

    /* Hamburger toggle script */
    const handleForm = () => {
        $('.login_popup_wrapper').toggleClass('open');
    };
    /* Mobile mnue toggle script */
    const mobileToggle = () => {
        $('.nav-item-wrap').toggleClass('open');
        setIsMobileView(!isMobileView);
    };

    const fetchThemes = async () => {
        if (props.isEspaceTradingCrypto == true) {
            const themes = [
                // articles formations id
                {
                    id: 1,
                    name: 'Formations',
                    url: '/tradingFormationForex',
                    iconUrl: '/img/icon/formations.png',
                },
                // articles forex id
                {
                    id: 2,
                    name: 'Forex',
                    url: '/tradingFormationForex',
                    iconUrl: '/img/icon/forex.png',
                },
                {
                    id: 3,
                    name: 'Crypto Wallet',
                    url: '/cryptoWallet',
                    iconUrl: '/img/icon/Cryptowallet.png',
                },
                {
                    id: 3,
                    name: 'Bot Trading',
                    url: '/botTrading',
                    iconUrl: '/img/icon/bottrading.png',
                },
            ];
            setThemes(themes);
        } else {
            const response = await apiClient.themes.getThemes();
            console.log(response);
            const slicedThemes = [...response].slice(0, 5) as Theme[];
            const slicedThemesDropDown = [...response].slice(5) as Theme[];
            setThemes(slicedThemes as any);
            setThemesDropDown(slicedThemesDropDown);
        }
        // setThemesDropDown(response.slice(4) as Theme[]);
    };

    useEffect(() => {
        setIsCookie(cookies['API_TOKEN']);
        if (
            router.pathname === '/cgv' ||
            router.pathname === '/cgu' ||
            router.pathname === '/mentionsLegales' ||
            router.pathname === '/politiqueConfidentialite' ||
            router.pathname === '/404'
        ) {
            console.log('no check required');
        } else {
            // if (!cookies['API_TOKEN']) {
            //     console.log('no token');
            //     router.replace('/');
            //     return;
            // }
            // console.log('token', cookies['API_TOKEN']);
            fetchThemes();
        }

        apiClient.user
            .getMyStats()
            .then((res) => {
                if (
                    router.pathname === '/articlesDetails' ||
                    router.pathname === '/articlesPage' ||
                    router.pathname === '/cgv' ||
                    router.pathname === '/cgu' ||
                    router.pathname === '/mentionsLegales' ||
                    router.pathname === '/politiqueConfidentialite' ||
                    router.pathname === '/404' ||
                    router.pathname === '/compte' ||
                    router.pathname === '/connexion-securite' ||
                    router.pathname === '/infosPersonelles' ||
                    router.pathname === '/pricePage' ||
                    router.pathname === '/abonnement'
                ) {
                    setisMoney('Espace trading & crypto');
                } else {
                    console.log('res', res.isAdmin);
                    if (subscriptionLevel >= 2 || res.isAdmin == true) {
                        setisMoney('Nos Trades');
                    } else {
                        setisMoney('Espace trading & crypto');
                        router.push('/pricePage');
                    }
                }
            })
            .catch((error) => {
                setError(error.i18n ?? error.message ?? 'Unknown error');
            });

        apiClient.subscription
            .getSubscriptions()
            .then((subscriptions) => {
                console.log('ici header => ', subscriptions[0].level);
                setSubscriptionLevel(subscriptions[0].level);
            })
            .catch((error) => {
                setError(error.i18n ?? error.message ?? 'Unknown error');
            });
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
                <div className="mobile-hamburger">
                    <input id="menu__toggle_mobile" type="checkbox" />
                    <label
                        onClick={() => {
                            mobileToggle();
                        }}
                        className="menu__btn scroll_off"
                        htmlFor="menu__toggle_mobile">
                        <span></span>
                    </label>
                </div>

                {/* Hamburger mobile end */}

                <div className="header-top">
                    <div className="main-nav">
                        <div className="top-nav">
                            <div className="logo">
                                <a href={isCookie ? '/accueil' : '/'}>
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
                                {/* <div className="search-bar">
                                    <img src="" alt="" />
                                </div> */}

                                <div className="hamburger-icon">
                                    <div className="line"></div>
                                </div>
                            </div>
                        </div>
                        <div className="main-nav-bar">
                            <div className="nav-grid">
                                <div className="nav-item-wrap">
                                    <ul id="visible-only-mobile">
                                        <li>
                                            <a href="#">{isMoney}</a>
                                        </li>
                                    </ul>
                                    <ul>
                                        {themes.map((theme, index) => (
                                            <li key={index}>
                                                <a
                                                    style={{ cursor: 'pointer', marginRight: '25px' }}
                                                    onClick={() => {
                                                        {
                                                            props.isEspaceTradingCrypto == false
                                                                ? router.push({
                                                                      pathname: '/accueil',
                                                                      query: {
                                                                          themeId: theme.id,
                                                                      },
                                                                  })
                                                                : props.isEspaceTradingCrypto == true &&
                                                                  theme.url == '/tradingFormationForex'
                                                                ? router.push({
                                                                      pathname: theme.url,
                                                                      query: {
                                                                          themeId: theme.id,
                                                                      },
                                                                  })
                                                                : router.push(theme.url);
                                                        }
                                                    }}>
                                                    <span className="icon">
                                                        <img src={theme.iconUrl} alt="" />
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
                                                {isMobileView == false ? (
                                                    <a href="#">
                                                        <span className="nav-item">Autres thématiques</span>
                                                    </a>
                                                ) : null}
                                                <ul className="dropdown">
                                                    {themesDropDown.map((theme, $index) => (
                                                        <li key={theme.id}>
                                                            <a
                                                                style={{ cursor: 'pointer' }}
                                                                onClick={() => {
                                                                    console.log('theme', theme);
                                                                    router.push({
                                                                        pathname: '/accueil',
                                                                        query: {
                                                                            themeId: theme.id,
                                                                        },
                                                                    });
                                                                }}>
                                                                <span className="icon">
                                                                    <img src={theme.iconUrl} alt="" />
                                                                </span>
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
                                                    removeCookie('API_TOKEN', { path: '/' });
                                                    removeCookie('API_TOKEN', { domain: 'localhost' });
                                                    removeCookie('API_TOKEN', { domain: '.6fireinvest.com' });
                                                    removeCookie('API_TOKEN', { domain: '.6fireinvest.fr' });
                                                    router.push('/');
                                                }}
                                                href="#">
                                                Deconnexion
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                                {/* <a href="#" className="espace">
                                    {' '}
                                    Espace <br />
                                    Trading &amp; Crypto
                                </a> */}
                                <Link href={isMoney == 'Nos Trades' ? '/accueil' : '/trading'}>
                                    <a
                                        className="espace"
                                        onClick={() => {
                                            if (isMoney == 'Nos Trades') {
                                                setisMoney('Espace Trading & Crypto');
                                            } else {
                                                setisMoney('Nos Trades');
                                            }
                                        }}>
                                        {isMoney == 'Nos Trades' ? (
                                            <p>Nos Trades</p>
                                        ) : (
                                            <p>Espace Trading &amp; Crypto</p>
                                        )}
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;
