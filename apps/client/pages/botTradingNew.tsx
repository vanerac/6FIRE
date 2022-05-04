import type { NextPage } from 'next';
import router from 'next/router';
import Footer from './components/footer';
import Header from './components/header';
// import checkAuth from './components/checkAuth';
import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import getAPIClient from '@shared/tools/apiClient';
import Head from 'next/head';

const BotTrading: NextPage = (props: any) => {
    const [cookies] = useCookies(['API_TOKEN']);
    const $apiClient = getAPIClient(cookies['API_TOKEN']);
    const [$linkingCode, setLinkingCode] = useState('');
    const [$loading, setLoading] = useState(true);
    const [$error, setError] = useState('');

    useEffect(() => {
        if (!cookies['API_TOKEN']) {
            console.log('no token');
            router.replace('/');
            return;
        }

        setLoading(true);
        $apiClient.user
            .getLinkingCode()
            .then(({ code }) => {
                setLinkingCode(code ?? 'Aucun code !');
                setLoading(false);
            })
            .catch((error) => {
                setError(error.i18n ?? error.message ?? 'Unknown error');
                setLoading(false);
            });
    }, []);

    return (
        <div>
            <Header />

            {/* Treading Wrapper */}
            <div className="trading-wrapper">
                <div className="treading-header">
                    <img src="/img/bottrading/bot-trader-long.png" alt="" className="header-bg" />
                    <div className="content">
                        <h4 className="title">Suivez les meilleurs Trader Binance</h4>
                        <p>Reçois en LIVE les positions des meilleurs traders BINANCE grâce à notre robot Telegram  !</p>

                        <div className="bot-button-group">
                            <a className='active' href='#'>ACCÈS AU BOT</a>
                            <a href='#'>TRADERS</a>
                        </div>
                    </div>
                </div>
                <div className="text-box container">
                    <h3 className="title">RECEVEZ EN TEMPS RÉEL LES ALERTES DES MEILLEURS TRADERS BINANCE</h3>
                    <p>Nous avons développez un robot permettant de recevoir des alertes à la seconde où un trader du top 15 BINANCE prend une position. Tu peux sélectionner le trader de ton choix et recevoir en live des alertes Telegram à l’ouverture ou à la fermeture d’un trade !</p>
                </div>

                <div className="text-box bg-light-black">
                        <div className="wrap">
                            <div className="question">
                                <div className="number">1</div>
                                <h3 className="title">Comment accéder au Bot Telegram ?</h3>
                            </div>
                            <p>Pour rejoindre le Bot Trading sur Telegram, copiez coller votre identifiant ci-dessous :</p>

                            <div className="copy">
                                <span className='code'>ERD251445ERD251445ERD251445</span>
                                <span className="copyCode">Copier</span>
                            </div>
                        </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default BotTrading;
// export default checkAuth(BotTrading);
