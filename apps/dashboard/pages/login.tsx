import React, { useEffect, useState } from 'react';
import getApiClient from '@shared/tools/apiClient';
import { useCookies } from 'react-cookie';
import router from 'next/router';

export default function Index() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cookies, setCookie] = useCookies(['API_TOKEN']);

    useEffect(() => {
        if (cookies.API_TOKEN) {
            router.replace('/');
        }
    }, []);

    const submit = () => {
        getApiClient('')
            .auth.loginAdmin({ email, password })
            .then((res) => {
                setCookie('API_TOKEN', res.token, { path: '/' });
            })
            .catch(() => {
                alert('Login failed');
            });
    };

    const resetPassword = () => {
        getApiClient('')
            .admin.resetPassword()
            .then(() => {
                alert('Password reset');
            })
            .catch((err) => {
                alert(err);
            });
    };

    return (
        <div>
            <div className="login-wrapper">
                <div className="login-div">
                    <img src="img/groupe-1-10@1x.png" alt="" />

                    <div className="loggin-wrap">
                        <form action="">
                            <div className="single-input">
                                <i className="fas fa-envelope"></i>
                                <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" />
                            </div>
                            <div className="single-input">
                                <i className="fas fa-lock"></i>
                                <input
                                    onChange={(event) => setPassword(event.target.value)}
                                    type="password"
                                    placeholder="Mot de pass"
                                />
                            </div>

                            <div className="single-btn">
                                <button onClick={submit} id="send-btn" type="submit">
                                    Connexion
                                </button>
                            </div>
                            <div className="single-btn">
                                <button onClick={resetPassword} className="forget-pass">
                                    Mot de pass oublie?
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
