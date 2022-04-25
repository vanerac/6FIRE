import React, { useEffect, useState } from 'react';
import Topbar from '../components/topbar';
import { Theme } from '@shared/services';
import apiClient from '@shared/tools/apiClient';

export default function ThemesArticles() {
    const [$themes, setThemes] = useState<Theme[]>([]);

    useEffect(() => {
        apiClient().themes.getThemes().then(setThemes);
    }, []);
    return (
        <>
            <input type="hidden" id="anPageName" name="page" value="themes-articles" />
            <div className="container-center-horizontal">
                <div className="themes-articles screen">
                    <div className="analytics-FLlxoQ poppins-semibold-semi-bold-mirage-24px">Thèmes articles</div>
                    <Topbar />
                    <div className="grid-table-FLlxoQ">
                        <div className="groupe-455-2OQISg">
                            <div className="rectangle-616-SQUZbp"></div>
                            <div className="rectangle-618-SQUZbp"></div>
                            <div className="rectangle-619-SQUZbp"></div>
                            <div className="rectangle-621-SQUZbp"></div>
                            <div className="rectangle-622-SQUZbp"></div>
                            <div className="rectangle-623-SQUZbp"></div>
                            <div className="rectangle-624-SQUZbp"></div>
                        </div>
                        <div className="grid-table-2OQISg">
                            <div className="name-Kuj03C poppins-medium-mirage-12px">ID</div>
                            <div className="name-PFZ8Hx poppins-medium-mirage-12px">Thèmes</div>
                            <div className="name-6PezNp poppins-medium-mirage-12px">Icon</div>
                            <div className="name-PGdp1p poppins-medium-mirage-12px">Action</div>
                            <div className="name-OSAUE6 poppins-medium-mirage-12px">Type d’abonnement</div>
                            <div className="name-sRwOHQ poppins-medium-mirage-12px">Visible</div>
                        </div>
                        <div className="row-2OQISg">
                            <div className="rectangle-617-rybZrO"></div>
                            <div className="name-rybZrO poppins-medium-tundora-10px">1</div>
                            <div className="name-LJRizt poppins-medium-tundora-10px">Cryptomonnaies</div>
                            <img className="font-awsome-pen-rybZrO" src="img/fontawsome--pen--12@1x.png" />
                            <img className="font-awsome-times-rybZrO" src="img/fontawsome--times--10@1x.png" />
                            <div className="rectangle-3487-rybZrO"></div>
                            <div className="icon-actif-rybZrO">
                                <img className="groupe-1490-HMsLtv" src="img/groupe-1490@1x.png" />
                            </div>
                            <div className="membre-rybZrO">
                                <img
                                    className="font-awsome-check-square-kbnsUd"
                                    src="img/fontawsome--check-square--10@1x.png"
                                />
                            </div>
                            <div className="name-jHIUnw poppins-medium-tundora-10px">Intermédiaire (99.99€)</div>
                        </div>
                    </div>
                    <div className="search-FLlxoQ">
                        <div className="rectangle-625-hcX5S3"></div>
                        <div className="name-hcX5S3 poppins-medium-mirage-10px">Rechercher…</div>
                    </div>
                    <div className="buttons-btn-text-icon-FLlxoQ">
                        <div className="type-f5l5UW"></div>
                        <div className="groupe-393-f5l5UW">
                            <div className="text-I5jupF poppins-normal-white-14px">Créer un thème</div>
                        </div>
                    </div>
                    <div className="filtre-FLlxoQ">
                        <div className="rectangle-625-DajelN"></div>
                        <div className="name-DajelN poppins-medium-mirage-10px">Visible</div>
                        <img
                            className="font-awsome-chevron-down-DajelN"
                            src="img/fontawsome--chevron-down--10@1x.png"
                        />
                    </div>
                    <div className="filtre-zp2cS4">
                        <div className="rectangle-625-tmxYXM"></div>
                        <div className="name-tmxYXM poppins-medium-mirage-10px">Type abonnement</div>
                        <img
                            className="font-awsome-chevron-down-tmxYXM"
                            src="img/fontawsome--chevron-down--10@1x.png"
                        />
                    </div>
                    <div className="buttons-btn-text-icon-zp2cS4">
                        <div className="type-UE0qpl"></div>
                        <div className="groupe-393-UE0qpl">
                            <div className="text-uF8gyQ poppins-normal-white-14px">Sauvegarder les modifications</div>
                        </div>
                    </div>
                    <div className="sidebar-FLlxoQ">
                        <div className="shape-Zx419e"></div>
                        <a href="parametres.html">
                            <div className="settings-Zx419e">
                                <div className="name-v3MpOc poppins-medium-mirage-14px">Settings</div>
                                <div className="icons-navigation-icon-12-states-v3MpOc">
                                    <img className="ic_setting-gVSyd7" src="img/ic-setting-11@1x.png" />
                                </div>
                            </div>
                        </a>
                        <div className="broker-Zx419e">
                            <div className="name-5M9EHv poppins-medium-mirage-14px">Broker</div>
                            <img className="font-awsome-handshake-5M9EHv" src="img/fontawsome--handshake--10@1x.png" />
                        </div>
                        <div className="crypto-wallet-Zx419e">
                            <div className="name-3c8UAj poppins-medium-mirage-14px">Crypto Wallet</div>
                            <img className="font-awsome-bitcoin-3c8UAj" src="img/fontawsome--bitcoin--11@1x.png" />
                        </div>
                        <div className="trading-crypto-Zx419e">
                            <img className="frame-WesCZ2" src="img/frame-12@1x.png" />
                            <div className="line-WesCZ2"></div>
                            <div className="name-WesCZ2 poppins-medium-blue-ribbon-14px">Trading &amp; Crypto</div>
                            <img className="font-awsome-pen-WesCZ2" src="img/fontawsome--pen--11@1x.png" />
                        </div>
                        <div className="thmes-articles-Zx419e">
                            <div className="name-9RJP8W poppins-medium-mirage-14px">Thèmes articles</div>
                            <div className="icons-navigation-icon-12-states-9RJP8W">
                                <img
                                    className="font-awsome-bookmark-bg9YlT"
                                    src="img/fontawsome--bookmark--10@1x.png"
                                />
                            </div>
                        </div>
                        <a href="utilisateurs.html">
                            <div className="customers-Zx419e">
                                <div className="name-mgou0P poppins-medium-mirage-14px">Utilisateurs</div>
                                <div className="icons-navigation-icon-12-states-mgou0P">
                                    <img className="ic_users-fdf7hh" src="img/ic-users-11@1x.png" />
                                </div>
                            </div>
                        </a>
                        <div className="home-Zx419e">
                            <div className="name-0XpNhd poppins-medium-mirage-14px">Home</div>
                            <div className="icons-navigation-icon-12-states-0XpNhd">
                                <img className="ic_home-jOdgoT" src="img/ic-home-10@1x.png" />
                            </div>
                        </div>
                        <div className="articles-Zx419e">
                            <div className="name-mTvF9i poppins-medium-mirage-14px">Articles</div>
                            <div className="icons-navigation-icon-12-states-mTvF9i">
                                <img className="ic_invoice-TaOdbd" src="img/ic-invoice-10@1x.png" />
                            </div>
                            <img
                                className="icon-ionic-ios-arrow-down-mTvF9i"
                                src="img/icon-ionic-ios-arrow-down-10@1x.png"
                            />
                        </div>
                        <div className="bot-trading-Zx419e">
                            <div className="name-5PGWqV poppins-medium-mirage-14px">Bot Trading</div>
                            <img className="font-awsome-robot-5PGWqV" src="img/fontawsome--robot--3@1x.png" />
                        </div>
                        <div className="pays-Zx419e">
                            <div className="name-Uojy1k poppins-medium-mirage-14px">Pays</div>
                            <img
                                className="font-awsome-globe-europe-Uojy1k"
                                src="img/fontawsome--globe-europe--10@1x.png"
                            />
                        </div>
                        <div className="abonnement-Zx419e">
                            <div className="name-HR4IsD poppins-medium-mirage-14px">Abonnement</div>
                            <img className="icon-material-payment-HR4IsD" src="img/icon-material-payment-10@1x.png" />
                            <img
                                className="icon-ionic-ios-arrow-down-HR4IsD"
                                src="img/icon-ionic-ios-arrow-down-10@1x.png"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
