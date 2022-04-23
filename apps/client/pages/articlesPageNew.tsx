import type { NextPage } from 'next';
import Image from 'next/image';
import router from 'next/router';
import Footer from './components/footer';
import LoginPopup from './components/login';
import Header from './components/header';
// import './loader.js'
import $ from 'jquery';

const handleForm = () => {
    /* $('#date').val('data');
    console.log(handleForm); */

    $('.menu__btn').on('click', function (event) {
        event.preventDefault();
        $('.login_popup_wrapper').toggleClass("open"); 
   });
   handleForm();
};




const HomePage: NextPage = (props: any) => {
    console.log(props);
    return (
        <div>
            <input type="hidden" id="anPageName" name="page" value="homepage-1" />
            <Header isOpenSideBar={props.useStateOpenSideBar} isEspaceTradingCrypto={true} />

            <div className="article_wrapper">
                <div className="grid">
                    {/* single article */}
                    <div
                        onClick={() => {
                            handleForm();
                            router.push('/articlesDetails');
                        }}
                        className="single_article">
                        <div className="artitle_thum">
                            <Image layout="fill" src="/img/mask-group-321-2@1x.png" />
                        </div>
                        <div className="cat_and_date">
                            <div className="category">
                                <p className="lato-normal-milano-red-12px line">Play to Earn</p>
                                <p className="article_date lato-light-manatee-12px">Il y a 2 heures</p>
                            </div>
                        </div>
                        <div className="article_title">
                            <h4 className="title">Axie Infinity, jeu Play to Earn</h4>
                        </div>
                    </div>
                    {/* single article */}
                    <div onClick={() => router.push('/articlesDetails')} className="single_article">
                        <div className="artitle_thum">
                            <Image layout="fill" src="/img/mask-group-322-2@1x.png" />
                        </div>
                        <div className="cat_and_date">
                            <div className="category">
                                <p className="lato-normal-milano-red-12px  line">E-Commerce</p>
                                <p className="article_date lato-light-manatee-12px">Il y a 2 heures</p>
                            </div>
                        </div>
                        <div className="article_title">
                            <h4 className="title">Axie Infinity, jeu Play to Earn</h4>
                        </div>
                    </div>
                    {/* single article */}
                    <div onClick={() => router.push('/articlesDetails')} className="single_article">
                        <div className="artitle_thum">
                            <Image layout="fill" src="/img/mask-group-323-1@1x.png" />
                        </div>
                        <div className="cat_and_date">
                            <div className="category">
                                <p className="lato-normal-milano-red-12px  line">Crypto</p>
                                <p className="article_date lato-light-manatee-12px">19 février 2022</p>
                            </div>
                        </div>
                        <div className="article_title">
                            <h4 className="title">Les 5 erreurs à éviter en crypton</h4>
                        </div>
                    </div>
                    {/* single article */}
                    <div onClick={() => router.push('/articlesDetails')} className="single_article">
                        <div className="artitle_thum">
                            <Image layout="fill" src="/img/mask-group-324-1@1x.png" />
                        </div>
                        <div className="cat_and_date">
                            <div className="category">
                                <p className="lato-normal-milano-red-12px  line">Entreprenariat</p>
                                <p className="article_date lato-light-manatee-12px">Il y a 2 heures</p>
                            </div>
                        </div>
                        <div className="article_title">
                            <h4 className="title">Comment se lancer ?</h4>
                        </div>
                    </div>
                    {/* single article */}
                    <div onClick={() => router.push('/articlesDetails')} className="single_article">
                        <div className="artitle_thum">
                            <Image layout="fill" src="/img/mask-group-325-1@1x.png" />
                        </div>
                        <div className="cat_and_date">
                            <div className="category">
                                <p className="lato-normal-milano-red-12px  line">Crypto</p>
                                <p className="article_date lato-light-manatee-12px">19 février 2022</p>
                            </div>
                        </div>
                        <div className="article_title">
                            <h4 className="title">EXCLU MEMBRE CONFIRMÉ</h4>
                        </div>
                    </div>
                    {/* single article */}
                    <div onClick={() => router.push('/articlesDetails')} className="single_article">
                        <div className="artitle_thum">
                            <Image layout="fill" src="/img/mask-group-321-1@1x.png" />
                        </div>
                        <div className="cat_and_date">
                            <div className="category">
                                <p className="lato-normal-milano-red-12px  line">Crypto</p>
                                <p className="article_date lato-light-manatee-12px">19 février 2022</p>
                            </div>
                        </div>
                        <div className="article_title">
                            <h4 className="title">Les cryptomonaies, par où commencer ?</h4>
                        </div>
                    </div>
                    {/* single article */}
                    <div onClick={() => router.push('/articlesDetails')} className="single_article">
                        <div className="artitle_thum">
                            <Image layout="fill" src="/img/mask-group-322-1@1x.png" />
                        </div>
                        <div className="cat_and_date">
                            <div className="category">
                                <p className="lato-normal-milano-red-12px  line">Crypto</p>
                                <p className="article_date lato-light-manatee-12px">19 février 2022</p>
                            </div>
                        </div>
                        <div className="article_title">
                            <h4 className="title">Pourquoi investir dans l’AVAX ?</h4>
                        </div>
                    </div>
                    {/* single article */}
                    <div onClick={() => router.push('/articlesDetails')} className="single_article">
                        <div className="artitle_thum">
                            <Image layout="fill" src="/img/mask-group-323-1@1x.png" />
                        </div>
                        <div className="cat_and_date">
                            <div className="category">
                                <p className="lato-normal-milano-red-12px  line">Crypto</p>
                                <p className="article_date lato-light-manatee-12px">19 février 2022</p>
                            </div>
                        </div>
                        <div className="article_title">
                            <h4 className="title">Pourquoi investir dans l’AVAX ?</h4>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className="call-to-action-58RGA4">
                    <div className="groupe-de-masques-328-ir0Byo">
                        <Image layout="fill" src="/img/mask-group-328@1x.png" />
                    </div>
                    <div className="club-premium-ir0Byo lato-bold-white-18px">OFFRE TRADING</div>
                    <div className="club-premium-LilIVz lato-normal-white-14px">+ Stratégies d’investissement</div>
                    <div className="club-premium-rz44I0 lato-normal-white-14px">+ Canal privé Telegram</div>
                    <div className="club-premium-xphxTL lato-normal-white-14px">+ Portefeuille Crypto</div>
                    <div className="club-premium-VHjhEL lato-normal-white-14px">+ Alertes des meilleurs Traders</div>
                    <div className="button-ir0Byo">
                        <div className="rectangle-3572-Vs6vPy"></div>
                        <div className="exclu-membre-confirm-Vs6vPy lato-bold-white-14px">Rejoindre</div>
                    </div>
                </div> */}
            {/* <div className="avertissement-58RGA4">
                    <div className="groupe-3020-yrWeSQ">
                        <div className="rectangle-3606-F1UxfM"></div>
                        <div className="les-investissements-F1UxfM lato-normal-white-12px-2">
                            <span className="span0-Y4VUvr lato-bold-white-12px">Les investissements sont risqués.</span>
                            <span className="span1-Y4VUvr lato-normal-white-12px">
                                Les investissements sont risqués par nature, les utilisateurs doivent faire leurs
                                propres recherches avant d’entreprendre toute action et n’investir que dans les limites
                                de leurs capacités financières. Cet article ne constitue pas un conseil en
                                investissement.
                            </span>
                        </div>
                    </div>
                    <div className="ligne-41-yrWeSQ">
                        <Image layout="fill" src="/img/line-41-2@1x.png" />
                    </div>
                </div> */}

            <Footer />
            <LoginPopup />
        </div>
    );
};

export default HomePage;
