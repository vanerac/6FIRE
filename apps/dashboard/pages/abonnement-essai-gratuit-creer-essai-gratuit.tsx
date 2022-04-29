import React, { useEffect, useState } from 'react';
import Topbar from '../components/topbar';
import getAPIClient from '@shared/tools/apiClient';
import { Offer } from '@shared/services';
import router from 'next/router';
import { useCookies } from 'react-cookie';

export default function AbonnementEssaiGratuitCreerEssaiGratuit() {
    const [cookies] = useCookies(['API_TOKEN']);
    const apiClient = getAPIClient(cookies['API_TOKEN']);

    const [$loading, setLoading] = useState(true);
    const [$error, setError] = useState('');
    const [$offer, setOffer] = useState<Offer>();

    const id = '1';
    useEffect(() => {
        if (!cookies['API_TOKEN']) {
            console.log('no token');
            router.replace('/');
            return;
        }

        apiClient.offers.getOfferById(id).then(
            (res) => {
                setOffer(res);
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
            <input type="hidden" id="anPageName" name="page" value="abonnement-essai-gratuit-creer-essai-gratuit" />
            <div className="container-center-horizontal">
                <div className="abonnement-essai-gratuit-creer-essai-gratuit screen">
                    <div className="analytics-06U2bs poppins-semibold-semi-bold-mirage-24px">
                        Créer Essai Gratuit (unique)
                    </div>
                    <div className="sidebar-06U2bs">
                        <div className="shape-4Da1p5"></div>
                        <div className="settings-4Da1p5">
                            <div className="name-24iIxS poppins-medium-mirage-14px">Settings</div>
                            <div className="icons-navigation-icon-12-states-24iIxS">
                                <img className="ic_setting-TFRxUZ" src="img/ic-setting-11@1x.png" />
                            </div>
                        </div>
                        <div className="broker-4Da1p5">
                            <div className="name-l9vx7G poppins-medium-mirage-14px">Broker</div>
                            <img className="font-awsome-handshake-l9vx7G" src="img/fontawsome--handshake--10@1x.png" />
                        </div>
                        <div className="crypto-wallet-4Da1p5">
                            <div className="name-J1oXgQ poppins-medium-mirage-14px">Crypto Wallet</div>
                            <img className="font-awsome-bitcoin-J1oXgQ" src="img/fontawsome--bitcoin--11@1x.png" />
                        </div>
                        <div className="trading-crypto-4Da1p5">
                            <div className="name-Gx9ajr poppins-medium-mirage-14px">Trading &amp; Crypto</div>
                            <img className="font-awsome-pen-Gx9ajr" src="img/fontawsome--pen--10@1x.png" />
                        </div>
                        <div className="thmes-articles-4Da1p5">
                            <div className="name-dMCarJ poppins-medium-mirage-14px">Thèmes articles</div>
                            <div className="icons-navigation-icon-12-states-dMCarJ">
                                <img
                                    className="font-awsome-bookmark-nkfslN"
                                    src="img/fontawsome--bookmark--10@1x.png"
                                />
                            </div>
                        </div>
                        <div className="customers-4Da1p5">
                            <div className="name-feQPmZ poppins-medium-mirage-14px">Utilisateurs</div>
                            <div className="icons-navigation-icon-12-states-feQPmZ">
                                <img className="ic_users-AEsoR4" src="img/ic-users-11@1x.png" />
                            </div>
                        </div>
                        <div className="home-4Da1p5">
                            <div className="name-WBKB2P poppins-medium-mirage-14px">Home</div>
                            <div className="icons-navigation-icon-12-states-WBKB2P">
                                <img className="ic_home-PbDE0g" src="img/ic-home-10@1x.png" />
                            </div>
                        </div>
                        <div className="articles-4Da1p5">
                            <div className="name-i86BPw poppins-medium-mirage-14px">Articles</div>
                            <div className="icons-navigation-icon-12-states-i86BPw">
                                <img className="ic_invoice-2TtxlG" src="img/ic-invoice-10@1x.png" />
                            </div>
                            <img
                                className="icon-ionic-ios-arrow-down-i86BPw"
                                src="img/icon-ionic-ios-arrow-down-10@1x.png"
                            />
                        </div>
                        <div className="bot-trading-4Da1p5">
                            <div className="name-bAs6Hj poppins-medium-mirage-14px">Bot Trading</div>
                            <img className="font-awsome-robot-bAs6Hj" src="img/fontawsome--robot--10@1x.png" />
                        </div>
                        <div className="pays-4Da1p5">
                            <div className="name-eNcLbL poppins-medium-mirage-14px">Pays</div>
                            <img
                                className="font-awsome-globe-europe-eNcLbL"
                                src="img/fontawsome--globe-europe--10@1x.png"
                            />
                        </div>
                        <div className="abonnement-4Da1p5">
                            <img className="frame-22En3k" src="img/frame-12@1x.png" />
                            <div className="line-22En3k"></div>
                            <div className="name-22En3k poppins-medium-blue-ribbon-14px">Abonnement</div>
                            <img className="icon-material-payment-22En3k" src="img/icon-material-payment-15@1x.png" />
                            <div className="gestion-abonnements-22En3k">
                                <div className="frame-62GKqO"></div>
                                <div className="name-62GKqO poppins-medium-blue-ribbon-14px">Gestion Abonnements</div>
                            </div>
                            <div className="code-promo-22En3k">
                                <div className="frame-LNlyg1"></div>
                                <div className="name-LNlyg1 poppins-medium-blue-ribbon-14px">Code promo</div>
                            </div>
                            <div className="essai-gratuit-22En3k">
                                <img className="frame-szB0tG" src="img/frame-11@1x.png" />
                                <div className="name-szB0tG poppins-medium-blue-ribbon-14px">Essai gratuit</div>
                            </div>
                            <div className="code-gratuit-22En3k">
                                <img className="frame-mwuqnH" src="img/frame-11@1x.png" />
                                <div className="name-mwuqnH poppins-medium-blue-ribbon-14px">Code gratuit</div>
                            </div>
                            <img
                                className="icon-ionic-ios-arrow-down-22En3k"
                                src="img/icon-ionic-ios-arrow-down-10@1x.png"
                            />
                        </div>
                    </div>

                    <Topbar />
                    <div className="buttons-btn-text-icon-06U2bs">
                        <div className="type-DkTLSP"></div>
                        <div className="groupe-393-DkTLSP">
                            <div className="text-OuFySU poppins-normal-white-14px">Créer essai gratuit</div>
                        </div>
                    </div>
                    <div className="informations-06U2bs">
                        <div className="rectangle-632-QfiZtN"></div>
                        <div className="titre-QfiZtN">
                            <div className="rectangle-633-UxiYDf"></div>
                            <div className="analytics-UxiYDf poppins-semibold-semi-bold-white-14px">Informations</div>
                        </div>
                        <div className="prix-QfiZtN">
                            <img className="ligne-6-6xQ2vz" src="img/ligne-6-1@1x.png" />
                            <div className="x0-6xQ2vz poppins-normal-tundora-12px">0</div>
                            <div className="prix-6xQ2vz lato-normal-comet-10px">Prix</div>
                        </div>
                        <div className="dure-QfiZtN">
                            <img className="ligne-6-zbvUim" src="img/ligne-6-1@1x.png" />
                            <div className="x30-zbvUim poppins-normal-tundora-12px">30</div>
                            <div className="dure-dessai-zbvUim lato-normal-comet-10px">Durée d’essai</div>
                        </div>
                        <div className="filtre-QfiZtN"></div>
                        <div className="visible-QfiZtN">
                            <div className="actif-8bCr9V poppins-normal-tundora-12px">Actif</div>
                            <div className="rectangle-634-8bCr9V border-2px-tundora"></div>
                        </div>
                        <div className="type-QfiZtN">
                            <img className="ligne-6-DdxyWZ" src="img/ligne-6-46@1x.png" />
                            <div className="mensuel-DdxyWZ poppins-normal-tundora-12px">Mensuel</div>
                            <div className="type-DdxyWZ lato-normal-comet-10px">Type</div>
                            <img
                                className="font-awsome-chevron-down-DdxyWZ"
                                src="img/fontawsome--chevron-down--10@1x.png"
                            />
                        </div>
                        <div className="abonnement-QfiZtN">
                            <div className="abonnement-SdrZCw">
                                <img className="ligne-6-UACUya" src="img/ligne-6-46@1x.png" />
                                <div className="choisir-UACUya poppins-normal-tundora-12px">Choisir</div>
                                <div className="slectionner-abonnement-UACUya lato-normal-comet-10px">
                                    Sélectionner Abonnement
                                </div>
                                <img
                                    className="font-awsome-chevron-down-UACUya"
                                    src="img/fontawsome--chevron-down--10@1x.png"
                                />
                            </div>
                        </div>
                        <div className="prix-9cvhIh">
                            <img className="ligne-6-jZxSqa" src="img/ligne-6-1@1x.png" />
                            <div className="broker-30j-jZxSqa poppins-normal-tundora-12px">Broker (30j)</div>
                            <div className="nom-de-la-campagne-essai-gratuit-jZxSqa lato-normal-comet-10px">
                                Nom de la campagne (Essai gratuit)
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
