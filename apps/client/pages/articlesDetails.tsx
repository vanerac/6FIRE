import type { NextPage } from 'next';
import Image from 'next/image';
import Header from './components/header';
import Footer from './components/footer';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import router, { useRouter } from 'next/router';
import getAPIClient from '@shared/tools/apiClient';
import { Article, ArticlePro } from '@shared/services';
import { useCookies } from 'react-cookie';
import draftToHtml from 'draftjs-to-html';

const convertDate = (date: string) => {
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

const data = {
    blocks: [
        {
            key: '2hha',
            text: '',
            type: 'unstyled',
            depth: 0,
            inlineStyleRanges: [],
            entityRanges: [],
            data: {},
        },
    ],
    entityMap: {},
};
const HomePage: NextPage = (props: any) => {
    const [$themeName, setThemeName] = useState('');
    // Todo: Note: Article pro = Article + properties en plus
    const [$articles, setArticles] = useState<Article | ArticlePro>();
    const { query } = useRouter();
    const [$loading, setLoading] = useState(true);
    const [$error, setError] = useState('');
    const [content, setContent] = useState(
        draftToHtml(
            // JSON.parse((res as Article).content as any)
            data as any,
        ),
    );

    const [cookies] = useCookies(['API_TOKEN']);
    const apiClient = getAPIClient(cookies['API_TOKEN']);

    // useEffect(() => {
    // if (!cookies['API_TOKEN']) {
    //     console.log('no token');
    //     router.replace('/');
    //     return;
    // }
    // }, []);

    useEffect(() => {
        console.log('query', query);
        // if (!query.articleId) {
        //     console.log('no articleId');
        //     router.replace('/articlesPage');
        //     return;
        // }

        setLoading(true);
        apiClient.article
            .getArticleById(query.articleId as any)
            .then((res) => {
                setLoading(false);
                setArticles(res as Article | ArticlePro);
                setThemeName((res as Article)?.Theme?.name as string);

                setContent(draftToHtml(JSON.parse((res as Article).content as any) ?? (data as any)));
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
        <div>
            <Head>
                <title>{$articles?.title} - Crypto Trader</title>
            </Head>
            <input type="hidden" id="anPageName" name="page" value="articles-details" />
            <div className="article-details-block">
                <Header isOpenSideBar={props.useStateOpenSideBar} isEspaceTradingCrypto={false} />
                {$articles ? (
                    <div className="article_details_wrapper">
                        <div className="article_header">
                            <Image
                                loader={() => ($articles?.bannerUrl as string) ?? '/img/mask-group-326-1@1x.png'}
                                src={($articles?.bannerUrl as string) ?? '/img/mask-group-326-1@1x.png'}
                                layout="fill"
                                objectFit="cover"
                            />
                        </div>

                        <div className="article_content">
                            <div className="author_box">
                                <div className="author-photo">
                                    <img
                                        src={
                                            ($articles?.Theme?.iconUrl as string) ??
                                            'https://webneel.com/wallpaper/sites/default/files/images/08-2018/3-nature-wallpaper-mountain.jpg'
                                        }
                                    />
                                </div>
                                <div className="category_date">
                                    <div className="category lato-bold-white-16px">
                                        {$articles?.Theme?.name ?? 'Theme Name'}
                                    </div>
                                    {/*`DD-MM-YYYY`*/}
                                    {/*<div className="date lato-normal-manatee-14px">{`${$articles.}`}</div>*/}
                                    <div className="date lato-normal-manatee-14px">
                                        Il y a {$convertDate($articles?.createdAt as string)}
                                    </div>
                                </div>
                            </div>

                            <div className="artitle_title">
                                <h2 className="title lato-bold-white-22px">
                                    {$articles?.title ?? 'Article title very very very long to test'}
                                </h2>
                            </div>
                            <p />

                            <div
                                className="article_text lato-normal-white-16px imgbox"
                                dangerouslySetInnerHTML={{ __html: content }}
                            />
                            {/*<div className="article_text lato-normal-white-16px">*/}
                            {/*    <p>*/}
                            {/*        Attention : Vous devez faire vos propres recherches avant tout investissement. Ce*/}
                            {/*        document ne peut en aucun cas être considéré comme un conseil en investissement.*/}
                            {/*    </p>*/}

                            {/*    <p>*/}
                            {/*        Précédemment utilisés par une population d’initiés, la cryptomonnaie et le trading se*/}
                            {/*        démocratisent et attirent aujourd’hui un grand nombre d’investisseurs. Les monnaies*/}
                            {/*        virtuelles font parler d’elles et attirent les investisseurs néophytes. Cependant, pour*/}
                            {/*        réussir son investissement crypto monnaie sans éviter*/}
                            {/*    </p>*/}

                            {/*    <ol>*/}
                            {/*        <li>Ne pas suffisamment protéger ses comptes</li>*/}
                            {/*        <li>Ne pas comprendre dans quoi on investit</li>*/}
                            {/*        <li>Se tromper d’adresse</li>*/}
                            {/*        <li>Mettre tous ses oeufs dans le même panier</li>*/}
                            {/*        <li>Utiliser des effets de levier</li>*/}
                            {/*    </ol>*/}

                            {/*    <p>*/}
                            {/*        Le sondage montre aussi quelles sont les erreurs les plus courantes commises par les*/}
                            {/*        investisseurs des États-Unis. Sans grande surprise, 38 % des personnes interrogées*/}
                            {/*        regrettent d’avoir cédé à la panique et vendu leurs cryptomonnaies au lieu de patienter*/}
                            {/*        jusqu’à ce que les cours grimpent. 32 % regrettent également d’avoir « tout investi sur*/}
                            {/*        un seul type de coin ».*/}
                            {/*    </p>*/}

                            {/*    <p>*/}
                            {/*        La troisième erreur la plus courante, est le manque de compréhension des marchés de*/}
                            {/*        cryptomonnaies : elle concerne 27 % des personnes interrogées. Enfin, on trouve à la*/}
                            {/*        quatrième place des erreurs les plus courantes les investisseurs qui ont envoyé leurs*/}
                            {/*        cryptomonnaies avant d’avoir la certitude de recevoir un paiement en retour. La*/}
                            {/*        cinquième place est occupée par ceux qui ont acheté au plus haut… Pour revendre au plus*/}
                            {/*        bas*/}
                            {/*    </p>*/}
                            {/*</div>*/}

                            {/*<div className="imgbox">*/}
                            {/*    <Image src="/img/image-878-1@1x.png" layout="fill" />*/}
                            {/*</div>*/}

                            {/*<div className="article_text lato-normal-white-16px">*/}
                            {/*    <p>*/}
                            {/*        Attention : Vous devez faire vos propres recherches avant tout investissement. Ce*/}
                            {/*        document ne peut en aucun cas être considéré comme un conseil en investissement.*/}
                            {/*    </p>*/}

                            {/*    <p>*/}
                            {/*        Précédemment utilisés par une population d’initiés, la cryptomonnaie et le trading se*/}
                            {/*        démocratisent et attirent aujourd’hui un grand nombre d’investisseurs. Les monnaies*/}
                            {/*        virtuelles font parler d’elles et attirent les investisseurs néophytes. Cependant, pour*/}
                            {/*        réussir son investissement crypto monnaie sans éviter*/}
                            {/*    </p>*/}

                            {/*    <ol>*/}
                            {/*        <li>Ne pas suffisamment protéger ses comptes</li>*/}
                            {/*        <li>Ne pas comprendre dans quoi on investit</li>*/}
                            {/*        <li>Se tromper d’adresse</li>*/}
                            {/*        <li>Mettre tous ses oeufs dans le même panier</li>*/}
                            {/*        <li>Utiliser des effets de levier</li>*/}
                            {/*    </ol>*/}

                            {/*    <p>*/}
                            {/*        Le sondage montre aussi quelles sont les erreurs les plus courantes commises par les*/}
                            {/*        investisseurs des États-Unis. Sans grande surprise, 38 % des personnes interrogées*/}
                            {/*        regrettent d’avoir cédé à la panique et vendu leurs cryptomonnaies au lieu de patienter*/}
                            {/*        jusqu’à ce que les cours grimpent. 32 % regrettent également d’avoir « tout investi sur*/}
                            {/*        un seul type de coin ».*/}
                            {/*    </p>*/}

                            {/*    <p>*/}
                            {/*        La troisième erreur la plus courante, est le manque de compréhension des marchés de*/}
                            {/*        cryptomonnaies : elle concerne 27 % des personnes interrogées. Enfin, on trouve à la*/}
                            {/*        quatrième place des erreurs les plus courantes les investisseurs qui ont envoyé leurs*/}
                            {/*        cryptomonnaies avant d’avoir la certitude de recevoir un paiement en retour. La*/}
                            {/*        cinquième place est occupée par ceux qui ont acheté au plus haut… Pour revendre au plus*/}
                            {/*        bas*/}
                            {/*    </p>*/}
                            {/*</div>*/}
                        </div>

                        {/* More article you would love to reaa */}

                        <div className="article-widget">
                            <h2 className="article_category_title lato-bold-white-16px">DANS LA MÊME CATÉGORIE</h2>

                            <div className="more_articles">
                                <div className="grid">
                                    {/* single article */}
                                    {/*<div className="single_article">*/}
                                    {/*    <div className="artitle_thum">*/}
                                    {/*        <Image layout="fill" src="/img/mask-group-321-2@1x.png" />*/}
                                    {/*    </div>*/}
                                    {/*    <div className="cat_and_date">*/}
                                    {/*        <div className="category">*/}
                                    {/*            <p className="lato-normal-milano-red-12px line">Play to Earn</p>*/}
                                    {/*            <p className="article_date lato-light-manatee-12px">Il y a 2 heures</p>*/}
                                    {/*        </div>*/}
                                    {/*    </div>*/}
                                    {/*    <div className="article_title">*/}
                                    {/*        <h4 className="title">Axie Infinity, jeu Play to Earn</h4>*/}
                                    {/*    </div>*/}
                                    {/*</div>*/}
                                    {$articles?.ArticleRecommandation?.map((a, index) => {
                                        const article = a?.Recommandation?.Article;

                                        return (
                                            <div
                                                key={index}
                                                onClick={() =>
                                                    router.replace('/articlesDetails?articleId=' + article?.id)
                                                }
                                                className="single_article">
                                                <div className="artitle_thum">
                                                    <Image
                                                        layout="fill"
                                                        loader={() =>
                                                            (article?.headerUrl as string) ??
                                                            '/img/mask-group-326-1@1x.png'
                                                        }
                                                        src={article?.headerUrl as string}
                                                    />
                                                </div>
                                                <div className="cat_and_date">
                                                    <div className="category">
                                                        <p className="lato-normal-milano-red-12px line">
                                                            {article?.Theme?.name}
                                                        </p>
                                                        <p className="article_date lato-light-manatee-12px">
                                                            Il y a {convertDate(article?.createdAt as string)}
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="article_title">
                                                    <h4 className="title">{article?.title}</h4>
                                                </div>
                                            </div>
                                        );
                                    })}

                                    {/* single article */}
                                    {/*<div className="single_article">*/}
                                    {/*    <div className="artitle_thum">*/}
                                    {/*        <Image layout="fill" src="/img/mask-group-322-2@1x.png" />*/}
                                    {/*    </div>*/}
                                    {/*    <div className="cat_and_date">*/}
                                    {/*        <div className="category">*/}
                                    {/*            <p className="lato-normal-milano-red-12px  line">E-Commerce</p>*/}
                                    {/*            <p className="article_date lato-light-manatee-12px">Il y a 2 heures</p>*/}
                                    {/*        </div>*/}
                                    {/*    </div>*/}
                                    {/*    <div className="article_title">*/}
                                    {/*        <h4 className="title">Axie Infinity, jeu Play to Earn</h4>*/}
                                    {/*    </div>*/}
                                    {/*</div>*/}

                                    {/* single article */}
                                    {/*<div className="single_article">*/}
                                    {/*    <div className="artitle_thum">*/}
                                    {/*        <Image layout="fill" src="/img/mask-group-323-1@1x.png" />*/}
                                    {/*    </div>*/}
                                    {/*    <div className="cat_and_date">*/}
                                    {/*        <div className="category">*/}
                                    {/*            <p className="lato-normal-milano-red-12px  line">Crypto</p>*/}
                                    {/*            <p className="article_date lato-light-manatee-12px">19 février 2022</p>*/}
                                    {/*        </div>*/}
                                    {/*    </div>*/}
                                    {/*    <div className="article_title">*/}
                                    {/*        <h4 className="title">Les 5 erreurs à éviter en crypton</h4>*/}
                                    {/*    </div>*/}
                                    {/*</div>*/}
                                </div>
                            </div>
                        </div>

                        <div className="treading-wrapper">
                            <img src="/img/mask-group-329-1@1x.png" alt="" className="tradingBg" />
                            <div className="tread-container">
                                <div className="text">
                                    <div className="title">OFFRE TRADING</div>
                                    <ul>
                                        <li>+ Stratégies d’investissement</li>
                                        <li>+ Alertes des meilleurs Traders</li>
                                        <li>+ Portefeuille Crypto</li>
                                        <li>+ Canal privé Telegram</li>
                                    </ul>
                                </div>

                                <div className="btnBox">
                                    <button type="submit" className="primary-button">
                                        <span>Rejoindre</span>
                                        <div className="right-arrow">
                                            <img src="/img/icon/right-arrow.png" alt="" />
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : null}
                <Footer />
            </div>
        </div>
    );
};

export default HomePage;
