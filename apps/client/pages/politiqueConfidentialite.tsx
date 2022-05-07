import type { NextPage } from 'next';
// import router from 'next/router';
import Footer from './components/footer';
import Header from './components/header';
import Head from 'next/head';

const PolitiqueConfidentialite: NextPage = (props: any) => {
    return (
        <div>
            <Head>
                <title>Politique de confidentialité - Crypto Trader</title>
            </Head>
            <input type="hidden" id="anPageName" name="page" value="homepage-1" />
            <Header isOpenSideBar={props.useStateOpenSideBar} isEspaceTradingCrypto={true} />

            <div className="general_text_wrapper">
                <div className="main-title">
                    <h3 className="title">Politique de Confidentialité</h3>
                </div>

                {/* Text box with title, you can copy to generate new text block */}
                <div className="text">
                    {/* Text title */}
                    <p>
                        Pr&eacute;ambule La pr&eacute;sente politique de confidentialit&eacute; s&rsquo;adresse &agrave;
                        tout utilisateur de nos services et a pour objectif de vous informer sur la mani&egrave;re dont
                        vos informations personnelles peuvent &ecirc;tre collect&eacute;es et trait&eacute;es.
                    </p>

                    <p>
                        Le respect de la vie priv&eacute;e et des donn&eacute;es &agrave; caract&egrave;re personnel est
                        une priorit&eacute;, raison pour laquelle nous nous engageons &agrave; traiter celles-ci dans le
                        plus strict respect de loi n&deg; 78-17 du 6 janvier 1978 relative &agrave;
                        l&rsquo;informatique, aux fichiers et aux libert&eacute;s modifi&eacute;e (ci-apr&egrave;s
                        &laquo; loi IEL &raquo;) et du R&egrave;glement (UE) 2016/679 du Parlement europ&eacute;en et du
                        Conseil du 27 avril 2016 relatif &agrave; la protection des personnes physiques &agrave;
                        l&rsquo;&eacute;gard du traitement des donn&eacute;es &agrave; caract&egrave;re personnel et
                        &agrave; la libre circulation de ces donn&eacute;es (ci-apr&egrave;s &laquo; RGPD &raquo;).
                    </p>

                    <p>
                        En tout &eacute;tat de cause, nous nous engageons &agrave; respecter les trois (3) principes
                        essentiels suivants : &bull; Vos donn&eacute;es ne feront l&rsquo;objet d&rsquo;aucune
                        exploitation commerciale ; &bull; Vous restez ma&icirc;tre de vos donn&eacute;es a&#768;
                        caract&egrave;re personnel ; &bull; Vos donn&eacute;es sont trait&eacute;es de mani&egrave;re
                        transparente, confidentielle et s&eacute;curis&eacute;e ;
                    </p>

                    <p>Article 1. D&eacute;finitions</p>

                    <p>
                        Les termes, mentionn&eacute;s ci-dessous, ont dans la pr&eacute;sente Politique de
                        confidentialit&eacute;, la signification suivante :
                    </p>

                    <p>
                        &bull; &laquo; Donn&eacute;es Personnelles &raquo; ou &laquo; Donn&eacute;es a&#768;
                        caract&egrave;re personnel &raquo; : d&eacute;signe les donn&eacute;es &agrave; caract&egrave;re
                        personnel au sens de la loi LIL et du RGPD et plus g&eacute;n&eacute;ralement toute information
                        se rapportant &agrave; une personne physique identifi&eacute;e ou identifiable ; &bull; &laquo;
                        Site &raquo; : d&eacute;signe la plateforme en ligne accessible &agrave; partir de
                        l&rsquo;adresse https://6fireinvest.com/ et permettant de b&eacute;n&eacute;ficier des Services.
                        La Plateforme regroupe l&rsquo;ensemble des pages web et fonctionnalit&eacute;s propos&eacute;es
                        aux Utilisateurs. &bull; &laquo; Services &raquo; : d&eacute;signe l&rsquo;ensemble des services
                        propos&eacute;s par 6Fire Invest https://6fireinvest.com/ aux Utilisateurs par
                        l&rsquo;interm&eacute;diaire de la Plateforme ; &bull; &laquo; Utilisateur &raquo; :
                        d&eacute;signe toute personne qui acc&egrave;de et navigue sur le site web.
                    </p>

                    <p>
                        Article 2. Identit&eacute; du responsable de traitement Le responsable du traitement est 6Fire
                        Invest https://6fireinvest.com/, Soci&eacute;t&eacute; par actions simplifi&eacute;es
                        (immatriculation num&eacute;ro 83425043300010) situ&eacute;e 13 route de Pamproux - 79800 La
                        Mothe Saint-Heray.
                    </p>

                    <p>
                        En vertu de la r&eacute;glementation en vigueur li&eacute;e &agrave; la protection des
                        donn&eacute;es personnelles, https://6fireinvest.com/ se doit d&rsquo;une obligation de
                        protection desdites donn&eacute;es.
                    </p>

                    <p>
                        Rappel l&eacute;gal : Le responsable du traitement est, au sens de la loi Informatique et
                        Libert&eacute;s et du RGPD, la personne qui d&eacute;termine les moyens et les finalit&eacute;s
                        du traitement. Lorsque deux responsables du traitement ou plus d&eacute;terminent conjointement
                        les finalit&eacute;s et les moyens du traitement, ils sont les responsables conjoints du
                        traitement (ou co-responsables).
                    </p>

                    <p>
                        Le sous-traitant est une personne traitant des donn&eacute;es a&#768; caract&egrave;re personnel
                        pour le compte du responsable du traitement, il agit sous l&rsquo;autorit&eacute; du responsable
                        du traitement et sur instruction de celui-ci.
                    </p>

                    <p>
                        Ceci pr&eacute;cis&eacute;, la pr&eacute;sente politique de confidentialit&eacute; concerne les
                        traitements de donn&eacute;es personnelles r&eacute;alis&eacute;s par https://6fireinvest.com/
                        en sa qualit&eacute; de responsable de traitement.
                    </p>

                    <p>
                        Article 3. Finalit&eacute;s et cat&eacute;gories de donn&eacute;es personnelles
                        collect&eacute;es
                    </p>

                    <p>
                        6FIRE Invest https://6fireinvest.com/ collecte et traite des donn&eacute;es personnelles.
                        Veuillez trouver ci-dessous la liste des &eacute;l&eacute;ments que nous
                        r&eacute;cup&eacute;rons class&eacute;s par cat&eacute;gories ainsi que leurs finalit&eacute;s
                        associ&eacute;es.
                    </p>

                    <p>
                        &bull; Donn&eacute;es d&rsquo;identification : nom, pr&eacute;nom &bull; Donn&eacute;es de
                        localisation : pays de l&rsquo;utilisateur &bull; Donn&eacute;es de contact : adresse e-mail,
                        num&eacute;ro de t&eacute;l&eacute;phone fixe ou portable &bull; Donn&eacute;es de connexion :
                        donn&eacute;es de connexion et de navigation, adresse IP
                    </p>

                    <p>
                        Ce type de donn&eacute;es sert &agrave; : - Cr&eacute;er un compte sur notre plateforme et
                        b&eacute;n&eacute;ficier de nos services. - Mener des campagnes en vue de promouvoir une
                        nouveaut&eacute; de notre site Internet, un &eacute;v&egrave;nement ou encore une offre
                        promotionnelle. - Personnaliser votre profil utilisateur afin de vous proposer un contenu
                        susceptible de vous int&eacute;resser. - Vous recontacter lorsque vous souhaitez entrer en
                        contact avec nous. - Pr&eacute;venir les risques de fraudes et s&rsquo;assurer de
                        l&rsquo;authenticit&eacute; de l&rsquo;utilisateur.
                    </p>

                    <p>Bases l&eacute;gales :</p>

                    <p>
                        - Ex&eacute;cution d&rsquo;un contrat (art 6.b RGPD) : Donn&eacute;es servant &agrave;
                        l&rsquo;identification du client et &agrave; la communication, fourniture et fonctionnement des
                        services, gestion des droits et des demandes d&rsquo;exercices des droits des personnes. -
                        Consentement (article 6.a RGPD) : l&rsquo;utilisateur a librement consenti au traitement de ses
                        donn&eacute;es &agrave; caract&egrave;re personnel. - Int&eacute;r&ecirc;t l&eacute;gitime
                        (article 6.f RGPD) : la collecte de certaines cat&eacute;gories de donn&eacute;es personnelles
                        est indispensable et permet entre autre d&rsquo;assurer le bon fonctionnement de notre site
                        ainsi que les fonctionnalit&eacute;s associ&eacute;es.
                    </p>

                    <p>Article 4. Destinataires de vos donn&eacute;es</p>

                    <p>
                        6FIRE Invest https://6fireinvest.com/ est l&rsquo;unique destinataire de vos donn&eacute;es
                        personnelles. En outre, aucune de vos informations personnelles n&rsquo;est publi&eacute;e
                        &agrave; votre insu, &eacute;chang&eacute;e, transf&eacute;r&eacute;e, c&eacute;d&eacute;e ou
                        vendues sur un support quelconque &agrave; des tiers.
                    </p>

                    <p>
                        Dans le cas ou la loi l&rsquo;impose, certains tiers autoris&eacute;s (juridictions
                        concern&eacute;es, m&eacute;diateurs, avocats, huissiers etautres auxiliaires de justice)
                        peuvent avoir acc&egrave;s &agrave; vos donn&eacute;es personnelles.
                    </p>

                    <p>Article 5. Dur&eacute;e de conservation des donn&eacute;es personnelles</p>

                    <p>
                        En tout &eacute;tat de cause, la dur&eacute;e de conservation de vos donn&eacute;es personnelles
                        n&rsquo;exc&egrave;de pas un d&eacute;lai de 36 mois (3 ans) &agrave; compter de la
                        derni&egrave;re connexion/ activit&eacute; sur notre site. A l&rsquo;issue de ce d&eacute;lai,
                        et sans aucune activit&eacute; de votre part, elles feront l&rsquo;objet d&rsquo;un effacement.
                    </p>

                    <p>
                        Par ailleurs, nous nous engageons &agrave; supprimer vos donn&eacute;es personnelles d&egrave;s
                        lors que vous nous en notifiez la demande.
                    </p>

                    <p>Article 6. Vos droits</p>

                    <p>
                        Conform&eacute;ment &agrave; la Loi Informatique et Libert&eacute;s et au RGPD, vous disposez
                        des droits suivants sur le traitement de vos donn&eacute;es &agrave; caract&egrave;re personnel
                        : &bull; droit d&rsquo;acc&egrave;s (article 15 RGPD), de rectification (article 16 RGPD), de
                        mise &agrave; jour, de compl&eacute;tude de vos donn&eacute;es, &bull; droit &agrave;
                        l&rsquo;effacement (ou &laquo; droit &agrave; l&rsquo;oubli &raquo;) de vos donn&eacute;es
                        &agrave; caract&egrave;re personnel (article 17 RGPD), lorsqu&rsquo;elles sont inexactes,
                        incompl&egrave;tes, &eacute;quivoques, p&eacute;rim&eacute;es, ou dont la collecte,
                        l&rsquo;utilisation, la communication ou la conservation est interdite, &bull; droit de retirer
                        &agrave; tout moment votre consentement d&egrave;s lors qu&rsquo;un traitement repose sur cette
                        base l&eacute;gale (article 7 RGPD), &bull; droit &agrave; la limitation du traitement de vos
                        donn&eacute;es (article 18 RGPD), &bull; droit d&rsquo;opposition au traitement de vos
                        donn&eacute;es (article 21 RGPD), &bull; droit &agrave; la portabilit&eacute; des donn&eacute;es
                        que vous nous avez fournies, lorsque vos donn&eacute;es font l&rsquo;objet de traitements
                        automatis&eacute;s fond&eacute;s sur votre consentement ou sur un contrat (article 20 RGPD),
                        &bull; droit de d&eacute;finir le sort de vos donn&eacute;es suite &agrave; votre
                        d&eacute;c&egrave;s et de choisir que nous communiquions (ou non) vos donn&eacute;es &agrave; un
                        tiers que vous aurez pr&eacute;alablement d&eacute;sign&eacute;. En cas de d&eacute;c&egrave;s
                        et &agrave; d&eacute;faut d&rsquo;instructions de votre part, nous nous engageons &agrave;
                        d&eacute;truire vos donn&eacute;es, sauf si leur conservation s&rsquo;av&egrave;re
                        n&eacute;cessaire &agrave; des fins probatoires ou pour r&eacute;pondre &agrave; une obligation
                        l&eacute;gale.
                    </p>

                    <p>
                        Vous pouvez exercer vos droits : &bull; par courrier &agrave; cette adresse postale :
                        support@6fireinvest.com
                    </p>

                    <p>
                        Enfin, vous pouvez &eacute;galement introduire une r&eacute;clamation aupr&egrave;s des
                        autorit&eacute;s de contr&ocirc;le et notamment de la CNIL (https://www.cnil.fr/fr/plaintes) ou
                        de toute autre autorit&eacute; comp&eacute;tente.
                    </p>

                    <p>
                        Article 7. Cookies Un cookie est un petit fichier texte &eacute;mis par le serveur d&rsquo;un
                        site web et qui est inscrit sur le disque dur de votre ordinateur ou de votre appareil mobile.
                        Le cookie contient un code unique permettant de reconna&icirc;tre votre navigateur lors de votre
                        visite sur notre site web ou lors de futures visites r&eacute;p&eacute;t&eacute;es.
                    </p>

                    <p>
                        Notre site 6FIRE Invest https://6fireinvest.com/ utilise principalement deux types de cookies :
                    </p>

                    <p>
                        - Cookies strictement n&eacute;cessaire &agrave; la navigation ; Ces cookies dits &laquo;
                        techniques &raquo; sont requis pour permettre la visite de notre site web et l&rsquo;utilisation
                        de certaines parties de celui-ci. Ils permettent de : naviguer entre les diff&eacute;rentes
                        rubriques du site, compl&eacute;ter des formulaires, v&eacute;rifier de mani&egrave;re
                        s&ucirc;re votre identit&eacute; avant d&rsquo;accorder l&rsquo;acc&egrave;s &agrave; vos
                        informations personnelles lorsqu&rsquo;un compte personnel a &eacute;t&eacute;
                        cr&eacute;&eacute;.
                    </p>

                    <p>
                        - Cookies Google Analytics. Ces cookies sont destin&eacute;s &agrave; r&eacute;colter des
                        informations sur les utilisateurs pour nous permettre par la suite d&rsquo;avoir une vision
                        approfondie et en temps r&eacute;el sur la mani&egrave;re dont notre site est utilis&eacute;.
                        Ils nous permettent de r&eacute;aliser des statistiques.
                    </p>

                    <p>
                        Les informations r&eacute;colt&eacute;es par les cookies sont anonymes et ne permettent pas
                        votre identification en tant que personne. En effet, les informations li&eacute;es aux cookies
                        ne peuvent pas &ecirc;tre associ&eacute;es &agrave; un nom et/ou pr&eacute;nom parce
                        qu&rsquo;elles ne contiennent pas de donn&eacute;es &agrave; caract&egrave;re personnel.
                    </p>

                    <p>
                        Il est possible de vous opposer &agrave; l&rsquo;utilisation des cookies depuis les
                        param&egrave;tres de votre navigateur. La configuration de chaque navigateur est
                        diff&eacute;rente. Il vous appartient de suivre les instructions de l&rsquo;&eacute;diteur de
                        votre navigateur (liens disponible par navigateur diff&eacute;rent) &bull; Si vous utilisez
                        Internet Explorer :
                        https://support.microsoft.com/fr-fr/help/17442/windows-internetexplorer-delete-manage-cookies
                        &bull; Si vous utilisez Safari : https://support.apple.com/fr-fr/guide/safari/sfri11471/mac
                        &bull; Si vous utilisez Firefox : https://support.mozilla.org/fr/kb/cookies-informations-sites
                        enregistrent#w_paramaetres-des-cookies &bull; Si vous utilisez Chrome :
                        https://support.google.com/chrome/answer/95647
                    </p>

                    <p>
                        Nous avertissons qu&rsquo;en cas de refus de l&rsquo;enregistrement des cookies,
                        l&rsquo;exp&eacute;rience de navigation sur notre site peut &ecirc;tre limit&eacute;e. Nous
                        d&eacute;clinons, de ce fait, toute responsabilit&eacute; pour les cons&eacute;quences
                        li&eacute;es au fonctionnement d&eacute;grad&eacute; du site, r&eacute;sultant du refus de
                        cookies de votre part.
                    </p>

                    <p>Article 8. Mineurs Notre site et ses services ne sont pas destin&eacute;s aux mineurs.</p>

                    <p>
                        En tout &eacute;tat de cause, 6FIRE Invest https://6fireinvest.com/ ne collecte pas
                        volontairement des donn&eacute;es &agrave; caract&egrave;re personnel aupr&egrave;s de mineurs
                        &acirc;g&eacute;s de moins de 18 ans. Si vous &ecirc;tes un parent ou un tuteur et que vous
                        pensez que votre enfant nous a fourni des donn&eacute;es a&#768; caract&egrave;re personnel sans
                        votre consentement, veuillez nous contacter par courrier &eacute;lectronique a&#768;
                        l&rsquo;adresse support@6fireinvest.com en indiquant vos noms, pr&eacute;noms, adresse
                        courrielle.
                    </p>

                    <p>Article 9. S&eacute;curit&eacute;</p>

                    <p>
                        6FIRE Invest https://6fireinvest.com/ respecte le RGPD et la loi Informatique et Libert&eacute;s
                        en mati&egrave;re de s&eacute;curit&eacute; et de confidentialit&eacute; de vos donn&eacute;es.
                    </p>

                    <p>
                        Nous mettons en &#339;uvre toutes les mesures techniques et organisationnelles
                        n&eacute;cessaires afin d&rsquo;assurer la s&eacute;curit&eacute; de nos traitements de
                        donn&eacute;es &agrave; caract&egrave;re personnel et la confidentialit&eacute; des
                        donn&eacute;es que nous collectons (pare-feu, encryption et mot de passe).
                    </p>

                    <p>
                        &Agrave; ce titre, nous prenons toutes les pr&eacute;cautions utiles, au regard de la nature des
                        donn&eacute;es et des risques pr&eacute;sent&eacute;s par les traitements pour en
                        pr&eacute;server la s&eacute;curit&eacute; et, notamment, emp&ecirc;cher que les donn&eacute;es
                        soient d&eacute;form&eacute;es, endommag&eacute;es, ou que des tiers non autoris&eacute;s y
                        aient acc&egrave;s.
                    </p>

                    <p>Article 10. Contact</p>

                    <p>
                        Toutes questions, commentaires et demandes concernant cette politique de confidentialit&eacute;
                        ou toutes autres demandes seront bien re&ccedil;ues. Ils devront &ecirc;tre adress&eacute;s par
                        e-mail. Adresse e-mail : support@6fireinvest.com
                    </p>

                    <p>Article 11. R&eacute;vision et mise a&#768; jour de notre politique de confidentialit&eacute;</p>

                    <p>
                        Nous nous engageons &agrave; traiter les donn&eacute;es &agrave; caract&egrave;re personnel
                        conform&eacute;ment aux dispositions l&eacute;gales en vigueur. La pr&eacute;sente politique
                        sera revue en fonction des &eacute;volutions des textes. Vous serez r&eacute;guli&egrave;rement
                        inform&eacute; de cette mise &agrave; jour.
                    </p>

                    <p>(Mise &agrave; jour le : 01/05/2022.</p>
                </div>
            </div>

            {/* Footer section */}
            <Footer />
        </div>
    );
};

export default PolitiqueConfidentialite;
