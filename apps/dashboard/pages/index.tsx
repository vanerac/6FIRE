import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Switch } from 'react-router';
import UIInventory from '../components/UIInventory';
import Home from './Home';
import Utilisateurs from './Utilisateurs';
import DtailsUtilisateurs from './DetailsUtilisateur';
import ThmesArticles from './ThemesArticles';
import ThmesArticlesCration from './ThemesArticlesCreation';
import ArticlesHistoriqueArticles from './ArticlesHistoriqueArticles';
import ArticlesCrerUnArticle from './ArticlesCrerUnArticle';
import ArticlesCrerUnArticle1 from './ArticlesCrerUnArticle1';
import TradingCrypto3 from './TradingCrypto3';
import BotTrading from './BotTrading';
import CryptoWallet from './CryptoWaller';
import Broker from './Broker';
import BrokerCrerUnBroker from './BrokerCreate';
import Pays from './Pays';
import Paramtres from './Settings';
import AbonnementGestionAbonnements from './AbonnementGestionAbonnements';
import AbonnementCrerUnAbonnement from './AbonnementCrerUnAbonnement';
import AbonnementCrerUnAbonnementpriodeDes from './AbonnementCrerUnAbonnementpriodeDes';
import AbonnementCodePromo from './AbonnementCodePromo';
import AbonnementCodePromoCrer from './AbonnementCodePromoCrer';
import AbonnementEssaiGratuit from './AbonnementEssaiGratuit';
import AbonnementEssaiGratuitCrerEssaiGrat from './AbonnementEssaiGratuitCrerEssaiGrat';
import AbonnementCodeGratuit from './AbonnementCodeGratuit';
import type { NextPage } from 'next';

const App: NextPage = () => {
    return (
        <Router>
            <Switch>
                <Route path="/:path(|ui-inventory)">
                    <UIInventory {...uIInventoryData} />
                </Route>
                <Route path="/home">
                    <Home {...homeData} />
                </Route>
                <Route path="/utilisateurs">
                    <Utilisateurs {...utilisateursData} />
                </Route>
                <Route path="/details-utilisateurs">
                    <DtailsUtilisateurs {...dtailsUtilisateursData} />
                </Route>
                <Route path="/themes-articles">
                    <ThmesArticles {...thmesArticlesData} />
                </Route>
                <Route path="/themes-articles-creation">
                    <ThmesArticlesCration {...thmesArticlesCrationData} />
                </Route>
                <Route path="/articles-historique-articles">
                    <ArticlesHistoriqueArticles {...articlesHistoriqueArticlesData} />
                </Route>
                <Route path="/articles-creer-un-article">
                    <ArticlesCrerUnArticle {...articlesCrerUnArticleData} />
                </Route>
                <Route path="/articles-creer-un-article-1">
                    <ArticlesCrerUnArticle1 {...articlesCrerUnArticle1Data} />
                </Route>
                <Route path="/trading-crypto">
                    <TradingCrypto3 {...tradingCrypto310Data} />
                </Route>
                <Route path="/bot-trading">
                    <BotTrading {...botTradingData} />
                </Route>
                <Route path="/crypto-wallet">
                    <CryptoWallet {...cryptoWalletData} />
                </Route>
                <Route path="/broker">
                    <Broker {...brokerData} />
                </Route>
                <Route path="/broker-creer-un-broker">
                    <BrokerCrerUnBroker {...brokerCrerUnBrokerData} />
                </Route>
                <Route path="/pays">
                    <Pays {...paysData} />
                </Route>
                <Route path="/parametres">
                    <Paramtres {...paramtresData} />
                </Route>
                <Route path="/abonnement-gestion-abonnements">
                    <AbonnementGestionAbonnements {...abonnementGestionAbonnementsData} />
                </Route>
                <Route path="/abonnement-creer-un-abonnement">
                    <AbonnementCrerUnAbonnement {...abonnementCrerUnAbonnementData} />
                </Route>
                <Route path="/abonnement-creer-un-abonnement-periode-dessai">
                    <AbonnementCrerUnAbonnementpriodeDes {...abonnementCrerUnAbonnementpriodeDesData} />
                </Route>
                <Route path="/abonnement-code-promo">
                    <AbonnementCodePromo {...abonnementCodePromoData} />
                </Route>
                <Route path="/abonnement-code-promo-creer">
                    <AbonnementCodePromoCrer {...abonnementCodePromoCrerData} />
                </Route>
                <Route path="/abonnement-essai-gratuit">
                    <AbonnementEssaiGratuit {...abonnementEssaiGratuitData} />
                </Route>
                <Route path="/abonnement-essai-gratuit-creer-essai-gratuit">
                    <AbonnementEssaiGratuitCrerEssaiGrat {...abonnementEssaiGratuitCrerEssaiGratData} />
                </Route>
                <Route path="/abonnement-code-gratuit">
                    <AbonnementCodeGratuit {...abonnementCodeGratuitData} />
                </Route>
            </Switch>
        </Router>
    );
};

export default App;
const colour1Data = {
    x665Eff: '#F5F6FA',
    rgb10294225: 'RGB (245,246,250)',
};

const colour2Data = {
    x665Eff: '#E6E9F4',
    rgb10294225: 'RGB (230,233,244)',
    className: 'colour-1',
};

const colour3Data = {
    x665Eff: '#D7DBEC',
    rgb10294225: 'RGB (215,219,236)',
    className: 'colour-2',
};

const colour4Data = {
    x665Eff: '#7E84A3',
    rgb10294225: 'RGB (126,132,163)',
    className: 'colour-3',
};

const colour5Data = {
    x665Eff: '#131523',
    rgb10294225: 'RGB (19,21,35)',
    className: 'colour-4',
};

const colour6Data = {
    x665Eff: '#0058FF',
    rgb10294225: 'RGB (0,88,255)',
    className: 'colour-5',
};

const colour7Data = {
    x665Eff: '#F0142F',
    rgb10294225: 'RGB (240,20,47)',
    className: 'colour-6',
};

const colour8Data = {
    x665Eff: '#57B8FF',
    rgb10294225: 'RGB (87,184,255)',
    className: 'colour-7',
};

const colour9Data = {
    x665Eff: '#FFC700',
    rgb10294225: 'RGB (255,199,0)',
    className: 'colour-8',
};

const colour10Data = {
    x665Eff: '#F99600',
    rgb10294225: 'RGB (249,150,0)',
    className: 'colour-9',
};

const colour11Data = {
    x665Eff: '#21D59B',
    rgb10294225: 'RGB (33,213,155)',
    className: 'colour-10',
};

const colour12Data = {
    x665Eff: '#D5D7E3',
    rgb10294225: 'RGB (213,215,227)',
    className: 'colour-11',
};

const iconsNavigationIcon12States1Data = {
    src: '/img/ic-home-10@1x.png',
};

const iconsNavigationIcon12States2Data = {
    src: '/img/ic-inbox-1@1x.png',
    className: 'icons-navigation-icon-12-states-1',
};

const iconsNavigationIcon12States3Data = {
    src: '/img/ic-users-11@1x.png',
    className: 'icons-navigation-icon-12-states-2',
};

const iconsNavigationIcon12States4Data = {
    src: '/img/ic-message@1x.png',
    className: 'icons-navigation-icon-12-states-3',
};

const iconsNavigationIcon12States5Data = {
    src: '/img/ic-calendar-1@1x.png',
    className: 'icons-navigation-icon-12-states-4',
};

const iconsNavigationIcon12States6Data = {
    src: '/img/ic-bell@1x.png',
    className: 'icons-navigation-icon-12-states-5',
};

const iconsNavigationIcon12States7Data = {
    src: '/img/ic-help@1x.png',
    className: 'icons-navigation-icon-12-states-6',
};

const iconsNavigationIcon12States8Data = {
    src: '/img/ic-invoice-10@1x.png',
    className: 'icons-navigation-icon-12-states-7',
};

const iconsNavigationIcon12States9Data = {
    src: '/img/ic-file-download-1@1x.png',
    className: 'icons-navigation-icon-12-states-5',
};

const iconsNavigationIcon12States10Data = {
    src: '/img/ic-calendar-1@1x.png',
    className: 'icons-navigation-icon-12-states-8',
};

const iconsNavigationIcon12States11Data = {
    src: '/img/ic-calendar-13@1x.png',
    className: 'icons-navigation-icon-12-states-9',
};

const iconsNavigationIcon12States12Data = {
    src: '/img/ic-setting-11@1x.png',
    className: 'icons-navigation-icon-12-states-10',
};

const iconsNavigationIcon12States13Data = {
    src: '/img/ic-home-10@1x.png',
    className: 'icons-navigation-icon-12-states-5',
};

const sidebarMenuItem1Data = {
    name: 'Home',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States13Data,
};

const iconsNavigationIcon12States14Data = {
    src: '/img/ic-home-10@1x.png',
    className: 'icons-navigation-icon-12-states-11',
};

const sidebarMenuItem21Data = {
    name: 'Utilisateurs',
    className: 'customers-4',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States49Data,
};

const iconsNavigationIcon12States15Data = {
    src: '/img/ic-home-10@1x.png',
    className: 'icons-navigation-icon-12-states-5',
};

const sidebarMenuItem3Data = {
    name: 'Home',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States15Data,
};

const tabGroupElementsRegularTab2States1Data = {
    children: 'Days',
};

const tabGroupElementsRegularTab2States2Data = {
    children: 'Weeks',
    className: 'tab-group-_-elements-1',
};

const tabGroupElementsRegularTab2States22Data = {
    children: 'Months',
};

const iconsNavigationIcon12States16Data = {
    src: '/img/ic-file-download-1@1x.png',
    className: 'icons-navigation-icon-12-states-5',
};

const buttonsBtnTextIcon1Data = {
    text: 'Button',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States16Data,
};

const iconsChevronRightData = {
    iconsChevronRight: '/img/trac--397-1@1x.png',
    trac407: '/img/trac--407@1x.png',
};

const buttonsBtnSmalTextData = {
    findOutMore: 'More Insights',
    iconsChevronRightProps: iconsChevronRightData,
};

const tooltipPointerDownData = {
    bg: '/img/bg@1x.png',
    titlee: 'August 2020',
    x7501: '$49k',
    onlineSales1: 'Income',
    x7502: '$38k',
    onlineSales2: 'Expense',
};

const tooltipPointerLeftData = {
    bg: '/img/bg-2@1x.png',
    titlee: 'June, 2019',
    x7501: '224',
    onlineSales1: 'New Customers',
    x7502: '224',
    onlineSales2: 'Women',
    x7503: '256',
    onlineSales3: 'Men',
};

const usersAvatarPhoto2States1Data = {
    image: '/img/image-1@1x.png',
};

const usersAvatarPhoto2States2Data = {
    children: 'SC',
};

const topNavigationSearch1Data = {
    color: '/img/color-10@1x.png',
};

const iconsNavigationIcon12States17Data = {
    src: '/img/chevron-left@1x.png',
    className: 'icons-navigation-icon-12-states-5',
};

const paginationPageNumber2StatesData = {
    children: '1',
};

const paginationPageNumber2States21Data = {
    children: '2',
};

const paginationPageNumber2States22Data = {
    children: '3',
};

const paginationPageNumber2States23Data = {
    children: '4',
};

const paginationPageNumber2States24Data = {
    children: '…',
};

const paginationPageNumber2States25Data = {
    children: '11',
};

const paginationPageNumber2States26Data = {
    children: '12',
    className: 'pagination-page-number-2-states-3',
};

const iconsNavigationIcon12States18Data = {
    src: '/img/chevron-right@1x.png',
    className: 'icons-chevron-right',
};

const widgetsElementsChartMiniChart1Data = {
    chart: '/img/path-4-copy-6-3@1x.png',
    path4Copy8: '/img/path-4-copy-8@1x.png',
};

const widgetsDataCardWithChartsData = {
    sales: 'Unique Purchases',
    x27632: '3,137',
    widgetsElementsChartMiniChartProps: widgetsElementsChartMiniChart1Data,
};

const widgetsElementsPrice2Data = {
    className: 'widgets-_-elements-price-1',
};

const iconsWidgetIllustration1Data = {
    src: '/img/refresh-1@1x.png',
};

const widgetsDataCardWithIconsData = {
    sales: 'Total Sessions',
    x27632: '14k',
    widgetsElementsPriceProps: widgetsElementsPrice2Data,
    iconsWidgetIllustrationProps: iconsWidgetIllustration1Data,
};

const widgetsElementsChartGraphLineBarData = {
    name: 'Jan',
};

const widgetsElementsChartGraphDoubleBarData = {
    greenBar: '/img/green-bar@1x.png',
    blueBar: '/img/blue-bar@1x.png',
    month: 'Jan 20',
};

const widgetsElementsChartGraphStackedBarData = {
    children: 'Jan',
};

const legend1Data = {
    children: 'Online',
};

const legend2Data = {
    children: 'Offline',
    className: 'legend-2',
};

const usersAvatarPhoto2States3Data = {
    image: '/img/image-1@1x.png',
};

const iconsNavigationIcon12States19Data = {
    src: '/img/ic-inbox-1@1x.png',
    className: 'icons-navigation-icon-12-states-12',
};

const widgetsCustomerRowData = {
    customerId00222: 'Customer ID#01223',
    isabellaMoran: 'Mitchell Williamson',
    usersAvatarPhoto2StatesProps: usersAvatarPhoto2States3Data,
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States19Data,
};

const widgetsTableTableHeaderData = {
    paymentNumber: 'CHANNELS',
    dateTime1: 'SESSIONS',
    dateTime2: 'BOUNCE RATE',
    amount1: 'TRAFFIC',
    amount2: 'SALES',
};

const widgetsTableTableRow1Data = {
    paymentFrom10321: 'Direct',
    mar212019330Pm1: '45,759',
    mar212019330Pm2: '32.1%',
    x250001: '3.5%',
    x250002: '1765',
};

const widgetsTableTableRow2Data = {
    paymentFrom10321: 'Call In',
    mar212019330Pm1: '89,298',
    mar212019330Pm2: '49.2%',
    x250001: '1.5%',
    x250002: '1856',
    className: 'row',
};

const widgetsTableTableRow3Data = {
    paymentFrom10321: 'Paid search',
    mar212019330Pm1: '62,767',
    mar212019330Pm2: '9.3%',
    x250001: '6.0%',
    x250002: '1449',
    className: 'row-1',
};

const widgetsTableTableRow4Data = {
    paymentFrom10321: 'Organic search',
    mar212019330Pm1: '123,879',
    mar212019330Pm2: '45.9%',
    x250001: '7.5%',
    x250002: '1432',
    className: 'row-2',
};

const widgetsTableTableRow5Data = {
    paymentFrom10321: 'Email',
    mar212019330Pm1: '92,179',
    mar212019330Pm2: '48.2%',
    x250001: '4.2%',
    x250002: '2029',
    className: 'row-3',
};

const widgetsTableTableRow6Data = {
    paymentFrom10321: 'Referal',
    mar212019330Pm1: '15,875',
    mar212019330Pm2: '31.1%',
    x250001: '3.2%',
    x250002: '1689',
    className: 'row-4',
};

const widgetsTableTableRow7Data = {
    paymentFrom10321: 'Proposal',
    mar212019330Pm1: '92,179',
    mar212019330Pm2: '48.2%',
    x250001: '4.2%',
    x250002: '2029',
    className: 'row-5',
};

const widgetsTableTableRow8Data = {
    paymentFrom10321: 'Marketing campaign',
    mar212019330Pm1: '102,768',
    mar212019330Pm2: '51.2%',
    x250001: '4.3%',
    x250002: '2456',
    className: 'row-6',
};

const widgetsTableTableRow9Data = {
    paymentFrom10321: 'Partners',
    mar212019330Pm1: '45,759',
    mar212019330Pm2: '32.1%',
    x250001: '3.5%',
    x250002: '1765',
    className: 'row-7',
};

const uIInventoryData = {
    dashboardUiKit: 'DASHBOARD UI KIT',
    createdByImpekable: 'Created by',
    impekable_Logo_White: '/img/impekable-logo-white@1x.png',
    title1: 'COLORS',
    sales1: 'Lines, Borders, Text',
    ligne351: '/img/ligne-35@1x.png',
    sales2: 'Text',
    ligne352: '/img/ligne-35-1@1x.png',
    sales3: 'Main CTA',
    ligne353: '/img/ligne-35-2@1x.png',
    sales4: 'Notification',
    ligne354: '/img/ligne-35-2@1x.png',
    sales5: 'Additional',
    ligne355: '/img/ligne-35-4@1x.png',
    title2: 'TYPOGRAPHY',
    latoBold: 'Poppins Bold',
    aabbccdd1: 'AaBbCcDd',
    latoRegular: 'Poppins Semi Bold',
    aabbccdd2: 'AaBbCcDd',
    latoLight1: 'Poppins Medium',
    title3: 'AaBbCcDd',
    latoLight2: 'Poppins  Regular',
    aabbccdd3: 'AaBbCcDd',
    x01Colours: 'ICONS',
    title4: 'SIDEBAR',
    title5: 'TABS',
    title6: 'BUTTONS',
    title7: 'TOOLTIPS',
    title8: 'AVATARS',
    title9: 'SEARCH BAR',
    title10: 'PAGINATION',
    title11: 'CARDS',
    title12: 'GRAPH BARS',
    title13: 'LEGEND',
    title14: 'CUSTOMERS',
    title15: 'TABLES',
    colour1Props: colour1Data,
    colour2Props: colour2Data,
    colour3Props: colour3Data,
    colour4Props: colour4Data,
    colour5Props: colour5Data,
    colour6Props: colour6Data,
    colour7Props: colour7Data,
    colour8Props: colour8Data,
    colour9Props: colour9Data,
    colour10Props: colour10Data,
    colour11Props: colour11Data,
    colour12Props: colour12Data,
    iconsNavigationIcon12States1Props: iconsNavigationIcon12States1Data,
    iconsNavigationIcon12States2Props: iconsNavigationIcon12States2Data,
    iconsNavigationIcon12States3Props: iconsNavigationIcon12States3Data,
    iconsNavigationIcon12States4Props: iconsNavigationIcon12States4Data,
    iconsNavigationIcon12States5Props: iconsNavigationIcon12States5Data,
    iconsNavigationIcon12States6Props: iconsNavigationIcon12States6Data,
    iconsNavigationIcon12States7Props: iconsNavigationIcon12States7Data,
    iconsNavigationIcon12States8Props: iconsNavigationIcon12States8Data,
    iconsNavigationIcon12States9Props: iconsNavigationIcon12States9Data,
    iconsNavigationIcon12States10Props: iconsNavigationIcon12States10Data,
    iconsNavigationIcon12States11Props: iconsNavigationIcon12States11Data,
    iconsNavigationIcon12States12Props: iconsNavigationIcon12States12Data,
    sidebarMenuItemProps: sidebarMenuItem1Data,
    sidebarMenuItem2Props: sidebarMenuItem21Data,
    sidebarMenuItem3Props: sidebarMenuItem3Data,
    tabGroupElementsRegularTab2States1P: tabGroupElementsRegularTab2States1Data,
    tabGroupElementsRegularTab2States2P: tabGroupElementsRegularTab2States2Data,
    tabGroupElementsRegularTab2States2P2: tabGroupElementsRegularTab2States22Data,
    buttonsBtnTextIconProps: buttonsBtnTextIcon1Data,
    buttonsBtnSmalTextProps: buttonsBtnSmalTextData,
    tooltipPointerDownProps: tooltipPointerDownData,
    tooltipPointerLeftProps: tooltipPointerLeftData,
    usersAvatarPhoto2StatesProps: usersAvatarPhoto2States1Data,
    usersAvatarPhoto2States2Props: usersAvatarPhoto2States2Data,
    topNavigationSearchProps: topNavigationSearch1Data,
    iconsNavigationIcon12States13Props: iconsNavigationIcon12States17Data,
    paginationPageNumber2StatesProps: paginationPageNumber2StatesData,
    paginationPageNumber2States21Props: paginationPageNumber2States21Data,
    paginationPageNumber2States22Props: paginationPageNumber2States22Data,
    paginationPageNumber2States23Props: paginationPageNumber2States23Data,
    paginationPageNumber2States24Props: paginationPageNumber2States24Data,
    paginationPageNumber2States25Props: paginationPageNumber2States25Data,
    paginationPageNumber2States26Props: paginationPageNumber2States26Data,
    iconsNavigationIcon12States14Props: iconsNavigationIcon12States18Data,
    widgetsDataCardWithChartsProps: widgetsDataCardWithChartsData,
    widgetsDataCardWithIconsProps: widgetsDataCardWithIconsData,
    widgetsElementsChartGraphLineBarPro: widgetsElementsChartGraphLineBarData,
    widgetsElementsChartGraphDoubleBarP: widgetsElementsChartGraphDoubleBarData,
    widgetsElementsChartGraphStackedBar: widgetsElementsChartGraphStackedBarData,
    legend1Props: legend1Data,
    legend2Props: legend2Data,
    widgetsCustomerRowProps: widgetsCustomerRowData,
    widgetsTableTableHeaderProps: widgetsTableTableHeaderData,
    widgetsTableTableRow1Props: widgetsTableTableRow1Data,
    widgetsTableTableRow2Props: widgetsTableTableRow2Data,
    widgetsTableTableRow3Props: widgetsTableTableRow3Data,
    widgetsTableTableRow4Props: widgetsTableTableRow4Data,
    widgetsTableTableRow5Props: widgetsTableTableRow5Data,
    widgetsTableTableRow6Props: widgetsTableTableRow6Data,
    widgetsTableTableRow7Props: widgetsTableTableRow7Data,
    widgetsTableTableRow8Props: widgetsTableTableRow8Data,
    widgetsTableTableRow9Props: widgetsTableTableRow9Data,
};

const topNavigationSearch2Data = {
    color: '/img/color-2@1x.png',
    className: 'top-navigation-search-1',
};

const usersAvatarPhoto2States4Data = {
    image: '/img/image-2@1x.png',
    className: 'users-avatar-photo-2-states-2',
};

const userGroup1Data = {
    usersAvatarPhoto2StatesProps: usersAvatarPhoto2States4Data,
};

const iconsNavigationIcon12States20Data = {
    src: '/img/ic-home-10@1x.png',
    className: 'icons-navigation-icon-12-states-13',
};

const sidebarMenuItem22Data = {
    name: 'Home',
    className: 'home-22',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States20Data,
};

const iconsNavigationIcon12States21Data = {
    src: '/img/ic-users-11@1x.png',
    className: 'icons-navigation-icon-12-states-5',
};

const sidebarMenuItem4Data = {
    name: 'Utilisateurs',
    className: 'customers-1',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States21Data,
};

const iconsNavigationIcon12States23Data = {
    src: '/img/fontawsome--bookmark--10@1x.png',
    className: 'icons-navigation-icon-12-states-14',
};

const sidebarMenuItem5Data = {
    name: 'Thèmes articles',
    className: 'thmes-articles',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States23Data,
};

const iconsNavigationIcon12States24Data = {
    src: '/img/ic-invoice-10@1x.png',
    className: 'icons-navigation-icon-12-states-5',
};

const articles1Data = {
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States24Data,
};

const tradingCrypto1Data = {
    iconPencil: '/img/fontawsome--pen--10@1x.png',
    name: 'Trading & Crypto',
};

const tradingCrypto2Data = {
    iconPencil: '/img/fontawsome--robot--3@1x.png',
    name: 'Bot Trading',
    className: 'bot-trading',
};

const tradingCrypto3Data = {
    iconPencil: '/img/fontawsome--bitcoin--11@1x.png',
    name: 'Crypto Wallet',
    className: 'crypto-wallet',
};

const tradingCrypto4Data = {
    iconPencil: '/img/fontawsome--handshake--10@1x.png',
    name: 'Broker',
    className: 'broker',
};

const tradingCrypto5Data = {
    iconPencil: '/img/fontawsome--globe-europe--10@1x.png',
    name: 'Pays',
    className: 'pays',
};

const iconsNavigationIcon12States25Data = {
    src: '/img/ic-setting-11@1x.png',
    className: 'icons-navigation-icon-12-states-5',
};

const sidebarMenuItem6Data = {
    name: 'Settings',
    className: 'settings',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States25Data,
};

const tabGroupElementsRegularTab2States3Data = {
    children: 'Days',
};

const tabGroupElementsRegularTab2States23Data = {
    children: 'Weeks',
    className: 'tab-group-_-elements-5',
};

const tabGroupElementsRegularTab2States4Data = {
    children: 'Months',
    className: 'tab-group-_-elements-3',
};

const iconsNavigationIcon12States26Data = {
    src: '/img/ic-calendar-13@1x.png',
    className: 'icons-navigation-icon-12-states-5',
};

const buttonsBtnTextIcon21Data = {
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States26Data,
};

const date1Data = {
    buttonsBtnTextIcon2Props: buttonsBtnTextIcon21Data,
};

const iconsWidgetIllustration2Data = {
    src: '/img/ic-users-7@1x.png',
    className: 'icons-widget-illustration-1',
};

const widgetsDataCardWithIcons2Data = {
    sales: 'Utilisateurs Total',
    x27632: '10.000',
    iconsWidgetIllustrationProps: iconsWidgetIllustration2Data,
};

const iconFeatherUserPlus1Data = {
    trac463: '/img/trac--463-1@1x.png',
    trac464: '/img/trac--464-1@1x.png',
    trac465: '/img/trac--465-1@1x.png',
    trac466: '/img/trac--466-1@1x.png',
};

const iconsWidgetIllustration22Data = {
    iconFeatherUserPlusProps: iconFeatherUserPlus1Data,
};

const widgetsDataCardWithIcons3Data = {
    sales: 'Membres Total',
    x27632: '1002',
    iconsWidgetIllustration2Props: iconsWidgetIllustration22Data,
};

const iconsWidgetIllustration3Data = {
    src: '/img/usd-circle-2@1x.png',
};

const widgetsDataCardWithIcons4Data = {
    sales: 'Nouveaux utilisateurs',
    x27632: '+52',
    iconsWidgetIllustration3Props: iconsWidgetIllustration3Data,
};

const iconFeatherUserPlus2Data = {
    trac463: '/img/trac--463@1x.png',
    trac464: '/img/trac--464@1x.png',
    trac465: '/img/trac--465@1x.png',
    trac466: '/img/trac--466@1x.png',
};

const iconsWidgetIllustration4Data = {
    iconFeatherUserPlusProps: iconFeatherUserPlus2Data,
};

const widgetsDataCardWithIcons5Data = {
    sales: 'Nouveaux membres',
    x27632: '+42',
    iconsWidgetIllustration4Props: iconsWidgetIllustration4Data,
};

const widgetsElementsChartMiniChart2Data = {
    chart: '/img/path-4-copy-6-10@1x.png',
    path4Copy8: '/img/path-4-copy-8-10@1x.png',
    className: 'widgets-_-elements-chart-mini-chart-1',
};

const widgetsDataCardWithCharts21Data = {
    sales: 'Licence Novice',
    x27632: '806',
    widgetsElementsChartMiniChartProps: widgetsElementsChartMiniChart2Data,
};

const widgetsElementsChartMiniChart3Data = {
    chart: '/img/path-4-copy-6-8@1x.png',
    path4Copy8: '/img/path-4-copy-8-8@1x.png',
    className: 'widgets-_-elements-chart-mini-chart-2',
};

const widgetsDataCardWithCharts22Data = {
    sales: 'Licence Confirmé',
    x27632: '192',
    className: 'widgets-data-card-with-charts-2',
    widgetsElementsChartMiniChartProps: widgetsElementsChartMiniChart3Data,
};

const widgetsElementsChartMiniChart4Data = {
    chart: '/img/path-4-copy-6-3@1x.png',
    path4Copy8: '/img/path-4-copy-8-3@1x.png',
    className: 'widgets-_-elements-chart-mini-chart-3',
};

const widgetsDataCardWithCharts23Data = {
    sales: 'Licence Partenaire',
    x27632: '4',
    className: 'widgets-data-card-with-charts-3',
    widgetsElementsChartMiniChartProps: widgetsElementsChartMiniChart4Data,
};

const legend3Data = {
    children: 'Nouveaux utilisateurs',
    className: 'online',
};

const chartLeftValue1Data = {
    children: '1200',
};

const chartLeftValue2Data = {
    children: '1000',
    className: 'chart-left-value-1',
};

const chartLeftValue3Data = {
    children: '800',
    className: 'chart-left-value-2',
};

const chartLeftValue4Data = {
    children: '600',
    className: 'chart-left-value-3',
};

const chartLeftValue5Data = {
    children: '400',
    className: 'chart-left-value-4',
};

const chartLeftValue6Data = {
    children: '200',
    className: 'chart-left-value-5',
};

const chartLeftValue7Data = {
    children: '0',
    className: 'chart-left-value-6',
};

const day2Data = {
    className: 'day-6',
};

const tooltipPointerLeft2Data = {
    bg: '/img/bg-4@1x.png',
    titlee: '01 avril, 2022',
    x750: '402',
    onlineSales: 'Nouveaux utilisateurs',
};

const homeData = {
    groupe2: '/img/groupe-1@1x.png',
    analytics: 'Home',
    customerGrowth: 'Evolution utilisateurs',
    text2: '29/03',
    text3: '30/03',
    text4: '31/03',
    text5: '01/04',
    text6: '02/04',
    topNavigationSearchProps: topNavigationSearch2Data,
    userGroupProps: userGroup1Data,
    sidebarMenuItem2Props: sidebarMenuItem22Data,
    sidebarMenuItem1Props: sidebarMenuItem4Data,
    sidebarMenuItem2Props2: sidebarMenuItem5Data,
    articlesProps: articles1Data,
    tradingCrypto1Props: tradingCrypto1Data,
    tradingCrypto2Props: tradingCrypto2Data,
    tradingCrypto3Props: tradingCrypto3Data,
    tradingCrypto4Props: tradingCrypto4Data,
    tradingCrypto5Props: tradingCrypto5Data,
    sidebarMenuItem3Props: sidebarMenuItem6Data,
    tabGroupElementsRegularTab2States1Props: tabGroupElementsRegularTab2States3Data,
    tabGroupElementsRegularTab2States2Props: tabGroupElementsRegularTab2States23Data,
    tabGroupElementsRegularTab2States2Props2: tabGroupElementsRegularTab2States4Data,
    dateProps: date1Data,
    widgetsDataCardWithIcons2Props: widgetsDataCardWithIcons2Data,
    widgetsDataCardWithIcons3Props: widgetsDataCardWithIcons3Data,
    widgetsDataCardWithIcons4Props: widgetsDataCardWithIcons4Data,
    widgetsDataCardWithIcons5Props: widgetsDataCardWithIcons5Data,
    widgetsDataCardWithCharts21Props: widgetsDataCardWithCharts21Data,
    widgetsDataCardWithCharts22Props: widgetsDataCardWithCharts22Data,
    widgetsDataCardWithCharts23Props: widgetsDataCardWithCharts23Data,
    legendProps: legend3Data,
    chartLeftValue1Props: chartLeftValue1Data,
    chartLeftValue2Props: chartLeftValue2Data,
    chartLeftValue3Props: chartLeftValue3Data,
    chartLeftValue4Props: chartLeftValue4Data,
    chartLeftValue5Props: chartLeftValue5Data,
    chartLeftValue6Props: chartLeftValue6Data,
    chartLeftValue7Props: chartLeftValue7Data,
    dayProps: day2Data,
    tooltipPointerLeft2Props: tooltipPointerLeft2Data,
};

const topNavigationSearch3Data = {
    color: '/img/color-10@1x.png',
    className: 'top-navigation-search-2',
};

const usersAvatarPhoto2States5Data = {
    image: '/img/image-2@1x.png',
    className: 'users-avatar-photo-2-states-3',
};

const userGroup2Data = {
    usersAvatarPhoto2StatesProps: usersAvatarPhoto2States5Data,
};

const topNavigation1Data = {
    groupe2: '/img/groupe-1-1@1x.png',
    topNavigationSearchProps: topNavigationSearch3Data,
    userGroupProps: userGroup2Data,
};

const iconsNavigationIcon12States27Data = {
    src: '/img/ic-home-10@1x.png',
    className: 'icons-navigation-icon-12-states-5',
};

const sidebarMenuItem7Data = {
    name: 'Home',
    className: 'home',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States27Data,
};

const iconsNavigationIcon12States28Data = {
    src: '/img/ic-users-7@1x.png',
    className: 'icons-navigation-icon-12-states-15',
};

const sidebarMenuItem23Data = {
    name: 'Utilisateurs',
    className: 'customers-22',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States28Data,
};

const iconsNavigationIcon12States29Data = {
    src: '/img/fontawsome--bookmark--10@1x.png',
    className: 'icons-navigation-icon-12-states-16',
};

const sidebarMenuItem8Data = {
    name: 'Thèmes articles',
    className: 'thmes-articles-1',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States29Data,
};

const iconsNavigationIcon12States30Data = {
    src: '/img/ic-invoice-10@1x.png',
    className: 'icons-navigation-icon-12-states-5',
};

const articles2Data = {
    className: 'articles-1',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States30Data,
};

const tradingCrypto6Data = {
    iconPencil: '/img/fontawsome--pen--10@1x.png',
    name: 'Trading & Crypto',
};

const tradingCrypto7Data = {
    iconPencil: '/img/fontawsome--robot--10@1x.png',
    name: 'Bot Trading',
    className: 'bot-trading-1',
};

const tradingCrypto8Data = {
    iconPencil: '/img/fontawsome--bitcoin--11@1x.png',
    name: 'Crypto Wallet',
    className: 'crypto-wallet-1',
};

const tradingCrypto9Data = {
    iconPencil: '/img/fontawsome--handshake--10@1x.png',
    name: 'Broker',
    className: 'broker-1',
};

const tradingCrypto10Data = {
    iconPencil: '/img/fontawsome--globe-europe--10@1x.png',
    name: 'Pays',
    className: 'pays-1',
};

const iconsNavigationIcon12States31Data = {
    src: '/img/ic-setting-11@1x.png',
    className: 'icons-navigation-icon-12-states-5',
};

const sidebarMenuItem9Data = {
    name: 'Settings',
    className: 'settings-1',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States31Data,
};

const filtre1Data = {
    name: 'Membre',
};

const filtre2Data = {
    name: 'Type abonnement',
    className: 'filtre-1',
};

const filtre3Data = {
    name: 'Durée abonnement',
    className: 'filtre-2',
};

const filtre4Data = {
    name: 'Abonnement résilier',
    className: 'filtre-3',
};

const filtreDateData = {
    calendarEvent: '/img/calendar-event-1@1x.png',
    text: 'Jan, 2019 - Dec, 2019',
};

const iconsNavigationIcon12States32Data = {
    src: '/img/ic-file-download-1@1x.png',
    className: 'icons-navigation-icon-12-states-5',
};

const buttonsBtnTextIcon3Data = {
    text: 'Export',
    className: 'buttons-btn-text-icon-1',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States32Data,
};

const utilisateursData = {
    analytics: 'Utilisateurs',
    name1: 'Rechercher…',
    name2: 'ID',
    name3: 'Email',
    name4: 'Prénom',
    name5: 'Nom',
    name6: 'Abonnement',
    name7: 'Membre',
    name8: 'Action',
    name9: '1002',
    name10: 'Elodie.elodie@gmail.com',
    name11: 'Elodie',
    name12: 'Elodie',
    name13: 'Intermédiaire (99.99€)',
    membre: '/img/fontawsome--check-square--10@1x.png',
    fontawsomePen: '/img/fontawsome--pen--1@1x.png',
    topNavigationProps: topNavigation1Data,
    sidebarMenuItem1Props: sidebarMenuItem7Data,
    sidebarMenuItem2Props: sidebarMenuItem23Data,
    sidebarMenuItem2Props2: sidebarMenuItem8Data,
    articlesProps: articles2Data,
    tradingCrypto1Props: tradingCrypto6Data,
    tradingCrypto2Props: tradingCrypto7Data,
    tradingCrypto3Props: tradingCrypto8Data,
    tradingCrypto4Props: tradingCrypto9Data,
    tradingCrypto5Props: tradingCrypto10Data,
    sidebarMenuItem3Props: sidebarMenuItem9Data,
    filtre1Props: filtre1Data,
    filtre2Props: filtre2Data,
    filtre3Props: filtre3Data,
    filtre4Props: filtre4Data,
    filtreDateProps: filtreDateData,
    buttonsBtnTextIconProps: buttonsBtnTextIcon3Data,
};

const icSearch2Data = {
    className: 'x00-general-01-icons',
};

const topNavigationSearch22Data = {
    icSearchProps: icSearch2Data,
};

const usersAvatarPhoto2States6Data = {
    image: '/img/image-4@1x.png',
    className: 'users-avatar-photo-2-states-4',
};

const userGroup3Data = {
    usersAvatarPhoto2StatesProps: usersAvatarPhoto2States6Data,
};

const topNavigation21Data = {
    groupe2: '/img/groupe-1-2@1x.png',
    topNavigationSearch2Props: topNavigationSearch22Data,
    userGroupProps: userGroup3Data,
};

const iconsNavigationIcon12States33Data = {
    src: '/img/ic-home-10@1x.png',
    className: 'icons-navigation-icon-12-states-5',
};

const sidebarMenuItem10Data = {
    name: 'Home',
    className: 'home-1',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States33Data,
};

const iconsNavigationIcon12States34Data = {
    src: '/img/ic-users-7@1x.png',
    className: 'icons-navigation-icon-12-states-17',
};

const sidebarMenuItem24Data = {
    name: 'Utilisateurs',
    className: 'customers-23',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States34Data,
};

const iconsNavigationIcon12States35Data = {
    src: '/img/fontawsome--bookmark--10@1x.png',
    className: 'icons-navigation-icon-12-states-18',
};

const sidebarMenuItem11Data = {
    name: 'Thèmes articles',
    className: 'thmes-articles-2',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States35Data,
};

const iconsNavigationIcon12States36Data = {
    src: '/img/ic-invoice-10@1x.png',
    className: 'icons-navigation-icon-12-states-5',
};

const articles3Data = {
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States36Data,
};

const tradingCrypto11Data = {
    iconPencil: '/img/fontawsome--pen--10@1x.png',
    name: 'Trading & Crypto',
};

const tradingCrypto12Data = {
    iconPencil: '/img/fontawsome--robot--10@1x.png',
    name: 'Bot Trading',
    className: 'bot-trading-2',
};

const tradingCrypto13Data = {
    iconPencil: '/img/fontawsome--bitcoin--11@1x.png',
    name: 'Crypto Wallet',
    className: 'crypto-wallet-2',
};

const tradingCrypto14Data = {
    iconPencil: '/img/fontawsome--handshake--10@1x.png',
    name: 'Broker',
    className: 'broker-2',
};

const tradingCrypto15Data = {
    iconPencil: '/img/fontawsome--globe-europe--10@1x.png',
    name: 'Pays',
    className: 'pays-2',
};

const iconsNavigationIcon12States37Data = {
    src: '/img/ic-setting-11@1x.png',
    className: 'icons-navigation-icon-12-states-5',
};

const sidebarMenuItem12Data = {
    name: 'Settings',
    className: 'settings-2',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States37Data,
};

const buttonsBtnTextIcon32Data = {
    children: 'Sauvegarder les modifications',
};

const groupe3931Data = {
    children: 'Modifier mot de passe',
    className: '',
};

const buttonsBtnTextIcon41Data = {
    groupe393Props: groupe3931Data,
};

const buttonsBtnTextIcon33Data = {
    children: 'Rendre membre l’user',
    className: 'buttons-btn-text-icon-4',
};

const groupe3932Data = {
    children: 'Annuler l’abonnement',
    className: 'groupe-393-4',
};

const buttonsBtnTextIcon42Data = {
    className: 'buttons-btn-text-icon-23',
    groupe393Props: groupe3932Data,
};

const buttonsBtnTextIcon34Data = {
    children: 'Supprimer',
    className: 'buttons-btn-text-icon-5',
};

const email1Data = {
    email: 'Email',
    elodieElodieGmailCom: 'elodie.elodie@gmail.com',
};

const email2Data = {
    email: 'Prénom',
    elodieElodieGmailCom: 'Elodie',
    className: 'prnom',
};

const email3Data = {
    email: 'Nom',
    elodieElodieGmailCom: 'Elodie',
    className: 'nom',
};

const iDFixe1Data = {
    idUser: 'ID User',
    number: '1002',
    ligne6: '/img/ligne-6-10@1x.png',
};

const iDFixe2Data = {
    idUser: 'Date d’inscription',
    number: '29/03/2022',
    ligne6: '/img/ligne-6-10@1x.png',
    className: 'id-fixe-1',
};

const emailConfirm1Data = {
    emailConfirm: 'Email confirmé',
};

const emailConfirm2Data = {
    emailConfirm: 'Membre',
    className: 'email-confirm-2',
};

const titre1Data = {
    children: 'Abonnement',
};

const iDFixe3Data = {
    idUser: 'Prix',
    number: '49.99 €',
    ligne6: '/img/ligne-6-10@1x.png',
    className: 'id-fixe-2',
};

const iDFixe4Data = {
    idUser: 'Type de transaction',
    number: 'Nom de la solution de paiement',
    ligne6: '/img/ligne-6-10@1x.png',
    className: 'id-fixe-3',
};

const iDFixe5Data = {
    idUser: 'Type d’abonnement',
    number: 'Intermédiaire (mensuel)',
    ligne6: '/img/ligne-6-10@1x.png',
    className: 'id-fixe-4',
};

const iDFixe6Data = {
    idUser: 'Transaction ID',
    number: 'Numéro de la transaction',
    ligne6: '/img/ligne-6-10@1x.png',
    className: 'id-fixe-5',
};

const buttonsBtnTextIcon51Data = {
    children: 'Modifier la transaction',
};

const iDFixe22Data = {
    dbut: 'Début',
    date: '22/03/2022',
    ligne6: '/img/ligne-6-10@1x.png',
};

const renouvellement1Data = {
    renouvellement: 'Renouvellement',
};

const renouvellement2Data = {
    renouvellement: 'Actif',
    className: 'renouvellement-2',
};

const iDFixe23Data = {
    dbut: 'Fin',
    date: '22/04/2022',
    ligne6: '/img/ligne-6-10@1x.png',
    className: 'id-fixe-16',
};

const historique1Data = {
    iDFixe1Props: iDFixe3Data,
    iDFixe2Props: iDFixe4Data,
    iDFixe3Props: iDFixe5Data,
    iDFixe4Props: iDFixe6Data,
    buttonsBtnTextIcon5Props: buttonsBtnTextIcon51Data,
    iDFixe21Props: iDFixe22Data,
    renouvellement1Props: renouvellement1Data,
    renouvellement2Props: renouvellement2Data,
    iDFixe22Props: iDFixe23Data,
};

const iDFixe7Data = {
    idUser: 'Prix',
    number: '49.99 €',
    ligne6: '/img/ligne-6-10@1x.png',
    className: 'id-fixe-6',
};

const iDFixe8Data = {
    idUser: 'Type de transaction',
    number: 'Nom de la solution de paiement',
    ligne6: '/img/ligne-6-10@1x.png',
    className: 'id-fixe-7',
};

const iDFixe9Data = {
    idUser: 'Type d’abonnement',
    number: 'Intermédiaire (mensuel)',
    ligne6: '/img/ligne-6-10@1x.png',
    className: 'id-fixe-8',
};

const iDFixe10Data = {
    idUser: 'Transaction ID',
    number: 'Numéro de la transaction',
    ligne6: '/img/ligne-6-10@1x.png',
    className: 'id-fixe-9',
};

const buttonsBtnTextIcon52Data = {
    children: 'Modifier la transaction',
};

const iDFixe24Data = {
    dbut: 'Début',
    date: '22/03/2022',
    ligne6: '/img/ligne-6-10@1x.png',
};

const renouvellement3Data = {
    renouvellement: 'Renouvellement',
};

const renouvellement4Data = {
    renouvellement: 'Actif',
    className: 'renouvellement-4',
};

const iDFixe25Data = {
    dbut: 'Fin',
    date: '22/04/2022',
    ligne6: '/img/ligne-6-10@1x.png',
    className: 'id-fixe-18',
};

const historique2Data = {
    className: 'historique-1',
    iDFixe1Props: iDFixe7Data,
    iDFixe2Props: iDFixe8Data,
    iDFixe3Props: iDFixe9Data,
    iDFixe4Props: iDFixe10Data,
    buttonsBtnTextIcon5Props: buttonsBtnTextIcon52Data,
    iDFixe21Props: iDFixe24Data,
    renouvellement1Props: renouvellement3Data,
    renouvellement2Props: renouvellement4Data,
    iDFixe22Props: iDFixe25Data,
};

const dtailsUtilisateursData = {
    analytics1: 'Profil user',
    analytics2: 'Données utilisateurs',
    numroDeTlphone: 'Numéro de téléphone',
    x33France: '+ 33 (France)',
    iconIonicIosArrowDown: '/img/icon-ionic-ios-arrow-down-4@1x.png',
    ligne36: '/img/ligne-36@1x.png',
    phone: '77777777',
    ligne61: '/img/ligne-6-4@1x.png',
    analytics3: 'Données de connexion',
    analytics4: 'Notes',
    notes: 'Notes…',
    ligne62: '/img/ligne-6-6@1x.png',
    topNavigation2Props: topNavigation21Data,
    sidebarMenuItem1Props: sidebarMenuItem10Data,
    sidebarMenuItem2Props: sidebarMenuItem24Data,
    sidebarMenuItem2Props2: sidebarMenuItem11Data,
    articlesProps: articles3Data,
    tradingCrypto1Props: tradingCrypto11Data,
    tradingCrypto2Props: tradingCrypto12Data,
    tradingCrypto3Props: tradingCrypto13Data,
    tradingCrypto4Props: tradingCrypto14Data,
    tradingCrypto5Props: tradingCrypto15Data,
    sidebarMenuItem3Props: sidebarMenuItem12Data,
    buttonsBtnTextIcon31Props: buttonsBtnTextIcon32Data,
    buttonsBtnTextIcon41Props: buttonsBtnTextIcon41Data,
    buttonsBtnTextIcon32Props: buttonsBtnTextIcon33Data,
    buttonsBtnTextIcon42Props: buttonsBtnTextIcon42Data,
    buttonsBtnTextIcon33Props: buttonsBtnTextIcon34Data,
    email1Props: email1Data,
    email2Props: email2Data,
    email3Props: email3Data,
    iDFixe1Props: iDFixe1Data,
    iDFixe2Props: iDFixe2Data,
    emailConfirm1Props: emailConfirm1Data,
    emailConfirm2Props: emailConfirm2Data,
    titreProps: titre1Data,
    historique1Props: historique1Data,
    historique2Props: historique2Data,
};

const topNavigationSearch4Data = {
    color: '/img/color-10@1x.png',
    className: 'top-navigation-search-3',
};

const usersAvatarPhoto2States7Data = {
    image: '/img/image-2@1x.png',
    className: 'users-avatar-photo-2-states-5',
};

const userGroup4Data = {
    usersAvatarPhoto2StatesProps: usersAvatarPhoto2States7Data,
};

const topNavigation3Data = {
    groupe2: '/img/groupe-1-10@1x.png',
    className: 'top-navigation-2',
    topNavigationSearchProps: topNavigationSearch4Data,
    userGroupProps: userGroup4Data,
};

const iconsNavigationIcon12States38Data = {
    src: '/img/ic-home-10@1x.png',
    className: 'icons-navigation-icon-12-states-5',
};

const sidebarMenuItem13Data = {
    name: 'Home',
    className: 'home-2',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States38Data,
};

const iconsNavigationIcon12States39Data = {
    src: '/img/ic-users-11@1x.png',
    className: 'icons-navigation-icon-12-states-5',
};

const sidebarMenuItem14Data = {
    name: 'Utilisateurs',
    className: 'customers-2',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States39Data,
};

const iconsNavigationIcon12States40Data = {
    src: '/img/fontawsome--bookmark--10@1x.png',
    className: 'icons-navigation-icon-12-states-19',
};

const sidebarMenuItem15Data = {
    name: 'Thèmes articles',
    className: 'thmes-articles-3',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States40Data,
};

const iconsNavigationIcon12States41Data = {
    src: '/img/ic-invoice-10@1x.png',
    className: 'icons-navigation-icon-12-states-5',
};

const articles4Data = {
    className: 'articles-3',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States41Data,
};

const tradingCrypto22Data = {
    fontawsomePen: '/img/fontawsome--pen--11@1x.png',
    name: 'Trading & Crypto',
};

const tradingCrypto16Data = {
    iconPencil: '/img/fontawsome--robot--3@1x.png',
    name: 'Bot Trading',
    className: 'bot-trading-3',
};

const tradingCrypto17Data = {
    iconPencil: '/img/fontawsome--bitcoin--11@1x.png',
    name: 'Crypto Wallet',
    className: 'crypto-wallet-3',
};

const tradingCrypto18Data = {
    iconPencil: '/img/fontawsome--handshake--10@1x.png',
    name: 'Broker',
    className: 'broker-3',
};

const tradingCrypto19Data = {
    iconPencil: '/img/fontawsome--globe-europe--10@1x.png',
    name: 'Pays',
    className: 'pays-3',
};

const abonnement4Data = {
    className: 'abonnement-3',
};

const iconsNavigationIcon12States42Data = {
    src: '/img/ic-setting-11@1x.png',
    className: 'icons-navigation-icon-12-states-5',
};

const sidebarMenuItem16Data = {
    name: 'Settings',
    className: 'settings-3',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States42Data,
};

const filtre5Data = {
    name: 'Visible',
    className: 'filtre-4',
};

const filtre6Data = {
    name: 'Type abonnement',
    className: 'filtre-5',
};

const buttonsBtnTextIcon35Data = {
    children: 'Sauvegarder les modifications',
    className: 'buttons-btn-text-icon-6',
};

const groupe39322Data = {
    children: 'Créer un thème',
    className: '',
};

const buttonsBtnTextIcon61Data = {
    groupe3932Props: groupe39322Data,
};

const thmesArticlesData = {
    analytics: 'Thèmes articles',
    name1: 'Rechercher…',
    name2: 'ID',
    name3: 'Thèmes',
    name4: 'Icon',
    name5: 'Type d’abonnement',
    name6: 'Visible',
    name7: 'Action',
    name8: '1',
    name9: 'Cryptomonnaies',
    iconActif: '/img/groupe-1490@1x.png',
    name10: 'Intermédiaire (99.99€)',
    membre: '/img/fontawsome--check-square--10@1x.png',
    fontawsomePen: '/img/fontawsome--pen--12@1x.png',
    iconClose: '/img/fontawsome--times--10@1x.png',
    topNavigationProps: topNavigation3Data,
    sidebarMenuItem1Props: sidebarMenuItem13Data,
    sidebarMenuItem2Props: sidebarMenuItem14Data,
    sidebarMenuItem3Props: sidebarMenuItem15Data,
    articlesProps: articles4Data,
    tradingCrypto2Props: tradingCrypto22Data,
    tradingCrypto1Props: tradingCrypto16Data,
    tradingCrypto2Props2: tradingCrypto17Data,
    tradingCrypto3Props: tradingCrypto18Data,
    tradingCrypto4Props: tradingCrypto19Data,
    abonnementProps: abonnement4Data,
    sidebarMenuItem4Props: sidebarMenuItem16Data,
    filtre1Props: filtre5Data,
    filtre2Props: filtre6Data,
    buttonsBtnTextIcon3Props: buttonsBtnTextIcon35Data,
    buttonsBtnTextIcon6Props: buttonsBtnTextIcon61Data,
};

const icSearch3Data = {
    className: 'x00-general-01-icons-1',
};

const topNavigationSearch23Data = {
    icSearchProps: icSearch3Data,
};

const usersAvatarPhoto2States8Data = {
    image: '/img/image-4@1x.png',
    className: 'users-avatar-photo-2-states-6',
};

const userGroup5Data = {
    usersAvatarPhoto2StatesProps: usersAvatarPhoto2States8Data,
};

const topNavigation22Data = {
    groupe2: '/img/groupe-1-12@1x.png',
    className: 'top-navigation-2',
    topNavigationSearch2Props: topNavigationSearch23Data,
    userGroupProps: userGroup5Data,
};

const iconsNavigationIcon12States43Data = {
    src: '/img/ic-home-10@1x.png',
    className: 'icons-navigation-icon-12-states-5',
};

const sidebarMenuItem17Data = {
    name: 'Home',
    className: 'home-3',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States43Data,
};

const iconsNavigationIcon12States44Data = {
    src: '/img/ic-users-11@1x.png',
    className: 'icons-navigation-icon-12-states-5',
};

const sidebarMenuItem18Data = {
    name: 'Utilisateurs',
    className: 'customers-3',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States44Data,
};

const iconsNavigationIcon12States45Data = {
    src: '/img/fontawsome--bookmark--4@1x.png',
    className: 'icons-navigation-icon-12-states-20',
};

const sidebarMenuItem25Data = {
    name: 'Thèmes articles',
    className: 'thmes-articles-22',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States45Data,
};

const iconsNavigationIcon12States46Data = {
    src: '/img/ic-invoice-10@1x.png',
    className: 'icons-navigation-icon-12-states-5',
};

const articles5Data = {
    className: 'articles-4',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States46Data,
};

const tradingCrypto20Data = {
    iconPencil: '/img/fontawsome--pen--10@1x.png',
    name: 'Trading & Crypto',
    className: 'trading-crypto-1',
};

const tradingCrypto21Data = {
    iconPencil: '/img/fontawsome--robot--3@1x.png',
    name: 'Bot Trading',
    className: 'bot-trading-4',
};

const tradingCrypto23Data = {
    iconPencil: '/img/fontawsome--bitcoin--11@1x.png',
    name: 'Crypto Wallet',
    className: 'crypto-wallet-4',
};

const tradingCrypto24Data = {
    iconPencil: '/img/fontawsome--handshake--10@1x.png',
    name: 'Broker',
    className: 'broker-4',
};

const tradingCrypto25Data = {
    iconPencil: '/img/fontawsome--globe-europe--10@1x.png',
    name: 'Pays',
    className: 'pays-4',
};

const abonnement5Data = {
    className: 'abonnement-4',
};

const iconsNavigationIcon12States47Data = {
    src: '/img/ic-setting-11@1x.png',
    className: 'icons-navigation-icon-12-states-5',
};

const sidebarMenuItem19Data = {
    name: 'Settings',
    className: 'settings-4',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States47Data,
};

const buttonsBtnTextIcon36Data = {
    children: 'Supprimer',
    className: 'buttons-btn-text-icon-7',
};

const buttonsBtnTextIcon37Data = {
    children: 'Sauvegarder les modifications',
    className: 'buttons-btn-text-icon-8',
};

const titre21Data = {
    children: 'Thème',
};

const email4Data = {
    email: 'Nom du Thème',
    elodieElodieGmailCom: 'Cryptomonnaies',
};

const filtre7Data = {
    name: 'Type abonnement',
    className: 'filtre-6',
};

const buttonsBtnTextIcon53Data = {
    children: 'Select icon',
    className: 'buttons-btn-text-icon-29',
};

const thmesArticlesCrationData = {
    analytics: 'Créer un thème',
    slectionnerTypesDabonnements: 'Sélectionner types d’abonnements',
    icon: 'Icon',
    image1: '/img/image-1-1@1x.png',
    topNavigation2Props: topNavigation22Data,
    sidebarMenuItem1Props: sidebarMenuItem17Data,
    sidebarMenuItem2Props: sidebarMenuItem18Data,
    sidebarMenuItem2Props2: sidebarMenuItem25Data,
    articlesProps: articles5Data,
    tradingCrypto1Props: tradingCrypto20Data,
    tradingCrypto2Props: tradingCrypto21Data,
    tradingCrypto3Props: tradingCrypto23Data,
    tradingCrypto4Props: tradingCrypto24Data,
    tradingCrypto5Props: tradingCrypto25Data,
    abonnementProps: abonnement5Data,
    sidebarMenuItem3Props: sidebarMenuItem19Data,
    buttonsBtnTextIcon31Props: buttonsBtnTextIcon36Data,
    buttonsBtnTextIcon32Props: buttonsBtnTextIcon37Data,
    titre2Props: titre21Data,
    emailProps: email4Data,
    filtreProps: filtre7Data,
    buttonsBtnTextIcon5Props: buttonsBtnTextIcon53Data,
};

const topNavigationSearch5Data = {
    color: '/img/color-10@1x.png',
    className: 'top-navigation-search-4',
};

const usersAvatarPhoto2States9Data = {
    image: '/img/image-10@1x.png',
    className: 'users-avatar-photo-2-states-7',
};

const userGroup6Data = {
    usersAvatarPhoto2StatesProps: usersAvatarPhoto2States9Data,
};

const topNavigation4Data = {
    groupe2: '/img/groupe-1-20@1x.png',
    className: 'top-navigation-2',
    topNavigationSearchProps: topNavigationSearch5Data,
    userGroupProps: userGroup6Data,
};

const iconsNavigationIcon12States48Data = {
    src: '/img/ic-home-10@1x.png',
    className: 'icons-navigation-icon-12-states-5',
};

const sidebarMenuItem20Data = {
    name: 'Home',
    className: 'home-4',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States48Data,
};

const iconsNavigationIcon12States49Data = {
    src: '/img/ic-users-11@1x.png',
    className: 'icons-navigation-icon-12-states-5',
};

const iconsNavigationIcon12States50Data = {
    src: '/img/fontawsome--bookmark--10@1x.png',
    className: 'icons-navigation-icon-12-states-21',
};

const sidebarMenuItem26Data = {
    name: 'Thèmes articles',
    className: 'thmes-articles-4',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States50Data,
};

const iconsNavigationIcon12States51Data = {
    src: '/img/ic-invoice-16@1x.png',
    className: 'icons-navigation-icon-12-states-22',
};

const articles22Data = {
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States51Data,
};

const tradingCrypto26Data = {
    iconPencil: '/img/fontawsome--pen--10@1x.png',
    name: 'Trading & Crypto',
    className: 'trading-crypto-2',
};

const tradingCrypto27Data = {
    iconPencil: '/img/fontawsome--robot--3@1x.png',
    name: 'Bot Trading',
    className: 'bot-trading-5',
};

const tradingCrypto28Data = {
    iconPencil: '/img/fontawsome--bitcoin--11@1x.png',
    name: 'Crypto Wallet',
    className: 'crypto-wallet-5',
};

const tradingCrypto29Data = {
    iconPencil: '/img/fontawsome--handshake--10@1x.png',
    name: 'Broker',
    className: 'broker-5',
};

const tradingCrypto30Data = {
    iconPencil: '/img/fontawsome--globe-europe--10@1x.png',
    name: 'Pays',
    className: 'pays-5',
};

const abonnement6Data = {
    className: 'abonnement-5',
};

const iconsNavigationIcon12States52Data = {
    src: '/img/ic-setting-11@1x.png',
    className: 'icons-navigation-icon-12-states-5',
};

const sidebarMenuItem27Data = {
    name: 'Settings',
    className: 'settings-5',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States52Data,
};

const filtre8Data = {
    name: 'Visible',
    className: 'filtre-7',
};

const filtre9Data = {
    name: 'Thèmes articles',
    className: 'filtre-8',
};

const iconsNavigationIcon12States53Data = {
    src: '/img/ic-calendar-13@1x.png',
    className: 'icons-navigation-icon-12-states-5',
};

const buttonsBtnTextIcon22Data = {
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States53Data,
};

const date2Data = {
    className: 'date-1',
    buttonsBtnTextIcon2Props: buttonsBtnTextIcon22Data,
};

const articlesHistoriqueArticlesData = {
    analytics: 'Historique articles',
    name1: 'Rechercher…',
    name2: 'ID',
    name3: 'Thèmes',
    name4: 'Titre article',
    name5: 'Visible',
    name6: 'Action',
    name7: '1',
    name8: 'Cryptomonnaies',
    name9: 'Le Bitcoin, en savoir plus',
    membre: '/img/fontawsome--check-square--10@1x.png',
    fontawsomePen: '/img/fontawsome--pen--1@1x.png',
    fontawsomeTimes: '/img/fontawsome--times--10@1x.png',
    topNavigationProps: topNavigation4Data,
    sidebarMenuItem1Props: sidebarMenuItem20Data,
    sidebarMenuItem2Props: sidebarMenuItem21Data,
    sidebarMenuItem3Props: sidebarMenuItem26Data,
    articles2Props: articles22Data,
    tradingCrypto1Props: tradingCrypto26Data,
    tradingCrypto2Props: tradingCrypto27Data,
    tradingCrypto3Props: tradingCrypto28Data,
    tradingCrypto4Props: tradingCrypto29Data,
    tradingCrypto5Props: tradingCrypto30Data,
    tradingCrypto5Props2: abonnement6Data,
    sidebarMenuItem4Props: sidebarMenuItem27Data,
    filtre1Props: filtre8Data,
    filtre2Props: filtre9Data,
    dateProps: date2Data,
};

const icSearch4Data = {
    className: 'x00-general-01-icons-2',
};

const topNavigationSearch24Data = {
    icSearchProps: icSearch4Data,
};

const usersAvatarPhoto2States10Data = {
    image: '/img/image-8@1x.png',
    className: 'users-avatar-photo-2-states-8',
};

const userGroup7Data = {
    usersAvatarPhoto2StatesProps: usersAvatarPhoto2States10Data,
};

const topNavigation23Data = {
    groupe2: '/img/groupe-1-21@1x.png',
    className: 'top-navigation-2',
    topNavigationSearch2Props: topNavigationSearch24Data,
    userGroupProps: userGroup7Data,
};

const iconsNavigationIcon12States54Data = {
    src: '/img/ic-home-10@1x.png',
    className: 'icons-navigation-icon-12-states-5',
};

const sidebarMenuItem28Data = {
    name: 'Home',
    className: 'home-5',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States54Data,
};

const iconsNavigationIcon12States55Data = {
    src: '/img/ic-users-11@1x.png',
    className: 'icons-navigation-icon-12-states-5',
};

const sidebarMenuItem29Data = {
    name: 'Utilisateurs',
    className: 'customers-5',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States55Data,
};

const iconsNavigationIcon12States56Data = {
    src: '/img/fontawsome--bookmark--10@1x.png',
    className: 'icons-navigation-icon-12-states-23',
};

const sidebarMenuItem30Data = {
    name: 'Thèmes articles',
    className: 'thmes-articles-5',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States56Data,
};

const iconsNavigationIcon12States57Data = {
    src: '/img/ic-invoice-16@1x.png',
    className: 'icons-navigation-icon-12-states-24',
};

const articles23Data = {
    className: 'articles-21',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States57Data,
};

const tradingCrypto31Data = {
    iconPencil: '/img/fontawsome--pen--10@1x.png',
    name: 'Trading & Crypto',
    className: 'trading-crypto-3',
};

const tradingCrypto32Data = {
    iconPencil: '/img/fontawsome--robot--3@1x.png',
    name: 'Bot Trading',
    className: 'bot-trading-6',
};

const tradingCrypto33Data = {
    iconPencil: '/img/fontawsome--bitcoin--11@1x.png',
    name: 'Crypto Wallet',
    className: 'crypto-wallet-6',
};

const tradingCrypto34Data = {
    iconPencil: '/img/fontawsome--handshake--10@1x.png',
    name: 'Broker',
    className: 'broker-6',
};

const tradingCrypto35Data = {
    iconPencil: '/img/fontawsome--globe-europe--10@1x.png',
    name: 'Pays',
    className: 'pays-6',
};

const abonnement7Data = {
    className: 'abonnement-6',
};

const iconsNavigationIcon12States58Data = {
    src: '/img/ic-setting-11@1x.png',
    className: 'icons-navigation-icon-12-states-5',
};

const sidebarMenuItem31Data = {
    name: 'Settings',
    className: 'settings-6',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States58Data,
};

const buttonsBtnTextIcon38Data = {
    children: 'Supprimer',
    className: 'buttons-btn-text-icon-9',
};

const buttonsBtnTextIcon39Data = {
    children: 'Sauvegarder les modifications',
    className: 'buttons-btn-text-icon-10',
};

const buttonsBtnTextIcon54Data = {
    children: 'Select Image',
    className: 'buttons-btn-text-icon-30',
};

const image11Data = {
    imagePrsentation: 'Image Présentation',
    buttonsBtnTextIcon5Props: buttonsBtnTextIcon54Data,
};

const filtre10Data = {
    name: 'Thèmes articles',
    className: 'filtre-9',
};

const iDFixe11Data = {
    idUser: 'Thème sélectionné',
    number: 'Cryptomonnaies',
    ligne6: '/img/ligne-6-10@1x.png',
    className: 'id-fixe-10',
};

const buttonsBtnTextIcon55Data = {
    children: 'Select Image',
    className: 'buttons-btn-text-icon-31',
};

const image12Data = {
    imagePrsentation: 'Image Article',
    className: 'image-2',
    buttonsBtnTextIcon5Props: buttonsBtnTextIcon55Data,
};

const email5Data = {
    email: 'Titre',
    elodieElodieGmailCom: 'Le Bitcoin, c’est quoi ?',
    className: 'titre-article',
};

const buttonsBtnTextIcon310Data = {
    children: 'Ajouter un Podcast',
    className: 'buttons-btn-text-icon-11',
};

const iDFixe12Data = {
    idUser: 'Podcast',
    number: 'Nom du fichier',
    ligne6: '/img/ligne-6-10@1x.png',
    className: 'id-fixe-11',
};

const buttonsBtnTextIcon311Data = {
    children: 'Ajouter un article',
    className: 'buttons-btn-text-icon-12',
};

const filtre11Data = {
    name: 'Thèmes articles',
    className: 'filtre-10',
};

const articlesCrerUnArticleData = {
    analytics1: 'Créer un article',
    analytics2: 'Articles',
    notesDetailsTextEditor: '/img/notes--details--text-editor@1x.png',
    analytics3: 'Podcast',
    analytics4: 'Articles suggérés',
    topNavigation2Props: topNavigation23Data,
    sidebarMenuItem1Props: sidebarMenuItem28Data,
    sidebarMenuItem2Props: sidebarMenuItem29Data,
    sidebarMenuItem3Props: sidebarMenuItem30Data,
    articles2Props: articles23Data,
    tradingCrypto1Props: tradingCrypto31Data,
    tradingCrypto2Props: tradingCrypto32Data,
    tradingCrypto3Props: tradingCrypto33Data,
    tradingCrypto4Props: tradingCrypto34Data,
    tradingCrypto5Props: tradingCrypto35Data,
    tradingCrypto5Props2: abonnement7Data,
    sidebarMenuItem4Props: sidebarMenuItem31Data,
    buttonsBtnTextIcon31Props: buttonsBtnTextIcon38Data,
    buttonsBtnTextIcon32Props: buttonsBtnTextIcon39Data,
    image11Props: image11Data,
    filtre1Props: filtre10Data,
    iDFixe1Props: iDFixe11Data,
    image12Props: image12Data,
    emailProps: email5Data,
    buttonsBtnTextIcon33Props: buttonsBtnTextIcon310Data,
    iDFixe2Props: iDFixe12Data,
    buttonsBtnTextIcon34Props: buttonsBtnTextIcon311Data,
    filtre2Props: filtre11Data,
};

const topNavigationSearch6Data = {
    color: '/img/color-10@1x.png',
    className: 'top-navigation-search-5',
};

const usersAvatarPhoto2States11Data = {
    image: '/img/image-8@1x.png',
    className: 'users-avatar-photo-2-states-9',
};

const userGroup8Data = {
    usersAvatarPhoto2StatesProps: usersAvatarPhoto2States11Data,
};

const topNavigation5Data = {
    groupe2: '/img/groupe-1-7@1x.png',
    className: 'top-navigation-2',
    topNavigationSearchProps: topNavigationSearch6Data,
    userGroupProps: userGroup8Data,
};

const iconsNavigationIcon12States59Data = {
    src: '/img/ic-home-10@1x.png',
    className: 'icons-navigation-icon-12-states-5',
};

const sidebarMenuItem32Data = {
    name: 'Home',
    className: 'home-6',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States59Data,
};

const iconsNavigationIcon12States60Data = {
    src: '/img/ic-users-11@1x.png',
    className: 'icons-navigation-icon-12-states-5',
};

const sidebarMenuItem33Data = {
    name: 'Utilisateurs',
    className: 'customers-6',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States60Data,
};

const iconsNavigationIcon12States61Data = {
    src: '/img/fontawsome--bookmark--10@1x.png',
    className: 'icons-navigation-icon-12-states-25',
};

const sidebarMenuItem34Data = {
    name: 'Thèmes articles',
    className: 'thmes-articles-6',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States61Data,
};

const iconsNavigationIcon12States62Data = {
    src: '/img/ic-invoice-16@1x.png',
    className: 'icons-navigation-icon-12-states-26',
};

const articles24Data = {
    className: 'articles-22',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States62Data,
};

const tradingCrypto36Data = {
    iconPencil: '/img/fontawsome--pen--10@1x.png',
    name: 'Trading & Crypto',
    className: 'trading-crypto-4',
};

const tradingCrypto37Data = {
    iconPencil: '/img/fontawsome--robot--3@1x.png',
    name: 'Bot Trading',
    className: 'bot-trading-7',
};

const tradingCrypto38Data = {
    iconPencil: '/img/fontawsome--bitcoin--11@1x.png',
    name: 'Crypto Wallet',
    className: 'crypto-wallet-7',
};

const tradingCrypto39Data = {
    iconPencil: '/img/fontawsome--handshake--10@1x.png',
    name: 'Broker',
    className: 'broker-7',
};

const tradingCrypto40Data = {
    iconPencil: '/img/fontawsome--globe-europe--10@1x.png',
    name: 'Pays',
    className: 'pays-7',
};

const abonnement8Data = {
    className: 'abonnement-7',
};

const iconsNavigationIcon12States63Data = {
    src: '/img/ic-setting-11@1x.png',
    className: 'icons-navigation-icon-12-states-5',
};

const sidebarMenuItem35Data = {
    name: 'Settings',
    className: 'settings-7',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States63Data,
};

const buttonsBtnTextIcon312Data = {
    children: 'Supprimer',
    className: 'buttons-btn-text-icon-13',
};

const buttonsBtnTextIcon313Data = {
    children: 'Sauvegarder les modifications',
    className: 'buttons-btn-text-icon-14',
};

const buttonsBtnTextIcon56Data = {
    children: 'Select Image',
    className: 'buttons-btn-text-icon-32',
};

const image13Data = {
    imagePrsentation: 'Image Présentation',
    buttonsBtnTextIcon5Props: buttonsBtnTextIcon56Data,
};

const filtre12Data = {
    name: 'Thèmes articles',
    className: 'filtre-11',
};

const iDFixe13Data = {
    idUser: 'Thème sélectionné',
    number: 'Play To Earn',
    ligne6: '/img/ligne-6-10@1x.png',
    className: 'id-fixe-12',
};

const buttonsBtnTextIcon57Data = {
    children: 'Select Image',
    className: 'buttons-btn-text-icon-33',
};

const image14Data = {
    imagePrsentation: 'Image Article',
    className: 'nom-5',
    buttonsBtnTextIcon5Props: buttonsBtnTextIcon57Data,
};

const email6Data = {
    email: 'Titre',
    elodieElodieGmailCom: 'Axie Infinity, Play to Earn',
    className: 'titre-3',
};

const titre42Data = {
    className: 'titre-15',
};

const titre52Data = {
    className: 'titre-17',
};

const buttonsBtnTextIcon314Data = {
    children: 'Ajouter un Podcast',
    className: 'buttons-btn-text-icon-15',
};

const iDFixe14Data = {
    idUser: 'Podcast',
    number: 'Nom du fichier',
    ligne6: '/img/ligne-6-10@1x.png',
    className: 'id-fixe-13',
};

const buttonsBtnTextIcon315Data = {
    children: 'Ajouter un article',
    className: 'buttons-btn-text-icon-16',
};

const filtre13Data = {
    name: 'Thèmes articles',
    className: 'filtre-12',
};

const articlesCrerUnArticle1Data = {
    analytics1: 'Créer article entreprise',
    analytics2: 'Articles',
    notesDetailsTextEditor: '/img/notes--details--text-editor-1@1x.png',
    description: 'Description',
    axieInfinityEstUn:
        'Axie Infinity est un univers d’animaux de compagnie numérique décentralisé où les joueurs combattent, élèvent et échangent des créatures fantastiques appelées Axies. Les joueurs gagnent des revenus sous la forme de jetons fongibles appelés Smooth Love Potions (SLP) en remportant des batailles entre Axies.',
    ligne61: '/img/ligne-6-27@1x.png',
    salaireMoyen: 'Salaire moyen',
    lesJoueursDuMonde: 'Les joueurs du monde entier gagnent entre 500 et 1 000 $ par mois en jouant au jeu.',
    ligne62: '/img/ligne-6-28@1x.png',
    tarificationDeLaPlateforme: 'Tarification de la plateforme',
    pourJouerAxieIn: (
        <>
            Pour jouer à Axie Infinity, un joueur doit d’abord acheter une équipe de trois Axies, qui sont eux-mêmes des
            jetons non fongibles (NFT).
            <br />
            <br />
            Une équipe de départ coûte environ 500 $.
        </>
    ),
    ligne63: '/img/ligne-6-29@1x.png',
    utilisateursGnran: 'Utilisateurs générants des revenus sur la plateforme',
    address1: '350 000 utilisateurs actifs mensuels',
    ligne64: '/img/ligne-6-28@1x.png',
    financement: 'Financement',
    address2: '9 millions $',
    ligne65: '/img/ligne-6-31@1x.png',
    ncessiteUneAudience: 'Nécessite une audience',
    non: 'Non',
    ligne66: '/img/ligne-6-32@1x.png',
    analytics3: 'Podcast',
    analytics4: 'Articles suggérés',
    topNavigationProps: topNavigation5Data,
    sidebarMenuItem1Props: sidebarMenuItem32Data,
    sidebarMenuItem2Props: sidebarMenuItem33Data,
    sidebarMenuItem3Props: sidebarMenuItem34Data,
    articles2Props: articles24Data,
    tradingCrypto1Props: tradingCrypto36Data,
    tradingCrypto2Props: tradingCrypto37Data,
    tradingCrypto3Props: tradingCrypto38Data,
    tradingCrypto4Props: tradingCrypto39Data,
    tradingCrypto5Props: tradingCrypto40Data,
    tradingCrypto5Props2: abonnement8Data,
    sidebarMenuItem4Props: sidebarMenuItem35Data,
    buttonsBtnTextIcon31Props: buttonsBtnTextIcon312Data,
    buttonsBtnTextIcon32Props: buttonsBtnTextIcon313Data,
    image11Props: image13Data,
    filtre1Props: filtre12Data,
    iDFixe1Props: iDFixe13Data,
    image12Props: image14Data,
    emailProps: email6Data,
    titre4Props: titre42Data,
    titre5Props: titre52Data,
    buttonsBtnTextIcon33Props: buttonsBtnTextIcon314Data,
    iDFixe2Props: iDFixe14Data,
    buttonsBtnTextIcon34Props: buttonsBtnTextIcon315Data,
    filtre2Props: filtre13Data,
};

const topNavigationSearch7Data = {
    color: '/img/color-10@1x.png',
    className: 'top-navigation-search-6',
};

const usersAvatarPhoto2States12Data = {
    image: '/img/image-10@1x.png',
    className: 'users-avatar-photo-2-states-10',
};

const userGroup9Data = {
    usersAvatarPhoto2StatesProps: usersAvatarPhoto2States12Data,
};

const topNavigation6Data = {
    groupe2: '/img/groupe-1-20@1x.png',
    className: 'top-navigation-2',
    topNavigationSearchProps: topNavigationSearch7Data,
    userGroupProps: userGroup9Data,
};

const iconsNavigationIcon12States64Data = {
    src: '/img/ic-home-10@1x.png',
    className: 'icons-navigation-icon-12-states-5',
};

const sidebarMenuItem36Data = {
    name: 'Home',
    className: 'home-7',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States64Data,
};

const iconsNavigationIcon12States65Data = {
    src: '/img/ic-users-11@1x.png',
    className: 'icons-navigation-icon-12-states-5',
};

const sidebarMenuItem37Data = {
    name: 'Utilisateurs',
    className: 'customers-7',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States65Data,
};

const iconsNavigationIcon12States66Data = {
    src: '/img/fontawsome--bookmark--10@1x.png',
    className: 'icons-navigation-icon-12-states-27',
};

const sidebarMenuItem38Data = {
    name: 'Thèmes articles',
    className: 'thmes-articles-7',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States66Data,
};

const iconsNavigationIcon12States67Data = {
    src: '/img/ic-invoice-10@1x.png',
    className: 'icons-navigation-icon-12-states-5',
};

const articles6Data = {
    className: 'articles-5',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States67Data,
};

const tradingCrypto210Data = {
    fontawsomePen: '/img/fontawsome--pen--11@1x.png',
    name: 'Trading & Crypto',
};

const tradingCrypto41Data = {
    iconPencil: '/img/fontawsome--robot--3@1x.png',
    name: 'Bot Trading',
    className: 'bot-trading-8',
};

const tradingCrypto42Data = {
    iconPencil: '/img/fontawsome--bitcoin--11@1x.png',
    name: 'Crypto Wallet',
    className: 'crypto-wallet-8',
};

const tradingCrypto43Data = {
    iconPencil: '/img/fontawsome--handshake--10@1x.png',
    name: 'Broker',
    className: 'broker-8',
};

const tradingCrypto44Data = {
    iconPencil: '/img/fontawsome--globe-europe--10@1x.png',
    name: 'Pays',
    className: 'pays-8',
};

const abonnement9Data = {
    className: 'abonnement-8',
};

const iconsNavigationIcon12States68Data = {
    src: '/img/ic-setting-11@1x.png',
    className: 'icons-navigation-icon-12-states-5',
};

const sidebarMenuItem39Data = {
    name: 'Settings',
    className: 'settings-8',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States68Data,
};

const buttonsBtnTextIcon316Data = {
    children: 'Sauvegarder les modifications',
    className: 'buttons-btn-text-icon-17',
};

const email7Data = {
    email: 'Titre',
    elodieElodieGmailCom: 'Axie Infinity, Play to Earn',
    className: 'titre-page',
};

const editeur1Data = {
    src: '/img/notes--details--text-editor-1@1x.png',
};

const email8Data = {
    email: 'Titre',
    elodieElodieGmailCom: 'Axie Infinity, Play to Earn',
    className: 'titre-page-1',
};

const editeur2Data = {
    src: '/img/notes--details--text-editor-1@1x.png',
};

const tradingCrypto310Data = {
    analytics1: 'Trading & Crypto',
    analytics2: 'Page - Espace Trading & Crypto',
    paragraphe1: 'Paragraphe',
    analytics3: 'Page - Nos trades',
    paragraphe2: 'Paragraphe',
    topNavigationProps: topNavigation6Data,
    sidebarMenuItem1Props: sidebarMenuItem36Data,
    sidebarMenuItem2Props: sidebarMenuItem37Data,
    sidebarMenuItem3Props: sidebarMenuItem38Data,
    articlesProps: articles6Data,
    tradingCrypto2Props: tradingCrypto210Data,
    tradingCrypto1Props: tradingCrypto41Data,
    tradingCrypto2Props2: tradingCrypto42Data,
    tradingCrypto3Props: tradingCrypto43Data,
    tradingCrypto4Props: tradingCrypto44Data,
    tradingCrypto4Props2: abonnement9Data,
    sidebarMenuItem4Props: sidebarMenuItem39Data,
    buttonsBtnTextIcon3Props: buttonsBtnTextIcon316Data,
    email1Props: email7Data,
    editeur1Props: editeur1Data,
    email2Props: email8Data,
    editeur2Props: editeur2Data,
};

const topNavigationSearch8Data = {
    color: '/img/color-10@1x.png',
    className: 'top-navigation-search-7',
};

const usersAvatarPhoto2States13Data = {
    image: '/img/image-11@1x.png',
    className: 'users-avatar-photo-2-states-11',
};

const userGroup10Data = {
    usersAvatarPhoto2StatesProps: usersAvatarPhoto2States13Data,
};

const topNavigation7Data = {
    groupe2: '/img/groupe-1-10@1x.png',
    className: 'top-navigation-2',
    topNavigationSearchProps: topNavigationSearch8Data,
    userGroupProps: userGroup10Data,
};

const iconsNavigationIcon12States69Data = {
    src: '/img/ic-home-10@1x.png',
    className: 'icons-navigation-icon-12-states-5',
};

const sidebarMenuItem40Data = {
    name: 'Home',
    className: 'home-8',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States69Data,
};

const iconsNavigationIcon12States70Data = {
    src: '/img/ic-users-11@1x.png',
    className: 'icons-navigation-icon-12-states-5',
};

const sidebarMenuItem41Data = {
    name: 'Utilisateurs',
    className: 'customers-8',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States70Data,
};

const iconsNavigationIcon12States71Data = {
    src: '/img/fontawsome--bookmark--10@1x.png',
    className: 'icons-navigation-icon-12-states-28',
};

const sidebarMenuItem42Data = {
    name: 'Thèmes articles',
    className: 'thmes-articles-8',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States71Data,
};

const iconsNavigationIcon12States72Data = {
    src: '/img/ic-invoice-10@1x.png',
    className: 'icons-navigation-icon-12-states-5',
};

const articles7Data = {
    className: 'articles-6',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States72Data,
};

const tradingCrypto45Data = {
    iconPencil: '/img/fontawsome--pen--10@1x.png',
    name: 'Trading & Crypto',
    className: 'trading-crypto-5',
};

const tradingCrypto211Data = {
    fontawsomePen: '/img/fontawsome--robot--9@1x.png',
    name: 'Bot Trading',
    className: 'bot-trading-22',
};

const tradingCrypto46Data = {
    iconPencil: '/img/fontawsome--bitcoin--11@1x.png',
    name: 'Crypto Wallet',
    className: 'crypto-wallet-9',
};

const tradingCrypto47Data = {
    iconPencil: '/img/fontawsome--handshake--10@1x.png',
    name: 'Broker',
    className: 'broker-9',
};

const tradingCrypto48Data = {
    iconPencil: '/img/fontawsome--globe-europe--10@1x.png',
    name: 'Pays',
    className: 'pays-9',
};

const abonnement10Data = {
    className: 'abonnement-9',
};

const iconsNavigationIcon12States73Data = {
    src: '/img/ic-setting-11@1x.png',
    className: 'icons-navigation-icon-12-states-5',
};

const sidebarMenuItem43Data = {
    name: 'Settings',
    className: 'settings-9',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States73Data,
};

const buttonsBtnTextIcon317Data = {
    children: 'Sauvegarder les modifications',
    className: 'buttons-btn-text-icon-18',
};

const botTradingData = {
    analytics: 'Bot Trading',
    name1: 'Rechercher…',
    name2: 'Classement',
    name3: 'Trader',
    name4: 'Action',
    topNavigationProps: topNavigation7Data,
    sidebarMenuItem1Props: sidebarMenuItem40Data,
    sidebarMenuItem2Props: sidebarMenuItem41Data,
    sidebarMenuItem3Props: sidebarMenuItem42Data,
    articlesProps: articles7Data,
    tradingCrypto1Props: tradingCrypto45Data,
    tradingCrypto2Props: tradingCrypto211Data,
    tradingCrypto2Props2: tradingCrypto46Data,
    tradingCrypto3Props: tradingCrypto47Data,
    tradingCrypto4Props: tradingCrypto48Data,
    tradingCrypto4Props2: abonnement10Data,
    sidebarMenuItem4Props: sidebarMenuItem43Data,
    buttonsBtnTextIcon3Props: buttonsBtnTextIcon317Data,
};

const topNavigationSearch9Data = {
    color: '/img/color-10@1x.png',
    className: 'top-navigation-search-8',
};

const usersAvatarPhoto2States14Data = {
    image: '/img/image-11@1x.png',
    className: 'users-avatar-photo-2-states-12',
};

const userGroup11Data = {
    usersAvatarPhoto2StatesProps: usersAvatarPhoto2States14Data,
};

const topNavigation8Data = {
    groupe2: '/img/groupe-1-10@1x.png',
    className: 'top-navigation-2',
    topNavigationSearchProps: topNavigationSearch9Data,
    userGroupProps: userGroup11Data,
};

const iconsNavigationIcon12States74Data = {
    src: '/img/ic-home-10@1x.png',
    className: 'icons-navigation-icon-12-states-5',
};

const sidebarMenuItem44Data = {
    name: 'Home',
    className: 'home-9',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States74Data,
};

const iconsNavigationIcon12States75Data = {
    src: '/img/ic-users-11@1x.png',
    className: 'icons-navigation-icon-12-states-5',
};

const sidebarMenuItem45Data = {
    name: 'Utilisateurs',
    className: 'customers-9',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States75Data,
};

const iconsNavigationIcon12States76Data = {
    src: '/img/fontawsome--bookmark--10@1x.png',
    className: 'icons-navigation-icon-12-states-29',
};

const sidebarMenuItem46Data = {
    name: 'Thèmes articles',
    className: 'thmes-articles-9',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States76Data,
};

const iconsNavigationIcon12States77Data = {
    src: '/img/ic-invoice-10@1x.png',
    className: 'icons-navigation-icon-12-states-5',
};

const articles8Data = {
    className: 'articles-7',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States77Data,
};

const tradingCrypto49Data = {
    iconPencil: '/img/fontawsome--pen--10@1x.png',
    name: 'Trading & Crypto',
    className: 'trading-crypto-6',
};

const tradingCrypto50Data = {
    iconPencil: '/img/fontawsome--robot--10@1x.png',
    name: 'Bot Trading',
    className: 'bot-trading-9',
};

const tradingCrypto212Data = {
    fontawsomePen: '/img/fontawsome--bitcoin--10@1x.png',
    name: 'Crypto Wallet',
    className: 'crypto-wallet-22',
};

const tradingCrypto51Data = {
    iconPencil: '/img/fontawsome--handshake--10@1x.png',
    name: 'Broker',
    className: 'broker-10',
};

const tradingCrypto52Data = {
    iconPencil: '/img/fontawsome--globe-europe--10@1x.png',
    name: 'Pays',
    className: 'pays-10',
};

const abonnement11Data = {
    className: 'abonnement-10',
};

const iconsNavigationIcon12States78Data = {
    src: '/img/ic-setting-11@1x.png',
    className: 'icons-navigation-icon-12-states-5',
};

const sidebarMenuItem47Data = {
    name: 'Settings',
    className: 'settings-10',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States78Data,
};

const buttonsBtnTextIcon318Data = {
    children: 'Sauvegarder les modifications',
    className: 'buttons-btn-text-icon-19',
};

const titre22Data = {
    children: 'Crypto',
};

const filtre14Data = {
    name: 'Cryptomonnaie',
    className: 'filtre-13',
};

const devise1Data = {
    devise: 'Devise',
    phone: '47 705.05',
    ligne6: '/img/ligne-6-37@1x.png',
};

const devise2Data = {
    devise: 'Pourcentage Wallet',
    phone: '50%',
    ligne6: '/img/ligne-6-39@1x.png',
    className: 'pourcentage-wallet',
};

const buttonsBtnTextIcon58Data = {
    children: 'Ajouter une crypto',
    className: 'buttons-btn-text-icon-34',
};

const boutonPourSupprimer3Data = {
    className: 'bouton-pour-supprimer-1',
};

const editeur3Data = {
    src: '/img/notes--details--text-editor-4@1x.png',
};

const iDFixe26Data = {
    dbut: 'Choisir une date',
    date: '22/03/2022',
    ligne6: '/img/ligne-6-1@1x.png',
    className: 'id-fixe-19',
};

const cryptoWalletData = {
    analytics1: 'Crypto Wallet',
    cryptoSlectionn: 'Crypto Sélectionné',
    bitcoin: 'Bitcoin',
    x1421344023328: '/img/trac--992@1x.png',
    trac993: '/img/trac--993@1x.png',
    ligne6: '/img/ligne-6-37@1x.png',
    analytics2: 'Message',
    paragraphe: 'Paragraphe',
    topNavigationProps: topNavigation8Data,
    sidebarMenuItem1Props: sidebarMenuItem44Data,
    sidebarMenuItem2Props: sidebarMenuItem45Data,
    sidebarMenuItem3Props: sidebarMenuItem46Data,
    articlesProps: articles8Data,
    tradingCrypto1Props: tradingCrypto49Data,
    tradingCrypto2Props: tradingCrypto50Data,
    tradingCrypto2Props2: tradingCrypto212Data,
    tradingCrypto3Props: tradingCrypto51Data,
    tradingCrypto4Props: tradingCrypto52Data,
    tradingCrypto4Props2: abonnement11Data,
    sidebarMenuItem4Props: sidebarMenuItem47Data,
    buttonsBtnTextIcon3Props: buttonsBtnTextIcon318Data,
    titre2Props: titre22Data,
    filtreProps: filtre14Data,
    devise1Props: devise1Data,
    devise2Props: devise2Data,
    buttonsBtnTextIcon5Props: buttonsBtnTextIcon58Data,
    boutonPourSupprimerProps: boutonPourSupprimer3Data,
    editeurProps: editeur3Data,
    iDFixe2Props: iDFixe26Data,
};

const topNavigationSearch10Data = {
    color: '/img/color-10@1x.png',
    className: 'top-navigation-search-9',
};

const usersAvatarPhoto2States15Data = {
    image: '/img/image-11@1x.png',
    className: 'users-avatar-photo-2-states-13',
};

const userGroup12Data = {
    usersAvatarPhoto2StatesProps: usersAvatarPhoto2States15Data,
};

const topNavigation9Data = {
    groupe2: '/img/groupe-1-10@1x.png',
    className: 'top-navigation-2',
    topNavigationSearchProps: topNavigationSearch10Data,
    userGroupProps: userGroup12Data,
};

const iconsNavigationIcon12States79Data = {
    src: '/img/ic-home-10@1x.png',
    className: 'icons-navigation-icon-12-states-5',
};

const sidebarMenuItem48Data = {
    name: 'Home',
    className: 'home-10',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States79Data,
};

const iconsNavigationIcon12States80Data = {
    src: '/img/ic-users-11@1x.png',
    className: 'icons-navigation-icon-12-states-5',
};

const sidebarMenuItem49Data = {
    name: 'Utilisateurs',
    className: 'customers-10',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States80Data,
};

const iconsNavigationIcon12States81Data = {
    src: '/img/fontawsome--bookmark--10@1x.png',
    className: 'icons-navigation-icon-12-states-30',
};

const sidebarMenuItem50Data = {
    name: 'Thèmes articles',
    className: 'thmes-articles-10',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States81Data,
};

const iconsNavigationIcon12States82Data = {
    src: '/img/ic-invoice-10@1x.png',
    className: 'icons-navigation-icon-12-states-5',
};

const articles9Data = {
    className: 'articles-8',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States82Data,
};

const tradingCrypto53Data = {
    iconPencil: '/img/fontawsome--pen--10@1x.png',
    name: 'Trading & Crypto',
    className: 'trading-crypto-7',
};

const tradingCrypto54Data = {
    iconPencil: '/img/fontawsome--robot--10@1x.png',
    name: 'Bot Trading',
    className: 'bot-trading-10',
};

const tradingCrypto55Data = {
    iconPencil: '/img/fontawsome--bitcoin--11@1x.png',
    name: 'Crypto Wallet',
    className: 'crypto-wallet-10',
};

const tradingCrypto213Data = {
    fontawsomePen: '/img/fontawsome--handshake--11@1x.png',
    name: 'Broker',
    className: 'broker-21',
};

const tradingCrypto56Data = {
    iconPencil: '/img/fontawsome--globe-europe--10@1x.png',
    name: 'Pays',
    className: 'pays-11',
};

const abonnement12Data = {
    className: 'abonnement-11',
};

const iconsNavigationIcon12States83Data = {
    src: '/img/ic-setting-11@1x.png',
    className: 'icons-navigation-icon-12-states-5',
};

const sidebarMenuItem51Data = {
    name: 'Settings',
    className: 'settings-11',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States83Data,
};

const groupe39323Data = {
    children: 'Créer un Broker',
    className: 'groupe-393-10',
};

const buttonsBtnTextIcon62Data = {
    className: 'buttons-btn-text-icon-37',
    groupe3932Props: groupe39323Data,
};

const brokerData = {
    analytics: 'Broker',
    name1: 'Rechercher…',
    name2: 'ID',
    name3: 'Broker',
    name4: 'Logo',
    name5: 'Action',
    topNavigationProps: topNavigation9Data,
    sidebarMenuItem1Props: sidebarMenuItem48Data,
    sidebarMenuItem2Props: sidebarMenuItem49Data,
    sidebarMenuItem3Props: sidebarMenuItem50Data,
    articlesProps: articles9Data,
    tradingCrypto1Props: tradingCrypto53Data,
    tradingCrypto2Props: tradingCrypto54Data,
    tradingCrypto3Props: tradingCrypto55Data,
    tradingCrypto2Props2: tradingCrypto213Data,
    tradingCrypto4Props: tradingCrypto56Data,
    abonnementProps: abonnement12Data,
    sidebarMenuItem4Props: sidebarMenuItem51Data,
    buttonsBtnTextIcon6Props: buttonsBtnTextIcon62Data,
};

const icSearch5Data = {
    className: 'x00-general-01-icons-3',
};

const topNavigationSearch25Data = {
    icSearchProps: icSearch5Data,
};

const usersAvatarPhoto2States16Data = {
    image: '/img/image-14@1x.png',
    className: 'users-avatar-photo-2-states-14',
};

const userGroup13Data = {
    usersAvatarPhoto2StatesProps: usersAvatarPhoto2States16Data,
};

const topNavigation24Data = {
    groupe2: '/img/groupe-1-12@1x.png',
    className: 'top-navigation-2',
    topNavigationSearch2Props: topNavigationSearch25Data,
    userGroupProps: userGroup13Data,
};

const iconsNavigationIcon12States84Data = {
    src: '/img/ic-home-10@1x.png',
    className: 'icons-navigation-icon-12-states-5',
};

const sidebarMenuItem52Data = {
    name: 'Home',
    className: 'home-11',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States84Data,
};

const iconsNavigationIcon12States85Data = {
    src: '/img/ic-users-11@1x.png',
    className: 'icons-navigation-icon-12-states-5',
};

const sidebarMenuItem53Data = {
    name: 'Utilisateurs',
    className: 'customers-11',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States85Data,
};

const iconsNavigationIcon12States86Data = {
    src: '/img/fontawsome--bookmark--10@1x.png',
    className: 'icons-navigation-icon-12-states-31',
};

const sidebarMenuItem54Data = {
    name: 'Thèmes articles',
    className: 'thmes-articles-11',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States86Data,
};

const iconsNavigationIcon12States87Data = {
    src: '/img/ic-invoice-10@1x.png',
    className: 'icons-navigation-icon-12-states-5',
};

const articles10Data = {
    className: 'articles-9',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States87Data,
};

const tradingCrypto57Data = {
    iconPencil: '/img/fontawsome--pen--10@1x.png',
    name: 'Trading & Crypto',
    className: 'trading-crypto-8',
};

const tradingCrypto58Data = {
    iconPencil: '/img/fontawsome--robot--10@1x.png',
    name: 'Bot Trading',
    className: 'bot-trading-11',
};

const tradingCrypto59Data = {
    iconPencil: '/img/fontawsome--bitcoin--11@1x.png',
    name: 'Crypto Wallet',
    className: 'crypto-wallet-11',
};

const tradingCrypto214Data = {
    fontawsomePen: '/img/fontawsome--handshake--11@1x.png',
    name: 'Broker',
    className: 'broker-22',
};

const tradingCrypto60Data = {
    iconPencil: '/img/fontawsome--globe-europe--10@1x.png',
    name: 'Pays',
    className: 'pays-12',
};

const iconsNavigationIcon12States88Data = {
    src: '/img/ic-setting-11@1x.png',
    className: 'icons-navigation-icon-12-states-5',
};

const sidebarMenuItem55Data = {
    name: 'Settings',
    className: 'settings-12',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States88Data,
};

const buttonsBtnTextIcon319Data = {
    children: 'Créer Broker',
    className: 'buttons-btn-text-icon-20',
};

const buttonsBtnTextIcon59Data = {
    children: 'Select Logo',
    className: 'buttons-btn-text-icon-35',
};

const iDFixe15Data = {
    idUser: 'Thème sélectionné',
    number: 'Nom',
    ligne6: '/img/ligne-6-1@1x.png',
    className: 'thme-slectionn',
};

const iDFixe16Data = {
    idUser: 'URL',
    number: 'https://……',
    ligne6: '/img/ligne-6-1@1x.png',
    className: 'url',
};

const brokerCrerUnBrokerData = {
    analytics1: 'Broker',
    analytics2: 'Broker',
    logoBroker: 'Logo Broker',
    image1: '/img/image-1-1@1x.png',
    topNavigation2Props: topNavigation24Data,
    sidebarMenuItem1Props: sidebarMenuItem52Data,
    sidebarMenuItem2Props: sidebarMenuItem53Data,
    sidebarMenuItem3Props: sidebarMenuItem54Data,
    articlesProps: articles10Data,
    tradingCrypto1Props: tradingCrypto57Data,
    tradingCrypto2Props: tradingCrypto58Data,
    tradingCrypto3Props: tradingCrypto59Data,
    tradingCrypto2Props2: tradingCrypto214Data,
    tradingCrypto4Props: tradingCrypto60Data,
    sidebarMenuItem4Props: sidebarMenuItem55Data,
    buttonsBtnTextIcon3Props: buttonsBtnTextIcon319Data,
    buttonsBtnTextIcon5Props: buttonsBtnTextIcon59Data,
    iDFixe1Props: iDFixe15Data,
    iDFixe2Props: iDFixe16Data,
};

const topNavigationSearch11Data = {
    color: '/img/color-10@1x.png',
    className: 'top-navigation-search-10',
};

const usersAvatarPhoto2States17Data = {
    image: '/img/image-11@1x.png',
    className: 'users-avatar-photo-2-states-15',
};

const userGroup14Data = {
    usersAvatarPhoto2StatesProps: usersAvatarPhoto2States17Data,
};

const topNavigation10Data = {
    groupe2: '/img/groupe-1-10@1x.png',
    className: 'top-navigation-2',
    topNavigationSearchProps: topNavigationSearch11Data,
    userGroupProps: userGroup14Data,
};

const iconsNavigationIcon12States89Data = {
    src: '/img/ic-home-10@1x.png',
    className: 'icons-navigation-icon-12-states-5',
};

const sidebarMenuItem56Data = {
    name: 'Home',
    className: 'home-12',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States89Data,
};

const iconsNavigationIcon12States90Data = {
    src: '/img/ic-users-11@1x.png',
    className: 'icons-navigation-icon-12-states-5',
};

const sidebarMenuItem57Data = {
    name: 'Utilisateurs',
    className: 'customers-12',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States90Data,
};

const iconsNavigationIcon12States91Data = {
    src: '/img/fontawsome--bookmark--10@1x.png',
    className: 'icons-navigation-icon-12-states-32',
};

const sidebarMenuItem58Data = {
    name: 'Thèmes articles',
    className: 'thmes-articles-12',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States91Data,
};

const iconsNavigationIcon12States92Data = {
    src: '/img/ic-invoice-10@1x.png',
    className: 'icons-navigation-icon-12-states-5',
};

const articles11Data = {
    className: 'articles-10',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States92Data,
};

const tradingCrypto61Data = {
    iconPencil: '/img/fontawsome--pen--10@1x.png',
    name: 'Trading & Crypto',
    className: 'trading-crypto-9',
};

const tradingCrypto62Data = {
    iconPencil: '/img/fontawsome--robot--10@1x.png',
    name: 'Bot Trading',
    className: 'bot-trading-12',
};

const tradingCrypto63Data = {
    iconPencil: '/img/fontawsome--bitcoin--11@1x.png',
    name: 'Crypto Wallet',
    className: 'crypto-wallet-12',
};

const tradingCrypto64Data = {
    iconPencil: '/img/fontawsome--handshake--10@1x.png',
    name: 'Broker',
    className: 'broker-11',
};

const tradingCrypto215Data = {
    fontawsomePen: '/img/fontawsome--globe-europe--13@1x.png',
    name: 'Pays',
    className: 'pays-22',
};

const abonnement14Data = {
    className: 'abonnement-12',
};

const iconsNavigationIcon12States93Data = {
    src: '/img/ic-setting-11@1x.png',
    className: 'icons-navigation-icon-12-states-5',
};

const sidebarMenuItem59Data = {
    name: 'Settings',
    className: 'settings-13',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States93Data,
};

const filtre15Data = {
    name: 'Visible',
    className: 'filtre-14',
};

const groupe39331Data = {
    children: 'Créer un Pays',
    className: '',
};

const buttonsBtnTextIcon71Data = {
    groupe3933Props: groupe39331Data,
};

const paysData = {
    analytics: 'Pays',
    name1: 'Rechercher…',
    name2: 'ID',
    name3: 'Nom',
    name4: 'Préfixe',
    name5: 'Drapeau',
    name6: 'Visible',
    name7: 'Action',
    name8: '1',
    name9: 'France',
    name10: '33',
    groupe1492: '/img/trac--994@1x.png',
    trac995: '/img/trac--995@1x.png',
    trac996: '/img/trac--996@1x.png',
    membre: '/img/fontawsome--check-square--10@1x.png',
    fontawsomePen: '/img/fontawsome--pen--12@1x.png',
    fontawsomeTimes: '/img/fontawsome--times--10@1x.png',
    topNavigationProps: topNavigation10Data,
    sidebarMenuItem1Props: sidebarMenuItem56Data,
    sidebarMenuItem2Props: sidebarMenuItem57Data,
    sidebarMenuItem3Props: sidebarMenuItem58Data,
    articlesProps: articles11Data,
    tradingCrypto1Props: tradingCrypto61Data,
    tradingCrypto2Props: tradingCrypto62Data,
    tradingCrypto3Props: tradingCrypto63Data,
    tradingCrypto4Props: tradingCrypto64Data,
    tradingCrypto2Props2: tradingCrypto215Data,
    tradingCrypto2Props22: abonnement14Data,
    sidebarMenuItem4Props: sidebarMenuItem59Data,
    filtreProps: filtre15Data,
    buttonsBtnTextIcon7Props: buttonsBtnTextIcon71Data,
};

const topNavigationSearch12Data = {
    color: '/img/color-10@1x.png',
    className: 'top-navigation-search-11',
};

const usersAvatarPhoto2States18Data = {
    image: '/img/image-11@1x.png',
    className: 'users-avatar-photo-2-states-16',
};

const userGroup15Data = {
    usersAvatarPhoto2StatesProps: usersAvatarPhoto2States18Data,
};

const topNavigation11Data = {
    groupe2: '/img/groupe-1-10@1x.png',
    className: 'top-navigation-2',
    topNavigationSearchProps: topNavigationSearch12Data,
    userGroupProps: userGroup15Data,
};

const iconsNavigationIcon12States94Data = {
    src: '/img/ic-home-10@1x.png',
    className: 'icons-navigation-icon-12-states-5',
};

const sidebarMenuItem60Data = {
    name: 'Home',
    className: 'home-13',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States94Data,
};

const iconsNavigationIcon12States95Data = {
    src: '/img/ic-users-11@1x.png',
    className: 'icons-navigation-icon-12-states-5',
};

const sidebarMenuItem61Data = {
    name: 'Utilisateurs',
    className: 'customers-13',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States95Data,
};

const iconsNavigationIcon12States96Data = {
    src: '/img/fontawsome--bookmark--10@1x.png',
    className: 'icons-navigation-icon-12-states-33',
};

const sidebarMenuItem62Data = {
    name: 'Thèmes articles',
    className: 'thmes-articles-13',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States96Data,
};

const iconsNavigationIcon12States97Data = {
    src: '/img/ic-invoice-10@1x.png',
    className: 'icons-navigation-icon-12-states-5',
};

const articles12Data = {
    className: 'articles-11',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States97Data,
};

const tradingCrypto65Data = {
    iconPencil: '/img/fontawsome--pen--10@1x.png',
    name: 'Trading & Crypto',
    className: 'trading-crypto-10',
};

const tradingCrypto66Data = {
    iconPencil: '/img/fontawsome--robot--10@1x.png',
    name: 'Bot Trading',
    className: 'bot-trading-13',
};

const tradingCrypto67Data = {
    iconPencil: '/img/fontawsome--bitcoin--11@1x.png',
    name: 'Crypto Wallet',
    className: 'crypto-wallet-13',
};

const tradingCrypto68Data = {
    iconPencil: '/img/fontawsome--handshake--10@1x.png',
    name: 'Broker',
    className: 'broker-12',
};

const tradingCrypto69Data = {
    iconPencil: '/img/fontawsome--globe-europe--10@1x.png',
    name: 'Pays',
    className: 'pays-13',
};

const abonnement15Data = {
    className: 'abonnement-13',
};

const iconsNavigationIcon12States98Data = {
    src: '/img/ic-setting-33@1x.png',
    className: 'icons-navigation-icon-12-states-34',
};

const sidebarMenuItem210Data = {
    name: '/img/frame-12@1x.png',
    className: 'settings-22',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States98Data,
};

const buttonsBtnTextIcon320Data = {
    children: 'Sauvegarder',
    className: 'buttons-btn-text-icon-21',
};

const toggle1Data = {
    activerLesSmsLinscription: 'Activer les SMS à l’inscription',
};

const paramtresData = {
    analytics1: 'Paramètres',
    analytics2: 'SMS à l’Inscription',
    contenuDuSms: 'Contenu du SMS',
    nom: 'Nom',
    ligne6: '/img/ligne-6-42@1x.png',
    topNavigationProps: topNavigation11Data,
    sidebarMenuItem1Props: sidebarMenuItem60Data,
    sidebarMenuItem2Props: sidebarMenuItem61Data,
    sidebarMenuItem3Props: sidebarMenuItem62Data,
    articlesProps: articles12Data,
    tradingCrypto1Props: tradingCrypto65Data,
    tradingCrypto2Props: tradingCrypto66Data,
    tradingCrypto3Props: tradingCrypto67Data,
    tradingCrypto4Props: tradingCrypto68Data,
    tradingCrypto5Props: tradingCrypto69Data,
    tradingCrypto5Props2: abonnement15Data,
    sidebarMenuItem2Props2: sidebarMenuItem210Data,
    buttonsBtnTextIcon3Props: buttonsBtnTextIcon320Data,
    toggleProps: toggle1Data,
};

const topNavigationSearch13Data = {
    color: '/img/color-10@1x.png',
    className: 'top-navigation-search-12',
};

const usersAvatarPhoto2States19Data = {
    image: '/img/image-11@1x.png',
    className: 'users-avatar-photo-2-states-17',
};

const userGroup16Data = {
    usersAvatarPhoto2StatesProps: usersAvatarPhoto2States19Data,
};

const topNavigation12Data = {
    groupe2: '/img/groupe-1-10@1x.png',
    className: 'top-navigation-2',
    topNavigationSearchProps: topNavigationSearch13Data,
    userGroupProps: userGroup16Data,
};

const iconsNavigationIcon12States99Data = {
    src: '/img/ic-home-10@1x.png',
    className: 'icons-navigation-icon-12-states-5',
};

const sidebarMenuItem63Data = {
    name: 'Home',
    className: 'home-14',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States99Data,
};

const iconsNavigationIcon12States100Data = {
    src: '/img/ic-users-11@1x.png',
    className: 'icons-navigation-icon-12-states-5',
};

const sidebarMenuItem64Data = {
    name: 'Utilisateurs',
    className: 'customers-14',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States100Data,
};

const iconsNavigationIcon12States101Data = {
    src: '/img/fontawsome--bookmark--10@1x.png',
    className: 'icons-navigation-icon-12-states-35',
};

const sidebarMenuItem65Data = {
    name: 'Thèmes articles',
    className: 'thmes-articles-14',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States101Data,
};

const iconsNavigationIcon12States102Data = {
    src: '/img/ic-invoice-10@1x.png',
    className: 'icons-navigation-icon-12-states-5',
};

const articles13Data = {
    className: 'articles-12',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States102Data,
};

const tradingCrypto70Data = {
    iconPencil: '/img/fontawsome--pen--10@1x.png',
    name: 'Trading & Crypto',
    className: 'trading-crypto-11',
};

const tradingCrypto71Data = {
    iconPencil: '/img/fontawsome--robot--10@1x.png',
    name: 'Bot Trading',
    className: 'bot-trading-14',
};

const tradingCrypto72Data = {
    iconPencil: '/img/fontawsome--bitcoin--11@1x.png',
    name: 'Crypto Wallet',
    className: 'crypto-wallet-14',
};

const tradingCrypto73Data = {
    iconPencil: '/img/fontawsome--handshake--10@1x.png',
    name: 'Broker',
    className: 'broker-13',
};

const tradingCrypto74Data = {
    iconPencil: '/img/fontawsome--globe-europe--10@1x.png',
    name: 'Pays',
    className: 'pays-14',
};

const gestionAbonnements1Data = {
    children: 'Gestion Abonnements',
};

const abonnement22Data = {
    overlapGroup: '/img/frame-12@1x.png',
    iconMaterialPayment: '/img/icon-material-payment-15@1x.png',
    name1: 'Abonnement',
    iconIonicIosArrowDown: '/img/icon-ionic-ios-arrow-down-10@1x.png',
    name2: 'Code promo',
    essaiGratuit: '/img/frame-11@1x.png',
    name3: 'Essai gratuit',
    codeGratuit: '/img/frame-11@1x.png',
    name4: 'Code gratuit',
    gestionAbonnementsProps: gestionAbonnements1Data,
};

const iconsNavigationIcon12States103Data = {
    src: '/img/ic-setting-11@1x.png',
    className: 'icons-navigation-icon-12-states-5',
};

const sidebarMenuItem66Data = {
    name: 'Settings',
    className: 'settings-14',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States103Data,
};

const filtre16Data = {
    name: 'Visible',
    className: 'filtre-15',
};

const groupe3934Data = {
    children: 'Créer un abonnement',
    className: 'groupe-393-5',
};

const buttonsBtnTextIcon43Data = {
    className: 'buttons-btn-text-icon-24',
    groupe393Props: groupe3934Data,
};

const gridTable1Data = {
    name1: 'Nom',
    name2: 'Prix',
    name3: 'Durée',
    name4: 'Best Seller',
    name5: 'Visible',
};

const abonnementGestionAbonnementsData = {
    analytics: 'Gestion Abonnements',
    name1: 'Rechercher…',
    name2: 'Novice',
    name3: '49.99 €',
    name4: 'Mensuel',
    membre1: '/img/fontawsome--check-square--10@1x.png',
    membre2: '/img/fontawsome--check-square--10@1x.png',
    fontawsomePen: '/img/fontawsome--pen--12@1x.png',
    iconClose: '/img/fontawsome--times--10@1x.png',
    topNavigationProps: topNavigation12Data,
    sidebarMenuItem1Props: sidebarMenuItem63Data,
    sidebarMenuItem2Props: sidebarMenuItem64Data,
    sidebarMenuItem3Props: sidebarMenuItem65Data,
    articlesProps: articles13Data,
    tradingCrypto1Props: tradingCrypto70Data,
    tradingCrypto2Props: tradingCrypto71Data,
    tradingCrypto3Props: tradingCrypto72Data,
    tradingCrypto4Props: tradingCrypto73Data,
    tradingCrypto5Props: tradingCrypto74Data,
    abonnement2Props: abonnement22Data,
    sidebarMenuItem4Props: sidebarMenuItem66Data,
    filtreProps: filtre16Data,
    buttonsBtnTextIcon4Props: buttonsBtnTextIcon43Data,
    gridTableProps: gridTable1Data,
};

const icSearch6Data = {
    className: 'x00-general-01-icons-4',
};

const topNavigationSearch26Data = {
    icSearchProps: icSearch6Data,
};

const usersAvatarPhoto2States20Data = {
    image: '/img/image-14@1x.png',
    className: 'users-avatar-photo-2-states-18',
};

const userGroup17Data = {
    usersAvatarPhoto2StatesProps: usersAvatarPhoto2States20Data,
};

const topNavigation25Data = {
    groupe2: '/img/groupe-1-12@1x.png',
    className: 'top-navigation-2',
    topNavigationSearch2Props: topNavigationSearch26Data,
    userGroupProps: userGroup17Data,
};

const iconsNavigationIcon12States104Data = {
    src: '/img/ic-home-10@1x.png',
    className: 'icons-navigation-icon-12-states-5',
};

const sidebarMenuItem67Data = {
    name: 'Home',
    className: 'home-15',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States104Data,
};

const iconsNavigationIcon12States105Data = {
    src: '/img/ic-users-11@1x.png',
    className: 'icons-navigation-icon-12-states-5',
};

const sidebarMenuItem68Data = {
    name: 'Utilisateurs',
    className: 'customers-15',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States105Data,
};

const iconsNavigationIcon12States106Data = {
    src: '/img/fontawsome--bookmark--10@1x.png',
    className: 'icons-navigation-icon-12-states-36',
};

const sidebarMenuItem69Data = {
    name: 'Thèmes articles',
    className: 'thmes-articles-15',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States106Data,
};

const iconsNavigationIcon12States107Data = {
    src: '/img/ic-invoice-10@1x.png',
    className: 'icons-navigation-icon-12-states-5',
};

const articles14Data = {
    className: 'articles-13',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States107Data,
};

const tradingCrypto75Data = {
    iconPencil: '/img/fontawsome--pen--10@1x.png',
    name: 'Trading & Crypto',
    className: 'trading-crypto-12',
};

const tradingCrypto76Data = {
    iconPencil: '/img/fontawsome--robot--10@1x.png',
    name: 'Bot Trading',
    className: 'bot-trading-15',
};

const tradingCrypto77Data = {
    iconPencil: '/img/fontawsome--bitcoin--11@1x.png',
    name: 'Crypto Wallet',
    className: 'crypto-wallet-15',
};

const tradingCrypto78Data = {
    iconPencil: '/img/fontawsome--handshake--10@1x.png',
    name: 'Broker',
    className: 'broker-14',
};

const tradingCrypto79Data = {
    iconPencil: '/img/fontawsome--globe-europe--10@1x.png',
    name: 'Pays',
    className: 'pays-15',
};

const tradingCrypto80Data = {
    iconPencil: '/img/icon-material-payment-10@1x.png',
    name: 'Abonnement',
    className: 'abonnement',
};

const iconsNavigationIcon12States108Data = {
    src: '/img/ic-setting-11@1x.png',
    className: 'icons-navigation-icon-12-states-5',
};

const sidebarMenuItem70Data = {
    name: 'Settings',
    className: 'settings-15',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States108Data,
};

const groupe3935Data = {
    children: 'Créer un abonnement',
    className: 'groupe-393-6',
};

const buttonsBtnTextIcon44Data = {
    className: 'buttons-btn-text-icon-25',
    groupe393Props: groupe3935Data,
};

const titre6Data = {
    children: 'Informations',
    className: 'titre-5',
};

const iDFixe17Data = {
    idUser: 'Nom',
    number: 'Novice',
    ligne6: '/img/ligne-6-1@1x.png',
    className: 'nom-1',
};

const iDFixe18Data = {
    idUser: 'Prix',
    number: '49.99 €',
    ligne6: '/img/ligne-6-1@1x.png',
    className: 'prix',
};

const iDFixe19Data = {
    idUser: 'Durée',
    number: '30',
    ligne6: '/img/ligne-6-1@1x.png',
    className: 'dure',
};

const type1Data = {
    type: 'Type',
    mensuel: 'Mensuel',
};

const bestSeller1Data = {
    children: 'Best Seller',
};

const bestSeller2Data = {
    children: 'Visible',
    className: 'visible',
};

const toggle2Data = {
    activerLesSmsLinscription: 'Période d’essai',
    className: 'priode-dessai',
};

const abonnementCrerUnAbonnementData = {
    iconIonicIosArrowDown: '/img/icon-ionic-ios-arrow-down-10@1x.png',
    analytics: 'Gestion Abonnements',
    topNavigation2Props: topNavigation25Data,
    sidebarMenuItem1Props: sidebarMenuItem67Data,
    sidebarMenuItem2Props: sidebarMenuItem68Data,
    sidebarMenuItem3Props: sidebarMenuItem69Data,
    articlesProps: articles14Data,
    tradingCrypto1Props: tradingCrypto75Data,
    tradingCrypto2Props: tradingCrypto76Data,
    tradingCrypto3Props: tradingCrypto77Data,
    tradingCrypto4Props: tradingCrypto78Data,
    tradingCrypto5Props: tradingCrypto79Data,
    tradingCrypto6Props: tradingCrypto80Data,
    sidebarMenuItem4Props: sidebarMenuItem70Data,
    buttonsBtnTextIcon4Props: buttonsBtnTextIcon44Data,
    titreProps: titre6Data,
    iDFixe1Props: iDFixe17Data,
    iDFixe2Props: iDFixe18Data,
    iDFixe3Props: iDFixe19Data,
    typeProps: type1Data,
    bestSeller1Props: bestSeller1Data,
    bestSeller2Props: bestSeller2Data,
    toggleProps: toggle2Data,
};

const topNavigationSearch14Data = {
    color: '/img/color-10@1x.png',
    className: 'top-navigation-search-13',
};

const usersAvatarPhoto2States21Data = {
    image: '/img/image-14@1x.png',
    className: 'users-avatar-photo-2-states-19',
};

const userGroup18Data = {
    usersAvatarPhoto2StatesProps: usersAvatarPhoto2States21Data,
};

const topNavigation13Data = {
    groupe2: '/img/groupe-1-17@1x.png',
    className: 'top-navigation-2',
    topNavigationSearchProps: topNavigationSearch14Data,
    userGroupProps: userGroup18Data,
};

const iconsNavigationIcon12States109Data = {
    src: '/img/ic-home-10@1x.png',
    className: 'icons-navigation-icon-12-states-5',
};

const sidebarMenuItem71Data = {
    name: 'Home',
    className: 'home-16',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States109Data,
};

const iconsNavigationIcon12States110Data = {
    src: '/img/ic-users-11@1x.png',
    className: 'icons-navigation-icon-12-states-5',
};

const sidebarMenuItem72Data = {
    name: 'Utilisateurs',
    className: 'customers-16',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States110Data,
};

const iconsNavigationIcon12States111Data = {
    src: '/img/fontawsome--bookmark--10@1x.png',
    className: 'icons-navigation-icon-12-states-37',
};

const sidebarMenuItem73Data = {
    name: 'Thèmes articles',
    className: 'thmes-articles-16',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States111Data,
};

const iconsNavigationIcon12States112Data = {
    src: '/img/ic-invoice-10@1x.png',
    className: 'icons-navigation-icon-12-states-5',
};

const articles15Data = {
    className: 'articles-14',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States112Data,
};

const tradingCrypto81Data = {
    iconPencil: '/img/fontawsome--pen--10@1x.png',
    name: 'Trading & Crypto',
    className: 'trading-crypto-13',
};

const tradingCrypto82Data = {
    iconPencil: '/img/fontawsome--robot--10@1x.png',
    name: 'Bot Trading',
    className: 'bot-trading-16',
};

const tradingCrypto83Data = {
    iconPencil: '/img/fontawsome--bitcoin--11@1x.png',
    name: 'Crypto Wallet',
    className: 'crypto-wallet-16',
};

const tradingCrypto84Data = {
    iconPencil: '/img/fontawsome--handshake--10@1x.png',
    name: 'Broker',
    className: 'broker-15',
};

const tradingCrypto85Data = {
    iconPencil: '/img/fontawsome--globe-europe--10@1x.png',
    name: 'Pays',
    className: 'pays-16',
};

const gestionAbonnements2Data = {
    children: 'Gestion Abonnements',
    className: 'gestion-abonnements-1',
};

const gestionAbonnements3Data = {
    children: 'Code promo',
    className: 'code-promo-1',
};

const essaiGratuit1Data = {
    name: 'Essai gratuit',
};

const essaiGratuit2Data = {
    name: 'Code gratuit',
    className: 'code-gratuit-1',
};

const abonnement32Data = {
    overlapGroup: '/img/frame-12@1x.png',
    iconMaterialPayment: '/img/icon-material-payment-15@1x.png',
    name: 'Abonnement',
    gestionAbonnements1Props: gestionAbonnements2Data,
    gestionAbonnements2Props: gestionAbonnements3Data,
    essaiGratuit1Props: essaiGratuit1Data,
    essaiGratuit2Props: essaiGratuit2Data,
};

const iconsNavigationIcon12States113Data = {
    src: '/img/ic-setting-11@1x.png',
    className: 'icons-navigation-icon-12-states-5',
};

const sidebarMenuItem74Data = {
    name: 'Settings',
    className: 'settings-16',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States113Data,
};

const groupe3936Data = {
    children: 'Créer un abonnement',
    className: 'groupe-393-7',
};

const buttonsBtnTextIcon45Data = {
    className: 'buttons-btn-text-icon-26',
    groupe393Props: groupe3936Data,
};

const titre8Data = {
    children: 'Informations',
    className: 'titre-6',
};

const iDFixe20Data = {
    idUser: 'Nom',
    number: 'Novice',
    ligne6: '/img/ligne-6-1@1x.png',
    className: 'nom-2',
};

const iDFixe21Data = {
    idUser: 'Prix',
    number: '49.99 €',
    ligne6: '/img/ligne-6-1@1x.png',
    className: 'prix-1',
};

const iDFixe27Data = {
    idUser: 'Durée',
    number: '30',
    ligne6: '/img/ligne-6-1@1x.png',
    className: 'dure-1',
};

const type2Data = {
    type: 'Type',
    mensuel: 'Mensuel',
};

const bestSeller3Data = {
    children: 'Best Seller',
};

const bestSeller4Data = {
    children: 'Visible',
    className: 'visible-1',
};

const priodeDessaiData = {
    on: 'ON',
    priodeDessai: 'Période d’essai',
};

const iDFixe28Data = {
    idUser: 'Prix',
    number: '49.99 €',
    ligne6: '/img/ligne-6-1@1x.png',
    className: 'prix-2',
};

const iDFixe29Data = {
    idUser: 'Durée',
    number: '30',
    ligne6: '/img/ligne-6-1@1x.png',
    className: 'dure-2',
};

const type3Data = {
    type: 'Type',
    mensuel: 'Mensuel',
    className: 'type-2',
};

const abonnementCrerUnAbonnementpriodeDesData = {
    analytics: 'Gestion Abonnements',
    topNavigationProps: topNavigation13Data,
    sidebarMenuItem1Props: sidebarMenuItem71Data,
    sidebarMenuItem2Props: sidebarMenuItem72Data,
    sidebarMenuItem3Props: sidebarMenuItem73Data,
    articlesProps: articles15Data,
    tradingCrypto1Props: tradingCrypto81Data,
    tradingCrypto2Props: tradingCrypto82Data,
    tradingCrypto3Props: tradingCrypto83Data,
    tradingCrypto4Props: tradingCrypto84Data,
    tradingCrypto5Props: tradingCrypto85Data,
    abonnement3Props: abonnement32Data,
    sidebarMenuItem4Props: sidebarMenuItem74Data,
    buttonsBtnTextIcon4Props: buttonsBtnTextIcon45Data,
    titreProps: titre8Data,
    iDFixe1Props: iDFixe20Data,
    iDFixe2Props: iDFixe21Data,
    iDFixe3Props: iDFixe27Data,
    type1Props: type2Data,
    bestSeller1Props: bestSeller3Data,
    bestSeller2Props: bestSeller4Data,
    priodeDessaiProps: priodeDessaiData,
    iDFixe4Props: iDFixe28Data,
    iDFixe5Props: iDFixe29Data,
    type2Props: type3Data,
};

const topNavigationSearch15Data = {
    color: '/img/color-10@1x.png',
    className: 'top-navigation-search-14',
};

const usersAvatarPhoto2States22Data = {
    image: '/img/image-11@1x.png',
    className: 'users-avatar-photo-2-states-20',
};

const userGroup19Data = {
    usersAvatarPhoto2StatesProps: usersAvatarPhoto2States22Data,
};

const topNavigation14Data = {
    groupe2: '/img/groupe-1-10@1x.png',
    className: 'top-navigation-2',
    topNavigationSearchProps: topNavigationSearch15Data,
    userGroupProps: userGroup19Data,
};

const iconsNavigationIcon12States114Data = {
    src: '/img/ic-home-10@1x.png',
    className: 'icons-navigation-icon-12-states-5',
};

const sidebarMenuItem75Data = {
    name: 'Home',
    className: 'home-17',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States114Data,
};

const iconsNavigationIcon12States115Data = {
    src: '/img/ic-users-11@1x.png',
    className: 'icons-navigation-icon-12-states-5',
};

const sidebarMenuItem76Data = {
    name: 'Utilisateurs',
    className: 'customers-17',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States115Data,
};

const iconsNavigationIcon12States116Data = {
    src: '/img/fontawsome--bookmark--10@1x.png',
    className: 'icons-navigation-icon-12-states-38',
};

const sidebarMenuItem77Data = {
    name: 'Thèmes articles',
    className: 'thmes-articles-17',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States116Data,
};

const iconsNavigationIcon12States117Data = {
    src: '/img/ic-invoice-10@1x.png',
    className: 'icons-navigation-icon-12-states-5',
};

const articles16Data = {
    className: 'articles-15',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States117Data,
};

const tradingCrypto86Data = {
    iconPencil: '/img/fontawsome--pen--10@1x.png',
    name: 'Trading & Crypto',
    className: 'trading-crypto-14',
};

const tradingCrypto87Data = {
    iconPencil: '/img/fontawsome--robot--10@1x.png',
    name: 'Bot Trading',
    className: 'bot-trading-17',
};

const tradingCrypto88Data = {
    iconPencil: '/img/fontawsome--bitcoin--11@1x.png',
    name: 'Crypto Wallet',
    className: 'crypto-wallet-17',
};

const tradingCrypto89Data = {
    iconPencil: '/img/fontawsome--handshake--10@1x.png',
    name: 'Broker',
    className: 'broker-16',
};

const tradingCrypto90Data = {
    iconPencil: '/img/fontawsome--globe-europe--10@1x.png',
    name: 'Pays',
    className: 'pays-17',
};

const gestionAbonnements4Data = {
    children: 'Gestion Abonnements',
};

const gestionAbonnements5Data = {
    children: 'Code promo',
    className: 'code-promo-2',
};

const abonnement42Data = {
    overlapGroup: '/img/frame-12@1x.png',
    iconMaterialPayment: '/img/icon-material-payment-15@1x.png',
    name1: 'Abonnement',
    iconIonicIosArrowDown: '/img/icon-ionic-ios-arrow-down-10@1x.png',
    essaiGratuit: '/img/frame-11@1x.png',
    name2: 'Essai gratuit',
    codeGratuit: '/img/frame-11@1x.png',
    name3: 'Code gratuit',
    gestionAbonnements1Props: gestionAbonnements4Data,
    gestionAbonnements2Props: gestionAbonnements5Data,
};

const iconsNavigationIcon12States118Data = {
    src: '/img/ic-setting-11@1x.png',
    className: 'icons-navigation-icon-12-states-5',
};

const sidebarMenuItem78Data = {
    name: 'Settings',
    className: 'settings-17',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States118Data,
};

const filtre17Data = {
    name: 'Etat',
    className: 'filtre-16',
};

const filtre18Data = {
    name: 'Utiliser',
    className: 'filtre-17',
};

const gridTable2Data = {
    name1: 'Code',
    name2: 'Réduction',
    name3: 'Abonnement',
    name4: 'Nombre d’utilisation',
    name5: 'Etat (Actif/Désactiver)',
    className: 'grid-table-7',
};

const abonnementCodePromoData = {
    analytics: 'Code Promo',
    name1: 'Rechercher…',
    name2: 'Novice',
    name3: '50%',
    name4: 'Tous',
    name5: '0',
    membre: '/img/fontawsome--check-square--10@1x.png',
    fontawsomePen: '/img/fontawsome--pen--12@1x.png',
    iconClose: '/img/fontawsome--times--10@1x.png',
    topNavigationProps: topNavigation14Data,
    sidebarMenuItem1Props: sidebarMenuItem75Data,
    sidebarMenuItem2Props: sidebarMenuItem76Data,
    sidebarMenuItem3Props: sidebarMenuItem77Data,
    articlesProps: articles16Data,
    tradingCrypto1Props: tradingCrypto86Data,
    tradingCrypto2Props: tradingCrypto87Data,
    tradingCrypto3Props: tradingCrypto88Data,
    tradingCrypto4Props: tradingCrypto89Data,
    tradingCrypto5Props: tradingCrypto90Data,
    abonnement4Props: abonnement42Data,
    sidebarMenuItem4Props: sidebarMenuItem78Data,
    filtre1Props: filtre17Data,
    filtre2Props: filtre18Data,
    gridTableProps: gridTable2Data,
};

const icSearch7Data = {
    className: 'x00-general-01-icons-5',
};

const topNavigationSearch27Data = {
    icSearchProps: icSearch7Data,
};

const usersAvatarPhoto2States23Data = {
    image: '/img/image-14@1x.png',
    className: 'users-avatar-photo-2-states-21',
};

const userGroup20Data = {
    usersAvatarPhoto2StatesProps: usersAvatarPhoto2States23Data,
};

const topNavigation26Data = {
    groupe2: '/img/groupe-1-12@1x.png',
    className: 'top-navigation-2',
    topNavigationSearch2Props: topNavigationSearch27Data,
    userGroupProps: userGroup20Data,
};

const iconsNavigationIcon12States119Data = {
    src: '/img/ic-home-10@1x.png',
    className: 'icons-navigation-icon-12-states-5',
};

const sidebarMenuItem79Data = {
    name: 'Home',
    className: 'home-18',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States119Data,
};

const iconsNavigationIcon12States120Data = {
    src: '/img/ic-users-11@1x.png',
    className: 'icons-navigation-icon-12-states-5',
};

const sidebarMenuItem80Data = {
    name: 'Utilisateurs',
    className: 'customers-18',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States120Data,
};

const iconsNavigationIcon12States121Data = {
    src: '/img/fontawsome--bookmark--10@1x.png',
    className: 'icons-navigation-icon-12-states-39',
};

const sidebarMenuItem81Data = {
    name: 'Thèmes articles',
    className: 'thmes-articles-18',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States121Data,
};

const iconsNavigationIcon12States122Data = {
    src: '/img/ic-invoice-10@1x.png',
    className: 'icons-navigation-icon-12-states-5',
};

const articles17Data = {
    className: 'articles-16',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States122Data,
};

const tradingCrypto91Data = {
    iconPencil: '/img/fontawsome--pen--10@1x.png',
    name: 'Trading & Crypto',
    className: 'trading-crypto-15',
};

const tradingCrypto92Data = {
    iconPencil: '/img/fontawsome--robot--10@1x.png',
    name: 'Bot Trading',
    className: 'bot-trading-18',
};

const tradingCrypto93Data = {
    iconPencil: '/img/fontawsome--bitcoin--11@1x.png',
    name: 'Crypto Wallet',
    className: 'crypto-wallet-18',
};

const tradingCrypto94Data = {
    iconPencil: '/img/fontawsome--handshake--10@1x.png',
    name: 'Broker',
    className: 'broker-17',
};

const tradingCrypto95Data = {
    iconPencil: '/img/fontawsome--globe-europe--10@1x.png',
    name: 'Pays',
    className: 'pays-18',
};

const gestionAbonnements6Data = {
    children: 'Gestion Abonnements',
};

const gestionAbonnements7Data = {
    children: 'Code promo',
    className: 'code-promo-3',
};

const essaiGratuit3Data = {
    name: 'Essai gratuit',
    className: '',
};

const essaiGratuit4Data = {
    name: 'Code gratuit',
    className: 'code-gratuit-2',
};

const abonnement222Data = {
    overlapGroup: '/img/frame-12@1x.png',
    gestionAbonnements1Props: gestionAbonnements6Data,
    gestionAbonnements2Props: gestionAbonnements7Data,
    essaiGratuit1Props: essaiGratuit3Data,
    essaiGratuit2Props: essaiGratuit4Data,
};

const iconsNavigationIcon12States123Data = {
    src: '/img/ic-setting-11@1x.png',
    className: 'icons-navigation-icon-12-states-5',
};

const sidebarMenuItem82Data = {
    name: 'Settings',
    className: 'settings-18',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States123Data,
};

const groupe393422Data = {
    children: 'Créer code promo',
    className: '',
};

const buttonsBtnTextIcon821Data = {
    groupe3934Props: groupe393422Data,
};

const titre9Data = {
    children: 'Informations',
    className: 'titre-7',
};

const iDFixe30Data = {
    idUser: 'Nom',
    number: 'TEST30',
    ligne6: '/img/ligne-6-1@1x.png',
    className: 'nom-3',
};

const iDFixe31Data = {
    idUser: 'Réduction en %',
    number: '30',
    ligne6: '/img/ligne-6-1@1x.png',
    className: 'rduction',
};

const bestSeller5Data = {
    children: 'Actif',
    className: 'renouvellement-5',
};

const type4Data = {
    type: 'Abonnement',
    mensuel: 'Choisir',
    className: 'abonnement-15',
};

const abonnement422Data = {
    typeProps: type4Data,
};

const abonnementCodePromoCrerData = {
    analytics: 'Code promo',
    rductionFixe: 'Réduction fixe',
    ligne6: '/img/ligne-6-1@1x.png',
    topNavigation2Props: topNavigation26Data,
    sidebarMenuItem1Props: sidebarMenuItem79Data,
    sidebarMenuItem2Props: sidebarMenuItem80Data,
    sidebarMenuItem3Props: sidebarMenuItem81Data,
    articlesProps: articles17Data,
    tradingCrypto1Props: tradingCrypto91Data,
    tradingCrypto2Props: tradingCrypto92Data,
    tradingCrypto3Props: tradingCrypto93Data,
    tradingCrypto4Props: tradingCrypto94Data,
    tradingCrypto5Props: tradingCrypto95Data,
    abonnement2Props: abonnement222Data,
    sidebarMenuItem4Props: sidebarMenuItem82Data,
    buttonsBtnTextIcon8Props: buttonsBtnTextIcon821Data,
    titreProps: titre9Data,
    iDFixe1Props: iDFixe30Data,
    iDFixe2Props: iDFixe31Data,
    bestSellerProps: bestSeller5Data,
    abonnement4Props: abonnement422Data,
};

const topNavigationSearch16Data = {
    color: '/img/color-10@1x.png',
    className: 'top-navigation-search-15',
};

const usersAvatarPhoto2States24Data = {
    image: '/img/image-22@1x.png',
    className: 'users-avatar-photo-2-states-22',
};

const userGroup21Data = {
    usersAvatarPhoto2StatesProps: usersAvatarPhoto2States24Data,
};

const topNavigation15Data = {
    groupe2: '/img/groupe-1-20@1x.png',
    className: 'top-navigation-2',
    topNavigationSearchProps: topNavigationSearch16Data,
    userGroupProps: userGroup21Data,
};

const iconsNavigationIcon12States124Data = {
    src: '/img/ic-home-10@1x.png',
    className: 'icons-navigation-icon-12-states-5',
};

const sidebarMenuItem83Data = {
    name: 'Home',
    className: 'home-19',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States124Data,
};

const iconsNavigationIcon12States125Data = {
    src: '/img/ic-users-11@1x.png',
    className: 'icons-navigation-icon-12-states-5',
};

const sidebarMenuItem84Data = {
    name: 'Utilisateurs',
    className: 'customers-19',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States125Data,
};

const iconsNavigationIcon12States126Data = {
    src: '/img/fontawsome--bookmark--10@1x.png',
    className: 'icons-navigation-icon-12-states-40',
};

const sidebarMenuItem85Data = {
    name: 'Thèmes articles',
    className: 'thmes-articles-19',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States126Data,
};

const iconsNavigationIcon12States127Data = {
    src: '/img/ic-invoice-10@1x.png',
    className: 'icons-navigation-icon-12-states-5',
};

const articles18Data = {
    className: 'articles-17',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States127Data,
};

const tradingCrypto96Data = {
    iconPencil: '/img/fontawsome--pen--10@1x.png',
    name: 'Trading & Crypto',
    className: 'trading-crypto-16',
};

const tradingCrypto97Data = {
    iconPencil: '/img/fontawsome--robot--10@1x.png',
    name: 'Bot Trading',
    className: 'bot-trading-19',
};

const tradingCrypto98Data = {
    iconPencil: '/img/fontawsome--bitcoin--11@1x.png',
    name: 'Crypto Wallet',
    className: 'crypto-wallet-19',
};

const tradingCrypto99Data = {
    iconPencil: '/img/fontawsome--handshake--10@1x.png',
    name: 'Broker',
    className: 'broker-18',
};

const tradingCrypto100Data = {
    iconPencil: '/img/fontawsome--globe-europe--10@1x.png',
    name: 'Pays',
    className: 'pays-19',
};

const gestionAbonnements8Data = {
    children: 'Gestion Abonnements',
};

const gestionAbonnements9Data = {
    children: 'Code promo',
    className: 'code-promo-4',
};

const essaiGratuit5Data = {
    name: 'Essai gratuit',
    className: 'essai-gratuit-2',
};

const essaiGratuit6Data = {
    name: 'Code gratuit',
    className: 'code-gratuit-3',
};

const abonnement223Data = {
    overlapGroup: '/img/frame-12@1x.png',
    gestionAbonnements1Props: gestionAbonnements8Data,
    gestionAbonnements2Props: gestionAbonnements9Data,
    essaiGratuit1Props: essaiGratuit5Data,
    essaiGratuit2Props: essaiGratuit6Data,
};

const iconsNavigationIcon12States128Data = {
    src: '/img/ic-setting-11@1x.png',
    className: 'icons-navigation-icon-12-states-5',
};

const sidebarMenuItem86Data = {
    name: 'Settings',
    className: 'settings-19',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States128Data,
};

const filtre19Data = {
    name: 'Etat',
    className: 'filtre-18',
};

const buttonsBtnTextIcon83Data = {
    className: 'buttons-btn-text-icon-41',
};

const groupe39332Data = {
    children: 'Générer code',
    className: 'groupe-393-12',
};

const buttonsBtnTextIcon72Data = {
    className: 'buttons-btn-text-icon-39',
    groupe3933Props: groupe39332Data,
};

const abonnementEssaiGratuitData = {
    analytics: 'Essai Gratuit',
    name1: 'Rechercher…',
    name2: 'Nom Campagne',
    name3: 'Durée d’essai',
    name4: 'Type',
    name5: 'Etat (Actif/Désactiver)',
    name6: 'Action',
    name7: 'Broker (30j)',
    name8: '30',
    name9: 'Mensuel',
    membre: '/img/fontawsome--check-square--10@1x.png',
    fontawsomePen: '/img/fontawsome--pen--12@1x.png',
    fontawsomeTimes: '/img/fontawsome--times--10@1x.png',
    topNavigationProps: topNavigation15Data,
    sidebarMenuItem1Props: sidebarMenuItem83Data,
    sidebarMenuItem2Props: sidebarMenuItem84Data,
    sidebarMenuItem3Props: sidebarMenuItem85Data,
    articlesProps: articles18Data,
    tradingCrypto1Props: tradingCrypto96Data,
    tradingCrypto2Props: tradingCrypto97Data,
    tradingCrypto3Props: tradingCrypto98Data,
    tradingCrypto4Props: tradingCrypto99Data,
    tradingCrypto5Props: tradingCrypto100Data,
    abonnement2Props: abonnement223Data,
    sidebarMenuItem4Props: sidebarMenuItem86Data,
    filtreProps: filtre19Data,
    buttonsBtnTextIcon3Props: buttonsBtnTextIcon83Data,
    buttonsBtnTextIcon7Props: buttonsBtnTextIcon72Data,
};

const icSearch8Data = {
    className: 'x00-general-01-icons-6',
};

const topNavigationSearch28Data = {
    icSearchProps: icSearch8Data,
};

const usersAvatarPhoto2States25Data = {
    image: '/img/image-23@1x.png',
    className: 'users-avatar-photo-2-states-23',
};

const userGroup22Data = {
    usersAvatarPhoto2StatesProps: usersAvatarPhoto2States25Data,
};

const topNavigation27Data = {
    groupe2: '/img/groupe-1-21@1x.png',
    className: 'top-navigation-2',
    topNavigationSearch2Props: topNavigationSearch28Data,
    userGroupProps: userGroup22Data,
};

const iconsNavigationIcon12States129Data = {
    src: '/img/ic-home-10@1x.png',
    className: 'icons-navigation-icon-12-states-5',
};

const sidebarMenuItem87Data = {
    name: 'Home',
    className: 'home-20',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States129Data,
};

const iconsNavigationIcon12States130Data = {
    src: '/img/ic-users-11@1x.png',
    className: 'icons-navigation-icon-12-states-5',
};

const sidebarMenuItem88Data = {
    name: 'Utilisateurs',
    className: 'customers-20',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States130Data,
};

const iconsNavigationIcon12States131Data = {
    src: '/img/fontawsome--bookmark--10@1x.png',
    className: 'icons-navigation-icon-12-states-41',
};

const sidebarMenuItem89Data = {
    name: 'Thèmes articles',
    className: 'thmes-articles-20',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States131Data,
};

const iconsNavigationIcon12States132Data = {
    src: '/img/ic-invoice-10@1x.png',
    className: 'icons-navigation-icon-12-states-5',
};

const articles19Data = {
    className: 'articles-18',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States132Data,
};

const tradingCrypto101Data = {
    iconPencil: '/img/fontawsome--pen--10@1x.png',
    name: 'Trading & Crypto',
    className: 'trading-crypto-17',
};

const tradingCrypto102Data = {
    iconPencil: '/img/fontawsome--robot--10@1x.png',
    name: 'Bot Trading',
    className: 'bot-trading-20',
};

const tradingCrypto103Data = {
    iconPencil: '/img/fontawsome--bitcoin--11@1x.png',
    name: 'Crypto Wallet',
    className: 'crypto-wallet-20',
};

const tradingCrypto104Data = {
    iconPencil: '/img/fontawsome--handshake--10@1x.png',
    name: 'Broker',
    className: 'broker-19',
};

const tradingCrypto105Data = {
    iconPencil: '/img/fontawsome--globe-europe--10@1x.png',
    name: 'Pays',
    className: 'pays-20',
};

const gestionAbonnements10Data = {
    children: 'Gestion Abonnements',
};

const gestionAbonnements11Data = {
    children: 'Code promo',
    className: 'code-promo-5',
};

const essaiGratuit7Data = {
    name: 'Essai gratuit',
    className: 'essai-gratuit-3',
};

const essaiGratuit8Data = {
    name: 'Code gratuit',
    className: 'code-gratuit-4',
};

const abonnement224Data = {
    overlapGroup: '/img/frame-12@1x.png',
    gestionAbonnements1Props: gestionAbonnements10Data,
    gestionAbonnements2Props: gestionAbonnements11Data,
    essaiGratuit1Props: essaiGratuit7Data,
    essaiGratuit2Props: essaiGratuit8Data,
};

const iconsNavigationIcon12States133Data = {
    src: '/img/ic-setting-11@1x.png',
    className: 'icons-navigation-icon-12-states-5',
};

const sidebarMenuItem90Data = {
    name: 'Settings',
    className: 'settings-20',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States133Data,
};

const groupe393423Data = {
    children: 'Créer essai gratuit',
    className: 'groupe-393-15',
};

const buttonsBtnTextIcon822Data = {
    className: 'buttons-btn-text-icon-43',
    groupe3934Props: groupe393423Data,
};

const titre10Data = {
    children: 'Informations',
    className: 'titre-8',
};

const iDFixe32Data = {
    idUser: 'Prix',
    number: '0',
    ligne6: '/img/ligne-6-1@1x.png',
    className: 'prix-3',
};

const iDFixe33Data = {
    idUser: 'Durée d’essai',
    number: '30',
    ligne6: '/img/ligne-6-1@1x.png',
    className: 'dure-3',
};

const bestSeller6Data = {
    children: 'Actif',
    className: 'visible-2',
};

const type5Data = {
    type: 'Type',
    mensuel: 'Mensuel',
    className: 'type-3',
};

const type6Data = {
    type: 'Sélectionner Abonnement',
    mensuel: 'Choisir',
    className: 'abonnement-16',
};

const abonnement423Data = {
    className: 'abonnement-21',
    typeProps: type6Data,
};

const iDFixe34Data = {
    idUser: 'Nom de la campagne (Essai gratuit)',
    number: 'Broker (30j)',
    ligne6: '/img/ligne-6-1@1x.png',
    className: 'prix-4',
};

const abonnementEssaiGratuitCrerEssaiGratData = {
    analytics: 'Créer Essai Gratuit (unique)',
    topNavigation2Props: topNavigation27Data,
    sidebarMenuItem1Props: sidebarMenuItem87Data,
    sidebarMenuItem2Props: sidebarMenuItem88Data,
    sidebarMenuItem3Props: sidebarMenuItem89Data,
    articlesProps: articles19Data,
    tradingCrypto1Props: tradingCrypto101Data,
    tradingCrypto2Props: tradingCrypto102Data,
    tradingCrypto3Props: tradingCrypto103Data,
    tradingCrypto4Props: tradingCrypto104Data,
    tradingCrypto5Props: tradingCrypto105Data,
    abonnement2Props: abonnement224Data,
    sidebarMenuItem4Props: sidebarMenuItem90Data,
    buttonsBtnTextIcon8Props: buttonsBtnTextIcon822Data,
    titreProps: titre10Data,
    iDFixe1Props: iDFixe32Data,
    iDFixe2Props: iDFixe33Data,
    bestSellerProps: bestSeller6Data,
    typeProps: type5Data,
    abonnement4Props: abonnement423Data,
    iDFixe3Props: iDFixe34Data,
};

const topNavigationSearch17Data = {
    color: '/img/color-10@1x.png',
    className: 'top-navigation-search-16',
};

const usersAvatarPhoto2States26Data = {
    image: '/img/image-22@1x.png',
    className: 'users-avatar-photo-2-states-24',
};

const userGroup23Data = {
    usersAvatarPhoto2StatesProps: usersAvatarPhoto2States26Data,
};

const topNavigation16Data = {
    groupe2: '/img/groupe-1-20@1x.png',
    className: 'top-navigation-2',
    topNavigationSearchProps: topNavigationSearch17Data,
    userGroupProps: userGroup23Data,
};

const iconsNavigationIcon12States134Data = {
    src: '/img/ic-home-10@1x.png',
    className: 'icons-navigation-icon-12-states-5',
};

const sidebarMenuItem91Data = {
    name: 'Home',
    className: 'home-21',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States134Data,
};

const iconsNavigationIcon12States135Data = {
    src: '/img/ic-users-11@1x.png',
    className: 'icons-navigation-icon-12-states-5',
};

const sidebarMenuItem92Data = {
    name: 'Utilisateurs',
    className: 'customers-21',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States135Data,
};

const iconsNavigationIcon12States136Data = {
    src: '/img/fontawsome--bookmark--10@1x.png',
    className: 'icons-navigation-icon-12-states-42',
};

const sidebarMenuItem93Data = {
    name: 'Thèmes articles',
    className: 'thmes-articles-21',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States136Data,
};

const iconsNavigationIcon12States137Data = {
    src: '/img/ic-invoice-10@1x.png',
    className: 'icons-navigation-icon-12-states-5',
};

const articles20Data = {
    className: 'articles-19',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States137Data,
};

const tradingCrypto106Data = {
    iconPencil: '/img/fontawsome--pen--10@1x.png',
    name: 'Trading & Crypto',
    className: 'trading-crypto-18',
};

const tradingCrypto107Data = {
    iconPencil: '/img/fontawsome--robot--10@1x.png',
    name: 'Bot Trading',
    className: 'bot-trading-21',
};

const tradingCrypto108Data = {
    iconPencil: '/img/fontawsome--bitcoin--11@1x.png',
    name: 'Crypto Wallet',
    className: 'crypto-wallet-21',
};

const tradingCrypto109Data = {
    iconPencil: '/img/fontawsome--handshake--10@1x.png',
    name: 'Broker',
    className: 'broker-20',
};

const tradingCrypto110Data = {
    iconPencil: '/img/fontawsome--globe-europe--10@1x.png',
    name: 'Pays',
    className: 'pays-21',
};

const essaiGratuit9Data = {
    name: 'Code gratuit',
    className: 'code-gratuit-5',
};

const abonnement72Data = {
    overlapGroup: '/img/frame-37@1x.png',
    iconMaterialPayment: '/img/icon-material-payment-15@1x.png',
    name1: 'Abonnement',
    iconIonicIosArrowDown: '/img/icon-ionic-ios-arrow-down-10@1x.png',
    name2: 'Gestion Abonnements',
    name3: 'Code promo',
    essaiGratuit: '/img/frame-11@1x.png',
    name4: 'Essai gratuit',
    essaiGratuitProps: essaiGratuit9Data,
};

const iconsNavigationIcon12States138Data = {
    src: '/img/ic-setting-11@1x.png',
    className: 'icons-navigation-icon-12-states-5',
};

const sidebarMenuItem94Data = {
    name: 'Settings',
    className: 'settings-21',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States138Data,
};

const filtre20Data = {
    name: 'Utiliser',
    className: 'filtre-19',
};

const iconFeatherCopy2Data = {
    className: 'icon-feather-copy-1',
};

const iconFeatherCopy3Data = {
    className: 'icon-feather-copy-2',
};

const abonnementCodeGratuitData = {
    analytics1: 'Code gratuit (unique)',
    analytics2: 'Phrase à copier',
    phrase: 'Phrase',
    tonCodePromoCo: 'Ton code promo : {code} à rentrer après avoir sélectionner l’offre intermédiaire sur le site',
    ligne6: '/img/ligne-6-67@1x.png',
    name1: 'Rechercher…',
    name2: 'Code unique',
    name3: 'Campagne',
    name4: 'Création',
    name5: 'Utiliser',
    name6: 'Utiliser par',
    name7: 'Action',
    name8: 'XOvE39b',
    name9: 'Broker (30j)',
    name10: '22/03/22',
    membre1: '/img/fontawsome--check-square--10@1x.png',
    name11: 'elodie@elodie.fr',
    fontawsomePen1: '/img/fontawsome--pen--12@1x.png',
    iconClose1: '/img/fontawsome--times--10@1x.png',
    name12: 'XOvE39b',
    name13: 'Broker (30j)',
    name14: '22/03/22',
    membre2: '/img/fontawsome--window-close--12@1x.png',
    fontawsomePen2: '/img/fontawsome--pen--12@1x.png',
    iconClose2: '/img/fontawsome--times--10@1x.png',
    topNavigationProps: topNavigation16Data,
    sidebarMenuItem1Props: sidebarMenuItem91Data,
    sidebarMenuItem2Props: sidebarMenuItem92Data,
    sidebarMenuItem3Props: sidebarMenuItem93Data,
    articlesProps: articles20Data,
    tradingCrypto1Props: tradingCrypto106Data,
    tradingCrypto2Props: tradingCrypto107Data,
    tradingCrypto3Props: tradingCrypto108Data,
    tradingCrypto4Props: tradingCrypto109Data,
    tradingCrypto5Props: tradingCrypto110Data,
    abonnement7Props: abonnement72Data,
    sidebarMenuItem4Props: sidebarMenuItem94Data,
    filtreProps: filtre20Data,
    iconFeatherCopy1Props: iconFeatherCopy2Data,
    iconFeatherCopy2Props: iconFeatherCopy3Data,
};
