import React, { FormEvent, useEffect, useState } from 'react';
import Topbar from '../components/topbarNew';
import Sidebar from '../components/sidebarNew';
import $ from 'jquery';
import getAPIClient from '@shared/tools/apiClient';
import { Article, Theme } from '@shared/services';
import router, { useRouter } from 'next/router';
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

    const { query } = useRouter();

    const [$loading, setLoading] = useState(true);
    const [$error, setError] = useState('');
    const [article, setArticle] = useState<Article>();
    const [articleSuggestions, $setArticleSuggestions] = useState<Article[]>([]);
    const [$availableThemes, $setAvailableThemes] = useState<Theme[]>([]);

    const [selectedThemeId, setSelectedThemeId] = useState<number>();
    const [selectedArticles, setSelectedArticlesIds] = useState<number[]>([]);

    const [articleContentsRaw, setArticleContentsRaw] = useState<object>();
    const [articleTitle, $setArticleTitle] = useState('');

    const [$articlePodcast, $setArticlePodcast] = useState('');

    const [bannerUrl, setBannerUrl] = useState<string>('img/image-1-1@1x.png');
    const [thumbnailUrl, setThumbnailUrl] = useState<string>('img/image-1-1@1x.png');

    const [selectTemp, setSelectTemp] = useState<number>();

    useEffect(() => {
        console.log('temp', selectTemp);
    }, [selectTemp]);

    useEffect(() => {
        console.log(JSON.stringify(articleContentsRaw));
    }, [articleContentsRaw]);

    async function uploadBannerImage(file: File) {
        const host: string = process.env.NEXT_PUBLIC_API_ROUTE || 'http://localhost:3333/api';
        const path = '/upload';
        const formData = new FormData();
        formData.append('file', file);
        const res = await fetch(`${host}${path}`, {
            method: 'POST',
            body: formData,
            headers: {
                Authorization: `Bearer ${cookies['API_TOKEN']}`,
            },
        });

        const data = await res.json();

        setBannerUrl(data.url);
        return { url: data.url };
    }

    async function uploadHeaderImage(file: File) {
        const host: string = process.env.NEXT_PUBLIC_API_ROUTE || 'http://localhost:3333/api';
        const path = '/upload';
        const formData = new FormData();
        formData.append('file', file);
        const res = await fetch(`${host}${path}`, {
            method: 'POST',
            body: formData,
            headers: {
                Authorization: `Bearer ${cookies['API_TOKEN']}`,
            },
        });

        const data = await res.json();

        setThumbnailUrl(data.url);
        return { url: data.url };
    }

    useEffect(() => {
        if (!cookies['API_TOKEN']) {
            console.log('no token');
            router.replace('/');
            return;
        }
        const { id } = query;

        if (id)
            apiClient.article.getArticleById(id as unknown as number).then(
                (res) => {
                    console.log(res);
                    setArticle(res as Article);
                    setArticleContentsRaw(JSON.parse((res as Article).content));
                    $setArticleTitle((res as Article).title);
                    setBannerUrl((res as Article).bannerUrl as string);
                    setThumbnailUrl((res as Article).headerUrl as string);

                    // setArticlePodcast((res as Article).podcast);
                    setSelectedThemeId((res as Article).themeId as number);
                    setSelectedArticlesIds(((res as Article).recommendedArticleIds as number[]) ?? []);

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
    }, [query]);

    const saveArticle = () => {
        if (!article?.id) {
            // Create
            // TODO verify that argument are filled in correctly ?
            apiClient.article
                .createArticle({
                    title: articleTitle,
                    content: JSON.stringify(articleContentsRaw),
                    themeId: +(selectedThemeId?.toString() as unknown as string),
                    recommendedArticleIds: selectedArticles,
                    headerUrl: thumbnailUrl,
                    bannerUrl: bannerUrl,
                    hidden: false, // Todo: false by default ?
                })
                .then(
                    (res) => {
                        setArticle(res as Article);
                        setArticleContentsRaw(JSON.parse((res as Article).content));
                        $setArticleTitle((res as Article).title);
                        setBannerUrl((res as Article).bannerUrl as string);
                        setThumbnailUrl((res as Article).headerUrl as string);
                        // setArticlePodcast((res as Article).podcast);
                        setSelectedThemeId((res as Article).themeId as number);
                        setSelectedArticlesIds(((res as Article).recommendedArticleIds as number[]) ?? []);
                        setLoading(false);
                        router.replace('/articles-creationNew?id=' + (res as Article).id);
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
                content: JSON.stringify(articleContentsRaw),
                themeId: selectedThemeId as number,
                recommendedArticleIds: selectedArticles,
                header: thumbnailUrl,
                banner: bannerUrl,
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

    const deleteArticle = async () => {
        if (!article?.id) {
            setError('No article to delete');
            return;
        }
        apiClient.article.deleteArticleById(article.id).then(
            () => {
                router.replace('/');
            },
            (error) => {
                setError(error.i18n ?? error.message ?? 'Unknown error');
                setLoading(false);
            },
        );
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
                        <h2 className="title">Creer un Article</h2>
                    </div>

                    <div className="table-header">
                        <div>
                            {article?.id ? (
                                <button onClick={deleteArticle} className="bg_red">
                                    Supprimer
                                </button>
                            ) : null}
                            <button onClick={saveArticle} className={'bg_green'}>
                                {article ? 'Sauvegarder les modifications' : "Créer l'article"}
                            </button>
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
                                    <select
                                        name=""
                                        id=""
                                        onChange={(event: any) => setSelectedThemeId(event.target.value)}>
                                        {$availableThemes.map((theme) => (
                                            <option key={theme.id} value={theme.id}>
                                                {theme.name}
                                            </option>
                                        ))}
                                        <option value="0">Articles</option>
                                    </select>
                                </div>
                                <div className="single-item">
                                    <label className="small_title" htmlFor="">
                                        Theme selectionne
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Cryptomonnaies"
                                        value={$availableThemes?.find((v) => v.id == selectedThemeId)?.name ?? ''}
                                        disabled
                                    />
                                </div>
                            </div>

                            <div className="row-1 inline-flex">
                                <div className="single-item mr-30">
                                    <label className="small_title" htmlFor="">
                                        Image presentation
                                    </label>
                                    <div className="icon-box">
                                        <div className="thum">
                                            <img src={thumbnailUrl} alt="" />
                                        </div>
                                        <input
                                            type={'file'}
                                            onInput={(
                                                event: FormEvent<HTMLInputElement> & { target: { files: never[] } },
                                            ) => uploadHeaderImage(event.target.files[0])}
                                            className="upload_files"
                                        />
                                    </div>
                                </div>
                                <div className="single-item mr-30">
                                    <label className="small_title" htmlFor="">
                                        Image articles
                                    </label>
                                    <div className="icon-box">
                                        <div className="thum">
                                            <img src={bannerUrl} alt="" />
                                        </div>
                                        <input
                                            type={'file'}
                                            onInput={(
                                                event: FormEvent<HTMLInputElement> & { target: { files: never[] } },
                                            ) => uploadBannerImage(event.target.files[0])}
                                            className="upload_files"
                                        />
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
                                    <input
                                        type="text"
                                        placeholder="Cryptomonnaies"
                                        onChange={(event) => $setArticleTitle(event.target.value)}
                                        value={articleTitle}
                                    />
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
                                        <RichtextEditor
                                            onChange={setArticleContentsRaw}
                                            existingContent={articleContentsRaw}
                                        />
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
                                    {selectedArticles.map((articleId, index) => {
                                        console.log(selectedArticles);
                                        const a = articleSuggestions.find((t) => t.id == articleId);
                                        console.log(a, articleSuggestions);
                                        if (!a) return null;
                                        return (
                                            <div key={index} className="article-suggestion">
                                                <div className="article-suggestion-title">
                                                    <span>{a.title}</span>
                                                </div>
                                            </div>
                                        );
                                    })}
                                    <label className="small_title" htmlFor="">
                                        Select article
                                    </label>
                                    <select
                                        onChange={(event: any) => setSelectTemp(event.target.value)}
                                        name=""
                                        id="articleSelection"
                                        className="width-300">
                                        <option value="0" disabled>
                                            Articles
                                        </option>
                                        {articleSuggestions.map((article, index) => (
                                            <option key={index} value={article.id}>
                                                {article.title}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div className="closs-btn">
                                    <img src="/img/icon/close-red.svg" alt="" />
                                </div>
                            </div>

                            <div className="row-1 inline-flex">
                                <div className="single-item">
                                    <div className="regular-btn">
                                        {selectTemp != undefined ? (
                                            <button
                                                onClick={(event: never) => {
                                                    console.log(event);
                                                    setSelectedArticlesIds([...selectedArticles, +selectTemp]);
                                                }}
                                                className="bg_orange"
                                                id="podcast">
                                                Ajouter une recommandation
                                            </button>
                                        ) : null}
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
