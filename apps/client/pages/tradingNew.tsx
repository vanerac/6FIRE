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
                <div className="left-col">
                    <div className="round-text-wrap">
                        <div className="text">
                            <h3 className="title">FORMATIONS</h3>
                            <p>Dans cette section tu auras énormément de lecture pour tout apprendre sur la Crypto et sur le Trading. Il faut lire, lire et encore lire pour comprendre, apprendre puis passer à la pratique quand tu es prêt.</p>
                        </div>
                        <div className="icon formation">
                            <img src="img/icon/formations.png" alt="" />
                        </div>
                    </div>
                    <div className="round-text-wrap forex-wrap">
                        <div className="text">
                            <h3 className="title">FOREX</h3>
                            <p>Des articles spécifiques au Forex, à l’actualité mondiale et aux conséquences que cela peut engendrer sur les marchés financiers.</p>
                        </div>
                        <div className="icon forex">
                            <img src="/img/icon/forex.png" alt="" />
                        </div>
                    </div>
                    <div className="round-text-wrap nos-trads-wrap">
                        <div className="text">
                            <h3 className="title">NOS TRADES</h3>
                            <p>Ici, tu peux avoir accès en temps réels aux trades que nous prenons personnellement, avec les analyses de notre outil «secret» qui conforte nos décisions. Pour pouvoir avoir accès à tous nos trades, il faut nous contacter.</p>
                        </div>
                        <div className="icon trades">
                            <img src="/img/icon/nostrades.png" alt="" />
                        </div>
                    </div>
                </div>
                <div className="circle">
                    <img src="/img/logo/logo.svg" alt="" />
                </div>
                <div className="right-col">
                    <div className="round-text-wrap cyrpto-wrap">
                        <div className="icon cyrpto">
                            <img src="/img/icon/cryptowallet.png" alt="" />
                        </div>
                        <div className="text">
                            <h3 className="title">CRYPTO WALLET</h3>
                            <p>Sur cette page, tu peux voir en temps réel comment se compose notre portefeuille cryptomonnaie. Ainsi, tu peux savoir quand est ce qu’on achète du BTC, de l’ETH ou quand est ce qu’on revend la totalité pour se mettre en USDT et atteindre la fin de l’orage.</p>
                        </div>
                    </div>
                    <div className="round-text-wrap bot-wrap">
                        <div className="icon bot">
                            <img src="/img/icon/bottrading.png" alt="" />
                        </div>
                        <div className="text">
                            <h3 className="title">BOT TRADING</h3>
                            <p>Un outil disponible nul part ailleurs sur le marché ! Nous avons développer un système d’alerte de prises de positions des meilleurs traders de Binance. Tu peux choisir dans le TOP 15 ton trader préféré, et recevoir via Telegram tout ce qu’il fait, à la seconde où il le fait et le copier de A à Z si tu le souhaites !</p>
                        </div>
                    </div>

                </div>
            </div>
            {/* Treading circle block END */}


            {/* circel button group */}
            <div className="circle-btn-group">
                <a href="#" className="primary-button bg-blue">
                    <span>CRÉER UN COMPTE PUPRIME</span>
                    <div className="right-arrow">
                        <img src="/img/icon/right-arrow.png" alt="" />
                    </div>
                </a>
                <a href="#" className="primary-button bg-yellow">
                    <span>CRÉER UN COMPTE BINANCE</span>
                    <div className="right-arrow">
                        <img src="/img/icon/right-arrow.png" alt="" />
                    </div>
                </a>
                <a href="#" className="primary-button bg-blue">
                    <span>CRÉER UN COMPTE PUPRIME</span>
                    <div className="right-arrow">
                        <img src="/img/icon/right-arrow.png" alt="" />
                    </div>
                </a>
                <a href="#" className="primary-button bg-yellow">
                    <span>CRÉER UN COMPTE BINANCE</span>
                    <div className="right-arrow">
                        <img src="/img/icon/right-arrow.png" alt="" />
                    </div>
                </a>
            </div>
            {/* circel button group END */}

            <Footer />
        </div>
    );
};

// export default checkAuth(Trading);
export default Trading;
