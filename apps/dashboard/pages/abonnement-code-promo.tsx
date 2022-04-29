import React, { useEffect, useState } from 'react';
import Topbar from '../components/topbar';
import getAPIClient from '@shared/tools/apiClient';
import { Offer } from '@shared/services';
import router from 'next/router';
import { useCookies } from 'react-cookie';

export default function AbonnementCodePromo() {
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
            <input id="anPageName" name="page" type="hidden" value="abonnement-code-promo" />
            <div className="container-center-horizontal">
                <div className="abonnement-code-promo screen">
                    <div className="analytics-o3qHqt poppins-semibold-semi-bold-mirage-24px">Code Promo</div>
                    <div className="sidebar-o3qHqt">
                        <div className="shape-vopWaO"></div>
                        <div className="settings-vopWaO">
                            <div className="name-DQc0rj poppins-medium-mirage-14px">Settings</div>
                            <div className="icons-navigation-icon-12-states-DQc0rj">
                                <img className="ic_setting-ehYrxe" src="img/ic-setting-11@1x.png" />
                            </div>
                        </div>
                        <div className="broker-vopWaO">
                            <div className="name-7BRXix poppins-medium-mirage-14px">Broker</div>
                            <img className="font-awsome-handshake-7BRXix" src="img/fontawsome--handshake--10@1x.png" />
                        </div>
                        <div className="crypto-wallet-vopWaO">
                            <div className="name-Cma1Tu poppins-medium-mirage-14px">Crypto Wallet</div>
                            <img className="font-awsome-bitcoin-Cma1Tu" src="img/fontawsome--bitcoin--11@1x.png" />
                        </div>
                        <div className="trading-crypto-vopWaO">
                            <div className="name-9GD6YV poppins-medium-mirage-14px">Trading &amp; Crypto</div>
                            <img className="font-awsome-pen-9GD6YV" src="img/fontawsome--pen--10@1x.png" />
                        </div>
                        <div className="thmes-articles-vopWaO">
                            <div className="name-9AAu1N poppins-medium-mirage-14px">Thèmes articles</div>
                            <div className="icons-navigation-icon-12-states-9AAu1N">
                                <img
                                    className="font-awsome-bookmark-1H0Zdv"
                                    src="img/fontawsome--bookmark--10@1x.png"
                                />
                            </div>
                        </div>
                        <div className="customers-vopWaO">
                            <div className="name-cw9xDw poppins-medium-mirage-14px">Utilisateurs</div>
                            <div className="icons-navigation-icon-12-states-cw9xDw">
                                <img className="ic_users-IA5aoK" src="img/ic-users-11@1x.png" />
                            </div>
                        </div>
                        <div className="home-vopWaO">
                            <div className="name-lcjT5u poppins-medium-mirage-14px">Home</div>
                            <div className="icons-navigation-icon-12-states-lcjT5u">
                                <img className="ic_home-gLeIBq" src="img/ic-home-10@1x.png" />
                            </div>
                        </div>
                        <div className="articles-vopWaO">
                            <div className="name-FhDFTe poppins-medium-mirage-14px">Articles</div>
                            <div className="icons-navigation-icon-12-states-FhDFTe">
                                <img className="ic_invoice-UsyocP" src="img/ic-invoice-10@1x.png" />
                            </div>
                            <img
                                className="icon-ionic-ios-arrow-down-FhDFTe"
                                src="img/icon-ionic-ios-arrow-down-10@1x.png"
                            />
                        </div>
                        <div className="bot-trading-vopWaO">
                            <div className="name-xqvUnC poppins-medium-mirage-14px">Bot Trading</div>
                            <img className="font-awsome-robot-xqvUnC" src="img/fontawsome--robot--10@1x.png" />
                        </div>
                        <div className="pays-vopWaO">
                            <div className="name-TsewSO poppins-medium-mirage-14px">Pays</div>
                            <img
                                className="font-awsome-globe-europe-TsewSO"
                                src="img/fontawsome--globe-europe--10@1x.png"
                            />
                        </div>
                        <div className="abonnement-vopWaO">
                            <img className="frame-llocrr" src="img/frame-12@1x.png" />
                            <div className="line-llocrr"></div>
                            <div className="name-llocrr poppins-medium-blue-ribbon-14px">Abonnement</div>
                            <img className="icon-material-payment-llocrr" src="img/icon-material-payment-15@1x.png" />
                            <div className="gestion-abonnements-llocrr">
                                <div className="frame-lAXvaC"></div>
                                <div className="name-lAXvaC poppins-medium-blue-ribbon-14px">Gestion Abonnements</div>
                            </div>
                            <div className="code-promo-llocrr">
                                <div className="frame-dzTL34"></div>
                                <div className="name-dzTL34 poppins-medium-blue-ribbon-14px">Code promo</div>
                            </div>
                            <a href="deprecated/abonnement-essai-gratuit.tsx">
                                <div className="essai-gratuit-llocrr">
                                    <img className="frame-3fgvlm" src="img/frame-11@1x.png" />
                                    <div className="name-3fgvlm poppins-medium-blue-ribbon-14px">Essai gratuit</div>
                                </div>
                            </a>
                            <a href="abonnement-code-gratuit.tsx">
                                <div className="code-gratuit-llocrr">
                                    <img className="frame-me3JGx" src="img/frame-11@1x.png" />
                                    <div className="name-me3JGx poppins-medium-blue-ribbon-14px">Code gratuit</div>
                                </div>
                            </a>
                            <img
                                className="icon-ionic-ios-arrow-down-llocrr"
                                src="img/icon-ionic-ios-arrow-down-10@1x.png"
                            />
                        </div>
                    </div>
                    <Topbar />
                    <a href="abonnement-code-promo-creer.tsx">
                        <div className="buttons-btn-text-icon-o3qHqt">
                            <div className="type-ytGzbE"></div>
                            <div className="groupe-393-ytGzbE">
                                <div className="text-1Nu7xi poppins-normal-white-14px">Créer un code promo</div>
                            </div>
                        </div>
                    </a>
                    <div className="grid-table-o3qHqt">
                        <div className="groupe-455-naEJDx">
                            <div className="rectangle-616-6IZLG3"></div>
                            <div className="rectangle-618-6IZLG3"></div>
                            <div className="rectangle-619-6IZLG3"></div>
                            <div className="rectangle-621-6IZLG3"></div>
                            <div className="rectangle-622-6IZLG3"></div>
                            <div className="rectangle-623-6IZLG3"></div>
                            <div className="rectangle-624-6IZLG3"></div>
                        </div>
                        <div className="grid-table-naEJDx">
                            <div className="name-3bODHN poppins-medium-mirage-12px">Code</div>
                            <div className="name-VPuq8V poppins-medium-mirage-12px">Réduction</div>
                            <div className="name-N1QRLZ poppins-medium-mirage-12px">Abonnement</div>
                            <div className="name-yQtyiD poppins-medium-mirage-12px">Nombre d’utilisation</div>
                            <div className="name-Ku6mpd poppins-medium-mirage-12px">Etat (Actif/Désactiver)</div>
                            <div className="name-Ee25h8 poppins-medium-mirage-12px">Action</div>
                        </div>
                        <div className="exemple-row-naEJDx">
                            <div className="rectangle-617-qd4YGn"></div>
                            <div className="name-qd4YGn poppins-medium-tundora-10px">Novice</div>
                            <div className="name-lDviXT poppins-medium-tundora-10px">50%</div>
                            <div className="name-pPrLWg poppins-medium-tundora-10px">Tous</div>
                            <div className="membre-qd4YGn">
                                <img
                                    className="font-awsome-check-square-38zoHj"
                                    src="img/fontawsome--check-square--10@1x.png"
                                />
                            </div>
                            <img className="font-awsome-pen-qd4YGn" src="img/fontawsome--pen--12@1x.png" />
                            <img className="font-awsome-times-qd4YGn" src="img/fontawsome--times--10@1x.png" />
                            <div className="name-iY0HzH poppins-medium-tundora-10px">0</div>
                            <div className="icon-feather-copy-qd4YGn">
                                <img className="trac-997-NpuSpH" src="img/trac--997-1@1x.png" />
                                <img className="trac-998-NpuSpH" src="img/trac--998-1@1x.png" />
                            </div>
                        </div>
                    </div>
                    <div className="search-o3qHqt">
                        <div className="rectangle-625-0vBWB3"></div>
                        <div className="name-0vBWB3 poppins-medium-mirage-10px">Rechercher…</div>
                    </div>
                    <div className="filtre-o3qHqt">
                        <div className="rectangle-625-HJmmqk"></div>
                        <div className="name-HJmmqk poppins-medium-mirage-10px">Etat</div>
                        <img
                            className="font-awsome-chevron-down-HJmmqk"
                            src="img/fontawsome--chevron-down--10@1x.png"
                        />
                    </div>
                    <div className="filtre-P2BFZZ">
                        <div className="rectangle-625-CdqCqx"></div>
                        <div className="name-CdqCqx poppins-medium-mirage-10px">Utiliser</div>
                        <img
                            className="font-awsome-chevron-down-CdqCqx"
                            src="img/fontawsome--chevron-down--10@1x.png"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
