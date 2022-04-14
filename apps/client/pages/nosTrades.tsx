import type { NextPage } from 'next';

const NosTrades: NextPage = () => {
    return (
        <body style={{ margin: 0 }}>
            <input type="hidden" id="anPageName" name="page" value="nos-trades" />
            <div
                className="nos-trades screen"
                // onclick="window.open('javascript:history.back()', '_self');"
            >
                <div className="background-kCjjkp"></div>
                <div className="footer-kCjjkp">
                    <div className="background-WTxHBw"></div>
                    <div className="menu-footer-WTxHBw">
                        <div className="mentions-lgales-3zsThR sourcesanspro-semi-bold-sonic-silver-14px">
                            Mentions légales
                        </div>
                        <div className="cgu-3zsThR sourcesanspro-semi-bold-sonic-silver-14px">CGU</div>
                        <div className="cgv-3zsThR sourcesanspro-semi-bold-sonic-silver-14px">CGV</div>
                        <div className="politique-de-confidentialit-3zsThR sourcesanspro-semi-bold-sonic-silver-14px">
                            Politique de confidentialité
                        </div>
                        <div className="politique-de-confidentialit-kGOUce sourcesanspro-semi-bold-sonic-silver-14px">
                            Politique de confidentialité
                        </div>
                        <div className="contact-3zsThR sourcesanspro-semi-bold-sonic-silver-14px">Contact</div>
                    </div>
                    <div className="x2022-6-fire-invest-WTxHBw sourcesanspro-semi-bold-gray-14px">
                        Ⓒ 2022 - 6FIRE INVEST
                    </div>
                    <div className="logo-WTxHBw">
                        <div className="groupe-2-o3c6f2">
                            <img className="groupe-1-b2PYR3" src="img/group-1-11@1x.png" />
                        </div>
                        <img className="effect-o3c6f2" src="img/effect-12@1x.png" />
                    </div>
                    <img className="ligne-31-WTxHBw" src="img/line-31-1@1x.png" />
                    <div className="groupe-3011-WTxHBw">
                        <img className="icon-instagram-qHYfna" src="img/fontawsome--instagram--7@1x.png" />
                    </div>
                    <div className="groupe-3010-WTxHBw">
                        <img className="icon-simple-tiktok-VcGkLM" src="img/icon-simple-tiktok-1@1x.png" />
                    </div>
                </div>
                {/* <div className="header-kCjjkp">
                    <div className="rectangle-3483-1LFFtq"></div>
                    <div className="logo-1LFFtq">
                        <img className="effect-g88I8b" src="img/effect-13@1x.png" />
                    </div>
                    <div className="thme-sombre-1LFFtq">
                        <img className="icon-ionic-ios-moon-v1oxaV" src="img/icon-ionic-ios-moon-7@1x.png" />
                        <div className="toogle-button-v1oxaV">
                            <div className="rectangle-3485-K7FBta"></div>
                            <div className="ellipse-17688-K7FBta"></div>
                        </div>
                    </div>
                    <div className="menu-1LFFtq">
                        <div className="rectangle-3484-7BBE5X"></div>
                        <div className="espace-trading-crypto-7BBE5X">
                            <div className="formations-OHaYLu lato-normal-white-14px">Espace Trading &amp; Crypto</div>
                        </div>
                        <a
                            href="trading-formations.html"
                            // onclick="window.event.stopPropagation()"
                        >
                            <div className="formations-7BBE5X">
                                <div className="formations-2oasNW lato-normal-white-14px">Formations</div>
                                <div className="icon-actif-2oasNW">
                                    <div className="ellipse-17693-fiT2xd"></div>
                                    <img
                                        className="font-awsome-graduation-cap-fiT2xd"
                                        src="img/fontawsome--graduation-cap--3@1x.png"
                                    />
                                </div>
                            </div>
                        </a>
                        <div className="forex-7BBE5X">
                            <div className="formations-DGZWGl lato-normal-white-14px">Forex</div>
                            <div className="icon-actif-DGZWGl">
                                <div className="ellipse-17693-x8zRLV"></div>
                                <img
                                    className="font-awsome-dollar-sign-x8zRLV"
                                    src="img/fontawsome--dollar-sign--2@1x.png"
                                />
                            </div>
                        </div>
                        <div className="crypto-wallet-7BBE5X">
                            <div className="formations-3VWF6Y lato-normal-white-14px">Crypto Wallet</div>
                            <div className="icon-actif-3VWF6Y">
                                <div className="ellipse-17693-Maotxw"></div>
                                <img className="font-awsome-wallet-Maotxw" src="img/fontawsome--wallet--2@1x.png" />
                            </div>
                        </div>
                        <div className="bot-trading-7BBE5X">
                            <div className="formations-PPydfz lato-normal-white-14px">Bot Trading</div>
                            <div className="icon-actif-PPydfz">
                                <div className="ellipse-17693-1z4n4Z"></div>
                                <img className="icon-awesome-robot-1z4n4Z" src="img/icon-awesome-robot-2@1x.png" />
                            </div>
                        </div>
                        <div className="trading-7BBE5X">
                            <div className="rectangle-3556-uyyFGK"></div>
                            <div className="trading-uyyFGK lato-bold-white-14px">Nos trades</div>
                            <div className="icon-actif-uyyFGK">
                                <div className="ellipse-17693-XITx4I"></div>
                                <img
                                    className="icon-simple-graphcool-XITx4I"
                                    src="img/icon-simple-graphcool-2@1x.png"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="espace-membre-1LFFtq">
                        <div className="connexion-iuHSqU">
                            <div className="club-premium-78Vfwm lato-normal-white-14px">Mon compte</div>
                        </div>
                    </div>
                    <div className="menu-2-1LFFtq">
                        <div className="icon-ionic-ios-menu-kKaJtG">
                            <img className="trac-1-UrtSQL" src="img/path-1-10@1x.png" />
                            <img className="trac-2-UrtSQL" src="img/path-2-10@1x.png" />
                        </div>
                    </div>
                    <div className="search-bar-1LFFtq">
                        <img className="icon-search-tsS3Eo" src="img/icon-ionic-ios-search-13@1x.png" />
                    </div>
                </div> */}
                <div className="background-DslP8q"></div>
                <div className="club-premium-kCjjkp lato-bold-white-16px">REJOIGNEZ NOTRE CANAL PRIVÉ TELEGRAM</div>
                <div className="club-premium-DslP8q lato-normal-white-14px">
                    L’équipe de 6FIRE INVEST utilise un outil d’analyse particulier lui permettant de prendre des
                    dizaines de trades sur les marchés financiers classNameiques et crypto. <br />
                    Nous prenons des positions court et long terme, selon les tendances de marchés.
                </div>
                <div className="button-cration-de-compte-kCjjkp">
                    <div className="rectangle-3470-mXV13V"></div>
                    <div className="support-telegram-mXV13V lato-bold-white-14px">Support Telegram</div>
                    <img className="icon-awesome-telegram-mXV13V" src="img/icon-awesome-telegram-1@1x.png" />
                </div>
                <div className="button-cration-de-compte-DslP8q">
                    <img className="trac-1041-ZEscP5" src="img/path-1041-1@1x.png" />
                    <div className="support-whats-app-ZEscP5 lato-bold-white-14px">Support WhatsApp</div>
                    <img className="icon-ionic-logo-whatsapp-ZEscP5" src="img/icon-ionic-logo-whatsapp-1@1x.png" />
                </div>
                <img className="img_0-b6-ced63-dd0-f-1-kCjjkp" src="img/img-0b6ced63dd0f-1@1x.png" />
                <div className="club-premium-hR8D7z lato-bold-white-16px">
                    CONTACTEZ NOUS POUR REJOINDRE LE CANAL PRIVÉ
                </div>
                <img className="icon-ionic-ios-arrow-down-kCjjkp" src="img/icon-ionic-ios-arrow-down@1x.png" />
                <div className="avertissement-kCjjkp">
                    <div className="groupe-3020-yUOFAt">
                        <div className="rectangle-3606-Qv6TZF"></div>
                        <div className="les-investissements-Qv6TZF lato-normal-white-12px-2">
                            <span className="span0-mZjxLD lato-bold-white-12px">Les investissements sont risqués.</span>
                            <span className="span1-mZjxLD lato-normal-white-12px">
                                Les investissements sont risqués par nature, les utilisateurs doivent faire leurs
                                propres recherches avant d’entreprendre toute action et n’investir que dans les limites
                                de leurs capacités financières. Cet article ne constitue pas un conseil en
                                investissement.
                            </span>
                        </div>
                    </div>
                    <img className="ligne-41-yUOFAt" src="img/line-41-2@1x.png" />
                </div>
                <div className="club-premium-ywKi5n lato-normal-white-14px">
                    Vous pouvez retrouver notre outil d’analyse dans nos vidéos TikTok, dans notre canal Telegram et
                    dans nos stories Instagram. Cependant pour voir nos décisions, nos positions et surtout nos Trades,
                    il faut rejoindre le canal privé Telegram des membres confirmés.
                </div>
                <div className="club-premium-YxxGbq lato-normal-white-14px">
                    Vous aurez accès à toutes nos positions crypto &amp; forex en temps réel, nos points d’entrés, de
                    sortis, nos analyses et notre stratégie.
                </div>
            </div>
            <div className="nos-trades-mobile screen">
                <div className="avertissement-rYj0qk">
                    <div className="groupe-3020-52LYc4">
                        <div className="rectangle-3606-w7Ol80"></div>
                        <div className="les-investissements-w7Ol80 lato-normal-white-12px-2">
                            <span className="span0-qYN3dR lato-bold-white-12px">Les investissements sont risqués.</span>
                            <span className="span1-qYN3dR lato-normal-white-12px">
                                Les investissements sont risqués par nature, les utilisateurs doivent faire leurs
                                propres recherches avant d’entreprendre toute action et n’investir que dans les limites
                                de leurs capacités financières. Cet article ne constitue pas un conseil en
                                investissement.
                            </span>
                        </div>
                    </div>
                    <img className="ligne-41-52LYc4" src="img/ligne-41-15@1x.png" />
                </div>
                <div className="footer-rYj0qk">
                    <div className="background-rjIifx"></div>
                    <div className="menu-footer-rjIifx">
                        <div className="mentions-lgales-9U2x43 sourcesanspro-semi-bold-sonic-silver-14px">
                            Mentions légales
                        </div>
                        <div className="cgu-9U2x43 sourcesanspro-semi-bold-sonic-silver-14px">CGU</div>
                        <div className="cgv-9U2x43 sourcesanspro-semi-bold-sonic-silver-14px">CGV</div>
                        <div className="politique-de-confidentialit-9U2x43 sourcesanspro-semi-bold-sonic-silver-14px">
                            Politique de confidentialité
                        </div>
                        <div className="contact-9U2x43 sourcesanspro-semi-bold-sonic-silver-14px">Contact</div>
                    </div>
                    <div className="x2022-6-fire-invest-rjIifx sourcesanspro-semi-bold-gray-14px">
                        Ⓒ 2022 - 6FIRE INVEST
                    </div>
                    <div className="logo-rjIifx">
                        <div className="groupe-2-T2wxQu">
                            <img className="groupe-1-UX29cx" src="img/group-1-11@1x.png" />
                        </div>
                        <img className="effect-T2wxQu" src="img/effect-12@1x.png" />
                    </div>
                    <img className="ligne-31-rjIifx" src="img/ligne-31-14@1x.png" />
                    <div className="groupe-3011-rjIifx">
                        <img className="icon-instagram-OFk1iw" src="img/fontawsome--instagram--7@1x.png" />
                    </div>
                    <div className="groupe-3010-rjIifx">
                        <img className="icon-simple-tiktok-JxqPYV" src="img/icon-simple-tiktok-1@1x.png" />
                    </div>
                    <img className="icon-paper_plane-rjIifx" src="img/icon-awesome-telegram-plane-10@1x.png" />
                </div>
                <div className="header-rYj0qk">
                    <div className="rectangle-3484-aIn9bj"></div>
                    <div className="logo-aIn9bj">
                        <img className="effect-cd1nGx" src="img/effect-47@1x.png" />
                    </div>
                    <div className="toogle-button-aIn9bj">
                        <img className="icon-ionic-ios-moon-iHmlk1" src="img/icon-ionic-ios-moon-20@1x.png" />
                        <div className="toogle-button-iHmlk1">
                            <div className="rectangle-3485-HblK5r"></div>
                            <div className="ellipse-17688-HblK5r"></div>
                        </div>
                    </div>
                    <div className="search-bar-aIn9bj">
                        <img className="icon-search-3VsLWy" src="img/icon-ionic-ios-search-47@1x.png" />
                    </div>
                    <div className="rectangle-3607-aIn9bj"></div>
                    <div className="menu-aIn9bj">
                        <div className="icon-ionic-ios-menu-zgZfui">
                            <img className="trac-1-rxnc31" src="img/path-1-10@1x.png" />
                            <img className="trac-2-rxnc31" src="img/path-2-10@1x.png" />
                        </div>
                    </div>
                    <div className="espace-trading-crypto-aIn9bj">
                        <div className="formations-uNxd2m lato-normal-white-14px">Espace Trading &amp; Crypto</div>
                    </div>
                </div>
                <div className="h1-rYj0qk lato-bold-white-20px">Portefeuille Cryptomonnaies</div>
                <div className="date-rYj0qk lato-normal-white-16px">Mis à jour le 25 mars 2022</div>
                <div className="background-rYj0qk"></div>
                <div className="club-premium-rYj0qk lato-bold-white-16px">REJOIGNEZ NOTRE CANAL PRIVÉ TELEGRAM</div>
                <div className="club-premium-U7QrOX lato-normal-white-14px">
                    L’équipe de 6FIRE INVEST utilise un outil d’analyse particulier lui permettant de prendre des
                    dizaines de trades sur les marchés financiers classNameiques et crypto. <br />
                    Nous prenons des positions court et long terme, selon les tendances de marchés.
                </div>
                <div className="club-premium-ohXxbH lato-normal-white-14px">
                    Vous pouvez retrouver notre outil d’analyse dans nos vidéos TikTok, dans notre canal Telegram et
                    dans nos stories Instagram. Cependant pour voir nos décisions, nos positions et surtout nos Trades,
                    il faut rejoindre le canal privé Telegram des membres confirmés.
                </div>
                <div className="club-premium-72GHbx lato-normal-white-14px">
                    Vous aurez accès à toutes nos positions crypto &amp; forex en temps réel, nos points d’entrés, de
                    sortis, nos analyses et notre stratégie.
                </div>
                <img className="img_0-b6-ced63-dd0-f-1-rYj0qk" src="img/img-0b6ced63dd0f-1-1@1x.png" />
                <img className="icon-ionic-ios-arrow-down-rYj0qk" src="img/icon-ionic-ios-arrow-down@1x.png" />
                <div className="background-U7QrOX"></div>
                <div className="groupe-3026-rYj0qk">
                    <div className="club-premium-OB3xso lato-bold-white-16px">
                        CONTACTEZ NOUS POUR REJOINDRE LE CANAL PRIVÉ
                    </div>
                </div>
                <div className="button-cration-de-compte-rYj0qk">
                    <div className="rectangle-3470-jxkbTR"></div>
                    <div className="support-telegram-jxkbTR lato-bold-white-14px">Support Telegram</div>
                    <img className="icon-awesome-telegram-jxkbTR" src="img/icon-awesome-telegram-4@1x.png" />
                </div>
                <div className="button-cration-de-compte-U7QrOX">
                    <img className="trac-1041-q15fcv" src="img/trac--1041-4@1x.png" />
                    <div className="support-whats-app-q15fcv lato-bold-white-14px">Support WhatsApp</div>
                    <img className="icon-ionic-logo-whatsapp-q15fcv" src="img/icon-ionic-logo-whatsapp-4@1x.png" />
                </div>
            </div>
        </body>
    );
};

export default NosTrades;
