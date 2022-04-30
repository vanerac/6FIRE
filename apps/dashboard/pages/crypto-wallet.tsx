import React, { useEffect, useState } from 'react';
import Topbar from '../components/topbar';
import getAPIClient from '@shared/tools/apiClient';
import router from 'next/router';
import { CryptoHolding } from '@shared/services';
import { useCookies } from 'react-cookie';

export default function CryptoWallet() {
    const [cookies] = useCookies(['API_TOKEN']);
    const apiClient = getAPIClient(cookies['API_TOKEN']);

    const [$loading, setLoading] = useState(true);
    const [$error, setError] = useState('');
    const [$holdings, setHoldings] = useState<CryptoHolding[]>();
    const [$message, setMessage] = useState<string>();
    const [$date, setDate] = useState<string>();

    useEffect(() => {
        if (!cookies['API_TOKEN']) {
            console.log('no token');
            router.replace('/');
            return;
        }

        apiClient.crypto.getAllCrypto().then(
            ({ cryptos, messages: message }) => {
                setHoldings(cryptos);
                setMessage(message.message);
                setDate(message.date);
                setLoading(false);
            },
            (error) => {
                setError(error.i18n ?? error.message ?? 'Unknown error');
                setLoading(false);
            },
        );
    }, []);

    const $save = () => {
        setLoading(true);

        apiClient.crypto.setCryptos($holdings as CryptoHolding[]).then(
            (holdinds) => {
                setHoldings(holdinds);
                setLoading(false);
            },
            (error) => {
                setError(error.i18n ?? error.message ?? 'Unknown error');
                setLoading(false);
            },
        );
        apiClient.crypto.setMessage({ message: $message }).then(
            (message) => {
                setMessage(message.message);
                setLoading(false);
            },
            (error) => {
                setError(error.i18n ?? error.message ?? 'Unknown error');
                setLoading(false);
            },
        );
    };

    return (
        <>
            <input type="hidden" id="anPageName" name="page" value="crypto-wallet" />
            <div className="container-center-horizontal">
                <div className="crypto-wallet screen">
                    <div className="analytics-XPwy4i poppins-semibold-semi-bold-mirage-24px">Crypto Wallet</div>
                    <Topbar />
                    <div className="buttons-btn-text-icon-XPwy4i">
                        <div className="type-uamGX9"></div>
                        <div className="groupe-393-uamGX9">
                            <div className="text-b1CwRw poppins-normal-white-14px">Sauvegarder les modifications</div>
                        </div>
                    </div>
                    <div className="message-XPwy4i">
                        <div className="rectangle-632-cfYizJ"></div>
                        <div className="titre-cfYizJ">
                            <div className="rectangle-633-d6xsDF"></div>
                            <div className="analytics-d6xsDF poppins-semibold-semi-bold-white-14px">Message</div>
                        </div>
                        <div className="editeur-cfYizJ">
                            <div className="rectangle-16882-rRxnxa border-1px-silver"></div>
                            <img
                                className="notes-details-text-editor-rRxnxa"
                                src="img/notes--details--text-editor-4@1x.png"
                            />
                        </div>
                        <div className="paragraphe-cfYizJ lato-normal-comet-10px">Paragraphe</div>
                        <div className="id-fixe-cfYizJ">
                            <img className="ligne-6-jxSLtk" src="img/ligne-6-1@1x.png" />
                            <div className="x22032022-jxSLtk poppins-normal-tundora-12px">22/03/2022</div>
                            <div className="choisir-une-date-jxSLtk lato-normal-comet-10px">Choisir une date</div>
                            <img className="calendar-event-jxSLtk" src="img/calendar-event-2@1x.png" />
                        </div>
                    </div>
                    <div className="crypto-XPwy4i">
                        <div className="rectangle-632-wQ9yt9"></div>
                        <div className="titre-wQ9yt9">
                            <div className="rectangle-633-AfVSxZ"></div>
                            <div className="analytics-AfVSxZ poppins-semibold-semi-bold-white-14px">Crypto</div>
                        </div>
                        <div className="filtre-wQ9yt9">
                            <div className="rectangle-625-9dQQEU"></div>
                            <div className="name-9dQQEU poppins-medium-mirage-10px">Cryptomonnaie</div>
                            <img
                                className="font-awsome-chevron-down-9dQQEU"
                                src="img/fontawsome--chevron-down--10@1x.png"
                            />
                        </div>
                        <div className="crypto-select-wQ9yt9">
                            <img className="ligne-6-BBc1qW" src="img/ligne-6-37@1x.png" />
                            <div className="bitcoin-BBc1qW poppins-normal-tundora-12px">Bitcoin</div>
                            <div className="crypto-slectionn-BBc1qW lato-normal-comet-10px">Crypto Sélectionné</div>
                            <div className="layer_x0020_1-BBc1qW">
                                <div className="x1421344023328-2R7R9Y">
                                    <img className="trac-992-BLXlPL" src="img/trac--992@1x.png" />
                                    <img className="trac-993-BLXlPL" src="img/trac--993@1x.png" />
                                </div>
                            </div>
                        </div>
                        <div className="devise-wQ9yt9">
                            <img className="ligne-6-bFFpns" src="img/ligne-6-37@1x.png" />
                            <div className="x47-70505-bFFpns poppins-normal-tundora-12px">47 705.05</div>
                            <div className="devise-bFFpns lato-normal-comet-10px">Devise</div>
                        </div>
                        <div className="pourcentage-wallet-wQ9yt9">
                            <img className="ligne-6-ivfWSB" src="img/ligne-6-39@1x.png" />
                            <div className="x50-ivfWSB poppins-normal-tundora-12px">50%</div>
                            <div className="pourcentage-wallet-ivfWSB lato-normal-comet-10px">Pourcentage Wallet</div>
                        </div>
                        <div className="groupe-1491-wQ9yt9">
                            <div className="buttons-btn-text-icon-sZkOjV">
                                <div className="type-9S2YEd"></div>
                                <div className="groupe-393-9S2YEd">
                                    <div className="text-nKAnGa poppins-normal-white-12px">Ajouter une crypto</div>
                                </div>
                            </div>
                            <div className="bouton-pour-supprimer-sZkOjV">
                                <div className="ellipse-12-fReqeI"></div>
                                <img className="font-awsome-times-fReqeI" src="img/fontawsome--times--2@1x.png" />
                            </div>
                        </div>
                    </div>
                    <div className="sidebar-XPwy4i">
                        <div className="shape-QYvkMr"></div>
                        <div className="settings-QYvkMr">
                            <div className="name-aDKPTl poppins-medium-mirage-14px">Settings</div>
                            <div className="icons-navigation-icon-12-states-aDKPTl">
                                <img className="ic_setting-UdoJFi" src="img/ic-setting-11@1x.png" />
                            </div>
                        </div>
                        <div className="broker-QYvkMr">
                            <div className="name-XVPzGo poppins-medium-mirage-14px">Broker</div>
                            <img className="font-awsome-handshake-XVPzGo" src="img/fontawsome--handshake--10@1x.png" />
                        </div>
                        <div className="crypto-wallet-QYvkMr">
                            <img className="frame-fwcnHD" src="img/frame-12@1x.png" />
                            <div className="line-fwcnHD"></div>
                            <div className="name-fwcnHD poppins-medium-blue-ribbon-14px">Crypto Wallet</div>
                            <img className="font-awsome-bitcoin-fwcnHD" src="img/fontawsome--bitcoin--10@1x.png" />
                        </div>
                        <div className="trading-crypto-QYvkMr">
                            <div className="name-xAjDBO poppins-medium-mirage-14px">Trading &amp; Crypto</div>
                            <img className="font-awsome-pen-xAjDBO" src="img/fontawsome--pen--10@1x.png" />
                        </div>
                        <div className="thmes-articles-QYvkMr">
                            <div className="name-FSKcEv poppins-medium-mirage-14px">Thèmes articles</div>
                            <div className="icons-navigation-icon-12-states-FSKcEv">
                                <img
                                    className="font-awsome-bookmark-7im4hX"
                                    src="img/fontawsome--bookmark--10@1x.png"
                                />
                            </div>
                        </div>
                        <div className="customers-QYvkMr">
                            <div className="name-l6jDgd poppins-medium-mirage-14px">Utilisateurs</div>
                            <div className="icons-navigation-icon-12-states-l6jDgd">
                                <img className="ic_users-yN4nvJ" src="img/ic-users-11@1x.png" />
                            </div>
                        </div>
                        <div className="home-QYvkMr">
                            <div className="name-p11Yys poppins-medium-mirage-14px">Home</div>
                            <div className="icons-navigation-icon-12-states-p11Yys">
                                <img className="ic_home-mVUpEJ" src="img/ic-home-10@1x.png" />
                            </div>
                        </div>
                        <div className="articles-QYvkMr">
                            <div className="name-X6hnzh poppins-medium-mirage-14px">Articles</div>
                            <div className="icons-navigation-icon-12-states-X6hnzh">
                                <img className="ic_invoice-68fxae" src="img/ic-invoice-10@1x.png" />
                            </div>
                            <img
                                className="icon-ionic-ios-arrow-down-X6hnzh"
                                src="img/icon-ionic-ios-arrow-down-10@1x.png"
                            />
                        </div>
                        <div className="bot-trading-QYvkMr">
                            <div className="name-19zk5H poppins-medium-mirage-14px">Bot Trading</div>
                            <img className="font-awsome-robot-19zk5H" src="img/fontawsome--robot--10@1x.png" />
                        </div>
                        <div className="pays-QYvkMr">
                            <div className="name-Tk57xa poppins-medium-mirage-14px">Pays</div>
                            <img
                                className="font-awsome-globe-europe-Tk57xa"
                                src="img/fontawsome--globe-europe--10@1x.png"
                            />
                        </div>
                        <div className="abonnement-QYvkMr">
                            <div className="name-sI4a7I poppins-medium-mirage-14px">Abonnement</div>
                            <img className="icon-material-payment-sI4a7I" src="img/icon-material-payment-10@1x.png" />
                            <img
                                className="icon-ionic-ios-arrow-down-sI4a7I"
                                src="img/icon-ionic-ios-arrow-down-10@1x.png"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
