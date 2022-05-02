import React, { useEffect, useState } from 'react';
import Topbar from './topbar';
import getAPIClient from '@shared/tools/apiClient';
import { Offer } from '@services/index';
import router from 'next/router';
import { useCookies } from 'react-cookie';

export default function AbonnementEssaiGratuit() {
    const [cookies] = useCookies(['API_TOKEN']);
    const apiClient = getAPIClient(cookies['API_TOKEN']);

    const [$loading, setLoading] = useState(true);
    const [$error, setError] = useState('');
    const [$offers, setOffers] = useState<Offer[]>();

    useEffect(() => {
        if (!cookies['API_TOKEN']) {
            console.log('no token');
            router.replace('/');
            return;
        }

        apiClient.offers.getAllOffers().then(
            (res) => {
                setOffers(res);
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
            <input type="hidden" id="anPageName" name="page" value="abonnement-essai-gratuit" />
            <div className="container-center-horizontal">
                <div className="abonnement-essai-gratuit screen">
                    <div className="analytics-dIMMOR poppins-semibold-semi-bold-mirage-24px">Essai Gratuit</div>
                    <div className="sidebar-dIMMOR">
                        <div className="shape-r9x1mq"></div>
                        <div className="settings-r9x1mq">
                            <div className="name-IaTy0q poppins-medium-mirage-14px">Settings</div>
                            <div className="icons-navigation-icon-12-states-IaTy0q">
                                <img className="ic_setting-40jyhs" src="img/ic-setting-11@1x.png" />
                            </div>
                        </div>
                        <div className="broker-r9x1mq">
                            <div className="name-zpb3uU poppins-medium-mirage-14px">Broker</div>
                            <img className="font-awsome-handshake-zpb3uU" src="img/fontawsome--handshake--10@1x.png" />
                        </div>
                        <div className="crypto-wallet-r9x1mq">
                            <div className="name-tErCU4 poppins-medium-mirage-14px">Crypto Wallet</div>
                            <img className="font-awsome-bitcoin-tErCU4" src="img/fontawsome--bitcoin--11@1x.png" />
                        </div>
                        <div className="trading-crypto-r9x1mq">
                            <div className="name-q5o2Zj poppins-medium-mirage-14px">Trading &amp; Crypto</div>
                            <img className="font-awsome-pen-q5o2Zj" src="img/fontawsome--pen--10@1x.png" />
                        </div>
                        <div className="thmes-articles-r9x1mq">
                            <div className="name-Q97uh5 poppins-medium-mirage-14px">Thèmes articles</div>
                            <div className="icons-navigation-icon-12-states-Q97uh5">
                                <img
                                    className="font-awsome-bookmark-7azXW9"
                                    src="img/fontawsome--bookmark--10@1x.png"
                                />
                            </div>
                        </div>
                        <div className="customers-r9x1mq">
                            <div className="name-d2txwl poppins-medium-mirage-14px">Utilisateurs</div>
                            <div className="icons-navigation-icon-12-states-d2txwl">
                                <img className="ic_users-7x7Nt5" src="img/ic-users-11@1x.png" />
                            </div>
                        </div>
                        <div className="home-r9x1mq">
                            <div className="name-F4ACUW poppins-medium-mirage-14px">Home</div>
                            <div className="icons-navigation-icon-12-states-F4ACUW">
                                <img className="ic_home-ixlP3n" src="img/ic-home-10@1x.png" />
                            </div>
                        </div>
                        <div className="articles-r9x1mq">
                            <div className="name-8K0Bzx poppins-medium-mirage-14px">Articles</div>
                            <div className="icons-navigation-icon-12-states-8K0Bzx">
                                <img className="ic_invoice-lxBlI5" src="img/ic-invoice-10@1x.png" />
                            </div>
                            <img
                                className="icon-ionic-ios-arrow-down-8K0Bzx"
                                src="img/icon-ionic-ios-arrow-down-10@1x.png"
                            />
                        </div>
                        <div className="bot-trading-r9x1mq">
                            <div className="name-z8UE9c poppins-medium-mirage-14px">Bot Trading</div>
                            <img className="font-awsome-robot-z8UE9c" src="img/fontawsome--robot--10@1x.png" />
                        </div>
                        <div className="pays-r9x1mq">
                            <div className="name-ounDou poppins-medium-mirage-14px">Pays</div>
                            <img
                                className="font-awsome-globe-europe-ounDou"
                                src="img/fontawsome--globe-europe--10@1x.png"
                            />
                        </div>
                        <div className="abonnement-r9x1mq">
                            <img className="frame-mgVJe4" src="img/frame-12@1x.png" />
                            <div className="line-mgVJe4"></div>
                            <div className="name-mgVJe4 poppins-medium-blue-ribbon-14px">Abonnement</div>
                            <img className="icon-material-payment-mgVJe4" src="img/icon-material-payment-15@1x.png" />
                            <div className="gestion-abonnements-mgVJe4">
                                <div className="frame-c7ahcB"></div>
                                <div className="name-c7ahcB poppins-medium-blue-ribbon-14px">Gestion Abonnements</div>
                            </div>
                            <div className="code-promo-mgVJe4">
                                <div className="frame-zoI5dz"></div>
                                <div className="name-zoI5dz poppins-medium-blue-ribbon-14px">Code promo</div>
                            </div>
                            <div className="essai-gratuit-mgVJe4">
                                <img className="frame-wYUeuc" src="img/frame-11@1x.png" />
                                <div className="name-wYUeuc poppins-medium-blue-ribbon-14px">Essai gratuit</div>
                            </div>
                            <div className="code-gratuit-mgVJe4">
                                <img className="frame-Zl5Lhx" src="img/frame-11@1x.png" />
                                <div className="name-Zl5Lhx poppins-medium-blue-ribbon-14px">Code gratuit</div>
                            </div>
                            <img
                                className="icon-ionic-ios-arrow-down-mgVJe4"
                                src="img/icon-ionic-ios-arrow-down-10@1x.png"
                            />
                        </div>
                    </div>
                    <Topbar />
                    <div className="buttons-btn-text-icon-dIMMOR">
                        <div className="type-mXCuo0"></div>
                        <div className="groupe-393-mXCuo0">
                            <div className="text-pPqlp1 poppins-normal-white-14px">Créer un code promo</div>
                        </div>
                    </div>
                    <div className="grid-table-dIMMOR">
                        <div className="groupe-455-zJdM5C">
                            <div className="rectangle-616-gCFseq"></div>
                            <div className="rectangle-618-gCFseq"></div>
                            <div className="rectangle-619-gCFseq"></div>
                            <div className="rectangle-621-gCFseq"></div>
                            <div className="rectangle-622-gCFseq"></div>
                            <div className="rectangle-623-gCFseq"></div>
                            <div className="rectangle-624-gCFseq"></div>
                        </div>
                        <div className="grid-table-zJdM5C">
                            <div className="name-a2jAxC poppins-medium-mirage-12px">Nom Campagne</div>
                            <div className="name-neslt6 poppins-medium-mirage-12px">Durée d’essai</div>
                            <div className="name-YoRDXP poppins-medium-mirage-12px">Type</div>
                            <div className="name-qNG5Ad poppins-medium-mirage-12px">Etat (Actif/Désactiver)</div>
                            <div className="name-SXJhES poppins-medium-mirage-12px">Action</div>
                        </div>
                        <div className="exemple-row-zJdM5C">
                            <div className="rectangle-617-AQ694E"></div>
                            <div className="name-AQ694E poppins-medium-tundora-10px">Broker (30j)</div>
                            <div className="name-RNiJxM poppins-medium-tundora-10px">30</div>
                            <div className="name-xA9P6O poppins-medium-tundora-10px">Mensuel</div>
                            <div className="membre-AQ694E">
                                <img
                                    className="font-awsome-check-square-mDnxs0"
                                    src="img/fontawsome--check-square--10@1x.png"
                                />
                            </div>
                            <img className="font-awsome-pen-AQ694E" src="img/fontawsome--pen--12@1x.png" />
                            <img className="font-awsome-times-AQ694E" src="img/fontawsome--times--10@1x.png" />
                        </div>
                        <div className="buttons-btn-text-icon-zJdM5C">
                            <div className="type-pmNwq7"></div>
                            <div className="groupe-393-pmNwq7">
                                <div className="text-rY2K9R poppins-normal-white-14px">Générer code</div>
                            </div>
                        </div>
                    </div>
                    <div className="search-dIMMOR">
                        <div className="rectangle-625-zhlHtW"></div>
                        <div className="name-zhlHtW poppins-medium-mirage-10px">Rechercher…</div>
                    </div>
                    <div className="filtre-dIMMOR">
                        <div className="rectangle-625-GgxIxp"></div>
                        <div className="name-GgxIxp poppins-medium-mirage-10px">Etat</div>
                        <img
                            className="font-awsome-chevron-down-GgxIxp"
                            src="img/fontawsome--chevron-down--10@1x.png"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
