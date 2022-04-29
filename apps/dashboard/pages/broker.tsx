import React, { useEffect, useState } from 'react';
import Topbar from '../components/topbar';
import getAPIClient from '@shared/tools/apiClient';
import { Broker } from '@shared/services';
import router from 'next/router';
import { useCookies } from 'react-cookie';

export default function Broker() {
    const [cookies] = useCookies(['API_TOKEN']);
    const apiClient = getAPIClient(cookies['API_TOKEN']);

    const [$loading, setLoading] = useState(true);
    const [$error, setError] = useState('');
    const [$brokers, setBrokers] = useState<Broker[]>();

    useEffect(() => {
        if (!cookies['API_TOKEN']) {
            console.log('no token');
            router.replace('/');
            return;
        }

        apiClient.broker.getBrokers().then(
            (res) => {
                setBrokers(res as Broker[]);
                setLoading(false);
            },
            (error) => {
                setError(error.i18n ?? error.message ?? 'Unknown error');
                setLoading(false);
            },
        );
    }, []);
    return (
        <>
            <input type="hidden" id="anPageName" name="page" value="broker" />
            <div className="container-center-horizontal">
                <div className="broker screen">
                    <div className="analytics-5ITOEV poppins-semibold-semi-bold-mirage-24px">Broker</div>
                    <Topbar />
                    <a href="broker-creer-un-broker.html">
                        <div className="buttons-btn-text-icon-5ITOEV">
                            <div className="type-o6Sm8g"></div>
                            <div className="groupe-393-o6Sm8g">
                                <div className="text-2mDgAd poppins-normal-white-14px">Créer un Broker</div>
                            </div>
                        </div>
                    </a>
                    <div className="grid-table-5ITOEV">
                        <div className="groupe-455-xSiFws">
                            <div className="rectangle-616-qX6ozW"></div>
                            <div className="rectangle-618-qX6ozW"></div>
                            <div className="rectangle-619-qX6ozW"></div>
                            <div className="rectangle-621-qX6ozW"></div>
                            <div className="rectangle-622-qX6ozW"></div>
                            <div className="rectangle-623-qX6ozW"></div>
                            <div className="rectangle-624-qX6ozW"></div>
                        </div>
                        <div className="grid-table-xSiFws">
                            <div className="name-U5IxZJ poppins-medium-mirage-12px">ID</div>
                            <div className="name-5oQeFx poppins-medium-mirage-12px">Broker</div>
                            <div className="name-vtHmEe poppins-medium-mirage-12px">Action</div>
                            <div className="name-JK2tUZ poppins-medium-mirage-12px">Logo</div>
                        </div>
                        <div className="groupe-454-xSiFws">
                            <div className="rectangle-617-T4T2ms"></div>
                            <div className="name-T4T2ms poppins-medium-tundora-10px">1</div>
                            <div className="name-SRWHeO poppins-medium-tundora-10px">Cjuidofi</div>
                            <img className="font-awsome-pen-T4T2ms" src="img/fontawsome--pen--12@1x.png" />
                            <img className="font-awsome-times-T4T2ms" src="img/fontawsome--times--10@1x.png" />
                        </div>
                    </div>
                    <div className="search-5ITOEV">
                        <div className="rectangle-625-yMi7UJ"></div>
                        <div className="name-yMi7UJ poppins-medium-mirage-10px">Rechercher…</div>
                    </div>
                    <div className="sidebar-5ITOEV">
                        <div className="shape-RY5x7r"></div>
                        <div className="settings-RY5x7r">
                            <div className="name-zHxyjN poppins-medium-mirage-14px">Settings</div>
                            <div className="icons-navigation-icon-12-states-zHxyjN">
                                <img className="ic_setting-nUTPbM" src="img/ic-setting-11@1x.png" />
                            </div>
                        </div>
                        <div className="broker-RY5x7r">
                            <img className="frame-vGRIj3" src="img/frame-12@1x.png" />
                            <div className="line-vGRIj3"></div>
                            <div className="name-vGRIj3 poppins-medium-blue-ribbon-14px">Broker</div>
                            <img className="font-awsome-handshake-vGRIj3" src="img/fontawsome--handshake--11@1x.png" />
                        </div>
                        <div className="crypto-wallet-RY5x7r">
                            <div className="name-HqdvPT poppins-medium-mirage-14px">Crypto Wallet</div>
                            <img className="font-awsome-bitcoin-HqdvPT" src="img/fontawsome--bitcoin--11@1x.png" />
                        </div>
                        <div className="trading-crypto-RY5x7r">
                            <div className="name-Zi5Ua8 poppins-medium-mirage-14px">Trading &amp; Crypto</div>
                            <img className="font-awsome-pen-Zi5Ua8" src="img/fontawsome--pen--10@1x.png" />
                        </div>
                        <div className="thmes-articles-RY5x7r">
                            <div className="name-G38iTJ poppins-medium-mirage-14px">Thèmes articles</div>
                            <div className="icons-navigation-icon-12-states-G38iTJ">
                                <img
                                    className="font-awsome-bookmark-nfkPcj"
                                    src="img/fontawsome--bookmark--10@1x.png"
                                />
                            </div>
                        </div>
                        <div className="customers-RY5x7r">
                            <div className="name-q2MdmD poppins-medium-mirage-14px">Utilisateurs</div>
                            <div className="icons-navigation-icon-12-states-q2MdmD">
                                <img className="ic_users-G1mAIO" src="img/ic-users-11@1x.png" />
                            </div>
                        </div>
                        <div className="home-RY5x7r">
                            <div className="name-wiWKSJ poppins-medium-mirage-14px">Home</div>
                            <div className="icons-navigation-icon-12-states-wiWKSJ">
                                <img className="ic_home-tTijEy" src="img/ic-home-10@1x.png" />
                            </div>
                        </div>
                        <div className="articles-RY5x7r">
                            <div className="name-AAUbY9 poppins-medium-mirage-14px">Articles</div>
                            <div className="icons-navigation-icon-12-states-AAUbY9">
                                <img className="ic_invoice-TnvAau" src="img/ic-invoice-10@1x.png" />
                            </div>
                            <img
                                className="icon-ionic-ios-arrow-down-AAUbY9"
                                src="img/icon-ionic-ios-arrow-down-10@1x.png"
                            />
                        </div>
                        <div className="bot-trading-RY5x7r">
                            <div className="name-BFT0R4 poppins-medium-mirage-14px">Bot Trading</div>
                            <img className="font-awsome-robot-BFT0R4" src="img/fontawsome--robot--10@1x.png" />
                        </div>
                        <div className="pays-RY5x7r">
                            <div className="name-U8CadT poppins-medium-mirage-14px">Pays</div>
                            <img
                                className="font-awsome-globe-europe-U8CadT"
                                src="img/fontawsome--globe-europe--10@1x.png"
                            />
                        </div>
                        <div className="abonnement-RY5x7r">
                            <div className="name-g2bgmU poppins-medium-mirage-14px">Abonnement</div>
                            <img className="icon-material-payment-g2bgmU" src="img/icon-material-payment-10@1x.png" />
                            <img
                                className="icon-ionic-ios-arrow-down-g2bgmU"
                                src="img/icon-ionic-ios-arrow-down-10@1x.png"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
