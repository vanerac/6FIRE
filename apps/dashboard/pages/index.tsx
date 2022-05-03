import React, { useEffect, useState } from 'react';
import getApiClient from '@shared/tools/apiClient';
import { useCookies } from 'react-cookie';
import router from 'next/router';

export default function Index() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cookies, setCookie] = useCookies(['API_TOKEN']);
    const apiClient = getApiClient(cookies['API_TOKEN']);

    useEffect(() => {
        console.log('useEffect cookies', cookies);
        if (cookies.API_TOKEN) {
            router.replace('/home');
        }
    }, [cookies]);

    useEffect(() => {
        console.log('useEffect email', email);
    }, [email]);

    useEffect(() => {
        console.log('useEffect password', password);
    }, [password]);

    useEffect(() => {
        console.log('Initial load');
    }, []);

    const submit = async () => {
        apiClient.auth
            .login({ email, password })
            .then(
                (res) => {
                    if (!res.token) throw new Error('No token returned from login');
                    setCookie('API_TOKEN', res.token, { path: '/' });
                    alert('Login successful');
                    // router.replace('/home');
                },
                (err) => {
                    alert(err.message);
                    console.log('err', err);
                },
            )
            .catch((error) => {
                console.log(error);
                alert(error.i18n ?? error.message ?? error);
            });
    };

    const resetPassword = async () => {
        apiClient.admin
            .resetPassword()
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
                                <input
                                    onChange={(e) => setEmail(e.target.value)}
                                    type="email"
                                    placeholder="Email"
                                    value={email}
                                />
                            </div>
                            <div className="single-input">
                                <i className="fas fa-lock"></i>
                                <input
                                    onChange={(event) => setPassword(event.target.value)}
                                    type="password"
                                    placeholder="Mot de pass"
                                    value={password}
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
