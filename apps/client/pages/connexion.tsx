import type { NextPage } from 'next';
import Link from 'next/link';
import Image from 'next/image';
// import Link from 'next/link';
import router from 'next/router';
// import router from 'next/router';
import { useEffect, useState } from 'react';
import { ApiError } from '@shared/services';
// import checkAuth from './components/checkAuth';
import $ from 'jquery';
import LoginPopup from '../components/login';
import getAPIClient from '@shared/tools/apiClient';
import { useCookies } from 'react-cookie';
// import translate from '@shared/translation'
import Head from 'next/head';
import Script from 'next/script';
import IndexHeader from '../components/header_inext';

/* scroll off */
/* if (typeof window !== 'undefined') {
    $('.scroll_off').on('click', function () {
        if (!$('body').hasClass('overflo-y-hidden')) {
            $('body').addClass('overflo-y-hidden');
        } else {
            $('body').removeClass('overflo-y-hidden');
        }
    });
} */

const Connexion: NextPage = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [userSurName, setUserSurName] = useState('');
    const [userMail, setUserMail] = useState('');
    const [userPhone, setUserPhone] = useState('');
    const [errorUserName, setErrorUserName] = useState('');
    const [errorPassword, setErrorPassword] = useState('');
    const [errorUserSurName, setErrorUserSurName] = useState('');
    const [errorUserMail, setErrorUserMail] = useState('');
    const [errorUserPhone, setErrorUserPhone] = useState('');
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [cguChecked, setCguChecked] = useState(false);
    const [errorCgu, setErrorCgu] = useState('');
    const [error, setError] = useState('');
    const [cookies, setCookie] = useCookies(['API_TOKEN']);
    const apiClient = getAPIClient(cookies['API_TOKEN']);

    useEffect(() => {
        if (cookies['API_TOKEN']) {
            console.log('no token');
            router.replace('/pricePage');
            return;
        }
    }, [cookies]);
    useEffect(() => {
        if (cookies['API_TOKEN']) {
            console.log('no token');
            router.replace('/pricePage');
            return;
        }
    }, []);

    const handleForm = () => {
        $('.login_popup_wrapper').toggleClass('open');
    };
    /* Mobile mnue toggle script */
    const mobileToggle = () => {
        $('.nav-item-wrap').toggleClass('open');
    };

    // if (cookies['API_TOKEN']) {
    //     router.push('/accueil');
    // }

    const create_account = () => {
        let isValid = true;
        setError('');

        if (userName === '') {
            setErrorUserName('Votre nom est obligatoire');
            isValid = false;
        }
        if (password === '') {
            setErrorPassword('Votre mot de passe est obligatoire');
            isValid = false;
        }
        if (userSurName === '') {
            setErrorUserSurName('Votre prénom est obligatoire');
            isValid = false;
        }
        if (userMail === '') {
            setErrorUserMail('Votre e-mail est obligatoire');
            isValid = false;
        } else if (
            !userMail.match(
                /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
            )
        ) {
            setErrorUserMail("Votre e-mail n'est pas valide");
            isValid = false;
        }

        if (userPhone === '') {
            setErrorUserPhone('Votre numéro de téléphone est obligatoire');
            isValid = false;
        } else if (userPhone.length < 10) {
            setErrorUserPhone('Votre numéro de téléphone est invalide');
            isValid = false;
        } else if (userPhone.length > 10) {
            setErrorUserPhone('Votre numéro de téléphone est invalide');
            isValid = false;
        } else if (!userPhone.match(/^[0-9]{10}$/)) {
            setErrorUserPhone('Votre numéro de téléphone est invalide');
            isValid = false;
        }
        // if password is not 8 characters long
        if (password.length < 8) {
            setErrorPassword('Votre mot de passe doit contenir au moins 8 caractères');
            isValid = false;
        }
        if (!cguChecked) {
            setErrorCgu('Vous devez accepter les CGU');
            isValid = false;
        }

        if (!isValid) return;
        apiClient.auth
            .register({
                password: password,
                CGU: cguChecked,
                email: userMail,
                firstName: userName,
                lastName: userSurName,
                telephone: userPhone,
            })
            .then((response) => {
                console.log(response);
                if (response.token) {
                    const date = new Date();
                    date.setDate(date.getDate() + 2);
                    setCookie('API_TOKEN', response.token, { path: '/', expires: date });
                    setCookie('API_TOKEN', response.token, { domain: 'localhost', expires: date });
                    setCookie('API_TOKEN', response.token, { domain: '.6fireinvest.com', expires: date });
                    setCookie('API_TOKEN', response.token, { domain: '.6fireinvest.fr', expires: date });
                    router.push('/accueil');
                }
            })
            .catch((error: ApiError) => {
                setError(error.body.i18n);
                setUserName('');
                setPassword('');
                setUserSurName('');
                setUserMail('');
                setUserPhone('');
                setCguChecked(false);
                console.log(error.body.i18n);
            });
    };

    return (
        <div>
            <Head>
                <title>Connexion</title>
                <link href="https://homologation-payment.cdn.payline.com/cdn/styles/widget-min.css" rel="stylesheet" />
            </Head>
            <Script src="https://homologation-payment.cdn.payline.com/cdn/scripts/widget-min.js" />
            <LoginPopup />
            <IndexHeader />
            <input type="hidden" id="anPageName" name="page" value="register-web" />
            <div className="register-web screen">
                <div
                    id="PaylineWidget"
                    data-token="the token obtained in doWebPayment Response"
                    data-template="column"
                    data-embeddedredirectionallowed="false"
                />
                <div className="background-WxaGAS"></div>
                <div className="logo-WxaGAS">
                    <Link href="/">
                        <a className="effect-ReYaAa cursor-pointer">
                            <Image layout="fill" src="/img/effect-1@1x.png" alt="logo 6fire" />
                        </a>
                    </Link>
                </div>
                <div className="crer-votre-compte-sur-6-firecom-WxaGAS">Créer votre compte sur 6FIRE.com</div>
                <div className="rejoignez-6-fire-club-priv-dinvestisseur-WxaGAS">
                    Rejoignez 6FIRE - Club Privé d’investisseur
                </div>
                <div className="newsletter-WxaGAS">
                    <input type="checkbox" id="actu6fire" name="actu6fire" />
                    <div className="je-souhaite-recevoir-lactualit-6-fire-ctfCRZ lato-normal-white-12px">
                        Je souhaite recevoir l’actualité 6FIRE
                    </div>
                </div>
                <div className="cgu-rgpd-WxaGAS">
                    <input
                        type="checkbox"
                        id="cgu"
                        name="cgu"
                        checked={cguChecked}
                        onChange={() => {
                            if (cguChecked === false) {
                                setErrorCgu('');
                                setCguChecked(true);
                            } else {
                                setCguChecked(false);
                            }
                        }}
                    />
                    <div className="en-crant-un-compte-v-qVPDai">
                        <span className="span0-qb1m9I lato-normal-white-12px">
                            En créant un compte, vous acceptez les{' '}
                        </span>

                        <span onClick={() => router.push('/cgu')} className="span1-qb1m9I lato-normal-white-12px">
                            Conditions Générales d’Utilisation{' '}
                        </span>
                        <span className="span2-qb1m9I lato-normal-white-12px">
                            et consentez au traitement de vos données, conformément à la{' '}
                        </span>
                        <span
                            onClick={() => router.push('/politiqueConfidentialite')}
                            className="span3-qb1m9I lato-normal-white-12px">
                            Politique de confidentialité
                        </span>
                        <span className="span4-qb1m9I lato-normal-white-12px"> de 6FIRE.</span>
                        <br />
                        <div className="lato-normal-white-12px" style={{ color: 'red', margin: '5px' }}>
                            {errorCgu}
                        </div>
                    </div>
                </div>
                <div className="nom-WxaGAS">
                    <div className="ligne-1-Ay5Yag">
                        {errorUserName !== '' ? (
                            <div className="rectangle-3475-1QZQZG" style={{ border: '1px solid red' }}></div>
                        ) : (
                            <div className="rectangle-3475-1QZQZG" style={{ border: '1px solid white' }}></div>
                        )}
                        <div className="lato-normal-white-12px" style={{ color: 'red', margin: '5px' }}>
                            {errorUserName}
                        </div>
                    </div>
                    <input
                        placeholder="*Nom"
                        value={userName}
                        onChange={(event) => {
                            setErrorUserName('');
                            setUserName(event.target.value);
                        }}
                        className="nom-Ay5Yag lato-normal-white-14px"
                        type="text"
                    />
                </div>
                <div className="prnom-WxaGAS">
                    <div className="ligne-1-Ay5Yag">
                        {errorUserSurName !== '' ? (
                            <div className="rectangle-3475-1QZQZG" style={{ border: '1px solid red' }}></div>
                        ) : (
                            <div className="rectangle-3475-1QZQZG" style={{ border: '1px solid white' }}></div>
                        )}
                        <div className="lato-normal-white-12px" style={{ color: 'red', margin: '5px' }}>
                            {errorUserSurName}
                        </div>
                    </div>
                    <input
                        placeholder="*Prénom"
                        value={userSurName}
                        onChange={(event) => {
                            setErrorUserSurName('');
                            setUserSurName(event.target.value);
                        }}
                        className="nom-Ay5Yag lato-normal-white-14px"
                        type="text"
                    />
                </div>
                <div className="numro-de-tlphone-WxaGAS">
                    <div className="ligne-1-Ay5Yag">
                        {errorUserMail !== '' ? (
                            <div className="rectangle-3475-1QZQZG" style={{ border: '1px solid red' }}></div>
                        ) : (
                            <div className="rectangle-3475-1QZQZG" style={{ border: '1px solid white' }}></div>
                        )}
                        <div className="lato-normal-white-12px" style={{ color: 'red', margin: '5px' }}>
                            {errorUserMail}
                        </div>
                    </div>
                    <input
                        placeholder="*Email"
                        value={userMail}
                        onChange={(event) => {
                            setErrorUserMail('');
                            setUserMail(event.target.value);
                        }}
                        className="nom-Ay5Yag lato-normal-white-14px"
                        type="text"
                    />
                </div>
                <div className="mot-de-passe-WxaGAS">
                    <div className="ligne-1-Ay5Yag">
                        {errorPassword !== '' ? (
                            <div className="rectangle-3475-1QZQZG" style={{ border: '1px solid red' }}></div>
                        ) : (
                            <div className="rectangle-3475-1QZQZG" style={{ border: '1px solid white' }}></div>
                        )}
                        <div className="lato-normal-white-12px" style={{ color: 'red', margin: '5px' }}>
                            {errorPassword}
                        </div>
                    </div>
                    <input
                        placeholder="*Mot de passe"
                        value={password}
                        onChange={(event) => {
                            setErrorPassword('');
                            setPassword(event.target.value);
                        }}
                        className="nom-Ay5Yag lato-normal-white-14px"
                        type={showPassword ? 'text' : 'password'}
                    />

                    <div
                        onClick={() => {
                            setShowPassword(!showPassword);
                        }}
                        className="icon-ionic-md-eye-off-YId6x8">
                        {showPassword ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="18px"
                                viewBox="0 0 24 24"
                                width="24px"
                                fill="#FFFFFF">
                                <path d="M0 0h24v24H0V0z" fill="none" />
                                <path d="M12 6c3.79 0 7.17 2.13 8.82 5.5C19.17 14.87 15.79 17 12 17s-7.17-2.13-8.82-5.5C4.83 8.13 8.21 6 12 6m0-2C7 4 2.73 7.11 1 11.5 2.73 15.89 7 19 12 19s9.27-3.11 11-7.5C21.27 7.11 17 4 12 4zm0 5c1.38 0 2.5 1.12 2.5 2.5S13.38 14 12 14s-2.5-1.12-2.5-2.5S10.62 9 12 9m0-2c-2.48 0-4.5 2.02-4.5 4.5S9.52 16 12 16s4.5-2.02 4.5-4.5S14.48 7 12 7z" />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="18px"
                                viewBox="0 0 24 24"
                                width="24px"
                                fill="#FFFFFF">
                                <path d="M0 0h24v24H0V0zm0 0h24v24H0V0zm0 0h24v24H0V0zm0 0h24v24H0V0z" fill="none" />
                                <path d="M12 6c3.79 0 7.17 2.13 8.82 5.5-.59 1.22-1.42 2.27-2.41 3.12l1.41 1.41c1.39-1.23 2.49-2.77 3.18-4.53C21.27 7.11 17 4 12 4c-1.27 0-2.49.2-3.64.57l1.65 1.65C10.66 6.09 11.32 6 12 6zm-1.07 1.14L13 9.21c.57.25 1.03.71 1.28 1.28l2.07 2.07c.08-.34.14-.7.14-1.07C16.5 9.01 14.48 7 12 7c-.37 0-.72.05-1.07.14zM2.01 3.87l2.68 2.68C3.06 7.83 1.77 9.53 1 11.5 2.73 15.89 7 19 12 19c1.52 0 2.98-.29 4.32-.82l3.42 3.42 1.41-1.41L3.42 2.45 2.01 3.87zm7.5 7.5l2.61 2.61c-.04.01-.08.02-.12.02-1.38 0-2.5-1.12-2.5-2.5 0-.05.01-.08.01-.13zm-3.4-3.4l1.75 1.75c-.23.55-.36 1.15-.36 1.78 0 2.48 2.02 4.5 4.5 4.5.63 0 1.23-.13 1.77-.36l.98.98c-.88.24-1.8.38-2.75.38-3.79 0-7.17-2.13-8.82-5.5.7-1.43 1.72-2.61 2.93-3.53z" />
                            </svg>
                        )}
                    </div>
                </div>
                <div onClick={create_account} className="button-sign-in-WxaGAS">
                    <a href="#" className="primary-button">
                        {error}
                        <span>Créer un compte</span>
                        <div className="right-arrow">
                            <img src="/img/icon/right-arrow.png" alt="" />
                        </div>
                    </a>
                </div>
                <div className="dj-inscrit-connectez-vous-WxaGAS">
                    {/* <Link href="/"> */}
                    <a
                        onClick={() => {
                            handleForm();
                        }}
                        style={{ color: 'white', cursor: 'pointer' }}>
                        Déjà inscrit ? Connectez vous
                    </a>
                    {/* </Link> */}
                </div>
                <div className="numro-de-tlphone-Ae6KpX">
                    <div className="ligne-1-Ay5Yag">
                        {errorUserPhone !== '' ? (
                            <div className="rectangle-3475-1QZQZG" style={{ border: '1px solid red' }}></div>
                        ) : (
                            <div className="rectangle-3475-1QZQZG" style={{ border: '1px solid white' }}></div>
                        )}
                        <div className="lato-normal-white-12px" style={{ color: 'red', margin: '5px' }}>
                            {errorUserPhone}
                        </div>
                    </div>
                    <input
                        value={userPhone}
                        onChange={(event) => {
                            setErrorUserPhone('');
                            setUserPhone(event.target.value);
                        }}
                        placeholder="*Numéro de téléphone"
                        className="nom-Ay5Yag lato-normal-white-14px"
                        type="text"
                    />
                </div>
                {/* Hamburger icon END */}

                {/* Hamburger mobile */}
                <div
                    className="mobile-hamburger"
                    onClick={() => {
                        mobileToggle();
                    }}>
                    {/* menu */}
                </div>
                {/* Hamburger mobile end */}
            </div>
            <div className="register-mobile screen">
                <div className="background-qfTrnm"></div>
                <div className="logo-qfTrnm">
                    <div className="effect-YcCH73">
                        <Image layout="fill" src="/img/effect-1@1x.png" />
                    </div>
                </div>
                <div className="crer-votre-compte-sur-6-firecom-qfTrnm">Créer votre compte sur 6FIRE.com</div>
                <div className="rejoignez-6-fire-club-priv-dinvestisseur-qfTrnm">
                    Rejoignez 6FIRE - Club Privé d’investisseur
                </div>
                <div className="newsletter-qfTrnm">
                    {/* <div className="rectangle-3473-eM3wxq border-1px-white"></div> */}
                    <input type="checkbox" id="actu6fire" name="actu6fire" />
                    <div className="je-souhaite-recevoir-lactualit-6-fire-eM3wxq lato-normal-white-12px">
                        Je souhaite recevoir l’actualité 6FIRE
                    </div>
                </div>
                <div className="cgu-rgpd-qfTrnm">
                    {/* <div className="rectangle-3474-XHhUEC border-1px-white"></div> */}
                    <input
                        type="checkbox"
                        id="cgu"
                        name="cgu"
                        onChange={() => {
                            if (cguChecked === false) {
                                setErrorCgu('');
                                setCguChecked(true);
                            } else {
                                setCguChecked(false);
                            }
                        }}
                    />
                    <div className="en-crant-un-compte-v-XHhUEC">
                        <span className="span0-J4Md4x lato-normal-white-12px">
                            En créant un compte, vous acceptez les{' '}
                        </span>
                        <span
                            onClick={() => router.push('/politiqueConfidentialite')}
                            className="span1-J4Md4x lato-normal-white-12px">
                            Conditions Générales d’Utilisation{' '}
                        </span>
                        <span className="span2-J4Md4x lato-normal-white-12px">
                            et consentez au traitement de vos données, conformément à la{' '}
                        </span>
                        <span onClick={() => router.push('/cgu')} className="span3-J4Md4x lato-normal-white-12px">
                            Politique de confidentialité
                        </span>
                        <span className="span4-J4Md4x lato-normal-white-12px"> de 6FIRE.</span>
                        <div className="lato-normal-white-12px" style={{ color: 'red', margin: '5px' }}>
                            {errorCgu}
                        </div>
                    </div>
                </div>
                <div className="nom-qfTrnm">
                    <div className="ligne-1-vdEIbT">
                        {errorUserName !== '' ? (
                            <div className="rectangle-3475-1QZQZG" style={{ border: '1px solid red' }}></div>
                        ) : (
                            <div className="rectangle-3475-1QZQZG" style={{ border: '1px solid white' }}></div>
                        )}
                        <div className="lato-normal-white-12px" style={{ color: 'red', margin: '5px' }}>
                            {errorUserName}
                        </div>
                    </div>
                    <input
                        value={userName}
                        onChange={(event) => {
                            setErrorUserName('');
                            setUserName(event.target.value);
                        }}
                        placeholder="*Nom"
                        type="text"
                        className="nom-vdEIbT lato-normal-white-14px"
                    />
                </div>
                <div className="prnom-qfTrnm">
                    <div className="ligne-5-6mOLtL">
                        {errorUserSurName !== '' ? (
                            <div className="rectangle-3475-1QZQZG" style={{ border: '1px solid red' }}></div>
                        ) : (
                            <div className="rectangle-3475-1QZQZG" style={{ border: '1px solid white' }}></div>
                        )}
                        <div className="lato-normal-white-12px" style={{ color: 'red', margin: '5px' }}>
                            {errorUserSurName}
                        </div>
                    </div>
                    <input
                        value={userSurName}
                        onChange={(event) => {
                            setErrorUserSurName('');
                            setUserSurName(event.target.value);
                        }}
                        placeholder="*Prénom"
                        type="text"
                        className="nom-vdEIbT lato-normal-white-14px"
                    />
                </div>
                <div className="numro-de-tlphone-qfTrnm">
                    <div className="ligne-6-Glkvq0">
                        {errorUserPhone !== '' ? (
                            <div className="rectangle-3475-1QZQZG" style={{ border: '1px solid red' }}></div>
                        ) : (
                            <div className="rectangle-3475-1QZQZG" style={{ border: '1px solid white' }}></div>
                        )}
                        <div className="lato-normal-white-12px" style={{ color: 'red', margin: '5px' }}>
                            {errorUserPhone}
                        </div>
                    </div>
                    <input
                        value={userPhone}
                        onChange={(event) => {
                            setErrorUserPhone('');
                            setUserPhone(event.target.value);
                        }}
                        placeholder="*Numéro de téléphone"
                        type="text"
                        className="nom-vdEIbT lato-normal-white-14px"
                    />
                </div>
                <div className="mot-de-passe-qfTrnm">
                    <div
                        onClick={() => {
                            setShowPassword(!showPassword);
                        }}
                        className="icon-ionic-md-eye-off-YId6x8">
                        {showPassword ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="18px"
                                viewBox="0 0 24 24"
                                width="24px"
                                fill="#FFFFFF">
                                <path d="M0 0h24v24H0V0z" fill="none" />
                                <path d="M12 6c3.79 0 7.17 2.13 8.82 5.5C19.17 14.87 15.79 17 12 17s-7.17-2.13-8.82-5.5C4.83 8.13 8.21 6 12 6m0-2C7 4 2.73 7.11 1 11.5 2.73 15.89 7 19 12 19s9.27-3.11 11-7.5C21.27 7.11 17 4 12 4zm0 5c1.38 0 2.5 1.12 2.5 2.5S13.38 14 12 14s-2.5-1.12-2.5-2.5S10.62 9 12 9m0-2c-2.48 0-4.5 2.02-4.5 4.5S9.52 16 12 16s4.5-2.02 4.5-4.5S14.48 7 12 7z" />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="18px"
                                viewBox="0 0 24 24"
                                width="24px"
                                fill="#FFFFFF">
                                <path d="M0 0h24v24H0V0zm0 0h24v24H0V0zm0 0h24v24H0V0zm0 0h24v24H0V0z" fill="none" />
                                <path d="M12 6c3.79 0 7.17 2.13 8.82 5.5-.59 1.22-1.42 2.27-2.41 3.12l1.41 1.41c1.39-1.23 2.49-2.77 3.18-4.53C21.27 7.11 17 4 12 4c-1.27 0-2.49.2-3.64.57l1.65 1.65C10.66 6.09 11.32 6 12 6zm-1.07 1.14L13 9.21c.57.25 1.03.71 1.28 1.28l2.07 2.07c.08-.34.14-.7.14-1.07C16.5 9.01 14.48 7 12 7c-.37 0-.72.05-1.07.14zM2.01 3.87l2.68 2.68C3.06 7.83 1.77 9.53 1 11.5 2.73 15.89 7 19 12 19c1.52 0 2.98-.29 4.32-.82l3.42 3.42 1.41-1.41L3.42 2.45 2.01 3.87zm7.5 7.5l2.61 2.61c-.04.01-.08.02-.12.02-1.38 0-2.5-1.12-2.5-2.5 0-.05.01-.08.01-.13zm-3.4-3.4l1.75 1.75c-.23.55-.36 1.15-.36 1.78 0 2.48 2.02 4.5 4.5 4.5.63 0 1.23-.13 1.77-.36l.98.98c-.88.24-1.8.38-2.75.38-3.79 0-7.17-2.13-8.82-5.5.7-1.43 1.72-2.61 2.93-3.53z" />
                            </svg>
                        )}
                    </div>
                    <div className="ligne-7-WPm9xl">
                        {errorPassword !== '' ? (
                            <div className="rectangle-3475-1QZQZG" style={{ border: '1px solid red' }}></div>
                        ) : (
                            <div className="rectangle-3475-1QZQZG" style={{ border: '1px solid white' }}></div>
                        )}
                        <div className="lato-normal-white-12px" style={{ color: 'red', margin: '5px' }}>
                            {errorPassword}
                        </div>
                    </div>
                    <input
                        value={password}
                        placeholder="*Mot de passe"
                        onChange={(event) => {
                            setErrorPassword('');
                            setPassword(event.target.value);
                        }}
                        type={showPassword ? 'text' : 'password'}
                        className="nom-vdEIbT lato-normal-white-14px"
                    />
                </div>
                <div onClick={create_account} className="button-sign-in-qfTrnm">
                    <div className="lato-normal-white-12px" style={{ color: 'red', margin: '5px' }}>
                        {error}
                    </div>
                    <div className="button-cration-de-compte-TU0AFD">
                        <div className="rectangle-3470-1QO1gL"></div>
                        <div className="crer-un-compte-1QO1gL">Créer un compte</div>
                    </div>
                </div>
                <div
                    onClick={() => {
                        handleForm();
                    }}
                    className="dj-inscrit-connectez-vous-qfTrnm">
                    Déjà inscrit ? Connectez vous
                </div>

                {/* Hamburger mobile */}
                <div
                    className="mobile-hamburger"
                    onClick={() => {
                        mobileToggle();
                    }}>
                    {/* menu */}
                </div>
                {/* Hamburger mobile end */}
                <div className="numro-de-tlphone-511QbH">
                    <div className="ligne-6-DzMs4Y">
                        {errorUserMail !== '' ? (
                            <div className="rectangle-3475-1QZQZG" style={{ border: '1px solid red' }}></div>
                        ) : (
                            <div className="rectangle-3475-1QZQZG" style={{ border: '1px solid white' }}></div>
                        )}
                        <div className="lato-normal-white-12px" style={{ color: 'red', margin: '5px' }}>
                            {errorUserMail}
                        </div>
                    </div>
                    <input
                        value={userMail}
                        onChange={(event) => {
                            setErrorUserMail('');
                            setUserMail(event.target.value);
                            console.log('event.target.value', event.target.value);
                        }}
                        placeholder="*Email"
                        type="text"
                        className="nom-vdEIbT lato-normal-white-14px"
                    />
                </div>
            </div>
        </div>
    );
};

export default Connexion;
