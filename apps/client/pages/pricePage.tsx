import type { NextPage } from 'next';
import Footer from './components/footer';
import Header from './components/header';
// import checkAuth from './components/checkAuth';
import Cookies from 'universal-cookie';
import router from 'next/router';
import { useEffect } from 'react';

const PricePage: NextPage = (props: any) => {
    const cookies = new Cookies();

    useEffect(() => {
        if (!cookies.get('API_TOKEN')) {
            router.replace('/');
        }
    }, []);

    return (
        <div>
            <input type="hidden" id="anPageName" name="page" value="prices-page" />
            <div className="prices-page screen">
                <Header isOpenSideBar={props.useStateOpenSideBar} isEspaceTradingCrypto={false} />
                <div className="avertissement-bAAl1m">
                    <div className="groupe-3020-R9yMUv">
                        <div className="rectangle-3606-CczUp1"></div>
                        <div className="les-investissements-CczUp1 lato-normal-white-12px-2">
                            <span className="span0-VYxIJF lato-bold-white-12px">Les investissements sont risqués.</span>
                            <span className="span1-VYxIJF lato-normal-white-12px">
                                Les investissements sont risqués par nature, les utilisateurs doivent faire leurs
                                propres recherches avant d’entreprendre toute action et n’investir que dans les limites
                                de leurs capacités financières. Cet article ne constitue pas un conseil en
                                investissement.
                            </span>
                        </div>
                    </div>
                    <img className="ligne-41-R9yMUv" src="img/line-41-2@1x.png" />
                </div>
                <div className="background-bAAl1m"></div>
                <img className="groupe-de-masques-331-bAAl1m" src="img/mask-group-331@1x.png" />
                <div className="votre-licence-6-fire-invest-bAAl1m lato-bold-white-18px">
                    VOTRE LICENCE 6FIRE INVEST
                </div>
                <div className="laccs-au-club-6-fire-bAAl1m lato-normal-white-14px">
                    L’accès au club 6FIRE est soumis à une licence payante pour éviter d’avoir des membres
                    perturbateurs, non impliqué et n’étant pas dans l’esprit et la dynamique du club. <br />
                </div>
                <div className="bloc-offre-bAAl1m">
                    <div className="rectangle-3592-Y3qnBR"></div>
                    <img className="rectangle-3593-Y3qnBR" src="img/rectangle-3593@1x.png" />
                    <div className="novice-Y3qnBR lato-bold-white-18px">NOVICE</div>
                    <div className="x4999-Y3qnBR lato-bold-black-26px">49,99€</div>
                    <div className="mois-Y3qnBR lato-normal-manatee-12px">/mois</div>
                    <div className="button-commencer-Y3qnBR">
                        <div className="rectangle-3594-eZzVdP"></div>
                        <div className="commencer-eZzVdP lato-bold-milano-red-14px">Commencer</div>
                    </div>
                    <img className="ligne-35-Y3qnBR" src="img/line-34@1x.png" />
                    <div className="groupe-3017-Y3qnBR">
                        <img className="icon-check_mark-TS7YxV" src="img/icon-feather-check-4@1x.png" />
                        <div className="licence-6-fire-TS7YxV lato-normal-black-10px">Licence 6FIRE</div>
                        <img className="icon-check_mark-2D58IN" src="img/icon-feather-check-4@1x.png" />
                        <div className="accs-tous-les-articl-TS7YxV lato-normal-black-10px">
                            Accès à tous les articles pour comprendre le monde de l’investissement
                        </div>
                        <img className="icon-check_mark-1GPg7b" src="img/icon-feather-check-4@1x.png" />
                        <div className="accs-aux-bons-plans-TS7YxV lato-normal-black-10px">Accès aux Bons Plans</div>
                        <img className="icon-check_mark-3UqB83" src="img/icon-feather-check-4@1x.png" />
                        <div className="accs-aux-articles-pe-TS7YxV lato-normal-black-10px">
                            Accès aux articles permettant de se lancer dans le monde de l’investissement sans budget à
                            travers des dizaines d’opportunités
                        </div>
                        <img className="icon-check_mark-KVAgRN" src="img/icon-feather-check-4@1x.png" />
                        <div className="accs-aux-rencontres-TS7YxV lato-normal-black-10px">
                            Accès aux rencontres et événements privés des membres en France
                        </div>
                    </div>
                    <div className="offre-sans-engagemen-Y3qnBR lato-normal-sonic-silver-10px">
                        Offre sans engagement, <br />
                        annulable à tout moment
                    </div>
                    <img
                        className="pour-les-dbutantsfrileux-Y3qnBR"
                        src="img/file-pour-les-d-butants-frileux-@1x.png"
                    />
                </div>
                <div className="bloc-offre-YYWFTn">
                    <div className="rectangle-3589-xzlH1J"></div>
                    <img className="rectangle-3591-xzlH1J" src="img/rectangle-3591@1x.png" />
                    <div className="intermdiaire-xzlH1J lato-bold-white-16px">INTERMÉDIAIRE</div>
                    <div className="x9999-xzlH1J">99,99€</div>
                    <div className="mois-xzlH1J lato-normal-manatee-12px">/mois</div>
                    <div className="button-commencer-xzlH1J">
                        <div className="rectangle-3590-mKNhOZ"></div>
                        <div className="commencer-mKNhOZ lato-bold-white-14px">Commencer</div>
                    </div>
                    <img className="ligne-34-xzlH1J" src="img/line-34@1x.png" />
                    <div className="groupe-3016-xzlH1J">
                        <div className="accs-aux-options-de-la-licence-novice-bVOQH1 lato-normal-black-10px">
                            Accès aux options de la Licence Novice
                        </div>
                        <img className="icon-check_mark-bVOQH1" src="img/icon-feather-check-10@1x.png" />
                        <div className="accs-au-bot-trading-bVOQH1 lato-normal-black-10px">
                            Accès au BOT TRADING permettant d’obtenir les alertes des meilleurs tradeurs du monde sur
                            Binance
                        </div>
                        <div className="accs-nos-analyses-sur-les-marchs-bVOQH1 lato-normal-black-10px">
                            Accès à nos analyses sur les marchés
                        </div>
                        <div className="accs-notre-portefeui-bVOQH1 lato-normal-black-10px">
                            Accès à notre portefeuille Crypto et nos choix en temps réel pour le long terme
                        </div>
                        <div className="accs-aux-signaux-for-bVOQH1 lato-normal-black-10px">
                            Accès aux signaux FOREX &amp; CRYPTO permettant de voir en temps réel les positions que nous
                            prenons sur les marchés
                        </div>
                        <div className="accs-nos-rsultats-bVOQH1 lato-normal-black-10px">Accès à nos résultats</div>
                        <div className="accs-nos-outils-dana-bVOQH1 lato-normal-black-10px">
                            Accès à nos outils d’analyses secrets sur les marchés financiers
                        </div>
                        <div className="icon-feather-plus-bVOQH1">
                            <img className="trac-1043-CsSGUO" src="img/path-1043-1@1x.png" />
                            <img className="trac-1044-CsSGUO" src="img/path-1044-1@1x.png" />
                        </div>
                        <div className="icon-feather-plus-J7DsPQ">
                            <img className="trac-1043-GyuJoj" src="img/path-1043-1@1x.png" />
                            <img className="trac-1044-GyuJoj" src="img/path-1044-1@1x.png" />
                        </div>
                        <div className="icon-feather-plus-iNVTub">
                            <img className="trac-1043-dIhvxx" src="img/path-1043-1@1x.png" />
                            <img className="trac-1044-dIhvxx" src="img/path-1044-1@1x.png" />
                        </div>
                        <div className="icon-feather-plus-WhBiYh">
                            <img className="trac-1043-9thswo" src="img/path-1043-1@1x.png" />
                            <img className="trac-1044-9thswo" src="img/path-1044-1@1x.png" />
                        </div>
                        <div className="icon-feather-plus-rsxxv1">
                            <img className="trac-1043-UTQSuu" src="img/path-1043-1@1x.png" />
                            <img className="trac-1044-UTQSuu" src="img/path-1044-1@1x.png" />
                        </div>
                        <div className="icon-feather-plus-09LitM">
                            <img className="trac-1043-OUxG1x" src="img/path-1043-1@1x.png" />
                            <img className="trac-1044-OUxG1x" src="img/path-1044-1@1x.png" />
                        </div>
                        <div className="support-24h24-et-7j7-pour-les-membres-bVOQH1 lato-normal-black-10px">
                            Support 24h/24 et 7j/7 pour les membres
                        </div>
                        <div className="icon-feather-plus-TJzdUE">
                            <img className="trac-1043-akaEWI" src="img/path-1043-1@1x.png" />
                            <img className="trac-1044-akaEWI" src="img/path-1044-1@1x.png" />
                        </div>
                    </div>
                    <div className="offre-sans-engagemen-xzlH1J lato-normal-sonic-silver-10px">
                        Offre sans engagement, <br />
                        annulable à tout moment
                    </div>
                    <div className="pour-les-ambitieux-qui-veulent-trader-xzlH1J lato-normal-white-10px">
                        (Pour les ambitieux, qui veulent trader)
                    </div>
                </div>
                <div className="bloc-offre-KaUxf6">
                    <div className="rectangle-3597-lVuQRq"></div>
                    <img className="rectangle-3598-lVuQRq" src="img/rectangle-3598@1x.png" />
                    <div className="partenaire-6-fire-lVuQRq lato-bold-white-16px">PARTENAIRE 6FIRE</div>
                    <div className="x19999-lVuQRq lato-bold-black-26px">199,99€</div>
                    <div className="mois-lVuQRq lato-normal-manatee-12px">/mois</div>
                    <div className="button-commencer-lVuQRq">
                        <div className="rectangle-3599-8mPhsu border-1px-black"></div>
                        <div className="commencer-8mPhsu lato-bold-black-14px-2">Commencer</div>
                    </div>
                    <img className="ligne-36-lVuQRq" src="img/line-34@1x.png" />
                    <div className="groupe-3018-lVuQRq">
                        <div className="accs-aux-options-de-spCXWt lato-normal-black-10px">
                            Accès aux options de la Licence Novice et Intermédiaire
                        </div>
                        <img className="icon-check_mark-spCXWt" src="img/icon-feather-check-10@1x.png" />
                        <div className="accs-au-groupe-whats-spCXWt lato-normal-black-10px">
                            Accès au groupe WhatsApp de la direction de 6FIRE
                        </div>
                        <div className="contact-en-temps-rel-spCXWt lato-normal-black-10px">
                            Contact en temps réel avec les mentors pour tout suivi de projet en illimité <br />
                        </div>
                        <div className="un-call-une-fois-par-spCXWt lato-normal-black-10px">
                            Un call une fois par semaine avec tous les partenaires
                        </div>
                        <div className="icon-feather-plus-spCXWt">
                            <img className="trac-1043-qrzrdL" src="img/path-1043-1@1x.png" />
                            <img className="trac-1044-qrzrdL" src="img/path-1044-1@1x.png" />
                        </div>
                        <div className="icon-feather-plus-1Kxi7O">
                            <img className="trac-1043-dzYaDs" src="img/path-1043-1@1x.png" />
                            <img className="trac-1044-dzYaDs" src="img/path-1044-1@1x.png" />
                        </div>
                        <div className="icon-feather-plus-q6xcLh">
                            <img className="trac-1043-ZBFSSw" src="img/path-1043-1@1x.png" />
                            <img className="trac-1044-ZBFSSw" src="img/path-1044-1@1x.png" />
                        </div>
                    </div>
                    <div className="offre-sans-engagemen-lVuQRq lato-normal-sonic-silver-10px">
                        Offre sans engagement, <br />
                        annulable à tout moment
                    </div>
                    <div className="x20-lVuQRq">20</div>
                    <div className="places-disponiblesuniquement-lVuQRq lato-normal-black-14px-3">
                        PLACES DISPONIBLES
                        <br />
                        UNIQUEMENT
                    </div>
                </div>
                <div className="toogle-button-bAAl1m">
                    <img className="icon-ionic-ios-moon-ftiHd7" src="img/icon-ionic-ios-moon-1@1x.png" />
                    <div className="toogle-button-ftiHd7">
                        <div className="rectangle-3485-rvY402"></div>
                        <div className="ellipse-17688-rvY402"></div>
                    </div>
                </div>
                <div className="background-YYWFTn"></div>
                <div className="offre-annuelle-bAAl1m lato-bold-white-18px">OFFRE ANNUELLE</div>
                <div className="bloc-offre-H8HPgL">
                    <div className="rectangle-3592-zjfnR2"></div>
                    <img className="rectangle-3593-zjfnR2" src="img/rectangle-3593-1@1x.png" />
                    <div className="novice-zjfnR2 lato-bold-white-18px">NOVICE</div>
                    <div className="x55999-zjfnR2 lato-bold-black-26px">559,99€</div>
                    <div className="pour-un-an-zjfnR2 lato-normal-manatee-12px">pour un an</div>
                    <div className="button-commencer-zjfnR2">
                        <div className="rectangle-3594-HOEtpc border-1px-black"></div>
                        <div className="commencer-HOEtpc lato-bold-mine-shaft-14px">Commencer</div>
                    </div>
                    <div className="conomisez-50-euros-e-zjfnR2 lato-normal-black-10px">
                        Économisez 50 euros en prenant la licence novice d’un an !
                    </div>
                    <img className="licence-annuelle-zjfnR2" src="img/licence-annuelle-1@1x.png" />
                </div>
                <div className="bloc-offre-4pS4ZF">
                    <div className="rectangle-3592-x0xE9o"></div>
                    <img className="rectangle-3593-x0xE9o" src="img/rectangle-3593-2@1x.png" />
                    <div className="inter-mdiaire-x0xE9o lato-bold-white-18px">INTERMÉDIAIRE</div>
                    <div className="x59999-x0xE9o lato-bold-black-26px">599,99€</div>
                    <div className="pour-un-an-x0xE9o lato-normal-manatee-12px">pour un an</div>
                    <div className="button-commencer-x0xE9o">
                        <div className="rectangle-3594-D9s3vG border-1px-black"></div>
                        <div className="commencer-D9s3vG lato-bold-mine-shaft-14px">Commencer</div>
                    </div>
                    <div className="conomisez-600-euros-x0xE9o">
                        Économisez 600 euros en prenant la licence intermédiaire d’un an !
                    </div>
                    <img className="licence-annuelle-x0xE9o" src="img/licence-annuelle-1@1x.png" />
                    <div className="rectangle-3608-x0xE9o"></div>
                    <img className="best-seller-x0xE9o" src="img/best-seller@1x.png" />
                </div>
                <div className="bloc-offre-J10C6m">
                    <div className="rectangle-3592-Q775IJ"></div>
                    <img className="rectangle-3593-Q775IJ" src="img/rectangle-3593-2@1x.png" />
                    <div className="partenaire-Q775IJ lato-bold-white-18px">PARTENAIRE</div>
                    <div className="x79999-Q775IJ lato-bold-black-26px">799,99€</div>
                    <div className="pour-un-an-Q775IJ lato-normal-manatee-12px">pour un an</div>
                    <div className="button-commencer-Q775IJ">
                        <div className="rectangle-3594-i0jpqR border-1px-black"></div>
                        <div className="commencer-i0jpqR lato-bold-mine-shaft-14px">Commencer</div>
                    </div>
                    <div className="conomisez-1600-euros-Q775IJ">
                        Économisez 1600 euros en prenant la licence intermédiaire d’un an !
                    </div>
                    <img className="licence-annuelle-Q775IJ" src="img/licence-annuelle-1@1x.png" />
                    <div className="rectangle-3608-Q775IJ"></div>
                    <img className="best-seller-Q775IJ" src="img/best-seller-1@1x.png" />
                </div>
                <Footer />
            </div>
            <div className="prices-page-mobile screen">
                <div className="background-IrLseF"></div>
                <div className="rectangle-3484-IrLseF"></div>
                <div className="logo-IrLseF">
                    <img className="effect-XM5JVa" src="img/effect-47@1x.png" />
                </div>
                <div className="toogle-button-IrLseF">
                    <img className="icon-ionic-ios-moon-tHuFf4" src="img/icon-ionic-ios-moon-15@1x.png" />
                    <div className="toogle-button-tHuFf4">
                        <div className="rectangle-3485-bTajvo"></div>
                        <div className="ellipse-17688-bTajvo"></div>
                    </div>
                </div>
                <div className="search-bar-IrLseF">
                    <img className="icon-search-hEJLRx" src="img/icon-ionic-ios-search-47@1x.png" />
                </div>
                <div className="rectangle-3607-IrLseF"></div>
                <div className="groupe-3022-IrLseF">
                    <div className="rectangle-3556-CYVHm3"></div>
                    <div className="trading-CYVHm3 lato-bold-white-14px">Espace Trading &amp; Crypto</div>
                </div>
                <div className="menu-IrLseF">
                    <div className="icon-ionic-ios-menu-Cxma7A">
                        <img className="trac-1-uCdRrx" src="img/path-1-10@1x.png" />
                        <img className="trac-2-uCdRrx" src="img/path-2-10@1x.png" />
                    </div>
                </div>
                <div className="avertissement-IrLseF">
                    <div className="groupe-3020-z8LLUF">
                        <div className="rectangle-3606-ujLJaA"></div>
                        <div className="les-investissements-ujLJaA lato-normal-white-12px-2">
                            <span className="span0-ojdTJv lato-bold-white-12px">Les investissements sont risqués.</span>
                            <span className="span1-ojdTJv lato-normal-white-12px">
                                Les investissements sont risqués par nature, les utilisateurs doivent faire leurs
                                propres recherches avant d’entreprendre toute action et n’investir que dans les limites
                                de leurs capacités financières. Cet article ne constitue pas un conseil en
                                investissement.
                            </span>
                        </div>
                    </div>
                </div>
                <div className="footer-IrLseF">
                    <div className="background-ntrUqU"></div>
                    <div className="menu-footer-ntrUqU">
                        <div className="mentions-lgales-uRrx0Y sourcesanspro-semi-bold-sonic-silver-14px">
                            Mentions légales
                        </div>
                        <div className="cgu-uRrx0Y sourcesanspro-semi-bold-sonic-silver-14px">CGU</div>
                        <div className="cgv-uRrx0Y sourcesanspro-semi-bold-sonic-silver-14px">CGV</div>
                        <div className="politique-de-confidentialit-uRrx0Y sourcesanspro-semi-bold-sonic-silver-14px">
                            Politique de confidentialité
                        </div>
                        <div className="contact-uRrx0Y sourcesanspro-semi-bold-sonic-silver-14px">Contact</div>
                    </div>
                    <div className="x2022-6-fire-invest-ntrUqU sourcesanspro-semi-bold-gray-14px">
                        Ⓒ 2022 - 6FIRE INVEST
                    </div>
                    <div className="logo-ntrUqU">
                        <div className="groupe-2-aqErwE">
                            <img className="groupe-1-tcJCVq" src="img/groupe-1-26@1x.png" />
                        </div>
                        <img className="effect-aqErwE" src="img/effect-12@1x.png" />
                    </div>
                    <img className="ligne-31-ntrUqU" src="img/ligne-31-14@1x.png" />
                    <div className="groupe-3011-ntrUqU">
                        <img className="icon-instagram-WNSJgL" src="img/fontawsome--instagram--1@1x.png" />
                    </div>
                    <div className="groupe-3010-ntrUqU">
                        <img className="icon-simple-tiktok-DQvXxp" src="img/icon-simple-tiktok-1@1x.png" />
                    </div>
                    <img className="icon-paper_plane-ntrUqU" src="img/icon-awesome-telegram-plane-1@1x.png" />
                </div>
                <img className="groupe-de-masques-331-IrLseF" src="img/mask-group-331@1x.png" />
                <div className="votre-licence-6-fire-invest-IrLseF lato-bold-white-18px">
                    VOTRE LICENCE 6FIRE INVEST
                </div>
                <div className="laccs-au-club-6-fire-IrLseF lato-normal-white-14px">
                    L’accès au club 6FIRE est soumis à une licence payante pour éviter d’avoir des membres
                    perturbateurs, non impliqué et n’étant pas dans l’esprit et la dynamique du club. <br />
                </div>
                <div className="bloc-offre-IrLseF">
                    <div className="rectangle-3592-GnWIh1"></div>
                    <img className="rectangle-3593-GnWIh1" src="img/rectangle-3593-4@1x.png" />
                    <div className="novice-GnWIh1 lato-bold-white-20px">NOVICE</div>
                    <div className="x4999-GnWIh1 lato-bold-black-32px">49,99€</div>
                    <div className="mois-GnWIh1 lato-normal-manatee-14px">/mois</div>
                    <div className="button-commencer-GnWIh1">
                        <div className="rectangle-3609-wMvdjy border-1px-licorice"></div>
                        <div className="commencer-wMvdjy lato-bold-black-16px">Commencer</div>
                    </div>
                    <img className="ligne-35-GnWIh1" src="img/ligne-35-2-1x-png@1x.png" />
                    <div className="groupe-3017-GnWIh1">
                        <img className="icon-check_mark-itEkx4" src="img/icon-feather-check-15@1x.png" />
                        <div className="licence-6-fire-itEkx4 lato-normal-black-12px">Licence 6FIRE</div>
                        <img className="icon-check_mark-ScsxiR" src="img/icon-feather-check-15@1x.png" />
                        <div className="accs-tous-les-articl-itEkx4 lato-normal-black-12px">
                            Accès à tous les articles pour comprendre le monde de l’investissement
                        </div>
                        <img className="icon-check_mark-ztEdif" src="img/icon-feather-check-15@1x.png" />
                        <div className="accs-aux-bons-plans-itEkx4 lato-normal-black-12px">Accès aux Bons Plans</div>
                        <img className="icon-check_mark-uj2xEz" src="img/icon-feather-check-15@1x.png" />
                        <div className="accs-aux-articles-pe-itEkx4 lato-normal-black-12px">
                            Accès aux articles permettant de se lancer dans le monde de l’investissement sans budget à
                            travers des dizaines d’opportunités
                        </div>
                        <img className="icon-check_mark-WoI413" src="img/icon-feather-check-15@1x.png" />
                        <div className="accs-aux-rencontres-itEkx4 lato-normal-black-12px">
                            Accès aux rencontres et événements privés des membres en France
                        </div>
                    </div>
                    <div className="offre-sans-engagemen-GnWIh1 lato-normal-sonic-silver-12px">
                        Offre sans engagement, <br />
                        annulable à tout moment
                    </div>
                    <img
                        className="pour-les-dbutantsfrileux-GnWIh1"
                        src="img/file-pour-les-d-butants-frileux--1x-png@1x.png"
                    />
                </div>
                <div className="bloc-offre-8jsUKr">
                    <div className="rectangle-3589-rHLQVK"></div>
                    <img className="rectangle-3591-rHLQVK" src="img/rectangle-3591-1@1x.png" />
                    <div className="intermdiaire-rHLQVK lato-bold-white-20px">INTERMÉDIAIRE</div>
                    <div className="x9999-rHLQVK lato-bold-milano-red-32px">99,99€</div>
                    <div className="mois-rHLQVK lato-normal-manatee-14px">/mois</div>
                    <div className="button-commencer-rHLQVK">
                        <div className="rectangle-3590-7Y4M7a"></div>
                        <div className="commencer-7Y4M7a lato-bold-white-16px">Commencer</div>
                    </div>
                    <img className="ligne-34-rHLQVK" src="img/ligne-34-2@1x.png" />
                    <div className="groupe-3016-rHLQVK">
                        <div className="accs-aux-options-de-la-licence-novice-Kk8PxH lato-normal-black-12px">
                            Accès aux options de la Licence Novice
                        </div>
                        <img className="icon-check_mark-Kk8PxH" src="img/icon-feather-check-20@1x.png" />
                        <div className="accs-au-bot-trading-Kk8PxH lato-normal-black-12px">
                            Accès au BOT TRADING permettant d’obtenir les alertes des meilleurs tradeurs du monde sur
                            Binance
                        </div>
                        <div className="accs-nos-analyses-sur-les-marchs-Kk8PxH lato-normal-black-12px">
                            Accès à nos analyses sur les marchés
                        </div>
                        <div className="accs-notre-portefeui-Kk8PxH lato-normal-black-12px">
                            Accès à notre portefeuille Crypto et nos choix en temps réel pour le long terme
                        </div>
                        <div className="accs-aux-signaux-for-Kk8PxH lato-normal-black-12px">
                            Accès aux signaux FOREX &amp; CRYPTO permettant de voir en temps réel les positions que nous
                            prenons sur les marchés
                        </div>
                        <div className="accs-nos-rsultats-Kk8PxH lato-normal-black-12px">Accès à nos résultats</div>
                        <div className="accs-nos-outils-dana-Kk8PxH lato-normal-black-12px">
                            Accès à nos outils d’analyses secrets sur les marchés financiers
                        </div>
                        <div className="icon-feather-plus-Kk8PxH">
                            <img className="trac-1043-vIqYuj" src="img/trac--1043-10@1x.png" />
                            <img className="trac-1044-vIqYuj" src="img/trac--1044-10@1x.png" />
                        </div>
                        <div className="icon-feather-plus-okJcls">
                            <img className="trac-1043-gb4bvP" src="img/trac--1043-10@1x.png" />
                            <img className="trac-1044-gb4bvP" src="img/trac--1044-10@1x.png" />
                        </div>
                        <div className="icon-feather-plus-aAnN36">
                            <img className="trac-1043-2HpzMV" src="img/trac--1043-10@1x.png" />
                            <img className="trac-1044-2HpzMV" src="img/trac--1044-10@1x.png" />
                        </div>
                        <div className="icon-feather-plus-aA2esr">
                            <img className="trac-1043-N5oGTg" src="img/trac--1043-10@1x.png" />
                            <img className="trac-1044-N5oGTg" src="img/trac--1044-10@1x.png" />
                        </div>
                        <div className="icon-feather-plus-1Wk4Db">
                            <img className="trac-1043-UzyNzd" src="img/trac--1043-10@1x.png" />
                            <img className="trac-1044-UzyNzd" src="img/trac--1044-10@1x.png" />
                        </div>
                        <div className="icon-feather-plus-YeDBhL">
                            <img className="trac-1043-71Z9UQ" src="img/trac--1043-10@1x.png" />
                            <img className="trac-1044-71Z9UQ" src="img/trac--1044-10@1x.png" />
                        </div>
                        <div className="support-24h24-et-7j7-pour-les-membres-Kk8PxH lato-normal-black-12px">
                            Support 24h/24 et 7j/7 pour les membres
                        </div>
                        <div className="icon-feather-plus-3kvZxX">
                            <img className="trac-1043-wR4UZs" src="img/trac--1043-10@1x.png" />
                            <img className="trac-1044-wR4UZs" src="img/trac--1044-10@1x.png" />
                        </div>
                    </div>
                    <div className="offre-sans-engagemen-rHLQVK lato-normal-sonic-silver-12px">
                        Offre sans engagement, <br />
                        annulable à tout moment
                    </div>
                    <div className="pour-les-ambitieux-qui-veulent-trader-rHLQVK lato-normal-white-12px">
                        (Pour les ambitieux, qui veulent trader)
                    </div>
                </div>
                <div className="bloc-offre-hma2Iq">
                    <div className="rectangle-3597-pvIpeS"></div>
                    <img className="rectangle-3598-pvIpeS" src="img/rectangle-3598-1@1x.png" />
                    <div className="partenaire-6-fire-pvIpeS lato-bold-white-20px">PARTENAIRE 6FIRE</div>
                    <div className="x19999-pvIpeS lato-bold-black-32px">199,99€</div>
                    <div className="mois-pvIpeS lato-normal-manatee-12px">/mois</div>
                    <img className="ligne-36-pvIpeS" src="img/ligne-34-2@1x.png" />
                    <div className="groupe-3018-pvIpeS">
                        <div className="accs-aux-options-de-jyUEwT lato-normal-black-12px">
                            Accès aux options de la Licence Novice et Intermédiaire
                        </div>
                        <img className="icon-check_mark-jyUEwT" src="img/icon-feather-check-20@1x.png" />
                        <div className="accs-au-groupe-whats-jyUEwT lato-normal-black-12px">
                            Accès au groupe WhatsApp de la direction de 6FIRE
                        </div>
                        <div className="contact-en-temps-rel-jyUEwT lato-normal-black-12px">
                            Contact en temps réel avec les mentors pour tout suivi de projet en illimité <br />
                        </div>
                        <div className="un-call-une-fois-par-jyUEwT lato-normal-black-12px">
                            Un call une fois par semaine avec tous les partenaires
                        </div>
                        <div className="icon-feather-plus-jyUEwT">
                            <img className="trac-1043-WEwQLo" src="img/trac--1043-17@1x.png" />
                            <img className="trac-1044-WEwQLo" src="img/trac--1044-10@1x.png" />
                        </div>
                        <div className="icon-feather-plus-8GBn3H">
                            <img className="trac-1043-Xuxr58" src="img/trac--1043-17@1x.png" />
                            <img className="trac-1044-Xuxr58" src="img/trac--1044-10@1x.png" />
                        </div>
                        <div className="icon-feather-plus-UMZO1Y">
                            <img className="trac-1043-iuNXTp" src="img/trac--1043-17@1x.png" />
                            <img className="trac-1044-iuNXTp" src="img/trac--1044-10@1x.png" />
                        </div>
                    </div>
                    <div className="offre-sans-engagemen-pvIpeS lato-normal-sonic-silver-10px">
                        Offre sans engagement, <br />
                        annulable à tout moment
                    </div>
                    <div className="x20-pvIpeS lato-bold-milano-red-32px">20</div>
                    <div className="places-disponiblesuniquement-pvIpeS">
                        PLACES DISPONIBLES
                        <br />
                        UNIQUEMENT
                    </div>
                    <div className="button-commencer-pvIpeS">
                        <div className="rectangle-3609-ZHfbXM border-1px-licorice"></div>
                        <div className="commencer-ZHfbXM lato-bold-black-16px">Commencer</div>
                    </div>
                </div>
                <div className="background-8jsUKr"></div>
                <div className="offre-annuelle-IrLseF lato-bold-white-20px">OFFRE ANNUELLE</div>
                <div className="bloc-offre-37TfT9">
                    <div className="rectangle-3592-encbbU"></div>
                    <img className="rectangle-3593-encbbU" src="img/rectangle-3593-5@1x.png" />
                    <div className="novice-encbbU lato-bold-white-20px">NOVICE</div>
                    <div className="x55999-encbbU lato-bold-black-32px">559,99€</div>
                    <div className="pour-un-an-encbbU lato-normal-manatee-12px">pour un an</div>
                    <div className="conomisez-50-euros-e-encbbU lato-normal-black-14px-3">
                        Économisez 50 euros en prenant la licence novice d’un an !
                    </div>
                    <img className="licence-annuelle-encbbU" src="img/licence-annuelle-3@1x.png" />
                    <div className="button-commencer-encbbU">
                        <div className="rectangle-3609-wkOENT border-1px-licorice"></div>
                        <div className="commencer-wkOENT lato-bold-black-16px">Commencer</div>
                    </div>
                </div>
                <div className="bloc-offre-rm2NvY">
                    <div className="rectangle-3592-53FdLF"></div>
                    <img className="rectangle-3593-53FdLF" src="img/rectangle-3593-6@1x.png" />
                    <div className="inter-mdiaire-53FdLF lato-bold-white-20px">INTERMÉDIAIRE</div>
                    <div className="x59999-53FdLF lato-bold-black-32px">599,99€</div>
                    <div className="pour-un-an-53FdLF lato-normal-manatee-12px">pour un an</div>
                    <div className="conomisez-600-euros-53FdLF lato-bold-milano-red-14px">
                        Économisez 600 euros en prenant la licence intermédiaire d’un an !
                    </div>
                    <img className="licence-annuelle-53FdLF" src="img/licence-annuelle-4@1x.png" />
                    <div className="rectangle-3608-53FdLF"></div>
                    <img className="best-seller-53FdLF" src="img/best-seller-2@1x.png" />
                    <div className="button-commencer-53FdLF">
                        <div className="rectangle-3609-0YzsLD border-1px-licorice"></div>
                        <div className="commencer-0YzsLD lato-bold-black-16px">Commencer</div>
                    </div>
                </div>
                <div className="bloc-offre-qJdcxZ">
                    <div className="rectangle-3592-uzZnKO"></div>
                    <img className="rectangle-3593-uzZnKO" src="img/rectangle-3593-7@1x.png" />
                    <div className="partenaire-uzZnKO lato-bold-white-20px">PARTENAIRE</div>
                    <div className="x79999-uzZnKO lato-bold-black-32px">799,99€</div>
                    <div className="pour-un-an-uzZnKO lato-normal-manatee-12px">pour un an</div>
                    <div className="conomisez-1600-euros-uzZnKO lato-bold-milano-red-14px">
                        Économisez 1600 euros en prenant la licence intermédiaire d’un an !
                    </div>
                    <img className="licence-annuelle-uzZnKO" src="img/licence-annuelle-5@1x.png" />
                    <div className="rectangle-3610-uzZnKO"></div>
                    <img className="best-seller-uzZnKO" src="img/best-seller-2@1x.png" />
                    <div className="button-commencer-uzZnKO">
                        <div className="rectangle-3609-x91oWC border-1px-licorice"></div>
                        <div className="commencer-x91oWC lato-bold-black-16px">Commencer</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PricePage;
// export default checkAuth(PricePage);
