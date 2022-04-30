import React, { useEffect, useState } from 'react';
import Topbar from '../components/topbarNew';
import Sidebar from '../components/sidebarNew';
import $ from 'jquery';
import getAPIClient from '@shared/tools/apiClient';
import { Article, Theme } from '@shared/services';
import router from 'next/router';
import { useCookies } from 'react-cookie';
import RichtextEditor from '../components/rich-editor';

if (typeof window !== 'undefined') {
    const selector = '.editor-buttons button';

    $(selector).on('click', function () {
        $(selector).removeClass('active');
        $(this).addClass('active');
    });
}

export default function ArticlesCreation() {
    const [cookies] = useCookies(['API_TOKEN']);
    const apiClient = getAPIClient(cookies['API_TOKEN']);

    const [$loading, setLoading] = useState(true);
    const [$error, setError] = useState('');
    const [article, setArticle] = useState<Article>();
    const [$articleSuggestions, $setArticleSuggestions] = useState<Article[]>([]);
    const [$availableThemes, $setAvailableThemes] = useState<Theme[]>([]);

    const [selectedTheme, $setSelectedTheme] = useState<Theme>();
    const [selectedArticles, $setSelectedArticles] = useState<Article[]>([]);

    const [articleContents, $setArticleContents] = useState<string>('');
    const [articleTitle, $setArticleTitle] = useState('');

    const [$articlePodcast, $setArticlePodcast] = useState('');

    const [banner, $setBanner] = useState<Blob>();
    const [thumbnail, $setThumbnail] = useState<Blob>();

    const id = 1; // TODO

    useEffect(() => {
        if (!cookies['API_TOKEN']) {
            console.log('no token');
            router.replace('/');
            return;
        }

        if (id)
            apiClient.article.getArticleById(id).then(
                (res) => {
                    setArticle(res as Article);
                    setLoading(false);
                },
                (error) => {
                    setError(error.i18n ?? error.message ?? 'Unknown error');
                    setLoading(false);
                },
            );
        apiClient.article.getArticles().then(
            (res) => {
                $setArticleSuggestions(res as Article[]);
            },
            (error) => {
                setError(error.i18n ?? error.message ?? 'Unknown error');
                setLoading(false);
            },
        );

        apiClient.themes.getThemes().then(
            (res) => {
                $setAvailableThemes(res as Theme[]);
            },
            (error) => {
                setError(error.i18n ?? error.message ?? 'Unknown error');
                setLoading(false);
            },
        );
    }, []);

    const $saveArticle = () => {
        if (!article?.id) {
            // Create
            // TODO verify that argument are filled in correctly ?
            apiClient.article
                .createArticle({
                    title: articleTitle,
                    content: articleContents,
                    themeId: selectedTheme?.id as number,
                    recommendedArticleIds: selectedArticles.map((a) => a.id),
                    header: thumbnail,
                    banner: banner,
                    hidden: false, // Todo: false by default ?
                })
                .then(
                    (res) => {
                        setArticle(res as Article);
                    },
                    (error) => {
                        setError(error.i18n ?? error.message ?? 'Unknown error');
                        setLoading(false);
                    },
                );
        } else {
            // Update
            const newArticle = {
                ...article,
                title: articleTitle,
                content: articleContents,
                themeId: selectedTheme?.id,
                recommendedArticleIds: selectedArticles.map((a) => a.id),
                header: thumbnail,
                banner: banner,
            };

            apiClient.article.updateArticleById(article.id, newArticle as unknown as Article).then(
                (res) => {
                    setArticle(res as Article);
                    alert('Article updated');
                },
                (error) => {
                    setError(error.i18n ?? error.message ?? 'Unknown error');
                    setLoading(false);
                },
            );
        }
    };

    return (
        <div>
            <Topbar />
            <input type="hidden" id="anPageName" name="page" value="themes-articles-creation" />

            {/* Commone header wrapper */}

            <div className="inner-page-setup">
                <Sidebar />

                <div className="inner-wrapper">
                    <div className="header">
                        <h2 className="title">Creer un theme</h2>
                    </div>

                    <div className="table-header">
                        <div>
                            <button className="bg_red">Supprimer</button>
                            <button className="bg_green">Sauvegarder les modifications</button>
                        </div>
                    </div>

                    <div className="table-wrapper">
                        <div className="table-title bg_blue">
                            <span>Articles</span>
                        </div>

                        {/* table content */}
                        <div className="table-content">
                            <div className="row-1 inline-flex">
                                <div className="single-item mr-30">
                                    <label className="small_title" htmlFor="">
                                        Select theme
                                    </label>
                                    <select name="" id="">
                                        <option value="0">Articles</option>
                                    </select>
                                </div>
                                <div className="single-item">
                                    <label className="small_title" htmlFor="">
                                        Theme selectionne
                                    </label>
                                    <input type="text" placeholder="Cryptomonnaies" />
                                </div>
                            </div>

                            <div className="row-1 inline-flex">
                                <div className="single-item mr-30">
                                    <label className="small_title" htmlFor="">
                                        Image presentation
                                    </label>
                                    <div className="icon-box">
                                        <div className="thum">
                                            <img src="img/image-1-1@1x.png" alt="" />
                                        </div>
                                        <button className="upload_files">Select icon</button>
                                    </div>
                                </div>
                                <div className="single-item mr-30">
                                    <label className="small_title" htmlFor="">
                                        Image articles
                                    </label>
                                    <div className="icon-box">
                                        <div className="thum">
                                            <img src="img/image-1-1@1x.png" alt="" />
                                        </div>
                                        <button className="upload_files">Select icon</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Article editors */}
                    <div className="table-wrapper">
                        <div className="table-title bg_blue">
                            <span>Articles</span>
                        </div>

                        {/* table content */}
                        <div className="table-content">
                            <div className="row-1 inline-flex">
                                <div className="single-item">
                                    <label className="small_title" htmlFor="">
                                        Title
                                    </label>
                                    <input type="text" placeholder="Cryptomonnaies" />
                                </div>
                            </div>

                            <div className="row-1 inline-flex">
                                <div className="single-item">
                                    <div className="editor-buttons">
                                        <button className="active">Editeur Article</button>
                                        <button>HTML</button>
                                    </div>
                                </div>
                            </div>

                            <div className="row-1 inline-flex">
                                <div className="single-item">
                                    <div className="text_editor">
                                        <RichtextEditor />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Podcast */}
                    <div className="table-wrapper">
                        <div className="table-title bg_blue">
                            <span>Podcast</span>
                        </div>

                        {/* table content */}
                        <div className="table-content">
                            <div className="row-1 inline-flex">
                                <div className="single-item mr-30">
                                    <div className="regular-btn">
                                        <button className="bg_yellow" id="podcast">
                                            Ajouter un Podcast
                                        </button>
                                    </div>
                                </div>
                                <div className="single-item mr-30">
                                    <label className="small_title" htmlFor="">
                                        Podcast
                                    </label>
                                    <input type="text" placeholder="Nom du fichier" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Article Suggestion */}
                    <div className="table-wrapper">
                        <div className="table-title bg_blue">
                            <span>Articles suggeres</span>
                        </div>

                        {/* table content */}
                        <div className="table-content">
                            <div className="single-item flex-between mb-30">
                                <div>
                                    <label className="small_title" htmlFor="">
                                        Select theme
                                    </label>
                                    <select name="" id="" className="width-300">
                                        <option value="0">Articles</option>
                                    </select>
                                </div>
                                <div className="closs-btn">
                                    <img src="/img/icon/close-red.svg" alt="" />
                                </div>
                            </div>

                            <div className="row-1 inline-flex">
                                <div className="single-item">
                                    <div className="regular-btn">
                                        <button className="bg_orange" id="podcast">
                                            Ajouter un Podcast
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
