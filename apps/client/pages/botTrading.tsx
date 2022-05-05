import type { NextPage } from 'next';
import router from 'next/router';
import Header from './components/header';
import Footer from './components/footer';
// import checkAuth from './components/checkAuth';
import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import getAPIClient from '@shared/tools/apiClient';
import Head from 'next/head';

const BotTrading: NextPage = ($props: any) => {
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
            <Head>
                <title>Bot Trading - Crypto Trader</title>
            </Head>
            <Header />
            <input type="hidden" id="anPageName" name="page" value="bot-trading" />

            {/* Treading Wrapper */}
            <div className="trading-wrapper">
                <div className="treading-header">
                    <img src="/img/bottrading/bot-trader-long.png" alt="" className="header-bg" />
                    <div className="content">
                        <h4 className="title">Suivez les meilleurs Trader Binance</h4>
                        <p>Reçois en LIVE les positions des meilleurs traders BINANCE grâce à notre robot Telegram !</p>

                        <div className="bot-button-group">
                            <a className="active" href="#">
                                ACCÈS AU BOT
                            </a>
                            <a href="#">TRADERS</a>
                        </div>
                    </div>
                </div>
                <div className="text-box container">
                    <h3 className="title">RECEVEZ EN TEMPS RÉEL LES ALERTES DES MEILLEURS TRADERS BINANCE</h3>
                    <p>
                        Nous avons développez un robot permettant de recevoir des alertes à la seconde où un trader du
                        top 15 BINANCE prend une position. Tu peux sélectionner le trader de ton choix et recevoir en
                        live des alertes Telegram à l’ouverture ou à la fermeture d’un trade !
                    </p>
                </div>

                <div className="text-box bg-light-black">
                    <div className="wrap">
                        <div className="question">
                            <div className="number">1</div>
                            <h3 className="title">Comment accéder au Bot Telegram ?</h3>
                        </div>
                        <p>Pour rejoindre le Bot Trading sur Telegram, copiez coller votre identifiant ci-dessous :</p>

                        <div className="copy">
                            <span className="code">ERD251445ERD251445ERD251445</span>
                            <span className="copyCode">Copier</span>
                        </div>
                    </div>
                </div>

                <div className="text-box">
                    <div className="wrap">
                        <div className="question">
                            <div className="number">2</div>
                            <h3 className="title">Activer le Bot Telegram</h3>
                        </div>
                        <p>Cliquez sur le bouton «Rejoindre le BOT» puis envoyez START/ et ton code</p>
                        <p>
                            Vous allez recevoir ensuite un message du Bot et vous devrez coller votre identifiant que
                            vous avez déjà copié à l’étape 1.
                        </p>

                        <button className="primary-button">REJOINDRE LE BOT</button>
                    </div>
                </div>

                <div className="text-box bg-light-black">
                    <div className="wrap">
                        <div className="question">
                            <div className="number">3</div>
                            <h3 className="title">Comment accéder au Bot Telegram ?</h3>
                        </div>
                        <p>
                            Vous avez reçu un mail de confirmation suite à l’envoi de votre identifiant au Bot Telegram
                            lors de l’étape 2.
                        </p>
                        <p>Cliquez sur le bouton «Confirmer mon accès au Bot» sur le mail.</p>
                        <p>
                            <strong>Votre accès au Bot est maintenant confirmé !</strong>
                        </p>
                    </div>
                </div>

                <div className="text-box">
                    <div className="wrap">
                        <div className="question">
                            <div className="number">4</div>
                            <h3 className="title">
                                Choisissez jusqu’à 3 Traders sur la partie «Traders» de cette page
                            </h3>
                        </div>
                        <p>
                            Retrouvez sur la page Traders différents profiles Binance et leurs résultats. Vous pouvez
                            suivre jusqu’à 3 profils, une fois que vous avez sélectionné de un jusqu’à 3 traders vous
                            recevrez automatiquement leurs alertes sur Telegram grâce au Bot.
                        </p>
                        <p>Exemple :</p>

                        <div className="table-wrapper">
                            <table>
                                <tr>
                                    <td className="pl-30">
                                        <div className="user-wrap">
                                            <div className="rank">1</div>
                                            <img src="/img/icon/user-logo.png" alt="" />
                                            <div className="user-name">
                                                <span className="imgTitle">
                                                    TOP TRADER <img src="/img/icon/crown.png" alt="" />
                                                </span>
                                                <span className="company">WetCrossBus</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="green">1,495.44%</td>
                                    <td className="red">-136.46%</td>
                                    <td className="text-center">
                                        <button className="btn">+Suivre</button>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>

                <div className="text-box bg-light-black">
                    <div className="wrap">
                        <div className="question">
                            <div className="number">5</div>
                            <h3 className="title">Où prendre les Trades ? Contactez-nous !</h3>
                        </div>
                        <p>
                            Contactez nous pour passer à l’étape suivant et obtenir les explications. Nous vous
                            expliquerons où et comment prendre les Trades en direct.
                        </p>

                        <div className="btn-group">
                            <button className="primary-button bg-light-blue">
                                <img className="telegram" src="/img/icon/telegram.svg" alt="" />
                                <span>Support Telegram</span>
                            </button>
                            <button className="primary-button bg-ligh-green">
                                <img src="/img/icon/whatsapp.svg" alt="" />
                                <span>Support WhatsApp</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default BotTrading;
// export default checkAuth(BotTradingOld);
