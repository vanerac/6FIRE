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
import PaymentWrapper from './components/payline';

import Abonnement from './components/price-page/abonnement';

const PricePage: NextPage = (props: any) => {
    const [cookies] = useCookies(['API_TOKEN']);
    const apiClient = getAPIClient(cookies['API_TOKEN']);
    const [$subscriptions, setSubscriptions] = useState<Subscription[]>([]);
    const [$loading, setLoading] = useState(true);
    const [$error, setError] = useState('');
    const [paylineToken, setPaylineToken] = useState();

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
        apiClient.payment
            .createPayment({
                provider: 'payline',
                subscriptionId: '2',
            })
            .then((res: any) => {
                console.log(res);
                if (res.token) setPaylineToken(res.token);
            });
    }, []);

    const instantiatePayment = (_subId: string) => {
        apiClient.payment
            .createPayment({
                subscriptionId: _subId.toString(),
                provider: 'stripe',
            })
            .then((payment) => {
                return <PaymentWidget token={payment.url as string} onSuccess={console.log} onError={console.log} />;
            });
        setLoading(true);
    };

    console.log($subscriptions);

    return (
        <div>
            <Head>
                <title>Abonnement Prix - Crypto Trader</title>
                <PaylineHead />
                <link href="https://homologation-payment.cdn.payline.com/cdn/styles/widget-min.css" rel="stylesheet" />
            </Head>
            <input type="hidden" id="anPageName" name="page" value="prices-page" />
            <Header isOpenSideBar={props.useStateOpenSideBar} isEspaceTradingCrypto={false} />

            <div className="pricing_wrapper">
                <div className="pricing_header_block">
                    <div className="bg-image">
                        <img src="img/mask-group-331@1x.png" alt="" />
                    </div>

                    {paylineToken ? (
                        <PaymentWrapper
                            token={paylineToken}
                            successCb={() => console.log('success')}
                            errorCb={(v) => console.log(v)}
                            show={!!paylineToken}
                        />
                    ) : null}
                    <div className="section_container">
                        <div className="text">
                            <h2 className="title">VOTRE LICENCE 6FIRE INVEST </h2>
                            <p>
                                L’accès au club 6FIRE est soumis à une licence payante pour éviter d’avoir des membres
                                perturbateurs, non impliqué et n’étant pas dans l’esprit et la dynamique du club.
                            </p>
                        </div>

                        <div className="pricing_table">
                            {$subscriptions.map((subscription, index) => {
                                return (
                                    <div key={subscription.id}>
                                        <Abonnement
                                            isMain={index === 2 ? true : false}
                                            name={subscription.name}
                                            price={subscription.price.toString()}
                                            onStartSubscription={instantiatePayment}
                                            subName={subscription.subName}
                                            isBestSeller={subscription.isBestSeller}
                                            limited={subscription.limited}
                                            subscriptionType={subscription.subscriptionType}
                                        />
                                    </div>
                                );
                            })}
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
