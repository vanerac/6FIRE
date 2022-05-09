import type { NextPage } from 'next';
import Image from 'next/image';
import Header from '../components/header';
import Footer from '../components/footer';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import router, { useRouter } from 'next/router';
import getAPIClient from '@shared/tools/apiClient';
import { Article, ArticlePro } from '@shared/services';
import { useCookies } from 'react-cookie';
import draftToHtml from 'draftjs-to-html';
import $ from 'jquery';
import Podcast from '../components/articles/podcast/podcast';

/* Confirm promo code
-------------------------------------*/
if (typeof window !== 'undefined') {
    $('#confirm_button').click(function () {
        if ($!(this).hasClass('checked')) {
            $(this).addClass('checked');
        } else {
            $(this).addClass('checked');
        }
    });
}
if (typeof window !== 'undefined') {
    $('#confirm_button').click(function () {
        $('.offer-validation').addClass('show');
    });
}

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
            <Header isOpenSideBar={props.useStateOpenSideBar} isEspaceTradingCrypto={false} />

            <div className="payment-inner-wrap">
                <div className="title-wrap">
                    <div className="title">Étape 2 sur 2 <span className='main-title'>Configurez votre carte de paiement</span></div>
                </div>

                <form action="#" className="payment-form">
                    <div className="payment-input-wrap">
                        <div className="single-input">
                            <label htmlFor="">Prénom</label>
                            <input type="text" placeholder='Elodie' />
                        </div>
                        <div className="single-input">
                            <label htmlFor="">Nom</label>
                            <input type="text" placeholder='Lopes' />
                        </div>
                        <div className="single-input">
                            <label htmlFor="">Numéro de carte</label>
                            <input type="number" placeholder='4560 5674 3224 4543' />
                        </div>
                        <div className="single-input">
                            <label htmlFor="">Date d’expiration (MM/AA)</label>
                            <input type="number" placeholder='09 / 18' />
                        </div>
                        <div className="single-input">
                            <label htmlFor="">Cryptogramme (CVV)</label>
                            <input type="number" placeholder='09 / 18' />
                        </div>
                    </div>

                    {/* price box */}
                    <div className="price-wrap">
                        <div className="price">99,99€/mois <span>Licence Intermédiaire</span></div>
                        <div className="change">Changer</div>
                    </div>

                    <button className="promo-code-btn payment-btn">J’ai un code promo</button>

                    <div className="promo-code-wrap">
                        <div className="code-box">
                            <span>Code promo</span>
                            <div className="code">
                                <input type="text" />
                            </div>
                            <div className="confirm-code" id='confirm_button'><p>Ajouter</p> <div className="check-mark"><img src="/img/icon/check.svg" alt="" /></div></div>
                        </div>
                        <div className="offer-validation">
                            <p className='promo-validation'>
                            <strong>6 mois d’essai gratuit pour la Licence Intermédiaire puis 99,99€/mois sans engagement et annulable à tout moment</strong>
                            </p>
                        </div>
                    </div>

                    <div className="payment-text">
                        <p>En cliquant sur le bouton « Activer ma Licence » ci-dessous, vous acceptez nos <a href="#">Conditions d’utilisation</a>, reconnaissez avoir plus de 18 ans et prenez acte de la <a href="#">Déclaration de confidentialité</a>. Vous acceptez que votre abonnement commence immédiatement et renoncez à votre droit de rétractation. 6FIRE Invest renouvelle automatiquement votre abonnement et prélève les frais correspondants via le mode de paiement choisi, sauf résiliation de votre part. Vous pouvez annuler votre abonnement à tout moment pour éviter tout prélèvement ultérieur.</p>
                    </div>

                    <button className="active-licene-btn payment-btn">Activer ma Licence</button>
                </form>
            </div>

            <Footer />
        </div>
    );
};

export default HomePage;
