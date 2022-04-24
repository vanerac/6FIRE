import type { NextPage } from 'next';
import Image from 'next/image';
// import router from 'next/router';
import Footer from './components/footer';
import Header from './components/header';

const NotFoundPage: NextPage = (props: any) => {
    return (
        <div>
            <div className="not_found_page">
                <div>
                    <div className="logo">
                        <img src="/img/404.png" alt="" />
                        <p>Oups, la page que vous recherchez est introuvable</p>
                        <a href="#" className="primary-button">
                            <span>Retour à l’accueil</span> 
                            <div className="right-arrow"><img src="/img/icon/right-arrow.png" alt="" /></div>
                        </a>
                    </div>
                </div>
            </div>
            {/* <input type="hidden" id="anPageName" name="page" value="homepage-1" />
            <div className="homepage-1 screen">
                <Footer />
                <div style={{ height: 'calc(100% - 263px)' }} className="background-1CdAvu">
                    <div
                        className="lato-normal-white-12px"
                        style={{ color: '#fff', marginTop: '200px', marginLeft: '20%', marginRight: '20%' }}>
                        <h1>404 page coming soon</h1>
                    </div>
                </div>
                <Header isOpenSideBar={props.useStateOpenSideBar} isEspaceTradingCrypto={true} />
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
            </div> */}
            {/* <div className="homepage-1-mobile screen">
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

                <div className="rectangle-3607-3xxVvY"></div>
                <div className="groupe-3022-3xxVvY">
                    <div className="rectangle-3556-KtXvln"></div>
                    <div className="trading-KtXvln lato-bold-white-14px">Espace Trading &amp; Crypto</div>
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
            </div> */}
        </div>
    );
};

export default NotFoundPage;
