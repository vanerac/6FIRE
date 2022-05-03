import type { NextPage } from 'next';
import Footer from './components/footer';
import Head from 'next/head';
import $ from 'jquery';
import Header from './components/header';
import IndexHeader from './components/header_inext';

/* scroll off */


if (typeof window !== 'undefined') {
    $("#video_trigger").click(function() {
        $('html, body').animate({
            scrollTop: $("#video_wrapper").offset().top
        }, 1000);
    });
}

const HomePage: NextPage = ($props: any) => {
    return (
        <div>
            <IndexHeader />
            <Head>
                <title>Acceuil - Crypto Trader</title>
            </Head>
            <input type="hidden" id="anPageName" name="page" value="homepage" />

            {/* Index header block */}
            <div className="index-header">
                <div>
                    <div className="index-logo mb-equal">
                        <img src="/img/logo/index-logo.png" alt="" />
                    </div>
                    <div className="mb-equal">
                        <p>Rejoindre le club d’investisseur</p>
                    </div>
                    <div className="mb-equal">
                        <a href="connexion" className="primary-button">
                            <span>Nous rejoindre</span>
                            <div className="right-arrow">
                                <img src="/img/icon/right-arrow.png" alt="" />
                            </div>
                        </a>
                    </div>
                    <div className="mb-equal position-bottom" id='video_trigger'>
                        <p className="big-text">Visionner la vidéo obligatoire pour comprendre le club privé 6FIRE</p>
                        <div className="scroll-icon">
                            <img src="img/icon-material-keyboard-arrow-down@1x.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            {/* Index header block END */}

            {/* Index Photo block */}
            <div className="index-photo-block" id='video_wrapper'>
                <div className="contanier">
                    <img src="img/cute-cat.jpg" alt="" />
                </div>
            </div>
            {/* Index Photo block END */}

            {/* Footer */}

            <Footer />
        </div>
    );
};

export default HomePage;
