import type { NextPage } from 'next';
import Image from 'next/image';
import router from 'next/router';
import Header from './components/header';

const HomePage: NextPage = (props: any) => {
    console.log(props);
    return (
        <div>
            <input type="hidden" id="anPageName" name="page" value="homepage-1" />
            <div className="homepage-1 screen">
                <div className="footer-58RGA4">
                    <div className="background-oAP47k"></div>
                    <div className="menu-footer-oAP47k">
                        <div className="mentions-lgales-1x8gv1 sourcesanspro-semi-bold-sonic-silver-14px">
                            Mentions légales
                        </div>
                        <div className="cgu-1x8gv1 sourcesanspro-semi-bold-sonic-silver-14px">CGU</div>
                        <div className="cgv-1x8gv1 sourcesanspro-semi-bold-sonic-silver-14px">CGV</div>
                        <div className="politique-de-confidentialit-1x8gv1 sourcesanspro-semi-bold-sonic-silver-14px">
                            Politique de confidentialité
                        </div>
                        <div className="politique-de-confidentialit-svYU0K sourcesanspro-semi-bold-sonic-silver-14px">
                            Politique de confidentialité
                        </div>
                        <div className="contact-1x8gv1 sourcesanspro-semi-bold-sonic-silver-14px">Contact</div>
                    </div>
                    <div className="x2022-6-fire-invest-oAP47k sourcesanspro-semi-bold-gray-14px">
                        Ⓒ 2022 - 6FIRE INVEST
                    </div>
                    <div className="logo-oAP47k">
                        <div className="groupe-2-sl8fJD">
                            <div className="groupe-1-Im0Mvz">
                                <Image layout="fill" src="/img/group-1-11@1x.png" />
                            </div>
                        </div>
                        <div className="effect-sl8fJD">
                            <Image layout="fill" src="/img/effect-12@1x.png" />
                        </div>
                    </div>
                    <div className="ligne-31-oAP47k">
                        <Image layout="fill" src="/img/line-31-1@1x.png" />
                    </div>
                    <div className="groupe-3011-oAP47k">
                        <div className="icon-instagram-fzzB9m">
                            <Image layout="fill" src="/img/fontawsome--instagram--1@1x.png" />
                        </div>
                    </div>
                    <div className="groupe-3010-oAP47k">
                        <div className="icon-simple-tiktok-IkA9hE">
                            <Image layout="fill" src="/img/icon-simple-tiktok-1@1x.png" />
                        </div>
                    </div>
                </div>
                <div className="content-white-dark-58RGA4">
                    <div className="content-dark-LZQy1P">
                        <div className="background-1CdAvu"></div>
                        <div className="prvisualition-articles-1CdAvu">
                            <div className="article-zyelmY">
                                <div className="groupe-de-masques-321-QWNatB">
                                    <Image layout="fill" src="/img/mask-group-321-2@1x.png" />
                                </div>
                                <div className="club-premium-QWNatB lato-normal-milano-red-12px">Play to Earn</div>
                                <div className="ligne-12-QWNatB">
                                    <Image layout="fill" src="/img/line-12-1@1x.png" />
                                </div>
                                <div className="club-premium-UB0jqC lato-light-manatee-12px">Il y a 2 heures</div>
                                <div className="club-premium-isnvAk lato-bold-white-16px">
                                    Axie Infinity, jeu Play to Earn
                                </div>
                                <div className="rectangle-3498-QWNatB"></div>
                            </div>
                            <div className="article-imAGBk">
                                <div className="groupe-de-masques-322-GGqLgC">
                                    <Image layout="fill" src="/img/mask-group-322-2@1x.png" />
                                </div>
                                <div className="club-premium-GGqLgC lato-bold-white-16px">
                                    Les outils indispensable du Web
                                </div>
                                <div className="rectangle-3500-GGqLgC"></div>
                                <div className="club-premium-40xpS6 lato-normal-milano-red-12px">E-Commerce</div>
                                <div className="ligne-33-GGqLgC">
                                    <Image layout="fill" src="/img/line-12-1@1x.png" />
                                </div>
                                <div className="club-premium-BC63SN lato-light-manatee-12px">Il y a 2 heures</div>
                            </div>
                            <div onClick={() => router.push('/articlesDetails')} className="article-k5qTpB">
                                <div className="groupe-de-masques-323-XPBk3x">
                                    <Image layout="fill" src="/img/mask-group-323-1@1x.png" />
                                </div>
                                <div className="club-premium-XPBk3x lato-normal-grenadier-12px">Crypto</div>
                                <div className="ligne-14-XPBk3x">
                                    <Image layout="fill" src="/img/line-12-1@1x.png" />
                                </div>
                                <div className="club-premium-xQYAvx lato-light-manatee-12px">19 février 2022</div>
                                <div className="club-premium-jixj1x lato-bold-white-16px">
                                    Les 5 erreurs à éviter en crypto
                                </div>
                                <div className="rectangle-3501-XPBk3x"></div>
                            </div>
                            <div className="article-A8GUxd">
                                <div className="groupe-de-masques-324-oX14gz">
                                    <Image layout="fill" src="/img/mask-group-324-1@1x.png" />
                                </div>
                                <div className="club-premium-oX14gz lato-normal-milano-red-12px">Entreprenariat</div>
                                <div className="ligne-15-oX14gz">
                                    <Image layout="fill" src="/img/line-12-1@1x.png" />
                                </div>
                                <div className="club-premium-QxzBWG lato-light-manatee-12px">19 février 2022</div>
                                <div className="club-premium-q19juH lato-bold-white-16px">Comment se lancer ?</div>
                                <div className="icon-twitter-oX14gz">
                                    <Image layout="fill" src="/img/image-874-1@1x.png" />
                                </div>
                                <div className="rectangle-3502-oX14gz"></div>
                            </div>
                            <div className="article-5ppYHv">
                                <div className="groupe-de-masques-325-Q7nH9g">
                                    <Image layout="fill" src="/img/mask-group-325-1@1x.png" />
                                </div>
                                <div className="rectangle-3503-Q7nH9g"></div>
                                <div className="club-premium-Q7nH9g lato-normal-milano-red-12px">Crypto</div>
                                <div className="ligne-16-Q7nH9g">
                                    <Image layout="fill" src="/img/line-12-1@1x.png" />
                                </div>
                                <div className="club-premium-xQXcQW lato-light-manatee-12px">19 février 2022</div>
                                <div className="club-premium-pa96Fx lato-bold-white-16px">Se lancer dans les NFT</div>
                                <div className="rectangle-3499-Q7nH9g">
                                    <Image layout="fill" src="/img/rectangle-3499-1@1x.png" />
                                </div>
                                <div className="club-premium-w82bqh lato-bold-white-12px">EXCLU MEMBRE CONFIRMÉ</div>
                                <div className="ellipse-17689-Q7nH9g"></div>
                            </div>
                            <div className="article-GMoPzx">
                                <div className="groupe-de-masques-321-dNsLE7">
                                    <Image layout="fill" src="/img/mask-group-321-1@1x.png" />
                                </div>
                                <div className="club-premium-dNsLE7 lato-normal-milano-red-12px">Crypto</div>
                                <div className="ligne-12-dNsLE7">
                                    <Image layout="fill" src="/img/line-12-1@1x.png" />
                                </div>
                                <div className="club-premium-KsOUvA lato-light-manatee-12px">Il y a 2 heures</div>
                                <div className="club-premium-yaxpmE lato-bold-white-16px">
                                    Les cryptomonaies, par où commencer ?
                                </div>
                                <div className="rectangle-3498-dNsLE7"></div>
                            </div>
                            <div className="article-VRP5KA">
                                <div className="groupe-de-masques-322-xCffPl">
                                    <Image layout="fill" src="/img/mask-group-322-1@1x.png" />
                                </div>
                                <div className="club-premium-xCffPl lato-normal-milano-red-12px">Crypto</div>
                                <div className="ligne-13-xCffPl">
                                    <Image layout="fill" src="/img/line-12-1@1x.png" />
                                </div>
                                <div className="club-premium-nBAx3u lato-light-manatee-12px">19 février 2022</div>
                                <div className="club-premium-kYwWka lato-bold-white-16px">
                                    Pourquoi investir dans l’AVAX ?
                                </div>
                                <div className="rectangle-3500-xCffPl"></div>
                            </div>
                            <div className="article-WXQx0A">
                                <div className="groupe-de-masques-323-h1i8tL">
                                    <Image layout="fill" src="/img/mask-group-323-1@1x.png" />
                                </div>
                                <div className="club-premium-h1i8tL lato-normal-milano-red-12px">Crypto</div>
                                <div className="ligne-14-h1i8tL">
                                    <Image layout="fill" src="/img/line-12-1@1x.png" />
                                </div>
                                <div className="club-premium-WVKYgZ lato-light-manatee-12px">19 février 2022</div>
                                <div className="club-premium-D9nx5D lato-bold-white-16px">
                                    Les 5 erreurs à éviter en crypto
                                </div>
                                <div className="rectangle-3501-h1i8tL"></div>
                            </div>
                        </div>
                        <div className="button-signin-1CdAvu">
                            <div className="button-cration-de-compte-XhTuob">
                                <div className="rectangle-3470-j5JYNy border-1px-white"></div>
                                <div className="voir-plus-j5JYNy lato-normal-white-14px">Voir plus</div>
                            </div>
                            <div className="icon-ionic-ios-arrow-forward-XhTuob">
                                <Image layout="fill" src="/img/icon-ionic-ios-arrow-forward-2@1x.png" />
                            </div>
                        </div>
                    </div>
                </div>
                <Header isOpenSideBar={props.useStateOpenSideBar} isEspaceTradingCrypto={true}/>
                <div className="call-to-action-58RGA4">
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
                </div>
                <div className="avertissement-58RGA4">
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
                </div>
            </div>
            <div className="homepage-1-mobile screen">
                <div className="background-3xxVvY"></div>
                <div className="rectangle-3484-3xxVvY"></div>
                <div className="logo-3xxVvY">
                    <div className="effect-Xi5pKN">
                        <Image layout="fill" src="/img/effect-47@1x.png" />
                    </div>
                </div>
                <div className="toogle-button-3xxVvY">
                    <div className="icon-ionic-ios-moon-kRajWn">
                        <Image layout="fill" src="/img/icon-ionic-ios-moon-15@1x.png" />
                    </div>
                    <div className="toogle-button-kRajWn">
                        <div className="rectangle-3485-TYI7YQ"></div>
                        <div className="ellipse-17688-TYI7YQ"></div>
                    </div>
                </div>
                <div className="search-bar-3xxVvY">
                    <div className="icon-search-aHekTv">
                        <Image layout="fill" src="/img/icon-ionic-ios-search-27@1x.png" />
                    </div>
                </div>
                <div className="article-3xxVvY">
                    <div className="groupe-de-masques-321-6aK4Nx">
                        <Image layout="fill" src="/img/groupe-de-masques-321-16@1x.png" />
                    </div>
                    <div className="club-premium-6aK4Nx lato-normal-milano-red-12px">Play to Earn</div>
                    <div className="ligne-12-6aK4Nx">
                        <Image layout="fill" src="/img/line-12-1@1x.png" />
                    </div>
                    <div className="club-premium-AdQVNc lato-light-manatee-12px">Il y a 2 heures</div>
                    <div className="club-premium-srgAHF lato-bold-white-16px">Axie Infinity, jeu Play to Earn</div>
                    <div className="rectangle-3498-6aK4Nx"></div>
                </div>
                <div className="article-HB3jNP">
                    <div className="groupe-de-masques-322-bL8f3T">
                        <Image layout="fill" src="/img/groupe-de-masques-322-16@1x.png" />
                    </div>
                    <div className="club-premium-bL8f3T lato-bold-white-16px">Les outils indispensable du Web</div>
                    <div className="rectangle-3500-bL8f3T"></div>
                    <div className="club-premium-9dNwc1 lato-normal-milano-red-12px">E-Commerce</div>
                    <div className="ligne-33-bL8f3T">
                        <Image layout="fill" src="/img/line-12-1@1x.png" />
                    </div>
                    <div className="club-premium-AbUI9a lato-light-manatee-12px">Il y a 2 heures</div>
                </div>
                <div className="call-to-action-3xxVvY">
                    <div className="groupe-de-masques-328-VYlZcy">
                        <Image layout="fill" src="/img/groupe-de-masques-328-1@1x.png" />
                    </div>
                    <div className="club-premium-VYlZcy lato-bold-white-18px">OFFRE TRADING</div>
                    <div className="club-premium-ipNObk lato-normal-white-14px">+ Stratégies d’investissement</div>
                    <div className="club-premium-wdaF27 lato-normal-white-14px">+ Canal privé Telegram</div>
                    <div className="club-premium-2txrmb lato-normal-white-14px">+ Portefeuille Crypto</div>
                    <div className="club-premium-EGXdLl lato-normal-white-14px">+ Alertes des meilleurs Traders</div>
                    <div className="button-VYlZcy">
                        <div className="rectangle-3572-O2yoet"></div>
                        <div className="exclu-membre-confirm-O2yoet lato-bold-white-14px">Rejoindre</div>
                    </div>
                </div>
                <div className="rectangle-3607-3xxVvY"></div>
                <div className="groupe-3022-3xxVvY">
                    <div className="rectangle-3556-KtXvln"></div>
                    <div className="trading-KtXvln lato-bold-white-14px">Espace Trading &amp; Crypto</div>
                </div>
                <div className="article-hgxJDx">
                    <div className="groupe-de-masques-323-1oVcqO">
                        <Image layout="fill" src="/img/groupe-de-masques-323-16@1x.png" />
                    </div>
                    <div className="club-premium-1oVcqO lato-normal-grenadier-12px">Crypto</div>
                    <div className="ligne-14-1oVcqO">
                        <Image layout="fill" src="/img/line-12-1@1x.png" />
                    </div>
                    <div className="club-premium-CDsOPP lato-light-manatee-12px">19 février 2022</div>
                    <div className="club-premium-AmXdCd lato-bold-white-16px">Les 5 erreurs à éviter en crypto</div>
                    <div className="rectangle-3501-1oVcqO"></div>
                </div>
                <div className="article-H87bfg">
                    <div className="groupe-de-masques-324-nUO7eE">
                        <Image layout="fill" src="/img/groupe-de-masques-324-5@1x.png" />
                    </div>
                    <div className="club-premium-nUO7eE lato-normal-milano-red-12px">Entreprenariat</div>
                    <div className="ligne-15-nUO7eE">
                        <Image layout="fill" src="/img/line-12-1@1x.png" />
                    </div>
                    <div className="club-premium-52B3mx lato-light-manatee-12px">19 février 2022</div>
                    <div className="club-premium-U9Dfa0 lato-bold-white-16px">Comment se lancer ?</div>
                    <div className="icon-twitter-nUO7eE">
                        <Image layout="fill" src="/img/image-874-1@1x.png" />
                    </div>
                    <div className="rectangle-3502-nUO7eE"></div>
                </div>
                <div className="menu-3xxVvY">
                    <div className="icon-ionic-ios-menu-uexWkk">
                        <div className="trac-1-lDeg6M">
                            <Image layout="fill" src="/img/path-1-10@1x.png" />
                        </div>
                        <div className="trac-2-lDeg6M">
                            <Image layout="fill" src="/img/path-2-10@1x.png" />
                        </div>
                    </div>
                </div>
                <div className="article-DxJEuX">
                    <div className="groupe-de-masques-325-IdhFt5">
                        <Image layout="fill" src="/img/groupe-de-masques-325-3@1x.png" />
                    </div>
                    <div className="rectangle-3503-IdhFt5"></div>
                    <div className="club-premium-IdhFt5 lato-normal-milano-red-12px">Crypto</div>
                    <div className="ligne-16-IdhFt5">
                        <Image layout="fill" src="/img/line-12-1@1x.png" />
                    </div>
                    <div className="club-premium-eehegu lato-light-manatee-12px">19 février 2022</div>
                    <div className="club-premium-rjhF4x lato-bold-white-16px">Se lancer dans les NFT</div>
                    <div className="rectangle-3499-IdhFt5">
                        <Image layout="fill" src="/img/rectangle-3499-1@1x.png" />
                    </div>
                    <div className="club-premium-DCMF9N lato-bold-white-12px">EXCLU MEMBRE CONFIRMÉ</div>
                    <div className="ellipse-17689-IdhFt5"></div>
                </div>
                <div className="button-signin-3xxVvY">
                    <div className="button-cration-de-compte-QAxT4p">
                        <div className="rectangle-3470-xoDIjs border-1px-white"></div>
                        <div className="voir-plus-xoDIjs lato-normal-white-14px">Voir plus</div>
                    </div>
                    <div className="icon-ionic-ios-arrow-forward-QAxT4p">
                        <Image layout="fill" src="/img/icon-ionic-ios-arrow-forward-2@1x.png" />
                    </div>
                </div>
                <div className="avertissement-3xxVvY">
                    <div className="groupe-3020-ctGvHt">
                        <div className="rectangle-3606-t1RDCx"></div>
                        <div className="les-investissements-t1RDCx lato-normal-white-12px-2">
                            <span className="span0-48lpcF lato-bold-white-12px">Les investissements sont risqués.</span>
                            <span className="span1-48lpcF lato-normal-white-12px">
                                Les investissements sont risqués par nature, les utilisateurs doivent faire leurs
                                propres recherches avant d’entreprendre toute action et n’investir que dans les limites
                                de leurs capacités financières. Cet article ne constitue pas un conseil en
                                investissement.
                            </span>
                        </div>
                    </div>
                </div>
                <div className="footer-3xxVvY">
                    <div className="background-iBHDxC"></div>
                    <div className="menu-footer-iBHDxC">
                        <div className="mentions-lgales-kSaWP3 sourcesanspro-semi-bold-sonic-silver-14px">
                            Mentions légales
                        </div>
                        <div className="cgu-kSaWP3 sourcesanspro-semi-bold-sonic-silver-14px">CGU</div>
                        <div className="cgv-kSaWP3 sourcesanspro-semi-bold-sonic-silver-14px">CGV</div>
                        <div className="politique-de-confidentialit-kSaWP3 sourcesanspro-semi-bold-sonic-silver-14px">
                            Politique de confidentialité
                        </div>
                        <div className="contact-kSaWP3 sourcesanspro-semi-bold-sonic-silver-14px">Contact</div>
                    </div>
                    <div className="x2022-6-fire-invest-iBHDxC sourcesanspro-semi-bold-gray-14px">
                        Ⓒ 2022 - 6FIRE INVEST
                    </div>
                    <div className="logo-iBHDxC">
                        <div className="groupe-2-RxRKlm">
                            <div className="groupe-1-svM4hW">
                                <Image layout="fill" src="/img/group-1-11@1x.png" />
                            </div>
                        </div>
                        <div className="effect-RxRKlm">
                            <Image layout="fill" src="/img/effect-12@1x.png" />
                        </div>
                    </div>
                    <div className="ligne-31-iBHDxC">
                        <Image layout="fill" src="/img/ligne-31-14@1x.png" />
                    </div>
                    <div className="groupe-3011-iBHDxC">
                        <div className="icon-instagram-dU5Nvw">
                            <Image layout="fill" src="/img/fontawsome--instagram--1@1x.png" />
                        </div>
                    </div>
                    <div className="groupe-3010-iBHDxC">
                        <div className="icon-simple-tiktok-DfizfW">
                            <Image layout="fill" src="/img/icon-simple-tiktok-1@1x.png" />
                        </div>
                    </div>
                    <div className="icon-paper_plane-iBHDxC">
                        <Image layout="fill" src="/img/icon-awesome-telegram-plane-1@1x.png" />
                    </div>
                </div>
                <div className="ligne-41-3xxVvY">
                    <Image layout="fill" src="/img/ligne-41-15@1x.png" />
                </div>
            </div>
        </div>
    );
};

export default HomePage;
