import React, { useEffect, useState } from 'react';
import Topbar from '../components/topbar';
import getAPIClient from '@shared/tools/apiClient';
import { Article, Theme } from '@shared/services';
import router from 'next/router';
import { useCookies } from 'react-cookie';

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
                    themeId: selectedTheme?.id,
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

            apiClient.article.updateArticleById(article.id as unknown as number, newArticle).then(
                (res) => {
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
        <>
            <input type="hidden" id="anPageName" name="page" value="articles-creer-un-article" />
            <div className="container-center-horizontal">
                <div className="articles-creer-un-article screen">
                    <div className="analytics-KWTlO3 poppins-semibold-semi-bold-mirage-24px">Créer un article</div>
                    <Topbar />
                    <div className="action-KWTlO3">
                        <div className="buttons-btn-text-icon-uAMshA">
                            <div className="type-YV9SAA"></div>
                            <div className="groupe-393-YV9SAA">
                                <div className="text-V9FaLG poppins-normal-white-14px">
                                    Sauvegarder les modifications
                                </div>
                            </div>
                        </div>
                        <div className="buttons-btn-text-icon-pawa38">
                            <div className="type-bieUMx"></div>
                            <div className="groupe-393-bieUMx">
                                <div className="text-PSqcoO poppins-normal-white-14px">Supprimer</div>
                            </div>
                        </div>
                    </div>
                    <div className="articles-KWTlO3">
                        <div className="rectangle-632-VDEqMo"></div>
                        <div className="titre-VDEqMo">
                            <div className="rectangle-633-hXuMJY"></div>
                            <div className="analytics-hXuMJY poppins-semibold-semi-bold-white-14px">Articles</div>
                        </div>
                        <div className="image-1-VDEqMo">
                            <div className="image-prsentation-scdp16 lato-normal-comet-10px">Image Présentation</div>
                            <img className="image-1-scdp16" src="img/image-1-1@1x.png" />
                            <div className="buttons-btn-text-icon-scdp16">
                                <div className="type-hd2Znp"></div>
                                <div className="groupe-393-hd2Znp">
                                    <div className="text-x8nwTa poppins-normal-white-12px">Select Image</div>
                                </div>
                            </div>
                        </div>
                        <div className="filtre-VDEqMo">
                            <div className="rectangle-625-yVyrRp"></div>
                            <div className="name-yVyrRp poppins-medium-mirage-10px">Thèmes articles</div>
                            <img
                                className="font-awsome-chevron-down-yVyrRp"
                                src="img/fontawsome--chevron-down--10@1x.png"
                            />
                        </div>
                        <div className="id-fixe-VDEqMo">
                            <img className="ligne-6-mRyCIg" src="img/ligne-6-10@1x.png" />
                            <div className="cryptomonnaies-mRyCIg poppins-normal-tundora-12px">Cryptomonnaies</div>
                            <div className="thme-slectionn-mRyCIg lato-normal-comet-10px">Thème sélectionné</div>
                        </div>
                        <div className="image-2-VDEqMo">
                            <div className="image-article-MZquKU lato-normal-comet-10px">Image Article</div>
                            <img className="image-1-MZquKU" src="img/image-1-1@1x.png" />
                            <div className="buttons-btn-text-icon-MZquKU">
                                <div className="type-lNxMSV"></div>
                                <div className="groupe-393-lNxMSV">
                                    <div className="text-klln9R poppins-normal-white-12px">Select Image</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="articles-editeur-KWTlO3">
                        <div className="rectangle-632-WsOm9a"></div>
                        <div className="titre-WsOm9a">
                            <div className="rectangle-633-GpYdAZ"></div>
                            <div className="analytics-GpYdAZ poppins-semibold-semi-bold-white-14px">
                                Articles - Editeur
                            </div>
                        </div>
                        <div className="titre-article-WsOm9a">
                            <img className="ligne-6-YUilQu" src="img/ligne-6-1@1x.png" />
                            <div className="le-bitcoin-cest-quoi-YUilQu poppins-normal-vulcan-12px">
                                Le Bitcoin, c’est quoi ?
                            </div>
                            <div className="titre-YUilQu lato-normal-comet-10px">Titre</div>
                        </div>
                        <div className="bouton-bascule-WsOm9a">
                            <div className="titre-KAG4Zd">
                                <img className="rectangle-633-SDXxzw" src="img/rectangle-633-2@1x.png" />
                                <div className="analytics-SDXxzw">Editeur Article</div>
                            </div>
                            <div className="titre-Dx8QLr">
                                <img className="rectangle-633-LuJKbz" src="img/rectangle-633-1@1x.png" />
                                <div className="analytics-LuJKbz">HTML</div>
                            </div>
                        </div>
                        <div className="rectangle-16882-WsOm9a border-1px-silver"></div>
                        <img
                            className="notes-details-text-editor-WsOm9a"
                            src="img/notes--details--text-editor@1x.png"
                        />
                    </div>
                    <div className="podcast-KWTlO3">
                        <div className="rectangle-632-d6Hi6f"></div>
                        <div className="titre-d6Hi6f">
                            <div className="rectangle-633-v3PW0K"></div>
                            <div className="analytics-v3PW0K poppins-semibold-semi-bold-white-14px">Podcast</div>
                        </div>
                        <div className="buttons-btn-text-icon-d6Hi6f">
                            <div className="type-JQMQrA"></div>
                            <div className="groupe-393-JQMQrA">
                                <div className="text-ZfF8Bm poppins-normal-white-14px">Ajouter un Podcast</div>
                            </div>
                        </div>
                        <div className="id-fixe-d6Hi6f">
                            <img className="ligne-6-LghOqI" src="img/ligne-6-10@1x.png" />
                            <div className="nom-du-fichier-LghOqI poppins-normal-tundora-12px">Nom du fichier</div>
                            <div className="podcast-LghOqI lato-normal-comet-10px">Podcast</div>
                        </div>
                    </div>
                    <div className="articles-suggrs-KWTlO3">
                        <div className="rectangle-632-yR7AdQ"></div>
                        <div className="titre-yR7AdQ">
                            <div className="rectangle-633-MgXECM"></div>
                            <div className="analytics-MgXECM poppins-semibold-semi-bold-white-14px">
                                Articles suggérés
                            </div>
                        </div>
                        <div className="buttons-btn-text-icon-yR7AdQ">
                            <div className="type-DGWGmO"></div>
                            <div className="groupe-393-DGWGmO">
                                <div className="text-uHWjH3 poppins-normal-white-14px">Ajouter un article</div>
                            </div>
                        </div>
                        <div className="filtre-yR7AdQ">
                            <div className="rectangle-625-O3X7iX"></div>
                            <div className="name-O3X7iX poppins-medium-mirage-10px">Thèmes articles</div>
                            <img
                                className="font-awsome-chevron-down-O3X7iX"
                                src="img/fontawsome--chevron-down--10@1x.png"
                            />
                        </div>
                        <div className="bouton-pour-supprimer-yR7AdQ">
                            <div className="ellipse-12-TWlpm8"></div>
                            <img className="font-awsome-times-TWlpm8" src="img/fontawsome--times--2@1x.png" />
                        </div>
                    </div>
                    <div className="sidebar-KWTlO3">
                        <div className="shape-PFFoxt"></div>
                        <div className="settings-PFFoxt">
                            <div className="name-k31mUf poppins-medium-mirage-14px">Settings</div>
                            <div className="icons-navigation-icon-12-states-k31mUf">
                                <img className="ic_setting-whx2KI" src="img/ic-setting-11@1x.png" />
                            </div>
                        </div>
                        <div className="broker-PFFoxt">
                            <div className="name-sjhMXK poppins-medium-mirage-14px">Broker</div>
                            <img className="font-awsome-handshake-sjhMXK" src="img/fontawsome--handshake--10@1x.png" />
                        </div>
                        <div className="crypto-wallet-PFFoxt">
                            <div className="name-c53LXs poppins-medium-mirage-14px">Crypto Wallet</div>
                            <img className="font-awsome-bitcoin-c53LXs" src="img/fontawsome--bitcoin--11@1x.png" />
                        </div>
                        <div className="trading-crypto-PFFoxt">
                            <div className="name-FZg1qH poppins-medium-mirage-14px">Trading &amp; Crypto</div>
                            <img className="font-awsome-pen-FZg1qH" src="img/fontawsome--pen--10@1x.png" />
                        </div>
                        <div className="thmes-articles-PFFoxt">
                            <div className="name-zUa7gJ poppins-medium-mirage-14px">Thèmes articles</div>
                            <div className="icons-navigation-icon-12-states-zUa7gJ">
                                <img
                                    className="font-awsome-bookmark-IDmxIc"
                                    src="img/fontawsome--bookmark--10@1x.png"
                                />
                            </div>
                        </div>
                        <div className="customers-PFFoxt">
                            <div className="name-By1Qk4 poppins-medium-mirage-14px">Utilisateurs</div>
                            <div className="icons-navigation-icon-12-states-By1Qk4">
                                <img className="ic_users-HRDxxE" src="img/ic-users-11@1x.png" />
                            </div>
                        </div>
                        <div className="home-PFFoxt">
                            <div className="name-Y89xRM poppins-medium-mirage-14px">Home</div>
                            <div className="icons-navigation-icon-12-states-Y89xRM">
                                <img className="ic_home-c0D0Aq" src="img/ic-home-10@1x.png" />
                            </div>
                        </div>
                        <div className="articles-PFFoxt">
                            <img className="frame-gRAIpp" src="img/frame-10@1x.png" />
                            <div className="line-gRAIpp"></div>
                            <div className="name-gRAIpp poppins-medium-blue-ribbon-14px">Articles</div>
                            <div className="icons-navigation-icon-12-states-gRAIpp">
                                <img className="ic_invoice-G9NHJZ" src="img/ic-invoice-16@1x.png" />
                            </div>
                            <img
                                className="icon-ionic-ios-arrow-down-gRAIpp"
                                src="img/icon-ionic-ios-arrow-down-10@1x.png"
                            />
                            <div className="frame-U1HT52"></div>
                            <div className="frame-8bXUzx"></div>
                            <div className="name-U1HT52 poppins-medium-blue-ribbon-14px">Créer article</div>
                            <div className="name-8bXUzx poppins-medium-blue-ribbon-14px">Créer article entreprise</div>
                            <img className="frame-leOAG5" src="img/frame-11@1x.png" />
                            <div className="name-leOAG5 poppins-medium-blue-ribbon-14px">Historique articles</div>
                        </div>
                        <div className="bot-trading-PFFoxt">
                            <div className="name-TNimuW poppins-medium-mirage-14px">Bot Trading</div>
                            <img className="font-awsome-robot-TNimuW" src="img/fontawsome--robot--3@1x.png" />
                        </div>
                        <div className="pays-PFFoxt">
                            <div className="name-bzppnk poppins-medium-mirage-14px">Pays</div>
                            <img
                                className="font-awsome-globe-europe-bzppnk"
                                src="img/fontawsome--globe-europe--10@1x.png"
                            />
                        </div>
                        <div className="abonnement-PFFoxt">
                            <div className="name-I6xD5l poppins-medium-mirage-14px">Abonnement</div>
                            <img className="icon-material-payment-I6xD5l" src="img/icon-material-payment-10@1x.png" />
                            <img
                                className="icon-ionic-ios-arrow-down-I6xD5l"
                                src="img/icon-ionic-ios-arrow-down-10@1x.png"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
