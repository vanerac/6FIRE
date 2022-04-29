import type { NextPage } from 'next';
import Image from 'next/image';
import Footer from './components/footer';
import Header from './components/header';
// import checkAuth from './components/checkAuth';
import { useEffect, useState } from 'react';
import router, { useRouter } from 'next/router';
import { useCookies } from 'react-cookie';
import getAPIClient from '@shared/tools/apiClient';
import { Article, ArticlePro } from '@shared/services';

const ArticlesDetailsEntreprise: NextPage = (props: any) => {
    const [$themeName, setThemeName] = useState('');
    // Todo: Note: Article pro = Article + properties en plus
    const [$articles, setArticles] = useState<Article | ArticlePro>();
    const { query } = useRouter();
    const [loading, setLoading] = useState(true);
    const [$error, setError] = useState('');

    const [cookies] = useCookies(['API_TOKEN']);
    const apiClient = getAPIClient(cookies['API_TOKEN']);

    useEffect(() => {
        if (!cookies['API_TOKEN']) {
            console.log('no token');
            router.replace('/');
            return;
        }
    }, []);

    useEffect(() => {
        if (!query.themeId || !query.themeId) {
            router.replace('/');
            return;
        }

        setLoading(true);
        apiClient.article
            .getArticleById(query.articleId as any)
            .then((res) => {
                setLoading(false);
                setArticles(res as Article | ArticlePro);
                setThemeName((res as Article)?.Theme?.name as string);
            })
            .catch((error) => {
                setLoading(false);
                setError(error.i18n ?? error.message ?? 'Unknown error');
            });
    }, [query]);

    const $convertDate = (date: string) => {
        const date_unix = new Date(date).getTime() / 1000;
        const now = new Date().getTime() / 1000;
        const diff = now - date_unix;
        const days = Math.floor(diff / 86400);
        const hours = Math.floor((diff - days * 86400) / 3600);
        const minutes = Math.floor((diff - days * 86400 - hours * 3600) / 60);
        const seconds = Math.floor(diff - days * 86400 - hours * 3600 - minutes * 60);
        if (days > 0) {
            return `${days} jours`;
        } else if (hours > 0) {
            return `${hours} heures`;
        } else if (minutes > 0) {
            return `${minutes} minutes`;
        } else {
            return `${seconds} secondes`;
        }
    };

    return (
        // <div>
        //     <input type="hidden" id="anPageName" name="page" value="articles-details-entreprise" />
        //     <div className="articles-details-entreprise screen">
        //         <div className="background-pYC6Z9" />
        //         <Header isOpenSideBar={props.useStateOpenSideBar} isEspaceTradingCrypto={false} />
        //         <div className="photography-pYC6Z9">
        //             <div className="groupe-de-masques-326-hN4iYT">
        //                 <Image src="/img/mask-group-326-2@1x.png" layout="fill" objectFit="cover" />
        //             </div>
        //             <div className="rectangle-3501-hN4iYT"></div>
        //         </div>
        //         <div className="articles-pYC6Z9">
        //             <div className="background-oPk1gG"></div>
        //             <div className="thmatique-oPk1gG lato-bold-white-16px">Play to Earn</div>
        //             <div className="date-oPk1gG lato-normal-manatee-14px">27 Février 2022</div>
        //             <div className="titre-oPk1gG lato-bold-white-22px">Axie Infinity</div>
        //             <div className="paragraphe-oPk1gG">
        //                 <span className="span0-FI3kU6 lato-bold-white-16px">Métier : </span>
        //                 <span className="span1-FI3kU6 lato-normal-white-16px">Gamer</span>
        //             </div>
        //             <div className="paragraphe-vHUlXR lato-bold-white-16px-2">
        //                 <span className="span0-La1jqd lato-normal-white-16px">
        //                     34 % des personnes interrogées révèlent ainsi conserver leurs cryptomonnaies sur Coinbase,
        //                     26 % ont choisi Robinhood, puis Binance suit avec 24 % d’entre elles. Ce sont aussi Coinbase
        //                     et Binance qui représentent les plus gros investissements moyens : chaque personne
        //                     interrogée y stocke en moyenne 2 742 dollars et 2 813 dollars respectivement.
        //                     <br />
        //                 </span>
        //                 <span className="span1-La1jqd lato-bold-white-16px">
        //                     <br />
        //                     ➡️{' '}
        //                 </span>
        //                 <span className="span2-La1jqd lato-bold-white-16px">
        //                     À lire également : Comment débuter dans les cryptomonnaies ?
        //                 </span>
        //             </div>
        //             <div className="paragraphe-mL2Mzq lato-light-manatee-14px">Source : Cryptovantage</div>
        //             <div className="logo-thmatique-oPk1gG">
        //                 <div className="groupe-1501-scRhdd">
        //                     <Image layout="fill" src="/img/group-1501-1@1x.png" />
        //                 </div>
        //             </div>
        //             <div className="paragraphe-b5nvOG lato-normal-white-14px-2">
        //                 <span className="span0-U5r6KB lato-bold-white-14px">
        //                     Description :<br />
        //                 </span>
        //                 <span className="span1-U5r6KB lato-normal-white-14px">
        //                     Axie Infinity est un univers d’animaux de compagnie numérique décentralisé où les joueurs
        //                     combattent, élèvent et échangent des créatures fantastiques appelées Axies. Les joueurs
        //                     gagnent des revenus sous la forme de jetons fongibles appelés Smooth Love Potions (SLP) en
        //                     remportant des batailles entre Axies.
        //                 </span>
        //             </div>
        //             <div className="ellipse-17690-oPk1gG"></div>
        //             <div className="paragraphe-xQ45ko lato-normal-white-14px-2">
        //                 <span className="span0-YxJOMq lato-bold-white-14px">
        //                     Outils nécessaires :<br />
        //                 </span>
        //                 <span className="span1-YxJOMq lato-normal-white-14px">
        //                     Ordinateur ou mobile avec une connexion internet
        //                 </span>
        //             </div>
        //             <div className="paragraphe-X6msZf lato-normal-white-14px-2">
        //                 <span className="span0-Fql9dM lato-bold-white-14px">
        //                     Salaire moyen :<br />
        //                 </span>
        //                 <span className="span1-Fql9dM lato-normal-white-14px">
        //                     Les joueurs du monde entier gagnent entre 500 et 1 000 $ par mois en jouant au jeu.
        //                 </span>
        //             </div>
        //             <div className="paragraphe-3jXMD4 lato-normal-white-14px-2">
        //                 <span className="span0-x5Jokp lato-bold-white-14px">
        //                     Tarification de la plateforme :<br />
        //                 </span>
        //                 <span className="span1-x5Jokp lato-normal-white-14px">
        //                     Pour jouer à Axie Infinity, un joueur doit d’abord acheter une équipe de trois Axies, qui
        //                     sont eux-mêmes des jetons non fongibles (NFT).
        //                     <br />
        //                     <br />
        //                     Une équipe de départ coûte environ 500 $.
        //                 </span>
        //             </div>
        //             <div className="paragraphe-dZuxh8 lato-normal-white-14px-2">
        //                 <span className="span0-PsuDbo lato-bold-white-14px">
        //                     Utilisateurs générant des revenus sur la plateforme :<br />
        //                 </span>
        //                 <span className="span1-PsuDbo lato-normal-white-14px">
        //                     350 000 utilisateurs actifs mensuels
        //                 </span>
        //             </div>
        //             <div className="paragraphe-Rhdrvx lato-normal-white-14px-2">
        //                 <span className="span0-BQTFKX lato-bold-white-14px">
        //                     Nécessite une audience :<br />
        //                 </span>
        //                 <span className="span1-BQTFKX lato-normal-white-14px">Non</span>
        //             </div>
        //             <div className="paragraphe-hmxhJx lato-normal-white-14px-2">
        //                 <span className="span0-OJyrkC lato-bold-white-14px">
        //                     Financement :<br />
        //                 </span>
        //                 <span className="span1-OJyrkC lato-normal-white-14px">9 millions $</span>
        //             </div>
        //             <div className="paragraphe-zKVajr lato-normal-white-14px-2">
        //                 <span className="span0-yzk5Xo lato-bold-white-14px">
        //                     Création :<br />
        //                 </span>
        //                 <span className="span1-yzk5Xo lato-normal-white-14px">2018</span>
        //             </div>
        //             <div className="image-883-oPk1gG">
        //                 <Image layout="fill" src="/img/image-883-1@1x.png" />
        //             </div>
        //         </div>
        //         <div className="articles-suggrs-pYC6Z9">
        //             <div className="article-9VcorZ">
        //                 <div className="groupe-de-masques-321-ODgvb0">
        //                     <Image layout="fill" src="/img/mask-group-321-1@1x.png" />
        //                 </div>
        //                 <div className="club-premium-ODgvb0 lato-normal-grenadier-14px">Crypto</div>
        //                 <div className="ligne-12-ODgvb0">
        //                     <Image layout="fill" src="/img/line-15-2@1x.png" />
        //                 </div>
        //                 <div className="club-premium-b9RU8U lato-light-manatee-14px">Il y a 2 heures</div>
        //                 <div className="club-premium-SskDad lato-bold-white-16px">
        //                     Les cryptomonaies, par où commencer ?
        //                 </div>
        //                 <div className="rectangle-3498-ODgvb0"></div>
        //             </div>
        //             <div className="article-G8XiCr">
        //                 <div className="groupe-de-masques-322-Bwewb5">
        //                     <Image layout="fill" src="/img/mask-group-322-1@1x.png" />
        //                 </div>
        //                 <div className="club-premium-Bwewb5 lato-normal-grenadier-14px">Crypto</div>
        //                 <div className="ligne-13-Bwewb5">
        //                     <Image layout="fill" src="/img/line-15-2@1x.png" />
        //                 </div>
        //                 <div className="club-premium-h2BJkl lato-light-manatee-14px">19 février 2022</div>
        //                 <div className="club-premium-XPKVWG lato-bold-white-16px">Pourquoi investir dans l’AVAX ?</div>
        //                 <div className="rectangle-3500-Bwewb5"></div>
        //             </div>
        //             <div className="article-wM8vZQ">
        //                 <div className="groupe-de-masques-323-7VMJx4">
        //                     <Image layout="fill" src="/img/mask-group-323-1@1x.png" />
        //                 </div>
        //                 <div className="club-premium-7VMJx4 lato-normal-grenadier-14px">Crypto</div>
        //                 <div className="ligne-14-7VMJx4">
        //                     <Image layout="fill" src="/img/line-15-2@1x.png" />
        //                 </div>
        //                 <div className="club-premium-FPYQ25 lato-light-manatee-14px">19 février 2022</div>
        //                 <div className="club-premium-0vdrJU lato-bold-white-16px">Les 5 erreurs à éviter en crypto</div>
        //                 <div className="rectangle-3501-7VMJx4"></div>
        //             </div>
        //         </div>
        //         <div className="bandeau-call-to-action-pYC6Z9">
        //             <div className="groupe-de-masques-329-f6PEkN">
        //                 <Image layout="fill" src="/img/mask-group-329-1@1x.png" />
        //             </div>
        //             <div className="club-premium-f6PEkN lato-bold-white-18px">OFFRE TRADING</div>
        //             <div className="club-premium-Kjbbz9 lato-normal-white-14px">+ Stratégies d’investissement</div>
        //             <div className="club-premium-CtN09x lato-normal-white-14px">+ Canal privé Telegram</div>
        //             <div className="club-premium-IRGJLp lato-normal-white-14px">+ Portefeuille Crypto</div>
        //             <div className="club-premium-XnCFjN lato-normal-white-14px">+ Alertes des meilleurs Traders</div>
        //             <div className="button-f6PEkN">
        //                 <div className="rectangle-3572-r3N4xr"></div>
        //                 <div className="exclu-membre-confirm-r3N4xr lato-bold-white-14px">Rejoindre</div>
        //             </div>
        //         </div>
        //         <div className="avertissement-pYC6Z9">
        //             <div className="groupe-3020-NTsxb4">
        //                 <div className="rectangle-3606-vfjYHn"></div>
        //                 <div className="les-investissements-vfjYHn lato-normal-white-12px-2">
        //                     <span className="span0-Ol5mdp lato-bold-white-12px">Les investissements sont risqués.</span>
        //                     <span className="span1-Ol5mdp lato-normal-white-12px">
        //                         Les investissements sont risqués par nature, les utilisateurs doivent faire leurs
        //                         propres recherches avant d’entreprendre toute action et n’investir que dans les limites
        //                         de leurs capacités financières. Cet article ne constitue pas un conseil en
        //                         investissement.
        //                     </span>
        //                 </div>
        //             </div>
        //             <div className="ligne-41-NTsxb4">
        //                 <Image layout="fill" src="/img/line-41-2@1x.png" />
        //             </div>
        //         </div>
        //         <Footer />
        //     </div>
        //     <div className="articles-details-entreprise-mobile screen">
        //         <div className="background-gHf5I6"></div>
        //         <div className="rectangle-3484-gHf5I6"></div>
        //         <div className="photography-gHf5I6">
        //             <div className="groupe-de-masques-326-ngQ0AP">
        //                 <Image layout="fill" src="/img/groupe-de-masques-326-6@1x.png" objectFit="cover" />
        //             </div>
        //             <div className="rectangle-3501-ngQ0AP"></div>
        //         </div>
        //         <div className="toogle-button-gHf5I6">
        //             <div className="icon-ionic-ios-moon-CQWJjF">
        //                 <Image layout="fill" src="/img/icon-ionic-ios-moon-15@1x.png" />
        //             </div>
        //             <div className="toogle-button-CQWJjF">
        //                 <div className="rectangle-3485-J5jY58"></div>
        //                 <div className="ellipse-17688-J5jY58"></div>
        //             </div>
        //         </div>
        //         <div className="avertissement-gHf5I6">
        //             <div className="groupe-3020-ZLVfWk">
        //                 <div className="rectangle-3606-Bux5Fp"></div>
        //                 <div className="les-investissements-Bux5Fp lato-normal-white-12px-2">
        //                     <span className="span0-tDhXcl lato-bold-white-12px">Les investissements sont risqués.</span>
        //                     <span className="span1-tDhXcl lato-normal-white-12px">
        //                         Les investissements sont risqués par nature, les utilisateurs doivent faire leurs
        //                         propres recherches avant d’entreprendre toute action et n’investir que dans les limites
        //                         de leurs capacités financières. Cet article ne constitue pas un conseil en
        //                         investissement.
        //                     </span>
        //                 </div>
        //             </div>
        //             <div className="ligne-41-ZLVfWk">
        //                 <Image layout="fill" src="/img/ligne-41-15@1x.png" />
        //             </div>
        //         </div>
        //         <div className="footer-gHf5I6">
        //             <div className="background-3acehH"></div>
        //             <div className="menu-footer-3acehH">
        //                 <div className="mentions-lgales-gKXiNp sourcesanspro-semi-bold-sonic-silver-14px">
        //                     Mentions légales
        //                 </div>
        //                 <div className="cgu-gKXiNp sourcesanspro-semi-bold-sonic-silver-14px">CGU</div>
        //                 <div className="cgv-gKXiNp sourcesanspro-semi-bold-sonic-silver-14px">CGV</div>
        //                 <div className="politique-de-confidentialit-gKXiNp sourcesanspro-semi-bold-sonic-silver-14px">
        //                     Politique de confidentialité
        //                 </div>
        //                 <div className="contact-gKXiNp sourcesanspro-semi-bold-sonic-silver-14px">Contact</div>
        //             </div>
        //             <div className="x2022-6-fire-invest-3acehH sourcesanspro-semi-bold-gray-14px">
        //                 Ⓒ 2022 - 6FIRE INVEST
        //             </div>
        //             <div className="logo-3acehH">
        //                 <div className="groupe-2-HKX5L7">
        //                     <div className="groupe-1-kRCzg0">
        //                         <Image layout="fill" src="/img/group-1-9@1x.png" />
        //                     </div>
        //                 </div>
        //                 <div className="effect-HKX5L7">
        //                     <Image layout="fill" src="/img/effect-12@1x.png" />
        //                 </div>
        //             </div>
        //             <div className="ligne-31-3acehH">
        //                 <Image layout="fill" src="/img/ligne-31-14@1x.png" />
        //             </div>
        //             <div className="groupe-3011-3acehH">
        //                 <div className="icon-instagram-ysQR5T">
        //                     <Image layout="fill" src="/img/fontawsome--instagram--8@1x.png" />
        //                 </div>
        //             </div>
        //             <div className="groupe-3010-3acehH">
        //                 <div className="icon-simple-tiktok-rItbZo">
        //                     <Image layout="fill" src="/img/icon-simple-tiktok-1@1x.png" />
        //                 </div>
        //             </div>
        //             <div className="icon-paper_plane-3acehH">
        //                 <Image layout="fill" src="/img/icon-awesome-telegram-plane-1@1x.png" />
        //             </div>
        //         </div>
        //         <div className="articles-gHf5I6">
        //             <div className="background-AKDF04"></div>
        //             <div className="thmatique-AKDF04 lato-bold-white-16px">Play to Earn</div>
        //             <div className="date-AKDF04 lato-normal-manatee-14px">27 Février 2022</div>
        //             <div className="paragraphe-AKDF04 lato-bold-white-16px-2">
        //                 <span className="span0-UWzAhS lato-normal-white-16px">
        //                     34 % des personnes interrogées révèlent ainsi conserver leurs cryptomonnaies sur Coinbase,
        //                     26 % ont choisi Robinhood, puis Binance suit avec 24 % d’entre elles. Ce sont aussi Coinbase
        //                     et Binance qui représentent les plus gros investissements moyens : chaque personne
        //                     interrogée y stocke en moyenne 2 742 dollars et 2 813 dollars respectivement.
        //                     <br />
        //                 </span>
        //                 <span className="span1-UWzAhS lato-bold-white-16px">
        //                     <br />
        //                     ➡️{' '}
        //                 </span>
        //                 <span className="span2-UWzAhS lato-bold-white-16px">
        //                     À lire également : Comment débuter dans les cryptomonnaies ?
        //                 </span>
        //             </div>
        //             <div className="paragraphe-eeROcA lato-light-manatee-14px">Source : Cryptovantage</div>
        //             <div className="logo-thmatique-AKDF04">
        //                 <div className="groupe-1501-ijqWWZ">
        //                     <Image layout="fill" src="/img/group-1501-1@1x.png" />
        //                 </div>
        //             </div>
        //             <div className="titre-AKDF04 lato-bold-white-22px">Axie Infinity</div>
        //             <div className="paragraphe-489EdE">
        //                 <span className="span0-SuedxV lato-bold-white-16px">Métier : </span>
        //                 <span className="span1-SuedxV lato-normal-white-16px">Gamer</span>
        //             </div>
        //             <div className="ellipse-17690-AKDF04"></div>
        //             <div className="paragraphe-2Lx2dh lato-normal-white-14px-2">
        //                 <span className="span0-xLNjzF lato-bold-white-14px">
        //                     Description :<br />
        //                 </span>
        //                 <span className="span1-xLNjzF lato-normal-white-14px">
        //                     Axie Infinity est un univers d’animaux de compagnie numérique décentralisé où les joueurs
        //                     combattent, élèvent et échangent des créatures fantastiques appelées Axies. Les joueurs
        //                     gagnent des revenus sous la forme de jetons fongibles appelés Smooth Love Potions (SLP) en
        //                     remportant des batailles entre Axies.
        //                 </span>
        //             </div>
        //             <div className="paragraphe-JZCPaR lato-normal-white-14px-2">
        //                 <span className="span0-yPwbSj lato-bold-white-14px">
        //                     Salaire moyen :<br />
        //                 </span>
        //                 <span className="span1-yPwbSj lato-normal-white-14px">
        //                     Les joueurs du monde entier gagnent entre 500 et 1 000 $ par mois en jouant au jeu.
        //                 </span>
        //             </div>
        //             <div className="paragraphe-DTNf7V lato-normal-white-14px-2">
        //                 <span className="span0-ZETWV2 lato-bold-white-14px">
        //                     Tarification de la plateforme :<br />
        //                 </span>
        //                 <span className="span1-ZETWV2 lato-normal-white-14px">
        //                     Pour jouer à Axie Infinity, un joueur doit d’abord acheter une équipe de trois Axies, qui
        //                     sont eux-mêmes des jetons non fongibles (NFT).
        //                     <br />
        //                     <br />
        //                     Une équipe de départ coûte environ 500 $.
        //                 </span>
        //             </div>
        //             <div className="paragraphe-587B1K lato-normal-white-14px-2">
        //                 <span className="span0-sMsr89 lato-bold-white-14px">
        //                     Outils nécessaires :<br />
        //                 </span>
        //                 <span className="span1-sMsr89 lato-normal-white-14px">
        //                     Ordinateur ou mobile avec une connexion internet
        //                 </span>
        //             </div>
        //             <div className="paragraphe-oVnfah lato-normal-white-14px-2">
        //                 <span className="span0-Bl32Rl lato-bold-white-14px">
        //                     Création :<br />
        //                 </span>
        //                 <span className="span1-Bl32Rl lato-normal-white-14px">2018</span>
        //             </div>
        //             <div className="paragraphe-VHyhrI lato-normal-white-14px-2">
        //                 <span className="span0-dRP4ZZ lato-bold-white-14px">
        //                     Utilisateurs générant des revenus sur la plateforme :<br />
        //                 </span>
        //                 <span className="span1-dRP4ZZ lato-normal-white-14px">
        //                     350 000 utilisateurs actifs mensuels
        //                 </span>
        //             </div>
        //             <div className="paragraphe-sw9lzh lato-normal-white-14px-2">
        //                 <span className="span0-w2jIKU lato-bold-white-14px">
        //                     Nécessite une audience :<br />
        //                 </span>
        //                 <span className="span1-w2jIKU lato-normal-white-14px">Non</span>
        //             </div>
        //             <div className="paragraphe-moBgPi lato-normal-white-14px-2">
        //                 <span className="span0-jpX4Go lato-bold-white-14px">
        //                     Financement :<br />
        //                 </span>
        //                 <span className="span1-jpX4Go lato-normal-white-14px">9 millions $</span>
        //             </div>
        //             <div className="image-883-AKDF04">
        //                 <Image layout="fill" src="/img/image-883-2@1x.png" />
        //             </div>
        //         </div>
        //         <div className="articles-suggrs-gHf5I6">
        //             <div className="article-WWyidW">
        //                 <div className="groupe-de-masques-321-IQF6Pb">
        //                     <Image layout="fill" src="/img/groupe-de-masques-321-17@1x.png" />
        //                 </div>
        //                 <div className="club-premium-IQF6Pb lato-normal-milano-red-12px">Crypto</div>
        //                 <div className="ligne-12-IQF6Pb">
        //                     <Image layout="fill" src="/img/ligne-12-18@1x.png" />
        //                 </div>
        //                 <div className="club-premium-4aBjtX lato-light-manatee-12px">Il y a 2 heures</div>
        //                 <div className="club-premium-JBMz2x lato-bold-white-16px">
        //                     Les cryptomonaies, par où commencer ?
        //                 </div>
        //                 <div className="rectangle-3498-IQF6Pb"></div>
        //             </div>
        //             <div className="article-bhbOKv">
        //                 <div className="groupe-de-masques-322-sjFomq">
        //                     <Image layout="fill" src="/img/groupe-de-masques-322-17@1x.png" />
        //                 </div>
        //                 <div className="club-premium-sjFomq lato-normal-milano-red-12px">Crypto</div>
        //                 <div className="ligne-13-sjFomq">
        //                     <Image layout="fill" src="/img/ligne-13-14@1x.png" />
        //                 </div>
        //                 <div className="club-premium-Oz5hDb lato-light-manatee-12px">19 février 2022</div>
        //                 <div className="club-premium-9h4AG1 lato-bold-white-16px">Pourquoi investir dans l’AVAX ?</div>
        //                 <div className="rectangle-3500-sjFomq"></div>
        //             </div>
        //             <div className="article-0ilyF3">
        //                 <div className="groupe-de-masques-323-BIp9bm">
        //                     <Image layout="fill" src="/img/groupe-de-masques-323-17@1x.png" />
        //                 </div>
        //                 <div className="club-premium-BIp9bm lato-normal-milano-red-12px">Crypto</div>
        //                 <div className="ligne-14-BIp9bm">
        //                     <Image layout="fill" src="/img/ligne-14-17@1x.png" />
        //                 </div>
        //                 <div className="club-premium-6a9obM lato-light-manatee-12px">19 février 2022</div>
        //                 <div className="club-premium-eZANFJ lato-bold-white-16px">Les 5 erreurs à éviter en crypto</div>
        //                 <div className="rectangle-3501-BIp9bm"></div>
        //             </div>
        //             <div className="rectangle-3574-WWyidW"></div>
        //             <div className="dans-la-mme-catgorie-WWyidW lato-bold-white-16px">DANS LA MÊME CATÉGORIE</div>
        //         </div>
        //         <div className="call-to-action-gHf5I6">
        //             <div className="groupe-de-masques-328-6XqzRr">
        //                 <Image layout="fill" src="/img/groupe-de-masques-328-1@1x.png" />
        //             </div>
        //             <div className="club-premium-6XqzRr lato-bold-white-18px">OFFRE TRADING</div>
        //             <div className="club-premium-uQXx6t lato-normal-white-14px">+ Stratégies d’investissement</div>
        //             <div className="club-premium-LGM1xS lato-normal-white-14px">+ Canal privé Telegram</div>
        //             <div className="club-premium-2mCt9N lato-normal-white-14px">+ Portefeuille Crypto</div>
        //             <div className="club-premium-pOAVKp lato-normal-white-14px">+ Alertes des meilleurs Traders</div>
        //             <div className="button-6XqzRr">
        //                 <div className="rectangle-3572-czhUgN"></div>
        //                 <div className="exclu-membre-confirm-czhUgN lato-bold-white-14px">Rejoindre</div>
        //             </div>
        //         </div>
        //         <div className="search-bar-gHf5I6">
        //             <div className="icon-search-ju6dFa">
        //                 <Image layout="fill" src="/img/icon-ionic-ios-search-27@1x.png" />
        //             </div>
        //         </div>
        //         <div className="rectangle-3607-gHf5I6"></div>
        //         <div className="groupe-3022-gHf5I6">
        //             <div className="rectangle-3556-ctcqD6"></div>
        //             <div className="trading-ctcqD6 lato-bold-white-14px">Espace Trading &amp; Crypto</div>
        //         </div>
        //         <div className="menu-gHf5I6">
        //             <div className="icon-ionic-ios-menu-RexYWB">
        //                 <div className="trac-1-iXOvRV">
        //                     <Image layout="fill" src="/img/path-1-10@1x.png" />
        //                 </div>
        //                 <div className="trac-2-iXOvRV">
        //                     <Image layout="fill" src="/img/path-2-10@1x.png" />
        //                 </div>
        //             </div>
        //         </div>
        //         <div className="logo-gHf5I6">
        //             <div className="effect-oedgVX">
        //                 <Image layout="fill" src="/img/effect-47@1x.png" />
        //             </div>
        //         </div>
        //     </div>
        // </div>
        <div>
            <input type="hidden" id="anPageName" name="page" value="articles-details" />
            <div className="article-details-block">
                {!loading ? (
                    <>
                        <Header isOpenSideBar={props.useStateOpenSideBar} isEspaceTradingCrypto={true} />

                        <div className="article_details_wrapper">
                            <div className="article_header">
                                <Image src="/img/mask-group-326-1@1x.png" layout="fill" objectFit="cover" />
                            </div>

                            <div className="article_content">
                                <div className="author_box">
                                    <div className="author-photo">
                                        <Image src="/img/group-1490-3@1x.png" layout="fill" />
                                    </div>
                                    <div className="category_date">
                                        <div className="category lato-bold-white-16px">
                                            Page articles details entreprise
                                        </div>
                                        <div className="date lato-normal-manatee-14px">
                                            <span>Il y a 2 heures</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="artitle_title">
                                    <h2 className="title lato-bold-white-22px">TEST Title</h2>
                                </div>

                                <div className="article_text lato-normal-white-16px">TEST content</div>

                                {/* <p>
                                    Attention : Vous devez faire vos propres recherches avant tout investissement.
                                    Ce document ne peut en aucun cas être considéré comme un conseil en
                                    investissement.
                                </p>

                                <p>
                                    Précédemment utilisés par une population d’initiés, la cryptomonnaie et le
                                    trading se démocratisent et attirent aujourd’hui un grand nombre
                                    d’investisseurs. Les monnaies virtuelles font parler d’elles et attirent les
                                    investisseurs néophytes. Cependant, pour réussir son investissement crypto
                                    monnaie sans éviter
                                </p>

                                <ol>
                                    <li>Ne pas suffisamment protéger ses comptes</li>
                                    <li>Ne pas comprendre dans quoi on investit</li>
                                    <li>Se tromper d’adresse</li>
                                    <li>Mettre tous ses oeufs dans le même panier</li>
                                    <li>Utiliser des effets de levier</li>
                                </ol>

                                <p>
                                    Le sondage montre aussi quelles sont les erreurs les plus courantes commises par
                                    les investisseurs des États-Unis. Sans grande surprise, 38 % des personnes
                                    interrogées regrettent d’avoir cédé à la panique et vendu leurs cryptomonnaies
                                    au lieu de patienter jusqu’à ce que les cours grimpent. 32 % regrettent
                                    également d’avoir « tout investi sur un seul type de coin ».
                                </p>

                                <p>
                                    La troisième erreur la plus courante, est le manque de compréhension des marchés
                                    de cryptomonnaies : elle concerne 27 % des personnes interrogées. Enfin, on
                                    trouve à la quatrième place des erreurs les plus courantes les investisseurs qui
                                    ont envoyé leurs cryptomonnaies avant d’avoir la certitude de recevoir un
                                    paiement en retour. La cinquième place est occupée par ceux qui ont acheté au
                                    plus haut… Pour revendre au plus bas
                                </p> */}

                                {/* <div className="imgbox">
                                <Image src="/img/image-878-1@1x.png" layout="fill" />
                            </div> */}

                                {/* <div className="article_text lato-normal-white-16px">
                                <p>
                                    Attention : Vous devez faire vos propres recherches avant tout investissement.
                                    Ce document ne peut en aucun cas être considéré comme un conseil en
                                    investissement.
                                </p>

                                <p>
                                    Précédemment utilisés par une population d’initiés, la cryptomonnaie et le
                                    trading se démocratisent et attirent aujourd’hui un grand nombre
                                    d’investisseurs. Les monnaies virtuelles font parler d’elles et attirent les
                                    investisseurs néophytes. Cependant, pour réussir son investissement crypto
                                    monnaie sans éviter
                                </p>

                                <ol>
                                    <li>Ne pas suffisamment protéger ses comptes</li>
                                    <li>Ne pas comprendre dans quoi on investit</li>
                                    <li>Se tromper d’adresse</li>
                                    <li>Mettre tous ses oeufs dans le même panier</li>
                                    <li>Utiliser des effets de levier</li>
                                </ol>

                                <p>
                                    Le sondage montre aussi quelles sont les erreurs les plus courantes commises par
                                    les investisseurs des États-Unis. Sans grande surprise, 38 % des personnes
                                    interrogées regrettent d’avoir cédé à la panique et vendu leurs cryptomonnaies
                                    au lieu de patienter jusqu’à ce que les cours grimpent. 32 % regrettent
                                    également d’avoir « tout investi sur un seul type de coin ».
                                </p>

                                <p>
                                    La troisième erreur la plus courante, est le manque de compréhension des marchés
                                    de cryptomonnaies : elle concerne 27 % des personnes interrogées. Enfin, on
                                    trouve à la quatrième place des erreurs les plus courantes les investisseurs qui
                                    ont envoyé leurs cryptomonnaies avant d’avoir la certitude de recevoir un
                                    paiement en retour. La cinquième place est occupée par ceux qui ont acheté au
                                    plus haut… Pour revendre au plus bas
                                </p>
                            </div> */}
                            </div>

                            {/* More article you would love to reaa */}

                            <div className="article-widget">
                                <h2 className="article_category_title lato-bold-white-16px">DANS LA MÊME CATÉGORIE</h2>

                                <div className="more_articles">
                                    <div className="grid">
                                        {/* single article */}
                                        <div className="single_article">
                                            <div className="artitle_thum">
                                                <Image layout="fill" src="/img/mask-group-321-2@1x.png" />
                                            </div>
                                            <div className="cat_and_date">
                                                <div className="category">
                                                    <p className="lato-normal-milano-red-12px line">Play to Earn</p>
                                                    <p className="article_date lato-light-manatee-12px">
                                                        Il y a 2 heures
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="article_title">
                                                <h4 className="title">Axie Infinity, jeu Play to Earn</h4>
                                            </div>
                                        </div>

                                        {/* single article */}
                                        <div className="single_article">
                                            <div className="artitle_thum">
                                                <Image layout="fill" src="/img/mask-group-322-2@1x.png" />
                                            </div>
                                            <div className="cat_and_date">
                                                <div className="category">
                                                    <p className="lato-normal-milano-red-12px  line">E-Commerce</p>
                                                    <p className="article_date lato-light-manatee-12px">
                                                        Il y a 2 heures
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="article_title">
                                                <h4 className="title">Axie Infinity, jeu Play to Earn</h4>
                                            </div>
                                        </div>

                                        {/* single article */}
                                        <div className="single_article">
                                            <div className="artitle_thum">
                                                <Image layout="fill" src="/img/mask-group-323-1@1x.png" />
                                            </div>
                                            <div className="cat_and_date">
                                                <div className="category">
                                                    <p className="lato-normal-milano-red-12px  line">Crypto</p>
                                                    <p className="article_date lato-light-manatee-12px">
                                                        19 février 2022
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="article_title">
                                                <h4 className="title">Les 5 erreurs à éviter en crypton</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Footer />
                    </>
                ) : (
                    <>loading</>
                )}
            </div>
        </div>
    );
};

// export default checkAuth(ArticlesDetailsEntreprise);
export default ArticlesDetailsEntreprise;
