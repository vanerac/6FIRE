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
                {/* <div className="content-white-dark-58RGA4"> */}
                {/* <div className="content-dark-LZQy1P"> */}
                <div style={{ height: 'calc(100% - 263px)' }} className="background-1CdAvu">
                    <div
                        className="lato-normal-white-12px"
                        style={{ color: '#fff', marginTop: '200px', marginLeft: '20%', marginRight: '20%' }}>
                        <h1>Conditions Générales d’Utilisations</h1>
                        Description des services fournis <br />
                        <br />
                        Le site www.6fireinvest.com a pour objet de fournir une information concernant l’ensemble des
                        activités de la société. Le propriétaire du site s’efforce de fournir sur le site
                        www.6fireinvest.com des informations aussi précises que possible. Toutefois, il ne pourra être
                        tenue responsable des omissions, des inexactitudes et des carences dans la mise à jour, qu’elles
                        soient de son fait ou du fait des tiers partenaires qui lui fournissent ces informations. Toutes
                        les informations proposées sur le site www.6fireinvest.com sont données à titre indicatif, sont
                        non exhaustives, et sont susceptibles d’évoluer. Elles sont données sous réserve de
                        modifications ayant été apportées depuis leur mise en ligne.
                        <br />
                        <br />
                        La fourniture des informations ne saurait être assimilée, de quelle que façon que ce soit, à un
                        conseil spécifique ou à une instruction à la décision afin d’effectuer une transaction ou de
                        prendre une décision d’investissement. Le Client reconnaît, en conséquence, utiliser les
                        informations et les autres données du Site qui lui sont proposées à ses seuls risques et périls.
                        <br />
                        <br />
                        Propriété intellectuelle et contrefaçon
                        <br />
                        <br />
                        Le propriétaire du site est propriétaire des droits de propriété intellectuelle ou détient les
                        droits d’usage sur tous les éléments accessibles sur le site, notamment les textes, images,
                        graphismes, logo, icônes, sons, logiciels… Toute reproduction, représentation, modification,
                        publication, adaptation totale ou partielle des éléments du site, quel que soit le moyen ou le
                        procédé utilisé, est interdite, sauf autorisation écrite préalable à l’email :
                        support@6fireinvest.com. Toute exploitation non autorisée du site ou de l’un quelconque de ces
                        éléments qu’il contient sera considérée comme constitutive d’une contrefaçon et poursuivie
                        conformément aux dispositions des articles L.335-2 et suivants du Code de Propriété
                        Intellectuelle, langue de votre navigateur, date et heure de la requête et URL de provenance.
                        Liens hypertextes et cookies Le site www.6fireinvest.com contient un certain nombre de liens
                        hypertextes vers d’autres sites (partenaires, informations,…) mis en place avec l’autorisation
                        du propriétaire du site. Cependant, le propriétaire du site n’a pas la possibilité de vérifier
                        le contenu des sites ainsi visités et décline donc toute responsabilité de ce fait quand aux
                        risques éventuels de contenus illicites.
                        <br />
                        <br />
                        L’utilisateur est informé que lors de ses visites sur le site www.6fireinvest.com, un ou des
                        cookies sont susceptible de s’installer automatiquement sur son ordinateur. Un cookie est un
                        fichier de petite taille, qui ne permet pas l’identification de l’utilisateur, mais qui
                        enregistre des informations relatives à la navigation d’un ordinateur sur un site. Les données
                        ainsi obtenues visent à faciliter la navigation ultérieure sur le site, et ont également
                        vocation à permettre diverses mesures de fréquentation. Le paramétrage du logiciel de navigation
                        permet d’informer de la présence de cookie et éventuellement, de refuser de la manière décrite à
                        l’adresse suivante : www.cnil.fr. Le refus d’installation d’un cookie peut entraîner
                        l’impossibilité d’accéder à certains services. L’utilisateur peut toutefois configurer son
                        ordinateur de la manière suivante, pour refuser l’installation des cookies : Sous Internet
                        Explorer : onglet outil / options internet. Cliquez sur Confidentialité et choisissez Bloquer
                        tous les cookies. Validez sur Ok. Sous Netscape : onglet édition / préférences. Cliquez sur
                        Avancées et choisissez Désactiver les cookies. Validez sur Ok. Protection des biens et des
                        personnes - Gestions des données personnelles Règlement (UE) 2016/679 du Parlement européen et
                        du Conseil du 27 avril 2016 relatif à la protection des personnes physiques à l’égard du
                        traitement des données à caractère personnel et à la libre circulation de ces données (ci-après
                        « RGPD »). Utilisateur : Internaute se connectant, utilisant le site susnommé :
                        www.6fireinvest.com. En France, les données personnelles sont notamment protégées par la loi n°
                        78-87 du 6 janvier 1978, la loi n° 2004-801 du 6 août 2004, l’article L. 226-13 du Code pénal et
                        la Directive Européenne du 24 octobre 1995. Sur le site www.6fireinvest.com, le propriétaire du
                        site ne collecte des informations personnelles relatives à l’utilisateur que pour le besoin de
                        certains services proposés par le site www.nyl2pronos.com. L’utilisateur fournit ces
                        informations en toute connaissance de cause, notamment lorsqu’il procède par lui-même à leur
                        saisie. Il est alors précisé à l’utilisateur du site www.6fireinvest.com l’obligation ou non de
                        fournir ces informations. Conformément aux articles 15, 16, 17 et 21 du RGPD, ainsi que les
                        dispositions des articles 38 et suivants de la loi 78-17 du 6 janvier 1978 relative à
                        l’informatique, aux fichiers et aux libertés, tout utilisateur dispose d’un droit d’accès, de
                        rectification, de suppression et d’opposition aux données personnelles le concernant. Pour
                        l’exercer, adressez votre demande à support@6firesinvest.com par email : email du webmaster ou
                        en effectuant sa demande écrite et signée, accompagnée d’une copie du titre d’identité avec
                        signature du titulaire de la pièce, en précisant l’adresse à laquelle la réponse doit être
                        envoyée. Aucune information personnelle de l’utilisateur du site www.6fireinvest.com n’est
                        publiée à l’insu de l’utilisateur, échangée, transférée, cédée ou vendue sur un support
                        quelconque à des tiers. Seule l’hypothèse du rachat du site www.6fireinvest.com au propriétaire
                        du site et de ses droits permettrait la transmission des dites informations à l’éventuel
                        acquéreur qui serait à son tour tenu de la même obligation de conservation et de modification
                        des données vis à vis de l’utilisateur du site www.6fireinvest.com. Le site www.6fireinvest.com
                        est en conformité avec le RGPD. Les bases de données sont protégées par les dispositions de la
                        loi du 1er juillet 1998 transposant la directive 96/9 du 11 mars 1996 relative à la protection
                        juridique des bases de données. Pour connaître davantage d’informations sur la manière dont vos
                        informations personnelles sont utilisées, nous vous invitons à consulter notre Politique de
                        confidentialité.
                    </div>
                </div>
                {/* <div className="prvisualition-articles-1CdAvu">
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
                        </div> */}
                {/* <div className="button-signin-1CdAvu">
                            <div className="button-cration-de-compte-XhTuob">
                                <div className="rectangle-3470-j5JYNy border-1px-white"></div>
                                <div className="voir-plus-j5JYNy lato-normal-white-14px">Voir plus</div>
                            </div>
                            <div className="icon-ionic-ios-arrow-forward-XhTuob">
                                <Image layout="fill" src="/img/icon-ionic-ios-arrow-forward-2@1x.png" />
                            </div>
                        </div> */}
                {/* </div> */}
                {/* </div> */}
                <Header isOpenSideBar={props.useStateOpenSideBar} isEspaceTradingCrypto={true} />
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
                {/* <div className="article-3xxVvY">
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
                </div> */}
                {/* <div className="article-HB3jNP">
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
                </div> */}
                {/* <div className="call-to-action-3xxVvY">
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
                </div> */}
                <div className="rectangle-3607-3xxVvY"></div>
                <div className="groupe-3022-3xxVvY">
                    <div className="rectangle-3556-KtXvln"></div>
                    <div className="trading-KtXvln lato-bold-white-14px">Espace Trading &amp; Crypto</div>
                </div>
                {/* <div className="article-hgxJDx">
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
                </div> */}
                {/* <div className="article-H87bfg">
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
                </div> */}
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
                {/* <div className="article-DxJEuX">
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
                </div> */}
                {/* <div className="button-signin-3xxVvY">
                    <div className="button-cration-de-compte-QAxT4p">
                        <div className="rectangle-3470-xoDIjs border-1px-white"></div>
                        <div className="voir-plus-xoDIjs lato-normal-white-14px">Voir plus</div>
                    </div>
                    <div className="icon-ionic-ios-arrow-forward-QAxT4p">
                        <Image layout="fill" src="/img/icon-ionic-ios-arrow-forward-2@1x.png" />
                    </div>
                </div> */}
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
