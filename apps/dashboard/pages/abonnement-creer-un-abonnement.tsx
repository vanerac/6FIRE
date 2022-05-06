import React, { useEffect, useState } from 'react';
import Topbar from '../components/topbarNew';
import getAPIClient from '@shared/tools/apiClient';
import { Subscription } from '@shared/services';
import router from 'next/router';
import { useCookies } from 'react-cookie';
import SideBar from '../components/sidebarNew';

export default function CreerUnAbonnement() {
    const [cookies] = useCookies(['API_TOKEN']);
    const apiClient = getAPIClient(cookies['API_TOKEN']);

    const [$loading, setLoading] = useState(true);
    const [$error, setError] = useState('');
    const [$subscription, setSubscription] = useState<Subscription>();

    const [subscriptionName, setSubscriptionName] = useState('');
    const [subscriptionPrice, setSubscriptionPrice] = useState('');
    const [subscriptionTime, setSubscriptionTime] = useState('');
    const [subscriptionTimeType, setSubscriptionTimeType] = useState('');
    const [payementPlatform, setPayementPlatform] = useState('');
    const [descriptionLine, setDescriptionLine] = useState('');
    const [isTryingSession, setIsTryingSession] = useState(false);
    const [isHidden, setIsHidden] = useState(false);
    const [isBestSeller, setIsBestSeller] = useState(false);

    const id = 1;
    useEffect(() => {
        if (!cookies['API_TOKEN']) {
            console.log('no token');
            router.replace('/');
            return;
        }

        apiClient.subscription.getSubscriptionById(id).then(
            (res) => {
                setSubscription(res);
                setLoading(false);
            },
            (error) => {
                setError(error.i18n ?? error.message ?? 'Unknown error');
                setLoading(false);
            },
        );
    }, []);

    // submit all data
    const submit = () => {
        // print all data
        console.log(
            subscriptionName,
            subscriptionPrice,
            subscriptionTime,
            subscriptionTimeType,
            payementPlatform,
            descriptionLine,
            isTryingSession,
            isHidden,
            isBestSeller,
        );
    };

    return (
        <>
            <input type="hidden" id="anPageName" name="page" value="abonnement-creer-un-abonnement" />
            <div className="container-center-horizontal">
                <div className="abonnement-creer-un-abonnement screen">
                    <div className="analytics-zmtgzx poppins-semibold-semi-bold-mirage-24px">Gestion Abonnements</div>
                    {/* <div className="sidebar-zmtgzx">
                        <div className="shape-Y3lPdD"></div>
                        <div className="settings-Y3lPdD">
                            <div className="name-kSYily poppins-medium-mirage-14px">Settings</div>
                            <div className="icons-navigation-icon-12-states-kSYily">
                                <img className="ic_setting-Mxxs6g" src="img/ic-setting-11@1x.png" />
                            </div>
                        </div>
                        <div className="broker-Y3lPdD">
                            <div className="name-DxvVPu poppins-medium-mirage-14px">Broker</div>
                            <img className="font-awsome-handshake-DxvVPu" src="img/fontawsome--handshake--10@1x.png" />
                        </div>
                        <div className="crypto-wallet-Y3lPdD">
                            <div className="name-3lDbSb poppins-medium-mirage-14px">Crypto Wallet</div>
                            <img className="font-awsome-bitcoin-3lDbSb" src="img/fontawsome--bitcoin--11@1x.png" />
                        </div>
                        <div className="trading-crypto-Y3lPdD">
                            <div className="name-6eqhw6 poppins-medium-mirage-14px">Trading &amp; Crypto</div>
                            <img className="font-awsome-pen-6eqhw6" src="img/fontawsome--pen--10@1x.png" />
                        </div>
                        <div className="thmes-articles-Y3lPdD">
                            <div className="name-oQxInf poppins-medium-mirage-14px">Thèmes articles</div>
                            <div className="icons-navigation-icon-12-states-oQxInf">
                                <img
                                    className="font-awsome-bookmark-h4Zsm1"
                                    src="img/fontawsome--bookmark--10@1x.png"
                                />
                            </div>
                        </div>
                        <div className="customers-Y3lPdD">
                            <div className="name-pwiX04 poppins-medium-mirage-14px">Utilisateurs</div>
                            <div className="icons-navigation-icon-12-states-pwiX04">
                                <img className="ic_users-qq0x1W" src="img/ic-users-11@1x.png" />
                            </div>
                        </div>
                        <div className="home-Y3lPdD">
                            <div className="name-UbR63j poppins-medium-mirage-14px">Home</div>
                            <div className="icons-navigation-icon-12-states-UbR63j">
                                <img className="ic_home-nOxzCA" src="img/ic-home-10@1x.png" />
                            </div>
                        </div>
                        <div className="articles-Y3lPdD">
                            <div className="name-awdC5Q poppins-medium-mirage-14px">Articles</div>
                            <div className="icons-navigation-icon-12-states-awdC5Q">
                                <img className="ic_invoice-dAxHVx" src="img/ic-invoice-10@1x.png" />
                            </div>
                            <img
                                className="icon-ionic-ios-arrow-down-awdC5Q"
                                src="img/icon-ionic-ios-arrow-down-10@1x.png"
                            />
                        </div>
                        <div className="bot-trading-Y3lPdD">
                            <div className="name-Ax8KLB poppins-medium-mirage-14px">Bot Trading</div>
                            <img className="font-awsome-robot-Ax8KLB" src="img/fontawsome--robot--10@1x.png" />
                        </div>
                        <div className="pays-Y3lPdD">
                            <div className="name-25hxin poppins-medium-mirage-14px">Pays</div>
                            <img
                                className="font-awsome-globe-europe-25hxin"
                                src="img/fontawsome--globe-europe--10@1x.png"
                            />
                        </div>
                        <div className="abonnement-Y3lPdD">
                            <div className="name-QI1v0w poppins-medium-mirage-14px">Abonnement</div>
                            <img className="icon-material-payment-QI1v0w" src="img/icon-material-payment-10@1x.png" />
                        </div>
                        <img
                            className="icon-ionic-ios-arrow-down-Y3lPdD"
                            src="img/icon-ionic-ios-arrow-down-10@1x.png"
                        />
                    </div> */}
                    <Topbar />
                    <SideBar></SideBar>
                    <div className="buttons-btn-text-icon-zmtgzx">
                        <div className="type-VxCxaA"></div>
                        <div className="groupe-393-VxCxaA">
                            <div
                                onClick={submit}
                                style={{ cursor: 'pointer' }}
                                className="text-dcnJkB poppins-normal-white-14px">
                                Créer un abonnement
                            </div>
                        </div>
                    </div>
                    <div className="informations-zmtgzx">
                        <div className="rectangle-632-XiDkvN"></div>
                        <div className="titre-XiDkvN">
                            <div className="rectangle-633-DEdHK7"></div>
                            <div className="analytics-DEdHK7 poppins-semibold-semi-bold-white-14px">Informations</div>
                        </div>
                        <div className="nom-XiDkvN">
                            <img className="ligne-6-xCRECf" src="img/ligne-6-1@1x.png" />
                            <input
                                onChange={(event) => setSubscriptionName(event.target.value)}
                                defaultValue="Novice"
                                style={{ border: '0px' }}
                                className="novice-xCRECf poppins-normal-tundora-12px"
                            />
                            <div className="nom-xCRECf lato-normal-comet-10px">Nom</div>
                        </div>
                        <div className="prix-XiDkvN">
                            <img className="ligne-6-EmIQcx" src="img/ligne-6-1@1x.png" />
                            <input
                                onChange={(event) => setSubscriptionPrice(event.target.value)}
                                defaultValue="49.99 €"
                                className="x4999-EmIQcx poppins-normal-tundora-12px"></input>
                            <div className="prix-EmIQcx lato-normal-comet-10px">Prix</div>
                        </div>
                        <div className="dure-XiDkvN">
                            <img className="ligne-6-3V1qvy" src="img/ligne-6-1@1x.png" />
                            <input
                                defaultValue="30"
                                style={{ border: '0px' }}
                                onChange={(event) => setSubscriptionTime(event.target.value)}
                                className="x30-3V1qvy poppins-normal-tundora-12px"
                            />
                            <div className="dure-3V1qvy lato-normal-comet-10px">Durée</div>
                        </div>
                        <div className="type-XiDkvN">
                            {/* <img className="ligne-6-xBAzJw" src="img/ligne-6-46@1x.png" /> */}
                            {/* <div className="mensuel-xBAzJw poppins-normal-tundora-12px">Mensuel</div> */}
                            <select
                                onChange={(event) => setSubscriptionTimeType(event.target.value)}
                                className="mensuel-xBAzJw poppins-normal-tundora-12px">
                                <option value="">Choississez le type</option>
                                <option>mensuel</option>
                                <option>annuel</option>
                            </select>
                            <div className="type-xBAzJw lato-normal-comet-10px">Type</div>
                            {/* <img
                                className="font-awsome-chevron-down-xBAzJw"
                                src="img/fontawsome--chevron-down--10@1x.png"
                            /> */}
                        </div>
                        <div className="best-seller-XiDkvN">
                            <div className="best-seller-28QqGG poppins-normal-tundora-12px">Best Seller</div>
                            <input
                                type="checkbox"
                                checked={isBestSeller}
                                onChange={() => setIsBestSeller(!isBestSeller)}
                                className="rectangle-634-28QqGG border-2px-tundora"></input>
                        </div>
                        <div className="visible-XiDkvN">
                            <div className="visible-UCabQU poppins-normal-tundora-12px">Visible</div>
                            <input
                                checked={isHidden}
                                onChange={() => setIsHidden(!isHidden)}
                                type="checkbox"
                                className="rectangle-634-UCabQU border-2px-tundora"
                            />
                        </div>
                        <div className="priode-dessai-XiDkvN">
                            <input
                                className="toggle-dtZC2P"
                                onChange={() => setIsTryingSession(!isTryingSession)}
                                checked={isTryingSession}
                                type="checkbox"
                            />

                            {/* <div className="toggle-dtZC2P">
                                <div className="toggle-off-PO0xaD">
                                    <div className="rectangle-655-nrwYmd"></div>
                                    <div className="rectangle-656-nrwYmd"></div>
                                    <div className="off-nrwYmd arial-bold-white-6px">OFF</div>
                                </div>
                            </div> */}
                            <div className="priode-dessai-dtZC2P lato-normal-comet-10px">Période d’essai</div>
                        </div>
                    </div>
                    <div className="plateforme-de-paiement-zmtgzx">
                        <div className="rectangle-632-20ARZa"></div>
                        <div className="titre-20ARZa">
                            <div className="rectangle-633-GGmMzE"></div>
                            <div className="analytics-GGmMzE poppins-semibold-semi-bold-white-14px">
                                Plateforme de paiement
                            </div>
                        </div>
                        <div className="plateforme-de-paiement-20ARZa">
                            {/* <img className="ligne-6-zmMem2" src="img/ligne-6-47@1x.png" /> */}
                            {/* <div className="plateforme-zmMem2 poppins-normal-tundora-12px">Plateforme</div> */}
                            <select
                                onChange={(event) => setPayementPlatform(event.target.value)}
                                className="mensuel-xBAzJw poppins-normal-tundora-12px">
                                <option value="">Choississez le type</option>
                                <option>Plateforme</option>
                            </select>
                            <div className="plateforme-de-paiement-zmMem2 lato-normal-comet-10px">
                                Plateforme de paiement
                            </div>
                            {/* <img
                                className="font-awsome-chevron-down-zmMem2"
                                src="img/fontawsome--chevron-down--10@1x.png"
                            /> */}
                        </div>
                    </div>
                    <div className="lignes-descriptives-zmtgzx">
                        <div className="rectangle-632-HxWojL"></div>
                        <div className="titre-HxWojL">
                            <div className="rectangle-633-lK1jNa"></div>
                            <div className="analytics-lK1jNa poppins-semibold-semi-bold-white-14px">
                                Lignes descriptives
                            </div>
                        </div>
                        <div className="lignes-1-HxWojL">
                            <img className="ligne-6-PlF3x1" src="img/ligne-6-47@1x.png" />
                            <input
                                onChange={(event) => setDescriptionLine(event.target.value)}
                                style={{ border: '0px' }}
                                className="lignes-1-PlF3x1 poppins-normal-tundora-12px"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
