import type { NextPage } from 'next';
import Image from 'next/image';
// import Link from 'next/link';
import router from 'next/router';
// import router from 'next/router';
import { useEffect, useState } from 'react';
import { ApiError } from '@shared/services';
// import checkAuth from './components/checkAuth';
import $ from 'jquery';
import LoginPopup from './components/login';
import getAPIClient from '@shared/tools/apiClient';
import { useCookies } from 'react-cookie';
// import translate from '@shared/translation'
import Head from 'next/head';
import Script from 'next/script';
import IndexHeader from './components/header_inext';

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
    const [showPassword, setShowPassword] = useState('password');
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
    //     router.push('/articlesPage');
    // }

    const create_account = () => {
        let isValid = true;
        setError('');

        if (userName === '') {
            setErrorUserName("Votre nom d'utilisateur est obligatoire");
            isValid = false;
        }
        if (password === '') {
            setErrorPassword('Votre mot de passe est obligatoire');
            isValid = false;
        }
        if (userSurName === '') {
            setErrorUserSurName('Votre nom est obligatoire');
            isValid = false;
        }
        if (userMail === '') {
            setErrorUserMail('Votre mail est obligatoire');
            isValid = false;
        } else if (
            !userMail.match(
                /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
            )
        ) {
            setErrorUserMail("Votre mail n'est pas valide");
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
                    setCookie('API_TOKEN', response.token, { path: '/' });
                    setCookie('API_TOKEN', response.token, { domain: 'localhost' });
                    setCookie('API_TOKEN', response.token, { domain: '.6fireinvest.com' });
                    setCookie('API_TOKEN', response.token, { domain: '.6fireinvest.fr' });
                    router.push('/articlesPage');
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
                    <div onClick={() => router.push('/')} style={{ cursor: 'pointer' }} className="effect-ReYaAa">
                        <Image layout="fill" src="/img/effect-1@1x.png" />
                    </div>
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
                        type={showPassword}
                    />

                    <div
                        onClick={() => {
                            console.log('showPassword', showPassword);
                            if (showPassword == 'password') {
                                setShowPassword('text');
                            } else {
                                setShowPassword('password');
                            }
                        }}
                        className="icon-ionic-md-eye-off-YId6x8">
                        <Image layout="fill" src="/img/icon-ionic-md-eye-off-1@1x.png" />
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
                            console.log('showPassword', showPassword);
                            if (showPassword == 'password') {
                                setShowPassword('text');
                            } else {
                                setShowPassword('password');
                            }
                        }}
                        className="icon-ionic-md-eye-off-WPm9xl">
                        <Image layout="fill" src="/img/icon-ionic-md-eye-off-1@1x.png" />
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
                        type={showPassword}
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
