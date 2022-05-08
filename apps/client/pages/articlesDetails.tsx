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
import Podcast from './components/articles/podcast/podcast';

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
        //     router.replace('/accueil');
        //     return;
        // }

        if (query.member == 'true') {
            apiClient.user.getMyStats().then((user) => {
                apiClient.user.getMySubscriptions().then((res) => {
                    // if (res[0].lenght == 0 || res[0].Subscription.level < 2) {
                    //     router.replace('/accueil');
                    // }
                    console.log('resULT -> ', res[0]?.Subscription?.level);
                    if (user.isAdmin == false) {
                        if (res.length == 0 || (res as any)[0]?.Subscription?.level < 2) {
                            router.replace('/accueil');
                        }
                    }
                    console.log('out');
                });
            });
        }

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
    console.log($articles);
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
                        </div>

                        {$articles.podcastUrl && (
                            <div className="max-w-[1200px] m-auto p-[30px] relative">
                                <Podcast
                                    track={{
                                        title: $articles.title ?? 'PODCAST',
                                        audioSrc: $articles.podcastUrl ?? '',
                                        image: ($articles?.bannerUrl as string) ?? '/img/mask-group-326-1@1x.png',
                                    }}
                                />
                            </div>
                        )}

                        {/* More article you would love to reaa */}

                        <div className="article-widget">
                            <h2 className="article_category_title lato-bold-white-16px">DANS LA MÊME CATÉGORIE</h2>

                            <div className="more_articles">
                                <div className="grid">
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
                                    <button
                                        type="submit"
                                        onClick={() => router.push('/pricePage')}
                                        className="primary-button">
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
