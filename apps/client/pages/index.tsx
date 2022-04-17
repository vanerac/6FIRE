import type { NextPage } from 'next';
import Link from 'next/link';
import router from 'next/router';

const HomePage: NextPage = (props: any) => {
    return (
        <div>
            <input type="hidden" id="anPageName" name="page" value="homepage" />
            <div className="homepage screen">
                <div className="background-zYNucu"></div>
                <div className="rejoindre-le-club-dinvestisseur-zYNucu lato-light-manatee-18px">
                    Rejoindre le club d’investisseur
                </div>
                <div className="logo-zYNucu">
                    <div className="groupe-2-XjUoLl">
                        <img className="groupe-1-fG9TNr" src="img/group-1-1@1x.png" />
                    </div>
                    <div className="groupe-1483-XjUoLl hidden">
                        <img className="groupe-1482-pxRMuX" src="img/group-1482-10@1x.png" />
                    </div>
                    <img className="effect-XjUoLl" src="img/effect-10@1x.png" />
                </div>
                <div className="background-9y9vaA"></div>
                <img className="groupe-de-masques-332-zYNucu" src="img/mask-group-332@1x.png" />
                <div className="visionner-la-vido-ob-zYNucu lato-bold-white-16px">
                    Visionner la vidéo obligatoire pour comprendre le club privé 6FIRE
                </div>
                <img
                    className="icon-material-keyboard-arrow-down-zYNucu"
                    src="img/icon-material-keyboard-arrow-down@1x.png"
                />
                <div className="button-nous-rejoindre-zYNucu">
                    <div onClick={() => router.push('/connexion')} className="rectangle-3470-f3cQ2w">
                        <div className="nous-rejoindre-f3cQ2w lato-normal-white-16px">Nous rejoindre</div>
                    </div>
                    <div className="groupe-1486-f3cQ2w hidden">
                        <img className="groupe-1485-Jzdzun" src="img/group-1485-1@1x.png" />
                    </div>
                </div>
                <div className="connexion-zYNucu">
                    {/* <Link href="/connexion"> */}
                    <div onClick={() => props.useStateOpenSideBar(true)} className="connexion-LAc7m9">
                        <div className="connexion-FL6OPd">
                            <div className="club-premium-5UOfx0 lato-normal-white-14px">Club Privé</div>
                            <img className="ligne-8-5UOfx0 hidden" src="img/line-8-13@1x.png" />
                        </div>
                        <div className="icon-ionic-ios-menu-FL6OPd">
                            <img className="trac-1-oIJAsx" src="img/path-1-10@1x.png" />
                            <img className="trac-2-oIJAsx" src="img/path-2-10@1x.png" />
                        </div>
                    </div>
                    {/* </Link> */}
                    <div className="connexion-5l40sx hidden">
                        <div className="background-ODVNCb"></div>
                        <div className="groupe-1487-ODVNCb">
                            <img className="ligne-10-nseAnb" src="img/line-10-10@1x.png" />
                            <img className="ligne-11-nseAnb" src="img/line-11-10@1x.png" />
                        </div>
                        <div className="se-connecter-ODVNCb lato-light-white-16px">SE CONNECTER</div>
                        <div className="pour-accder-votre-compte-ODVNCb lato-light-white-14px">
                            Pour accéder à votre compte
                        </div>
                        <div className="numro-de-tlphone-ODVNCb">
                            <img className="ligne-6-HimZiw" src="img/line-1-1@1x.png" />
                            <div className="email-HimZiw lato-normal-white-14px">* Email</div>
                        </div>
                        <div className="mot-de-passe-ODVNCb">
                            <img className="icon-ionic-md-eye-off-XfPo7s" src="img/icon-ionic-md-eye-off-1@1x.png" />
                            <img className="ligne-7-XfPo7s" src="img/line-1-1@1x.png" />
                            <div className="mot-de-passe-XfPo7s lato-normal-white-14px">* Mot de passe</div>
                            <div className="icon-ionic-ios-eye-XfPo7s hidden">
                                <img className="icon-eye-eaGtxE" src="img/path-985-1@1x.png" />
                                <img className="trac-986-eaGtxE" src="img/path-986-2@1x.png" />
                            </div>
                        </div>
                        <div className="mot-de-passe-oubli-ODVNCb lato-light-manatee-14px">Mot de passe oublié ?</div>
                        <div className="button-login-ODVNCb">
                            <div className="button-cration-de-compte-0UxE4r">
                                <div className="rectangle-3470-PBpI75 border-1px-onyx"></div>
                                <div className="me-connecter-PBpI75 lato-normal-onyx-14px">Me connecter</div>
                            </div>
                            <div className="button-cration-de-compte-QPuJAm hidden">
                                <div className="rectangle-3470-JwgKxT"></div>
                                <div className="crer-un-compte-JwgKxT lato-normal-licorice-14px">Créer un compte</div>
                            </div>
                        </div>
                        <div className="rectangle-3476-ODVNCb"></div>
                        <div className="vous-navez-pas-de-compte-ODVNCb lato-light-white-16px">
                            VOUS N’AVEZ PAS DE COMPTE ?
                        </div>
                        <div className="button-signin-ODVNCb">
                            <div className="button-cration-de-compte-4yIfHQ">
                                <div className="rectangle-3470-0UZQRZ"></div>
                                <div className="crer-un-compte-0UZQRZ lato-normal-licorice-14px">Créer un compte</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="homepage-2 screen">
                <div className="background-UwGJ9Z"></div>
                <div className="club-priv-dinvestisseur-UwGJ9Z lato-light-manatee-18px">Club privé d’investisseur</div>
                <div className="logo-UwGJ9Z">
                    <div className="groupe-2-xV9lcf">
                        <img className="groupe-1-rCurPx" src="img/group-1-1@1x.png" />
                    </div>
                    <img className="effect-xV9lcf" src="img/effect-10@1x.png" />
                </div>
                <div className="icon-ionic-ios-menu-UwGJ9Z">
                    <img className="trac-1-3BLpSU" src="img/path-1-10@1x.png" />
                    <img className="trac-2-3BLpSU" src="img/path-2-10@1x.png" />
                </div>
                <div className="button-nous-rejoindre-UwGJ9Z">
                    <div className="rectangle-3470-vZJ39L"></div>
                    <div className="nous-rejoindre-vZJ39L lato-normal-white-16px">Nous rejoindre</div>
                </div>
                <div className="connexion-UwGJ9Z">
                    <Link href="/connexion">
                        <div className="connexion-hN5F23">
                            <div className="connexion-PcGe0o">
                                <div className="club-premium-SvYIWK lato-normal-white-14px">Club Privé</div>
                            </div>
                            <div className="icon-ionic-ios-menu-PcGe0o">
                                <img className="trac-1-dcgJp9" src="img/path-1-10@1x.png" />
                                <img className="trac-2-dcgJp9" src="img/path-2-10@1x.png" />
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="visionner-la-vido-ob-UwGJ9Z lato-bold-white-16px">
                    Visionner la vidéo obligatoire pour comprendre le club privé 6FIRE
                </div>
                <img
                    className="icon-material-keyboard-arrow-down-UwGJ9Z"
                    src="img/icon-material-keyboard-arrow-down@1x.png"
                />
            </div>
            <div className="homepage-button-animation screen">
                <div className="background-cB6ICl"></div>
                <div className="club-priv-dinvestisseur-cB6ICl lato-light-manatee-18px">Club privé d’investisseur</div>
                <div className="logo-cB6ICl">
                    <div className="groupe-2-KG15NJ">
                        <img className="groupe-1-xxawnC" src="img/group-1-2@1x.png" />
                    </div>
                    <img className="effect-KG15NJ" src="img/effect-10@1x.png" />
                </div>
                <div className="icon-ionic-ios-menu-cB6ICl">
                    <img className="trac-1-572WhD" src="img/path-1-10@1x.png" />
                    <img className="trac-2-572WhD" src="img/path-2-10@1x.png" />
                </div>
                <div className="button-nous-rejoindre-cB6ICl">
                    <div className="rectangle-3470-m6f9GA"></div>
                    <div className="nous-rejoindre-m6f9GA lato-normal-black-16px">Nous rejoindre</div>
                    <div className="groupe-1486-m6f9GA">
                        <img className="groupe-1485-e9gjSa" src="img/group-1485-1@1x.png" />
                    </div>
                </div>
                <div className="connexion-cB6ICl">
                    <div className="club-premium-kgPGf2 lato-normal-white-14px">Club Privé</div>
                    <img className="ligne-8-kgPGf2" src="img/line-8-10@1x.png" />
                </div>
            </div>
        </div>
    );
};

export default HomePage;
