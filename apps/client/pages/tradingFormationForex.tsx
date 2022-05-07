import type { NextPage } from 'next';
// import Image from 'next/image';
import router, { useRouter } from 'next/router';
import Footer from './components/footer';
import Header from './components/header';
import getAPIClient from '@shared/tools/apiClient';
import { useEffect, useState } from 'react';
import { Article } from '@services/index';
import { useCookies } from 'react-cookie';
import Head from 'next/head';

const HomePage: NextPage = (props: any) => {
    const [$articles, $setArticles] = useState<Article[]>([]);
    const [cookies] = useCookies(['API_TOKEN']);
    const [$error, $setError] = useState('');
    const $apiClient = getAPIClient(cookies['API_TOKEN']);
    const { query } = useRouter();
    const [$pagination, $setPagination] = useState<any>({
        page: 1,
        limit: 20,
    });

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

    // const fetchData = async (themeId: string | string[] | undefined) => {
    //     console.log('need to fetch articles with id => ', themeId);
    //     if (themeId)
    //         setArticles(
    //             (await apiClient.article.getArticlesByTheme(
    //                 +(themeId as string),
    //                 pagination.page,
    //                 pagination.limit,
    //             )) as Article[],
    //         );
    //     else setArticles((await apiClient.article.getArticles(pagination.page, pagination.limit)) as Article[]);
    //     // const article: Article = response[0]
    //     // article.Theme?.name
    // };

    useEffect(() => {
        if (!cookies['API_TOKEN']) {
            console.log('no token');
            router.replace('/');
            return;
        }
    }, []);

    useEffect(() => {
        // fetchData(query.themeId);
    }, [query]);

    return (
        <div>
            <Head>
                <title>Articles</title>
            </Head>
            <input type="hidden" id="anPageName" name="page" value="homepage-1" />
            <Header isOpenSideBar={props.useStateOpenSideBar} isEspaceTradingCrypto={true} />
            <div className="article_wrapper">
                <div className="grid">
                    {/* single article */}
                    {/* {articles.map((article: Article) => (
                        <div
                            key={article.id}
                            onClick={() => {
                                router.push({
                                    pathname: '/articlesDetails',
                                    query: {
                                        articleId: article.id,
                                        themeId: article.themeId,
                                    },
                                });
                            }}
                            className="single_article">
                            <div className="artitle_thum">
                                <img className="frontImg" src={article.headerUrl ?? '/img/mask-group-321-2@1x.png'} />
                                <img className="hoverImg" src={article.bannerUrl ?? '/img/mask-group-321-2@1x.png'} />
                            </div>
                            <div className="cat_and_date">
                                <div className="category">
                                    <p className="lato-normal-milano-red-12px line">{article.Theme?.name ?? 'Theme'}</p>
                                    <p className="article_date lato-light-manatee-12px">
                                        {convertDate(article.createdAt as string)}
                                    </p>
                                </div>
                            </div>
                            <div className="article_title">
                                <h4 className="title">{article.title}</h4>
                            </div>
                        </div>
                    ))} */}

                    {/* Single article */}
                    {/* <div onClick={() => router.push('/articlesDetails')} className="single_article">
                        <div className="artitle_thum">
                            <img className="frontImg" src=" /img/mask-group-322-2@1x.png" alt="" />
                            <img className="hoverImg" src="/img/mask-group-325-1@1x.png" alt="" />
                        </div>
                        <div className="cat_and_date">
                            <div className="category">
                                <p className="lato-normal-milano-red-12px  line">E-Commerce</p>
                                <p className="article_date lato-light-manatee-12px">Il y a 2 heures</p>
                            </div>
                        </div>
                        <div className="article_title">
                            <h4 className="title">Axie Infinity, jeu Play to Earn</h4>
                        </div>
                    </div> */}

                    {/* Single article */}
                    {/* <div onClick={() => router.push('/articlesDetails')} className="single_article">
                        <div className="artitle_thum">
                            <img className="frontImg" src="/img/mask-group-322-2@1x.png" alt="" />
                            <img className="hoverImg" src="/img/mask-group-325-1@1x.png" alt="" />
                        </div>
                        <div className="cat_and_date">
                            <div className="category">
                                <p className="lato-normal-milano-red-12px  line">E-Commerce</p>
                                <p className="article_date lato-light-manatee-12px">Il y a 2 heures</p>
                            </div>
                        </div>
                        <div className="article_title">
                            <h4 className="title">Axie Infinity, jeu Play to Earn</h4>
                        </div>
                    </div> */}

                    {/* Single article */}
                    {/* <div onClick={() => router.push('/articlesDetails')} className="single_article">
                        <div className="artitle_thum">
                            <img className="frontImg" src="/img/mask-group-322-2@1x.png" alt="" />
                            <img className="hoverImg" src="/img/mask-group-325-1@1x.png" alt="" />
                        </div>
                        <div className="cat_and_date">
                            <div className="category">
                                <p className="lato-normal-milano-red-12px  line">E-Commerce</p>
                                <p className="article_date lato-light-manatee-12px">Il y a 2 heures</p>
                            </div>
                        </div>
                        <div className="article_title">
                            <h4 className="title">Axie Infinity, jeu Play to Earn</h4>
                        </div>
                    </div> */}
                </div>
            </div>

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
            {/* <div className="avertissement-58RGA4">
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
                </div> */}

            <Footer />
        </div>
    );
};

export default HomePage;
