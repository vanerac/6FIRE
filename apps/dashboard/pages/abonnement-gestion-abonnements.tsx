import React, { useEffect, useState } from 'react';
import Topbar from '../components/topbarNew';
import getAPIClient from '@shared/tools/apiClient';
import { Subscription } from '@shared/services';
import router from 'next/router';
import { useCookies } from 'react-cookie';

export default function AbonnementGestionAbonnements() {
    const [cookies] = useCookies(['API_TOKEN']);
    const apiClient = getAPIClient(cookies['API_TOKEN']);

    const [$loading, setLoading] = useState(true);
    const [$error, setError] = useState('');
    const [$subscription, setSubscription] = useState<Subscription[]>([]);

    useEffect(() => {
        if (!cookies['API_TOKEN']) {
            console.log('no token');
            router.replace('/');
            return;
        }

        apiClient.subscription.getSubscriptions().then(
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

    return (
        <>
            <input id="anPageName" name="page" type="hidden" value="abonnement-gestion-abonnements" />
            <div className="container-center-horizontal">
                <div className="abonnement-gestion-abonnements screen">
                    <div className="analytics-xxlmKF poppins-semibold-semi-bold-mirage-24px">Gestion Abonnements</div>
                    <div className="sidebar-xxlmKF">
                        <div className="shape-B6jfTc"></div>
                        <a href="parametres.html">
                            <div className="settings-B6jfTc">
                                <div className="name-Z2mZCh poppins-medium-mirage-14px">Settings</div>
                                <div className="icons-navigation-icon-12-states-Z2mZCh">
                                    <img className="ic_setting-lfiofC" src="img/ic-setting-11@1x.png" />
                                </div>
                            </div>
                        </a>
                        <div className="broker-B6jfTc">
                            <div className="name-Z09l67 poppins-medium-mirage-14px">Broker</div>
                            <img className="font-awsome-handshake-Z09l67" src="img/fontawsome--handshake--10@1x.png" />
                        </div>
                        <div className="crypto-wallet-B6jfTc">
                            <div className="name-GxWUNQ poppins-medium-mirage-14px">Crypto Wallet</div>
                            <img className="font-awsome-bitcoin-GxWUNQ" src="img/fontawsome--bitcoin--11@1x.png" />
                        </div>
                        <div className="trading-crypto-B6jfTc">
                            <div className="name-LoWu6x poppins-medium-mirage-14px">Trading &amp; Crypto</div>
                            <img className="font-awsome-pen-LoWu6x" src="img/fontawsome--pen--10@1x.png" />
                        </div>
                        <div className="thmes-articles-B6jfTc">
                            <div className="name-8jAWsJ poppins-medium-mirage-14px">Thèmes articles</div>
                            <div className="icons-navigation-icon-12-states-8jAWsJ">
                                <img
                                    className="font-awsome-bookmark-NWdcxK"
                                    src="img/fontawsome--bookmark--10@1x.png"
                                />
                            </div>
                        </div>
                        <div className="customers-B6jfTc">
                            <div className="name-AS7R6x poppins-medium-mirage-14px">Utilisateurs</div>
                            <div className="icons-navigation-icon-12-states-AS7R6x">
                                <img className="ic_users-rjdiKO" src="img/ic-users-11@1x.png" />
                            </div>
                        </div>
                        <div className="home-B6jfTc">
                            <div className="name-zdaOtM poppins-medium-mirage-14px">Home</div>
                            <div className="icons-navigation-icon-12-states-zdaOtM">
                                <img className="ic_home-knd8ch" src="img/ic-home-10@1x.png" />
                            </div>
                        </div>
                        <div className="articles-B6jfTc">
                            <div className="name-iFKUtL poppins-medium-mirage-14px">Articles</div>
                            <div className="icons-navigation-icon-12-states-iFKUtL">
                                <img className="ic_invoice-jLNaOQ" src="img/ic-invoice-10@1x.png" />
                            </div>
                            <img
                                className="icon-ionic-ios-arrow-down-iFKUtL"
                                src="img/icon-ionic-ios-arrow-down-10@1x.png"
                            />
                        </div>
                        <div className="bot-trading-B6jfTc">
                            <div className="name-qRvDOl poppins-medium-mirage-14px">Bot Trading</div>
                            <img className="font-awsome-robot-qRvDOl" src="img/fontawsome--robot--10@1x.png" />
                        </div>
                        <div className="pays-B6jfTc">
                            <div className="name-OJDmhR poppins-medium-mirage-14px">Pays</div>
                            <img
                                className="font-awsome-globe-europe-OJDmhR"
                                src="img/fontawsome--globe-europe--10@1x.png"
                            />
                        </div>
                        <div className="abonnement-B6jfTc">
                            <img className="frame-GPOmSE" src="img/frame-12@1x.png" />
                            <div className="line-GPOmSE"></div>
                            <div className="name-GPOmSE poppins-medium-blue-ribbon-14px">Abonnement</div>
                            <img className="icon-material-payment-GPOmSE" src="img/icon-material-payment-15@1x.png" />
                            <div className="gestion-abonnements-GPOmSE">
                                <div className="frame-12AbUM"></div>
                                <div className="name-12AbUM poppins-medium-blue-ribbon-14px">Gestion Abonnements</div>
                            </div>
                            <a href="abonnement-code-promo.tsx">
                                <div className="code-promo-GPOmSE">
                                    <div className="frame-Y7Pog2"></div>
                                    <div className="name-Y7Pog2 poppins-medium-blue-ribbon-14px">Code promo</div>
                                </div>
                            </a>
                            <a href="deprecated/abonnement-essai-gratuit.tsx">
                                <div className="essai-gratuit-GPOmSE">
                                    <img className="frame-WzPg83" src="img/frame-11@1x.png" />
                                    <div className="name-WzPg83 poppins-medium-blue-ribbon-14px">Essai gratuit</div>
                                </div>
                            </a>
                            <a href="abonnement-code-gratuit.tsx">
                                <div className="code-gratuit-GPOmSE">
                                    <img className="frame-EfecPJ" src="img/frame-11@1x.png" />
                                    <div className="name-EfecPJ poppins-medium-blue-ribbon-14px">Code gratuit</div>
                                </div>
                            </a>
                            <img
                                className="icon-ionic-ios-arrow-down-GPOmSE"
                                src="img/icon-ionic-ios-arrow-down-10@1x.png"
                            />
                        </div>
                    </div>
                    <Topbar />
                    <a href="abonnement-creer-un-abonnement.tsx">
                        <div className="buttons-btn-text-icon-xxlmKF">
                            <div className="type-QQwysk"></div>
                            <div className="groupe-393-QQwysk">
                                <div className="text-xIiL8Z poppins-normal-white-14px">Créer un abonnement</div>
                            </div>
                        </div>
                    </a>
                    <div className="grid-table-xxlmKF">
                        <div className="groupe-455-f3lJox">
                            <div className="rectangle-616-zXv57d"></div>
                            <div className="rectangle-618-zXv57d"></div>
                            <div className="rectangle-619-zXv57d"></div>
                            <div className="rectangle-621-zXv57d"></div>
                            <div className="rectangle-622-zXv57d"></div>
                            <div className="rectangle-623-zXv57d"></div>
                            <div className="rectangle-624-zXv57d"></div>
                        </div>
                        <div className="grid-table-f3lJox">
                            <div className="name-HvdJUu poppins-medium-mirage-12px">Nom</div>
                            <div className="name-83ln9O poppins-medium-mirage-12px">Prix</div>
                            <div className="name-sB8UAa poppins-medium-mirage-12px">Durée</div>
                            <div className="name-FCi4EJ poppins-medium-mirage-12px">Best Seller</div>
                            <div className="name-tlU4OH poppins-medium-mirage-12px">Visible</div>
                            <div className="name-pXkkG2 poppins-medium-mirage-12px">Action</div>
                        </div>
                        <div className="row-1-f3lJox">
                            <div className="rectangle-617-BaMxxW"></div>
                            <div className="name-BaMxxW poppins-medium-tundora-10px">Novice</div>
                            <div className="name-hRY35G poppins-medium-tundora-10px">49.99 €</div>
                            <div className="name-xrXWJu poppins-medium-tundora-10px">Mensuel</div>
                            <div className="membre-BaMxxW">
                                <img
                                    className="font-awsome-check-square-W0Kn7t"
                                    src="img/fontawsome--check-square--10@1x.png"
                                />
                            </div>
                            <div className="membre-hRY35G">
                                <img
                                    className="font-awsome-check-square-vsf2kJ"
                                    src="img/fontawsome--check-square--10@1x.png"
                                />
                            </div>
                            <img className="font-awsome-pen-BaMxxW" src="img/fontawsome--pen--12@1x.png" />
                            <img className="font-awsome-times-BaMxxW" src="img/fontawsome--times--10@1x.png" />
                        </div>
                    </div>
                    <div className="search-xxlmKF">
                        <div className="rectangle-625-mm0Blo"></div>
                        <div className="name-mm0Blo poppins-medium-mirage-10px">Rechercher…</div>
                    </div>
                    <div className="filtre-xxlmKF">
                        <div className="rectangle-625-ZS97Zq"></div>
                        <div className="name-ZS97Zq poppins-medium-mirage-10px">Visible</div>
                        <img
                            className="font-awsome-chevron-down-ZS97Zq"
                            src="img/fontawsome--chevron-down--10@1x.png"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
