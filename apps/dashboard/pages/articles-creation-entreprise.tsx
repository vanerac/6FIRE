import React, { useEffect, useState } from 'react';
import Topbar from '../components/topbarNew';
import getAPIClient from '@shared/tools/apiClient';
import { Article, ArticlePro, Theme } from '@shared/services';
import router from 'next/router';
import { useCookies } from 'react-cookie';

export default function ArticlesCreationEntreprise() {
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

    const [articleDescription, $setArticleDescription] = useState('');
    const [articleSalaire, $setArticleSalaire] = useState('');
    const [articleTarification, $setArticleTarification] = useState('');
    const [articleUtilisateurs, $setArticleUtilisateurs] = useState('');
    const [articleFinancement, $setArticleFinancement] = useState('');
    const [articleAudience, $setArticleAudience] = useState('');

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
                    description: articleDescription,
                    salaireMoyen: articleSalaire,
                    tarificationMoyenne: articleTarification,
                    outilsUtilises: articleUtilisateurs,
                    financement: articleFinancement,
                    necessiteAudicance: articleAudience,
                } as ArticlePro)
                .then(
                    (res) => {
                        setArticle(res as Article);
                        alert('Article created');
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
                description: articleDescription,
                salaireMoyen: articleSalaire,
                tarificationMoyenne: articleTarification,
                outilsUtilises: articleUtilisateurs,
                financement: articleFinancement,
                necessiteAudicance: articleAudience,
            } as ArticlePro;

            apiClient.article.updateArticleById(article.id, newArticle).then(
                (res) => {
                    setArticle(res as any);
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
            <input type="hidden" id="anPageName" name="page" value="articles-creer-un-article-1" />
            <div className="container-center-horizontal">
                <div className="articles-creer-un-article-1 screen">
                    <div className="analytics-ac2OFL poppins-semibold-semi-bold-mirage-24px">
                        Cr??er article entreprise
                    </div>
                    <Topbar />
                    <div className="action-ac2OFL">
                        <div className="buttons-btn-text-icon-fUxmfv">
                            <div className="type-pxpsEC"></div>
                            <div className="groupe-393-pxpsEC">
                                <div className="text-77Aiht poppins-normal-white-14px">
                                    Sauvegarder les modifications
                                </div>
                            </div>
                        </div>
                        <div className="buttons-btn-text-icon-WHRwzv">
                            <div className="type-txqeGz"></div>
                            <div className="groupe-393-txqeGz">
                                <div className="text-aG2HIF poppins-normal-white-14px">Supprimer</div>
                            </div>
                        </div>
                    </div>
                    <div className="articles-ac2OFL">
                        <div className="rectangle-632-GiT5tA"></div>
                        <div className="titre-GiT5tA">
                            <div className="rectangle-633-ZHJp6G"></div>
                            <div className="analytics-ZHJp6G poppins-semibold-semi-bold-white-14px">Articles</div>
                        </div>
                        <div className="nom-GiT5tA">
                            <div className="image-prsentation-FTRSfD lato-normal-comet-10px">Image Pr??sentation</div>
                            <img className="image-1-FTRSfD" src="img/image-1-1@1x.png" />
                            <div className="buttons-btn-text-icon-FTRSfD">
                                <div className="type-8ubKLx"></div>
                                <div className="groupe-393-8ubKLx">
                                    <div className="text-xp84Ic poppins-normal-white-12px">Select Image</div>
                                </div>
                            </div>
                        </div>
                        <div className="filtre-GiT5tA">
                            <div className="rectangle-625-hMV91R"></div>
                            <div className="name-hMV91R poppins-medium-mirage-10px">Th??mes articles</div>
                            <img
                                className="font-awsome-chevron-down-hMV91R"
                                src="img/fontawsome--chevron-down--10@1x.png"
                            />
                        </div>
                        <div className="id-fixe-GiT5tA">
                            <img className="ligne-6-Tx5c37" src="img/ligne-6-10@1x.png" />
                            <div className="play-to-earn-Tx5c37 poppins-normal-tundora-12px">Play To Earn</div>
                            <div className="thme-slectionn-Tx5c37 lato-normal-comet-10px">Th??me s??lectionn??</div>
                        </div>
                        <div className="nom-QqZd1O">
                            <div className="image-article-Sf1GaP lato-normal-comet-10px">Image Article</div>
                            <img className="image-1-Sf1GaP" src="img/image-1-1@1x.png" />
                            <div className="buttons-btn-text-icon-Sf1GaP">
                                <div className="type-xwQkVx"></div>
                                <div className="groupe-393-xwQkVx">
                                    <div className="text-VN4TXe poppins-normal-white-12px">Select Image</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="articles-editeur-ac2OFL">
                        <div className="rectangle-632-Gc4Wti"></div>
                        <div className="titre-Gc4Wti">
                            <div className="rectangle-633-s3zZKM"></div>
                            <div className="analytics-s3zZKM poppins-semibold-semi-bold-white-14px">
                                Articles - Editeur
                            </div>
                        </div>
                        <div className="titre-yV4noU">
                            <img className="ligne-6-YGXnT0" src="img/ligne-6-1@1x.png" />
                            <div className="axie-infinity-play-to-earn-YGXnT0 poppins-normal-vulcan-12px">
                                Axie Infinity, Play to Earn
                            </div>
                            <div className="titre-YGXnT0 lato-normal-comet-10px">Titre</div>
                        </div>
                        <div className="editeur-Gc4Wti">
                            <div className="titre-neGryX">
                                <img className="rectangle-633-eObbx3" src="img/rectangle-633-2@1x.png" />
                                <div className="analytics-eObbx3">Editeur Article</div>
                            </div>
                            <div className="titre-y7H450">
                                <img className="rectangle-633-OpT03j" src="img/rectangle-633-1@1x.png" />
                                <div className="analytics-OpT03j">HTML</div>
                            </div>
                            <div className="rectangle-16882-neGryX border-1px-silver"></div>
                            <img
                                className="notes-details-text-editor-neGryX"
                                src="img/notes--details--text-editor-1@1x.png"
                            />
                        </div>
                        <div className="description-Gc4Wti">
                            <img className="ligne-6-eM9KJG" src="img/ligne-6-27@1x.png" />
                            <div className="axie-infinity-est-un-eM9KJG poppins-normal-vulcan-12px">
                                Axie Infinity est un univers d???animaux de compagnie num??rique d??centralis?? o?? les
                                joueurs combattent, ??l??vent et ??changent des cr??atures fantastiques appel??es Axies. Les
                                joueurs gagnent des revenus sous la forme de jetons fongibles appel??s Smooth Love
                                Potions (SLP) en remportant des batailles entre Axies.
                            </div>
                            <div className="description-eM9KJG lato-normal-comet-10px">Description</div>
                        </div>
                        <div className="salaire-moyen-Gc4Wti">
                            <img className="ligne-6-yp8unx" src="img/ligne-6-28@1x.png" />
                            <div className="les-joueurs-du-monde-yp8unx poppins-normal-vulcan-12px">
                                Les joueurs du monde entier gagnent entre 500 et 1 000 $ par mois en jouant au jeu.
                            </div>
                            <div className="salaire-moyen-yp8unx lato-normal-comet-10px">Salaire moyen</div>
                        </div>
                        <div className="tarification-Gc4Wti">
                            <img className="ligne-6-hMApAB" src="img/ligne-6-29@1x.png" />
                            <div className="pour-jouer-axie-infi-hMApAB poppins-normal-vulcan-12px">
                                Pour jouer ?? Axie Infinity, un joueur doit d???abord acheter une ??quipe de trois Axies,
                                qui sont eux-m??mes des jetons non fongibles (NFT).
                                <br />
                                <br />
                                Une ??quipe de d??part co??te environ 500 $.
                            </div>
                            <div className="tarification-de-la-plateforme-hMApAB lato-normal-comet-10px">
                                Tarification de la plateforme
                            </div>
                        </div>
                        <div className="users-gnrants-revenus-Gc4Wti">
                            <img className="ligne-6-TlN8rK" src="img/ligne-6-28@1x.png" />
                            <div className="x350-000-utilisateurs-actifs-mensuels-TlN8rK poppins-normal-vulcan-12px">
                                350 000 utilisateurs actifs mensuels
                            </div>
                            <div className="utilisateurs-gnrants-TlN8rK lato-normal-comet-10px">
                                Utilisateurs g??n??rants des revenus sur la plateforme
                            </div>
                        </div>
                        <div className="financement-Gc4Wti">
                            <img className="ligne-6-7egcJV" src="img/ligne-6-31@1x.png" />
                            <div className="x9-millions-7egcJV poppins-normal-vulcan-12px">9 millions $</div>
                            <div className="financement-7egcJV lato-normal-comet-10px">Financement</div>
                        </div>
                        <div className="audience-Gc4Wti">
                            <img className="ligne-6-svTNpM" src="img/ligne-6-32@1x.png" />
                            <div className="non-svTNpM poppins-normal-vulcan-12px">Non</div>
                            <div className="ncessite-une-audience-svTNpM lato-normal-comet-10px">
                                N??cessite une audience
                            </div>
                        </div>
                    </div>
                    <div className="podcast-ac2OFL">
                        <div className="rectangle-632-vxDuNP"></div>
                        <div className="titre-vxDuNP">
                            <div className="rectangle-633-GRVzpp"></div>
                            <div className="analytics-GRVzpp poppins-semibold-semi-bold-white-14px">Podcast</div>
                        </div>
                        <div className="buttons-btn-text-icon-vxDuNP">
                            <div className="type-jYV8qf"></div>
                            <div className="groupe-393-jYV8qf">
                                <div className="text-HTxMOL poppins-normal-white-14px">Ajouter un Podcast</div>
                            </div>
                        </div>
                        <div className="id-fixe-vxDuNP">
                            <img className="ligne-6-opbkCQ" src="img/ligne-6-10@1x.png" />
                            <div className="nom-du-fichier-opbkCQ poppins-normal-tundora-12px">Nom du fichier</div>
                            <div className="podcast-opbkCQ lato-normal-comet-10px">Podcast</div>
                        </div>
                    </div>
                    <div className="articles-suggrs-ac2OFL">
                        <div className="rectangle-632-j2vd34"></div>
                        <div className="titre-j2vd34">
                            <div className="rectangle-633-Qf2RY5"></div>
                            <div className="analytics-Qf2RY5 poppins-semibold-semi-bold-white-14px">
                                Articles sugg??r??s
                            </div>
                        </div>
                        <div className="buttons-btn-text-icon-j2vd34">
                            <div className="type-UmrUHD"></div>
                            <div className="groupe-393-UmrUHD">
                                <div className="text-syT3gc poppins-normal-white-14px">Ajouter un article</div>
                            </div>
                        </div>
                        <div className="filtre-j2vd34">
                            <div className="rectangle-625-9xzvgX"></div>
                            <div className="name-9xzvgX poppins-medium-mirage-10px">Th??mes articles</div>
                            <img
                                className="font-awsome-chevron-down-9xzvgX"
                                src="img/fontawsome--chevron-down--10@1x.png"
                            />
                        </div>
                        <div className="bouton-pour-supprimer-j2vd34">
                            <div className="ellipse-12-xjylNu"></div>
                            <img className="font-awsome-times-xjylNu" src="img/fontawsome--times--2@1x.png" />
                        </div>
                    </div>
                    <div className="sidebar-ac2OFL">
                        <div className="shape-8G8P7W"></div>
                        <div className="settings-8G8P7W">
                            <div className="name-BcnZcx poppins-medium-mirage-14px">Settings</div>
                            <div className="icons-navigation-icon-12-states-BcnZcx">
                                <img className="ic_setting-dw9xqT" src="img/ic-setting-11@1x.png" />
                            </div>
                        </div>
                        <div className="broker-8G8P7W">
                            <div className="name-TByy7G poppins-medium-mirage-14px">Broker</div>
                            <img className="font-awsome-handshake-TByy7G" src="img/fontawsome--handshake--10@1x.png" />
                        </div>
                        <div className="crypto-wallet-8G8P7W">
                            <div className="name-e7nhEX poppins-medium-mirage-14px">Crypto Wallet</div>
                            <img className="font-awsome-bitcoin-e7nhEX" src="img/fontawsome--bitcoin--11@1x.png" />
                        </div>
                        <div className="trading-crypto-8G8P7W">
                            <div className="name-kYSKnT poppins-medium-mirage-14px">Trading &amp; Crypto</div>
                            <img className="font-awsome-pen-kYSKnT" src="img/fontawsome--pen--10@1x.png" />
                        </div>
                        <div className="thmes-articles-8G8P7W">
                            <div className="name-gH36E0 poppins-medium-mirage-14px">Th??mes articles</div>
                            <div className="icons-navigation-icon-12-states-gH36E0">
                                <img
                                    className="font-awsome-bookmark-QgU0Cb"
                                    src="img/fontawsome--bookmark--10@1x.png"
                                />
                            </div>
                        </div>
                        <div className="customers-8G8P7W">
                            <div className="name-GY5leB poppins-medium-mirage-14px">Utilisateurs</div>
                            <div className="icons-navigation-icon-12-states-GY5leB">
                                <img className="ic_users-qggDeW" src="img/ic-users-11@1x.png" />
                            </div>
                        </div>
                        <div className="home-8G8P7W">
                            <div className="name-Q9QGtw poppins-medium-mirage-14px">Home</div>
                            <div className="icons-navigation-icon-12-states-Q9QGtw">
                                <img className="ic_home-24kKnz" src="img/ic-home-10@1x.png" />
                            </div>
                        </div>
                        <div className="articles-8G8P7W">
                            <img className="frame-unMArc" src="img/frame-10@1x.png" />
                            <div className="line-unMArc"></div>
                            <div className="name-unMArc poppins-medium-blue-ribbon-14px">Articles</div>
                            <div className="icons-navigation-icon-12-states-unMArc">
                                <img className="ic_invoice-eQe5ww" src="img/ic-invoice-16@1x.png" />
                            </div>
                            <img
                                className="icon-ionic-ios-arrow-down-unMArc"
                                src="img/icon-ionic-ios-arrow-down-10@1x.png"
                            />
                            <div className="frame-h20q2x"></div>
                            <div className="frame-F98axI"></div>
                            <div className="name-h20q2x poppins-medium-blue-ribbon-14px">Cr??er article</div>
                            <div className="name-F98axI poppins-medium-blue-ribbon-14px">Cr??er article entreprise</div>
                            <img className="frame-ywJJ5P" src="img/frame-11@1x.png" />
                            <div className="name-ywJJ5P poppins-medium-blue-ribbon-14px">Historique articles</div>
                        </div>
                        <div className="bot-trading-8G8P7W">
                            <div className="name-DsFLZA poppins-medium-mirage-14px">Bot Trading</div>
                            <img className="font-awsome-robot-DsFLZA" src="img/fontawsome--robot--3@1x.png" />
                        </div>
                        <div className="pays-8G8P7W">
                            <div className="name-n1lOt9 poppins-medium-mirage-14px">Pays</div>
                            <img
                                className="font-awsome-globe-europe-n1lOt9"
                                src="img/fontawsome--globe-europe--10@1x.png"
                            />
                        </div>
                        <div className="abonnement-8G8P7W">
                            <div className="name-KtWpqW poppins-medium-mirage-14px">Abonnement</div>
                            <img className="icon-material-payment-KtWpqW" src="img/icon-material-payment-10@1x.png" />
                            <img
                                className="icon-ionic-ios-arrow-down-KtWpqW"
                                src="img/icon-ionic-ios-arrow-down-10@1x.png"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
