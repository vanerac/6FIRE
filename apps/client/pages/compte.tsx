import type { NextPage } from 'next';
// import Image from 'next/image';
import Header from './components/header';
import Footer from './components/footer';
// import checkAuth from './components/checkAuth';
import Cookies from 'universal-cookie';
import router from 'next/router';
import { useEffect } from 'react';

const Compte: NextPage = (props: any) => {
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
                    <div className="main-title">
                        <h1 className="title">Compte <span>Marc Durand, marcdurand@gmail.com</span></h1>
                    </div>
                    <div className="informaion-wrapper">
                        <div className="single-info">
                            <img src="/img/info-icon/person.png" alt="" />
                            <p>Informations personnelles <span>Modifiez vos données personnelles</span></p>
                        </div>
                        <div className="single-info">
                            <img src="/img/info-icon/security.png" alt="" />
                            <p>Connexion et sécurité <span>Mettez à jour votre mot de passe</span></p>
                        </div>
                        <div className="single-info">
                            <img src="/img/info-icon/card.png" alt="" />
                            <p>Abonnement et paiement <span>Gérez, modifiez votre abonnement et vos informations de paiement</span></p>
                        </div>
                    </div>
                </div>
            <Footer />
        </div>
    );
};

// export default checkAuth(ArticlesDetails);
export default Compte;
