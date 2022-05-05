import type { NextPage } from 'next';
import Footer from './components/footer';
import Header from './components/header';
// import checkAuth from './components/checkAuth';
import router from 'next/router';
import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import getAPIClient from '@shared/tools/apiClient';
import { Broker } from '@shared/services';
import Head from 'next/head';

const Trading: NextPage = (props: any) => {
    const [cookies] = useCookies(['API_TOKEN']);
    const $apiClient = getAPIClient(cookies['API_TOKEN']);
    const [$brokers, setBrokers] = useState<Broker[]>([]);
    const [$loading, setLoading] = useState(true);
    const [$error, setError] = useState('');

    useEffect(() => {
        if (!cookies['API_TOKEN']) {
            console.log('no token');
            router.replace('/');
            return;
        }

        setLoading(true);
        $apiClient.broker
            .getBrokers()
            .then((res) => {
                setBrokers(res as Broker[]);
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
                <title>Trading - Crypto Trader</title>
            </Head>
            <Header />

            {/* Tread inner */}
            <div className="trade-inner-header">
                <img src="img/mask-group-333@1x.png" alt="" className="background" />
                <div className="container">
                    <div className="content-left box-text">
                        <h2 className="title">CONTACTEZ NOUS POUR ACCÉDER AU CANAL TELEGRAM DES MEMBRES TRADING & CRYPTO</h2>
                        <p>Pour voir nos analyses, nos signaux, nos dernières positions et nos avis sur le marché, vous devez obtenir l’accès à notre Telegram ! Pour cela, contactez nous directement via notre Support Telegram ou notre Support WhatsApp</p>
                    </div>
                    <div className="button-right">
                        <div className="btn-group">
                            <button className="primary-button">
                                <img className="telegram" src="/img/icon/telegram.svg" alt="" />
                                <span>Support Telegram</span>
                            </button>
                            <button className="primary-button">
                                <img src="/img/icon/whatsapp.svg" alt="" />
                                <span>Support WhatsApp</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* Tread inner END */}

            {/* Welcome text */}
            <div className="trading-welcome box-text">
                <div className="container-wrap">
                    <h2 className="title">COMPRENDRE TON ESPACE MEMBRE TRADING & CRYPTO</h2>
                    <p>Te voilà membre confirmé chez 6FIRE !</p>
                    <p>Ici, tu peux trouver tout ce qu’une personne voulant apprendre le Trading Forex & Crypto a besoin. N’hésite pas à nous contacter en cas de questions.</p>
                </div>
            </div>
            {/* Welcome text END */}

            {/* Treading circle block */}
            <div className="trading-circle-block">
                <div className="circle">
                    <img src="/img/logo/logo.svg" alt="" />
                </div>
            </div>
            {/* Treading circle block END */}

            <Footer />
        </div>
    );
};

// export default checkAuth(Trading);
export default Trading;
