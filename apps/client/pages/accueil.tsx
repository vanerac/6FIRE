import type { NextPage } from 'next';
// import Image from 'next/image';
import router, { useRouter } from 'next/router';
import Footer from '../components/footer';
import Button from '../components/articles/feed/button';
import Header from '../components/header';
import getAPIClient from '@shared/tools/apiClient';
import { useEffect, useState } from 'react';
import { Article } from '@services/index';
import { useCookies } from 'react-cookie';
import Head from 'next/head';

const HomePage: NextPage = (props: any) => {
    const [articles, setArticles] = useState<Article[]>([]);
    const [cookies] = useCookies(['API_TOKEN']);
    const [$error, $setError] = useState('');
    const apiClient = getAPIClient(cookies['API_TOKEN']);
    const { query } = useRouter();
    const [pagination, $setPagination] = useState<any>({
        page: 1,
        limit: 20,
    });

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

    const fetchData = async (themeId: string | string[] | undefined) => {
        console.log('need to fetch articles with id => ', themeId);
        if (themeId) {
            setArticles(
                (await apiClient.article.getArticlesByTheme(
                    +(themeId as string),
                    pagination.page,
                    pagination.limit,
                )) as Article[],
            );
        } else {
            let data = (await apiClient.article.getArticles(pagination.page, pagination.limit)) as Article[];

            console.log('res avant => ', data);

            // remove articles with themeName != 'Forex' or 'Formation' from the data array

            data = data.filter((article: Article) => {
                return article?.Theme?.name != 'Formations' && article?.Theme?.name != 'Forex';
            });

            setArticles(data);
        }
        // const article: Article = response[0]
        // article.Theme?.name
    };

    useEffect(() => {
        if (!cookies['API_TOKEN']) {
            console.log('no token');
            router.replace('/');
            return;
        }
    }, []);

    useEffect(() => {
        console.log('need to fetch articles with id => ', query.themeId);
        fetchData(query.themeId);
    }, [query]);

    return (
        <div>
            <Head>
                <title>Articles</title>
            </Head>
            <input type="hidden" id="anPageName" name="page" value="homepage-1" />
            <Header isOpenSideBar={props.useStateOpenSideBar} isEspaceTradingCrypto={false} />
            <div className="article_wrapper">
                <div className="grid">
                    {/* single article */}
                    {articles.map((article: Article) => (
                        <div
                            key={article.id}
                            onClick={() => {
                                router.push({
                                    pathname: '/articlesDetails',
                                    query: {
                                        articleId: article.id,
                                        themeId: article.themeId,
                                        member: false,
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
                                        Il y a {convertDate(article.createdAt as string)}
                                    </p>
                                </div>
                            </div>
                            <div className="article_title">
                                <h4 className="title">{article.title}</h4>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex justify-center items-center pt-10">
                    <Button
                        getMorePages={() => {
                            // Pagination
                        }}
                    />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default HomePage;
