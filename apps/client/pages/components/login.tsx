import React from 'react';
// import Image from 'next/image';
// import router from 'next/router';

const LoginPopup = (props: any) => {
    console.log(props);

    return (
        <div className="login_popup_wrapper">
            <div className="login_access_col">
                <div className="title-wrap">
                    <div className="title">
                        SE CONNECTER <span>Pour accéder à votre compte</span>
                    </div>
                </div>
                <form action="#">
                    <input className="input_item" type="email" name="email" id="email" placeholder="* Email" />
                    <input
                        className="input_item"
                        type="password"
                        name="password"
                        id="log_password"
                        placeholder="*Mot de passe"
                    />
                    <div className="item-center">
                        <a href="#" className="reset_password">
                            Mot de passe oublié ?
                        </a>
                    </div>
                    <div className="item-center">
                        <input type="submit" value={'Me connecter'} />
                    </div>
                </form>
            </div>
            <div className="register_col">
                <div className="title-wrap">
                    <div className="title">VOUS N’AVEZ PAS DE COMPTE ?</div>
                    <a className="register_btn" href="#">
                        Créer un compte
                    </a>
                </div>
            </div>
        </div>
    );
};

export default LoginPopup;
