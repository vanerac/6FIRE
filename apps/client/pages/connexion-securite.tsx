import type { NextPage } from 'next';
// import Image from 'next/image';
import Header from './components/header';
import Footer from './components/footer';
// import checkAuth from './components/checkAuth';
import router from 'next/router';
import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import getAPIClient from '@shared/tools/apiClient';

const Compte: NextPage = (props: any) => {
    const [cookies] = useCookies(['API_TOKEN']);
    let apiClient = getAPIClient(cookies['API_TOKEN']);
    const [oldPassword, $setOldPassword] = useState('');
    const [newPassword, $setNewPassword] = useState('');
    const [confirmPassword, $setConfirmPassword] = useState('');
    const [$loading, setLoading] = useState(true);
    const [$error, setError] = useState('');

    useEffect(() => {
        if (!cookies['API_TOKEN']) {
            console.log('no token');
            router.replace('/');
            return;
        }
        apiClient = getAPIClient(cookies['API_TOKEN']);
    }, []);

    const $updatePassword = () => {
        setLoading(true);
        apiClient.auth
            .changePassword({
                oldPassword: oldPassword,
                confirmPassword: confirmPassword,
                newPassword: newPassword,
            })
            .then(() => {
                setLoading(false);
                setError('');
            })
            .catch((error) => {
                setLoading(false);
                setError(error.i18n ?? error.message ?? 'Unknown error');
            });
    };

    return (
        <div>
            <Header isOpenSideBar={props.useStateOpenSideBar} isEspaceTradingCrypto={false} />
            <div className="account-wrapper">
                <div className="breadcurm">
                    <span>Compte</span>
                    <img src="/img/info-icon/right-arrow.png" alt="" />
                    <span>Connexion et sécurité</span>
                </div>
                <div className="main-title">
                    <h1 className="title">
                        Connexion et sécurité <span>Mettez à jour votre mot de passe</span>
                    </h1>
                </div>

                <div className="infor-form">
                    <form action="#">
                        <div className="input-wrap">
                            <input type="password" placeholder="* Mot de passe actuel" />
                            <input type="password" placeholder="* Nouveau mot de passe" />
                            <input type="password" placeholder="* Confirmation du nouveau mot de passe" />
                        </div>

                        <div className="send_btn">
                            <button type="submit" className="primary-button">
                                <span>Modifier</span>
                                <div className="right-arrow">
                                    <img src="/img/icon/right-arrow.png" alt="" />
                                </div>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
};

// export default checkAuth(ArticlesDetails);
export default Compte;
