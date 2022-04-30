import React, { useEffect, useState } from 'react';
import Topbar from '../components/topbar';
import router from 'next/router';
import getAPIClient from '@shared/tools/apiClient';
import { useCookies } from 'react-cookie';

export default function Parametres() {
    // const { query } = useRouter();
    const [cookies] = useCookies(['API_TOKEN']);
    const $apiClient = getAPIClient(cookies['API_TOKEN']);

    const [$loading, $setLoading] = useState(true);
    const [$error, $setError] = useState('');
    const [$parametres, $setParametres] = useState({});

    useEffect(() => {
        if (!cookies['API_TOKEN']) {
            console.log('no token');
            router.replace('/');
            return;
        }

        // Todo: Parametre SMS
    }, []);
    return (
        <>
            <input type="hidden" id="anPageName" name="page" value="parametres" />
            <div className="container-center-horizontal">
                <div className="parametres screen">
                    <div className="analytics-Oh231m poppins-semibold-semi-bold-mirage-24px">Paramètres</div>
                    <Topbar />
                    <div className="buttons-btn-text-icon-Oh231m">
                        <div className="type-ntDvMP"></div>
                        <div className="groupe-393-ntDvMP">
                            <div className="text-mJ3Zt0 poppins-normal-white-14px">Sauvegarder</div>
                        </div>
                    </div>
                    <div className="sms-inscription-Oh231m">
                        <div className="rectangle-632-rA1U92"></div>
                        <div className="titre-rA1U92">
                            <div className="rectangle-633-GWCpxd"></div>
                            <div className="analytics-GWCpxd poppins-semibold-semi-bold-white-14px">
                                SMS à l’Inscription
                            </div>
                        </div>
                        <div className="contenu-sms-rA1U92">
                            <img className="ligne-6-CMjqbk" src="img/ligne-6-42@1x.png" />
                            <div className="nom-CMjqbk poppins-normal-tundora-12px">Nom</div>
                            <div className="contenu-du-sms-CMjqbk lato-normal-comet-10px">Contenu du SMS</div>
                        </div>
                        <div className="toggle-rA1U92">
                            <div className="toggle-OkDX6D">
                                <div className="toggle-off-7yQuww">
                                    <div className="rectangle-655-IfZx8D"></div>
                                    <div className="rectangle-656-IfZx8D"></div>
                                    <div className="off-IfZx8D arial-bold-white-6px">OFF</div>
                                </div>
                            </div>
                            <div className="activer-les-sms-linscription-OkDX6D lato-normal-comet-10px">
                                Activer les SMS à l’inscription
                            </div>
                        </div>
                    </div>
                    <div className="sidebar-Oh231m">
                        <div className="shape-SGNSZD"></div>
                        <div className="settings-SGNSZD">
                            <img className="frame-WRa0Tl" src="img/frame-12@1x.png" />
                            <div className="name-WRa0Tl poppins-medium-blue-ribbon-14px">Settings</div>
                            <div className="line-WRa0Tl"></div>
                            <div className="icons-navigation-icon-12-states-WRa0Tl">
                                <img className="ic_setting-K2SAPN" src="img/ic-setting-33@1x.png" />
                            </div>
                        </div>
                        <div className="broker-SGNSZD">
                            <div className="name-JWx0xh poppins-medium-mirage-14px">Broker</div>
                            <img className="font-awsome-handshake-JWx0xh" src="img/fontawsome--handshake--10@1x.png" />
                        </div>
                        <div className="crypto-wallet-SGNSZD">
                            <div className="name-ymvQyY poppins-medium-mirage-14px">Crypto Wallet</div>
                            <img className="font-awsome-bitcoin-ymvQyY" src="img/fontawsome--bitcoin--11@1x.png" />
                        </div>
                        <div className="trading-crypto-SGNSZD">
                            <div className="name-VNm6eD poppins-medium-mirage-14px">Trading &amp; Crypto</div>
                            <img className="font-awsome-pen-VNm6eD" src="img/fontawsome--pen--10@1x.png" />
                        </div>
                        <div className="thmes-articles-SGNSZD">
                            <div className="name-DoQz22 poppins-medium-mirage-14px">Thèmes articles</div>
                            <div className="icons-navigation-icon-12-states-DoQz22">
                                <img
                                    className="font-awsome-bookmark-6JxALY"
                                    src="img/fontawsome--bookmark--10@1x.png"
                                />
                            </div>
                        </div>
                        <div className="customers-SGNSZD">
                            <div className="name-Xjk4Aq poppins-medium-mirage-14px">Utilisateurs</div>
                            <div className="icons-navigation-icon-12-states-Xjk4Aq">
                                <img className="ic_users-AB7cE0" src="img/ic-users-11@1x.png" />
                            </div>
                        </div>
                        <div className="home-SGNSZD">
                            <div className="name-KhtoyF poppins-medium-mirage-14px">Home</div>
                            <div className="icons-navigation-icon-12-states-KhtoyF">
                                <img className="ic_home-RSDpol" src="img/ic-home-10@1x.png" />
                            </div>
                        </div>
                        <div className="articles-SGNSZD">
                            <div className="name-qNxyEv poppins-medium-mirage-14px">Articles</div>
                            <div className="icons-navigation-icon-12-states-qNxyEv">
                                <img className="ic_invoice-5xxUGy" src="img/ic-invoice-10@1x.png" />
                            </div>
                            <img
                                className="icon-ionic-ios-arrow-down-qNxyEv"
                                src="img/icon-ionic-ios-arrow-down-10@1x.png"
                            />
                        </div>
                        <div className="bot-trading-SGNSZD">
                            <div className="name-GxlClI poppins-medium-mirage-14px">Bot Trading</div>
                            <img className="font-awsome-robot-GxlClI" src="img/fontawsome--robot--10@1x.png" />
                        </div>
                        <div className="pays-SGNSZD">
                            <div className="name-z7G2Ox poppins-medium-mirage-14px">Pays</div>
                            <img
                                className="font-awsome-globe-europe-z7G2Ox"
                                src="img/fontawsome--globe-europe--10@1x.png"
                            />
                        </div>
                        <div className="abonnement-SGNSZD">
                            <div className="name-rQwdMq poppins-medium-mirage-14px">Abonnement</div>
                            <img className="icon-material-payment-rQwdMq" src="img/icon-material-payment-10@1x.png" />
                            <img
                                className="icon-ionic-ios-arrow-down-rQwdMq"
                                src="img/icon-ionic-ios-arrow-down-10@1x.png"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
