import React, { useEffect, useState } from 'react';
import Topbar from '../components/topbarNew';
import getAPIClient from '@shared/tools/apiClient';
import { Broker } from '@shared/services';
import router from 'next/router';
import { useCookies } from 'react-cookie';

export default function BrokerCreation() {
    const [cookies] = useCookies(['API_TOKEN']);
    const apiClient = getAPIClient(cookies['API_TOKEN']);

    const [$loading, setLoading] = useState(true);
    const [$error, setError] = useState('');
    const [$broker, setBroker] = useState<Broker>();

    //name
    const [$name, $setName] = useState('');
    // url
    const [$url, $setUrl] = useState('');

    // image
    const [$image, $setImage] = useState<Blob>();

    const id = 1; // TODO

    useEffect(() => {
        if (!cookies['API_TOKEN']) {
            console.log('no token');
            router.replace('/');
            return;
        }

        apiClient.broker.getBroker(id).then(
            (res) => {
                setBroker(res as Broker);
                setLoading(false);
            },
            (error) => {
                setError(error.i18n ?? error.message ?? 'Unknown error');
                setLoading(false);
            },
        );
    }, []);

    const $saveBroker = () => {
        if ($broker) {
            // update
            apiClient.broker
                .updateBroker($broker.id as number, {
                    ...$broker,
                    name: $name,
                    url: $url,
                    image: $image as any, // Todo: this might break
                })
                .then(
                    (res) => {
                        console.log('update broker', res);
                    },
                    (error) => {
                        console.log('update broker error', error);
                    },
                );
        } else {
            // create
            apiClient.broker
                .createBroker({
                    name: $name,
                    url: $url,
                    image: $image as any, // Todo: this might break
                })
                .then(
                    (res) => {
                        console.log('create broker', res);
                    },
                    (error) => {
                        console.log('create broker error', error);
                    },
                );
        }
    };

    const $deleteBroker = () => {
        if (!$broker) return;

        apiClient.broker.deleteBroker($broker.id as any).then(
            () => {
                router.replace('/');
            },
            (error) => {
                setError(error.i18n ?? error.message ?? 'Unknown error');
            },
        );
    };
    return (
        <>
            <input type="hidden" id="anPageName" name="page" value="broker-creer-un-broker" />
            <div className="container-center-horizontal">
                <div className="broker-creer-un-broker screen">
                    <div className="analytics-A9axGX poppins-semibold-semi-bold-mirage-24px">Broker</div>
                    <Topbar />
                    <div className="buttons-btn-text-icon-A9axGX">
                        <div className="type-byk8PY"></div>
                        <div className="groupe-393-byk8PY">
                            <div className="text-Ght4Gl poppins-normal-white-14px">Créer Broker</div>
                        </div>
                    </div>
                    <div className="broker-A9axGX">
                        <div className="rectangle-632-KTElc3"></div>
                        <div className="titre-KTElc3">
                            <div className="rectangle-633-1A7TJH"></div>
                            <div className="analytics-1A7TJH poppins-semibold-semi-bold-white-14px">Broker</div>
                        </div>
                        <div className="image-KTElc3">
                            <div className="logo-broker-vGg0Wi lato-normal-comet-10px">Logo Broker</div>
                            <img className="image-1-vGg0Wi" src="img/image-1-1@1x.png" />
                            <div className="buttons-btn-text-icon-vGg0Wi">
                                <div className="type-PrhrWb"></div>
                                <div className="groupe-393-PrhrWb">
                                    <div className="text-Ivk56x poppins-normal-white-12px">Select Logo</div>
                                </div>
                            </div>
                        </div>
                        <div className="thme-slectionn-KTElc3">
                            <img className="ligne-6-xSO1ku" src="img/ligne-6-1@1x.png" />
                            <div className="nom-xSO1ku poppins-normal-tundora-12px">Nom</div>
                            <div className="thme-slectionn-xSO1ku lato-normal-comet-10px">Thème sélectionné</div>
                        </div>
                        <div className="url-KTElc3">
                            <img className="ligne-6-uRqkqY" src="img/ligne-6-1@1x.png" />
                            <div className="https-uRqkqY poppins-normal-tundora-12px">https://……</div>
                            <div className="url-uRqkqY lato-normal-comet-10px">URL</div>
                        </div>
                    </div>
                    <div className="sidebar-A9axGX">
                        <div className="shape-tgwR1y"></div>
                        <a href="parametres.html">
                            <div className="settings-tgwR1y">
                                <div className="name-JQIS8q poppins-medium-mirage-14px">Settings</div>
                                <div className="icons-navigation-icon-12-states-JQIS8q">
                                    <img className="ic_setting-T0rgzV" src="img/ic-setting-11@1x.png" />
                                </div>
                            </div>
                        </a>
                        <div className="broker-tgwR1y">
                            <img className="frame-jSGE8f" src="img/frame-12@1x.png" />
                            <div className="line-jSGE8f"></div>
                            <div className="name-jSGE8f poppins-medium-blue-ribbon-14px">Broker</div>
                            <img className="font-awsome-handshake-jSGE8f" src="img/fontawsome--handshake--11@1x.png" />
                        </div>
                        <a href="crypto-wallet.html">
                            <div className="crypto-wallet-tgwR1y">
                                <div className="name-Et7bZM poppins-medium-mirage-14px">Crypto Wallet</div>
                                <img className="font-awsome-bitcoin-Et7bZM" src="img/fontawsome--bitcoin--11@1x.png" />
                            </div>
                        </a>
                        <div className="trading-crypto-tgwR1y">
                            <div className="name-T2iHB4 poppins-medium-mirage-14px">Trading &amp; Crypto</div>
                            <img className="font-awsome-pen-T2iHB4" src="img/fontawsome--pen--10@1x.png" />
                        </div>
                        <div className="thmes-articles-tgwR1y">
                            <div className="name-hmy13K poppins-medium-mirage-14px">Thèmes articles</div>
                            <div className="icons-navigation-icon-12-states-hmy13K">
                                <img
                                    className="font-awsome-bookmark-lwFFPI"
                                    src="img/fontawsome--bookmark--10@1x.png"
                                />
                            </div>
                        </div>
                        <div className="customers-tgwR1y">
                            <div className="name-ZlH5o1 poppins-medium-mirage-14px">Utilisateurs</div>
                            <div className="icons-navigation-icon-12-states-ZlH5o1">
                                <img className="ic_users-GCsSB3" src="img/ic-users-11@1x.png" />
                            </div>
                        </div>
                        <div className="home-tgwR1y">
                            <div className="name-wnxBSc poppins-medium-mirage-14px">Home</div>
                            <div className="icons-navigation-icon-12-states-wnxBSc">
                                <img className="ic_home-1iTEoT" src="img/ic-home-10@1x.png" />
                            </div>
                        </div>
                        <div className="articles-tgwR1y">
                            <div className="name-HYEiy0 poppins-medium-mirage-14px">Articles</div>
                            <div className="icons-navigation-icon-12-states-HYEiy0">
                                <img className="ic_invoice-JkqsRV" src="img/ic-invoice-10@1x.png" />
                            </div>
                            <img
                                className="icon-ionic-ios-arrow-down-HYEiy0"
                                src="img/icon-ionic-ios-arrow-down-10@1x.png"
                            />
                        </div>
                        <div className="bot-trading-tgwR1y">
                            <div className="name-ucbluT poppins-medium-mirage-14px">Bot Trading</div>
                            <img className="font-awsome-robot-ucbluT" src="img/fontawsome--robot--10@1x.png" />
                        </div>
                        <a href="pays.html">
                            <div className="pays-tgwR1y">
                                <div className="name-NjjJxX poppins-medium-mirage-14px">Pays</div>
                                <img
                                    className="font-awsome-globe-europe-NjjJxX"
                                    src="img/fontawsome--globe-europe--10@1x.png"
                                />
                            </div>
                        </a>
                        <a href="abonnement-gestion-abonnements.html">
                            <div className="abonnement-tgwR1y">
                                <div className="name-x9gxR2 poppins-medium-mirage-14px">Abonnement</div>
                                <img
                                    className="icon-material-payment-x9gxR2"
                                    src="img/icon-material-payment-10@1x.png"
                                />
                                <img
                                    className="icon-ionic-ios-arrow-down-x9gxR2"
                                    src="img/icon-ionic-ios-arrow-down-10@1x.png"
                                />
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}
