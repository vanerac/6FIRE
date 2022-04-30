import type { NextPage } from 'next';
import router from 'next/router';
import Footer from './components/footer';
import Header from './components/header';
// import checkAuth from './components/checkAuth';
import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import getAPIClient from '@shared/tools/apiClient';
import { Trader } from '@shared/services';
import Head from 'next/head';

const BotTradingTrader: NextPage = (props: any) => {
    const [cookies] = useCookies(['API_TOKEN']);
    let apiClient = getAPIClient(cookies['API_TOKEN']);
    const [traders, setTraders] = useState<Trader[]>([]);
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
        apiClient.traders
            .getTraderCuration()
            .then((res) => {
                // Todo: return the subscription status of the user
                setTraders(res);
                setLoading(false);
            })
            .catch((error) => {
                setError(error.i18n ?? error.message ?? 'Unknown error');
                setLoading(false);
            });
    }, []);

    const $followTrader = (traderId: number) => {
        apiClient.traders
            .followTrader(traderId)
            .then(() => {
                traders.map((trader) => {
                    if (trader.id === traderId) {
                        // trader.isFollowing = true;
                    }
                });
                setTraders(traders);
            })
            .catch((err) => {
                setError(err.message);
            });
    };

    const $unfollowTrader = (traderId: number) => {
        apiClient.traders
            .unfollowTrader(traderId)
            .then(() => {
                traders.map((trader) => {
                    if (trader.id === traderId) {
                        // trader.isFollowing = false;
                    }
                });
                setTraders(traders);
            })
            .catch((err) => {
                setError(err.message);
            });
    };

    return (
        <div>
            <Head>
                <title>Bot Trading Trader - Crypto Trader</title>
            </Head>
            <input type="hidden" id="anPageName" name="page" value="bot-trading-traders" />
            <Header isOpenSideBar={props.useStateOpenSideBar} isEspaceTradingCrypto={false} />
            <div className="boat_Trading_Header">
                <img src="/img/mask-group-327-1@1x.png" alt="" />
                <div className="text-wrap">
                    <h4 className="title">Suivez les meilleurs Trader Binance</h4>
                    <p>
                        Sélectionnez les Trader Binance futures de votre choix et suivez leurs trades en live grâce à
                        notre robot Telegram.
                    </p>

                    <div className="button-wrap">
                        <a href="#">ACCÈS AU BOT</a>
                        <a href="#">TRADERS</a>
                    </div>
                </div>
            </div>

            <div className="treading_wrapper">
                <div className="text">
                    <strong>Recevez les alertes des traders de votre choix en temps réel sur telegram</strong>
                    <p>
                        Pour suivre un ou plusieurs Traders, vous devez d’abord rejoindre le Bot Trading et partagez
                        votre ID au bot. Vous pourrez ensuite suivre les traders de votre choix sur cette page et vous
                        recevrez automatiquement leurs alertes sur votre compte Telegram.{' '}
                    </p>
                </div>

                <div className="table-wrapper">
                    <table>
                        <thead>
                            <tr>
                                <td>Nom</td>
                                <td>ROI 30 derniers jours</td>
                                <td>ROI total</td>
                                <td className="text-center">Suivre</td>
                            </tr>
                        </thead>
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
                        <tr>
                            <td className="pl-30">
                                <div className="user-wrap">
                                    <div className="rank">2</div>
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
                        <tr>
                            <td className="pl-30">
                                <div className="user-wrap">
                                    <div className="rank">3</div>
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
                        <tr>
                            <td>
                                <div className="user-wrap">
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
                        <tr>
                            <td>
                                <div className="user-wrap">
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
                        <tr>
                            <td>
                                <div className="user-wrap">
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
                        <tr>
                            <td>
                                <div className="user-wrap">
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
                        <tr>
                            <td>
                                <div className="user-wrap">
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
                        <tr>
                            <td>
                                <div className="user-wrap">
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
                        <tr>
                            <td>
                                <div className="user-wrap">
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

            <Footer />
        </div>
    );
};

// export default checkAuth(BotTradingTrader);
export default BotTradingTrader;
