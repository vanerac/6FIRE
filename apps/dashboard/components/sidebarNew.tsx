import React from 'react';
import $ from 'jquery';

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

export default function sideBar() {
    // Todo: Add search functionally
    // Todo: Add dropdown functionality
    return (
        <div className="mainSideBar">
            <div className="page-wrapper toggled">
                <nav id="sidebar" className="sidebar-wrapper">
                    <div className="sidebar-content">
                        <div className="sidebar-menu">
                            <ul>
                                <li className="sidebar-dropdown">
                                    <a href="#">
                                        <i className="fa fa-home"></i>
                                        <span>Home</span>
                                    </a>
                                    <div className="sidebar-submenu">
                                        <ul>
                                            <li>
                                                <a href="#">Products</a>
                                            </li>
                                            <li>
                                                <a href="#">Orders</a>
                                            </li>
                                            <li>
                                                <a href="#">Credit cart</a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="sidebar-dropdown">
                                    <a href="#">
                                        <i className="far fa-gem"></i>
                                        <span>Utilisateurs</span>
                                    </a>
                                    <div className="sidebar-submenu">
                                        <ul>
                                            <li>
                                                <a href="#">General</a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="sidebar-dropdown">
                                    <a href="#">
                                        <i className="fa fa-chart-line"></i>
                                        <span>Thèmes articles</span>
                                    </a>
                                    <div className="sidebar-submenu">
                                        <ul>
                                            <li>
                                                <a href="#">Pie chart</a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="sidebar-dropdown">
                                    <a href="#">
                                        <i className="fa fa-globe"></i>
                                        <span>Articles</span>
                                    </a>
                                    <div className="sidebar-submenu">
                                        <ul>
                                            <li>
                                                <a href="#">Google maps</a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fa fa-book"></i>
                                        <span>Trading & Crypto</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fa fa-book"></i>
                                        <span>Bot Trading</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fa fa-calendar"></i>
                                        <span>Crypto Wallet</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fa fa-folder"></i>
                                        <span>Broker</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fa fa-folder"></i>
                                        <span>Pays</span>
                                    </a>
                                </li>

                                <li className="sidebar-dropdown">
                                    <a href="#">
                                        <i className="fas fa-money-check"></i>
                                        <span>Abonnement</span>
                                    </a>
                                    <div className="sidebar-submenu">
                                        <ul>
                                            <li>
                                                <a href="#">General</a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>

                                <li>
                                    <a href="#">
                                        <i className="fa fa-cog"></i>
                                        <span>Settings</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
}
