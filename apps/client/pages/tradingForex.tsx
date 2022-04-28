import type { NextPage } from 'next';
import Footer from './components/footer';
import Header from './components/header';
// import checkAuth from './components/checkAuth';
import router from 'next/router';
import { useEffect } from 'react';
import Image from 'next/image';
import { useCookies } from 'react-cookie';
import getAPIClient from '@shared/tools/apiClient';

const TrafingForex: NextPage = (props: any) => {
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
        // <div>
        //     <input type="hidden" id="anPageName" name="page" value="trading-forex" />
        //     <div className="trading-forex screen">
        //         <Header isOpenSideBar={props.useStateOpenSideBar} isEspaceTradingCrypto={false} />
        //         <div className="background-GY9xoT"></div>
        //         <div className="article-GY9xoT hidden">
        //             <img className="groupe-de-masques-324-6ArdAu" src="img/mask-group-324-2@1x.png" />
        //             <div className="club-premium-6ArdAu lato-normal-grenadier-14px">Crypto</div>
        //             <img className="ligne-15-6ArdAu" src="img/line-15-2@1x.png" />
        //             <div className="club-premium-tCFXiL lato-light-manatee-14px">19 février 2022</div>
        //             <div className="club-premium-3KmkC2 lato-bold-white-16px">Twitter ajoute l’option Ethereum</div>
        //             <img className="icon-twitter-6ArdAu" src="img/image-874-1@1x.png" />
        //             <div className="rectangle-3502-6ArdAu"></div>
        //         </div>
        //         <div className="prvisualisation-articles-GY9xoT">
        //             <div className="article-vOxpDG">
        //                 <img className="groupe-de-masques-321-o2OUYT" src="img/mask-group-321-1@1x.png" />
        //                 <div className="club-premium-o2OUYT lato-normal-milano-red-12px">Crypto</div>
        //                 <img className="ligne-12-o2OUYT" src="img/line-12-1@1x.png" />
        //                 <div className="club-premium-bHcEox lato-light-manatee-12px">Il y a 2 heures</div>
        //                 <div className="club-premium-SZGDvm lato-bold-white-16px">
        //                     Les cryptomonaies, par où commencer ?
        //                 </div>
        //                 <div className="rectangle-3498-o2OUYT"></div>
        //             </div>
        //             <div className="article-ZpuHyM">
        //                 <img className="groupe-de-masques-322-Taicq0" src="img/mask-group-322-1@1x.png" />
        //                 <div className="club-premium-Taicq0 lato-normal-milano-red-12px">Crypto</div>
        //                 <img className="ligne-13-Taicq0" src="img/line-12-1@1x.png" />
        //                 <div className="club-premium-Vn6yTd lato-light-manatee-12px">19 février 2022</div>
        //                 <div className="club-premium-KTr35q lato-bold-white-16px">Pourquoi investir dans l’AVAX ?</div>
        //                 <div className="rectangle-3500-Taicq0"></div>
        //             </div>
        //             <div className="article-x4Fbci">
        //                 <img className="groupe-de-masques-323-kxPs2c" src="img/mask-group-323-1@1x.png" />
        //                 <div className="club-premium-kxPs2c lato-normal-milano-red-12px">Crypto</div>
        //                 <img className="ligne-14-kxPs2c" src="img/line-12-1@1x.png" />
        //                 <div className="club-premium-0S8pSy lato-light-manatee-12px">19 février 2022</div>
        //                 <div className="club-premium-GdMLg7 lato-bold-white-16px">Les 5 erreurs à éviter en crypto</div>
        //                 <div className="rectangle-3501-kxPs2c"></div>
        //             </div>
        //             <div className="article-paFDq8">
        //                 <img className="groupe-de-masques-321-OQJ0bC" src="img/mask-group-321-1@1x.png" />
        //                 <div className="club-premium-OQJ0bC lato-normal-milano-red-12px">Crypto</div>
        //                 <img className="ligne-12-OQJ0bC" src="img/line-12-1@1x.png" />
        //                 <div className="club-premium-8flXgU lato-light-manatee-12px">Il y a 2 heures</div>
        //                 <div className="club-premium-da8PLc lato-bold-white-16px">
        //                     Les cryptomonaies, par où commencer ?
        //                 </div>
        //                 <div className="rectangle-3498-OQJ0bC"></div>
        //             </div>
        //             <div className="article-x5pMpk">
        //                 <img className="groupe-de-masques-322-Dh6k4h" src="img/mask-group-322-1@1x.png" />
        //                 <div className="club-premium-Dh6k4h lato-normal-milano-red-12px">Crypto</div>
        //                 <img className="ligne-13-Dh6k4h" src="img/line-12-1@1x.png" />
        //                 <div className="club-premium-d6wup0 lato-light-manatee-12px">19 février 2022</div>
        //                 <div className="club-premium-K2xskp lato-bold-white-16px">Pourquoi investir dans l’AVAX ?</div>
        //                 <div className="rectangle-3500-Dh6k4h"></div>
        //             </div>
        //             <div className="article-FMStxK">
        //                 <img className="groupe-de-masques-323-StJoNQ" src="img/mask-group-323-1@1x.png" />
        //                 <div className="club-premium-StJoNQ lato-normal-milano-red-12px">Crypto</div>
        //                 <img className="ligne-14-StJoNQ" src="img/line-12-1@1x.png" />
        //                 <div className="club-premium-1jkg4V lato-light-manatee-12px">19 février 2022</div>
        //                 <div className="club-premium-mEKac7 lato-bold-white-16px">Les 5 erreurs à éviter en crypto</div>
        //                 <div className="rectangle-3501-StJoNQ"></div>
        //             </div>
        //             <div className="article-8vawgc">
        //                 <img className="groupe-de-masques-321-EW2Mvz" src="img/mask-group-321-1@1x.png" />
        //                 <div className="club-premium-EW2Mvz lato-normal-milano-red-12px">Crypto</div>
        //                 <img className="ligne-12-EW2Mvz" src="img/line-12-1@1x.png" />
        //                 <div className="club-premium-xifxod lato-light-manatee-12px">Il y a 2 heures</div>
        //                 <div className="club-premium-hglxwj lato-bold-white-16px">
        //                     Les cryptomonaies, par où commencer ?
        //                 </div>
        //                 <div className="rectangle-3498-EW2Mvz"></div>
        //             </div>
        //             <div className="article-xIPdub">
        //                 <img className="groupe-de-masques-322-z6xHMK" src="img/mask-group-322-1@1x.png" />
        //                 <div className="club-premium-z6xHMK lato-normal-milano-red-12px">Crypto</div>
        //                 <img className="ligne-13-z6xHMK" src="img/line-12-1@1x.png" />
        //                 <div className="club-premium-32RTZk lato-light-manatee-12px">19 février 2022</div>
        //                 <div className="club-premium-9UEivZ lato-bold-white-16px">Pourquoi investir dans l’AVAX ?</div>
        //                 <div className="rectangle-3500-z6xHMK"></div>
        //             </div>
        //             <div className="article-qEDcz1">
        //                 <img className="groupe-de-masques-323-AhDR5W" src="img/mask-group-323-1@1x.png" />
        //                 <div className="club-premium-AhDR5W lato-normal-milano-red-12px">Crypto</div>
        //                 <img className="ligne-14-AhDR5W" src="img/line-12-1@1x.png" />
        //                 <div className="club-premium-9laQ3D lato-light-manatee-12px">19 février 2022</div>
        //                 <div className="club-premium-T2DF3C lato-bold-white-16px">Les 5 erreurs à éviter en crypto</div>
        //                 <div className="rectangle-3501-AhDR5W"></div>
        //             </div>
        //         </div>
        //         <div className="button-signin-GY9xoT">
        //             <div className="button-cration-de-compte-CK2ejX">
        //                 <div className="rectangle-3470-tMZS2c border-1px-white"></div>
        //                 <div className="voir-plus-tMZS2c lato-normal-white-14px">Voir plus</div>
        //             </div>
        //             <img
        //                 className="icon-ionic-ios-arrow-forward-CK2ejX"
        //                 src="img/icon-ionic-ios-arrow-forward-2@1x.png"
        //             />
        //         </div>
        //         <div className="avertissement-GY9xoT">
        //             <div className="groupe-3020-pKxBil">
        //                 <div className="rectangle-3606-HCOteM"></div>
        //                 <div className="les-investissements-HCOteM lato-normal-white-12px-2">
        //                     <span className="span0-3FIxFe lato-bold-white-12px">Les investissements sont risqués.</span>
        //                     <span className="span1-3FIxFe lato-normal-white-12px">
        //                         Les investissements sont risqués par nature, les utilisateurs doivent faire leurs
        //                         propres recherches avant d’entreprendre toute action et n’investir que dans les limites
        //                         de leurs capacités financières. Cet article ne constitue pas un conseil en
        //                         investissement.
        //                     </span>
        //                 </div>
        //             </div>
        //             <img className="ligne-41-pKxBil" src="img/line-41-2@1x.png" />
        //         </div>
        //         <Footer />
        //     </div>
        //     <div className="trading-forex-mobile screen">
        //         <div className="background-B8d21u"></div>
        //         <div className="article-B8d21u">
        //             <img className="groupe-de-masques-321-IG8Jsa" src="img/groupe-de-masques-321-16@1x.png" />
        //             <div className="club-premium-IG8Jsa lato-normal-milano-red-12px">Play to Earn</div>
        //             <img className="ligne-12-IG8Jsa" src="img/line-12-1@1x.png" />
        //             <div className="club-premium-UBQ6eC lato-light-manatee-12px">Il y a 2 heures</div>
        //             <div className="club-premium-rCYbHX lato-bold-white-16px">Axie Infinity, jeu Play to Earn</div>
        //             <div className="rectangle-3498-IG8Jsa"></div>
        //         </div>
        //         <div className="article-kIt21l">
        //             <img className="groupe-de-masques-322-1KECiX" src="img/groupe-de-masques-322-16@1x.png" />
        //             <div className="club-premium-1KECiX lato-bold-white-16px">Les outils indispensable du Web</div>
        //             <div className="rectangle-3500-1KECiX"></div>
        //             <div className="club-premium-DYYkNr lato-normal-milano-red-12px">E-Commerce</div>
        //             <img className="ligne-33-1KECiX" src="img/line-12-1@1x.png" />
        //             <div className="club-premium-03IkES lato-light-manatee-12px">Il y a 2 heures</div>
        //         </div>
        //         <div className="article-RkF1mW">
        //             <img className="groupe-de-masques-323-ehZ9JJ" src="img/groupe-de-masques-323-16@1x.png" />
        //             <div className="club-premium-ehZ9JJ lato-normal-grenadier-12px">Crypto</div>
        //             <img className="ligne-14-ehZ9JJ" src="img/line-12-1@1x.png" />
        //             <div className="club-premium-xiyzvd lato-light-manatee-12px">19 février 2022</div>
        //             <div className="club-premium-K1OSlh lato-bold-white-16px">Les 5 erreurs à éviter en crypto</div>
        //             <div className="rectangle-3501-ehZ9JJ"></div>
        //         </div>
        //         <div className="article-hNiITB">
        //             <img className="groupe-de-masques-324-hqzGZO" src="img/groupe-de-masques-324-5@1x.png" />
        //             <div className="club-premium-hqzGZO lato-normal-milano-red-12px">Entreprenariat</div>
        //             <img className="ligne-15-hqzGZO" src="img/line-12-1@1x.png" />
        //             <div className="club-premium-bk2xF5 lato-light-manatee-12px">19 février 2022</div>
        //             <div className="club-premium-a0YJpM lato-bold-white-16px">Comment se lancer ?</div>
        //             <img className="icon-twitter-hqzGZO" src="img/image-874-1@1x.png" />
        //             <div className="rectangle-3502-hqzGZO"></div>
        //         </div>
        //         <div className="avertissement-B8d21u">
        //             <div className="groupe-3020-ziEuQM">
        //                 <div className="rectangle-3606-2p2nox"></div>
        //                 <div className="les-investissements-2p2nox lato-normal-white-12px-2">
        //                     <span className="span0-0Jrzz3 lato-bold-white-12px">Les investissements sont risqués.</span>
        //                     <span className="span1-0Jrzz3 lato-normal-white-12px">
        //                         Les investissements sont risqués par nature, les utilisateurs doivent faire leurs
        //                         propres recherches avant d’entreprendre toute action et n’investir que dans les limites
        //                         de leurs capacités financières. Cet article ne constitue pas un conseil en
        //                         investissement.
        //                     </span>
        //                 </div>
        //             </div>
        //             <img className="ligne-41-ziEuQM" src="img/ligne-41-15@1x.png" />
        //         </div>
        //         <div className="footer-B8d21u">
        //             <div className="background-LP3m4M"></div>
        //             <div className="menu-footer-LP3m4M">
        //                 <div className="mentions-lgales-I0HR4b sourcesanspro-semi-bold-sonic-silver-14px">
        //                     Mentions légales
        //                 </div>
        //                 <div className="cgu-I0HR4b sourcesanspro-semi-bold-sonic-silver-14px">CGU</div>
        //                 <div className="cgv-I0HR4b sourcesanspro-semi-bold-sonic-silver-14px">CGV</div>
        //                 <div className="politique-de-confidentialit-I0HR4b sourcesanspro-semi-bold-sonic-silver-14px">
        //                     Politique de confidentialité
        //                 </div>
        //                 <div className="contact-I0HR4b sourcesanspro-semi-bold-sonic-silver-14px">Contact</div>
        //             </div>
        //             <div className="x2022-6-fire-invest-LP3m4M sourcesanspro-semi-bold-gray-14px">
        //                 Ⓒ 2022 - 6FIRE INVEST
        //             </div>
        //             <div className="logo-LP3m4M">
        //                 <div className="groupe-2-w6XbMr">
        //                     <img className="groupe-1-Wq9uCr" src="img/group-1-7-1x-png@1x.png" />
        //                 </div>
        //                 <img className="effect-w6XbMr" src="img/effect-12@1x.png" />
        //             </div>
        //             <img className="ligne-31-LP3m4M" src="img/ligne-31-14@1x.png" />
        //             <div className="groupe-3011-LP3m4M">
        //                 <img className="icon-instagram-3LZ4IB" src="img/fontawsome--instagram--1@1x.png" />
        //             </div>
        //             <div className="groupe-3010-LP3m4M">
        //                 <img className="icon-simple-tiktok-xxTQwN" src="img/icon-simple-tiktok-1@1x.png" />
        //             </div>
        //             <img className="icon-paper_plane-LP3m4M" src="img/icon-awesome-telegram-plane-1@1x.png" />
        //         </div>
        //         <div className="header-B8d21u">
        //             <div className="rectangle-3484-iFw9sa"></div>
        //             <div className="logo-iFw9sa">
        //                 <img className="effect-8j36hR" src="img/effect-47@1x.png" />
        //             </div>
        //             <div className="toogle-button-iFw9sa">
        //                 <img className="icon-ionic-ios-moon-ubf6zL" src="img/icon-ionic-ios-moon-20@1x.png" />
        //                 <div className="toogle-button-ubf6zL">
        //                     <div className="rectangle-3485-Vzdjy0"></div>
        //                     <div className="ellipse-17688-Vzdjy0"></div>
        //                 </div>
        //             </div>
        //             <div className="search-bar-iFw9sa">
        //                 <img className="icon-search-m6F9CI" src="img/icon-ionic-ios-search-27@1x.png" />
        //             </div>
        //             <div className="rectangle-3607-iFw9sa"></div>
        //             <div className="menu-iFw9sa">
        //                 <div className="icon-ionic-ios-menu-xAe6PG">
        //                     <img className="trac-1-lycP8C" src="img/path-1-10@1x.png" />
        //                     <img className="trac-2-lycP8C" src="img/path-2-10@1x.png" />
        //                 </div>
        //             </div>
        //             <div className="espace-trading-crypto-iFw9sa">
        //                 <div className="formations-Tl7rzh lato-normal-white-14px">Espace Trading &amp; Crypto</div>
        //             </div>
        //         </div>
        //         <div className="article-UWD1S0">
        //             <img className="groupe-de-masques-324-lP6bgW" src="img/groupe-de-masques-324-5@1x.png" />
        //             <div className="club-premium-lP6bgW lato-normal-milano-red-12px">Entreprenariat</div>
        //             <img className="ligne-15-lP6bgW" src="img/line-12-1@1x.png" />
        //             <div className="club-premium-ZW6aZP lato-light-manatee-12px">19 février 2022</div>
        //             <div className="club-premium-6iMolW lato-bold-white-16px">Comment se lancer ?</div>
        //             <img className="icon-twitter-lP6bgW" src="img/image-874-1@1x.png" />
        //             <div className="rectangle-3502-lP6bgW"></div>
        //         </div>
        //         <div className="article-QlHGIm">
        //             <img className="groupe-de-masques-323-Y5Aele" src="img/groupe-de-masques-323-16@1x.png" />
        //             <div className="club-premium-Y5Aele lato-normal-grenadier-12px">Crypto</div>
        //             <img className="ligne-14-Y5Aele" src="img/line-12-1@1x.png" />
        //             <div className="club-premium-hkxUaO lato-light-manatee-12px">19 février 2022</div>
        //             <div className="club-premium-RAs8p8 lato-bold-white-16px">Les 5 erreurs à éviter en crypto</div>
        //             <div className="rectangle-3501-Y5Aele"></div>
        //         </div>
        //         <div className="button-signin-B8d21u">
        //             <div className="button-cration-de-compte-92VH7M">
        //                 <div className="rectangle-3470-leu5ok border-1px-white"></div>
        //                 <div className="voir-plus-leu5ok lato-normal-white-14px">Voir plus</div>
        //             </div>
        //             <img
        //                 className="icon-ionic-ios-arrow-forward-92VH7M"
        //                 src="img/icon-ionic-ios-arrow-forward-2@1x.png"
        //             />
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
            <Footer />
        </div>
    );
};

export default TrafingForex;
// export default checkAuth(TrafingForex);
