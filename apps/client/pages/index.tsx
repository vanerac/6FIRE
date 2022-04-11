import type { NextPage } from 'next';
import Image from 'next/image';
import logo from './../img/effect-1@1x.png';
import line from './../img/ligne-1-1@1x.png';
import trac_1 from './../img/trac--1-1@1x.png';
import trac_2 from './../img/trac--2-1@1x.png';
import Link from 'next/link';

const Home: NextPage = (props: any) => {
    return (
        <body style={{ margin: 0 }}>
            <input type="hidden" id="anPageName" name="page" value="register-web" />
            <div className="register-web screen">
                <div className="background-WxaGAS"></div>
                <div className="logo-WxaGAS">
                    <div className="effect-ReYaAa">
                        <Image src={logo} />
                    </div>
                </div>
                <div className="crer-votre-compte-sur-6-firecom-WxaGAS">Créer votre compte sur 6FIRE.com</div>
                <div className="rejoignez-6-fire-club-priv-dinvestisseur-WxaGAS">
                    Rejoignez 6FIRE - Club Privé d’investisseur
                </div>
                <div className="newsletter-WxaGAS">
                    {/* <div className="rectangle-3473-ctfCRZ border-1px-white"></div> */}
                    <input type="checkbox" id="actu6fire" name="actu6fire" />
                    <div className="je-souhaite-recevoir-lactualit-6-fire-ctfCRZ lato-normal-white-12px">
                        Je souhaite recevoir l’actualité 6FIRE
                    </div>
                </div>
                <div className="cgu-rgpd-WxaGAS">
                    {/* <div className="rectangle-3474-qVPDai border-1px-white"></div> */}
                    <input type="checkbox" id="cgu" name="cgu" />
                    <div className="en-crant-un-compte-v-qVPDai">
                        <span className="span0-qb1m9I lato-normal-white-12px">
                            En créant un compte, vous acceptez les{' '}
                        </span>
                        <span className="span1-qb1m9I lato-normal-white-12px">Conditions Générales d’Utilisation</span>
                        <span className="span2-qb1m9I lato-normal-white-12px">
                            et consentez au traitement de vos données, conformément à la{' '}
                        </span>
                        <span className="span3-qb1m9I lato-normal-white-12px">Politique de confidentialité</span>
                        <span className="span4-qb1m9I lato-normal-white-12px"> de 6FIRE.</span>
                    </div>
                </div>
                <div className="nom-WxaGAS">
                    <div className="ligne-1-Ay5Yag">
                        <Image src={line} />
                    </div>
                    <input placeholder="*Nom" className="nom-Ay5Yag lato-normal-white-14px" type="text" />
                </div>
                <div className="prnom-WxaGAS">
                    <div className="ligne-1-Ay5Yag">
                        <Image src={line} />
                    </div>
                    <input placeholder="*Prénom" className="nom-Ay5Yag lato-normal-white-14px" type="text" />
                </div>
                <div className="numro-de-tlphone-WxaGAS">
                    <div className="ligne-1-Ay5Yag">
                        <Image src={line} />
                    </div>
                    <input placeholder="*Email" className="nom-Ay5Yag lato-normal-white-14px" type="text" />
                </div>
                <div className="mot-de-passe-WxaGAS">
                    <div className="ligne-1-Ay5Yag">
                        <Image src={line} />
                    </div>
                    <input placeholder="* Mot de passe" className="nom-Ay5Yag lato-normal-white-14px" type="text" />

                    <img className="icon-ionic-md-eye-off-YId6x8" src="img/icon-ionic-md-eye-off-1@1x.png" />
                </div>
                <div className="button-sign-in-WxaGAS">
                    <div className="button-cration-de-compte-43BKS5">
                        <div
                            onClick={() => console.log('button créer un compte clicked')}
                            className="rectangle-3470-C8EDSj"></div>
                        <div className="crer-un-compte-C8EDSj">Créer un compte</div>
                    </div>
                </div>
                <div className="dj-inscrit-connectez-vous-WxaGAS">
                    <Link href="/connexion">
                        <a style={{ color: 'white' }}>Déjà inscrit ? Connectez vous</a>
                    </Link>
                </div>
                <div className="numro-de-tlphone-Ae6KpX">
                    <div className="ligne-1-Ay5Yag">
                        <Image src={line} />
                    </div>
                    <input
                        placeholder="*Numéro de téléphone"
                        className="nom-Ay5Yag lato-normal-white-14px"
                        type="text"
                    />
                </div>
                <div
                    onClick={() => {
                        props.useStateOpenSideBar(true);
                    }}
                    className="connexion-WxaGAS">
                    <div className="connexion-zebl9P">
                        <div className="club-premium-RhkVlt lato-normal-white-14px">Club Privé</div>
                    </div>
                    <div className="icon-ionic-ios-menu-zebl9P">
                        <div className="trac-1-mD2maU">
                            <Image src={trac_1} />
                        </div>
                        <div className="trac-2-mD2maU">
                            <Image src={trac_2} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="register-mobile screen">
                <div className="background-qfTrnm"></div>
                <div className="logo-qfTrnm">
                    <div className="effect-YcCH73">
                        <Image src={logo} />
                    </div>
                </div>
                <div className="crer-votre-compte-sur-6-firecom-qfTrnm">Créer votre compte sur 6FIRE.com</div>
                <div className="rejoignez-6-fire-club-priv-dinvestisseur-qfTrnm">
                    Rejoignez 6FIRE - Club Privé d’investisseur
                </div>
                <div className="newsletter-qfTrnm">
                    <div className="rectangle-3473-eM3wxq border-1px-white"></div>
                    <div className="je-souhaite-recevoir-lactualit-6-fire-eM3wxq lato-normal-white-12px">
                        Je souhaite recevoir l’actualité 6FIRE
                    </div>
                </div>
                <div className="cgu-rgpd-qfTrnm">
                    <div className="rectangle-3474-XHhUEC border-1px-white"></div>
                    <div className="en-crant-un-compte-v-XHhUEC">
                        <span className="span0-J4Md4x lato-normal-white-12px">
                            En créant un compte, vous acceptez les{' '}
                        </span>
                        <span className="span1-J4Md4x lato-normal-white-12px">Conditions Générales d’Utilisation</span>
                        <span className="span2-J4Md4x lato-normal-white-12px">
                            et consentez au traitement de vos données, conformément à la{' '}
                        </span>
                        <span className="span3-J4Md4x lato-normal-white-12px">Politique de confidentialité</span>
                        <span className="span4-J4Md4x lato-normal-white-12px"> de 6FIRE.</span>
                    </div>
                </div>
                <div className="nom-qfTrnm">
                    <img className="ligne-1-vdEIbT" src="img/ligne-1-1@1x.png" />
                    <div className="nom-vdEIbT lato-normal-white-14px">* Nom</div>
                </div>
                <div className="prnom-qfTrnm">
                    <img className="ligne-5-6mOLtL" src="img/ligne-1-1@1x.png" />
                    <div className="prnom-6mOLtL lato-normal-white-14px">* Prénom</div>
                </div>
                <div className="numro-de-tlphone-qfTrnm">
                    <img className="ligne-6-Glkvq0" src="img/ligne-1-1@1x.png" />
                    <div className="numro-de-tlphone-Glkvq0 lato-normal-white-14px">* Numéro de téléphone</div>
                </div>
                <div className="mot-de-passe-qfTrnm">
                    <img className="icon-ionic-md-eye-off-WPm9xl" src="img/icon-ionic-md-eye-off-1@1x.png" />
                    <img className="ligne-7-WPm9xl" src="img/ligne-1-1@1x.png" />
                    <div className="mot-de-passe-WPm9xl lato-normal-white-14px">* Mot de passe</div>
                </div>
                <div className="button-sign-in-qfTrnm">
                    <div className="button-cration-de-compte-TU0AFD">
                        <div className="rectangle-3470-1QO1gL"></div>
                        <div className="crer-un-compte-1QO1gL">Créer un compte</div>
                    </div>
                </div>
                <div className="dj-inscrit-connectez-vous-qfTrnm">Déjà inscrit ? Connectez vous</div>
                <div className="connexion-qfTrnm">
                    <div className="connexion-YLoUqo">
                        <div className="connexion-1aVEbJ">
                            <div className="club-premium-MoQQxl lato-normal-white-14px">Club Privé</div>
                        </div>
                        <div className="icon-ionic-ios-menu-1aVEbJ">
                            <img className="trac-1-l9Kpxb" src="img/trac--1-1@1x.png" />
                            <img className="trac-2-l9Kpxb" src="img/trac--2-1@1x.png" />
                        </div>
                    </div>
                </div>
                <div className="numro-de-tlphone-511QbH">
                    <img className="ligne-6-DzMs4Y" src="img/ligne-1-1@1x.png" />
                    <div className="email-DzMs4Y lato-normal-white-14px">* Email</div>
                </div>
            </div>
        </body>
    );
};

export default Home;
