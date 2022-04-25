import React, { useEffect, useState } from 'react';
import Topbar from '../components/topbar';
import { CryptoHolding } from '@shared/services';
import apiClient from '@shared/tools/apiClient';

export default function TradingCrypto() {
    const [$cryptoHoldings, setCryptoHoldings] = useState<CryptoHolding[]>([]);
    const [$messages, setMessages] = useState<{ id: number; message: string; date: string }[]>([]);

    useEffect(() => {
        apiClient()
            .crypto.getAllCrypto()
            .then(
                ({
                    cryptos,
                    messages,
                }: {
                    cryptos: CryptoHolding[];
                    messages: { id: number; message: string; date: string }[];
                }) => {
                    setCryptoHoldings(cryptos);
                    setMessages(messages);
                },
            );
    }, []);
    return (
        <>
            <input type="hidden" id="anPageName" name="page" value="trading-crypto" />
            <div className="container-center-horizontal">
                <div className="trading-crypto screen">
                    <div className="analytics-0HdJvR poppins-semibold-semi-bold-mirage-24px">Trading &amp; Crypto</div>
                    <Topbar />
                    <div className="buttons-btn-text-icon-0HdJvR">
                        <div className="type-M8x5OR"></div>
                        <div className="groupe-393-M8x5OR">
                            <div className="text-5hPid0 poppins-normal-white-14px">Sauvegarder les modifications</div>
                        </div>
                    </div>
                    <div className="page-espace-trading-crypto-0HdJvR">
                        <div className="rectangle-632-O2UxC4"></div>
                        <div className="titre-O2UxC4">
                            <div className="rectangle-633-uE0hqr"></div>
                            <div className="analytics-uE0hqr poppins-semibold-semi-bold-white-14px">
                                Page - Espace Trading &amp; Crypto
                            </div>
                        </div>
                        <div className="titre-page-O2UxC4">
                            <img className="ligne-6-TOCziR" src="img/ligne-6-1@1x.png" />
                            <div className="axie-infinity-play-to-earn-TOCziR poppins-normal-vulcan-12px">
                                Axie Infinity, Play to Earn
                            </div>
                            <div className="titre-TOCziR lato-normal-comet-10px">Titre</div>
                        </div>
                        <div className="editeur-O2UxC4">
                            <div className="rectangle-16882-wqESeD border-1px-silver"></div>
                            <img
                                className="notes-details-text-editor-wqESeD"
                                src="img/notes--details--text-editor-1@1x.png"
                            />
                        </div>
                        <div className="paragraphe-O2UxC4 lato-normal-comet-10px">Paragraphe</div>
                    </div>
                    <div className="pages-nos-trades-0HdJvR">
                        <div className="rectangle-632-rLO8zg"></div>
                        <div className="titre-rLO8zg">
                            <div className="rectangle-633-Dd2UZo"></div>
                            <div className="analytics-Dd2UZo poppins-semibold-semi-bold-white-14px">
                                Page - Nos trades
                            </div>
                        </div>
                        <div className="titre-page-rLO8zg">
                            <img className="ligne-6-owZxKI" src="img/ligne-6-1@1x.png" />
                            <div className="axie-infinity-play-to-earn-owZxKI poppins-normal-vulcan-12px">
                                Axie Infinity, Play to Earn
                            </div>
                            <div className="titre-owZxKI lato-normal-comet-10px">Titre</div>
                        </div>
                        <div className="editeur-rLO8zg">
                            <div className="rectangle-16882-R7xu0G border-1px-silver"></div>
                            <img
                                className="notes-details-text-editor-R7xu0G"
                                src="img/notes--details--text-editor-1@1x.png"
                            />
                        </div>
                        <div className="paragraphe-rLO8zg lato-normal-comet-10px">Paragraphe</div>
                    </div>
                    <div className="sidebar-0HdJvR">
                        <div className="shape-CixfV8"></div>
                        <div className="settings-CixfV8">
                            <div className="name-xAyKLc poppins-medium-mirage-14px">Settings</div>
                            <div className="icons-navigation-icon-12-states-xAyKLc">
                                <img className="ic_setting-xstOdY" src="img/ic-setting-11@1x.png" />
                            </div>
                        </div>
                        <div className="broker-CixfV8">
                            <div className="name-wTcobN poppins-medium-mirage-14px">Broker</div>
                            <img className="font-awsome-handshake-wTcobN" src="img/fontawsome--handshake--10@1x.png" />
                        </div>
                        <div className="crypto-wallet-CixfV8">
                            <div className="name-cP0SIY poppins-medium-mirage-14px">Crypto Wallet</div>
                            <img className="font-awsome-bitcoin-cP0SIY" src="img/fontawsome--bitcoin--11@1x.png" />
                        </div>
                        <div className="trading-crypto-CixfV8">
                            <img className="frame-XO9ZZQ" src="img/frame-12@1x.png" />
                            <div className="line-XO9ZZQ"></div>
                            <div className="name-XO9ZZQ poppins-medium-blue-ribbon-14px">Trading &amp; Crypto</div>
                            <img className="font-awsome-pen-XO9ZZQ" src="img/fontawsome--pen--11@1x.png" />
                        </div>
                        <div className="thmes-articles-CixfV8">
                            <div className="name-IlXUXi poppins-medium-mirage-14px">Thèmes articles</div>
                            <div className="icons-navigation-icon-12-states-IlXUXi">
                                <img
                                    className="font-awsome-bookmark-xKSfUg"
                                    src="img/fontawsome--bookmark--10@1x.png"
                                />
                            </div>
                        </div>
                        <div className="customers-CixfV8">
                            <div className="name-w1l4ze poppins-medium-mirage-14px">Utilisateurs</div>
                            <div className="icons-navigation-icon-12-states-w1l4ze">
                                <img className="ic_users-NxgnFU" src="img/ic-users-11@1x.png" />
                            </div>
                        </div>
                        <div className="home-CixfV8">
                            <div className="name-Pmxgxw poppins-medium-mirage-14px">Home</div>
                            <div className="icons-navigation-icon-12-states-Pmxgxw">
                                <img className="ic_home-4MkzWg" src="img/ic-home-10@1x.png" />
                            </div>
                        </div>
                        <div className="articles-CixfV8">
                            <div className="name-b870mG poppins-medium-mirage-14px">Articles</div>
                            <div className="icons-navigation-icon-12-states-b870mG">
                                <img className="ic_invoice-xpxX1p" src="img/ic-invoice-10@1x.png" />
                            </div>
                            <img
                                className="icon-ionic-ios-arrow-down-b870mG"
                                src="img/icon-ionic-ios-arrow-down-10@1x.png"
                            />
                        </div>
                        <div className="bot-trading-CixfV8">
                            <div className="name-CafU47 poppins-medium-mirage-14px">Bot Trading</div>
                            <img className="font-awsome-robot-CafU47" src="img/fontawsome--robot--3@1x.png" />
                        </div>
                        <div className="pays-CixfV8">
                            <div className="name-faCDxX poppins-medium-mirage-14px">Pays</div>
                            <img
                                className="font-awsome-globe-europe-faCDxX"
                                src="img/fontawsome--globe-europe--10@1x.png"
                            />
                        </div>
                        <div className="abonnement-CixfV8">
                            <div className="name-nl3juf poppins-medium-mirage-14px">Abonnement</div>
                            <img className="icon-material-payment-nl3juf" src="img/icon-material-payment-10@1x.png" />
                            <img
                                className="icon-ionic-ios-arrow-down-nl3juf"
                                src="img/icon-ionic-ios-arrow-down-10@1x.png"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
