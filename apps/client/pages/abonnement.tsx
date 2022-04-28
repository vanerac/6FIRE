import type { NextPage } from 'next';
// import Image from 'next/image';
import Header from './components/header';
import Footer from './components/footer';
// import checkAuth from './components/checkAuth';
import Cookies from 'universal-cookie';
import router from 'next/router';
import { useEffect } from 'react';

const Abonnement: NextPage = (props: any) => {
    const cookies = new Cookies();

    useEffect(() => {
        if (!cookies.get('API_TOKEN')) {
            router.replace('/');
        }
    }, []);

    return (
        <div>
            <Header isOpenSideBar={props.useStateOpenSideBar} isEspaceTradingCrypto={false} />
            <div className="account-wrapper">
                <div className="breadcurm">
                    <span>Compte</span>
                    <img src="/img/info-icon/right-arrow.png" alt="" />
                    <span>Abonnement et paiement</span>
                </div>
                <div className="main-title">
                    <h1 className="title">
                        Abonnement et paiement
                        <span>Gérez, modifiez votre abonnement et vos informations de paiement</span>
                    </h1>
                </div>

                <div className="price-cart">
                    <div className="cart">
                        <div className="title">
                            Novice <span>(Pour les débutants/frileux)</span>
                        </div>
                        <div className="round-wrap">
                            <div className="price">
                                49,99€ <span>/mois</span>
                            </div>
                        </div>

                        <div className="send_btn">
                            <a href="#" type="submit" className="primary-button btn01">
                                <span>Licence en cours</span>
                                <div className="right-arrow">
                                    <img src="/img/icon/right-arrow.png" alt="" />
                                </div>
                            </a>
                            <a href="#" type="submit" className="primary-button btn02">
                                <span>Changer de Licence</span>
                                <div className="right-arrow">
                                    <img src="/img/icon/right-arrow.png" alt="" />
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="right-col">
                        <div className="text-box">
                            <img src="/img/info-icon/card.png" alt="" />
                            <p>Gérer les informations de paiement</p>
                        </div>
                        <div className="text-box">
                            <p>Annuler l’abonnement</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

// export default checkAuth(ArticlesDetails);
export default Abonnement;
