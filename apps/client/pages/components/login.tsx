import React, { useState } from 'react';
// import Image from 'next/image';
// import router from 'next/router';

const LoginPopup = (props: any) => {
    console.log(props);
    // const [showSignup, setShowSignup] = useState(false);
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [mail, setMail] = useState('');
    const [mailError, setMailError] = useState('');
    // let isValid = true;

    const handleSubmit = (e: any) => {
        e.preventDefault();
        if (password.length < 6) {
            setPasswordError('Votre mot de passe doit contenir au moins 8 caractères');
        }
        if (mail === '') {
            setMailError('Votre mail est obligatoire');
            // isValid = false;
        } else if (
            !mail.match(
                /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
            )
        ) {
            setMailError("Votre mail n'est pas valide");
            // isValid = false;
        }
        console.log(mail, password);
    };

    return (
        <div className="login_popup_wrapper">
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
                        style={mailError ? { borderBottom: '1px solid red' } : { borderBottom: '1px solid #fff' }}
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
                        style={passwordError ? { borderBottom: '1px solid red' } : { borderBottom: '1px solid #fff' }}
                        type="password"
                        name="password"
                        id="log_password"
                        placeholder="* Mot de passe"
                    />
                    {passwordError && <span style={{ color: 'red' }}>{passwordError}</span>}
                    <div className="item-center">
                        <a href="#" className="reset_password">
                            Mot de passe oublié ?
                        </a>
                    </div>
                    <div className="item-center">
                        <input onClick={handleSubmit} type="submit" value={'Me connecter'} />
                    </div>
                </form>
            </div>
            <div className="register_col">
                <div className="title-wrap">
                    <div className="title">VOUS N’AVEZ PAS DE COMPTE ?</div>
                    {/* close side bar */}
                    <a className="register_btn" href="#">
                        Créer un compte
                    </a>
                </div>
            </div>
        </div>
    );
};

export default LoginPopup;
