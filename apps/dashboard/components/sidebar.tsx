import React from 'react';
import $ from 'jquery';
import style from '../styles/main.module.scss';
// import '../styles/loader.js'

/* Hamburger toggle script */
const $handleForm = () => {
    //
};

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

export default function Sidebar() {
    return (
        <div>
            <div className={style.sideBarStyles}>
                <div className="page-wrapper toggled">
                    <nav id="sidebar" className="sidebar-wrapper">
                        <div className="sidebar-content">
                            <div className="sidebar-menu">
                                <ul>
                                    <li className="sidebar-dropdown">
                                        <a href="#">
                                            <i className="fa fa-tachometer-alt"></i>
                                        </a>
                                        <div className="sidebar-submenu">
                                            <ul>
                                                <li>
                                                    <a href="#">
                                                        Dashboard 1
                                                        <span className="badge badge-pill badge-success">Pro</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">Dashboard 2</a>
                                                </li>
                                                <li>
                                                    <a href="#">Dashboard 3</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="sidebar-dropdown">
                                        <a href="#">
                                            <i className="fa fa-shopping-cart"></i>
                                            <span>E-commerce</span>
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
                                            <span>Components</span>
                                        </a>
                                        <div className="sidebar-submenu">
                                            <ul>
                                                <li>
                                                    <a href="#">General</a>
                                                </li>
                                                <li>
                                                    <a href="#">Panels</a>
                                                </li>
                                                <li>
                                                    <a href="#">Tables</a>
                                                </li>
                                                <li>
                                                    <a href="#">Icons</a>
                                                </li>
                                                <li>
                                                    <a href="#">Forms</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="sidebar-dropdown">
                                        <a href="#">
                                            <i className="fa fa-chart-line"></i>
                                            <span>Charts</span>
                                        </a>
                                        <div className="sidebar-submenu">
                                            <ul>
                                                <li>
                                                    <a href="#">Pie chart</a>
                                                </li>
                                                <li>
                                                    <a href="#">Line chart</a>
                                                </li>
                                                <li>
                                                    <a href="#">Bar chart</a>
                                                </li>
                                                <li>
                                                    <a href="#">Histogram</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="sidebar-dropdown">
                                        <a href="#">
                                            <i className="fa fa-globe"></i>
                                            <span>Maps</span>
                                        </a>
                                        <div className="sidebar-submenu">
                                            <ul>
                                                <li>
                                                    <a href="#">Google maps</a>
                                                </li>
                                                <li>
                                                    <a href="#">Open street map</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fa fa-book"></i>
                                            <span>Documentation</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fa fa-calendar"></i>
                                            <span>Calendar</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fa fa-folder"></i>
                                            <span>Examples</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                    <main className="page-content"></main>
                </div>
            </div>
        </div>
    );
}