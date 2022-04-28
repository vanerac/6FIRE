import type { NextPage } from 'next';
import Footer from './components/footer';
import Header from './components/header';
// import checkAuth from './components/checkAuth';
import Cookies from 'universal-cookie';
import router from 'next/router';
import { useEffect } from 'react';

const PricePage: NextPage = (props: any) => {
    const cookies = new Cookies();

    useEffect(() => {
        if (!cookies.get('API_TOKEN')) {
            router.replace('/');
        }
    }, []);

    return (
        <div>
            <input type="hidden" id="anPageName" name="page" value="prices-page" />
            <Header isOpenSideBar={props.useStateOpenSideBar} isEspaceTradingCrypto={false} />

            <div className="pricing_wrapper">
                <div className="pricing_header_block">
                    <div className="bg-image">
                        <img src="img/mask-group-331@1x.png" alt="" />
                    </div>

                    <div className="section_container">
                        <div className="text">
                            <h2 className="title">VOTRE LICENCE 6FIRE INVEST </h2>
                            <p>L’accès au club 6FIRE est soumis à une licence payante pour éviter d’avoir des membres perturbateurs, non impliqué et n’étant pas dans l’esprit et la dynamique du club.</p>
                        </div>

                        <div className="pricing_table">

                            {/* single table */}
                            <div className="single_table">
                                <div className="price_head">
                                    <div className="title"><h3>Novice <span>(Pour les débutants/frileux)</span></h3></div>
                                    <div className="price">49,99€ <span>/mois</span></div>
                                    
                                    <button type='submit' className="primary-button">
                                        <span>Commencer</span>
                                        <div className="right-arrow">
                                            <img src="/img/icon/right-arrow.png" alt="" />
                                        </div>
                                    </button>
                                    <div className="description_wrap">
                                        <ul>
                                            <li><img src="/img/icon/check.png" alt="" /> Licence 6FIRE</li>
                                            <li><img src="/img/icon/check.png" alt="" /> Accès à tous les articles pour comprendre le monde de l’investissement</li>
                                            <li><img src="/img/icon/check.png" alt="" /> Accès aux Bons Plans</li>
                                            <li><img src="/img/icon/check.png" alt="" /> Accès aux articles permettant de se lancer dans le monde de l’investissement sans budget à travers des dizaines d’opportunités</li>
                                            <li><img src="/img/icon/check.png" alt="" />Accès aux rencontres et événements privés des membres en France</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="price_footer">
                                    <p>Offre sans engagement, annulable à tout moment</p>
                                </div>
                            </div>

                            {/* single table */}
                            <div className="single_table active">
                                <div className="price_head">
                                    <div className="title"><h3>INTERMÉDIAIRE <span>(Pour les ambitieux, qui veulent trader)</span></h3></div>
                                    <div className="price">99,99€ <span>/mois</span></div>
                                    
                                    <button type='submit' className="primary-button">
                                        <span>Commencer</span>
                                        <div className="right-arrow">
                                            <img src="/img/icon/right-arrow.png" alt="" />
                                        </div>
                                    </button>

                                    <div className="description_wrap">
                                        <ul>
                                            <li><img src="/img/icon/check.png" alt="" />Accès aux options de la Licence Novice</li>
                                            <li><img src="/img/icon/plus.png" alt="" />Accès au BOT TRADING permettant d’obtenir les alertes des meilleurs tradeurs du monde sur Binance</li>
                                            <li><img src="/img/icon/plus.png" alt="" />Accès à nos analyses sur les marchés</li>
                                            <li><img src="/img/icon/plus.png" alt="" />Accès à notre portefeuille Crypto et nos choix en temps réel pour le long terme</li>
                                            <li><img src="/img/icon/plus.png" alt="" />Accès aux signaux FOREX & CRYPTO permettant de voir en temps réel les positions que nous prenons sur les marchés</li>
                                            <li><img src="/img/icon/plus.png" alt="" />Accès à nos résultats</li>
                                            <li><img src="/img/icon/plus.png" alt="" />Accès à nos outils d’analyses secrets sur les marchés financiers</li>
                                            <li><img src="/img/icon/plus.png" alt="" />Challenge 1K to 10K</li>
                                            <li><img src="/img/icon/plus.png" alt="" />Support 24h/24 et 7j/7 pour les membres</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="price_footer">
                                    <p>Offre sans engagement, annulable à tout moment</p>
                                </div>
                            </div>

                            {/* single table */}
                            <div className="single_table">
                                <div className="price_head">
                                    <div className="title">PARTENAIRE 6FIRE</div>
                                    <div className="price">199,99€ <span>/mois</span></div>
                                    
                                    <button type='submit' className="primary-button">
                                        <span>Commencer</span>
                                        <div className="right-arrow">
                                            <img src="/img/icon/right-arrow.png" alt="" />
                                        </div>
                                    </button>

                                    <div className="description_wrap">
                                        <div className="body-title">
                                            <span>20</span>
                                            <h5>PLACES DISPONIBLES UNIQUEMENT</h5>
                                        </div>

                                        <ul>
                                            <li><img src="/img/icon/check.png" alt="" />Accès aux options de la Licence Novice et Intermédiaire</li>
                                            <li><img src="/img/icon/plus.png" alt="" />Accès aux options de la Licence Novice et Intermédiaire</li>
                                            <li><img src="/img/icon/plus.png" alt="" />Contact en temps réel avec les mentors pour tout suivi de projet en illimité </li>
                                            <li><img src="/img/icon/plus.png" alt="" />Un call une fois par semaine avec tous les partenaires</li>
                                        </ul>
                                    </div>
                                    
                                </div>

                                <div className="price_footer">
                                    <p>Offre sans engagement, annulable à tout moment</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <Footer />
        </div>
    );
};

export default PricePage;
// export default checkAuth(PricePage);
