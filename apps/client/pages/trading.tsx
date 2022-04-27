import type { NextPage } from 'next';
// import Footer from './components/footer';
import Header from './components/header';
// import checkAuth from './components/checkAuth';
import Cookies from 'universal-cookie';
import router from 'next/router';
import { useEffect } from 'react';

const Trading: NextPage = (props: any) => {
    const cookies = new Cookies();

    useEffect(() => {
        if (!cookies.get('API_TOKEN')) {
            router.replace('/');
        }
    }, []);

    return (
        <div>
            <input type="hidden" id="anPageName" name="page" value="trading" />
            <div className="trading screen">
                <img className="groupe-de-masques-333-3LBGsu" src="img/mask-group-333@1x.png" />
                <div className="background-3LBGsu"></div>
                <div className="background-wsIV14"></div>
                <Header isOpenSideBar={props.useStateOpenSideBar} isEspaceTradingCrypto={false} />
                <div className="h2-3LBGsu lato-bold-white-14px">
                    CONTACTEZ NOUS POUR ACCÉDER AU CANAL TELEGRAM DES MEMBRES TRADING &amp; CRYPTO
                    <br />
                </div>
                <div className="paragraph-3LBGsu lato-normal-white-12px">
                    Pour voir nos analyses, nos signaux, nos dernières positions et nos avis sur le marché, vous devez
                    obtenir l’accès à notre Telegram ! Pour cela, contactez nous directement via notre Support Telegram
                    ou notre Support WhatsApp
                    <br />
                </div>
                <div className="button-cration-de-compte-3LBGsu">
                    <div className="rectangle-3470-JJ0G8n"></div>
                    <div className="support-telegram-JJ0G8n lato-bold-white-12px">Support Telegram</div>
                    <img className="icon-awesome-telegram-JJ0G8n" src="img/icon-awesome-telegram@1x.png" />
                </div>
                <div className="button-cration-de-compte-wsIV14">
                    <img className="trac-1041-eLBtOU" src="img/path-1041@1x.png" />
                    <div className="support-whats-app-eLBtOU lato-bold-white-12px">Support WhatsApp</div>
                    <img className="icon-ionic-logo-whatsapp-eLBtOU" src="img/icon-ionic-logo-whatsapp@1x.png" />
                </div>
                <div className="icon-actif-3LBGsu">
                    <div className="ellipse-17693-HY07wG"></div>
                    <img className="font-awsome-graduation-cap-HY07wG" src="img/fontawsome--graduation-cap--1@1x.png" />
                </div>
                <div className="avertissement-3LBGsu">
                    <div className="groupe-3020-oVxWK7">
                        <div className="rectangle-3606-IAQthO"></div>
                        <div className="les-investissements-IAQthO lato-normal-white-12px-2">
                            <span className="span0-1O0YCE lato-bold-white-12px">Les investissements sont risqués.</span>
                            <span className="span1-1O0YCE lato-normal-white-12px">
                                Les investissements sont risqués par nature, les utilisateurs doivent faire leurs
                                propres recherches avant d’entreprendre toute action et n’investir que dans les limites
                                de leurs capacités financières. Cet article ne constitue pas un conseil en
                                investissement.
                            </span>
                        </div>
                    </div>
                    <img className="ligne-41-oVxWK7" src="img/line-41-2@1x.png" />
                </div>
                <div className="ellipse-17698-3LBGsu border-1px-white"></div>
                <div className="paragraph-wsIV14 lato-bold-white-14px">FORMATIONS</div>
                <div className="icon-actif-wsIV14">
                    <div className="ellipse-17693-9XUwTz"></div>
                    <img className="font-awsome-dollar-sign-9XUwTz" src="img/fontawsome--dollar-sign--1@1x.png" />
                </div>
                <div className="paragraph-WACo3F lato-normal-white-12px">
                    Des articles spécifiques au Forex, à l’actualité mondiale et aux conséquences que cela peut
                    engendrer sur les marchés financiers.
                </div>
                <div className="paragraph-CYhAka lato-normal-white-12px">
                    Dans cette section tu auras énormément de lecture pour tout apprendre sur la Crypto et sur le
                    Trading. Il faut lire, lire et encore lire pour comprendre, apprendre puis passer à la pratique
                    quand tu es prêt.
                </div>
                <img className="ligne-37-3LBGsu" src="img/line-37@1x.png" />
                <div className="paragraph-8BChM2 lato-bold-white-14px">FOREX</div>
                <img className="ligne-38-3LBGsu" src="img/line-38@1x.png" />
                <div className="icon-actif-WACo3F">
                    <div className="ellipse-17693-Y55Uhp">
                        <img className="font-awsome-wallet-Y55Uhp" src="img/fontawsome--wallet--1@1x.png" />
                    </div>
                </div>
                <div className="paragraph-Jqjrbf lato-bold-white-14px">CRYPTO WALLET</div>
                <div className="paragraph-wmWWGn lato-normal-white-12px">
                    Sur cette page, tu peux voir en temps réel comment se compose notre portefeuille cryptomonnaie.
                    Ainsi, tu peux savoir quand est ce qu’on achète du BTC, de l’ETH ou quand est ce qu’on revend la
                    totalité pour se mettre en USDT et atteindre la fin de l’orage. <br />
                </div>
                <img className="ligne-39-3LBGsu" src="img/line-37@1x.png" />
                <div className="icon-actif-CYhAka">
                    <div className="ellipse-17693-eZI6fo">
                        <img className="icon-awesome-robot-eZI6fo" src="img/icon-awesome-robot-1@1x.png" />
                    </div>
                </div>
                <div className="paragraph-cxW2ZF lato-bold-white-14px">BOT TRADING</div>
                <div className="paragraph-V9zAaz lato-normal-white-12px">
                    Un outil disponible nul part ailleurs sur le marché ! Nous avons développer un système d’alerte de
                    prises de positions des meilleurs traders de Binance. Tu peux choisir dans le TOP 15 ton trader
                    préféré, et recevoir via Telegram tout ce qu’il fait, à la seconde où il le fait et le copier de A à
                    Z si tu le souhaites !
                </div>
                <img className="ligne-40-3LBGsu" src="img/line-37@1x.png" />
                <div className="logo-3LBGsu">
                    <img className="effect-nP8fOC" src="img/effect-16@1x.png" />
                </div>
                <div className="h2-wsIV14 lato-bold-white-14px">
                    COMPRENDRE TON ESPACE MEMBRE TRADING &amp; CRYPTO
                    <br />
                </div>
                <div className="paragraph-AmCkS5 lato-normal-white-12px">
                    Te voilà membre confirmé chez 6FIRE ! <br />
                    Ici, tu peux trouver tout ce qu’une personne voulant apprendre le Trading Forex &amp; Crypto a
                    besoin. <br />
                    N’hésite pas à nous contacter en cas de questions.
                </div>
                <div>
                    <div className="bouton-affi-3LBGsu">
                        {/* <div className="rectangle-8-uw4ETs"></div> */}
                        <img className="binance-svgrepo-com-uw4ETs" src="img/binance-svgrepo-com-1@1x.png" />
                        <div className="c-rer-un-compte-binance-uw4ETs roboto-bold-black-12px">
                            CRÉER UN COMPTE BINANCE
                        </div>
                        <img
                            className="icon-ionic-ios-arrow-round-forward-uw4ETs"
                            src="img/icon-ionic-ios-arrow-round-forward-2@1x.png"
                        />
                    </div>
                    <div className="bouton-affi-wsIV14">
                        {/* <div className="rectangle-8-B3xtBx"></div> */}
                        <div className="crer-un-compte-puprime-B3xtBx">CRÉER UN COMPTE PUPRIME</div>
                        <img
                            className="icon-ionic-ios-arrow-round-forward-B3xtBx"
                            src="img/icon-ionic-ios-arrow-round-forward-1@1x.png"
                        />
                        <div className="groupe-3019-B3xtBx">
                            <img className="groupe-3019-MO4hLn" src="img/group-3019-1@1x.png" />
                        </div>
                    </div>
                </div>
                <div className="icon-actif-8BChM2">
                    <div className="ellipse-17693-UNuVUC"></div>
                    <img className="icon-simple-graphcool-UNuVUC" src="img/icon-simple-graphcool-1@1x.png" />
                </div>
                <div className="paragraph-NYxpqZ lato-bold-white-14px">NOS TRADES</div>
                <div className="paragraph-ax1V3m lato-normal-white-12px">
                    Ici, tu peux avoir accès en temps réels aux trades que nous prenons personnellement, avec les
                    analyses de notre outil «secret» qui conforte nos décisions. Pour pouvoir avoir accès à tous nos
                    trades, il faut nous contacter.
                </div>
                <img className="ligne-41-3LBGsu" src="img/line-37@1x.png" />
            </div>
            <div className="trading-mobile screen">
                <div className="avertissement-vUb3bC">
                    <div className="groupe-3020-lgq5el">
                        <div className="rectangle-3606-dXcxo5"></div>
                        <div className="les-investissements-dXcxo5 lato-normal-white-12px-2">
                            <span className="span0-nCIvo6 lato-bold-white-12px">Les investissements sont risqués.</span>
                            <span className="span1-nCIvo6 lato-normal-white-12px">
                                Les investissements sont risqués par nature, les utilisateurs doivent faire leurs
                                propres recherches avant d’entreprendre toute action et n’investir que dans les limites
                                de leurs capacités financières. Cet article ne constitue pas un conseil en
                                investissement.
                            </span>
                        </div>
                    </div>
                    <img className="ligne-41-lgq5el" src="img/ligne-41-15@1x.png" />
                </div>
                <div className="footer-vUb3bC">
                    <div className="background-8P3C0B"></div>
                    <div className="menu-footer-8P3C0B">
                        <div className="mentions-lgales-ewEpRC sourcesanspro-semi-bold-sonic-silver-14px">
                            Mentions légales
                        </div>
                        <div className="cgu-ewEpRC sourcesanspro-semi-bold-sonic-silver-14px">CGU</div>
                        <div className="cgv-ewEpRC sourcesanspro-semi-bold-sonic-silver-14px">CGV</div>
                        <div className="politique-de-confidentialit-ewEpRC sourcesanspro-semi-bold-sonic-silver-14px">
                            Politique de confidentialité
                        </div>
                        <div className="contact-ewEpRC sourcesanspro-semi-bold-sonic-silver-14px">Contact</div>
                    </div>
                    <div className="x2022-6-fire-invest-8P3C0B sourcesanspro-semi-bold-gray-14px">
                        Ⓒ 2022 - 6FIRE INVEST
                    </div>
                    <div className="logo-8P3C0B">
                        <div className="groupe-2-VHUnz2">
                            <img className="groupe-1-6af2Ca" src="img/group-1-10@1x.png" />
                        </div>
                        <img className="effect-VHUnz2" src="img/effect-12@1x.png" />
                    </div>
                    <img className="ligne-31-8P3C0B" src="img/ligne-31-14@1x.png" />
                    <div className="groupe-3011-8P3C0B">
                        <img className="icon-instagram-Zw9ntt" src="img/fontawsome--instagram--1@1x.png" />
                    </div>
                    <div className="groupe-3010-8P3C0B">
                        <img className="icon-simple-tiktok-9g9uxN" src="img/icon-simple-tiktok-1@1x.png" />
                    </div>
                    <img className="icon-paper_plane-8P3C0B" src="img/icon-awesome-telegram-plane-1@1x.png" />
                </div>
                <div className="background-vUb3bC"></div>
                <img className="groupe-de-masques-333-vUb3bC" src="img/groupe-de-masques-333-1@1x.png" />
                <div className="background-538M6x"></div>
                <div className="h2-vUb3bC lato-bold-white-16px">
                    CONTACTEZ NOUS POUR ACCÉDER AU CANAL TELEGRAM DES MEMBRES TRADING &amp; CRYPTO
                </div>
                <div className="paragraph-vUb3bC lato-normal-white-14px">
                    Pour voir nos analyses, nos signaux, nos dernières positions et nos avis sur le marché, vous devez
                    obtenir l’accès à notre Telegram ! Pour cela, contactez nous directement via notre Support Telegram
                    ou WhatsApp.
                </div>
                <div className="button-cration-de-compte-vUb3bC">
                    <div className="rectangle-3470-nPLtda"></div>
                    <div className="support-telegram-nPLtda lato-bold-white-12px">Support Telegram</div>
                    <img className="icon-awesome-telegram-nPLtda" src="img/icon-awesome-telegram@1x.png" />
                </div>
                <div className="button-cration-de-compte-538M6x">
                    <img className="trac-1041-ISpbmZ" src="img/path-1041@1x.png" />
                    <div className="support-whats-app-ISpbmZ lato-bold-white-12px">Support WhatsApp</div>
                    <img className="icon-ionic-logo-whatsapp-ISpbmZ" src="img/icon-ionic-logo-whatsapp@1x.png" />
                </div>
                <div className="header-vUb3bC">
                    <div className="rectangle-3484-839stC"></div>
                    <div className="logo-839stC">
                        <img className="effect-vJpkXv" src="img/effect-47@1x.png" />
                    </div>
                    <div className="toogle-button-839stC">
                        <img className="icon-ionic-ios-moon-8UAiU3" src="img/icon-ionic-ios-moon-20@1x.png" />
                        <div className="toogle-button-8UAiU3">
                            <div className="rectangle-3485-Ezm9dF"></div>
                            <div className="ellipse-17688-Ezm9dF"></div>
                        </div>
                    </div>
                    <div className="search-bar-839stC">
                        <img className="icon-search-e7K3Dx" src="img/icon-ionic-ios-search-27@1x.png" />
                    </div>
                    <div className="rectangle-3607-839stC"></div>
                    <div className="menu-839stC">
                        <div className="icon-ionic-ios-menu-8z3wcR">
                            <img className="trac-1-jvpYHI" src="img/path-1-10@1x.png" />
                            <img className="trac-2-jvpYHI" src="img/path-2-10@1x.png" />
                        </div>
                    </div>
                    <div className="espace-trading-crypto-839stC">
                        <div className="formations-N4t7Oo lato-normal-white-14px">Espace Trading &amp; Crypto</div>
                        <img className="ligne-8-N4t7Oo" src="img/line-8-14@1x.png" />
                    </div>
                </div>
                <div className="titre-vUb3bC">
                    <div className="h2-RtJyXd lato-bold-white-16px">
                        COMPRENDRE TON ESPACE MEMBRE TRADING &amp; CRYPTO
                        <br />
                    </div>
                    <div className="paragraph-RtJyXd lato-normal-white-14px">
                        Te voilà membre confirmé chez 6FIRE ! <br />
                        Ici, tu peux trouver tout ce qu’une personne voulant apprendre le Trading Forex &amp; Crypto a
                        besoin. <br />
                        N’hésite pas à nous contacter en cas de questions.
                    </div>
                </div>
                <div className="formation-vUb3bC">
                    <div className="icon-actif-cxqxnJ">
                        <div className="ellipse-17693-ZPYA8R"></div>
                        <img
                            className="font-awsome-graduation-cap-ZPYA8R"
                            src="img/fontawsome--graduation-cap--1@1x.png"
                        />
                    </div>
                    <div className="paragraph-cxqxnJ lato-bold-white-14px">FORMATIONS</div>
                    <div className="paragraph-gstgbR lato-normal-white-14px">
                        Dans cette section tu auras énormément de lecture pour tout apprendre sur la Crypto et sur le
                        Trading. Il faut lire, lire et encore lire pour comprendre, apprendre puis passer à la pratique
                        quand tu es prêt.
                    </div>
                    <img className="ligne-37-cxqxnJ" src="img/line-37@1x.png" />
                </div>
                <div className="paragraph-538M6x lato-normal-white-14px">
                    Des articles spécifiques au Forex, à l’actualité mondiale et aux conséquences que cela peut
                    engendrer sur les marchés financiers.
                </div>
                <div className="paragraph-NapEEx lato-bold-white-14px">FOREX</div>
                <img className="ligne-38-vUb3bC" src="img/ligne-38-6@1x.png" />
                <div className="icon-actif-vUb3bC">
                    <div className="ellipse-17693-uahhzG"></div>
                    <img className="font-awsome-dollar-sign-uahhzG" src="img/fontawsome--dollar-sign--1@1x.png" />
                </div>
                <img className="trac-1047-vUb3bC" src="img/trac--1047@1x.png" />
                <img className="trac-1048-vUb3bC" src="img/trac--1048@1x.png" />
                <div className="paragraph-k7d0T5 lato-bold-white-14px">CRYPTO WALLET</div>
                <div className="paragraph-xGh1VB lato-normal-white-12px">
                    Sur cette page, tu peux voir en temps réel comment se compose notre portefeuille cryptomonnaie.
                    Ainsi, tu peux savoir quand est ce qu’on achète du BTC, de l’ETH ou quand est ce qu’on revend la
                    totalité pour se mettre en USDT et atteindre la fin de l’orage. <br />
                </div>
                <img className="ligne-39-vUb3bC" src="img/line-37@1x.png" />
                <div className="icon-actif-538M6x">
                    <div className="ellipse-17693-TxP6I6"></div>
                    <img className="font-awsome-wallet-TxP6I6" src="img/fontawsome--wallet--1@1x.png" />
                </div>
                <img className="trac-1049-vUb3bC" src="img/trac--1049@1x.png" />
                <div className="paragraph-DACJjQ lato-bold-white-14px">BOT TRADING</div>
                <div className="paragraph-ryXihF lato-normal-white-12px">
                    Un outil disponible nul part ailleurs sur le marché ! Nous avons développer un système d’alerte de
                    prises de positions des meilleurs traders de Binance. Tu peux choisir dans le TOP 15 ton trader
                    préféré, et recevoir via Telegram tout ce qu’il fait, à la seconde où il le fait et le copier de A à
                    Z si tu le souhaites !
                </div>
                <img className="ligne-40-vUb3bC" src="img/ligne-40-6@1x.png" />
                <div className="icon-actif-NapEEx">
                    <div className="ellipse-17693-9jdzlZ"></div>
                    <img className="icon-awesome-robot-9jdzlZ" src="img/icon-awesome-robot-1@1x.png" />
                </div>
                <img className="trac-1050-vUb3bC" src="img/trac--1050@1x.png" />
                <div className="paragraph-tcOBY5 lato-bold-white-14px">NOS TRADES</div>
                <div className="paragraph-sp5Z9D lato-normal-white-12px">
                    Ici, tu peux avoir accès en temps réels aux trades que nous prenons personnellement, avec les
                    analyses de notre outil «secret» qui conforte nos décisions. Pour pouvoir avoir accès à tous nos
                    trades, il faut nous contacter.
                </div>
                <img className="ligne-41-vUb3bC" src="img/ligne-41-20@1x.png" />
                <div className="icon-actif-k7d0T5">
                    <div className="ellipse-17693-mxJxCK"></div>
                    <img className="icon-simple-graphcool-mxJxCK" src="img/icon-simple-graphcool-1@1x.png" />
                </div>
                <img className="trac-1051-vUb3bC" src="img/trac--1051@1x.png" />
                <div className="groupe-3023-vUb3bC">
                    <div className="bouton-affi-k9GuBK">
                        <div className="rectangle-8-YMiqxi"></div>
                        <img className="binance-svgrepo-com-YMiqxi" src="img/binance-svgrepo-com-4@1x.png" />
                        <div className="c-rer-un-compte-binance-YMiqxi roboto-bold-black-14px">
                            CRÉER UN COMPTE BINANCE
                        </div>
                        <img
                            className="icon-ionic-ios-arrow-round-forward-YMiqxi"
                            src="img/icon-ionic-ios-arrow-round-forward-10@1x.png"
                        />
                    </div>
                    <div className="bouton-affi-OMO7DK">
                        <div className="rectangle-8-IWBYmA"></div>
                        <div className="crer-un-compte-puprime-IWBYmA">CRÉER UN COMPTE PUPRIME</div>
                        <img
                            className="icon-ionic-ios-arrow-round-forward-IWBYmA"
                            src="img/icon-ionic-ios-arrow-round-forward-7@1x.png"
                        />
                        <div className="groupe-3019-IWBYmA">
                            <img className="groupe-3019-hwP9My" src="img/groupe-3019-2@1x.png" />
                        </div>
                    </div>
                </div>
            </div>
            <div id="overlay-trading-forex" className="overlay" style={{ minHeight: '1382px' }}>
                <div className="trading-forex screen">
                    <div className="background-GY9xoT"></div>
                    <div className="article-GY9xoT hidden">
                        <img className="groupe-de-masques-324-6ArdAu" src="img/mask-group-324-2@1x.png" />
                        <div className="club-premium-6ArdAu lato-normal-grenadier-14px">Crypto</div>
                        <img className="ligne-15-6ArdAu" src="img/line-15-2@1x.png" />
                        <div className="club-premium-tCFXiL lato-light-manatee-14px">19 février 2022</div>
                        <div className="club-premium-3KmkC2 lato-bold-white-16px">Twitter ajoute l’option Ethereum</div>
                        <img className="icon-twitter-6ArdAu" src="img/image-874-1@1x.png" />
                        <div className="rectangle-3502-6ArdAu"></div>
                    </div>
                    <div className="footer-GY9xoT">
                        <div className="background-MA8arR"></div>
                        <div className="menu-footer-MA8arR">
                            <div className="mentions-lgales-va7xFI sourcesanspro-semi-bold-sonic-silver-14px">
                                Mentions légales
                            </div>
                            <div className="cgu-va7xFI sourcesanspro-semi-bold-sonic-silver-14px">CGU</div>
                            <div className="cgv-va7xFI sourcesanspro-semi-bold-sonic-silver-14px">CGV</div>
                            <div className="politique-de-confidentialit-va7xFI sourcesanspro-semi-bold-sonic-silver-14px">
                                Politique de confidentialité
                            </div>
                            <div className="politique-de-confidentialit-G30tHZ sourcesanspro-semi-bold-sonic-silver-14px">
                                Politique de confidentialité
                            </div>
                            <div className="contact-va7xFI sourcesanspro-semi-bold-sonic-silver-14px">Contact</div>
                        </div>
                        <div className="x2022-6-fire-invest-MA8arR sourcesanspro-semi-bold-gray-14px">
                            Ⓒ 2022 - 6FIRE INVEST
                        </div>
                        <div className="logo-MA8arR">
                            <div className="groupe-2-FQgwq7">
                                <img className="groupe-1-rETACH" src="img/group-1-10@1x.png" />
                            </div>
                            <img className="effect-FQgwq7" src="img/effect-12@1x.png" />
                        </div>
                        <img className="ligne-31-MA8arR" src="img/line-31-1@1x.png" />
                        <div className="groupe-3011-MA8arR">
                            <div className="ellipse-17695-VhmydZ hidden"></div>
                            <img className="icon-instagram-VhmydZ" src="img/fontawsome--instagram--1@1x.png" />
                        </div>
                        <div className="groupe-3010-MA8arR">
                            <div className="ellipse-17696-bghyxS hidden"></div>
                            <img className="icon-simple-tiktok-bghyxS" src="img/icon-simple-tiktok-1@1x.png" />
                        </div>
                    </div>
                    <div className="header-GY9xoT">
                        <div className="rectangle-3483-L6n4D5"></div>
                        <div className="logo-L6n4D5">
                            <div className="groupe-1483-yivaYZ hidden">
                                <img className="groupe-1482-ExixzL" src="img/group-1482-13@1x.png" />
                            </div>
                            <img className="effect-yivaYZ" src="img/effect-13@1x.png" />
                        </div>
                        <div className="thme-sombre-L6n4D5">
                            <img className="icon-ionic-ios-moon-kns6sT" src="img/icon-ionic-ios-moon-1@1x.png" />
                            <div className="toogle-button-kns6sT">
                                <div className="rectangle-3485-iRxQNh"></div>
                                <div className="ellipse-17688-iRxQNh"></div>
                            </div>
                        </div>
                        <div className="menu-L6n4D5">
                            <div className="rectangle-3484-v70c02"></div>
                            <div className="espace-trading-crypto-v70c02">
                                <div className="formations-mTh6Aa lato-normal-white-14px">
                                    Espace Trading &amp; Crypto
                                </div>
                                <img className="ligne-8-mTh6Aa hidden" src="img/line-8-22@1x.png" />
                            </div>
                            <div className="formations-v70c02">
                                <div className="formations-bsBGaP lato-normal-white-14px">Formations</div>
                                <img className="ligne-8-bsBGaP hidden" src="img/line-8-12@1x.png" />
                                <div className="icon-actif-bsBGaP">
                                    <div className="ellipse-17693-xckKPE"></div>
                                    <img
                                        className="font-awsome-graduation-cap-xckKPE"
                                        src="img/fontawsome--graduation-cap--3@1x.png"
                                    />
                                </div>
                            </div>
                            <div className="forex-v70c02">
                                <div className="club-premium-WM46my lato-normal-white-14px">Forex</div>
                                <img className="ligne-8-WM46my" src="img/line-8-30@1x.png" />
                                <div className="icon-actif-WM46my">
                                    <div className="ellipse-17693-BAFETY"></div>
                                </div>
                                <img
                                    className="font-awsome-dollar-sign-WM46my"
                                    src="img/fontawsome--dollar-sign--3@1x.png"
                                />
                            </div>
                            <div className="crypto-wallet-v70c02">
                                <div className="formations-uVQV3K lato-normal-white-14px">Crypto Wallet</div>
                                <img className="ligne-8-uVQV3K hidden" src="img/line-8-12@1x.png" />
                                <div className="icon-actif-uVQV3K">
                                    <div className="ellipse-17693-rUgkyx"></div>
                                    <img className="font-awsome-wallet-rUgkyx" src="img/fontawsome--wallet--2@1x.png" />
                                </div>
                            </div>
                            <div className="bot-trading-v70c02">
                                <div className="formations-dXwPMr lato-normal-white-14px">Bot Trading</div>
                                <img className="ligne-8-dXwPMr hidden" src="img/line-8-12@1x.png" />
                                <div className="icon-actif-dXwPMr">
                                    <div className="ellipse-17693-xxPtSQ"></div>
                                    <img className="icon-awesome-robot-xxPtSQ" src="img/icon-awesome-robot-2@1x.png" />
                                </div>
                            </div>
                            <a href="nos-trades.html">
                                <div className="trading-v70c02">
                                    <div className="rectangle-3556-Bcumww"></div>
                                    <div className="trading-Bcumww lato-bold-white-14px">Nos trades</div>
                                    <div className="icon-actif-Bcumww">
                                        <div className="ellipse-17693-Wh483o"></div>
                                        <img
                                            className="icon-simple-graphcool-Wh483o"
                                            src="img/icon-simple-graphcool-2@1x.png"
                                        />
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="espace-membre-L6n4D5">
                            <div className="connexion-jM9FxC">
                                <div className="club-premium-c0NkEr lato-normal-white-14px">Mon compte</div>
                                <img className="ligne-8-c0NkEr hidden" src="img/line-8-13@1x.png" />
                            </div>
                        </div>
                        <div className="menu-2-L6n4D5">
                            <div className="icon-ionic-ios-menu-LHM1Rk">
                                <img className="trac-1-exo7Pv" src="img/path-1-10@1x.png" />
                                <img className="trac-2-exo7Pv" src="img/path-2-10@1x.png" />
                            </div>
                            <div className="menu-2-LHM1Rk hidden">
                                <div className="background-DD1tfU"></div>
                                <div className="groupe-1487-DD1tfU">
                                    <img className="ligne-10-tUPydb" src="img/line-10-10@1x.png" />
                                    <img className="ligne-11-tUPydb" src="img/line-11-10@1x.png" />
                                </div>
                                <div className="numro-de-tlphone-DD1tfU">
                                    <img className="ligne-6-j2wquS" src="img/line-6-12@1x.png" />
                                    <div className="mes-donnes-personnelles-j2wquS lato-normal-white-14px">
                                        Mes données personnelles
                                    </div>
                                    <div className="ma-licence-j2wquS lato-normal-white-14px">Ma licence</div>
                                </div>
                            </div>
                        </div>
                        <div className="search-bar-L6n4D5">
                            <img className="icon-search-HDkRwP" src="img/icon-ionic-ios-search-11@1x.png" />
                            <div className="search-bar-HDkRwP hidden">
                                <div className="rectangle-3603-irddok"></div>
                                <div className="search-bar-irddok">
                                    <img className="rectangle-3604-xpN0yu" src="img/rectangle-3604-1@1x.png" />
                                    <img className="rectangle-3605-xpN0yu" src="img/rectangle-3605-1@1x.png" />
                                    <div className="rechercher-xpN0yu lato-normal-manatee-14px">Rechercher…</div>
                                    <img className="icon-search-xpN0yu" src="img/icon-ionic-ios-search-10@1x.png" />
                                </div>
                                <div className="groupe-1487-irddok">
                                    <img className="ligne-10-VpDGbn" src="img/line-10-10@1x.png" />
                                    <img className="ligne-11-VpDGbn" src="img/line-11-10@1x.png" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="prvisualisation-articles-GY9xoT">
                        <div className="article-vOxpDG">
                            <img className="groupe-de-masques-321-o2OUYT" src="img/mask-group-321-1@1x.png" />
                            <div className="club-premium-o2OUYT lato-normal-milano-red-12px">Crypto</div>
                            <img className="ligne-12-o2OUYT" src="img/line-12-1@1x.png" />
                            <div className="club-premium-bHcEox lato-light-manatee-12px">Il y a 2 heures</div>
                            <div className="club-premium-SZGDvm lato-bold-white-16px">
                                Les cryptomonaies, par où commencer ?
                            </div>
                            <div className="rectangle-3498-o2OUYT"></div>
                        </div>
                        <div className="article-ZpuHyM">
                            <img className="groupe-de-masques-322-Taicq0" src="img/mask-group-322-1@1x.png" />
                            <div className="club-premium-Taicq0 lato-normal-milano-red-12px">Crypto</div>
                            <img className="ligne-13-Taicq0" src="img/line-12-1@1x.png" />
                            <div className="club-premium-Vn6yTd lato-light-manatee-12px">19 février 2022</div>
                            <div className="club-premium-KTr35q lato-bold-white-16px">
                                Pourquoi investir dans l’AVAX ?
                            </div>
                            <div className="rectangle-3500-Taicq0"></div>
                        </div>
                        <div className="article-x4Fbci">
                            <img className="groupe-de-masques-323-kxPs2c" src="img/mask-group-323-1@1x.png" />
                            <div className="club-premium-kxPs2c lato-normal-milano-red-12px">Crypto</div>
                            <img className="ligne-14-kxPs2c" src="img/line-12-1@1x.png" />
                            <div className="club-premium-0S8pSy lato-light-manatee-12px">19 février 2022</div>
                            <div className="club-premium-GdMLg7 lato-bold-white-16px">
                                Les 5 erreurs à éviter en crypto
                            </div>
                            <div className="rectangle-3501-kxPs2c"></div>
                        </div>
                        <div className="article-paFDq8">
                            <img className="groupe-de-masques-321-OQJ0bC" src="img/mask-group-321-1@1x.png" />
                            <div className="club-premium-OQJ0bC lato-normal-milano-red-12px">Crypto</div>
                            <img className="ligne-12-OQJ0bC" src="img/line-12-1@1x.png" />
                            <div className="club-premium-8flXgU lato-light-manatee-12px">Il y a 2 heures</div>
                            <div className="club-premium-da8PLc lato-bold-white-16px">
                                Les cryptomonaies, par où commencer ?
                            </div>
                            <div className="rectangle-3498-OQJ0bC"></div>
                        </div>
                        <div className="article-x5pMpk">
                            <img className="groupe-de-masques-322-Dh6k4h" src="img/mask-group-322-1@1x.png" />
                            <div className="club-premium-Dh6k4h lato-normal-milano-red-12px">Crypto</div>
                            <img className="ligne-13-Dh6k4h" src="img/line-12-1@1x.png" />
                            <div className="club-premium-d6wup0 lato-light-manatee-12px">19 février 2022</div>
                            <div className="club-premium-K2xskp lato-bold-white-16px">
                                Pourquoi investir dans l’AVAX ?
                            </div>
                            <div className="rectangle-3500-Dh6k4h"></div>
                        </div>
                        <div className="article-FMStxK">
                            <img className="groupe-de-masques-323-StJoNQ" src="img/mask-group-323-1@1x.png" />
                            <div className="club-premium-StJoNQ lato-normal-milano-red-12px">Crypto</div>
                            <img className="ligne-14-StJoNQ" src="img/line-12-1@1x.png" />
                            <div className="club-premium-1jkg4V lato-light-manatee-12px">19 février 2022</div>
                            <div className="club-premium-mEKac7 lato-bold-white-16px">
                                Les 5 erreurs à éviter en crypto
                            </div>
                            <div className="rectangle-3501-StJoNQ"></div>
                        </div>
                        <div className="article-8vawgc">
                            <img className="groupe-de-masques-321-EW2Mvz" src="img/mask-group-321-1@1x.png" />
                            <div className="club-premium-EW2Mvz lato-normal-milano-red-12px">Crypto</div>
                            <img className="ligne-12-EW2Mvz" src="img/line-12-1@1x.png" />
                            <div className="club-premium-xifxod lato-light-manatee-12px">Il y a 2 heures</div>
                            <div className="club-premium-hglxwj lato-bold-white-16px">
                                Les cryptomonaies, par où commencer ?
                            </div>
                            <div className="rectangle-3498-EW2Mvz"></div>
                        </div>
                        <div className="article-xIPdub">
                            <img className="groupe-de-masques-322-z6xHMK" src="img/mask-group-322-1@1x.png" />
                            <div className="club-premium-z6xHMK lato-normal-milano-red-12px">Crypto</div>
                            <img className="ligne-13-z6xHMK" src="img/line-12-1@1x.png" />
                            <div className="club-premium-32RTZk lato-light-manatee-12px">19 février 2022</div>
                            <div className="club-premium-9UEivZ lato-bold-white-16px">
                                Pourquoi investir dans l’AVAX ?
                            </div>
                            <div className="rectangle-3500-z6xHMK"></div>
                        </div>
                        <div className="article-qEDcz1">
                            <img className="groupe-de-masques-323-AhDR5W" src="img/mask-group-323-1@1x.png" />
                            <div className="club-premium-AhDR5W lato-normal-milano-red-12px">Crypto</div>
                            <img className="ligne-14-AhDR5W" src="img/line-12-1@1x.png" />
                            <div className="club-premium-9laQ3D lato-light-manatee-12px">19 février 2022</div>
                            <div className="club-premium-T2DF3C lato-bold-white-16px">
                                Les 5 erreurs à éviter en crypto
                            </div>
                            <div className="rectangle-3501-AhDR5W"></div>
                        </div>
                    </div>
                    <div className="button-signin-GY9xoT">
                        <div className="button-cration-de-compte-CK2ejX">
                            <div className="rectangle-3470-tMZS2c border-1px-white"></div>
                            <div className="voir-plus-tMZS2c lato-normal-white-14px">Voir plus</div>
                        </div>
                        <img
                            className="icon-ionic-ios-arrow-forward-CK2ejX"
                            src="img/icon-ionic-ios-arrow-forward-2@1x.png"
                        />
                    </div>
                    <div className="avertissement-GY9xoT">
                        <div className="groupe-3020-pKxBil">
                            <div className="rectangle-3606-HCOteM"></div>
                            <div className="les-investissements-HCOteM lato-normal-white-12px-2">
                                <span className="span0-3FIxFe lato-bold-white-12px">
                                    Les investissements sont risqués.
                                </span>
                                <span className="span1-3FIxFe lato-normal-white-12px">
                                    Les investissements sont risqués par nature, les utilisateurs doivent faire leurs
                                    propres recherches avant d’entreprendre toute action et n’investir que dans les
                                    limites de leurs capacités financières. Cet article ne constitue pas un conseil en
                                    investissement.
                                </span>
                            </div>
                        </div>
                        <img className="ligne-41-pKxBil" src="img/line-41-2@1x.png" />
                    </div>
                </div>
                <div className="trading-forex-mobile screen">
                    <div className="background-B8d21u"></div>
                    <div className="article-B8d21u">
                        <img className="groupe-de-masques-321-IG8Jsa" src="img/groupe-de-masques-321-16@1x.png" />
                        <div className="club-premium-IG8Jsa lato-normal-milano-red-12px">Play to Earn</div>
                        <img className="ligne-12-IG8Jsa" src="img/line-12-1@1x.png" />
                        <div className="club-premium-UBQ6eC lato-light-manatee-12px">Il y a 2 heures</div>
                        <div className="club-premium-rCYbHX lato-bold-white-16px">Axie Infinity, jeu Play to Earn</div>
                        <div className="rectangle-3498-IG8Jsa"></div>
                    </div>
                    <div className="article-kIt21l">
                        <img className="groupe-de-masques-322-1KECiX" src="img/groupe-de-masques-322-16@1x.png" />
                        <div className="club-premium-1KECiX lato-bold-white-16px">Les outils indispensable du Web</div>
                        <div className="rectangle-3500-1KECiX"></div>
                        <div className="club-premium-DYYkNr lato-normal-milano-red-12px">E-Commerce</div>
                        <img className="ligne-33-1KECiX" src="img/line-12-1@1x.png" />
                        <div className="club-premium-03IkES lato-light-manatee-12px">Il y a 2 heures</div>
                    </div>
                    <div className="article-RkF1mW">
                        <img className="groupe-de-masques-323-ehZ9JJ" src="img/groupe-de-masques-323-16@1x.png" />
                        <div className="club-premium-ehZ9JJ lato-normal-grenadier-12px">Crypto</div>
                        <img className="ligne-14-ehZ9JJ" src="img/line-12-1@1x.png" />
                        <div className="club-premium-xiyzvd lato-light-manatee-12px">19 février 2022</div>
                        <div className="club-premium-K1OSlh lato-bold-white-16px">Les 5 erreurs à éviter en crypto</div>
                        <div className="rectangle-3501-ehZ9JJ"></div>
                    </div>
                    <div className="article-hNiITB">
                        <img className="groupe-de-masques-324-hqzGZO" src="img/groupe-de-masques-324-5@1x.png" />
                        <div className="club-premium-hqzGZO lato-normal-milano-red-12px">Entreprenariat</div>
                        <img className="ligne-15-hqzGZO" src="img/line-12-1@1x.png" />
                        <div className="club-premium-bk2xF5 lato-light-manatee-12px">19 février 2022</div>
                        <div className="club-premium-a0YJpM lato-bold-white-16px">Comment se lancer ?</div>
                        <img className="icon-twitter-hqzGZO" src="img/image-874-1@1x.png" />
                        <div className="rectangle-3502-hqzGZO"></div>
                    </div>
                    <div className="avertissement-B8d21u">
                        <div className="groupe-3020-ziEuQM">
                            <div className="rectangle-3606-2p2nox"></div>
                            <div className="les-investissements-2p2nox lato-normal-white-12px-2">
                                <span className="span0-0Jrzz3 lato-bold-white-12px">
                                    Les investissements sont risqués.
                                </span>
                                <span className="span1-0Jrzz3 lato-normal-white-12px">
                                    Les investissements sont risqués par nature, les utilisateurs doivent faire leurs
                                    propres recherches avant d’entreprendre toute action et n’investir que dans les
                                    limites de leurs capacités financières. Cet article ne constitue pas un conseil en
                                    investissement.
                                </span>
                            </div>
                        </div>
                        <img className="ligne-41-ziEuQM" src="img/ligne-41-15@1x.png" />
                    </div>
                    <div className="footer-B8d21u">
                        <div className="background-LP3m4M"></div>
                        <div className="menu-footer-LP3m4M">
                            <div className="mentions-lgales-I0HR4b sourcesanspro-semi-bold-sonic-silver-14px">
                                Mentions légales
                            </div>
                            <div className="cgu-I0HR4b sourcesanspro-semi-bold-sonic-silver-14px">CGU</div>
                            <div className="cgv-I0HR4b sourcesanspro-semi-bold-sonic-silver-14px">CGV</div>
                            <div className="politique-de-confidentialit-I0HR4b sourcesanspro-semi-bold-sonic-silver-14px">
                                Politique de confidentialité
                            </div>
                            <div className="contact-I0HR4b sourcesanspro-semi-bold-sonic-silver-14px">Contact</div>
                        </div>
                        <div className="x2022-6-fire-invest-LP3m4M sourcesanspro-semi-bold-gray-14px">
                            Ⓒ 2022 - 6FIRE INVEST
                        </div>
                        <div className="logo-LP3m4M">
                            <div className="groupe-2-w6XbMr">
                                <img className="groupe-1-Wq9uCr" src="img/group-1-7-1x-png@1x.png" />
                            </div>
                            <img className="effect-w6XbMr" src="img/effect-12@1x.png" />
                        </div>
                        <img className="ligne-31-LP3m4M" src="img/ligne-31-14@1x.png" />
                        <div className="groupe-3011-LP3m4M">
                            <img className="icon-instagram-3LZ4IB" src="img/fontawsome--instagram--1@1x.png" />
                        </div>
                        <div className="groupe-3010-LP3m4M">
                            <img className="icon-simple-tiktok-xxTQwN" src="img/icon-simple-tiktok-1@1x.png" />
                        </div>
                        <img className="icon-paper_plane-LP3m4M" src="img/icon-awesome-telegram-plane-1@1x.png" />
                    </div>
                    <div className="header-B8d21u">
                        <div className="rectangle-3484-iFw9sa"></div>
                        <div className="logo-iFw9sa">
                            <img className="effect-8j36hR" src="img/effect-47@1x.png" />
                        </div>
                        <div className="toogle-button-iFw9sa">
                            <img className="icon-ionic-ios-moon-ubf6zL" src="img/icon-ionic-ios-moon-20@1x.png" />
                            <div className="toogle-button-ubf6zL">
                                <div className="rectangle-3485-Vzdjy0"></div>
                                <div className="ellipse-17688-Vzdjy0"></div>
                            </div>
                        </div>
                        <div className="search-bar-iFw9sa">
                            <img className="icon-search-m6F9CI" src="img/icon-ionic-ios-search-27@1x.png" />
                        </div>
                        <div className="rectangle-3607-iFw9sa"></div>
                        <div className="menu-iFw9sa">
                            <div className="icon-ionic-ios-menu-xAe6PG">
                                <img className="trac-1-lycP8C" src="img/path-1-10@1x.png" />
                                <img className="trac-2-lycP8C" src="img/path-2-10@1x.png" />
                            </div>
                        </div>
                        <div className="espace-trading-crypto-iFw9sa">
                            <div className="formations-Tl7rzh lato-normal-white-14px">Espace Trading &amp; Crypto</div>
                        </div>
                    </div>
                    <div className="article-UWD1S0">
                        <img className="groupe-de-masques-324-lP6bgW" src="img/groupe-de-masques-324-5@1x.png" />
                        <div className="club-premium-lP6bgW lato-normal-milano-red-12px">Entreprenariat</div>
                        <img className="ligne-15-lP6bgW" src="img/line-12-1@1x.png" />
                        <div className="club-premium-ZW6aZP lato-light-manatee-12px">19 février 2022</div>
                        <div className="club-premium-6iMolW lato-bold-white-16px">Comment se lancer ?</div>
                        <img className="icon-twitter-lP6bgW" src="img/image-874-1@1x.png" />
                        <div className="rectangle-3502-lP6bgW"></div>
                    </div>
                    <div className="article-QlHGIm">
                        <img className="groupe-de-masques-323-Y5Aele" src="img/groupe-de-masques-323-16@1x.png" />
                        <div className="club-premium-Y5Aele lato-normal-grenadier-12px">Crypto</div>
                        <img className="ligne-14-Y5Aele" src="img/line-12-1@1x.png" />
                        <div className="club-premium-hkxUaO lato-light-manatee-12px">19 février 2022</div>
                        <div className="club-premium-RAs8p8 lato-bold-white-16px">Les 5 erreurs à éviter en crypto</div>
                        <div className="rectangle-3501-Y5Aele"></div>
                    </div>
                    <div className="button-signin-B8d21u">
                        <div className="button-cration-de-compte-92VH7M">
                            <div className="rectangle-3470-leu5ok border-1px-white"></div>
                            <div className="voir-plus-leu5ok lato-normal-white-14px">Voir plus</div>
                        </div>
                        <img
                            className="icon-ionic-ios-arrow-forward-92VH7M"
                            src="img/icon-ionic-ios-arrow-forward-2@1x.png"
                        />
                    </div>
                </div>
            </div>
            <div id="overlay-bot-trading" className="overlay" style={{ minHeight: '1382px' }}>
                <div className="bot-trading screen">
                    <img className="background-FwUAid" src="img/background@1x.png" />
                    <img className="groupe-de-masques-327-FwUAid" src="img/mask-group-327-1@1x.png" />
                    <div className="rectangle-3558-FwUAid"></div>
                    <div className="club-premium-FwUAid lato-bold-white-18px">Suivez les meilleurs Trader Binance</div>
                    <div className="club-premium-Flmx7x lato-normal-white-16px">
                        Reçois en LIVE les positions des meilleurs traders BINANCE grâce à notre robot
                        Telegram&nbsp;&nbsp;!
                    </div>
                    <div className="menu-bascule-FwUAid">
                        <div className="groupe-3014-rgUu6r">
                            <img className="rectangle-3559-JxfHBf" src="img/rectangle-3559@1x.png" />
                            <div className="club-premium-JxfHBf lato-bold-white-14px">ACCÈS AU BOT</div>
                        </div>
                        <div className="groupe-3013-rgUu6r">
                            <a href="bot-trading-traders.html">
                                <img className="rectangle-3560-prXDZd" src="img/rectangle-3560@1x.png" />
                            </a>
                            <div className="club-premium-prXDZd lato-bold-white-14px">TRADERS</div>
                        </div>
                    </div>
                    <div className="club-premium-rtzeuz lato-bold-white-16px">
                        RECEVEZ EN TEMPS RÉEL LES ALERTES DES MEILLEURS TRADERS BINANCE
                    </div>
                    <div className="club-premium-Q8oH1B lato-normal-white-14px">
                        Nous avons développez un robot permettant de recevoir des alertes à la seconde où un trader du
                        top 15 BINANCE prend une position. Tu peux sélectionner le trader de ton choix et recevoir en
                        live des alertes Telegram à l’ouverture ou à la fermeture d’un trade ! <br />
                        <br />
                    </div>
                    <div className="bloc-1-FwUAid">
                        <div className="etape-1-iCxKsI">
                            <div className="rectangle-33-N3ENNR"></div>
                            <div className="comment-accder-au-bot-telegram-N3ENNR lato-bold-white-14px">
                                Comment accéder au Bot Telegram ?
                            </div>
                            <div className="pour-rejoindre-le-bo-N3ENNR lato-normal-white-14px">
                                Pour rejoindre le Bot Trading sur Telegram, copiez coller votre identifiant ci-dessous :
                            </div>
                            <div className="rectangle-3580-N3ENNR"></div>
                            <div className="x1-N3ENNR roboto-normal-white-18px">1</div>
                            <div className="rectangle-3581-N3ENNR border-1px-white"></div>
                            <div className="x13425656-N3ENNR lato-bold-white-14px">13425656</div>
                            <div className="button-N3ENNR">
                                <div className="rectangle-3582-z5Txxg"></div>
                                <div className="copier-z5Txxg lato-normal-white-14px">Copier</div>
                                <img
                                    className="icon-ionic-ios-checkmark-z5Txxg hidden"
                                    src="img/icon-ionic-ios-checkmark@1x.png"
                                />
                            </div>
                        </div>
                        <div className="etape-2-iCxKsI">
                            <div className="activer-le-bot-telegram-iz5Vdo lato-bold-white-14px">
                                Activer le Bot Telegram
                            </div>
                            <div className="cliquez-sur-le-bouto-iz5Vdo lato-normal-white-14px">
                                Cliquez sur le bouton «Rejoindre le BOT» puis envoyez START/
                                <br />
                                Vous allez recevoir ensuite un message du Bot et vous devrez coller votre identifiant
                                que vous avez déjà copié à l’étape 1.
                            </div>
                            <div className="rectangle-3583-iz5Vdo"></div>
                            <div className="x2-iz5Vdo roboto-normal-white-18px">2</div>
                            <div className="button-bot-iz5Vdo">
                                <div className="button-cration-de-compte-haA3dr">
                                    <div className="rectangle-3470-xeDK8A"></div>
                                    <div className="rejoindre-le-bot-xeDK8A lato-bold-white-14px">REJOINDRE LE BOT</div>
                                </div>
                            </div>
                        </div>
                        <div className="etape-3-iCxKsI">
                            <div className="rectangle-3585-lC62Iy"></div>
                            <div className="confirmer-votre-identifiant-lC62Iy lato-bold-white-14px">
                                Confirmer votre identifiant
                            </div>
                            <div className="vous-avez-reu-un-mai-lC62Iy">
                                <span className="span0-Kgm1E8 lato-normal-white-14px">
                                    Vous avez reçu un mail de confirmation suite à l’envoi de votre identifiant au Bot
                                    Telegram lors de l’étape 2.
                                    <br />
                                    Cliquez sur le bouton «Confirmer mon accès au Bot» sur le mail.
                                    <br />
                                    <br />
                                </span>
                                <span className="span1-Kgm1E8 lato-bold-white-14px">
                                    Votre accès au Bot est maintenant confirmé !
                                </span>
                            </div>
                            <div className="rectangle-3584-lC62Iy"></div>
                            <div className="x3-lC62Iy roboto-normal-white-18px">3</div>
                        </div>
                        <div className="etape-4-iCxKsI">
                            <div className="exemple-Uha3jl">
                                <div className="row-1-K9Uluk">
                                    <div className="rectangle-3564-Zhcxaw"></div>
                                    <img className="image-880-Zhcxaw" src="img/image-880-10@1x.png" />
                                    <div className="wet-cross-bus-Zhcxaw lato-normal-white-14px">WetCrossBus</div>
                                    <img className="ligne-28-Zhcxaw hidden" src="img/line-28-10@1x.png" />
                                    <div className="top-trader-Zhcxaw lato-bold-white-10px">TOP TRADER</div>
                                    <img className="font-awsome-crown-Zhcxaw" src="img/fontawsome--crown--1@1x.png" />
                                    <div className="x149544-Zhcxaw lato-normal-fern-12px">1,495.44%</div>
                                    <div className="x13646-Zhcxaw lato-normal-scarlet-12px">-136.46%</div>
                                    <div className="rectangle-3562-Zhcxaw border-1px-manatee"></div>
                                    <div className="x1-Zhcxaw lato-normal-white-12px">1</div>
                                    <img className="ligne-30-Zhcxaw" src="img/line-30@1x.png" />
                                </div>
                                <div className="button-cration-de-compte-K9Uluk">
                                    <div className="rectangle-3470-T3xFeg"></div>
                                    <div className="suivre-T3xFeg lato-bold-white-12px">Suivre</div>
                                    <img className="icon-plus-T3xFeg" src="img/fontawsome--plus--10@1x.png" />
                                </div>
                            </div>
                            <div className="choisissez-jusqu-3-t-Uha3jl lato-bold-white-14px">
                                Choisissez jusqu’à 3 Traders sur la partie «Traders» de cette page
                            </div>
                            <div className="retrouvez-sur-la-pag-Uha3jl lato-normal-white-14px">
                                Retrouvez sur la page Traders différents profiles Binance et leurs résultats. Vous
                                pouvez suivre jusqu’à 3 profils, une fois que vous avez sélectionné de un jusqu’à 3
                                traders vous recevrez automatiquement leurs alertes sur Telegram grâce au Bot.
                                <br />
                                <br />
                                Exemple :
                            </div>
                            <div className="rectangle-3583-Uha3jl"></div>
                            <div className="x4-Uha3jl roboto-normal-white-18px">4</div>
                        </div>
                        <div className="etape-3-yWBsET">
                            <div className="rectangle-3585-i1SLbn"></div>
                            <div className="o-prendre-les-trades-contactez-nous-i1SLbn lato-bold-white-14px">
                                Où prendre les Trades ? Contactez-nous !
                            </div>
                            <div className="contactez-nous-pour-i1SLbn lato-normal-white-14px">
                                Contactez nous pour passer à l’étape suivant et obtenir les explications. <br />
                                Nous vous expliquerons où et comment prendre les Trades en direct.
                            </div>
                            <div className="rectangle-3584-i1SLbn"></div>
                            <div className="x5-i1SLbn roboto-normal-white-18px">5</div>
                            <div className="button-cration-de-compte-i1SLbn">
                                <div className="rectangle-3470-8QsxB2"></div>
                                <div className="support-telegram-8QsxB2 lato-bold-white-14px">Support Telegram</div>
                                <img
                                    className="icon-awesome-telegram-8QsxB2"
                                    src="img/icon-awesome-telegram-1@1x.png"
                                />
                            </div>
                            <div className="button-cration-de-compte-riDpLJ">
                                <img className="trac-1041-LcGl24" src="img/path-1041-1@1x.png" />
                                <div className="support-whats-app-LcGl24 lato-bold-white-14px">Support WhatsApp</div>
                                <img
                                    className="icon-ionic-logo-whatsapp-LcGl24"
                                    src="img/icon-ionic-logo-whatsapp-1@1x.png"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="footer-FwUAid">
                        <div className="background-8WYuzq"></div>
                        <div className="menu-footer-8WYuzq">
                            <div className="mentions-lgales-76AaXN sourcesanspro-semi-bold-sonic-silver-14px">
                                Mentions légales
                            </div>
                            <div className="cgu-76AaXN sourcesanspro-semi-bold-sonic-silver-14px">CGU</div>
                            <div className="cgv-76AaXN sourcesanspro-semi-bold-sonic-silver-14px">CGV</div>
                            <div className="politique-de-confidentialit-76AaXN sourcesanspro-semi-bold-sonic-silver-14px">
                                Politique de confidentialité
                            </div>
                            <div className="politique-de-confidentialit-V0xCL2 sourcesanspro-semi-bold-sonic-silver-14px">
                                Politique de confidentialité
                            </div>
                            <div className="contact-76AaXN sourcesanspro-semi-bold-sonic-silver-14px">Contact</div>
                        </div>
                        <div className="x2022-6-fire-invest-8WYuzq sourcesanspro-semi-bold-gray-14px">
                            Ⓒ 2022 - 6FIRE INVEST
                        </div>
                        <div className="logo-8WYuzq">
                            <div className="groupe-2-UoxHJ5">
                                <img className="groupe-1-GAgH3l" src="img/group-1-10@1x.png" />
                            </div>
                            <img className="effect-UoxHJ5" src="img/effect-12@1x.png" />
                        </div>
                        <img className="ligne-31-8WYuzq" src="img/line-31-1@1x.png" />
                        <div className="groupe-3011-8WYuzq">
                            <div className="ellipse-17695-YDU9MX hidden"></div>
                            <img className="icon-instagram-YDU9MX" src="img/fontawsome--instagram--1@1x.png" />
                        </div>
                        <div className="groupe-3010-8WYuzq">
                            <div className="ellipse-17696-6Z2cAN hidden"></div>
                            <img className="icon-simple-tiktok-6Z2cAN" src="img/icon-simple-tiktok-1@1x.png" />
                        </div>
                    </div>
                    <div className="header-FwUAid">
                        <div className="rectangle-3483-M6M5uE"></div>
                        <div className="logo-M6M5uE">
                            <div className="groupe-1483-dNwqeZ hidden">
                                <img className="groupe-1482-T1P9Ij" src="img/group-1482-13@1x.png" />
                            </div>
                            <img className="effect-dNwqeZ" src="img/effect-13@1x.png" />
                        </div>
                        <div className="thme-sombre-M6M5uE">
                            <img className="icon-ionic-ios-moon-M4WdxW" src="img/icon-ionic-ios-moon-1@1x.png" />
                            <div className="toogle-button-M4WdxW">
                                <div className="rectangle-3485-KXC00l"></div>
                                <div className="ellipse-17688-KXC00l"></div>
                            </div>
                        </div>
                        <div className="menu-M6M5uE">
                            <div className="rectangle-3484-M1erBy"></div>
                            <a
                                href="trading.html"
                                // onclick="window.event.stopPropagation()"
                            >
                                <div className="espace-trading-crypto-M1erBy">
                                    <div className="formations-A83AMK lato-normal-white-14px">
                                        Espace Trading &amp; Crypto
                                    </div>
                                    <img className="ligne-8-A83AMK hidden" src="img/line-8-22@1x.png" />
                                </div>
                            </a>
                            <a
                                href="trading-formations.html"
                                // onclick="window.event.stopPropagation()"
                            >
                                <div className="formations-M1erBy">
                                    <div className="formations-Gw4Dt0 lato-normal-white-14px">Formations</div>
                                    <img className="ligne-8-Gw4Dt0 hidden" src="img/line-8-12@1x.png" />
                                    <div className="icon-actif-Gw4Dt0">
                                        <div className="ellipse-17693-vDJeet"></div>
                                        <img
                                            className="font-awsome-graduation-cap-vDJeet"
                                            src="img/fontawsome--graduation-cap--3@1x.png"
                                        />
                                    </div>
                                </div>
                            </a>
                            <div className="forex-M1erBy">
                                <div className="formations-G2EeUI lato-normal-white-14px">Forex</div>
                                <img className="ligne-8-G2EeUI hidden" src="img/line-8-12@1x.png" />
                                <div className="icon-actif-G2EeUI">
                                    <div className="ellipse-17693-VMdnKa"></div>
                                    <img
                                        className="font-awsome-dollar-sign-VMdnKa"
                                        src="img/fontawsome--dollar-sign--2@1x.png"
                                    />
                                </div>
                            </div>
                            <div className="crypto-wallet-M1erBy">
                                <div className="formations-gBAR1E lato-normal-white-14px">Crypto Wallet</div>
                                <img className="ligne-8-gBAR1E hidden" src="img/line-8-12@1x.png" />
                                <div className="icon-actif-gBAR1E">
                                    <div className="ellipse-17693-27xcfR"></div>
                                    <img className="font-awsome-wallet-27xcfR" src="img/fontawsome--wallet--2@1x.png" />
                                </div>
                            </div>
                            <div className="bot-trading-M1erBy">
                                <div className="club-premium-m7HZPO lato-normal-white-14px">Bot Trading</div>
                                <img className="ligne-8-m7HZPO" src="img/line-8-23@1x.png" />
                                <div className="icon-actif-m7HZPO">
                                    <div className="ellipse-17693-fjf6mm"></div>
                                    <img className="icon-awesome-robot-fjf6mm" src="img/icon-awesome-robot-5@1x.png" />
                                </div>
                            </div>
                            <a
                                href="nos-trades.html"
                                // onclick="window.event.stopPropagation()"
                            >
                                <div className="trading-M1erBy">
                                    <div className="rectangle-3556-7hme35"></div>
                                    <div className="trading-7hme35 lato-bold-white-14px">Nos trades</div>
                                    <div className="icon-actif-7hme35">
                                        <div className="ellipse-17693-9CaIfb"></div>
                                        <img
                                            className="icon-simple-graphcool-9CaIfb"
                                            src="img/icon-simple-graphcool-2@1x.png"
                                        />
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="espace-membre-M6M5uE">
                            <div className="connexion-5F506e">
                                <div className="club-premium-as3IJn lato-normal-white-14px">Mon compte</div>
                                <img className="ligne-8-as3IJn hidden" src="img/line-8-13@1x.png" />
                            </div>
                        </div>
                        <div className="menu-2-M6M5uE">
                            <div className="icon-ionic-ios-menu-yMtxaH">
                                <img className="trac-1-sphDyv" src="img/path-1-10@1x.png" />
                                <img className="trac-2-sphDyv" src="img/path-2-10@1x.png" />
                            </div>
                            <div className="menu-2-yMtxaH hidden">
                                <div className="background-cEZgdX"></div>
                                <div className="groupe-1487-cEZgdX">
                                    <img className="ligne-10-kvxD39" src="img/line-10-10@1x.png" />
                                    <img className="ligne-11-kvxD39" src="img/line-11-10@1x.png" />
                                </div>
                                <div className="numro-de-tlphone-cEZgdX">
                                    <img className="ligne-6-cU744T" src="img/line-6-12@1x.png" />
                                    <div className="mes-donnes-personnelles-cU744T lato-normal-white-14px">
                                        Mes données personnelles
                                    </div>
                                    <div className="ma-licence-cU744T lato-normal-white-14px">Ma licence</div>
                                </div>
                            </div>
                        </div>
                        <div className="search-bar-M6M5uE">
                            <img className="icon-search-OdTWTG" src="img/icon-ionic-ios-search-11@1x.png" />
                            <div className="search-bar-OdTWTG hidden">
                                <div className="rectangle-3603-IscRty"></div>
                                <div className="search-bar-IscRty">
                                    <img className="rectangle-3604-3jfzWd" src="img/rectangle-3604-1@1x.png" />
                                    <img className="rectangle-3605-3jfzWd" src="img/rectangle-3605-1@1x.png" />
                                    <div className="rechercher-3jfzWd lato-normal-manatee-14px">Rechercher…</div>
                                    <img className="icon-search-3jfzWd" src="img/icon-ionic-ios-search-10@1x.png" />
                                </div>
                                <div className="groupe-1487-IscRty">
                                    <img className="ligne-10-BWQAXj" src="img/line-10-10@1x.png" />
                                    <img className="ligne-11-BWQAXj" src="img/line-11-10@1x.png" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="avertissement-FwUAid">
                        <div className="groupe-3020-BCxIWv">
                            <div className="rectangle-3606-rkI1Pb"></div>
                            <div className="les-investissements-rkI1Pb lato-normal-white-12px-2">
                                <span className="span0-dX6IM2 lato-bold-white-12px">
                                    Les investissements sont risqués.
                                </span>
                                <span className="span1-dX6IM2 lato-normal-white-12px">
                                    Les investissements sont risqués par nature, les utilisateurs doivent faire leurs
                                    propres recherches avant d’entreprendre toute action et n’investir que dans les
                                    limites de leurs capacités financières. Cet article ne constitue pas un conseil en
                                    investissement.
                                </span>
                            </div>
                        </div>
                        <img className="ligne-41-BCxIWv" src="img/line-41-2@1x.png" />
                    </div>
                </div>
                <div className="bot-trading-mobile screen">
                    <div className="avertissement-Pj5fjx">
                        <div className="groupe-3020-gge11l">
                            <div className="rectangle-3606-QDqXzk"></div>
                            <div className="les-investissements-QDqXzk lato-normal-white-12px-2">
                                <span className="span0-BTE1zt lato-bold-white-12px">
                                    Les investissements sont risqués.
                                </span>
                                <span className="span1-BTE1zt lato-normal-white-12px">
                                    Les investissements sont risqués par nature, les utilisateurs doivent faire leurs
                                    propres recherches avant d’entreprendre toute action et n’investir que dans les
                                    limites de leurs capacités financières. Cet article ne constitue pas un conseil en
                                    investissement.
                                </span>
                            </div>
                        </div>
                        <img className="ligne-41-gge11l" src="img/ligne-41-15@1x.png" />
                    </div>
                    <div className="footer-Pj5fjx">
                        <div className="background-oZhQlD"></div>
                        <div className="menu-footer-oZhQlD">
                            <div className="mentions-lgales-7EwkKv sourcesanspro-semi-bold-sonic-silver-14px">
                                Mentions légales
                            </div>
                            <div className="cgu-7EwkKv sourcesanspro-semi-bold-sonic-silver-14px">CGU</div>
                            <div className="cgv-7EwkKv sourcesanspro-semi-bold-sonic-silver-14px">CGV</div>
                            <div className="politique-de-confidentialit-7EwkKv sourcesanspro-semi-bold-sonic-silver-14px">
                                Politique de confidentialité
                            </div>
                            <div className="contact-7EwkKv sourcesanspro-semi-bold-sonic-silver-14px">Contact</div>
                        </div>
                        <div className="x2022-6-fire-invest-oZhQlD sourcesanspro-semi-bold-gray-14px">
                            Ⓒ 2022 - 6FIRE INVEST
                        </div>
                        <div className="logo-oZhQlD">
                            <div className="groupe-2-eDBqxy">
                                <img className="groupe-1-jzblq6" src="img/group-1-10@1x.png" />
                            </div>
                            <img className="effect-eDBqxy" src="img/effect-12@1x.png" />
                        </div>
                        <img className="ligne-31-oZhQlD" src="img/ligne-31-14@1x.png" />
                        <div className="groupe-3011-oZhQlD">
                            <img className="icon-instagram-kST68v" src="img/fontawsome--instagram--1@1x.png" />
                        </div>
                        <div className="groupe-3010-oZhQlD">
                            <img className="icon-simple-tiktok-tXAPfd" src="img/icon-simple-tiktok-1@1x.png" />
                        </div>
                        <img className="icon-paper_plane-oZhQlD" src="img/icon-awesome-telegram-plane-1@1x.png" />
                    </div>
                    <img className="groupe-de-masques-327-Pj5fjx" src="img/groupe-de-masques-327-2@1x.png" />
                    <div className="rectangle-3558-Pj5fjx"></div>
                    <div className="groupe-3024-Pj5fjx">
                        <div className="club-premium-Zi2VV0 lato-bold-white-18px">
                            Suivez les meilleurs Trader Binance
                        </div>
                        <div className="club-premium-3Ogwrf lato-normal-white-16px">
                            Reçois en LIVE les positions des meilleurs traders BINANCE grâce à notre robot
                            Telegram&nbsp;&nbsp;!
                        </div>
                        <div className="menu-bascule-Zi2VV0">
                            <div className="groupe-3014-WWWYxY">
                                <img className="rectangle-3559-hUwOum" src="img/rectangle-3559@1x.png" />
                                <div className="club-premium-hUwOum lato-bold-white-14px">ACCÈS AU BOT</div>
                            </div>
                            <div className="groupe-3013-WWWYxY">
                                <img className="rectangle-3560-p8U34P" src="img/rectangle-3560@1x.png" />
                                <div className="club-premium-p8U34P lato-bold-white-14px">TRADERS</div>
                            </div>
                        </div>
                    </div>
                    <img className="background-Pj5fjx" src="img/background-2@1x.png" />
                    <div className="club-premium-Pj5fjx lato-bold-white-16px">
                        RECEVEZ EN TEMPS RÉEL LES ALERTES DES MEILLEURS TRADERS BINANCE
                    </div>
                    <div className="club-premium-yWiV5L lato-normal-white-14px">
                        Nous avons développez un robot permettant de recevoir des alertes à la seconde où un trader du
                        top 15 BINANCE prend une position. Tu peux sélectionner le trader de ton choix et recevoir en
                        live des alertes Telegram à l’ouverture ou à la fermeture d’un trade !
                    </div>
                    <div className="etape-1-Pj5fjx">
                        <div className="rectangle-33-YpaaMh"></div>
                        <div className="comment-accder-au-bot-telegram-YpaaMh lato-bold-white-14px">
                            Comment accéder au Bot Telegram ?
                        </div>
                        <div className="pour-rejoindre-le-bo-YpaaMh lato-normal-white-14px">
                            Pour rejoindre le Bot Trading sur Telegram, copiez coller votre identifiant ci-dessous :
                        </div>
                        <div className="rectangle-3580-YpaaMh"></div>
                        <div className="x1-YpaaMh roboto-normal-white-18px">1</div>
                        <div className="rectangle-3581-YpaaMh border-1px-white"></div>
                        <div className="x13425656-YpaaMh lato-bold-white-14px">13425656</div>
                        <div className="button-YpaaMh">
                            <div className="rectangle-3582-l6ErpC"></div>
                            <div className="copier-l6ErpC lato-normal-white-14px">Copier</div>
                        </div>
                    </div>
                    <div className="etape-2-Pj5fjx">
                        <div className="activer-le-bot-telegram-MZKr6a lato-bold-white-14px">
                            Activer le Bot Telegram
                        </div>
                        <div className="cliquez-sur-le-bouto-MZKr6a lato-normal-white-14px">
                            Cliquez sur le bouton «Rejoindre le BOT» puis envoyez START/
                            <br />
                            Vous allez recevoir ensuite un message du Bot et vous devrez coller votre identifiant que
                            vous avez déjà copié à l’étape 1.
                        </div>
                        <div className="rectangle-3583-MZKr6a"></div>
                        <div className="x2-MZKr6a roboto-normal-white-18px">2</div>
                        <div className="button-bot-MZKr6a">
                            <div className="button-cration-de-compte-k76JyO">
                                <div className="rectangle-3470-NtxTEu"></div>
                                <div className="rejoindre-le-bot-NtxTEu lato-bold-white-14px">REJOINDRE LE BOT</div>
                            </div>
                        </div>
                    </div>
                    <div className="etape-3-Pj5fjx">
                        <div className="rectangle-3585-T1pql9"></div>
                        <div className="confirmer-votre-identifiant-T1pql9 lato-bold-white-14px">
                            Confirmer votre identifiant
                        </div>
                        <div className="vous-avez-reu-un-mai-T1pql9">
                            <span className="span0-cyVaMG lato-normal-white-14px">
                                Vous avez reçu un mail de confirmation suite à l’envoi de votre identifiant au Bot
                                Telegram lors de l’étape 2.
                                <br />
                                Cliquez sur le bouton «Confirmer mon accès au Bot» sur le mail.
                                <br />
                                <br />
                            </span>
                            <span className="span1-cyVaMG lato-bold-white-14px">
                                Votre accès au Bot est maintenant confirmé !
                            </span>
                        </div>
                        <div className="rectangle-3584-T1pql9"></div>
                        <div className="x3-T1pql9 roboto-normal-white-18px">3</div>
                    </div>
                    <div className="etape-4-Pj5fjx">
                        <div className="exemple-TUeErg">
                            <div className="row-1-xjH5II">
                                <div className="rectangle-3564-k2kAxt"></div>
                                <img className="image-880-k2kAxt" src="img/image-880-14@1x.png" />
                                <div className="wet-cross-bus-k2kAxt lato-normal-white-14px">WetCrossBus</div>
                                <div className="top-trader-k2kAxt lato-bold-white-10px">TOP TRADER</div>
                                <img className="font-awsome-crown-k2kAxt" src="img/fontawsome--crown--1@1x.png" />
                                <div className="x149544-k2kAxt lato-normal-fern-12px">1,495.44%</div>
                                <div className="x13646-k2kAxt lato-normal-scarlet-12px">-136.46%</div>
                                <div className="rectangle-3562-k2kAxt border-1px-manatee"></div>
                                <div className="x1-k2kAxt lato-normal-white-12px">1</div>
                                <img className="ligne-30-k2kAxt" src="img/ligne-30-4@1x.png" />
                            </div>
                            <div className="button-cration-de-compte-xjH5II">
                                <div className="rectangle-3470-pCleVy"></div>
                                <div className="suivre-pCleVy lato-bold-white-12px">Suivre</div>
                                <img className="icon-plus-pCleVy" src="img/fontawsome--plus--10@1x.png" />
                            </div>
                        </div>
                        <div className="choisissez-jusqu-3-t-TUeErg lato-bold-white-14px">
                            Choisissez jusqu’à 3 Traders sur la partie «Traders» de cette page
                        </div>
                        <div className="retrouvez-sur-la-pag-TUeErg lato-normal-white-14px">
                            Retrouvez sur la page Traders différents profiles Binance et leurs résultats. Vous pouvez
                            suivre jusqu’à 3 profils, une fois que vous avez sélectionné de un jusqu’à 3 traders vous
                            recevrez automatiquement leurs alertes sur Telegram grâce au Bot.
                            <br />
                            <br />
                            Exemple :
                        </div>
                        <div className="rectangle-3583-TUeErg"></div>
                        <div className="x4-TUeErg roboto-normal-white-18px">4</div>
                    </div>
                    <div className="etape-3-yWiV5L">
                        <div className="rectangle-3585-GHe2HA"></div>
                        <div className="o-prendre-les-trades-contactez-nous-GHe2HA lato-bold-white-14px">
                            Où prendre les Trades ? Contactez-nous !
                        </div>
                        <div className="contactez-nous-pour-GHe2HA lato-normal-white-14px">
                            Contactez nous pour passer à l’étape suivant et obtenir les explications. <br />
                            Nous vous expliquerons où et comment prendre les Trades en direct.
                        </div>
                        <div className="rectangle-3584-GHe2HA"></div>
                        <div className="x5-GHe2HA roboto-normal-white-18px">5</div>
                        <div className="button-cration-de-compte-GHe2HA">
                            <div className="rectangle-3470-xuLpld"></div>
                            <div className="support-telegram-xuLpld lato-bold-white-14px">Support Telegram</div>
                            <img className="icon-awesome-telegram-xuLpld" src="img/icon-awesome-telegram-4@1x.png" />
                        </div>
                        <div className="button-cration-de-compte-yk1nRj">
                            <img className="trac-1041-clB4MT" src="img/trac--1041-4@1x.png" />
                            <div className="support-whats-app-clB4MT lato-bold-white-14px">Support WhatsApp</div>
                            <img
                                className="icon-ionic-logo-whatsapp-clB4MT"
                                src="img/icon-ionic-logo-whatsapp-4@1x.png"
                            />
                        </div>
                    </div>
                    <div className="header-Pj5fjx">
                        <div className="rectangle-3484-W0SUjX"></div>
                        <div className="logo-W0SUjX">
                            <img className="effect-KxWqR1" src="img/effect-47@1x.png" />
                        </div>
                        <div className="toogle-button-W0SUjX">
                            <img className="icon-ionic-ios-moon-O6YJKg" src="img/icon-ionic-ios-moon-20@1x.png" />
                            <div className="toogle-button-O6YJKg">
                                <div className="rectangle-3485-JEnTZ9"></div>
                                <div className="ellipse-17688-JEnTZ9"></div>
                            </div>
                        </div>
                        <div className="search-bar-W0SUjX">
                            <img className="icon-search-1G7R62" src="img/icon-ionic-ios-search-27@1x.png" />
                        </div>
                        <div className="rectangle-3607-W0SUjX"></div>
                        <div className="menu-W0SUjX">
                            <div className="icon-ionic-ios-menu-e9QgAn">
                                <img className="trac-1-ADe9u7" src="img/path-1-10@1x.png" />
                                <img className="trac-2-ADe9u7" src="img/path-2-10@1x.png" />
                            </div>
                        </div>
                        <div className="espace-trading-crypto-W0SUjX">
                            <div className="formations-ixrEgk lato-normal-white-14px">Espace Trading &amp; Crypto</div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <script>
      var overlay_id = "overlay-bot-trading";
      document.getElementById(overlay_id).addEventListener(
        "click",
        function (event) {
          var overlay_id = "overlay-bot-trading";
          var e = event || window.event;
          var overlayElement = document.getElementById(overlay_id);
          var overlayContainer = overlayElement.getElementsByClassName("bot-trading");
          var clickedDiv = e.toElement || e.target;
          var dismissButton = clickedDiv.parentElement.id == overlay_id;
          var clickOutsideOverlay = false;
          if (overlayContainer.length > 0) {
            clickOutsideOverlay = !overlayContainer[0].contains(clickedDiv) || overlayContainer[0] == clickedDiv;
          }
          if (dismissButton || clickOutsideOverlay) {
            HideOverlay("bot-trading", "animate-disappear");
          }
        },
        false
      );
    </script> */}
            <div id="overlay-crypto-wallet" className="overlay" style={{ minHeight: '1382px' }}>
                <div
                    className="crypto-wallet screen"
                    // onclick="window.open('javascript:HideOverlay(%27crypto-wallet%27%2C%20%27animate-disappear%27);', '_self');"
                >
                    <div className="background-XPwy4i"></div>
                    <div className="h1-XPwy4i lato-bold-white-20px">Portefeuille Cryptomonnaies</div>
                    <div className="date-XPwy4i lato-normal-white-16px">Mis à jour le 25 mars 2022</div>
                    <div className="cercle-XPwy4i">
                        <div className="graph-3-Iu9ljH">
                            <div className="oval-16-l8FK0N"></div>
                            <div className="animation-l8FK0N hidden">
                                <div className="rectangle-3573-xurQbd"></div>
                                <div className="eth-20-xurQbd lato-normal-white-12px">ETH 20%</div>
                            </div>
                        </div>
                        <div className="graph-2-Iu9ljH">
                            <img className="trac-1025-bPlr5T" src="img/path-1025@1x.png" />
                            <div className="animation-bPlr5T hidden">
                                <div className="rectangle-3573-Ffy16J"></div>
                                <div className="btc-60-Ffy16J lato-normal-white-12px">BTC 60%</div>
                            </div>
                        </div>
                        <div className="graph-1-Iu9ljH">
                            <img className="oval-15-Nr0iuw" src="img/oval-15@1x.png" />
                            <div className="animation-Nr0iuw hidden">
                                <div className="rectangle-3573-CETFKo"></div>
                                <div className="sol-5-CETFKo lato-normal-white-12px">SOL 5%</div>
                            </div>
                        </div>
                        <div className="graph-Iu9ljH">
                            <img className="oval-15-HjsIhi" src="img/oval-15-1@1x.png" />
                            <div className="animation-HjsIhi hidden">
                                <div className="rectangle-3573-ihNVG3"></div>
                                <div className="btc-60-ihNVG3 lato-normal-white-12px">BTC 60%</div>
                            </div>
                        </div>
                        <div className="oval-16-Iu9ljH"></div>
                        <img className="font-awsome-wallet-Iu9ljH" src="img/fontawsome--wallet--4@1x.png" />
                    </div>
                    <div className="bar-crypto-icon-XPwy4i">
                        <div className="rectangle-3566-xqiOBD border-1px-dove-gray"></div>
                        <div className="avax-xqiOBD">
                            <div className="avalanche-avax-logo-xzVrvc">
                                <div className="rectangle-3565-QR9tk6"></div>
                                <img className="trac-1026-QR9tk6" src="img/path-1026@1x.png" />
                            </div>
                            <div className="oval-16-xzVrvc border-2px-woodsmoke"></div>
                            <div className="club-premium-xzVrvc lato-bold-white-14px">Avax</div>
                            <div className="club-premium-EgJ6er lato-normal-white-14px">15%</div>
                        </div>
                        <div className="avax-1VwJyY">
                            <div className="club-premium-aCEkYu lato-bold-white-14px">Bitcoin</div>
                            <div className="club-premium-s4BgfB lato-normal-white-14px">60%</div>
                            <div className="layer_x0020_1-aCEkYu">
                                <div className="x1421344023328-6MMkG3">
                                    <img className="trac-1027-k9m6xt" src="img/trac--1027-1@1x.png" />
                                    <img className="trac-1028-k9m6xt" src="img/trac--1028-2@1x.png" />
                                </div>
                            </div>
                            <div className="oval-16-aCEkYu border-2px-woodsmoke-2"></div>
                        </div>
                        <div className="avax-xXHQVx">
                            <div className="avalanche-avax-logo-cUbV0V">
                                <div className="ellipse-17694-2c9lA5"></div>
                                <div className="solana-sol-logo-2c9lA5">
                                    <img className="trac-1029-sxxHx9" src="img/path-1029@1x.png" />
                                    <img className="trac-1030-sxxHx9" src="img/path-1030@1x.png" />
                                    <img className="trac-1031-sxxHx9" src="img/trac--1031-1@1x.png" />
                                </div>
                            </div>
                            <div className="oval-16-cUbV0V border-2px-woodsmoke-2"></div>
                            <div className="club-premium-cUbV0V lato-bold-white-14px">SOL</div>
                            <div className="club-premium-HrHDVW lato-normal-white-14px">5%</div>
                        </div>
                        <div className="avax-596mbO">
                            <div className="avalanche-avax-logo-NTnKVu">
                                <div className="ellipse-17694-0Fktxs"></div>
                                <div className="layer_x0020_1-0Fktxs">
                                    <div className="x1421394342400-QS8jFz">
                                        <div className="groupe-1509-sSCTnu">
                                            <img className="trac-1032-l8EsG4" src="img/path-1032@1x.png" />
                                            <img className="trac-1033-l8EsG4" src="img/path-1033@1x.png" />
                                            <img className="trac-1034-l8EsG4" src="img/path-1034@1x.png" />
                                            <img className="trac-1035-l8EsG4" src="img/path-1035@1x.png" />
                                            <img className="trac-1036-l8EsG4" src="img/path-1036@1x.png" />
                                            <img className="trac-1037-l8EsG4" src="img/path-1037@1x.png" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="oval-16-NTnKVu border-2px-woodsmoke"></div>
                            <div className="club-premium-NTnKVu lato-bold-white-14px">ETH</div>
                            <div className="club-premium-BuFzFS lato-normal-white-14px">20%</div>
                        </div>
                        <div className="rectangle-3586-xqiOBD border-1px-dove-gray"></div>
                        <div className="text_label-xqiOBD">€</div>
                        <div className="rectangle-3587-xqiOBD"></div>
                        <div className="rectangle-3588-xqiOBD border-1px-dove-gray"></div>
                        <div className="mon-capital-xqiOBD lato-normal-manatee-10px">Mon capital…</div>
                    </div>
                    <div className="historique-XPwy4i">
                        <div className="rectangle-3567-2VlAVP"></div>
                        <div className="fixe-2VlAVP">
                            <img className="rectangle-3568-TEfqQu" src="img/rectangle-3568@1x.png" />
                            <div className="club-premium-TEfqQu lato-normal-manatee-12px">
                                Ceci n’est pas un conseil en investissement
                            </div>
                        </div>
                        <div className="club-premium-2VlAVP lato-normal-white-12px-2">
                            <span className="span0-uiCSUd lato-bold-white-12px">
                                Mise à jour du 25 mars 2022
                                <br />
                            </span>
                            <span className="span1-uiCSUd lato-normal-white-12px">
                                <br />
                                J’ai déjà un bag dans l’ensemble des positions ci-dessous ! 💰
                                <br />
                                <br />
                                Explication :<br />
                                <br />- Pour 1Inch je vous laisse voir le token de la semaine est mon explication !
                                <br />
                                <br />- Je recharge un peu sur le BTC, car il drive le marché et je sortirai de cette
                                position BTC pour accumuler de l’ETH🔱
                                <br />
                                <br />- En parlant d’ETH, je recharge en permanence au moins 30 % de mon investissement
                                de la semaine dessus, car je pense qu’il va continuer de surperformer le marché
                                notamment avec l’arrivée de l’EIP 1559 !<br />
                                <br />- DOT a connu l’une des descentes les plus drastiques, mais les fondamentaux
                                restent ! Le Web 3.0 est l’avenir pour moi et Polkadot en est le leader pour ma part !
                                💻
                                <br />
                                <br />- Mirror Protocol : Pourquoi recharger assez massivement sur MIR ? MIR est un
                                protocole de peg asset ! C’est-à-dire que vous pouvez acheter des tokens qui sont liés à
                                une valeur. Exemple l’USDT est un peg asset de l’USD ! Mirror propose des actions
                                tokénisées comme Apple, Tesla, etc… Ainsi vous pouvez vous exposer au marché
                                classNameique sans quitter le monde des cryptos. Cela peut attirer beaucoup de monde et
                                Mirror en est l’un des pionniers et le seul à en faire son activité principale !
                                Prochainement, une explication complète sera disponible sur MIR ! 💸
                            </span>
                        </div>
                    </div>
                    <div className="footer-XPwy4i">
                        <div className="background-1KzJpa"></div>
                        <div className="menu-footer-1KzJpa">
                            <div className="mentions-lgales-dKw8vr sourcesanspro-semi-bold-sonic-silver-14px">
                                Mentions légales
                            </div>
                            <div className="cgu-dKw8vr sourcesanspro-semi-bold-sonic-silver-14px">CGU</div>
                            <div className="cgv-dKw8vr sourcesanspro-semi-bold-sonic-silver-14px">CGV</div>
                            <div className="politique-de-confidentialit-dKw8vr sourcesanspro-semi-bold-sonic-silver-14px">
                                Politique de confidentialité
                            </div>
                            <div className="politique-de-confidentialit-T8CBm0 sourcesanspro-semi-bold-sonic-silver-14px">
                                Politique de confidentialité
                            </div>
                            <div className="contact-dKw8vr sourcesanspro-semi-bold-sonic-silver-14px">Contact</div>
                        </div>
                        <div className="x2022-6-fire-invest-1KzJpa sourcesanspro-semi-bold-gray-14px">
                            Ⓒ 2022 - 6FIRE INVEST
                        </div>
                        <div className="logo-1KzJpa">
                            <div className="groupe-2-GmUeld">
                                <img className="groupe-1-d5AwTm" src="img/group-1-11@1x.png" />
                            </div>
                            <img className="effect-GmUeld" src="img/effect-12@1x.png" />
                        </div>
                        <img className="ligne-31-1KzJpa" src="img/line-31-1@1x.png" />
                        <div className="groupe-3011-1KzJpa">
                            <div className="ellipse-17695-v7gikA hidden"></div>
                            <img className="icon-instagram-v7gikA" src="img/fontawsome--instagram--7@1x.png" />
                        </div>
                        <div className="groupe-3010-1KzJpa">
                            <div className="ellipse-17696-zjNoSr hidden"></div>
                            <img className="icon-simple-tiktok-zjNoSr" src="img/icon-simple-tiktok-1@1x.png" />
                        </div>
                    </div>
                    <div className="header-XPwy4i">
                        <div className="rectangle-3483-P2FJgl"></div>
                        <div className="logo-P2FJgl">
                            <div className="groupe-1483-Mf9t8i hidden">
                                <img className="groupe-1482-PR043A" src="img/group-1482-20@1x.png" />
                            </div>
                            <img className="effect-Mf9t8i" src="img/effect-13@1x.png" />
                        </div>
                        <div className="thme-sombre-P2FJgl">
                            <img className="icon-ionic-ios-moon-TXAl0J" src="img/icon-ionic-ios-moon-7@1x.png" />
                            <div className="toogle-button-TXAl0J">
                                <div className="rectangle-3485-bUqpCN"></div>
                                <div className="ellipse-17688-bUqpCN"></div>
                            </div>
                        </div>
                        <div className="menu-P2FJgl">
                            <div className="rectangle-3484-izuuFL"></div>
                            <div className="espace-trading-crypto-izuuFL">
                                <div className="formations-DoXA0r lato-normal-white-14px">
                                    Espace Trading &amp; Crypto
                                </div>
                                <img className="ligne-8-DoXA0r hidden" src="img/line-8-22@1x.png" />
                            </div>
                            <a
                                href="trading-formations.html"
                                // onclick="window.event.stopPropagation()"
                            >
                                <div className="formations-izuuFL">
                                    <div className="formations-D3SZeP lato-normal-white-14px">Formations</div>
                                    <img className="ligne-8-D3SZeP hidden" src="img/line-8-12@1x.png" />
                                    <div className="icon-actif-D3SZeP">
                                        <div className="ellipse-17693-hDrVnx"></div>
                                        <img
                                            className="font-awsome-graduation-cap-hDrVnx"
                                            src="img/fontawsome--graduation-cap--3@1x.png"
                                        />
                                    </div>
                                </div>
                            </a>
                            <div className="forex-izuuFL">
                                <div className="formations-5UPxOu lato-normal-white-14px">Forex</div>
                                <img className="ligne-8-5UPxOu hidden" src="img/line-8-12@1x.png" />
                                <div className="icon-actif-5UPxOu">
                                    <div className="ellipse-17693-xTAm9w"></div>
                                    <img
                                        className="font-awsome-dollar-sign-xTAm9w"
                                        src="img/fontawsome--dollar-sign--2@1x.png"
                                    />
                                </div>
                            </div>
                            <div className="crypto-wallet-izuuFL">
                                <div className="club-premium-8iF6ou lato-normal-white-14px">Crypto Wallet</div>
                                <img className="ligne-8-8iF6ou" src="img/line-8-37@1x.png" />
                                <div className="icon-actif-8iF6ou">
                                    <div className="ellipse-17693-2DG3xx"></div>
                                    <img className="font-awsome-wallet-2DG3xx" src="img/fontawsome--wallet--5@1x.png" />
                                </div>
                            </div>
                            <div className="bot-trading-izuuFL">
                                <div className="formations-30M2f8 lato-normal-white-14px">Bot Trading</div>
                                <img className="ligne-8-30M2f8 hidden" src="img/line-8-12@1x.png" />
                                <div className="icon-actif-30M2f8">
                                    <div className="ellipse-17693-yRUv62"></div>
                                    <img className="icon-awesome-robot-yRUv62" src="img/icon-awesome-robot-2@1x.png" />
                                </div>
                            </div>
                            <a
                                href="nos-trades.html"
                                // onclick="window.event.stopPropagation()"
                            >
                                <div className="trading-izuuFL">
                                    <div className="rectangle-3556-GE8E7j"></div>
                                    <div className="trading-GE8E7j lato-bold-white-14px">Nos trades</div>
                                    <div className="icon-actif-GE8E7j">
                                        <div className="ellipse-17693-6A4EEv"></div>
                                        <img
                                            className="icon-simple-graphcool-6A4EEv"
                                            src="img/icon-simple-graphcool-2@1x.png"
                                        />
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="espace-membre-P2FJgl">
                            <div className="connexion-famnLU">
                                <div className="club-premium-D83CQa lato-normal-white-14px">Mon compte</div>
                                <img className="ligne-8-D83CQa hidden" src="img/line-8-13@1x.png" />
                            </div>
                        </div>
                        <div className="menu-2-P2FJgl">
                            <div className="icon-ionic-ios-menu-WakCzF">
                                <img className="trac-1-ZcsST0" src="img/path-1-10@1x.png" />
                                <img className="trac-2-ZcsST0" src="img/path-2-10@1x.png" />
                            </div>
                            <div className="menu-2-WakCzF hidden">
                                <div className="background-cGZ274"></div>
                                <div className="groupe-1487-cGZ274">
                                    <img className="ligne-10-67Ixsr" src="img/line-10-10@1x.png" />
                                    <img className="ligne-11-67Ixsr" src="img/line-11-10@1x.png" />
                                </div>
                                <div className="numro-de-tlphone-cGZ274">
                                    <img className="ligne-6-nx0UNh" src="img/line-6-12@1x.png" />
                                    <div className="mes-donnes-personnelles-nx0UNh lato-normal-white-14px">
                                        Mes données personnelles
                                    </div>
                                    <div className="ma-licence-nx0UNh lato-normal-white-14px">Ma licence</div>
                                </div>
                            </div>
                        </div>
                        <div className="search-bar-P2FJgl">
                            <img className="icon-search-d52WLF" src="img/icon-ionic-ios-search-13@1x.png" />
                            <div className="search-bar-d52WLF hidden">
                                <div className="rectangle-3603-i8frgx"></div>
                                <div className="search-bar-i8frgx">
                                    <img className="rectangle-3604-uV95cC" src="img/rectangle-3604-1@1x.png" />
                                    <img className="rectangle-3605-uV95cC" src="img/rectangle-3605-1@1x.png" />
                                    <div className="rechercher-uV95cC lato-normal-manatee-14px">Rechercher…</div>
                                    <img className="icon-search-uV95cC" src="img/icon-ionic-ios-search-14@1x.png" />
                                </div>
                                <div className="groupe-1487-i8frgx">
                                    <img className="ligne-10-4NeRWS" src="img/line-10-10@1x.png" />
                                    <img className="ligne-11-4NeRWS" src="img/line-11-10@1x.png" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <img className="trac-1042-XPwy4i" src="img/path-1042@1x.png" />
                    <div className="bouton-affi-XPwy4i">
                        <div className="rectangle-8-9pCLeb"></div>
                        <img className="binance-svgrepo-com-9pCLeb" src="img/binance-svgrepo-com-1@1x.png" />
                        <div className="ouvrir-un-compte-binance-9pCLeb roboto-bold-black-12px">
                            OUVRIR UN COMPTE BINANCE
                        </div>
                        <img
                            className="icon-ionic-ios-arrow-round-forward-9pCLeb"
                            src="img/icon-ionic-ios-arrow-round-forward-2@1x.png"
                        />
                    </div>
                    <div className="avertissement-XPwy4i">
                        <div className="groupe-3020-0Hq04G">
                            <div className="rectangle-3606-110DgH"></div>
                            <div className="les-investissements-110DgH lato-normal-white-12px-2">
                                <span className="span0-xsDfvw lato-bold-white-12px">
                                    Les investissements sont risqués.
                                </span>
                                <span className="span1-xsDfvw lato-normal-white-12px">
                                    Les investissements sont risqués par nature, les utilisateurs doivent faire leurs
                                    propres recherches avant d’entreprendre toute action et n’investir que dans les
                                    limites de leurs capacités financières. Cet article ne constitue pas un conseil en
                                    investissement.
                                </span>
                            </div>
                        </div>
                        <img className="ligne-41-0Hq04G" src="img/line-41-2@1x.png" />
                    </div>
                </div>
                <div className="crypto-wallet-mobile screen">
                    <div className="avertissement-i4rvow">
                        <div className="groupe-3020-jSOO73">
                            <div className="rectangle-3606-9PE78U"></div>
                            <div className="les-investissements-9PE78U lato-normal-white-12px-2">
                                <span className="span0-s0d0o6 lato-bold-white-12px">
                                    Les investissements sont risqués.
                                </span>
                                <span className="span1-s0d0o6 lato-normal-white-12px">
                                    Les investissements sont risqués par nature, les utilisateurs doivent faire leurs
                                    propres recherches avant d’entreprendre toute action et n’investir que dans les
                                    limites de leurs capacités financières. Cet article ne constitue pas un conseil en
                                    investissement.
                                </span>
                            </div>
                        </div>
                        <img className="ligne-41-jSOO73" src="img/ligne-41-15@1x.png" />
                    </div>
                    <div className="footer-i4rvow">
                        <div className="background-qn57LN"></div>
                        <div className="menu-footer-qn57LN">
                            <div className="mentions-lgales-UYxhFz sourcesanspro-semi-bold-sonic-silver-14px">
                                Mentions légales
                            </div>
                            <div className="cgu-UYxhFz sourcesanspro-semi-bold-sonic-silver-14px">CGU</div>
                            <div className="cgv-UYxhFz sourcesanspro-semi-bold-sonic-silver-14px">CGV</div>
                            <div className="politique-de-confidentialit-UYxhFz sourcesanspro-semi-bold-sonic-silver-14px">
                                Politique de confidentialité
                            </div>
                            <div className="contact-UYxhFz sourcesanspro-semi-bold-sonic-silver-14px">Contact</div>
                        </div>
                        <div className="x2022-6-fire-invest-qn57LN sourcesanspro-semi-bold-gray-14px">
                            Ⓒ 2022 - 6FIRE INVEST
                        </div>
                        <div className="logo-qn57LN">
                            <div className="groupe-2-EHGxWS">
                                <img className="groupe-1-xcHicz" src="img/group-1-11@1x.png" />
                            </div>
                            <img className="effect-EHGxWS" src="img/effect-12@1x.png" />
                        </div>
                        <img className="ligne-31-qn57LN" src="img/ligne-31-14@1x.png" />
                        <div className="groupe-3011-qn57LN">
                            <img className="icon-instagram-WHmfJk" src="img/fontawsome--instagram--7@1x.png" />
                        </div>
                        <div className="groupe-3010-qn57LN">
                            <img className="icon-simple-tiktok-Osu8dK" src="img/icon-simple-tiktok-1@1x.png" />
                        </div>
                        <img className="icon-paper_plane-qn57LN" src="img/icon-awesome-telegram-plane-10@1x.png" />
                    </div>
                    <div className="header-i4rvow">
                        <div className="rectangle-3484-Fl0GWn"></div>
                        <div className="logo-Fl0GWn">
                            <img className="effect-abxaeW" src="img/effect-47@1x.png" />
                        </div>
                        <div className="toogle-button-Fl0GWn">
                            <img className="icon-ionic-ios-moon-mvrPB0" src="img/icon-ionic-ios-moon-20@1x.png" />
                            <div className="toogle-button-mvrPB0">
                                <div className="rectangle-3485-YqQekU"></div>
                                <div className="ellipse-17688-YqQekU"></div>
                            </div>
                        </div>
                        <div className="search-bar-Fl0GWn">
                            <img className="icon-search-muNowR" src="img/icon-ionic-ios-search-47@1x.png" />
                        </div>
                        <div className="rectangle-3607-Fl0GWn"></div>
                        <div className="menu-Fl0GWn">
                            <div className="icon-ionic-ios-menu-KwZCwP">
                                <img className="trac-1-42GKEC" src="img/path-1-10@1x.png" />
                                <img className="trac-2-42GKEC" src="img/path-2-10@1x.png" />
                            </div>
                        </div>
                        <div className="espace-trading-crypto-Fl0GWn">
                            <div className="formations-PJQRwq lato-normal-white-14px">Espace Trading &amp; Crypto</div>
                        </div>
                    </div>
                    <div className="background-i4rvow"></div>
                    <div className="h1-i4rvow lato-bold-white-20px">Portefeuille Cryptomonnaies</div>
                    <div className="date-i4rvow lato-normal-white-16px">Mis à jour le 25 mars 2022</div>
                    <div className="groupe-3025-i4rvow">
                        <div className="bouton-affi-lnhvZx">
                            <div className="rectangle-8-GUzm2T"></div>
                            <img className="binance-svgrepo-com-GUzm2T" src="img/binance-svgrepo-com-4@1x.png" />
                            <div className="c-rer-un-compte-binance-GUzm2T roboto-bold-black-14px">
                                CRÉER UN COMPTE BINANCE
                            </div>
                            <img
                                className="icon-ionic-ios-arrow-round-forward-GUzm2T"
                                src="img/icon-ionic-ios-arrow-round-forward-10@1x.png"
                            />
                        </div>
                    </div>
                    <div className="cercle-i4rvow">
                        <div className="graph-3-jrwYKd">
                            <div className="oval-16-WPSpxa"></div>
                        </div>
                        <div className="graph-2-jrwYKd">
                            <img className="trac-1025-JINpAu" src="img/trac--1025-2@1x.png" />
                        </div>
                        <div className="graph-1-jrwYKd">
                            <img className="oval-15-cx02vp" src="img/oval-15-4@1x.png" />
                        </div>
                        <div className="graph-jrwYKd">
                            <img className="oval-15-kXKxbK" src="img/oval-15-5@1x.png" />
                        </div>
                        <div className="oval-16-jrwYKd"></div>
                        <img className="font-awsome-wallet-jrwYKd" src="img/fontawsome--wallet--4@1x.png" />
                    </div>
                    <div className="bar-crypto-icon-i4rvow">
                        <div className="rectangle-3566-QPYmWF border-1px-dove-gray"></div>
                        <div className="avax-QPYmWF">
                            <div className="avalanche-avax-logo-949jKd">
                                <div className="rectangle-3565-JMADFm"></div>
                                <img className="trac-1026-JMADFm" src="img/path-1026@1x.png" />
                            </div>
                            <div className="oval-16-949jKd border-2px-woodsmoke"></div>
                            <div className="club-premium-949jKd lato-bold-white-14px">Avax</div>
                            <div className="club-premium-gDtlt3 lato-normal-white-14px">15%</div>
                        </div>
                        <div className="avax-SzqRoZ">
                            <div className="club-premium-iNCU9c lato-bold-white-14px">Bitcoin</div>
                            <div className="club-premium-vx46hp lato-normal-white-14px">60%</div>
                            <div className="layer_x0020_1-iNCU9c">
                                <div className="x1421344023328-iBPxBo">
                                    <img className="trac-1027-Kl1ZK2" src="img/trac--1027-1@1x.png" />
                                    <img className="trac-1028-Kl1ZK2" src="img/trac--1028-2@1x.png" />
                                </div>
                            </div>
                            <div className="oval-16-iNCU9c border-2px-woodsmoke-2"></div>
                        </div>
                        <div className="avax-JBw8iB">
                            <div className="avalanche-avax-logo-szX92g">
                                <div className="ellipse-17694-M3xVaQ"></div>
                                <div className="solana-sol-logo-M3xVaQ">
                                    <img className="trac-1029-Vc6jUG" src="img/path-1029@1x.png" />
                                    <img className="trac-1030-Vc6jUG" src="img/path-1030@1x.png" />
                                    <img className="trac-1031-Vc6jUG" src="img/trac--1031-1@1x.png" />
                                </div>
                            </div>
                            <div className="oval-16-szX92g border-2px-woodsmoke-2"></div>
                            <div className="club-premium-szX92g lato-bold-white-14px">SOL</div>
                            <div className="club-premium-huTvGK lato-normal-white-14px">5%</div>
                        </div>
                        <div className="avax-0R1kkT">
                            <div className="avalanche-avax-logo-Yv9nmI">
                                <div className="ellipse-17694-kWCqea"></div>
                                <div className="layer_x0020_1-kWCqea">
                                    <div className="x1421394342400-xwxorX">
                                        <div className="groupe-1509-CO9txP">
                                            <img className="trac-1032-W5OGJz" src="img/path-1032@1x.png" />
                                            <img className="trac-1033-W5OGJz" src="img/path-1033@1x.png" />
                                            <img className="trac-1034-W5OGJz" src="img/path-1034@1x.png" />
                                            <img className="trac-1035-W5OGJz" src="img/path-1035@1x.png" />
                                            <img className="trac-1036-W5OGJz" src="img/path-1036@1x.png" />
                                            <img className="trac-1037-W5OGJz" src="img/path-1037@1x.png" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="oval-16-Yv9nmI border-2px-woodsmoke"></div>
                            <div className="club-premium-Yv9nmI lato-bold-white-14px">ETH</div>
                            <div className="club-premium-SnAfAv lato-normal-white-14px">20%</div>
                        </div>
                        <div className="text_label-QPYmWF">€</div>
                        <div className="rectangle-3587-QPYmWF"></div>
                        <div className="rectangle-3588-QPYmWF border-1px-dove-gray"></div>
                        <div className="mon-capital-QPYmWF lato-normal-manatee-14px">Mon capital…</div>
                    </div>
                    <div className="historique-i4rvow">
                        <div className="rectangle-3567-c53V7q"></div>
                        <div className="fixe-c53V7q">
                            <img className="rectangle-3568-XmoMMT" src="img/rectangle-3568-2@1x.png" />
                            <div className="club-premium-XmoMMT lato-normal-manatee-12px">
                                Ceci n’est pas un conseil en investissement
                            </div>
                        </div>
                        <div className="club-premium-c53V7q lato-normal-white-14px-2">
                            <span className="span0-xtxV5Q lato-bold-white-14px">
                                Mise à jour du 25 mars 2022
                                <br />
                            </span>
                            <span className="span1-xtxV5Q lato-normal-white-14px">
                                <br />
                                J’ai déjà un bag dans l’ensemble des positions ci-dessous ! 💰
                                <br />
                                <br />
                                Explication :<br />
                                <br />- Pour 1Inch je vous laisse voir le token de la semaine est mon explication !
                                <br />
                                <br />- Je recharge un peu sur le BTC, car il drive le marché et je sortirai de cette
                                position BTC pour accumuler de l’ETH🔱
                                <br />
                                <br />- En parlant d’ETH, je recharge en permanence au moins 30 % de mon investissement
                                de la semaine dessus, car je pense qu’il va continuer de surperformer le marché
                                notamment avec l’arrivée de l’EIP 1559 !<br />
                                <br />- DOT a connu l’une des descentes les plus drastiques, mais les fondamentaux
                                restent ! Le Web 3.0 est l’avenir pour moi et Polkadot en est le leader pour ma part !
                                💻
                                <br />
                                <br />- Mirror Protocol : Pourquoi recharger assez massivement sur MIR ? MIR est un
                                protocole de peg asset ! C’est-à-dire que vous pouvez acheter des tokens qui sont liés à
                                une valeur. Exemple l’USDT est un peg asset de l’USD ! Mirror propose des actions
                                tokénisées comme Apple, Tesla, etc… Ainsi vous pouvez vous exposer au marché
                                classNameique sans quitter le monde des cryptos. Cela peut attirer beaucoup de monde et
                                Mirror en est l’un des pionniers et le seul à en faire son activité principale !
                                Prochainement, une explication complète sera disponible sur MIR ! 💸
                            </span>
                        </div>
                        {/* <Footer /> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

// export default checkAuth(Trading);
export default Trading;
