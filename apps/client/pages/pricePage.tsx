import type { NextPage } from 'next';
import Footer from './components/footer';
import Header from './components/header';
// import checkAuth from './components/checkAuth';
import router from 'next/router';
import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import getAPIClient from '@shared/tools/apiClient';
import { Subscription } from '@shared/services';
import Head from 'next/head';
import { PaylineHead } from 'react-payline';

const PricePage: NextPage = (props: any) => {
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

    const $subcribe = ($subscriptionId: string) => {
        // Todo: get subscription method
        //     apiClient.payment
        //         .createPayment({
        //             subscriptionId: subscriptionId.toString(),
        //             provider: '',
        //         })
        //         .then((payment) => {
        //             return (
        //                 <PaymentWidget token={payment.paymentUrl as string} onSuccess={console.log} onError={console.log} />
        //             );
        //         });
        setLoading(true);
    };

    // const instantiatePayment = (subscriptionId: number) => {
    //     apiClient.payment
    //         .createPayment({
    //             subscriptionId: subscriptionId.toString(),
    //             provider: 'payline',
    //         })
    //         .then((payment) => {
    //             return (
    //                 <PaymentWidget token={payment.paymentUrl as string} onSuccess={console.log} onError={console.log} />
    //             );
    //         });
    // };

    return (
        <div>
            <Head>
                <title>Abonnement Prix - Crypto Trader</title>
                <PaylineHead production />
            </Head>
            <input type="hidden" id="anPageName" name="page" value="prices-page" />
            <Header isOpenSideBar={props.useStateOpenSideBar} isEspaceTradingCrypto={false} />

            <div className="pricing_wrapper">
                <div className="pricing_header_block">
                    <div className="bg-image">
                        <img src="img/mask-group-331@1x.png" alt="" />
                    </div>

                    <div className="section_container">
                        <div className="text">
                            <h2 className="title">VOTRE LICENCE 6FIRE INVEST </h2>
                            <p>
                                L’accès au club 6FIRE est soumis à une licence payante pour éviter d’avoir des membres
                                perturbateurs, non impliqué et n’étant pas dans l’esprit et la dynamique du club.
                            </p>
                        </div>

                        <div className="pricing_table">
                            {/* single table */}
                            <div className="single_table">
                                <div className="price_head">
                                    <div className="title">
                                        <h3>
                                            Novice <span>(Pour les débutants/frileux)</span>
                                        </h3>
                                    </div>
                                    <div className="price">
                                        49,99€ <span>/mois</span>
                                    </div>

                                    <button
                                        // onClick={() => instantiatePayment(1)}
                                        type="submit"
                                        className="primary-button">
                                        <span>Commencer</span>
                                        <div className="right-arrow">
                                            <img src="/img/icon/right-arrow.png" alt="" />
                                        </div>
                                    </button>
                                    <div className="description_wrap">
                                        <ul>
                                            <li>
                                                <img src="/img/icon/check.png" alt="" /> Licence 6FIRE
                                            </li>
                                            <li>
                                                <img src="/img/icon/check.png" alt="" /> Accès à tous les articles pour
                                                comprendre le monde de l’investissement
                                            </li>
                                            <li>
                                                <img src="/img/icon/check.png" alt="" /> Accès aux Bons Plans
                                            </li>
                                            <li>
                                                <img src="/img/icon/check.png" alt="" /> Accès aux articles permettant
                                                de se lancer dans le monde de l’investissement sans budget à travers des
                                                dizaines d’opportunités
                                            </li>
                                            <li>
                                                <img src="/img/icon/check.png" alt="" />
                                                Accès aux rencontres et événements privés des membres en France
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="price_footer">
                                    <p>Offre sans engagement, annulable à tout moment</p>
                                </div>
                            </div>

                            {/* single table */}
                            <div className="single_table active">
                                <div className="price_head">
                                    <div className="title">
                                        <h3>
                                            INTERMÉDIAIRE <span>{/*(Pour les ambitieux, qui veulent trader)*/}</span>
                                        </h3>
                                    </div>
                                    <div className="price">
                                        99,99€ <span>/mois</span>
                                    </div>

                                    <button type="submit" className="primary-button">
                                        <span>Commencer</span>
                                        <div className="right-arrow">
                                            <img src="/img/icon/right-arrow.png" alt="" />
                                        </div>
                                    </button>

                                    <div className="description_wrap">
                                        <ul>
                                            <li>
                                                <img src="/img/icon/check.png" alt="" />
                                                Accès aux options de la Licence Novice
                                            </li>
                                            {/*<li>*/}
                                            {/*    <img src="/img/icon/plus.png" alt="" />*/}
                                            {/*    Accès au BOT TRADING permettant d’obtenir les alertes des meilleurs*/}
                                            {/*    traders du monde sur Binance*/}
                                            {/*</li>*/}
                                            {/*<li>*/}
                                            {/*    <img src="/img/icon/plus.png" alt="" />*/}
                                            {/*    Accès à nos analyses sur les marchés*/}
                                            {/*</li>*/}
                                            {/*<li>*/}
                                            {/*    <img src="/img/icon/plus.png" alt="" />*/}
                                            {/*    Accès à notre portefeuille Crypto et nos choix en temps réel pour le*/}
                                            {/*    long terme*/}
                                            {/*</li>*/}
                                            {/*<li>*/}
                                            {/*    <img src="/img/icon/plus.png" alt="" />*/}
                                            {/*    Accès aux signaux FOREX & CRYPTO permettant de voir en temps réel les*/}
                                            {/*    positions que nous prenons sur les marchés*/}
                                            {/*</li>*/}
                                            {/*<li>*/}
                                            {/*    <img src="/img/icon/plus.png" alt="" />*/}
                                            {/*    Accès à nos résultats*/}
                                            {/*</li>*/}
                                            {/*<li>*/}
                                            {/*    <img src="/img/icon/plus.png" alt="" />*/}
                                            {/*    Accès à nos outils d’analyses secrets sur les marchés financiers*/}
                                            {/*</li>*/}
                                            {/*<li>*/}
                                            {/*    <img src="/img/icon/plus.png" alt="" />*/}
                                            {/*    Challenge 1K to 10K*/}
                                            {/*</li>*/}
                                            <li>
                                                <img src="/img/icon/check.png" alt="" /> Accès à tous les articles pour
                                                comprendre le monde de l’investissement
                                            </li>
                                            <li>
                                                <img src="/img/icon/check.png" alt="" /> Accès aux Bons Plans
                                            </li>
                                            <li>
                                                <img src="/img/icon/check.png" alt="" /> Accès aux articles permettant
                                                de se lancer dans le monde de l’investissement sans budget à travers des
                                                dizaines d’opportunités
                                            </li>
                                            <li>
                                                <img src="/img/icon/check.png" alt="" />
                                                Accès aux rencontres et événements privés des membres en France
                                            </li>
                                            <li>
                                                <img src="/img/icon/plus.png" alt="" />
                                                Support 24h/24 et 7j/7 pour les membres
                                            </li>
                                            <li>
                                                <img src="/img/icon/plus.png" alt="" />
                                                Présentation des cryptomonnaies chaque semaine
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="price_footer">
                                    <p>Offre sans engagement, annulable à tout moment</p>
                                </div>
                            </div>

                            {/* single table */}
                            <div className="single_table">
                                <div className="price_head">
                                    <div className="title">PARTENAIRE 6FIRE</div>
                                    <div className="price">
                                        199,99€ <span>/mois</span>
                                    </div>

                                    <button type="submit" className="primary-button">
                                        <span>Commencer</span>
                                        <div className="right-arrow">
                                            <img src="/img/icon/right-arrow.png" alt="" />
                                        </div>
                                    </button>

                                    <div className="description_wrap">
                                        <div className="body-title">
                                            <span>20</span>
                                            <h5>PLACES DISPONIBLES UNIQUEMENT</h5>
                                        </div>

                                        <ul>
                                            <li>
                                                <img src="/img/icon/check.png" alt="" />
                                                Accès aux options de la Licence Novice et Intermédiaire
                                            </li>
                                            <li>
                                                <img src="/img/icon/plus.png" alt="" />
                                                Accès aux options de la Licence Novice et Intermédiaire
                                            </li>
                                            <li>
                                                <img src="/img/icon/plus.png" alt="" />
                                                Contact en temps réel avec les mentors pour tout suivi de projet en
                                                illimité
                                            </li>
                                            <li>
                                                <img src="/img/icon/plus.png" alt="" />
                                                Un call une fois par semaine avec tous les partenaires
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="price_footer">
                                    <p>Offre sans engagement, annulable à tout moment</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Pricing table 2 */}
                <div className="pricing_second_block">
                    <div className="pricing_table">
                        {/* single table */}
                        <div className="single_table">
                            <div className="price_head">
                                <div className="title">
                                    <h3>
                                        Novice <span>(Pour les débutants/frileux)</span>
                                    </h3>
                                </div>
                                <div className="price">
                                    49,99€ <span>/mois</span>
                                </div>

                                <div className="small-des">
                                    <p>Économisez 50 euros en prenant la licence novice d’un an !</p>
                                </div>

                                <button type="submit" className="primary-button">
                                    <span>Commencer</span>
                                    <div className="right-arrow">
                                        <img src="/img/icon/right-arrow.png" alt="" />
                                    </div>
                                </button>
                            </div>
                        </div>

                        {/* single table */}
                        <div className="single_table active_seller">
                            <div className="price_head">
                                <div className="title">
                                    <h3>
                                        INTERMÉDIAIRE <span>(Pour les ambitieux, qui veulent trader)</span>
                                    </h3>
                                    <button className="best-seller">BEST SELLER</button>
                                </div>
                                <div className="price">
                                    99,99€ <span>/mois</span>
                                </div>

                                <div className="small-des">
                                    <p>Économisez 600 euros en prenant la licence intermédiaire d’un an !</p>
                                </div>

                                <button type="submit" className="primary-button">
                                    <span>Commencer</span>
                                    <div className="right-arrow">
                                        <img src="/img/icon/right-arrow.png" alt="" />
                                    </div>
                                </button>
                            </div>
                        </div>

                        {/* single table */}
                        <div className="single_table active_seller">
                            <div className="price_head">
                                <div className="title">
                                    <h3>
                                        PARTENAIRE <span>Licence annuelle</span>
                                    </h3>
                                    <button className="best-seller">BEST SELLER</button>
                                </div>
                                <div className="price">
                                    199,99€ <span>/mois</span>
                                </div>

                                <div className="small-des">
                                    <p>Économisez 1600 euros en prenant la licence intermédiaire d’un an !</p>
                                </div>

                                <button type="submit" className="primary-button">
                                    <span>Commencer</span>
                                    <div className="right-arrow">
                                        <img src="/img/icon/right-arrow.png" alt="" />
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default PricePage;
// export default checkAuth(PricePage);
