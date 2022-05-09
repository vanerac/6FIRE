import type { NextPage } from 'next';
import Footer from '../components/footer';
import Header from '../components/header';
import Head from 'next/head';

const Cgu: NextPage = (props: any) => {
    return (
        <div>
            <Head>
                <title>CGU - Crypto Trader</title>
            </Head>
            <input type="hidden" id="anPageName" name="page" value="homepage-1" />
            <Header isOpenSideBar={props.useStateOpenSideBar} isEspaceTradingCrypto={true} />

            <div className="general_text_wrapper">
                <div className="main-title">
                    <h3 className="title">Conditions Générales d’Utilisations</h3>
                </div>

                {/* Text box with title, you can copy to generate new text block */}
                <div className="text">
                    <p>Description des services fournis</p>

                    <p>
                        Le site www.6fireinvest.com a pour objet de fournir une information concernant l&rsquo;ensemble
                        des activit&eacute;s de la soci&eacute;t&eacute;. Le propri&eacute;taire du site s&rsquo;efforce
                        de fournir sur le site www.6fireinvest.com des informations aussi pr&eacute;cises que possible.
                        Toutefois, il ne pourra &ecirc;tre tenue responsable des omissions, des inexactitudes et des
                        carences dans la mise &agrave; jour, qu&rsquo;elles soient de son fait ou du fait des tiers
                        partenaires qui lui fournissent ces informations. Toutes les informations propos&eacute;es sur
                        le site www.6fireinvest.com sont donn&eacute;es &agrave; titre indicatif, sont non exhaustives,
                        et sont susceptibles d&rsquo;&eacute;voluer. Elles sont donn&eacute;es sous r&eacute;serve de
                        modifications ayant &eacute;t&eacute; apport&eacute;es depuis leur mise en ligne.
                    </p>

                    <p>
                        La fourniture des informations ne saurait &ecirc;tre assimil&eacute;e, de quelle que
                        fa&ccedil;on que ce soit, &agrave; un conseil sp&eacute;cifique ou &agrave; une instruction
                        &agrave; la d&eacute;cision afin d&rsquo;effectuer une transaction ou de prendre une
                        d&eacute;cision d&rsquo;investissement. Le Client reconna&icirc;t, en cons&eacute;quence,
                        utiliser les informations et les autres donn&eacute;es du Site qui lui sont propos&eacute;es
                        &agrave; ses seuls risques et p&eacute;rils.
                    </p>

                    <p>Propri&eacute;t&eacute; intellectuelle et contrefa&ccedil;on</p>

                    <p>
                        Le propri&eacute;taire du site est propri&eacute;taire des droits de propri&eacute;t&eacute;
                        intellectuelle ou d&eacute;tient les droits d&rsquo;usage sur tous les &eacute;l&eacute;ments
                        accessibles sur le site, notamment les textes, images, graphismes, logo, ic&ocirc;nes, sons,
                        logiciels&#8230; Toute reproduction, repr&eacute;sentation, modification, publication,
                        adaptation totale ou partielle des &eacute;l&eacute;ments du site, quel que soit le moyen ou le
                        proc&eacute;d&eacute; utilis&eacute;, est interdite, sauf autorisation &eacute;crite
                        pr&eacute;alable &agrave; l&rsquo;email : support@6fireinvest.com. Toute exploitation non
                        autoris&eacute;e du site ou de l&rsquo;un quelconque de ces &eacute;l&eacute;ments qu&rsquo;il
                        contient sera consid&eacute;r&eacute;e comme constitutive d&rsquo;une contrefa&ccedil;on et
                        poursuivie conform&eacute;ment aux dispositions des articles L.335-2 et suivants du Code de
                        Propri&eacute;t&eacute; Intellectuelle, langue de votre navigateur, date et heure de la
                        requ&ecirc;te et URL de provenance.
                    </p>

                    <p>Liens hypertextes et cookies</p>

                    <p>
                        Le site www.6fireinvest.com contient un certain nombre de liens hypertextes vers d&rsquo;autres
                        sites (partenaires, informations,&#8230;) mis en place avec l&rsquo;autorisation du
                        propri&eacute;taire du site. Cependant, le propri&eacute;taire du site n&rsquo;a pas la
                        possibilit&eacute; de v&eacute;rifier le contenu des sites ainsi visit&eacute;s et
                        d&eacute;cline donc toute responsabilit&eacute; de ce fait quand aux risques &eacute;ventuels de
                        contenus illicites.
                    </p>

                    <p>
                        L&rsquo;utilisateur est inform&eacute; que lors de ses visites sur le site www.6fireinvest.com,
                        un ou des cookies sont susceptible de s&rsquo;installer automatiquement sur son ordinateur. Un
                        cookie est un fichier de petite taille, qui ne permet pas l&rsquo;identification de
                        l&rsquo;utilisateur, mais qui enregistre des informations relatives &agrave; la navigation
                        d&rsquo;un ordinateur sur un site. Les donn&eacute;es ainsi obtenues visent &agrave; faciliter
                        la navigation ult&eacute;rieure sur le site, et ont &eacute;galement vocation &agrave; permettre
                        diverses mesures de fr&eacute;quentation. Le param&eacute;trage du logiciel de navigation permet
                        d&rsquo;informer de la pr&eacute;sence de cookie et &eacute;ventuellement, de refuser de la
                        mani&egrave;re d&eacute;crite &agrave; l&rsquo;adresse suivante : www.cnil.fr. Le refus
                        d&rsquo;installation d&rsquo;un cookie peut entra&icirc;ner l&rsquo;impossibilit&eacute;
                        d&rsquo;acc&eacute;der &agrave; certains services. L&rsquo;utilisateur peut toutefois configurer
                        son ordinateur de la mani&egrave;re suivante, pour refuser l&rsquo;installation des cookies :
                        Sous Internet Explorer : onglet outil / options internet. Cliquez sur Confidentialit&eacute; et
                        choisissez Bloquer tous les cookies. Validez sur Ok. Sous Netscape : onglet &eacute;dition /
                        pr&eacute;f&eacute;rences. Cliquez sur Avanc&eacute;es et choisissez D&eacute;sactiver les
                        cookies. Validez sur Ok.
                    </p>

                    <p>Protection des biens et des personnes - Gestions des donn&eacute;es personnelles</p>

                    <p>
                        R&egrave;glement (UE) 2016/679 du Parlement europ&eacute;en et du Conseil du 27 avril 2016
                        relatif &agrave; la protection des personnes physiques &agrave; l&rsquo;&eacute;gard du
                        traitement des donn&eacute;es &agrave; caract&egrave;re personnel et &agrave; la libre
                        circulation de ces donn&eacute;es (ci-apr&egrave;s &laquo; RGPD &raquo;).
                    </p>

                    <p>
                        Utilisateur : Internaute se connectant, utilisant le site susnomm&eacute; : www.6fireinvest.com.
                        En France, les donn&eacute;es personnelles sont notamment prot&eacute;g&eacute;es par la loi
                        n&deg; 78-87 du 6 janvier 1978, la loi n&deg; 2004-801 du 6 ao&ucirc;t 2004, l&rsquo;article L.
                        226-13 du Code p&eacute;nal et la Directive Europ&eacute;enne du 24 octobre 1995.
                    </p>

                    <p>
                        Sur le site www.6fireinvest.com, le propri&eacute;taire du site ne collecte des informations
                        personnelles relatives &agrave; l&rsquo;utilisateur que pour le besoin de certains services
                        propos&eacute;s par le site www.6fireinvest.com. L&rsquo;utilisateur fournit ces informations en
                        toute connaissance de cause, notamment lorsqu&rsquo;il proc&egrave;de par lui-m&ecirc;me
                        &agrave; leur saisie. Il est alors pr&eacute;cis&eacute; &agrave; l&rsquo;utilisateur du site
                        www.6fireinvest.com l&rsquo;obligation ou non de fournir ces informations. Conform&eacute;ment
                        aux articles 15, 16, 17 et 21 du RGPD, ainsi que les dispositions des articles 38 et suivants de
                        la loi 78-17 du 6 janvier 1978 relative &agrave; l&rsquo;informatique, aux fichiers et aux
                        libert&eacute;s, tout utilisateur dispose d&rsquo;un droit d&rsquo;acc&egrave;s, de
                        rectification, de suppression et d&rsquo;opposition aux donn&eacute;es personnelles le
                        concernant. Pour l&rsquo;exercer, adressez votre demande &agrave; support@6firesinvest.com par
                        email : email du webmaster ou en effectuant sa demande &eacute;crite et sign&eacute;e,
                        accompagn&eacute;e d&rsquo;une copie du titre d&rsquo;identit&eacute; avec signature du
                        titulaire de la pi&egrave;ce, en pr&eacute;cisant l&rsquo;adresse &agrave; laquelle la
                        r&eacute;ponse doit &ecirc;tre envoy&eacute;e.
                    </p>

                    <p>
                        Aucune information personnelle de l&rsquo;utilisateur du site www.6fireinvest.com n&rsquo;est
                        publi&eacute;e &agrave; l&rsquo;insu de l&rsquo;utilisateur, &eacute;chang&eacute;e,
                        transf&eacute;r&eacute;e, c&eacute;d&eacute;e ou vendue sur un support quelconque &agrave; des
                        tiers. Seule l&rsquo;hypoth&egrave;se du rachat du site www.6fireinvest.com au
                        propri&eacute;taire du site et de ses droits permettrait la transmission des dites informations
                        &agrave; l&rsquo;&eacute;ventuel acqu&eacute;reur qui serait &agrave; son tour tenu de la
                        m&ecirc;me obligation de conservation et de modification des donn&eacute;es vis &agrave; vis de
                        l&rsquo;utilisateur du site www.6fireinvest.com.
                    </p>

                    <p>Le site www.6fireinvest.com est en conformit&eacute; avec le RGPD.</p>

                    <p>
                        Les bases de donn&eacute;es sont prot&eacute;g&eacute;es par les dispositions de la loi du 1er
                        juillet 1998 transposant la directive 96/9 du 11 mars 1996 relative &agrave; la protection
                        juridique des bases de donn&eacute;es.
                    </p>

                    <p>
                        Pour conna&icirc;tre davantage d&rsquo;informations sur la mani&egrave;re dont vos informations
                        personnelles sont utilis&eacute;es, nous vous invitons &agrave; consulter notre Politique de
                        confidentialit&eacute;.
                    </p>

                    <p></p>
                </div>
            </div>

            {/* Footer section */}
            <Footer />
        </div>
    );
};

export default Cgu;
