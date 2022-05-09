// import router from 'next/router';
import Footer from '../components/footer';
// import Header from '../components/header';
import Head from 'next/head';

const NotFoundPage = (props: any) => {
    return (
        <div>
            <Head>
                <title>404 - Not Found</title>
            </Head>
            {/* <Header isOpenSideBar={props.useStateOpenSideBar} isEspaceTradingCrypto={true} /> */}
            <div className="not_found_page">
                <div>
                    <div className="logo">
                        <img src="/img/404.png" alt="" />
                        <p>Oups, la page que vous recherchez est introuvable</p>
                        <a href="#" className="primary-button">
                            <span>Retour à l’accueil</span>
                            <div className="right-arrow">
                                <img src="/img/icon/right-arrow.png" alt="" />
                            </div>
                        </a>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default NotFoundPage;
