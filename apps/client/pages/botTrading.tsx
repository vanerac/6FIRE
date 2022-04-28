import type { NextPage } from 'next';
import router from 'next/router';
import Footer from './components/footer';
import Header from './components/header';
// import checkAuth from './components/checkAuth';
import { useEffect } from 'react';
import { useCookies } from 'react-cookie';
import getAPIClient from '@shared/tools/apiClient';

const BotTrading: NextPage = (props: any) => {
    const [cookies] = useCookies(['API_TOKEN']);
    let $apiClient = getAPIClient(cookies['API_TOKEN']);

    useEffect(() => {
        if (!cookies['API_TOKEN']) {
            console.log('no token');
            router.replace('/');
            return;
        }
        $apiClient = getAPIClient(cookies['API_TOKEN']);
    }, []);

    return (
        <div>
            <input type="hidden" id="anPageName" name="page" value="bot-trading" />
            <div className="bot-trading screen">
                <Header isOpenSideBar={props.useStateOpenSideBar} isEspaceTradingCrypto={false} />
                <img className="background-FwUAid" src="img/background@1x.png" />
                <img className="groupe-de-masques-327-FwUAid" src="img/mask-group-327-1@1x.png" />
                <div className="rectangle-3558-FwUAid"></div>
                <div className="club-premium-FwUAid lato-bold-white-18px">Suivez les meilleurs Trader Binance</div>
                <div className="club-premium-Flmx7x lato-normal-white-16px">
                    Reçois en LIVE les positions des meilleurs traders BINANCE grâce à notre robot Telegram&nbsp;&nbsp;!
                </div>
                <div className="menu-bascule-FwUAid">
                    <div className="groupe-3014-rgUu6r">
                        <img className="rectangle-3559-JxfHBf" src="img/rectangle-3559@1x.png" />
                        <div className="club-premium-JxfHBf lato-bold-white-14px">ACCÈS AU BOT</div>
                    </div>
                    <div onClick={() => router.push('/botTradingTraders')} className="groupe-3013-rgUu6r">
                        <img className="rectangle-3560-prXDZd" src="img/rectangle-3560@1x.png" />
                        <div className="club-premium-prXDZd lato-bold-white-14px">TRADERS</div>
                    </div>
                </div>
                <div className="club-premium-rtzeuz lato-bold-white-16px">
                    RECEVEZ EN TEMPS RÉEL LES ALERTES DES MEILLEURS TRADERS BINANCE
                </div>
                <div className="club-premium-Q8oH1B lato-normal-white-14px">
                    Nous avons développez un robot permettant de recevoir des alertes à la seconde où un trader du top
                    15 BINANCE prend une position. Tu peux sélectionner le trader de ton choix et recevoir en live des
                    alertes Telegram à l’ouverture ou à la fermeture d’un trade ! <br />
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
                            Vous allez recevoir ensuite un message du Bot et vous devrez coller votre identifiant que
                            vous avez déjà copié à l’étape 1.
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
                            Retrouvez sur la page Traders différents profiles Binance et leurs résultats. Vous pouvez
                            suivre jusqu’à 3 profils, une fois que vous avez sélectionné de un jusqu’à 3 traders vous
                            recevrez automatiquement leurs alertes sur Telegram grâce au Bot.
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
                            <img className="icon-awesome-telegram-8QsxB2" src="img/icon-awesome-telegram-1@1x.png" />
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
                <div className="avertissement-FwUAid">
                    <div className="groupe-3020-BCxIWv">
                        <div className="rectangle-3606-rkI1Pb"></div>
                        <div className="les-investissements-rkI1Pb lato-normal-white-12px-2">
                            <span className="span0-dX6IM2 lato-bold-white-12px">Les investissements sont risqués.</span>
                            <span className="span1-dX6IM2 lato-normal-white-12px">
                                Les investissements sont risqués par nature, les utilisateurs doivent faire leurs
                                propres recherches avant d’entreprendre toute action et n’investir que dans les limites
                                de leurs capacités financières. Cet article ne constitue pas un conseil en
                                investissement.
                            </span>
                        </div>
                    </div>
                    <img className="ligne-41-BCxIWv" src="img/line-41-2@1x.png" />
                </div>
                <Footer />
            </div>
            <div className="bot-trading-mobile screen">
                <div className="avertissement-Pj5fjx">
                    <div className="groupe-3020-gge11l">
                        <div className="rectangle-3606-QDqXzk"></div>
                        <div className="les-investissements-QDqXzk lato-normal-white-12px-2">
                            <span className="span0-BTE1zt lato-bold-white-12px">Les investissements sont risqués.</span>
                            <span className="span1-BTE1zt lato-normal-white-12px">
                                Les investissements sont risqués par nature, les utilisateurs doivent faire leurs
                                propres recherches avant d’entreprendre toute action et n’investir que dans les limites
                                de leurs capacités financières. Cet article ne constitue pas un conseil en
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
                    <img className="icon-paper_plane-oZhQlD" src="img/icon-awesome-telegram-plane-9@1x.png" />
                </div>
                <img className="groupe-de-masques-327-Pj5fjx" src="img/groupe-de-masques-327-2@1x.png" />
                <div className="rectangle-3558-Pj5fjx"></div>
                <div className="groupe-3024-Pj5fjx">
                    <div className="club-premium-Zi2VV0 lato-bold-white-18px">Suivez les meilleurs Trader Binance</div>
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
                    Nous avons développez un robot permettant de recevoir des alertes à la seconde où un trader du top
                    15 BINANCE prend une position. Tu peux sélectionner le trader de ton choix et recevoir en live des
                    alertes Telegram à l’ouverture ou à la fermeture d’un trade !
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
                    <div className="activer-le-bot-telegram-MZKr6a lato-bold-white-14px">Activer le Bot Telegram</div>
                    <div className="cliquez-sur-le-bouto-MZKr6a lato-normal-white-14px">
                        Cliquez sur le bouton «Rejoindre le BOT» puis envoyez START/
                        <br />
                        Vous allez recevoir ensuite un message du Bot et vous devrez coller votre identifiant que vous
                        avez déjà copié à l’étape 1.
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
                            Vous avez reçu un mail de confirmation suite à l’envoi de votre identifiant au Bot Telegram
                            lors de l’étape 2.
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
                        Retrouvez sur la page Traders différents profiles Binance et leurs résultats. Vous pouvez suivre
                        jusqu’à 3 profils, une fois que vous avez sélectionné de un jusqu’à 3 traders vous recevrez
                        automatiquement leurs alertes sur Telegram grâce au Bot.
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
                        <img className="icon-ionic-logo-whatsapp-clB4MT" src="img/icon-ionic-logo-whatsapp-4@1x.png" />
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
    );
};

export default BotTrading;
// export default checkAuth(BotTrading);
