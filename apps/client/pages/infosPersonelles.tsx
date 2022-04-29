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
    const [$me, setMe] = useState<UserStatus>();
    const [$loading, setLoading] = useState(true);
    const [$error, setError] = useState('');

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
                            <input type="text" placeholder="* Nom" />
                            <input type="text" placeholder="* Prénom" />
                            <input type="email" placeholder="* Email" />
                            <input type="tel" placeholder="* Numéro de téléphone" />
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
