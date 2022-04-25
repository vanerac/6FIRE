import React, { useEffect, useState } from 'react';
import Topbar from '../components/topbar';
import { Article } from '@shared/services';
import apiClient from '@shared/tools/apiClient';

export default function Articles() {
    const [$articles, setArticles] = useState<Article[]>([]);

    useEffect(() => {
        // Todo: Note: Api can return an Error object ?
        apiClient()
            .article.getArticles()
            .then((articles) => setArticles(articles as Article[]));
    }, []);
    return (
        <>
            <input type="hidden" id="anPageName" name="page" value="articles-historique-articles" />
            <div className="container-center-horizontal">
                <div className="articles-historique-articles screen">
                    <div className="analytics-dYjv5x poppins-semibold-semi-bold-mirage-24px">Historique articles</div>
                    <Topbar />
                    <div className="grid-table-dYjv5x">
                        <div className="groupe-455-dOxmHY">
                            <div className="rectangle-616-Q9AjOX"></div>
                            <div className="rectangle-618-Q9AjOX"></div>
                            <div className="rectangle-619-Q9AjOX"></div>
                            <div className="rectangle-621-Q9AjOX"></div>
                            <div className="rectangle-622-Q9AjOX"></div>
                            <div className="rectangle-623-Q9AjOX"></div>
                            <div className="rectangle-624-Q9AjOX"></div>
                        </div>
                        <div className="grid-table-dOxmHY">
                            <div className="name-9SCJEZ poppins-medium-mirage-12px">ID</div>
                            <div className="name-mfxgg4 poppins-medium-mirage-12px">Thèmes</div>
                            <div className="name-IMcKpC poppins-medium-mirage-12px">Titre article</div>
                            <div className="name-gswJKy poppins-medium-mirage-12px">Action</div>
                            <div className="name-AUpnxi poppins-medium-mirage-12px">Visible</div>
                        </div>
                        <div className="row-dOxmHY">
                            <div className="rectangle-617-0CFfmM"></div>
                            <div className="name-0CFfmM poppins-medium-tundora-10px">1</div>
                            <div className="name-uApwax poppins-medium-tundora-10px">Cryptomonnaies</div>
                            <img className="font-awsome-pen-0CFfmM" src="img/fontawsome--pen--1@1x.png" />
                            <img className="font-awsome-times-0CFfmM" src="img/fontawsome--times--10@1x.png" />
                            <div className="membre-0CFfmM">
                                <img
                                    className="font-awsome-check-square-iajmhB"
                                    src="img/fontawsome--check-square--10@1x.png"
                                />
                            </div>
                            <div className="name-oaHVIO poppins-medium-tundora-10px">Le Bitcoin, en savoir plus</div>
                        </div>
                    </div>
                    <div className="search-dYjv5x">
                        <div className="rectangle-625-bvP5uF"></div>
                        <div className="name-bvP5uF poppins-medium-mirage-10px">Rechercher…</div>
                    </div>
                    <div className="filtre-dYjv5x">
                        <div className="rectangle-625-MHv3Gs"></div>
                        <div className="name-MHv3Gs poppins-medium-mirage-10px">Visible</div>
                        <img
                            className="font-awsome-chevron-down-MHv3Gs"
                            src="img/fontawsome--chevron-down--10@1x.png"
                        />
                    </div>
                    <div className="filtre-ZweFi7">
                        <div className="rectangle-625-Ca4yXy"></div>
                        <div className="name-Ca4yXy poppins-medium-mirage-10px">Thèmes articles</div>
                        <img
                            className="font-awsome-chevron-down-Ca4yXy"
                            src="img/fontawsome--chevron-down--10@1x.png"
                        />
                    </div>
                    <div className="date-dYjv5x">
                        <div className="buttons-btn-text-icon-W7arpx">
                            <div className="type-L3sutx border-1px-snuff"></div>
                            <div className="groupe-393-L3sutx">
                                <div className="text-BTnY1X poppins-normal-comet-14px">Jan, 2019 - Dec, 2019</div>
                                <img className="calendar-event-BTnY1X" src="img/calendar-event-6@1x.png" />
                                <div className="icons-navigation-icon-12-states-BTnY1X">
                                    <img className="ic-calendar-QRJrNa" src="img/ic-calendar-13@1x.png" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sidebar-dYjv5x">
                        <div className="shape-Jq9SHm"></div>
                        <div className="settings-Jq9SHm">
                            <div className="name-OCme6J poppins-medium-mirage-14px">Settings</div>
                            <div className="icons-navigation-icon-12-states-OCme6J">
                                <img className="ic_setting-5GGCqP" src="img/ic-setting-11@1x.png" />
                            </div>
                        </div>
                        <div className="broker-Jq9SHm">
                            <div className="name-1LfBfr poppins-medium-mirage-14px">Broker</div>
                            <img className="font-awsome-handshake-1LfBfr" src="img/fontawsome--handshake--10@1x.png" />
                        </div>
                        <div className="crypto-wallet-Jq9SHm">
                            <div className="name-9r4M6t poppins-medium-mirage-14px">Crypto Wallet</div>
                            <img className="font-awsome-bitcoin-9r4M6t" src="img/fontawsome--bitcoin--11@1x.png" />
                        </div>
                        <div className="trading-crypto-Jq9SHm">
                            <div className="name-7Hkkzt poppins-medium-mirage-14px">Trading &amp; Crypto</div>
                            <img className="font-awsome-pen-7Hkkzt" src="img/fontawsome--pen--10@1x.png" />
                        </div>
                        <div className="thmes-articles-Jq9SHm">
                            <div className="name-f4GnjF poppins-medium-mirage-14px">Thèmes articles</div>
                            <div className="icons-navigation-icon-12-states-f4GnjF">
                                <img
                                    className="font-awsome-bookmark-Poz6w5"
                                    src="img/fontawsome--bookmark--10@1x.png"
                                />
                            </div>
                        </div>
                        <div className="customers-Jq9SHm">
                            <div className="name-nzkn2p poppins-medium-mirage-14px">Utilisateurs</div>
                            <div className="icons-navigation-icon-12-states-nzkn2p">
                                <img className="ic_users-U4tKaW" src="img/ic-users-11@1x.png" />
                            </div>
                        </div>
                        <div className="home-Jq9SHm">
                            <div className="name-zYBY18 poppins-medium-mirage-14px">Home</div>
                            <div className="icons-navigation-icon-12-states-zYBY18">
                                <img className="ic_home-rgr1wk" src="img/ic-home-10@1x.png" />
                            </div>
                        </div>
                        <div className="articles-Jq9SHm">
                            <img className="frame-bee5Ti" src="img/frame-10@1x.png" />
                            <div className="line-bee5Ti"></div>
                            <div className="name-bee5Ti poppins-medium-blue-ribbon-14px">Articles</div>
                            <div className="icons-navigation-icon-12-states-bee5Ti">
                                <img className="ic_invoice-2tFjxM" src="img/ic-invoice-16@1x.png" />
                            </div>
                            <img
                                className="icon-ionic-ios-arrow-down-bee5Ti"
                                src="img/icon-ionic-ios-arrow-down-10@1x.png"
                            />
                            <div className="frame-TIhjmt"></div>
                            <div className="frame-PybkeA"></div>
                            <div className="name-TIhjmt poppins-medium-blue-ribbon-14px">Créer article</div>
                            <div className="name-PybkeA poppins-medium-blue-ribbon-14px">Créer article entreprise</div>
                            <img className="frame-O2nbdI" src="img/frame-11@1x.png" />
                            <div className="name-O2nbdI poppins-medium-blue-ribbon-14px">Historique articles</div>
                        </div>
                        <div className="bot-trading-Jq9SHm">
                            <div className="name-UbjRfV poppins-medium-mirage-14px">Bot Trading</div>
                            <img className="font-awsome-robot-UbjRfV" src="img/fontawsome--robot--3@1x.png" />
                        </div>
                        <div className="pays-Jq9SHm">
                            <div className="name-2pC3WV poppins-medium-mirage-14px">Pays</div>
                            <img
                                className="font-awsome-globe-europe-2pC3WV"
                                src="img/fontawsome--globe-europe--10@1x.png"
                            />
                        </div>
                        <div className="abonnement-Jq9SHm">
                            <div className="name-zIq3Be poppins-medium-mirage-14px">Abonnement</div>
                            <img className="icon-material-payment-zIq3Be" src="img/icon-material-payment-10@1x.png" />
                            <img
                                className="icon-ionic-ios-arrow-down-zIq3Be"
                                src="img/icon-ionic-ios-arrow-down-10@1x.png"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
