import type { NextPage } from 'next';
// import Image from 'next/image';
import Header from './components/header';
import Footer from './components/footer';
// import checkAuth from './components/checkAuth';
import router from 'next/router';
import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import getAPIClient from '@shared/tools/apiClient';
import { Subscription } from '@shared/services';
import Head from 'next/head';

const Abonnement: NextPage = (props: any) => {
    const [cookies] = useCookies(['API_TOKEN']);
    const apiClient = getAPIClient(cookies['API_TOKEN']);
    const [$subscriptions, setSubscriptions] = useState<Subscription[]>([]);
    const [$loading, setLoading] = useState(true);
    const [$error, setError] = useState('');

    useEffect(() => {
        if (!cookies['API_TOKEN']) {
            router.replace('/');
        }

        apiClient.subscription
            .getSubscriptions()
            .then((subscriptions) => {
                setSubscriptions(subscriptions);
                setLoading(false);
            })
            .catch((error) => {
                setError(error.i18n ?? error.message ?? 'Unknown error');
                setLoading(false);
            });
    }, []);

    // const $subcribe = (subscriptionId: string) => {
    //     setLoading(true);
    //     apiClient.payment
    //         .createPayment({
    //             subscriptionId,
    //             // OfferId ??
    //         })
    //         .then((payment) => {
    //             // Todo a popup instead ?
    //             setLoading(false);
    //             router.push(payment.paymentUrl as string);
    //         })
    //         .catch((error) => {
    //             setError(error.i18n ?? error.message ?? 'Unknown error');
    //             setLoading(false);
    //         });
    // };

    return (
        <div>
            <Head>
                <title>Abonnement - Crypto Trader</title>
            </Head>
            <Header isOpenSideBar={props.useStateOpenSideBar} isEspaceTradingCrypto={false} />
            <div className="account-wrapper">
                <div className="breadcurm">
                    <span>Compte</span>
                    <img src="/img/info-icon/right-arrow.png" alt="" />
                    <span>Abonnement et paiement</span>
                </div>
                <div className="main-title">
                    <h1 className="title">
                        Abonnement et paiement
                        <span>Gérez, modifiez votre abonnement et vos informations de paiement</span>
                    </h1>
                </div>

                <div className="price-cart">
                    <div className="cart">
                        <div className="title">
                            Novice <span>(Pour les débutants/frileux)</span>
                        </div>
                        <div className="round-wrap">
                            <div className="price">
                                49,99€ <span>/mois</span>
                            </div>
                        </div>

                        <div className="send_btn">
                            <a href="#" type="submit" className="primary-button btn01">
                                <span>Licence en cours</span>
                                <div className="right-arrow">
                                    <img src="/img/icon/right-arrow.png" alt="" />
                                </div>
                            </a>
                            <a href="#" type="submit" className="primary-button btn02">
                                <span>Changer de Licence</span>
                                <div className="right-arrow">
                                    <img src="/img/icon/right-arrow.png" alt="" />
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="right-col">
                        <div className="text-box">
                            <img src="/img/info-icon/card.png" alt="" />
                            <p>Gérer les informations de paiement</p>
                        </div>
                        <div className="text-box">
                            <p>Annuler l’abonnement</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

// export default checkAuth(ArticlesDetails);
export default Abonnement;
