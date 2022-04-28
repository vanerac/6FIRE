import type { NextPage } from 'next';
import Footer from './components/footer';
import Header from './components/header';
// import checkAuth from './components/checkAuth';
import { useEffect } from 'react';
import router from 'next/router';
import { useCookies } from 'react-cookie';
import getAPIClient from '@shared/tools/apiClient';

const CryptoWallet: NextPage = (props: any) => {
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
            <input type="hidden" id="anPageName" name="page" value="crypto-wallet" />
            <Header isOpenSideBar={props.useStateOpenSideBar} isEspaceTradingCrypto={false} />

            <div className="crypto_wrapper">
                <div className="header-block">
                    <div className="left-col">
                        <div>
                            <h3 className="title">Portefeuille Cryptomonnaies</h3>
                            <span className="sub">Mis à jour le 25 mars 2022</span>

                            <div className="crypto-button">
                                <button type="submit" className="primary-button">
                                    <span>Ouvrir un compte Binance</span>
                                    <div className="right-arrow">
                                        <img src="/img/icon/right-arrow.png" alt="" />
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="graph-wrapper">
                        <div className="round-box"></div>
                    </div>
                </div>

                <div className="table-block">
                    <div className="icon-row">
                        <div className="single-item">
                            <img src="/img/icon/c01.png" alt="" />
                            <p>
                                Bitcoin<span>60%</span>
                            </p>
                        </div>
                        <div className="single-item">
                            <img src="/img/icon/c02.png" alt="" />
                            <p>
                                ETH<span>20%</span>
                            </p>
                        </div>
                        <div className="single-item">
                            <img src="/img/icon/c03.png" alt="" />
                            <p>
                                Avax<span>15%</span>
                            </p>
                        </div>
                        <div className="single-item">
                            <img src="/img/icon/c04.png" alt="" />
                            <p>
                                SOL<span>5%</span>
                            </p>
                        </div>
                    </div>
                    <div className="currency-row">
                        <div className="euro">
                            <span>&euro;</span>
                        </div>
                        <input type="text" className="custom-input" placeholder="Mon capital...." />
                    </div>
                </div>

                <div className="article-block">
                    <span className="title">Mise à jour du 25 mars 2022</span>

                    <div className="text">
                        <p>J’ai déjà un bag dans l’ensemble des positions ci-dessous ! 💰</p>
                        <p>Explication :</p>
                        <p>- Pour 1Inch je vous laisse voir le token de la semaine est mon explication !</p>
                        <p>
                            - Je recharge un peu sur le BTC, car il drive le marché et je sortirai de cette position BTC
                            pour accumuler de l’ETH🔱
                        </p>
                        <p>
                            - En parlant d’ETH, je recharge en permanence au moins 30 % de mon investissement de la
                            semaine dessus, car je pense qu’il va continuer de surperformer le marché notamment avec
                            l’arrivée de l’EIP 1559 !
                        </p>
                        <p>
                            - DOT a connu l’une des descentes les plus drastiques, mais les fondamentaux restent ! Le
                            Web 3.0 est l’avenir pour moi et Polkadot en est le leader pour ma part ! 💻
                        </p>
                        <p>
                            - Mirror Protocol : Pourquoi recharger assez massivement sur MIR ? MIR est un protocole de
                            peg asset ! C’est-à-dire que vous pouvez acheter des tokens qui sont liés à une valeur.
                            Exemple l’USDT est un peg asset de l’USD ! Mirror propose des actions tokénisées comme
                            Apple, Tesla, etc… Ainsi vous pouvez vous exposer au marché classNameique sans quitter le
                            monde des cryptos. Cela peut attirer beaucoup de monde et Mirror en est l’un des pionniers
                            et le seul à en faire son activité principale ! Prochainement, une explication complète sera
                            disponible sur MIR ! 💸
                        </p>
                    </div>
                </div>
                <div className="copyright-inner">
                    <p>Ceci n’est pas un conseil en investissement</p>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default CryptoWallet;
// export default checkAuth(CryptoWallet);
