import React, { useEffect, useState } from 'react';
// import Image from 'next/image';
// import router from 'next/router';
import { ApiError } from '@shared/services';
import router from 'next/router';
import getAPIClient from '@shared/tools/apiClient';
import { useCookies } from 'react-cookie';
import $ from 'jquery';
import Link from 'next/link';

/* scroll off */
/* if (typeof window !== 'undefined') {
    $('.scroll_off, .nav-close-btn').on('click', function () {
        if (!$('body').hasClass('overflo-y-hidden')) {
            $('body').addClass('overflo-y-hidden');
        } else {
            $('body').removeClass('overflo-y-hidden');
        }
    });
} */

/* toggle overlay */
if (typeof window !== 'undefined') {
    $('.nav-close-btn').click(function () {
        $('.nav-item-wrap').removeClass('open');
        $('body').removeClass('scrollOff');
    });
}

/* body scroll off when overlay active
-------------------------------------*/
if (typeof window !== 'undefined') {
    $('.menu__btn').click(function () {
        if ($('body').hasClass('scrollOff')) {
            $('body').removeClass('scrollOff');
        } else {
            $('body').addClass('scrollOff');
        }
    });
}

/* Forget password overlay wrapper
-------------------------------------*/
if (typeof window !== 'undefined') {
    $('.reset_password').click(function () {
        $('.forget-open-password').addClass('show');
    });
    $('.return').click(function () {
        $('.forget-open-password').removeClass('show');
    });
}

/* Get email for forget password
-------------------------------------*/
if (typeof window !== 'undefined') {
    $('.get-validator-code').click(function () {
        $('.get-email-code').addClass('show');
    });
    $('.return-email').click(function () {
        $('.get-email-code').removeClass('show');
    });
}

/* Get email for forget password
-------------------------------------*/
if (typeof window !== 'undefined') {
    $('.confirm-password-btn').click(function () {
        $('.confirm-password-open').addClass('show');
    });
    $('.return-code').click(function () {
        $('.confirm-password-open').removeClass('show');
    });
}

const handleForm = () => {
    $('.login_popup_wrapper, .nav-item-wrap').toggleClass('open');
};

const LoginPopup = (props: any) => {
    console.log(props);
    // const [showSignup, setShowSignup] = useState(false);
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [mail, setMail] = useState('');
    const [mailError, setMailError] = useState('');
    let isValid = true;
    const [error, setError] = useState('');
    const [cookies, setCookies, removeCookie] = useCookies(['API_TOKEN']);
    const [isCookie, setIsCookie] = useState();
    const apiClient = getAPIClient(cookies['API_TOKEN']);

    useEffect(() => {
        setIsCookie(cookies['API_TOKEN']);
    }, [cookies]);
    useEffect(() => {
        setIsCookie(cookies['API_TOKEN']);
    }, []);

    const handleSubmit = (e: any) => {
        e.preventDefault();

        if (password.length < 8) {
            setPasswordError('Votre mot de passe doit contenir au moins 8 caractères');
        }
        if (mail === '') {
            setMailError('Votre mail est obligatoire');
            isValid = false;
        } else if (
            !mail.match(
                /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
            )
        ) {
            setMailError("Votre mail n'est pas valide");
            isValid = false;
        }
        if (isValid) {
            apiClient.auth
                .login({
                    email: mail,
                    password: password,
                })
                .then((response: any) => {
                    // console.log(response);
                    if (response.token) {
                        setCookies('API_TOKEN', response.token, { path: '/' });
                        setCookies('API_TOKEN', response.token, { domain: 'localhost' });
                        setCookies('API_TOKEN', response.token, { domain: '.6fireinvest.com' });
                        setCookies('API_TOKEN', response.token, { domain: '.6fireinvest.fr' });
                        router.push('/accueil');
                    }
                })
                .catch((error: ApiError) => {
                    console.log(error.body.i18n);
                    setError(error.body.i18n);
                });
        }
        // console.log(mail, password);
    };

    return (
        <div className="login_popup_wrapper">
            {isCookie ? (
                <div className="after_login">
                    <ul>
                        <li>
                            <Link href="/compte">
                                <a>Mes donnees personnelles</a>
                            </Link>
                        </li>
                        <li>
                            <a
                                style={{ cursor: 'pointer' }}
                                onClick={() => {
                                    removeCookie('API_TOKEN', { path: '/' });
                                    removeCookie('API_TOKEN', { domain: 'localhost' });
                                    removeCookie('API_TOKEN', { domain: '.6fireinvest.com' });
                                    removeCookie('API_TOKEN', { domain: '.6fireinvest.fr' });
                                    router.push('/');
                                }}>
                                Se déconnecter
                            </a>
                        </li>
                    </ul>
                </div>
            ) : (
                <>
                    <div className="login_access_col">
                        <div className="title-wrap">
                            <div className="title lato-light-white-16px">
                                SE CONNECTER <span>Pour accéder à votre compte</span>
                            </div>
                        </div>
                        <form action="#">
                            <input
                                onChange={(event) => {
                                    setMailError('');
                                    setMail(event.target.value);
                                }}
                                className="input_item"
                                style={
                                    mailError ? { borderBottom: '1px solid red' } : { borderBottom: '1px solid #fff' }
                                }
                                type="email"
                                name="email"
                                id="email"
                                placeholder="* Email"
                            />
                            {mailError && <span style={{ color: 'red' }}>{mailError}</span>}
                            <input
                                className="input_item"
                                onChange={(event) => {
                                    setPasswordError('');
                                    setPassword(event.target.value);
                                }}
                                style={
                                    passwordError
                                        ? { borderBottom: '1px solid red' }
                                        : { borderBottom: '1px solid #fff' }
                                }
                                type="password"
                                name="password"
                                id="log_password"
                                placeholder="*Mot de passe"
                            />
                            {passwordError && <span style={{ color: 'red' }}>{passwordError}</span>}
                            <div className="item-center">
                                <a href="#" className="reset_password lato-light-white-16px">
                                    Mot de passe oublié ?
                                </a>
                            </div>
                            {error && <span style={{ color: 'red' }}>{error}</span>}
                            <div className="item-center ">
                                <input
                                    className="hover:bg-white hover:text-inherit transiition linear duration-300 "
                                    onClick={handleSubmit}
                                    type="submit"
                                    value={'Me connecter'}
                                />
                            </div>
                        </form>

                        {/* forget pass overlay */}
                        <div className="forget_pass_overlay forget-open-password">
                            <div className="forget-div">
                                <div className="title lato-light-white-16px">mot de pass oublie?</div>
                                <p className="text-lg lato-light-white-16px">
                                    Veuillez saisir votre numero de telephone lors de votre inscription. Vous recevrez
                                    un code pour modifier votre mot de passe.
                                </p>
                                <form action="">
                                    <input type="email" placeholder="*Email" />
                                    <button
                                        id="pass_submit"
                                        className="get-validator-code hover:bg-white hover:text-inherit transiition linear duration-300 ">
                                        Valider
                                    </button>
                                </form>
                                <div id="return_login" className="return">
                                    Retour
                                </div>
                            </div>
                        </div>

                        {/* Get Email code popup */}
                        <div className="forget_pass_overlay get-email-code">
                            <div className="forget-div">
                                <div className="title">mot de pass oublie?</div>
                                <p>Un code vous a ete envoye par email</p>
                                <form action="">
                                    <div className="custom-input-code">
                                        <input type="number" placeholder="*Code" />
                                        <span className="write-code">Renvoyer un code</span>
                                    </div>
                                    <button id="pass_submit" className="confirm-password-btn">
                                        Valider
                                    </button>
                                </form>
                                <div id="return_login" className="return-email">
                                    Retour
                                </div>
                            </div>
                        </div>

                        {/* Update new password */}
                        <div className="forget_pass_overlay confirm-password-open">
                            <div className="forget-div">
                                <div className="title">modification de votre mot de pass</div>
                                <p>
                                    Votre mot de passe doit contenir au moins 8 caracteres escape avec des letters, au
                                    moinus un chiffre. une majuscule, et un caractere special.
                                </p>
                                <form action="">
                                    <div className="custom-input-code">
                                        <input type="number" placeholder="*Nouveau mot de passe" />
                                        <span className="write-code">
                                            <img src="/img/icon/eye-pass.svg" alt="" />
                                        </span>
                                    </div>
                                    <div className="custom-input-code">
                                        <input type="number" placeholder="*Confirmation du nouveau mot de passe" />
                                        <span className="write-code">
                                            <img src="/img/icon/eye-pass.svg" alt="" />
                                        </span>
                                    </div>
                                    <button id="pass_submit">Valider</button>
                                </form>
                                <div id="return_login" className="return-code">
                                    Retour
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="register_col">
                        <div className="title-wrap">
                            <div className="title lato-light-white-16px">VOUS N’AVEZ PAS DE COMPTE ?</div>
                            {/* close side bar */}
                            <a
                                onClick={() => {
                                    handleForm();
                                    router.push('/connexion');
                                }}
                                className="register_btn"
                                href="#">
                                Créer un compte
                            </a>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default LoginPopup;
