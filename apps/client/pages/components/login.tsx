import React, { useState } from 'react';
// import Image from 'next/image';
// import router from 'next/router';
import { ApiError } from '@shared/services';
import router from 'next/router';
import getAPIClient from '@shared/tools/apiClient';
import { useCookies } from 'react-cookie';
import $ from 'jquery';

/* scroll off */
if (typeof window !== 'undefined') {
    $('.scroll_off, .nav-close-btn').on('click', function () {
        if (!$('body').hasClass('overflo-y-hidden')) {
            $('body').addClass('overflo-y-hidden');
        } else {
            $('body').removeClass('overflo-y-hidden');
        }
    });
}

/* toggle overlay */
if (typeof window !== 'undefined') {
    $('.nav-close-btn').click(function () {
        $('.nav-item-wrap').removeClass('open');
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
        $('.forget_pass_overlay').addClass('show');
    });
    $('#return_login').click(function () {
        $('.forget_pass_overlay').removeClass('show');
    });
}

const handleForm = () => {
    $('.login_popup_wrapper').toggleClass('open');
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
    const [cookies, setCookies] = useCookies(['API_TOKEN']);
    const apiClient = getAPIClient(cookies['API_TOKEN']);

    // useEffect(() => {
    //     if (!cookies['API_TOKEN']) {
    //         console.log('no token');
    //         router.replace('/');
    //         return;
    //     }
    //     apiClient = getAPIClient(cookies['API_TOKEN']);
    // }, []);

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
                    console.log(response);
                    if (response.token) {
                        setCookies('API_TOKEN', response.token, { path: '/' });
                        setCookies('API_TOKEN', response.token, { domain: 'localhost' });
                        setCookies('API_TOKEN', response.token, { domain: '.6fireinvest.com' });
                        setCookies('API_TOKEN', response.token, { domain: '.6fireinvest.fr' });
                        router.push('/articlesPage');
                    }
                })
                .catch((error: ApiError) => {
                    console.log(error.body.i18n);
                    setError(error.body.i18n);
                });
        }
        console.log(mail, password);
    };

    return (
        <div className="login_popup_wrapper">
            {cookies['API_TOKEN'] ? (
                <div className="after_login">
                    <ul>
                        <li>
                            <a href="#">Mes donnees personnelles</a>
                        </li>
                        <li>
                            <a href="#">Ma licence</a>
                        </li>
                    </ul>
                </div>
            ) : (
                <>
                    <div className="login_access_col">
                        <div className="title-wrap">
                            <div className="title">
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
                                <a href="#" className="reset_password">
                                    Mot de passe oublié ?
                                </a>
                            </div>
                            {error && <span style={{ color: 'red' }}>{error}</span>}
                            <div className="item-center">
                                <input onClick={handleSubmit} type="submit" value={'Me connecter'} />
                            </div>
                        </form>

                        {/* forget pass overlay */}
                        <div className="forget_pass_overlay">
                            <div className="forget-div">
                                <div className="title">mot de pass oublie?</div>
                                <p>
                                    Veuillez saisir votre numero de telephone lors de votre inscription. Vous recevrez
                                    un code pour modifier votre mot de passe.
                                </p>
                                <form action="">
                                    <input type="email" placeholder="*Email" />
                                    <button id="pass_submit">Valider</button>
                                </form>
                                <div id="return_login" className="return">
                                    Retour
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="register_col">
                        <div className="title-wrap">
                            <div className="title">VOUS N’AVEZ PAS DE COMPTE ?</div>
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
