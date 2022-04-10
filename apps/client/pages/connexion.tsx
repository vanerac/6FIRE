import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import logo from './../img/effect-1@1x.png';

const HomePage: NextPage = () => {
    return (
        <body style={{ margin: 0 }}>
            <input type="hidden" id="anPageName" name="page" value="connexion" />
            <div className="connexion screen" onClick={() => window.open('javascript:history.back()', '_self')}>
                <div className="background-4LKPG8"></div>
                <div className="club-priv-dinvestisseur-4LKPG8 lato-light-manatee-18px">Club privé d’investisseur</div>
                <div className="logo-4LKPG8">
                    <div className="groupe-2-5T1Sji">
                        <img className="groupe-1-wmQwHv" src="img/group-1-1@1x.png" />
                    </div>
                    <img className="effect-5T1Sji" src="img/effect-10@1x.png" />
                </div>
                <div className="button-nous-rejoindre-4LKPG8">
                    <div className="rectangle-3470-MO4nd3"></div>
                    <div className="nous-rejoindre-MO4nd3 lato-normal-black-16px">Nous rejoindre</div>
                    <div className="groupe-1486-MO4nd3">
                        <img className="groupe-1485-olUB6s" src="img/group-1485-1@1x.png" />
                    </div>
                </div>
                <div className="connexion-4LKPG8">
                    <div className="club-premium-YFvGoG lato-normal-white-14px">Club Privé</div>
                    <img className="ligne-8-YFvGoG" src="img/line-8-10@1x.png" />
                </div>
                <div className="icon-ionic-ios-menu-4LKPG8">
                    <img className="trac-1-2GsN9o" src="img/path-1-10@1x.png" />
                    <img className="trac-2-2GsN9o" src="img/path-2-10@1x.png" />
                </div>
                {/* <div className="background-b56baA"></div> */}
                <img className="ligne-9-4LKPG8" src="img/line-9-3@1x.png" />
                <div className="groupe-1487-4LKPG8">
                    <img className="ligne-10-ydUzbM" src="img/line-10-10@1x.png" />
                    <img className="ligne-11-ydUzbM" src="img/line-11-10@1x.png" />
                </div>
                {/* <nav className="nav__cont">
                    <ul className="nav"></ul>
                </nav> */}
                {/* <div className="se-connecter-4LKPG8 lato-light-white-16px">SE CONNECTER</div>
                <div className="pour-accder-votre-compte-4LKPG8 lato-light-white-14px">Pour accéder à votre compte</div>
                <a href="connexion-1.html">
                    <div className="numro-de-tlphone-4LKPG8">
                        <img className="ligne-6-E4BLJi" src="img/line-1-1@1x.png" />
                        <div className="email-E4BLJi lato-normal-white-14px">* Email</div>
                    </div>
                </a>
                <div className="mot-de-passe-4LKPG8">
                    <img className="icon-ionic-md-eye-off-xfCXIX" src="img/icon-ionic-md-eye-off-1@1x.png" />
                    <img className="ligne-7-xfCXIX" src="img/line-1-1@1x.png" />
                    <div className="mot-de-passe-xfCXIX lato-normal-white-14px">* Mot de passe</div>
                </div>
                <a href="mot-de-passe-oublie.html" >
                    <div className="mot-de-passe-oubli-4LKPG8 lato-light-manatee-14px">Mot de passe oublié ?</div>
                </a>
                <div className="button-login-4LKPG8">
                    <div className="button-cration-de-compte-JzAjes">
                        <div className="rectangle-3470-zy7OLm border-1px-onyx"></div>
                        <div className="me-connecter-zy7OLm lato-normal-onyx-14px">Me connecter</div>
                    </div>
                </div>
                <div className="rectangle-3476-4LKPG8"></div>
                <div className="vous-navez-pas-de-compte-4LKPG8 lato-light-white-16px">VOUS N’AVEZ PAS DE COMPTE ?</div>
                <a href="register.html">
                    <div className="button-signin-4LKPG8">
                        <div className="button-cration-de-compte-ax5JLm">
                            <div className="rectangle-3470-ParBiB"></div>
                            <div className="crer-un-compte-ParBiB lato-normal-licorice-14px">Créer un compte</div>
                        </div>
                    </div>
                </a>
                <div className="apparence-4LKPG8"></div> */}
            </div>
            <div className="connexion-mobile screen">
                <div className="background-ugPI5J"></div>
                <div className="connexion-ugPI5J">
                    <div className="club-premium-Pnyxwk lato-normal-white-14px">Club Privé</div>
                </div>
                <div className="icon-ionic-ios-menu-ugPI5J">
                    <img className="trac-1-DmLhrd" src="img/path-1-10@1x.png" />
                    <img className="trac-2-DmLhrd" src="img/path-2-10@1x.png" />
                </div>
                <div className="apparence-ugPI5J"></div>
                <div className="connexion-yjcF8r">
                    <div className="connexion-DDeLxc">
                        <div className="club-premium-mDjtDa lato-normal-white-14px">Club Privé</div>
                        <img className="ligne-8-mDjtDa" src="img/line-8-10@1x.png" />
                    </div>
                    <div className="icon-ionic-ios-menu-DDeLxc">
                        <img className="trac-1-pafBsN" src="img/path-1-10@1x.png" />
                        <img className="trac-2-pafBsN" src="img/path-2-10@1x.png" />
                    </div>
                    <div className="background-DDeLxc"></div>
                    <img className="ligne-9-DDeLxc" src="img/ligne-9@1x.png" />
                    <div className="groupe-1487-DDeLxc">
                        <img className="ligne-10-x8mx7S" src="img/line-10-10@1x.png" />
                        <img className="ligne-11-x8mx7S" src="img/line-11-10@1x.png" />
                    </div>
                    <div className="se-connecter-DDeLxc lato-light-white-16px">SE CONNECTER</div>
                    <div className="pour-accder-votre-compte-DDeLxc lato-light-white-14px">
                        Pour accéder à votre compte
                    </div>
                    <div className="numro-de-tlphone-DDeLxc">
                        <img className="ligne-6-F15FhB" src="img/line-1-1@1x.png" />
                        <div className="numro-de-tlphone-F15FhB lato-normal-white-14px">* Numéro de téléphone</div>
                    </div>
                    <div className="mot-de-passe-DDeLxc">
                        <img className="icon-ionic-md-eye-off-kmtX7x" src="img/icon-ionic-md-eye-off-1@1x.png" />
                        <img className="ligne-7-kmtX7x" src="img/line-1-1@1x.png" />
                        <div className="mot-de-passe-kmtX7x lato-normal-white-14px">* Mot de passe</div>
                    </div>
                    <div className="mot-de-passe-oubli-DDeLxc lato-light-manatee-14px">Mot de passe oublié ?</div>
                    <div className="button-login-DDeLxc">
                        <div className="button-cration-de-compte-WfNjK1">
                            <div className="rectangle-3470-wbjhxV border-1px-onyx"></div>
                            <div className="me-connecter-wbjhxV lato-normal-onyx-14px">Me connecter</div>
                        </div>
                    </div>
                    <div className="crer-un-compte-DDeLxc">
                        <div className="rectangle-3476-BS0g5w"></div>
                        <div className="vous-navez-pas-de-compte-BS0g5w lato-light-white-16px">
                            VOUS N’AVEZ PAS DE COMPTE ?
                        </div>
                        <div className="button-signin-BS0g5w">
                            <div className="button-cration-de-compte-tnG6gy">
                                <div className="rectangle-3470-sLzq0v"></div>
                                <div className="crer-un-compte-sLzq0v lato-normal-licorice-14px">Créer un compte</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </body>
    );
};

export default HomePage;
