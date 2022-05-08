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
        if ($('.login_popup_wrapper, .nav-item-wrap').hasClass('open')) {
            $('body').removeClass('scrollOff');
        } else {
            $('body').addClass('scrollOff');
        }
    });
}

if (typeof window !== 'undefined') {
    $('.scrollRemove, .register_btn').click(function () {
        if ($('.login_popup_wrapper, .nav-item-wrap').hasClass('open')) {
            $('body').removeClass('scrollOff');
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
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const apiClient = getAPIClient(cookies['API_TOKEN']);
    const [emailRecovering, setEmailRecovering] = useState<string>('');
    const [reset, setReset] = useState<
        Partial<{
            code: string | null;
            newPassword: string | null;
            confirmNewPassword: string | null;
        }>
    >({});

    useEffect(() => {
        setIsCookie(cookies['API_TOKEN']);
    }, [cookies]);
    useEffect(() => {
        setIsCookie(cookies['API_TOKEN']);
    }, []);

    const onShowPassword = () => {
        setShowPassword(!showPassword);
    };

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

    const sendRecovering = () => {
        apiClient.auth.forgotPassword({ email: emailRecovering });
    };

    const resetPassword = (code: string, newPassword: string, confirmNewPassword: string) => {
        apiClient.auth.resetPassword({ code: code, newPasswoerd: newPassword, confirmPassword: confirmNewPassword });
    };

    return (
        <div className="login_popup_wrapper">
            {isCookie ? (
                <div className="after_login">
                    <ul>
                        <li>
                            <Link href="/compte">
                                <a>Mes données personnelles</a>
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
                            <div
                                className="flex items-center"
                                style={
                                    passwordError
                                        ? { borderBottom: '1px solid red' }
                                        : { borderBottom: '1px solid #fff' }
                                }>
                                <input
                                    className="input_item"
                                    onChange={(event) => {
                                        setPasswordError('');
                                        setPassword(event.target.value);
                                    }}
                                    type={showPassword ? 'text' : 'password'}
                                    name="password"
                                    id="log_password"
                                    placeholder="*Mot de passe"
                                />
                                <div className="cursor-pointer" onClick={() => onShowPassword()}>
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
                                            <path
                                                d="M0 0h24v24H0V0zm0 0h24v24H0V0zm0 0h24v24H0V0zm0 0h24v24H0V0z"
                                                fill="none"
                                            />
                                            <path d="M12 6c3.79 0 7.17 2.13 8.82 5.5-.59 1.22-1.42 2.27-2.41 3.12l1.41 1.41c1.39-1.23 2.49-2.77 3.18-4.53C21.27 7.11 17 4 12 4c-1.27 0-2.49.2-3.64.57l1.65 1.65C10.66 6.09 11.32 6 12 6zm-1.07 1.14L13 9.21c.57.25 1.03.71 1.28 1.28l2.07 2.07c.08-.34.14-.7.14-1.07C16.5 9.01 14.48 7 12 7c-.37 0-.72.05-1.07.14zM2.01 3.87l2.68 2.68C3.06 7.83 1.77 9.53 1 11.5 2.73 15.89 7 19 12 19c1.52 0 2.98-.29 4.32-.82l3.42 3.42 1.41-1.41L3.42 2.45 2.01 3.87zm7.5 7.5l2.61 2.61c-.04.01-.08.02-.12.02-1.38 0-2.5-1.12-2.5-2.5 0-.05.01-.08.01-.13zm-3.4-3.4l1.75 1.75c-.23.55-.36 1.15-.36 1.78 0 2.48 2.02 4.5 4.5 4.5.63 0 1.23-.13 1.77-.36l.98.98c-.88.24-1.8.38-2.75.38-3.79 0-7.17-2.13-8.82-5.5.7-1.43 1.72-2.61 2.93-3.53z" />
                                        </svg>
                                    )}
                                </div>
                            </div>
                            {passwordError && <span style={{ color: 'red' }}>{passwordError}</span>}
                            <div className="item-center">
                                <a href="#" className="reset_password lato-light-white-16px">
                                    Mot de passe oublié ?
                                </a>
                            </div>
                            {error && <span style={{ color: 'red' }}>{error}</span>}
                            <div className="item-center">
                                <input
                                    className="scrollRemove hover:bg-white hover:text-inherit transiition linear duration-300 "
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
                                <p className="lato-light-white-16px px-10">
                                    Veuillez saisir votre num&eacute;ro de t&eacute;l&eacute;phone lors de votre
                                    inscription. Vous recevrez un code pour modifier votre mot de passe.
                                </p>
                                <form action="">
                                    <input
                                        type="email"
                                        placeholder="*Email"
                                        onChange={(event) => setEmailRecovering(event.target.value)}
                                    />
                                    <button
                                        onClick={() => {
                                            sendRecovering();
                                        }}
                                        id="pass_submit"
                                        className="get-validator-code scrollRemove hover:bg-white hover:text-inherit transiition linear duration-300 ">
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
                                <div className="title lato-light-white-16px">mot de pass oublie?</div>
                                <p className="lato-light-white-16px">
                                    Un code vous &agrave; &eacute;t&eacute; envoy&eacute; par e-mail
                                </p>
                                <form action="">
                                    <div className="custom-input-code">
                                        <input
                                            type="number"
                                            placeholder="*Code"
                                            name="code"
                                            onChange={(e) => {
                                                setReset({ ...reset, [e.target.name]: e.target.value });
                                            }}
                                        />
                                        <span className="write-code">Renvoyer un code</span>
                                    </div>
                                    <button
                                        id="pass_submit"
                                        className="confirm-password-btn scrollRemove hover:bg-white hover:text-inherit transiition linear duration-300 ">
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
                                <div className="title lato-light-white-16px">modification de votre mot de pass</div>
                                <p className="lato-light-white-16px">
                                    Votre mot de passe doit contenir au moins 8 caract&eacute;res sans espace avec des
                                    lettres, au moins un chiffre. une majuscule, et un caract&egrave;re sp&eacute;cial.
                                </p>
                                <form action="">
                                    <div className="custom-input-code">
                                        <input
                                            type="password"
                                            placeholder="*Nouveau mot de passe"
                                            name="newPassword"
                                            onChange={(e) => {
                                                setReset({ ...reset, [e.target.name]: e.target.value });
                                            }}
                                        />
                                        <span className="write-code">
                                            <img src="/img/icon/eye-pass.svg" alt="" />
                                        </span>
                                    </div>
                                    <div className="custom-input-code">
                                        <input
                                            type="password"
                                            placeholder="*Confirmation du nouveau mot de passe"
                                            name="confirmNewPassword"
                                            onChange={(e) => {
                                                setReset({ ...reset, [e.target.name]: e.target.value });
                                            }}
                                        />
                                        <span className="write-code">
                                            <img src="/img/icon/eye-pass.svg" alt="" />
                                        </span>
                                    </div>
                                    <button
                                        id="pass_submit"
                                        onClick={() => {
                                            resetPassword(
                                                reset.code ?? '',
                                                reset.newPassword ?? '',
                                                reset.confirmNewPassword ?? '',
                                            );
                                        }}
                                        className="hover:bg-white hover:text-inherit transiition linear duration-300 ">
                                        Valider
                                    </button>
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
