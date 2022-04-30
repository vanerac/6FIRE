import type { NextPage } from 'next';
import Footer from './components/footer';
import Header from './components/header';
import Head from 'next/head';

const Cgv: NextPage = (props: any) => {
    return (
        <div>
            <Head>
                <title>CGV - Crypto Trader</title>
            </Head>
            <input type="hidden" id="anPageName" name="page" value="homepage-1" />
            <Header isOpenSideBar={props.useStateOpenSideBar} isEspaceTradingCrypto={true} />

            <div className="general_text_wrapper">
                <div className="main-title">
                    <h3 className="title">Conditions Générales de Vente</h3>
                </div>

                {/* Text box with title, you can copy to generate new text block */}
                <div className="text">
                    {/* Text title */}
                    <p>
                        Les présentes conditions générales de vente (ci-après les CGV) sont applicables à la vente en
                        ligne des services de la Société sur le Site, dont l’accès est libre et gratuit à tout
                        internaute, sous réserve des accès payants faisant partie des services offerts par la Société.
                    </p>

                    <p>
                        Les CGV sont opposables au Client qui reconnaît, en avoir eu connaissance et les avoir acceptées
                        avant de passer commande. L’acceptation des présentes CGV par le Client intervient le jour
                        auquel il souscrit à son Abonnement et ce pour la durée de l’abonnement prévue aux présentes
                        CGV.
                    </p>

                    <p>
                        La validation de la commande par sa confirmation vaut adhésion par le Client aux CGV en vigueur
                        au jour de la commande dont la conservation et la reproduction sont assurées par la Société.
                    </p>

                    <p>
                        Les présentes conditions générales de vente (ci-après les CGV) sont applicables à la vente en
                        ligne des services de la Société sur le Site, dont l’accès est libre et gratuit à tout
                        internaute, sous réserve des accès payants faisant partie des services offerts par la Société.
                    </p>

                    <p>
                        Les CGV sont opposables au Client qui reconnaît, en avoir eu connaissance et les avoir acceptées
                        avant de passer commande. L’acceptation des présentes CGV par le Client intervient le jour
                        auquel il souscrit à son Abonnement et ce pour la durée de l’abonnement prévue aux présentes
                        CGV.
                    </p>

                    <p>
                        La validation de la commande par sa confirmation vaut adhésion par le Client aux CGV en vigueur
                        au jour de la commande dont la conservation et la reproduction sont assurées par la Société.
                    </p>

                    <p>
                        Les présentes conditions générales de vente (ci-après les CGV) sont applicables à la vente en
                        ligne des services de la Société sur le Site, dont l’accès est libre et gratuit à tout
                        internaute, sous réserve des accès payants faisant partie des services offerts par la Société.
                    </p>

                    <p>
                        Les CGV sont opposables au Client qui reconnaît, en avoir eu connaissance et les avoir acceptées
                        avant de passer commande. L’acceptation des présentes CGV par le Client intervient le jour
                        auquel il souscrit à son Abonnement et ce pour la durée de l’abonnement prévue aux présentes
                        CGV.
                    </p>

                    <p>
                        La validation de la commande par sa confirmation vaut adhésion par le Client aux CGV en vigueur
                        au jour de la commande dont la conservation et la reproduction sont assurées par la Société.
                    </p>
                </div>

                {/* Text box with title, you can copy to generate new text block */}
                <div className="text">
                    {/* Text title */}
                    <h4 className="title">paragraph title will goes here</h4>
                    <p>
                        Les présentes conditions générales de vente (ci-après les CGV) sont applicables à la vente en
                        ligne des services de la Société sur le Site, dont l’accès est libre et gratuit à tout
                        internaute, sous réserve des accès payants faisant partie des services offerts par la Société.
                    </p>

                    <p>
                        Les CGV sont opposables au Client qui reconnaît, en avoir eu connaissance et les avoir acceptées
                        avant de passer commande. L’acceptation des présentes CGV par le Client intervient le jour
                        auquel il souscrit à son Abonnement et ce pour la durée de l’abonnement prévue aux présentes
                        CGV.
                    </p>

                    <p>
                        La validation de la commande par sa confirmation vaut adhésion par le Client aux CGV en vigueur
                        au jour de la commande dont la conservation et la reproduction sont assurées par la Société.
                    </p>

                    <p>
                        Les présentes conditions générales de vente (ci-après les CGV) sont applicables à la vente en
                        ligne des services de la Société sur le Site, dont l’accès est libre et gratuit à tout
                        internaute, sous réserve des accès payants faisant partie des services offerts par la Société.
                    </p>

                    <p>
                        Les CGV sont opposables au Client qui reconnaît, en avoir eu connaissance et les avoir acceptées
                        avant de passer commande. L’acceptation des présentes CGV par le Client intervient le jour
                        auquel il souscrit à son Abonnement et ce pour la durée de l’abonnement prévue aux présentes
                        CGV.
                    </p>

                    <p>
                        La validation de la commande par sa confirmation vaut adhésion par le Client aux CGV en vigueur
                        au jour de la commande dont la conservation et la reproduction sont assurées par la Société.
                    </p>

                    <p>
                        Les présentes conditions générales de vente (ci-après les CGV) sont applicables à la vente en
                        ligne des services de la Société sur le Site, dont l’accès est libre et gratuit à tout
                        internaute, sous réserve des accès payants faisant partie des services offerts par la Société.
                    </p>

                    <p>
                        Les CGV sont opposables au Client qui reconnaît, en avoir eu connaissance et les avoir acceptées
                        avant de passer commande. L’acceptation des présentes CGV par le Client intervient le jour
                        auquel il souscrit à son Abonnement et ce pour la durée de l’abonnement prévue aux présentes
                        CGV.
                    </p>

                    <p>
                        La validation de la commande par sa confirmation vaut adhésion par le Client aux CGV en vigueur
                        au jour de la commande dont la conservation et la reproduction sont assurées par la Société.
                    </p>
                </div>
            </div>

            {/* Footer section */}
            <Footer />
        </div>
    );
};

export default Cgv;
