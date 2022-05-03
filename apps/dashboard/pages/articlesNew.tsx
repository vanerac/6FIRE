import React, { useEffect, useState } from 'react';
import Topbar from '../components/topbarNew';
import getAPIClient from '@shared/tools/apiClient';
import { Article, ArticlePro } from '@shared/services';
import router from 'next/router';
import { useCookies } from 'react-cookie';
import Sidebar from '../components/sidebarNew';
import DataTable from '../components/data-table';
// import { Article } from '@shared/services';
// import apiClient from '@shared/tools/apiClient';

export default function Articles() {
    const [cookies] = useCookies(['API_TOKEN']);
    const apiClient = getAPIClient(cookies['API_TOKEN']);

    const [$loading, setLoading] = useState(true);
    const [$error, setError] = useState('');
    const [$articles, setArticles] = useState<(Article | ArticlePro)[]>([]);

    useEffect(() => {
        if (!cookies['API_TOKEN']) {
            console.log('no token');
            router.replace('/');
            return;
        }

        apiClient.article.getArticles(1, 1000).then(
            (res) => {
                setArticles(res as (Article | ArticlePro)[]);
                setLoading(false);
            },
            (error) => {
                setError(error.i18n ?? error.message ?? 'Unknown error');
                setLoading(false);
            },
        );
    }, []);

    const deleteArticle = (articleId: number) => {
        apiClient.article.deleteArticleById(articleId).then(
            () => {
                alert('Article supprimé');
                const newArticles = $articles.filter((article) => article.id !== articleId);
                setArticles(newArticles);
            },
            (error) => {
                alert("Erreur lors de la suppression de l'article");
                setError(error.i18n ?? error.message ?? 'Unknown error');
            },
        );
    };

    return (
        <div>
            <Topbar />
            <div className="inner-page-setup">
                <Sidebar />
                <div className="inner-wrapper">
                    <div className="header">
                        <h2 className="title">Articles</h2>
                        {/*<button className="" id="export_data">*/}
                        {/*    <i className="fa fa-upload"></i> <span>Export CSV</span>*/}
                        {/*</button>*/}
                    </div>
                    <div className="table-header">
                        <div>
                            <a href={'/articles-creationNew'}>
                                <button className={'bg_green'}>Créer un article</button>
                            </a>
                        </div>
                    </div>

                    <DataTable
                        headers={[
                            {
                                key: 'id',
                                display: 'ID',
                            },
                            {
                                key: 'theme',
                                display: 'Theme',
                            },
                            {
                                key: 'title',
                                display: 'Titre Article',
                            },
                            {
                                key: 'hidden',
                                display: 'Visible',
                            },
                        ]}
                        data={$articles.map((article) => ({
                            id: (article.id?.toString() as string) ?? '?',
                            theme: article?.Theme?.name ?? '?',
                            title: article.title ?? '?',
                            hidden: article.hidden ? 'false' : 'true',
                        }))}
                        editCallback={(id) => router.replace(`/articles-creationNew?id=${id}`)}
                        deleteCallback={(id) => deleteArticle(+id)}
                    />
                </div>
            </div>
        </div>
    );
}
