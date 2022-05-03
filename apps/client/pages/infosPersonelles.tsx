import type { NextPage } from 'next';
// import Image from 'next/image';
import Header from './components/header';
import Footer from './components/footer';
// import checkAuth from './components/checkAuth';
import router from 'next/router';
import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import getAPIClient from '@shared/tools/apiClient';
import { UserStatus } from '@shared/services';
import Head from 'next/head';

const Compte: NextPage = (props: any) => {
    const [cookies] = useCookies(['API_TOKEN']);
    let apiClient = getAPIClient(cookies['API_TOKEN']);
    const [me, setMe] = useState<UserStatus>();
    const [$loading, setLoading] = useState(true);
    const [$error, setError] = useState('');
    const [userInfo, setUserInfo] = useState({
        name: '',
        surname: '',
        mail: '',
        phone: '',
    });

    useEffect(() => {
        if (!cookies['API_TOKEN']) {
            console.log('no token');
            router.replace('/');
            return;
        }
        apiClient = getAPIClient(cookies['API_TOKEN']);
        setLoading(true);
        apiClient.user
            .getMeStats()
            .then((res) => {
                setMe(res);
                setLoading(false);
            })
            .catch((error) => {
                setError(error.i18n ?? error.message ?? 'Unknown error');
                setLoading(false);
            });
    }, []);

    // function to update user informations
    const updateUser = async (data: any) => {
        setLoading(true);
        apiClient.user
            .updateUser(me.id, data)
            .then((res) => {
                setMe(res);
                setLoading(false);
            })
            .catch((error) => {
                setError(error.i18n ?? error.message ?? 'Unknown error');
                setLoading(false);
            });
    };

    return (
        <div>
            <Head>
                <title>Compte - Crypto Trader</title>
            </Head>
            <Header isOpenSideBar={props.useStateOpenSideBar} isEspaceTradingCrypto={false} />
            <div className="account-wrapper">
                <div className="breadcurm">
                    <span>Compte</span>
                    <img src="/img/info-icon/right-arrow.png" alt="" />
                    <span>Informations personnelles</span>
                </div>
                <div className="main-title">
                    <h1 className="title">
                        Informations personnelles<span>Modifiez vos données personnelles</span>
                    </h1>
                </div>

                <div className="infor-form">
                    <form action="#">
                        <div className="input-wrap">
                            <input
                                onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })}
                                type="text"
                                placeholder="* Nom"
                            />
                            <input
                                onChange={(e) => setUserInfo({ ...userInfo, surname: e.target.value })}
                                type="text"
                                placeholder="* Prénom"
                            />
                            <input
                                onChange={(e) => setUserInfo({ ...userInfo, mail: e.target.value })}
                                type="email"
                                placeholder="* Email"
                            />
                            <input
                                onChange={(e) => setUserInfo({ ...userInfo, phone: e.target.value })}
                                type="tel"
                                placeholder="* Numéro de téléphone"
                            />
                        </div>

                        <div className="send_btn">
                            <button onClick={() => updateUser(userInfo)} type="submit" className="primary-button">
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
