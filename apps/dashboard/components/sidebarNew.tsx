import React from 'react';
import $ from 'jquery';
import Link from 'next/link';
import { useCookies } from 'react-cookie';
import getAPIClient from '@shared/tools/apiClient';
import router from 'next/router';

if (typeof window !== 'undefined') {
    $('.sidebar-dropdown > a').click(function () {
        $('.sidebar-submenu').slideUp(200);
        if ($(this).parent().hasClass('active')) {
            $('.sidebar-dropdown').removeClass('active');
            $(this).parent().removeClass('active');
        } else {
            $('.sidebar-dropdown').removeClass('active');
            $(this).next('.sidebar-submenu').slideDown(200);
            $(this).parent().addClass('active');
        }
    });
}

export default function useSideBar() {
    // Todo: Add search functionally
    // Todo: Add dropdown functionality
    const [cookies, setCookies, removeCookie] = useCookies(['API_TOKEN']);
    const apiClient = getAPIClient(cookies['API_TOKEN']);

    return (
        <div className="mainSideBar">
            <div className="page-wrapper toggled">
                <nav id="sidebar" className="sidebar-wrapper">
                    <div className="sidebar-content">
                        <div className="sidebar-menu">
                            <ul>
                                <li
                                // className="sidebar-dropdown"
                                >
                                    <Link passHref href="/home">
                                        <a>
                                            <i className="fa fa-home"></i>
                                            <span>Home</span>
                                        </a>
                                    </Link>

                                    {/*<div className="sidebar-submenu">*/}
                                    {/*    <ul>*/}
                                    {/*        <li>*/}
                                    {/*            <a href="#">Products</a>*/}
                                    {/*        </li>*/}
                                    {/*        <li>*/}
                                    {/*            <a href="#">Orders</a>*/}
                                    {/*        </li>*/}
                                    {/*        <li>*/}
                                    {/*            <a href="#">Credit cart</a>*/}
                                    {/*        </li>*/}
                                    {/*    </ul>*/}
                                    {/*</div>*/}
                                </li>
                                <li>
                                    <Link passHref href="/themesNew">
                                        <a>
                                            <i className="fa fa-home"></i>
                                            <span>Themes</span>
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link passHref href="/articlesNew">
                                        <a>
                                            <i className="fa fa-home"></i>
                                            <span>Articles</span>
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link passHref href="/bot-trading">
                                        <a>
                                            <i className="fa fa-home"></i>
                                            <span>Bot Trading</span>
                                        </a>
                                    </Link>
                                    <Link passHref href="utilisateurs">
                                        <a>
                                            <i className="fa fa-home"></i>
                                            <span>Utilisateurs</span>
                                        </a>
                                    </Link>
                                    <Link passHref href="abonnement-gestion-abonnements">
                                        <a>
                                            <i className="fa fa-home"></i>
                                            <span>Abonnements</span>
                                        </a>
                                    </Link>
                                    <button
                                        onClick={() => {
                                            removeCookie('API_TOKEN', { path: '/' });
                                            removeCookie('API_TOKEN', { domain: 'localhost' });
                                            removeCookie('API_TOKEN', { domain: '.6fireinvest.com' });
                                            removeCookie('API_TOKEN', { domain: '.6fireinvest.fr' });
                                            router.push('/');
                                        }}>
                                        Déconnexion
                                    </button>
                                </li>

                                {/*<li*/}
                                {/*// className="sidebar-dropdown"*/}
                                {/*>*/}
                                {/*    <Link href="/utilisateursNew" passHref>*/}
                                {/*        <a>*/}
                                {/*            <i className="far fa-gem"></i>*/}
                                {/*            <span>Utilisateurs</span>*/}
                                {/*        </a>*/}
                                {/*    </Link>*/}
                                {/*    /!*<div className="sidebar-submenu">*!/*/}
                                {/*    /!*    <ul>*!/*/}
                                {/*    /!*        <li>*!/*/}
                                {/*    /!*            <a href="#">General</a>*!/*/}
                                {/*    /!*        </li>*!/*/}
                                {/*    /!*    </ul>*!/*/}
                                {/*    /!*</div>*!/*/}
                                {/*</li>*/}
                                {/*<li className="sidebar-dropdown">*/}
                                {/*    <a href="#">*/}
                                {/*        <i className="fa fa-chart-line"></i>*/}
                                {/*        <span>Thèmes</span>*/}
                                {/*    </a>*/}
                                {/*    <div className="sidebar-submenu">*/}
                                {/*        <ul>*/}
                                {/*            <li>*/}
                                {/*                <Link href="/themesNew" passHref>*/}
                                {/*                    Tous les themes*/}
                                {/*                </Link>*/}
                                {/*            </li>*/}
                                {/*            <li>*/}
                                {/*                /!* eslint-disable-next-line @next/next/no-html-link-for-pages *!/*/}
                                {/*                <Link href="/themes-articles-creationNew" passHref>*/}
                                {/*                    Creer un theme*/}
                                {/*                </Link>*/}
                                {/*            </li>*/}
                                {/*        </ul>*/}
                                {/*    </div>*/}
                                {/*</li>*/}
                                {/*<li className="sidebar-dropdown">*/}
                                {/*    <a href="#">*/}
                                {/*        <i className="fa fa-globe"></i>*/}
                                {/*        <span>Articles</span>*/}
                                {/*    </a>*/}
                                {/*    <div className="sidebar-submenu">*/}
                                {/*        <ul>*/}
                                {/*            <li>*/}
                                {/*                <Link passHref href="/articlesNew">*/}
                                {/*                    Tous les articles*/}
                                {/*                </Link>*/}
                                {/*            </li>*/}
                                {/*            <li>*/}
                                {/*                <Link passHref href="/articles-creationNew">*/}
                                {/*                    Creer un article*/}
                                {/*                </Link>*/}
                                {/*            </li>*/}
                                {/*        </ul>*/}
                                {/*    </div>*/}
                                {/*</li>*/}
                                {/*/!*<li>*!/*/}
                                {/*/!*    <a href="#">*!/*/}
                                {/*/!*        <i className="fa fa-book"></i>*!/*/}
                                {/*/!*        <span>Trading & Crypto</span>*!/*/}
                                {/*/!*    </a>*!/*/}
                                {/*/!*</li>*!/*/}
                                {/*<li className="sidebar-dropdown">*/}
                                {/*    <a href="#">*/}
                                {/*        <i className="fa fa-book"></i>*/}
                                {/*        <span>Bot Trading</span>*/}
                                {/*    </a>*/}
                                {/*    <div className="sidebar-submenu">*/}
                                {/*        <ul>*/}
                                {/*            <li>*/}
                                {/*                <Link passHref href="/bot-trading">*/}
                                {/*                    Tous les Traders*/}
                                {/*                </Link>*/}
                                {/*            </li>*/}
                                {/*            <li>*/}
                                {/*                <Link passHref href="/bot-trading-creation">*/}
                                {/*                    Ajouter un trader*/}
                                {/*                </Link>*/}
                                {/*            </li>*/}
                                {/*        </ul>*/}
                                {/*    </div>*/}
                                {/*</li>*/}
                                {/*<li>*/}
                                {/*    <a href="#">*/}
                                {/*        <i className="fa fa-calendar"></i>*/}
                                {/*        <span>Crypto Wallet</span>*/}
                                {/*    </a>*/}
                                {/*</li>*/}
                                {/*<li>*/}
                                {/*    <a href="#">*/}
                                {/*        <i className="fa fa-folder"></i>*/}
                                {/*        <span>Broker</span>*/}
                                {/*    </a>*/}
                                {/*</li>*/}
                                {/*<li>*/}
                                {/*    <a href="#">*/}
                                {/*        <i className="fa fa-folder"></i>*/}
                                {/*        <span>Pays</span>*/}
                                {/*    </a>*/}
                                {/*</li>*/}

                                {/*<li className="sidebar-dropdown">*/}
                                {/*    <a href="#">*/}
                                {/*        <i className="fas fa-money-check"></i>*/}
                                {/*        <span>Abonnement</span>*/}
                                {/*    </a>*/}
                                {/*    <div className="sidebar-submenu">*/}
                                {/*        <ul>*/}
                                {/*            <li>*/}
                                {/*                <a href="#">General</a>*/}
                                {/*            </li>*/}
                                {/*        </ul>*/}
                                {/*    </div>*/}
                                {/*</li>*/}

                                {/*<li>*/}
                                {/*    <a href="#">*/}
                                {/*        <i className="fa fa-cog"></i>*/}
                                {/*        <span>Settings</span>*/}
                                {/*    </a>*/}
                                {/*</li>*/}
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
}
