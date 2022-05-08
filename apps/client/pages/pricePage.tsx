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
import PaymentWrapper from './components/price-page/payline';

import Abonnement from './components/price-page/abonnement';
import PaymentWidget from './components/price-page/payline';

const PricePage: NextPage = (props: any) => {
    const [cookies] = useCookies(['API_TOKEN']);
    const apiClient = getAPIClient(cookies['API_TOKEN']);
    const [$subscriptions, setSubscriptions] = useState<Subscription[]>([]);
    const [$loading, setLoading] = useState(true);
    const [$error, setError] = useState('');
    const [paylineToken, setPaylineToken] = useState<string>();

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

    const onSuccess = () => {
        console.log('uii');
    };

    const instantiatePayment = (_subId: string, paymentProvider: 'stripe' | 'payline') => {
        apiClient.payment
            .createPayment({
                subscriptionId: _subId.toString(),
                provider: paymentProvider ?? 'stripe',
            })
            .then((payment) => {
                if (paymentProvider === 'payline') {
                    setPaylineToken((payment as { token: string }).token);
                }
                return (
                    <PaymentWidget
                        token={(payment as { url: string }).url}
                        successCb={onSuccess}
                        errorCb={console.log}
                        show={true}
                    />
                );
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
                                            subName={subscription.subDesc}
                                            isBestSeller={subscription.isBestValue}
                                            limited={subscription.limited.toString()}
                                            subscriptionType={subscription.subscriptionType}
                                            level={subscription.level}
                                            paymentProvider={subscription.paymentProvider}
                                        />
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Pricing table 2 */}
                <div className="pricing_second_block">
                    {$subscriptions.filter((sub) => sub.subscriptionType === 'ONETIME').length !== 0 && (
                        <div className="pricing_table">
                            {$subscriptions.map((subscription, index) => {
                                if (subscription.subscriptionType === 'ONETIME') {
                                    return (
                                        <div key={subscription.id}>
                                            <Abonnement
                                                isMain={index === 2 ? true : false}
                                                name={subscription.name}
                                                price={subscription.price.toString()}
                                                onStartSubscription={instantiatePayment}
                                                subName={subscription.subDesc}
                                                isBestSeller={subscription.isBestValue}
                                                limited={subscription.limited.toString()}
                                                subscriptionType={subscription.subscriptionType}
                                                level={subscription.level}
                                                paymentProvider={subscription.paymentProvider}
                                            />
                                        </div>
                                    );
                                }
                            })}
                        </div>
                    )}
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default PricePage;
// export default checkAuth(PricePage);
