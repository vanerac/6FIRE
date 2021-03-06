import type { NextPage } from 'next';
// import Image from 'next/image';
import Header from '../components/header';
import Footer from '../components/footer';
// import checkAuth from './components/checkAuth';
import router from 'next/router';
import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import getAPIClient from '@shared/tools/apiClient';
import { UserStatus, UserSub } from '@shared/services';
import Head from 'next/head';

const Compte: NextPage = (props: any) => {
    const [cookies] = useCookies(['API_TOKEN']);
    const apiClient = getAPIClient(cookies['API_TOKEN']);
    const [me, setMe] = useState<UserStatus>();
    const [$loading, setLoading] = useState(true);
    const [$error, setError] = useState('');
    const [$subs, setSubs] = useState<UserSub[]>([]);

    useEffect(() => {
        if (!cookies['API_TOKEN']) {
            console.log('no token');
            router.replace('/');
            return;
        }
        setLoading(true);
        apiClient.user
            .getMyStats()
            .then((res) => {
                setMe(res);
                setLoading(false);
            })
            .catch((error) => {
                setError(error.i18n ?? error.message ?? 'Unknown error');
                setLoading(false);
            });
        apiClient.user.getMySubscriptions().then((res) => {
            setSubs(res);
        });
    }, []);

    return (
        <div>
            <Head>
                <title>Compte - Crypto Trader</title>
            </Head>
            <Header isOpenSideBar={props.useStateOpenSideBar} isEspaceTradingCrypto={false} />
            <div className="account-wrapper">
                <div className="main-title">
                    <h1 className="title">
                        Compte{' '}
                        <span>
                            {me?.firstName}, {me?.email}
                        </span>
                    </h1>
                </div>
                <div className="informaion-wrapper">
                    <div onClick={() => router.push('/infosPersonelles')} className="single-info">
                        <img src="/img/info-icon/person.png" alt="" />
                        <p>
                            Informations personnelles <span>Modifiez vos donn??es personnelles</span>
                        </p>
                    </div>
                    <div onClick={() => router.push('/connexion-securite')} className="single-info">
                        <img src="/img/info-icon/security.png" alt="" />
                        <p>
                            Connexion et s??curit?? <span>Mettez ?? jour votre mot de passe</span>
                        </p>
                    </div>
                    <div onClick={() => router.push('/abonnement')} className="single-info">
                        <img src="/img/info-icon/card.png" alt="" />
                        <p>
                            Abonnement et paiement{' '}
                            <span>G??rez, modifiez votre abonnement et vos informations de paiement</span>
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

// export default checkAuth(ArticlesDetails);
export default Compte;
