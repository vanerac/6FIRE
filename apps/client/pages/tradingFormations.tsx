import type { NextPage } from 'next';
import Footer from './components/footer';
import Header from './components/header';
// import checkAuth from './components/checkAuth';
import router from 'next/router';
import { useEffect } from 'react';
import Image from 'next/image';
import { useCookies } from 'react-cookie';
import getAPIClient from '@shared/tools/apiClient';

const TradingFormations: NextPage = (props: any) => {
    const [cookies] = useCookies(['API_TOKEN']);
    let $apiClient = getAPIClient(cookies['API_TOKEN']);

    useEffect(() => {
        if (!cookies['API_TOKEN']) {
            console.log('no token');
            router.replace('/');
            return;
        }
        $apiClient = getAPIClient(cookies['API_TOKEN']);
        // Todo: Note: meme chose que articlesPages mais avec une option de filtre
    }, []);

    return (
        // <div>
        //     <input type="hidden" id="anPageName" name="page" value="trading-formations" />
        //     <div className="trading-formations screen">
        //         <Header isOpenSideBar={props.useStateOpenSideBar} isEspaceTradingCrypto={false} />
        //         <div className="background-L4Kmv7"></div>
        //         <div className="article-L4Kmv7 hidden">
        //             <img className="groupe-de-masques-324-I1nHFm" src="img/mask-group-324-2@1x.png" />
        //             <div className="club-premium-I1nHFm lato-normal-grenadier-14px">Crypto</div>
        //             <img className="ligne-15-I1nHFm" src="img/line-15-2@1x.png" />
        //             <div className="club-premium-nNHwpn lato-light-manatee-14px">19 février 2022</div>
        //             <div className="club-premium-a003g8 lato-bold-white-16px">Twitter ajoute l’option Ethereum</div>
        //             <img className="icon-twitter-I1nHFm" src="img/image-874-1@1x.png" />
        //             <div className="rectangle-3502-I1nHFm"></div>
        //         </div>
        //         <div className="prvisualisation-articles-L4Kmv7">
        //             <div className="article-nOHLIk">
        //                 <img className="groupe-de-masques-321-KUkK6l" src="img/mask-group-321-1@1x.png" />
        //                 <div className="club-premium-KUkK6l lato-normal-milano-red-12px">Crypto</div>
        //                 <img className="ligne-12-KUkK6l" src="img/line-12-1@1x.png" />
        //                 <div className="club-premium-hFfMEs lato-light-manatee-12px">Il y a 2 heures</div>
        //                 <div className="club-premium-MJtAEp lato-bold-white-16px">
        //                     Les cryptomonaies, par où commencer ?
        //                 </div>
        //                 <div className="rectangle-3498-KUkK6l"></div>
        //             </div>
        //             <div className="article-dNUrwn">
        //                 <img className="groupe-de-masques-322-5ZOULA" src="img/mask-group-322-1@1x.png" />
        //                 <div className="club-premium-5ZOULA lato-normal-milano-red-12px">Crypto</div>
        //                 <img className="ligne-13-5ZOULA" src="img/line-12-1@1x.png" />
        //                 <div className="club-premium-eZbm8p lato-light-manatee-12px">19 février 2022</div>
        //                 <div className="club-premium-mbTJUx lato-bold-white-16px">Pourquoi investir dans l’AVAX ?</div>
        //                 <div className="rectangle-3500-5ZOULA"></div>
        //             </div>
        //             <div className="article-FmDlCq">
        //                 <img className="groupe-de-masques-323-AytNIC" src="img/mask-group-323-1@1x.png" />
        //                 <div className="club-premium-AytNIC lato-normal-milano-red-12px">Crypto</div>
        //                 <img className="ligne-14-AytNIC" src="img/line-12-1@1x.png" />
        //                 <div className="club-premium-YkG83U lato-light-manatee-12px">19 février 2022</div>
        //                 <div className="club-premium-hEez54 lato-bold-white-16px">Les 5 erreurs à éviter en crypto</div>
        //                 <div className="rectangle-3501-AytNIC"></div>
        //             </div>
        //             <div className="article-Qx0D4e">
        //                 <img className="groupe-de-masques-321-43FEOx" src="img/mask-group-321-1@1x.png" />
        //                 <div className="club-premium-43FEOx lato-normal-milano-red-12px">Crypto</div>
        //                 <img className="ligne-12-43FEOx" src="img/line-12-1@1x.png" />
        //                 <div className="club-premium-AClsMI lato-light-manatee-12px">Il y a 2 heures</div>
        //                 <div className="club-premium-YOOAsc lato-bold-white-16px">
        //                     Les cryptomonaies, par où commencer ?
        //                 </div>
        //                 <div className="rectangle-3498-43FEOx"></div>
        //             </div>
        //             <div className="article-xKnm3b">
        //                 <img className="groupe-de-masques-322-WyA1nk" src="img/mask-group-322-1@1x.png" />
        //                 <div className="club-premium-WyA1nk lato-normal-milano-red-12px">Crypto</div>
        //                 <img className="ligne-13-WyA1nk" src="img/line-12-1@1x.png" />
        //                 <div className="club-premium-8rE0p9 lato-light-manatee-12px">19 février 2022</div>
        //                 <div className="club-premium-rrFHyg lato-bold-white-16px">Pourquoi investir dans l’AVAX ?</div>
        //                 <div className="rectangle-3500-WyA1nk"></div>
        //             </div>
        //             <div className="article-azdTPj">
        //                 <img className="groupe-de-masques-323-csywA2" src="img/mask-group-323-1@1x.png" />
        //                 <div className="club-premium-csywA2 lato-normal-milano-red-12px">Crypto</div>
        //                 <img className="ligne-14-csywA2" src="img/line-12-1@1x.png" />
        //                 <div className="club-premium-HJToAb lato-light-manatee-12px">19 février 2022</div>
        //                 <div className="club-premium-GD8pxM lato-bold-white-16px">Les 5 erreurs à éviter en crypto</div>
        //                 <div className="rectangle-3501-csywA2"></div>
        //             </div>
        //             <div className="article-Fx3xZ4">
        //                 <img className="groupe-de-masques-321-R2AE0l" src="img/mask-group-321-1@1x.png" />
        //                 <div className="club-premium-R2AE0l lato-normal-milano-red-12px">Crypto</div>
        //                 <img className="ligne-12-R2AE0l" src="img/line-12-1@1x.png" />
        //                 <div className="club-premium-wQxifb lato-light-manatee-12px">Il y a 2 heures</div>
        //                 <div className="club-premium-bgGwXK lato-bold-white-16px">
        //                     Les cryptomonaies, par où commencer ?
        //                 </div>
        //                 <div className="rectangle-3498-R2AE0l"></div>
        //             </div>
        //             <div className="article-XbBeE5">
        //                 <img className="groupe-de-masques-322-3RLnD6" src="img/mask-group-322-1@1x.png" />
        //                 <div className="club-premium-3RLnD6 lato-normal-milano-red-12px">Crypto</div>
        //                 <img className="ligne-13-3RLnD6" src="img/line-12-1@1x.png" />
        //                 <div className="club-premium-0SZH4g lato-light-manatee-12px">19 février 2022</div>
        //                 <div className="club-premium-EFx1ZM lato-bold-white-16px">Pourquoi investir dans l’AVAX ?</div>
        //                 <div className="rectangle-3500-3RLnD6"></div>
        //             </div>
        //             <div className="article-NT5gbh">
        //                 <img className="groupe-de-masques-323-orxhf6" src="img/mask-group-323-1@1x.png" />
        //                 <div className="club-premium-orxhf6 lato-normal-milano-red-12px">Crypto</div>
        //                 <img className="ligne-14-orxhf6" src="img/line-12-1@1x.png" />
        //                 <div className="club-premium-u1GZWF lato-light-manatee-12px">19 février 2022</div>
        //                 <div className="club-premium-0Ua0xK lato-bold-white-16px">Les 5 erreurs à éviter en crypto</div>
        //                 <div className="rectangle-3501-orxhf6"></div>
        //             </div>
        //         </div>
        //         <div className="button-signin-L4Kmv7">
        //             <div className="button-cration-de-compte-dr47Wx">
        //                 <div className="rectangle-3470-mSnI3C border-1px-white"></div>
        //                 <div className="voir-plus-mSnI3C lato-normal-white-14px">Voir plus</div>
        //             </div>
        //             <img
        //                 className="icon-ionic-ios-arrow-forward-dr47Wx"
        //                 src="img/icon-ionic-ios-arrow-forward-2@1x.png"
        //             />
        //         </div>
        //         <div className="avertissement-L4Kmv7">
        //             <div className="groupe-3020-hJ5gjz">
        //                 <div className="rectangle-3606-qDT0rf"></div>
        //                 <div className="les-investissements-qDT0rf lato-normal-white-12px-2">
        //                     <span className="span0-nVxLE5 lato-bold-white-12px">Les investissements sont risqués.</span>
        //                     <span className="span1-nVxLE5 lato-normal-white-12px">
        //                         Les investissements sont risqués par nature, les utilisateurs doivent faire leurs
        //                         propres recherches avant d’entreprendre toute action et n’investir que dans les limites
        //                         de leurs capacités financières. Cet article ne constitue pas un conseil en
        //                         investissement.
        //                     </span>
        //                 </div>
        //             </div>
        //             <img className="ligne-41-hJ5gjz" src="img/line-41-2@1x.png" />
        //         </div>
        //         <Footer />
        //     </div>
        //     <div className="trading-formations-mobile screen">
        //         <div className="background-R4fmnF"></div>
        //         <div className="article-R4fmnF">
        //             <img className="groupe-de-masques-321-GQAGmo" src="img/groupe-de-masques-321-16@1x.png" />
        //             <div className="club-premium-GQAGmo lato-normal-milano-red-12px">Play to Earn</div>
        //             <img className="ligne-12-GQAGmo" src="img/line-12-1@1x.png" />
        //             <div className="club-premium-Re7Txd lato-light-manatee-12px">Il y a 2 heures</div>
        //             <div className="club-premium-vbEkPA lato-bold-white-16px">Axie Infinity, jeu Play to Earn</div>
        //             <div className="rectangle-3498-GQAGmo"></div>
        //         </div>
        //         <div className="article-TM7eWU">
        //             <img className="groupe-de-masques-322-CQ6zNu" src="img/groupe-de-masques-322-16@1x.png" />
        //             <div className="club-premium-CQ6zNu lato-bold-white-16px">Les outils indispensable du Web</div>
        //             <div className="rectangle-3500-CQ6zNu"></div>
        //             <div className="club-premium-FTAnWA lato-normal-milano-red-12px">E-Commerce</div>
        //             <img className="ligne-33-CQ6zNu" src="img/line-12-1@1x.png" />
        //             <div className="club-premium-LOcUIr lato-light-manatee-12px">Il y a 2 heures</div>
        //         </div>
        //         <div className="article-KWvOWn">
        //             <img className="groupe-de-masques-323-x2ywKA" src="img/groupe-de-masques-323-16@1x.png" />
        //             <div className="club-premium-x2ywKA lato-normal-grenadier-12px">Crypto</div>
        //             <img className="ligne-14-x2ywKA" src="img/line-12-1@1x.png" />
        //             <div className="club-premium-MxdoFU lato-light-manatee-12px">19 février 2022</div>
        //             <div className="club-premium-5OPZPW lato-bold-white-16px">Les 5 erreurs à éviter en crypto</div>
        //             <div className="rectangle-3501-x2ywKA"></div>
        //         </div>
        //         <div className="article-6Tg0k1">
        //             <img className="groupe-de-masques-324-YfwhxC" src="img/groupe-de-masques-324-5@1x.png" />
        //             <div className="club-premium-YfwhxC lato-normal-milano-red-12px">Entreprenariat</div>
        //             <img className="ligne-15-YfwhxC" src="img/line-12-1@1x.png" />
        //             <div className="club-premium-wS0pi2 lato-light-manatee-12px">19 février 2022</div>
        //             <div className="club-premium-dVwos6 lato-bold-white-16px">Comment se lancer ?</div>
        //             <img className="icon-twitter-YfwhxC" src="img/image-874-1@1x.png" />
        //             <div className="rectangle-3502-YfwhxC"></div>
        //         </div>
        //         <div className="avertissement-R4fmnF">
        //             <div className="groupe-3020-fUSics">
        //                 <div className="rectangle-3606-FqWs05"></div>
        //                 <div className="les-investissements-FqWs05 lato-normal-white-12px-2">
        //                     <span className="span0-MzIBuW lato-bold-white-12px">Les investissements sont risqués.</span>
        //                     <span className="span1-MzIBuW lato-normal-white-12px">
        //                         Les investissements sont risqués par nature, les utilisateurs doivent faire leurs
        //                         propres recherches avant d’entreprendre toute action et n’investir que dans les limites
        //                         de leurs capacités financières. Cet article ne constitue pas un conseil en
        //                         investissement.
        //                     </span>
        //                 </div>
        //             </div>
        //             <img className="ligne-41-fUSics" src="img/ligne-41-15@1x.png" />
        //         </div>
        //         <div className="footer-R4fmnF">
        //             <div className="background-ipw7Mh"></div>
        //             <div className="menu-footer-ipw7Mh">
        //                 <div className="mentions-lgales-5Q5kdb sourcesanspro-semi-bold-sonic-silver-14px">
        //                     Mentions légales
        //                 </div>
        //                 <div className="cgu-5Q5kdb sourcesanspro-semi-bold-sonic-silver-14px">CGU</div>
        //                 <div className="cgv-5Q5kdb sourcesanspro-semi-bold-sonic-silver-14px">CGV</div>
        //                 <div className="politique-de-confidentialit-5Q5kdb sourcesanspro-semi-bold-sonic-silver-14px">
        //                     Politique de confidentialité
        //                 </div>
        //                 <div className="contact-5Q5kdb sourcesanspro-semi-bold-sonic-silver-14px">Contact</div>
        //             </div>
        //             <div className="x2022-6-fire-invest-ipw7Mh sourcesanspro-semi-bold-gray-14px">
        //                 Ⓒ 2022 - 6FIRE INVEST
        //             </div>
        //             <div className="logo-ipw7Mh">
        //                 <div className="groupe-2-80gqKq">
        //                     <img className="groupe-1-GNpPO0" src="img/group-1-10@1x.png" />
        //                 </div>
        //                 <img className="effect-80gqKq" src="img/effect-12@1x.png" />
        //             </div>
        //             <img className="ligne-31-ipw7Mh" src="img/ligne-31-14@1x.png" />
        //             <div className="groupe-3011-ipw7Mh">
        //                 <img className="icon-instagram-sQ3j23" src="img/fontawsome--instagram--1@1x.png" />
        //             </div>
        //             <div className="groupe-3010-ipw7Mh">
        //                 <img className="icon-simple-tiktok-pgXoOi" src="img/icon-simple-tiktok-1@1x.png" />
        //             </div>
        //             <img className="icon-paper_plane-ipw7Mh" src="img/icon-awesome-telegram-plane-1@1x.png" />
        //         </div>
        //         <div className="header-R4fmnF">
        //             <div className="rectangle-3484-kLJMNz"></div>
        //             <div className="logo-kLJMNz">
        //                 <img className="effect-L8itxG" src="img/effect-47@1x.png" />
        //             </div>
        //             <div className="toogle-button-kLJMNz">
        //                 <img className="icon-ionic-ios-moon-hy62rb" src="img/icon-ionic-ios-moon-20@1x.png" />
        //                 <div className="toogle-button-hy62rb">
        //                     <div className="rectangle-3485-CFQQp0"></div>
        //                     <div className="ellipse-17688-CFQQp0"></div>
        //                 </div>
        //             </div>
        //             <div className="search-bar-kLJMNz">
        //                 <img className="icon-search-5xEh9o" src="img/icon-ionic-ios-search-27@1x.png" />
        //             </div>
        //             <div className="rectangle-3607-kLJMNz"></div>
        //             <div className="menu-kLJMNz">
        //                 <div className="icon-ionic-ios-menu-xkttAO">
        //                     <img className="trac-1-1YpcI8" src="img/path-1-10@1x.png" />
        //                     <img className="trac-2-1YpcI8" src="img/path-2-10@1x.png" />
        //                 </div>
        //             </div>
        //             <div className="espace-trading-crypto-kLJMNz">
        //                 <div className="formations-4gym5x lato-normal-white-14px">Espace Trading &amp; Crypto</div>
        //             </div>
        //         </div>
        //         <div className="article-NfVqYx">
        //             <img className="groupe-de-masques-324-Il8n6n" src="img/groupe-de-masques-324-5@1x.png" />
        //             <div className="club-premium-Il8n6n lato-normal-milano-red-12px">Entreprenariat</div>
        //             <img className="ligne-15-Il8n6n" src="img/line-12-1@1x.png" />
        //             <div className="club-premium-r4hE9T lato-light-manatee-12px">19 février 2022</div>
        //             <div className="club-premium-mLZsrE lato-bold-white-16px">Comment se lancer ?</div>
        //             <img className="icon-twitter-Il8n6n" src="img/image-874-1@1x.png" />
        //             <div className="rectangle-3502-Il8n6n"></div>
        //         </div>
        //         <div className="article-r7knbe">
        //             <img className="groupe-de-masques-323-epKMxz" src="img/groupe-de-masques-323-16@1x.png" />
        //             <div className="club-premium-epKMxz lato-normal-grenadier-12px">Crypto</div>
        //             <img className="ligne-14-epKMxz" src="img/line-12-1@1x.png" />
        //             <div className="club-premium-14Ofw5 lato-light-manatee-12px">19 février 2022</div>
        //             <div className="club-premium-mBOFKu lato-bold-white-16px">Les 5 erreurs à éviter en crypto</div>
        //             <div className="rectangle-3501-epKMxz"></div>
        //         </div>
        //         <div className="button-signin-R4fmnF">
        //             <div className="button-cration-de-compte-uIv0e6">
        //                 <div className="rectangle-3470-0vXemT border-1px-white"></div>
        //                 <div className="voir-plus-0vXemT lato-normal-white-14px">Voir plus</div>
        //             </div>
        //             <img
        //                 className="icon-ionic-ios-arrow-forward-uIv0e6"
        //                 src="img/icon-ionic-ios-arrow-forward-2@1x.png"
        //             />
        //         </div>
        //     </div>
        //     <div id="overlay-crypto-wallet" className="overlay" style={{ minHeight: '1403px' }}>
        //         <div
        //             className="crypto-wallet screen"
        //             // onclick="window.open('javascript:HideOverlay(%27crypto-wallet%27%2C%20%27animate-disappear%27);', '_self');"
        //         >
        //             <div className="background-XPwy4i"></div>
        //             <div className="h1-XPwy4i lato-bold-white-20px">Portefeuille Cryptomonnaies</div>
        //             <div className="date-XPwy4i lato-normal-white-16px">Mis à jour le 25 mars 2022</div>
        //             <div className="cercle-XPwy4i">
        //                 <div className="graph-3-Iu9ljH">
        //                     <div className="oval-16-l8FK0N"></div>
        //                     <div className="animation-l8FK0N hidden">
        //                         <div className="rectangle-3573-xurQbd"></div>
        //                         <div className="eth-20-xurQbd lato-normal-white-12px">ETH 20%</div>
        //                     </div>
        //                 </div>
        //                 <div className="graph-2-Iu9ljH">
        //                     <img className="trac-1025-bPlr5T" src="img/path-1025@1x.png" />
        //                     <div className="animation-bPlr5T hidden">
        //                         <div className="rectangle-3573-Ffy16J"></div>
        //                         <div className="btc-60-Ffy16J lato-normal-white-12px">BTC 60%</div>
        //                     </div>
        //                 </div>
        //                 <div className="graph-1-Iu9ljH">
        //                     <img className="oval-15-Nr0iuw" src="img/oval-15@1x.png" />
        //                     <div className="animation-Nr0iuw hidden">
        //                         <div className="rectangle-3573-CETFKo"></div>
        //                         <div className="sol-5-CETFKo lato-normal-white-12px">SOL 5%</div>
        //                     </div>
        //                 </div>
        //                 <div className="graph-Iu9ljH">
        //                     <img className="oval-15-HjsIhi" src="img/oval-15-1-1x-png@1x.png" />
        //                     <div className="animation-HjsIhi hidden">
        //                         <div className="rectangle-3573-ihNVG3"></div>
        //                         <div className="btc-60-ihNVG3 lato-normal-white-12px">BTC 60%</div>
        //                     </div>
        //                 </div>
        //                 <div className="oval-16-Iu9ljH"></div>
        //                 <img className="font-awsome-wallet-Iu9ljH" src="img/fontawsome--wallet--4@1x.png" />
        //             </div>
        //             <div className="bar-crypto-icon-XPwy4i">
        //                 <div className="rectangle-3566-xqiOBD border-1px-dove-gray"></div>
        //                 <div className="avax-xqiOBD">
        //                     <div className="avalanche-avax-logo-xzVrvc">
        //                         <div className="rectangle-3565-QR9tk6"></div>
        //                         <img className="trac-1026-QR9tk6" src="img/path-1026@1x.png" />
        //                     </div>
        //                     <div className="oval-16-xzVrvc border-2px-woodsmoke"></div>
        //                     <div className="club-premium-xzVrvc lato-bold-white-14px">Avax</div>
        //                     <div className="club-premium-EgJ6er lato-normal-white-14px">15%</div>
        //                 </div>
        //                 <div className="avax-1VwJyY">
        //                     <div className="club-premium-aCEkYu lato-bold-white-14px">Bitcoin</div>
        //                     <div className="club-premium-s4BgfB lato-normal-white-14px">60%</div>
        //                     <div className="layer_x0020_1-aCEkYu">
        //                         <div className="x1421344023328-6MMkG3">
        //                             <img className="trac-1027-k9m6xt" src="img/trac--1027-1@1x.png" />
        //                             <img className="trac-1028-k9m6xt" src="img/path-1028@1x.png" />
        //                         </div>
        //                     </div>
        //                     <div className="oval-16-aCEkYu border-2px-woodsmoke-2"></div>
        //                 </div>
        //                 <div className="avax-xXHQVx">
        //                     <div className="avalanche-avax-logo-cUbV0V">
        //                         <div className="ellipse-17694-2c9lA5"></div>
        //                         <div className="solana-sol-logo-2c9lA5">
        //                             <img className="trac-1029-sxxHx9" src="img/path-1029@1x.png" />
        //                             <img className="trac-1030-sxxHx9" src="img/path-1030@1x.png" />
        //                             <img className="trac-1031-sxxHx9" src="img/trac--1031-1@1x.png" />
        //                         </div>
        //                     </div>
        //                     <div className="oval-16-cUbV0V border-2px-woodsmoke-2"></div>
        //                     <div className="club-premium-cUbV0V lato-bold-white-14px">SOL</div>
        //                     <div className="club-premium-HrHDVW lato-normal-white-14px">5%</div>
        //                 </div>
        //                 <div className="avax-596mbO">
        //                     <div className="avalanche-avax-logo-NTnKVu">
        //                         <div className="ellipse-17694-0Fktxs"></div>
        //                         <div className="layer_x0020_1-0Fktxs">
        //                             <div className="x1421394342400-QS8jFz">
        //                                 <div className="groupe-1509-sSCTnu">
        //                                     <img className="trac-1032-l8EsG4" src="img/path-1032@1x.png" />
        //                                     <img className="trac-1033-l8EsG4" src="img/path-1033@1x.png" />
        //                                     <img className="trac-1034-l8EsG4" src="img/trac--1034-1@1x.png" />
        //                                     <img className="trac-1035-l8EsG4" src="img/path-1035@1x.png" />
        //                                     <img className="trac-1036-l8EsG4" src="img/path-1036@1x.png" />
        //                                     <img className="trac-1037-l8EsG4" src="img/path-1037@1x.png" />
        //                                 </div>
        //                             </div>
        //                         </div>
        //                     </div>
        //                     <div className="oval-16-NTnKVu border-2px-woodsmoke"></div>
        //                     <div className="club-premium-NTnKVu lato-bold-white-14px">ETH</div>
        //                     <div className="club-premium-BuFzFS lato-normal-white-14px">20%</div>
        //                 </div>
        //                 <div className="rectangle-3586-xqiOBD border-1px-dove-gray"></div>
        //                 <div className="text_label-xqiOBD">€</div>
        //                 <div className="rectangle-3587-xqiOBD"></div>
        //                 <div className="rectangle-3588-xqiOBD border-1px-dove-gray"></div>
        //                 <div className="mon-capital-xqiOBD lato-normal-manatee-10px">Mon capital…</div>
        //             </div>
        //             <div className="historique-XPwy4i">
        //                 <div className="rectangle-3567-2VlAVP"></div>
        //                 <div className="fixe-2VlAVP">
        //                     <img className="rectangle-3568-TEfqQu" src="img/rectangle-3568@1x.png" />
        //                     <div className="club-premium-TEfqQu lato-normal-manatee-12px">
        //                         Ceci n’est pas un conseil en investissement
        //                     </div>
        //                 </div>
        //                 <div className="club-premium-2VlAVP lato-normal-white-12px-2">
        //                     <span className="span0-uiCSUd lato-bold-white-12px">
        //                         Mise à jour du 25 mars 2022
        //                         <br />
        //                     </span>
        //                     <span className="span1-uiCSUd lato-normal-white-12px">
        //                         <br />
        //                         J’ai déjà un bag dans l’ensemble des positions ci-dessous ! 💰
        //                         <br />
        //                         <br />
        //                         Explication :<br />
        //                         <br />- Pour 1Inch je vous laisse voir le token de la semaine est mon explication !
        //                         <br />
        //                         <br />- Je recharge un peu sur le BTC, car il drive le marché et je sortirai de cette
        //                         position BTC pour accumuler de l’ETH🔱
        //                         <br />
        //                         <br />- En parlant d’ETH, je recharge en permanence au moins 30 % de mon investissement
        //                         de la semaine dessus, car je pense qu’il va continuer de surperformer le marché
        //                         notamment avec l’arrivée de l’EIP 1559 !<br />
        //                         <br />- DOT a connu l’une des descentes les plus drastiques, mais les fondamentaux
        //                         restent ! Le Web 3.0 est l’avenir pour moi et Polkadot en est le leader pour ma part !
        //                         💻
        //                         <br />
        //                         <br />- Mirror Protocol : Pourquoi recharger assez massivement sur MIR ? MIR est un
        //                         protocole de peg asset ! C’est-à-dire que vous pouvez acheter des tokens qui sont liés à
        //                         une valeur. Exemple l’USDT est un peg asset de l’USD ! Mirror propose des actions
        //                         tokénisées comme Apple, Tesla, etc… Ainsi vous pouvez vous exposer au marché
        //                         classNameique sans quitter le monde des cryptos. Cela peut attirer beaucoup de monde et
        //                         Mirror en est l’un des pionniers et le seul à en faire son activité principale !
        //                         Prochainement, une explication complète sera disponible sur MIR ! 💸
        //                     </span>
        //                 </div>
        //             </div>
        //             <div className="footer-XPwy4i">
        //                 <div className="background-1KzJpa"></div>
        //                 <div className="menu-footer-1KzJpa">
        //                     <div className="mentions-lgales-dKw8vr sourcesanspro-semi-bold-sonic-silver-14px">
        //                         Mentions légales
        //                     </div>
        //                     <div className="cgu-dKw8vr sourcesanspro-semi-bold-sonic-silver-14px">CGU</div>
        //                     <div className="cgv-dKw8vr sourcesanspro-semi-bold-sonic-silver-14px">CGV</div>
        //                     <div className="politique-de-confidentialit-dKw8vr sourcesanspro-semi-bold-sonic-silver-14px">
        //                         Politique de confidentialité
        //                     </div>
        //                     <div className="politique-de-confidentialit-T8CBm0 sourcesanspro-semi-bold-sonic-silver-14px">
        //                         Politique de confidentialité
        //                     </div>
        //                     <div className="contact-dKw8vr sourcesanspro-semi-bold-sonic-silver-14px">Contact</div>
        //                 </div>
        //                 <div className="x2022-6-fire-invest-1KzJpa sourcesanspro-semi-bold-gray-14px">
        //                     Ⓒ 2022 - 6FIRE INVEST
        //                 </div>
        //                 <div className="logo-1KzJpa">
        //                     <div className="groupe-2-GmUeld">
        //                         <img className="groupe-1-d5AwTm" src="img/group-1-11@1x.png" />
        //                     </div>
        //                     <img className="effect-GmUeld" src="img/effect-12@1x.png" />
        //                 </div>
        //                 <img className="ligne-31-1KzJpa" src="img/line-31-1@1x.png" />
        //                 <div className="groupe-3011-1KzJpa">
        //                     <div className="ellipse-17695-v7gikA hidden"></div>
        //                     <img className="icon-instagram-v7gikA" src="img/fontawsome--instagram--7@1x.png" />
        //                 </div>
        //                 <div className="groupe-3010-1KzJpa">
        //                     <div className="ellipse-17696-zjNoSr hidden"></div>
        //                     <img className="icon-simple-tiktok-zjNoSr" src="img/icon-simple-tiktok-1@1x.png" />
        //                 </div>
        //             </div>
        //             <div className="header-XPwy4i">
        //                 <div className="rectangle-3483-P2FJgl"></div>
        //                 <div className="logo-P2FJgl">
        //                     <div className="groupe-1483-Mf9t8i hidden">
        //                         <img className="groupe-1482-PR043A" src="img/group-1482-20@1x.png" />
        //                     </div>
        //                     <img className="effect-Mf9t8i" src="img/effect-13@1x.png" />
        //                 </div>
        //                 <div className="thme-sombre-P2FJgl">
        //                     <img className="icon-ionic-ios-moon-TXAl0J" src="img/icon-ionic-ios-moon-7@1x.png" />
        //                     <div className="toogle-button-TXAl0J">
        //                         <div className="rectangle-3485-bUqpCN"></div>
        //                         <div className="ellipse-17688-bUqpCN"></div>
        //                     </div>
        //                 </div>
        //                 <div className="menu-P2FJgl">
        //                     <div className="rectangle-3484-izuuFL"></div>
        //                     <div className="espace-trading-crypto-izuuFL">
        //                         <div className="formations-DoXA0r lato-normal-white-14px">
        //                             Espace Trading &amp; Crypto
        //                         </div>
        //                         <img className="ligne-8-DoXA0r hidden" src="img/line-8-22@1x.png" />
        //                     </div>
        //                     <a href="trading-formations.html">
        //                         <div className="formations-izuuFL">
        //                             <div className="formations-D3SZeP lato-normal-white-14px">Formations</div>
        //                             <img className="ligne-8-D3SZeP hidden" src="img/line-8-12@1x.png" />
        //                             <div className="icon-actif-D3SZeP">
        //                                 <div className="ellipse-17693-hDrVnx"></div>
        //                                 <img
        //                                     className="font-awsome-graduation-cap-hDrVnx"
        //                                     src="img/fontawsome--graduation-cap--3@1x.png"
        //                                 />
        //                             </div>
        //                         </div>
        //                     </a>
        //                     <div className="forex-izuuFL">
        //                         <div className="formations-5UPxOu lato-normal-white-14px">Forex</div>
        //                         <img className="ligne-8-5UPxOu hidden" src="img/line-8-12@1x.png" />
        //                         <div className="icon-actif-5UPxOu">
        //                             <div className="ellipse-17693-xTAm9w"></div>
        //                             <img
        //                                 className="font-awsome-dollar-sign-xTAm9w"
        //                                 src="img/fontawsome--dollar-sign--2@1x.png"
        //                             />
        //                         </div>
        //                     </div>
        //                     <div className="crypto-wallet-izuuFL">
        //                         <div className="club-premium-8iF6ou lato-normal-white-14px">Crypto Wallet</div>
        //                         <img className="ligne-8-8iF6ou" src="img/line-8-37@1x.png" />
        //                         <div className="icon-actif-8iF6ou">
        //                             <div className="ellipse-17693-2DG3xx"></div>
        //                             <img className="font-awsome-wallet-2DG3xx" src="img/fontawsome--wallet--5@1x.png" />
        //                         </div>
        //                     </div>
        //                     <div className="bot-trading-izuuFL">
        //                         <div className="formations-30M2f8 lato-normal-white-14px">Bot Trading</div>
        //                         <img className="ligne-8-30M2f8 hidden" src="img/line-8-12@1x.png" />
        //                         <div className="icon-actif-30M2f8">
        //                             <div className="ellipse-17693-yRUv62"></div>
        //                             <img className="icon-awesome-robot-yRUv62" src="img/icon-awesome-robot-2@1x.png" />
        //                         </div>
        //                     </div>
        //                     <a href="nos-trades.html">
        //                         <div className="trading-izuuFL">
        //                             <div className="rectangle-3556-GE8E7j"></div>
        //                             <div className="trading-GE8E7j lato-bold-white-14px">Nos trades</div>
        //                             <div className="icon-actif-GE8E7j">
        //                                 <div className="ellipse-17693-6A4EEv"></div>
        //                                 <img
        //                                     className="icon-simple-graphcool-6A4EEv"
        //                                     src="img/icon-simple-graphcool-2@1x.png"
        //                                 />
        //                             </div>
        //                         </div>
        //                     </a>
        //                 </div>
        //                 <div className="espace-membre-P2FJgl">
        //                     <div className="connexion-famnLU">
        //                         <div className="club-premium-D83CQa lato-normal-white-14px">Mon compte</div>
        //                         <img className="ligne-8-D83CQa hidden" src="img/line-8-13@1x.png" />
        //                     </div>
        //                 </div>
        //                 <div className="menu-2-P2FJgl">
        //                     <div className="icon-ionic-ios-menu-WakCzF">
        //                         <img className="trac-1-ZcsST0" src="img/path-1-10@1x.png" />
        //                         <img className="trac-2-ZcsST0" src="img/path-2-10@1x.png" />
        //                     </div>
        //                     <div className="menu-2-WakCzF hidden">
        //                         <div className="background-cGZ274"></div>
        //                         <div className="groupe-1487-cGZ274">
        //                             <img className="ligne-10-67Ixsr" src="img/line-10-10@1x.png" />
        //                             <img className="ligne-11-67Ixsr" src="img/line-11-10@1x.png" />
        //                         </div>
        //                         <div className="numro-de-tlphone-cGZ274">
        //                             <img className="ligne-6-nx0UNh" src="img/line-6-12@1x.png" />
        //                             <div className="mes-donnes-personnelles-nx0UNh lato-normal-white-14px">
        //                                 Mes données personnelles
        //                             </div>
        //                             <div className="ma-licence-nx0UNh lato-normal-white-14px">Ma licence</div>
        //                         </div>
        //                     </div>
        //                 </div>
        //                 <div className="search-bar-P2FJgl">
        //                     <img className="icon-search-d52WLF" src="img/icon-ionic-ios-search-13@1x.png" />
        //                     <div className="search-bar-d52WLF hidden">
        //                         <div className="rectangle-3603-i8frgx"></div>
        //                         <div className="search-bar-i8frgx">
        //                             <img className="rectangle-3604-uV95cC" src="img/rectangle-3604-1@1x.png" />
        //                             <img className="rectangle-3605-uV95cC" src="img/rectangle-3605-1@1x.png" />
        //                             <div className="rechercher-uV95cC lato-normal-manatee-14px">Rechercher…</div>
        //                             <img className="icon-search-uV95cC" src="img/icon-ionic-ios-search-14@1x.png" />
        //                         </div>
        //                         <div className="groupe-1487-i8frgx">
        //                             <img className="ligne-10-4NeRWS" src="img/line-10-10@1x.png" />
        //                             <img className="ligne-11-4NeRWS" src="img/line-11-10@1x.png" />
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //             <img className="trac-1042-XPwy4i" src="img/path-1042@1x.png" />
        //             <div className="bouton-affi-XPwy4i">
        //                 <div className="rectangle-8-9pCLeb"></div>
        //                 <img className="binance-svgrepo-com-9pCLeb" src="img/binance-svgrepo-com-1@1x.png" />
        //                 <div className="ouvrir-un-compte-binance-9pCLeb roboto-bold-black-12px">
        //                     OUVRIR UN COMPTE BINANCE
        //                 </div>
        //                 <img
        //                     className="icon-ionic-ios-arrow-round-forward-9pCLeb"
        //                     src="img/icon-ionic-ios-arrow-round-forward-2@1x.png"
        //                 />
        //             </div>
        //             <div className="avertissement-XPwy4i">
        //                 <div className="groupe-3020-0Hq04G">
        //                     <div className="rectangle-3606-110DgH"></div>
        //                     <div className="les-investissements-110DgH lato-normal-white-12px-2">
        //                         <span className="span0-xsDfvw lato-bold-white-12px">
        //                             Les investissements sont risqués.
        //                         </span>
        //                         <span className="span1-xsDfvw lato-normal-white-12px">
        //                             Les investissements sont risqués par nature, les utilisateurs doivent faire leurs
        //                             propres recherches avant d’entreprendre toute action et n’investir que dans les
        //                             limites de leurs capacités financières. Cet article ne constitue pas un conseil en
        //                             investissement.
        //                         </span>
        //                     </div>
        //                 </div>
        //                 <img className="ligne-41-0Hq04G" src="img/line-41-2@1x.png" />
        //             </div>
        //         </div>
        //         <div className="crypto-wallet-mobile screen">
        //             <div className="avertissement-i4rvow">
        //                 <div className="groupe-3020-jSOO73">
        //                     <div className="rectangle-3606-9PE78U"></div>
        //                     <div className="les-investissements-9PE78U lato-normal-white-12px-2">
        //                         <span className="span0-s0d0o6 lato-bold-white-12px">
        //                             Les investissements sont risqués.
        //                         </span>
        //                         <span className="span1-s0d0o6 lato-normal-white-12px">
        //                             Les investissements sont risqués par nature, les utilisateurs doivent faire leurs
        //                             propres recherches avant d’entreprendre toute action et n’investir que dans les
        //                             limites de leurs capacités financières. Cet article ne constitue pas un conseil en
        //                             investissement.
        //                         </span>
        //                     </div>
        //                 </div>
        //                 <img className="ligne-41-jSOO73" src="img/ligne-41-15@1x.png" />
        //             </div>
        //             <div className="footer-i4rvow">
        //                 <div className="background-qn57LN"></div>
        //                 <div className="menu-footer-qn57LN">
        //                     <div className="mentions-lgales-UYxhFz sourcesanspro-semi-bold-sonic-silver-14px">
        //                         Mentions légales
        //                     </div>
        //                     <div className="cgu-UYxhFz sourcesanspro-semi-bold-sonic-silver-14px">CGU</div>
        //                     <div className="cgv-UYxhFz sourcesanspro-semi-bold-sonic-silver-14px">CGV</div>
        //                     <div className="politique-de-confidentialit-UYxhFz sourcesanspro-semi-bold-sonic-silver-14px">
        //                         Politique de confidentialité
        //                     </div>
        //                     <div className="contact-UYxhFz sourcesanspro-semi-bold-sonic-silver-14px">Contact</div>
        //                 </div>
        //                 <div className="x2022-6-fire-invest-qn57LN sourcesanspro-semi-bold-gray-14px">
        //                     Ⓒ 2022 - 6FIRE INVEST
        //                 </div>
        //                 <div className="logo-qn57LN">
        //                     <div className="groupe-2-EHGxWS">
        //                         <img className="groupe-1-xcHicz" src="img/group-1-11@1x.png" />
        //                     </div>
        //                     <img className="effect-EHGxWS" src="img/effect-12@1x.png" />
        //                 </div>
        //                 <img className="ligne-31-qn57LN" src="img/ligne-31-14@1x.png" />
        //                 <div className="groupe-3011-qn57LN">
        //                     <img className="icon-instagram-WHmfJk" src="img/fontawsome--instagram--7@1x.png" />
        //                 </div>
        //                 <div className="groupe-3010-qn57LN">
        //                     <img className="icon-simple-tiktok-Osu8dK" src="img/icon-simple-tiktok-1@1x.png" />
        //                 </div>
        //                 <img className="icon-paper_plane-qn57LN" src="img/icon-awesome-telegram-plane-10@1x.png" />
        //             </div>
        //             <div className="header-i4rvow">
        //                 <div className="rectangle-3484-Fl0GWn"></div>
        //                 <div className="logo-Fl0GWn">
        //                     <img className="effect-abxaeW" src="img/effect-47@1x.png" />
        //                 </div>
        //                 <div className="toogle-button-Fl0GWn">
        //                     <img className="icon-ionic-ios-moon-mvrPB0" src="img/icon-ionic-ios-moon-20@1x.png" />
        //                     <div className="toogle-button-mvrPB0">
        //                         <div className="rectangle-3485-YqQekU"></div>
        //                         <div className="ellipse-17688-YqQekU"></div>
        //                     </div>
        //                 </div>
        //                 <div className="search-bar-Fl0GWn">
        //                     <img className="icon-search-muNowR" src="img/icon-ionic-ios-search-47@1x.png" />
        //                 </div>
        //                 <div className="rectangle-3607-Fl0GWn"></div>
        //                 <div className="menu-Fl0GWn">
        //                     <div className="icon-ionic-ios-menu-KwZCwP">
        //                         <img className="trac-1-42GKEC" src="img/path-1-10@1x.png" />
        //                         <img className="trac-2-42GKEC" src="img/path-2-10@1x.png" />
        //                     </div>
        //                 </div>
        //                 <div className="espace-trading-crypto-Fl0GWn">
        //                     <div className="formations-PJQRwq lato-normal-white-14px">Espace Trading &amp; Crypto</div>
        //                 </div>
        //             </div>
        //             <div className="background-i4rvow"></div>
        //             <div className="h1-i4rvow lato-bold-white-20px">Portefeuille Cryptomonnaies</div>
        //             <div className="date-i4rvow lato-normal-white-16px">Mis à jour le 25 mars 2022</div>
        //             <div className="groupe-3025-i4rvow">
        //                 <div className="bouton-affi-lnhvZx">
        //                     <div className="rectangle-8-GUzm2T"></div>
        //                     <img className="binance-svgrepo-com-GUzm2T" src="img/binance-svgrepo-com-4@1x.png" />
        //                     <div className="c-rer-un-compte-binance-GUzm2T roboto-bold-black-14px">
        //                         CRÉER UN COMPTE BINANCE
        //                     </div>
        //                     <img
        //                         className="icon-ionic-ios-arrow-round-forward-GUzm2T"
        //                         src="img/icon-ionic-ios-arrow-round-forward-10@1x.png"
        //                     />
        //                 </div>
        //             </div>
        //             <div className="cercle-i4rvow">
        //                 <div className="graph-3-jrwYKd">
        //                     <div className="oval-16-WPSpxa"></div>
        //                 </div>
        //                 <div className="graph-2-jrwYKd">
        //                     <img className="trac-1025-JINpAu" src="img/trac--1025-2@1x.png" />
        //                 </div>
        //                 <div className="graph-1-jrwYKd">
        //                     <img className="oval-15-cx02vp" src="img/oval-15-4@1x.png" />
        //                 </div>
        //                 <div className="graph-jrwYKd">
        //                     <img className="oval-15-kXKxbK" src="img/oval-15-5@1x.png" />
        //                 </div>
        //                 <div className="oval-16-jrwYKd"></div>
        //                 <img className="font-awsome-wallet-jrwYKd" src="img/fontawsome--wallet--4@1x.png" />
        //             </div>
        //             <div className="bar-crypto-icon-i4rvow">
        //                 <div className="rectangle-3566-QPYmWF border-1px-dove-gray"></div>
        //                 <div className="avax-QPYmWF">
        //                     <div className="avalanche-avax-logo-949jKd">
        //                         <div className="rectangle-3565-JMADFm"></div>
        //                         <img className="trac-1026-JMADFm" src="img/path-1026@1x.png" />
        //                     </div>
        //                     <div className="oval-16-949jKd border-2px-woodsmoke"></div>
        //                     <div className="club-premium-949jKd lato-bold-white-14px">Avax</div>
        //                     <div className="club-premium-gDtlt3 lato-normal-white-14px">15%</div>
        //                 </div>
        //                 <div className="avax-SzqRoZ">
        //                     <div className="club-premium-iNCU9c lato-bold-white-14px">Bitcoin</div>
        //                     <div className="club-premium-vx46hp lato-normal-white-14px">60%</div>
        //                     <div className="layer_x0020_1-iNCU9c">
        //                         <div className="x1421344023328-iBPxBo">
        //                             <img className="trac-1027-Kl1ZK2" src="img/trac--1027-1@1x.png" />
        //                             <img className="trac-1028-Kl1ZK2" src="img/path-1028@1x.png" />
        //                         </div>
        //                     </div>
        //                     <div className="oval-16-iNCU9c border-2px-woodsmoke-2"></div>
        //                 </div>
        //                 <div className="avax-JBw8iB">
        //                     <div className="avalanche-avax-logo-szX92g">
        //                         <div className="ellipse-17694-M3xVaQ"></div>
        //                         <div className="solana-sol-logo-M3xVaQ">
        //                             <img className="trac-1029-Vc6jUG" src="img/path-1029@1x.png" />
        //                             <img className="trac-1030-Vc6jUG" src="img/path-1030@1x.png" />
        //                             <img className="trac-1031-Vc6jUG" src="img/trac--1031-1@1x.png" />
        //                         </div>
        //                     </div>
        //                     <div className="oval-16-szX92g border-2px-woodsmoke-2"></div>
        //                     <div className="club-premium-szX92g lato-bold-white-14px">SOL</div>
        //                     <div className="club-premium-huTvGK lato-normal-white-14px">5%</div>
        //                 </div>
        //                 <div className="avax-0R1kkT">
        //                     <div className="avalanche-avax-logo-Yv9nmI">
        //                         <div className="ellipse-17694-kWCqea"></div>
        //                         <div className="layer_x0020_1-kWCqea">
        //                             <div className="x1421394342400-xwxorX">
        //                                 <div className="groupe-1509-CO9txP">
        //                                     <img className="trac-1032-W5OGJz" src="img/path-1032@1x.png" />
        //                                     <img className="trac-1033-W5OGJz" src="img/path-1033@1x.png" />
        //                                     <img className="trac-1034-W5OGJz" src="img/trac--1034-1@1x.png" />
        //                                     <img className="trac-1035-W5OGJz" src="img/path-1035@1x.png" />
        //                                     <img className="trac-1036-W5OGJz" src="img/path-1036@1x.png" />
        //                                     <img className="trac-1037-W5OGJz" src="img/path-1037@1x.png" />
        //                                 </div>
        //                             </div>
        //                         </div>
        //                     </div>
        //                     <div className="oval-16-Yv9nmI border-2px-woodsmoke"></div>
        //                     <div className="club-premium-Yv9nmI lato-bold-white-14px">ETH</div>
        //                     <div className="club-premium-SnAfAv lato-normal-white-14px">20%</div>
        //                 </div>
        //                 <div className="text_label-QPYmWF">€</div>
        //                 <div className="rectangle-3587-QPYmWF"></div>
        //                 <div className="rectangle-3588-QPYmWF border-1px-dove-gray"></div>
        //                 <div className="mon-capital-QPYmWF lato-normal-manatee-14px">Mon capital…</div>
        //             </div>
        //             <div className="historique-i4rvow">
        //                 <div className="rectangle-3567-c53V7q"></div>
        //                 <div className="fixe-c53V7q">
        //                     <img className="rectangle-3568-XmoMMT" src="img/rectangle-3568-2@1x.png" />
        //                     <div className="club-premium-XmoMMT lato-normal-manatee-12px">
        //                         Ceci n’est pas un conseil en investissement
        //                     </div>
        //                 </div>
        //                 <div className="club-premium-c53V7q lato-normal-white-14px-2">
        //                     <span className="span0-xtxV5Q lato-bold-white-14px">
        //                         Mise à jour du 25 mars 2022
        //                         <br />
        //                     </span>
        //                     <span className="span1-xtxV5Q lato-normal-white-14px">
        //                         <br />
        //                         J’ai déjà un bag dans l’ensemble des positions ci-dessous ! 💰
        //                         <br />
        //                         <br />
        //                         Explication :<br />
        //                         <br />- Pour 1Inch je vous laisse voir le token de la semaine est mon explication !
        //                         <br />
        //                         <br />- Je recharge un peu sur le BTC, car il drive le marché et je sortirai de cette
        //                         position BTC pour accumuler de l’ETH🔱
        //                         <br />
        //                         <br />- En parlant d’ETH, je recharge en permanence au moins 30 % de mon investissement
        //                         de la semaine dessus, car je pense qu’il va continuer de surperformer le marché
        //                         notamment avec l’arrivée de l’EIP 1559 !<br />
        //                         <br />- DOT a connu l’une des descentes les plus drastiques, mais les fondamentaux
        //                         restent ! Le Web 3.0 est l’avenir pour moi et Polkadot en est le leader pour ma part !
        //                         💻
        //                         <br />
        //                         <br />- Mirror Protocol : Pourquoi recharger assez massivement sur MIR ? MIR est un
        //                         protocole de peg asset ! C’est-à-dire que vous pouvez acheter des tokens qui sont liés à
        //                         une valeur. Exemple l’USDT est un peg asset de l’USD ! Mirror propose des actions
        //                         tokénisées comme Apple, Tesla, etc… Ainsi vous pouvez vous exposer au marché
        //                         classNameique sans quitter le monde des cryptos. Cela peut attirer beaucoup de monde et
        //                         Mirror en est l’un des pionniers et le seul à en faire son activité principale !
        //                         Prochainement, une explication complète sera disponible sur MIR ! 💸
        //                     </span>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
        <div>
            <input type="hidden" id="anPageName" name="page" value="homepage-1" />
            <Header isOpenSideBar={props.useStateOpenSideBar} isEspaceTradingCrypto={true} />
            <div className="article_wrapper">
                <div className="grid">
                    {/* single article */}
                    {/* {articles.map((article: Article) => ( */}
                    <div
                        // key={article.id}
                        onClick={() => {
                            // router.push({
                            //     pathname: '/articlesDetails',
                            //     query: {
                            //         articleId: article.id,
                            //         themeId: article.themeId,
                            //     },
                            // });
                            console.log('need to redirect to article details');
                        }}
                        className="single_article">
                        <div className="artitle_thum">
                            <Image layout="fill" src="/img/mask-group-321-2@1x.png" />
                        </div>
                        <div className="cat_and_date">
                            <div className="category">
                                <p className="lato-normal-milano-red-12px line">
                                    {/* {themes.map((theme: Theme) => {
                                            if (article.themeId === theme.id) {
                                                return theme.name;
                                            }
                                        })} */}
                                    {'here is the theme name'}
                                </p>
                                <p className="article_date lato-light-manatee-12px">
                                    {/* {convertDate(article.createdAt)} */}
                                    {'here is the date'}
                                </p>
                            </div>
                        </div>
                        <div className="article_title">
                            <h4 className="title">
                                {/* {article.title} */}
                                {'here is the title'}
                            </h4>
                        </div>
                    </div>
                    {/* ))} */}
                </div>
            </div>

            {/* <div className="call-to-action-58RGA4">
                <div className="groupe-de-masques-328-ir0Byo">
                    <Image layout="fill" src="/img/mask-group-328@1x.png" />
                </div>
                <div className="club-premium-ir0Byo lato-bold-white-18px">OFFRE TRADING</div>
                <div className="club-premium-LilIVz lato-normal-white-14px">+ Stratégies d’investissement</div>
                <div className="club-premium-rz44I0 lato-normal-white-14px">+ Canal privé Telegram</div>
                <div className="club-premium-xphxTL lato-normal-white-14px">+ Portefeuille Crypto</div>
                <div className="club-premium-VHjhEL lato-normal-white-14px">+ Alertes des meilleurs Traders</div>
                <div className="button-ir0Byo">
                    <div className="rectangle-3572-Vs6vPy"></div>
                    <div className="exclu-membre-confirm-Vs6vPy lato-bold-white-14px">Rejoindre</div>
                </div>
            </div> */}
            {/* <div className="avertissement-58RGA4">
                <div className="groupe-3020-yrWeSQ">
                    <div className="rectangle-3606-F1UxfM"></div>
                    <div className="les-investissements-F1UxfM lato-normal-white-12px-2">
                        <span className="span0-Y4VUvr lato-bold-white-12px">Les investissements sont risqués.</span>
                        <span className="span1-Y4VUvr lato-normal-white-12px">
                            Les investissements sont risqués par nature, les utilisateurs doivent faire leurs
                            propres recherches avant d’entreprendre toute action et n’investir que dans les limites
                            de leurs capacités financières. Cet article ne constitue pas un conseil en
                            investissement.
                        </span>
                    </div>
                </div>
                <div className="ligne-41-yrWeSQ">
                    <Image layout="fill" src="/img/line-41-2@1x.png" />
                </div>
            </div> */}

            <Footer />
        </div>
    );
};

export default TradingFormations;
// export default checkAuth(TradingFormations);
