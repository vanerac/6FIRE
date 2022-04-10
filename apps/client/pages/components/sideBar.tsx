import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import logo from './../img/effect-1@1x.png';

const SideBar: NextPage = () => {
    return (
        <>
            <div className="se-connecter-4LKPG8 lato-light-white-16px">SE CONNECTER</div>
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
            <a href="mot-de-passe-oublie.html">
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
            <div className="apparence-4LKPG8"></div>
        </>
    );
};

export default SideBar;
