import type { NextPage } from 'next';
import Footer from './components/footer';
import Header from './components/header';
// import checkAuth from './components/checkAuth';
import { useEffect } from 'react';
import $ from 'jquery';
import router from 'next/router';
import { useCookies } from 'react-cookie';
import getAPIClient from '@shared/tools/apiClient';
import Head from 'next/head';

/* Smooth Scroll */
if (typeof window !== 'undefined') {
    $('.down-arrow-trand').click(function () {
        $('html, body').animate(
            {
                scrollTop: $('.nos-trades-wrap').offset()?.top,
            },
            1000,
        );
    });
}

const NosTrades: NextPage = () => {
    const [cookies] = useCookies(['API_TOKEN']);
    let $apiClient = getAPIClient(cookies['API_TOKEN']);

    useEffect(() => {
        if (!cookies['API_TOKEN']) {
            console.log('no token');
            router.replace('/');
            return;
        }
        $apiClient = getAPIClient(cookies['API_TOKEN']);
    }, []);

    return (
        <div>
            <Head>
                <title>Nos trades - Crypto Trader</title>
            </Head>
            <Header />

            {/* Nos Tread inner */}
            <div className="trade-inner-header nosTrades-header">
                <div className="container">
                    <div className="content-left box-text">
                        <h2 className="title">REJOIGNEZ NOTRE CANAL PRIVÉ TELEGRAM</h2>
                        <p>
                            L’équipe de 6FIRE INVEST utilise un outil d’analyse particulier lui permettant de prendre
                            des dizaines de trades sur les marchés financiers classNameiques et crypto. Nous prenons des
                            positions court et long terme, selon les tendances de marchés.
                        </p>
                        <p>
                            Vous pouvez retrouver notre outil d’analyse dans nos vidéos TikTok, dans notre canal
                            Telegram et dans nos stories Instagram. Cependant pour voir nos décisions, nos positions et
                            surtout nos Trades, il faut rejoindre le canal privé Telegram des membres confirmés.
                        </p>
                        <p>
                            Vous aurez accès à toutes nos positions crypto & forex en temps réel, nos points d’entrés,
                            de sortis, nos analyses et notre stratégie.
                        </p>
                    </div>
                    <div className="button-right">
                        <div className="profile-card">
                            <div className="big-letter">E</div>
                            <div className="tiems">
                                <div className="name">Elo</div>
                                <span>Extract de comptes.pdf</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="down-arrow-trand">
                    <img src="img/icon-ionic-ios-arrow-down@1x.png" alt="" />
                </div>
            </div>
            {/* Nos Tread inner END */}

            <div className="text-box bg-light-black nos-trades-wrap">
                <div className="wrap">
                    <div className="question">
                        <h3 className="title">CONTACTEZ NOUS POUR REJOINDRE LE CANAL PRIVÉ</h3>
                    </div>

                    <div className="btn-group">
                        <button className="primary-button bg-light-blue">
                            <img className="telegram" src="/img/icon/telegram.svg" alt="" />
                            <span>Support Telegram</span>
                        </button>
                        <button className="primary-button bg-ligh-green">
                            <img src="/img/icon/whatsapp.svg" alt="" />
                            <span>Support WhatsApp</span>
                        </button>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default NosTrades;
// export default checkAuth(NosTrades);
