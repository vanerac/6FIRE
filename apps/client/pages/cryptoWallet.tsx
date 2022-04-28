import type { NextPage } from 'next';
import Footer from './components/footer';
import Header from './components/header';
// import checkAuth from './components/checkAuth';
import { useEffect } from 'react';
import router from 'next/router';
import { useCookies } from 'react-cookie';
import getAPIClient from '@shared/tools/apiClient';

const CryptoWallet: NextPage = (props: any) => {
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
            <input type="hidden" id="anPageName" name="page" value="crypto-wallet" />
            <div className="crypto-wallet screen">
                <Header isOpenSideBar={props.useStateOpenSideBar} isEspaceTradingCrypto={false} />
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
                            <br />- Pour 1Inch je vous laisse voir le token de la semaine est mon explication !<br />
                            <br />- Je recharge un peu sur le BTC, car il drive le marché et je sortirai de cette
                            position BTC pour accumuler de l’ETH🔱
                            <br />
                            <br />- En parlant d’ETH, je recharge en permanence au moins 30 % de mon investissement de
                            la semaine dessus, car je pense qu’il va continuer de surperformer le marché notamment avec
                            l’arrivée de l’EIP 1559 !<br />
                            <br />- DOT a connu l’une des descentes les plus drastiques, mais les fondamentaux restent !
                            Le Web 3.0 est l’avenir pour moi et Polkadot en est le leader pour ma part ! 💻
                            <br />
                            <br />- Mirror Protocol : Pourquoi recharger assez massivement sur MIR ? MIR est un
                            protocole de peg asset ! C’est-à-dire que vous pouvez acheter des tokens qui sont liés à une
                            valeur. Exemple l’USDT est un peg asset de l’USD ! Mirror propose des actions tokénisées
                            comme Apple, Tesla, etc… Ainsi vous pouvez vous exposer au marché classNameique sans quitter
                            le monde des cryptos. Cela peut attirer beaucoup de monde et Mirror en est l’un des
                            pionniers et le seul à en faire son activité principale ! Prochainement, une explication
                            complète sera disponible sur MIR ! 💸
                        </span>
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
                            <span className="span0-xsDfvw lato-bold-white-12px">Les investissements sont risqués.</span>
                            <span className="span1-xsDfvw lato-normal-white-12px">
                                Les investissements sont risqués par nature, les utilisateurs doivent faire leurs
                                propres recherches avant d’entreprendre toute action et n’investir que dans les limites
                                de leurs capacités financières. Cet article ne constitue pas un conseil en
                                investissement.
                            </span>
                        </div>
                    </div>
                    <img className="ligne-41-0Hq04G" src="img/line-41-2@1x.png" />
                </div>
                <Footer />
            </div>
            <div className="crypto-wallet-mobile screen">
                <div className="avertissement-i4rvow">
                    <div className="groupe-3020-jSOO73">
                        <div className="rectangle-3606-9PE78U"></div>
                        <div className="les-investissements-9PE78U lato-normal-white-12px-2">
                            <span className="span0-s0d0o6 lato-bold-white-12px">Les investissements sont risqués.</span>
                            <span className="span1-s0d0o6 lato-normal-white-12px">
                                Les investissements sont risqués par nature, les utilisateurs doivent faire leurs
                                propres recherches avant d’entreprendre toute action et n’investir que dans les limites
                                de leurs capacités financières. Cet article ne constitue pas un conseil en
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
                            <br />- Pour 1Inch je vous laisse voir le token de la semaine est mon explication !<br />
                            <br />- Je recharge un peu sur le BTC, car il drive le marché et je sortirai de cette
                            position BTC pour accumuler de l’ETH🔱
                            <br />
                            <br />- En parlant d’ETH, je recharge en permanence au moins 30 % de mon investissement de
                            la semaine dessus, car je pense qu’il va continuer de surperformer le marché notamment avec
                            l’arrivée de l’EIP 1559 !<br />
                            <br />- DOT a connu l’une des descentes les plus drastiques, mais les fondamentaux restent !
                            Le Web 3.0 est l’avenir pour moi et Polkadot en est le leader pour ma part ! 💻
                            <br />
                            <br />- Mirror Protocol : Pourquoi recharger assez massivement sur MIR ? MIR est un
                            protocole de peg asset ! C’est-à-dire que vous pouvez acheter des tokens qui sont liés à une
                            valeur. Exemple l’USDT est un peg asset de l’USD ! Mirror propose des actions tokénisées
                            comme Apple, Tesla, etc… Ainsi vous pouvez vous exposer au marché classNameique sans quitter
                            le monde des cryptos. Cela peut attirer beaucoup de monde et Mirror en est l’un des
                            pionniers et le seul à en faire son activité principale ! Prochainement, une explication
                            complète sera disponible sur MIR ! 💸
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CryptoWallet;
// export default checkAuth(CryptoWallet);
