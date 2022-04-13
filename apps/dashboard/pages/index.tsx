import React from 'react';
import type { NextPage } from 'next';
import Home, { homeData } from './Home';

export const App: NextPage = () => {
    return (
        <Home data={homeData} />
        // <Router location={'/'} navigator={}>
        //     <Switch>
        //         {/*<Route path="/:path(|ui-inventory)">*/}
        //         {/*    <UIInventory {...uIInventoryData} />*/}
        //         {/*</Route>*/}
        //         <Route path="/home">
        //             <Home {...homeData} />
        //         </Route>
        //         <Route path="/utilisateurs">
        //             <Utilisateurs {...utilisateursData} />
        //         </Route>
        //         <Route path="/details-utilisateurs">
        //             <DtailsUtilisateurs {...dtailsUtilisateursData} />
        //         </Route>
        //         <Route path="/themes-articles">
        //             <ThmesArticles {...thmesArticlesData} />
        //         </Route>
        //         <Route path="/themes-articles-creation">
        //             <ThmesArticlesCration {...thmesArticlesCrationData} />
        //         </Route>
        //         <Route path="/articles-historique-articles">
        //             <ArticlesHistoriqueArticles {...articlesHistoriqueArticlesData} />
        //         </Route>
        //         <Route path="/articles-creer-un-article">
        //             <ArticlesCrerUnArticle {...articlesCrerUnArticleData} />
        //         </Route>
        //         <Route path="/articles-creer-un-article-1">
        //             <ArticlesCrerUnArticle1 {...articlesCrerUnArticle1Data} />
        //         </Route>
        //         <Route path="/trading-crypto">
        //             <TradingCrypto3 {...tradingCrypto310Data} />
        //         </Route>
        //         <Route path="/bot-trading">
        //             <BotTrading {...botTradingData} />
        //         </Route>
        //         <Route path="/crypto-wallet">
        //             <CryptoWallet {...cryptoWalletData} />
        //         </Route>
        //         <Route path="/broker">
        //             <Broker {...brokerData} />
        //         </Route>
        //         <Route path="/broker-creer-un-broker">
        //             <BrokerCrerUnBroker {...brokerCrerUnBrokerData} />
        //         </Route>
        //         <Route path="/pays">
        //             <Pays {...paysData} />
        //         </Route>
        //         <Route path="/parametres">
        //             <Paramtres {...paramtresData} />
        //         </Route>
        //         <Route path="/abonnement-gestion-abonnements">
        //             <AbonnementGestionAbonnements {...abonnementGestionAbonnementsData} />
        //         </Route>
        //         <Route path="/abonnement-creer-un-abonnement">
        //             <AbonnementCrerUnAbonnement {...abonnementCrerUnAbonnementData} />
        //         </Route>
        //         <Route path="/abonnement-creer-un-abonnement-periode-dessai">
        //             <AbonnementCrerUnAbonnementpriodeDes {...abonnementCrerUnAbonnementpriodeDesData} />
        //         </Route>
        //         <Route path="/abonnement-code-promo">
        //             <AbonnementCodePromo {...abonnementCodePromoData} />
        //         </Route>
        //         <Route path="/abonnement-code-promo-creer">
        //             <AbonnementCodePromoCrer {...abonnementCodePromoCrerData} />
        //         </Route>
        //         <Route path="/abonnement-essai-gratuit">
        //             <AbonnementEssaiGratuit {...abonnementEssaiGratuitData} />
        //         </Route>
        //         <Route path="/abonnement-essai-gratuit-creer-essai-gratuit">
        //             <AbonnementEssaiGratuitCrerEssaiGrat {...abonnementEssaiGratuitCrerEssaiGratData} />
        //         </Route>
        //         <Route path="/abonnement-code-gratuit">
        //             <AbonnementCodeGratuit {...abonnementCodeGratuitData} />
        //         </Route>
        //     </Switch>
        // </Router>
    );
};

export default App;

export const colour1Data = {
    x665Eff: '#F5F6FA',
    rgb10294225: 'RGB (245,246,250)',
};

export const colour2Data = {
    x665Eff: '#E6E9F4',
    rgb10294225: 'RGB (230,233,244)',
    className: 'colour-1',
};

export const colour3Data = {
    x665Eff: '#D7DBEC',
    rgb10294225: 'RGB (215,219,236)',
    className: 'colour-2',
};

export const colour4Data = {
    x665Eff: '#7E84A3',
    rgb10294225: 'RGB (126,132,163)',
    className: 'colour-3',
};

export const colour5Data = {
    x665Eff: '#131523',
    rgb10294225: 'RGB (19,21,35)',
    className: 'colour-4',
};

export const colour6Data = {
    x665Eff: '#0058FF',
    rgb10294225: 'RGB (0,88,255)',
    className: 'colour-5',
};

export const colour7Data = {
    x665Eff: '#F0142F',
    rgb10294225: 'RGB (240,20,47)',
    className: 'colour-6',
};

export const colour8Data = {
    x665Eff: '#57B8FF',
    rgb10294225: 'RGB (87,184,255)',
    className: 'colour-7',
};

export const colour9Data = {
    x665Eff: '#FFC700',
    rgb10294225: 'RGB (255,199,0)',
    className: 'colour-8',
};

export const colour10Data = {
    x665Eff: '#F99600',
    rgb10294225: 'RGB (249,150,0)',
    className: 'colour-9',
};

export const colour11Data = {
    x665Eff: '#21D59B',
    rgb10294225: 'RGB (33,213,155)',
    className: 'colour-10',
};

export const colour12Data = {
    x665Eff: '#D5D7E3',
    rgb10294225: 'RGB (213,215,227)',
    className: 'colour-11',
};

export const iconsNavigationIcon12States1Data = {
    src: '/img/ic-home-10@1x.png',
};

export const iconsNavigationIcon12States2Data = {
    src: '/img/ic-inbox-1@1x.png',
    className: 'icons-navigation-icon-12-states-1',
};

export const iconsNavigationIcon12States3Data = {
    src: '/img/ic-users-11@1x.png',
    className: 'icons-navigation-icon-12-states-2',
};

export const iconsNavigationIcon12States4Data = {
    src: '/img/ic-message@1x.png',
    className: 'icons-navigation-icon-12-states-3',
};

export const iconsNavigationIcon12States5Data = {
    src: '/img/ic-calendar-1@1x.png',
    className: 'icons-navigation-icon-12-states-4',
};

export const iconsNavigationIcon12States6Data = {
    src: '/img/ic-bell@1x.png',
    className: 'icons-navigation-icon-12-states-5',
};

export const iconsNavigationIcon12States7Data = {
    src: '/img/ic-help@1x.png',
    className: 'icons-navigation-icon-12-states-6',
};

export const iconsNavigationIcon12States8Data = {
    src: '/img/ic-invoice-10@1x.png',
    className: 'icons-navigation-icon-12-states-7',
};

export const iconsNavigationIcon12States9Data = {
    src: '/img/ic-file-download-1@1x.png',
    className: 'icons-navigation-icon-12-states-5',
};

export const iconsNavigationIcon12States10Data = {
    src: '/img/ic-calendar-1@1x.png',
    className: 'icons-navigation-icon-12-states-8',
};

export const iconsNavigationIcon12States11Data = {
    src: '/img/ic-calendar-13@1x.png',
    className: 'icons-navigation-icon-12-states-9',
};

export const iconsNavigationIcon12States12Data = {
    src: '/img/ic-setting-11@1x.png',
    className: 'icons-navigation-icon-12-states-10',
};

export const iconsNavigationIcon12States13Data = {
    src: '/img/ic-home-10@1x.png',
    className: 'icons-navigation-icon-12-states-5',
};

export const sidebarMenuItem1Data = {
    name: 'Home',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States13Data,
};

export const iconsNavigationIcon12States49Data = {
    src: '/img/ic-users-11@1x.png',
    className: 'icons-navigation-icon-12-states-5',
};

export const sidebarMenuItem21Data = {
    name: 'Utilisateurs',
    className: 'customers-4',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States49Data,
};

export const iconsNavigationIcon12States14Data = {
    src: '/img/ic-home-10@1x.png',
    className: 'icons-navigation-icon-12-states-11',
};

export const iconsNavigationIcon12States15Data = {
    src: '/img/ic-home-10@1x.png',
    className: 'icons-navigation-icon-12-states-5',
};

export const sidebarMenuItem3Data = {
    name: 'Home',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States15Data,
};

export const tabGroupElementsRegularTab2States1Data = {
    children: 'Days',
};

export const tabGroupElementsRegularTab2States2Data = {
    children: 'Weeks',
    className: 'tab-group-_-elements-1',
};

export const tabGroupElementsRegularTab2States22Data = {
    children: 'Months',
};

export const iconsNavigationIcon12States16Data = {
    src: '/img/ic-file-download-1@1x.png',
    className: 'icons-navigation-icon-12-states-5',
};

export const buttonsBtnTextIcon1Data = {
    text: 'Button',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States16Data,
};

export const iconsChevronRightData = {
    iconsChevronRight: '/img/trac--397-1@1x.png',
    trac407: '/img/trac--407@1x.png',
};

export const buttonsBtnSmalTextData = {
    findOutMore: 'More Insights',
    iconsChevronRightProps: iconsChevronRightData,
};

export const tooltipPointerDownData = {
    bg: '/img/bg@1x.png',
    titlee: 'August 2020',
    x7501: '$49k',
    onlineSales1: 'Income',
    x7502: '$38k',
    onlineSales2: 'Expense',
};

export const tooltipPointerLeftData = {
    bg: '/img/bg-2@1x.png',
    titlee: 'June, 2019',
    x7501: '224',
    onlineSales1: 'New Customers',
    x7502: '224',
    onlineSales2: 'Women',
    x7503: '256',
    onlineSales3: 'Men',
};

export const usersAvatarPhoto2States1Data = {
    image: '/img/image-1@1x.png',
};

export const usersAvatarPhoto2States2Data = {
    children: 'SC',
};

export const topNavigationSearch1Data = {
    color: '/img/color-10@1x.png',
};

export const iconsNavigationIcon12States17Data = {
    src: '/img/chevron-left@1x.png',
    className: 'icons-navigation-icon-12-states-5',
};

export const paginationPageNumber2StatesData = {
    children: '1',
};

export const paginationPageNumber2States21Data = {
    children: '2',
};

export const paginationPageNumber2States22Data = {
    children: '3',
};

export const paginationPageNumber2States23Data = {
    children: '4',
};

export const paginationPageNumber2States24Data = {
    children: '…',
};

export const paginationPageNumber2States25Data = {
    children: '11',
};

export const paginationPageNumber2States26Data = {
    children: '12',
    className: 'pagination-page-number-2-states-3',
};

export const iconsNavigationIcon12States18Data = {
    src: '/img/chevron-right@1x.png',
    className: 'icons-chevron-right',
};

export const widgetsElementsChartMiniChart1Data = {
    chart: '/img/path-4-copy-6-3@1x.png',
    path4Copy8: '/img/path-4-copy-8@1x.png',
};

export const widgetsDataCardWithChartsData = {
    sales: 'Unique Purchases',
    x27632: '3,137',
    widgetsElementsChartMiniChartProps: widgetsElementsChartMiniChart1Data,
};

export const widgetsElementsPrice2Data = {
    className: 'widgets-_-elements-price-1',
};

export const iconsWidgetIllustration1Data = {
    src: '/img/refresh-1@1x.png',
};

export const widgetsDataCardWithIconsData = {
    sales: 'Total Sessions',
    x27632: '14k',
    widgetsElementsPriceProps: widgetsElementsPrice2Data,
    iconsWidgetIllustrationProps: iconsWidgetIllustration1Data,
};

export const widgetsElementsChartGraphLineBarData = {
    name: 'Jan',
};

export const widgetsElementsChartGraphDoubleBarData = {
    greenBar: '/img/green-bar@1x.png',
    blueBar: '/img/blue-bar@1x.png',
    month: 'Jan 20',
};

export const widgetsElementsChartGraphStackedBarData = {
    children: 'Jan',
};

export const legend1Data = {
    children: 'Online',
};

export const legend2Data = {
    children: 'Offline',
    className: 'legend-2',
};

export const usersAvatarPhoto2States3Data = {
    image: '/img/image-1@1x.png',
};

export const iconsNavigationIcon12States19Data = {
    src: '/img/ic-inbox-1@1x.png',
    className: 'icons-navigation-icon-12-states-12',
};

export const widgetsCustomerRowData = {
    customerId00222: 'Customer ID#01223',
    isabellaMoran: 'Mitchell Williamson',
    usersAvatarPhoto2StatesProps: usersAvatarPhoto2States3Data,
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States19Data,
};

export const widgetsTableTableHeaderData = {
    paymentNumber: 'CHANNELS',
    dateTime1: 'SESSIONS',
    dateTime2: 'BOUNCE RATE',
    amount1: 'TRAFFIC',
    amount2: 'SALES',
};

export const widgetsTableTableRow1Data = {
    paymentFrom10321: 'Direct',
    mar212019330Pm1: '45,759',
    mar212019330Pm2: '32.1%',
    x250001: '3.5%',
    x250002: '1765',
};

export const widgetsTableTableRow2Data = {
    paymentFrom10321: 'Call In',
    mar212019330Pm1: '89,298',
    mar212019330Pm2: '49.2%',
    x250001: '1.5%',
    x250002: '1856',
    className: 'row',
};

export const widgetsTableTableRow3Data = {
    paymentFrom10321: 'Paid search',
    mar212019330Pm1: '62,767',
    mar212019330Pm2: '9.3%',
    x250001: '6.0%',
    x250002: '1449',
    className: 'row-1',
};

export const widgetsTableTableRow4Data = {
    paymentFrom10321: 'Organic search',
    mar212019330Pm1: '123,879',
    mar212019330Pm2: '45.9%',
    x250001: '7.5%',
    x250002: '1432',
    className: 'row-2',
};

export const widgetsTableTableRow5Data = {
    paymentFrom10321: 'Email',
    mar212019330Pm1: '92,179',
    mar212019330Pm2: '48.2%',
    x250001: '4.2%',
    x250002: '2029',
    className: 'row-3',
};

export const widgetsTableTableRow6Data = {
    paymentFrom10321: 'Referal',
    mar212019330Pm1: '15,875',
    mar212019330Pm2: '31.1%',
    x250001: '3.2%',
    x250002: '1689',
    className: 'row-4',
};

export const widgetsTableTableRow7Data = {
    paymentFrom10321: 'Proposal',
    mar212019330Pm1: '92,179',
    mar212019330Pm2: '48.2%',
    x250001: '4.2%',
    x250002: '2029',
    className: 'row-5',
};

export const widgetsTableTableRow8Data = {
    paymentFrom10321: 'Marketing campaign',
    mar212019330Pm1: '102,768',
    mar212019330Pm2: '51.2%',
    x250001: '4.3%',
    x250002: '2456',
    className: 'row-6',
};

export const widgetsTableTableRow9Data = {
    paymentFrom10321: 'Partners',
    mar212019330Pm1: '45,759',
    mar212019330Pm2: '32.1%',
    x250001: '3.5%',
    x250002: '1765',
    className: 'row-7',
};

export const uIInventoryData = {
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

export const topNavigationSearch3Data = {
    color: '/img/color-10@1x.png',
    className: 'top-navigation-search-2',
};

export const usersAvatarPhoto2States5Data = {
    image: '/img/image-2@1x.png',
    className: 'users-avatar-photo-2-states-3',
};

export const userGroup2Data = {
    usersAvatarPhoto2StatesProps: usersAvatarPhoto2States5Data,
};

export const topNavigation1Data = {
    groupe2: '/img/groupe-1-1@1x.png',
    topNavigationSearchProps: topNavigationSearch3Data,
    userGroupProps: userGroup2Data,
};

export const iconsNavigationIcon12States27Data = {
    src: '/img/ic-home-10@1x.png',
    className: 'icons-navigation-icon-12-states-5',
};

export const sidebarMenuItem7Data = {
    name: 'Home',
    className: 'home',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States27Data,
};

export const iconsNavigationIcon12States28Data = {
    src: '/img/ic-users-7@1x.png',
    className: 'icons-navigation-icon-12-states-15',
};

export const sidebarMenuItem23Data = {
    name: 'Utilisateurs',
    className: 'customers-22',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States28Data,
};

export const iconsNavigationIcon12States29Data = {
    src: '/img/fontawsome--bookmark--10@1x.png',
    className: 'icons-navigation-icon-12-states-16',
};

export const sidebarMenuItem8Data = {
    name: 'Thèmes articles',
    className: 'thmes-articles-1',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States29Data,
};

export const iconsNavigationIcon12States30Data = {
    src: '/img/ic-invoice-10@1x.png',
    className: 'icons-navigation-icon-12-states-5',
};

export const articles2Data = {
    className: 'articles-1',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States30Data,
};

export const tradingCrypto6Data = {
    iconPencil: '/img/fontawsome--pen--10@1x.png',
    name: 'Trading & Crypto',
};

export const tradingCrypto7Data = {
    iconPencil: '/img/fontawsome--robot--10@1x.png',
    name: 'Bot Trading',
    className: 'bot-trading-1',
};

export const tradingCrypto8Data = {
    iconPencil: '/img/fontawsome--bitcoin--11@1x.png',
    name: 'Crypto Wallet',
    className: 'crypto-wallet-1',
};

export const tradingCrypto9Data = {
    iconPencil: '/img/fontawsome--handshake--10@1x.png',
    name: 'Broker',
    className: 'broker-1',
};

export const tradingCrypto10Data = {
    iconPencil: '/img/fontawsome--globe-europe--10@1x.png',
    name: 'Pays',
    className: 'pays-1',
};

export const iconsNavigationIcon12States31Data = {
    src: '/img/ic-setting-11@1x.png',
    className: 'icons-navigation-icon-12-states-5',
};

export const sidebarMenuItem9Data = {
    name: 'Settings',
    className: 'settings-1',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States31Data,
};

export const filtre1Data = {
    name: 'Membre',
};

export const filtre2Data = {
    name: 'Type abonnement',
    className: 'filtre-1',
};

export const filtre3Data = {
    name: 'Durée abonnement',
    className: 'filtre-2',
};

export const filtre4Data = {
    name: 'Abonnement résilier',
    className: 'filtre-3',
};

export const filtreDateData = {
    calendarEvent: '/img/calendar-event-1@1x.png',
    text: 'Jan, 2019 - Dec, 2019',
};

export const iconsNavigationIcon12States32Data = {
    src: '/img/ic-file-download-1@1x.png',
    className: 'icons-navigation-icon-12-states-5',
};

export const buttonsBtnTextIcon3Data = {
    text: 'Export',
    className: 'buttons-btn-text-icon-1',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States32Data,
};

export const icSearch2Data = {
    className: 'x00-general-01-icons',
};

export const topNavigationSearch22Data = {
    icSearchProps: icSearch2Data,
};

export const usersAvatarPhoto2States6Data = {
    image: '/img/image-4@1x.png',
    className: 'users-avatar-photo-2-states-4',
};

export const userGroup3Data = {
    usersAvatarPhoto2StatesProps: usersAvatarPhoto2States6Data,
};

export const topNavigation21Data = {
    groupe2: '/img/groupe-1-2@1x.png',
    topNavigationSearch2Props: topNavigationSearch22Data,
    userGroupProps: userGroup3Data,
};

export const iconsNavigationIcon12States33Data = {
    src: '/img/ic-home-10@1x.png',
    className: 'icons-navigation-icon-12-states-5',
};

export const sidebarMenuItem10Data = {
    name: 'Home',
    className: 'home-1',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States33Data,
};

export const iconsNavigationIcon12States34Data = {
    src: '/img/ic-users-7@1x.png',
    className: 'icons-navigation-icon-12-states-17',
};

export const sidebarMenuItem24Data = {
    name: 'Utilisateurs',
    className: 'customers-23',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States34Data,
};

export const iconsNavigationIcon12States35Data = {
    src: '/img/fontawsome--bookmark--10@1x.png',
    className: 'icons-navigation-icon-12-states-18',
};

export const sidebarMenuItem11Data = {
    name: 'Thèmes articles',
    className: 'thmes-articles-2',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States35Data,
};

export const iconsNavigationIcon12States36Data = {
    src: '/img/ic-invoice-10@1x.png',
    className: 'icons-navigation-icon-12-states-5',
};

export const articles3Data = {
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States36Data,
};

export const tradingCrypto11Data = {
    iconPencil: '/img/fontawsome--pen--10@1x.png',
    name: 'Trading & Crypto',
};

export const tradingCrypto12Data = {
    iconPencil: '/img/fontawsome--robot--10@1x.png',
    name: 'Bot Trading',
    className: 'bot-trading-2',
};

export const tradingCrypto13Data = {
    iconPencil: '/img/fontawsome--bitcoin--11@1x.png',
    name: 'Crypto Wallet',
    className: 'crypto-wallet-2',
};

export const tradingCrypto14Data = {
    iconPencil: '/img/fontawsome--handshake--10@1x.png',
    name: 'Broker',
    className: 'broker-2',
};

export const tradingCrypto15Data = {
    iconPencil: '/img/fontawsome--globe-europe--10@1x.png',
    name: 'Pays',
    className: 'pays-2',
};

export const iconsNavigationIcon12States37Data = {
    src: '/img/ic-setting-11@1x.png',
    className: 'icons-navigation-icon-12-states-5',
};

export const sidebarMenuItem12Data = {
    name: 'Settings',
    className: 'settings-2',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States37Data,
};

export const buttonsBtnTextIcon32Data = {
    children: 'Sauvegarder les modifications',
};

export const groupe3931Data = {
    children: 'Modifier mot de passe',
    className: '',
};

export const buttonsBtnTextIcon41Data = {
    groupe393Props: groupe3931Data,
};

export const buttonsBtnTextIcon33Data = {
    children: 'Rendre membre l’user',
    className: 'buttons-btn-text-icon-4',
};

export const groupe3932Data = {
    children: 'Annuler l’abonnement',
    className: 'groupe-393-4',
};

export const buttonsBtnTextIcon42Data = {
    className: 'buttons-btn-text-icon-23',
    groupe393Props: groupe3932Data,
};

export const buttonsBtnTextIcon34Data = {
    children: 'Supprimer',
    className: 'buttons-btn-text-icon-5',
};

export const email1Data = {
    email: 'Email',
    elodieElodieGmailCom: 'elodie.elodie@gmail.com',
};

export const email2Data = {
    email: 'Prénom',
    elodieElodieGmailCom: 'Elodie',
    className: 'prnom',
};

export const email3Data = {
    email: 'Nom',
    elodieElodieGmailCom: 'Elodie',
    className: 'nom',
};

export const iDFixe1Data = {
    idUser: 'ID User',
    number: '1002',
    ligne6: '/img/ligne-6-10@1x.png',
};

export const iDFixe2Data = {
    idUser: 'Date d’inscription',
    number: '29/03/2022',
    ligne6: '/img/ligne-6-10@1x.png',
    className: 'id-fixe-1',
};

export const emailConfirm1Data = {
    emailConfirm: 'Email confirmé',
};

export const emailConfirm2Data = {
    emailConfirm: 'Membre',
    className: 'email-confirm-2',
};

export const titre1Data = {
    children: 'Abonnement',
};

export const iDFixe3Data = {
    idUser: 'Prix',
    number: '49.99 €',
    ligne6: '/img/ligne-6-10@1x.png',
    className: 'id-fixe-2',
};

export const iDFixe4Data = {
    idUser: 'Type de transaction',
    number: 'Nom de la solution de paiement',
    ligne6: '/img/ligne-6-10@1x.png',
    className: 'id-fixe-3',
};

export const iDFixe5Data = {
    idUser: 'Type d’abonnement',
    number: 'Intermédiaire (mensuel)',
    ligne6: '/img/ligne-6-10@1x.png',
    className: 'id-fixe-4',
};

export const iDFixe6Data = {
    idUser: 'Transaction ID',
    number: 'Numéro de la transaction',
    ligne6: '/img/ligne-6-10@1x.png',
    className: 'id-fixe-5',
};

export const buttonsBtnTextIcon51Data = {
    children: 'Modifier la transaction',
};

export const iDFixe22Data = {
    dbut: 'Début',
    date: '22/03/2022',
    ligne6: '/img/ligne-6-10@1x.png',
};

export const renouvellement1Data = {
    renouvellement: 'Renouvellement',
};

export const renouvellement2Data = {
    renouvellement: 'Actif',
    className: 'renouvellement-2',
};

export const iDFixe23Data = {
    dbut: 'Fin',
    date: '22/04/2022',
    ligne6: '/img/ligne-6-10@1x.png',
    className: 'id-fixe-16',
};

export const historique1Data = {
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

export const iDFixe7Data = {
    idUser: 'Prix',
    number: '49.99 €',
    ligne6: '/img/ligne-6-10@1x.png',
    className: 'id-fixe-6',
};

export const iDFixe8Data = {
    idUser: 'Type de transaction',
    number: 'Nom de la solution de paiement',
    ligne6: '/img/ligne-6-10@1x.png',
    className: 'id-fixe-7',
};

export const iDFixe9Data = {
    idUser: 'Type d’abonnement',
    number: 'Intermédiaire (mensuel)',
    ligne6: '/img/ligne-6-10@1x.png',
    className: 'id-fixe-8',
};

export const iDFixe10Data = {
    idUser: 'Transaction ID',
    number: 'Numéro de la transaction',
    ligne6: '/img/ligne-6-10@1x.png',
    className: 'id-fixe-9',
};

export const buttonsBtnTextIcon52Data = {
    children: 'Modifier la transaction',
};

export const iDFixe24Data = {
    dbut: 'Début',
    date: '22/03/2022',
    ligne6: '/img/ligne-6-10@1x.png',
};

export const renouvellement3Data = {
    renouvellement: 'Renouvellement',
};

export const renouvellement4Data = {
    renouvellement: 'Actif',
    className: 'renouvellement-4',
};

export const iDFixe25Data = {
    dbut: 'Fin',
    date: '22/04/2022',
    ligne6: '/img/ligne-6-10@1x.png',
    className: 'id-fixe-18',
};

export const historique2Data = {
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

export const topNavigationSearch4Data = {
    color: '/img/color-10@1x.png',
    className: 'top-navigation-search-3',
};

export const usersAvatarPhoto2States7Data = {
    image: '/img/image-2@1x.png',
    className: 'users-avatar-photo-2-states-5',
};

export const userGroup4Data = {
    usersAvatarPhoto2StatesProps: usersAvatarPhoto2States7Data,
};

export const topNavigation3Data = {
    groupe2: '/img/groupe-1-10@1x.png',
    className: 'top-navigation-2',
    topNavigationSearchProps: topNavigationSearch4Data,
    userGroupProps: userGroup4Data,
};

export const iconsNavigationIcon12States38Data = {
    src: '/img/ic-home-10@1x.png',
    className: 'icons-navigation-icon-12-states-5',
};

export const sidebarMenuItem13Data = {
    name: 'Home',
    className: 'home-2',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States38Data,
};

export const iconsNavigationIcon12States39Data = {
    src: '/img/ic-users-11@1x.png',
    className: 'icons-navigation-icon-12-states-5',
};

export const sidebarMenuItem14Data = {
    name: 'Utilisateurs',
    className: 'customers-2',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States39Data,
};

export const iconsNavigationIcon12States40Data = {
    src: '/img/fontawsome--bookmark--10@1x.png',
    className: 'icons-navigation-icon-12-states-19',
};

export const sidebarMenuItem15Data = {
    name: 'Thèmes articles',
    className: 'thmes-articles-3',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States40Data,
};

export const iconsNavigationIcon12States41Data = {
    src: '/img/ic-invoice-10@1x.png',
    className: 'icons-navigation-icon-12-states-5',
};

export const articles4Data = {
    className: 'articles-3',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States41Data,
};

export const tradingCrypto22Data = {
    fontawsomePen: '/img/fontawsome--pen--11@1x.png',
    name: 'Trading & Crypto',
};

export const tradingCrypto16Data = {
    iconPencil: '/img/fontawsome--robot--3@1x.png',
    name: 'Bot Trading',
    className: 'bot-trading-3',
};

export const tradingCrypto17Data = {
    iconPencil: '/img/fontawsome--bitcoin--11@1x.png',
    name: 'Crypto Wallet',
    className: 'crypto-wallet-3',
};

export const tradingCrypto18Data = {
    iconPencil: '/img/fontawsome--handshake--10@1x.png',
    name: 'Broker',
    className: 'broker-3',
};

export const tradingCrypto19Data = {
    iconPencil: '/img/fontawsome--globe-europe--10@1x.png',
    name: 'Pays',
    className: 'pays-3',
};

export const abonnement4Data = {
    className: 'abonnement-3',
};

export const iconsNavigationIcon12States42Data = {
    src: '/img/ic-setting-11@1x.png',
    className: 'icons-navigation-icon-12-states-5',
};

export const sidebarMenuItem16Data = {
    name: 'Settings',
    className: 'settings-3',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States42Data,
};

export const filtre5Data = {
    name: 'Visible',
    className: 'filtre-4',
};

export const filtre6Data = {
    name: 'Type abonnement',
    className: 'filtre-5',
};

export const buttonsBtnTextIcon35Data = {
    children: 'Sauvegarder les modifications',
    className: 'buttons-btn-text-icon-6',
};

export const groupe39322Data = {
    children: 'Créer un thème',
    className: '',
};

export const buttonsBtnTextIcon61Data = {
    groupe3932Props: groupe39322Data,
};

export const icSearch3Data = {
    className: 'x00-general-01-icons-1',
};

export const topNavigationSearch23Data = {
    icSearchProps: icSearch3Data,
};

export const usersAvatarPhoto2States8Data = {
    image: '/img/image-4@1x.png',
    className: 'users-avatar-photo-2-states-6',
};

export const userGroup5Data = {
    usersAvatarPhoto2StatesProps: usersAvatarPhoto2States8Data,
};

export const topNavigation22Data = {
    groupe2: '/img/groupe-1-12@1x.png',
    className: 'top-navigation-2',
    topNavigationSearch2Props: topNavigationSearch23Data,
    userGroupProps: userGroup5Data,
};

export const iconsNavigationIcon12States43Data = {
    src: '/img/ic-home-10@1x.png',
    className: 'icons-navigation-icon-12-states-5',
};

export const sidebarMenuItem17Data = {
    name: 'Home',
    className: 'home-3',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States43Data,
};

export const iconsNavigationIcon12States44Data = {
    src: '/img/ic-users-11@1x.png',
    className: 'icons-navigation-icon-12-states-5',
};

export const sidebarMenuItem18Data = {
    name: 'Utilisateurs',
    className: 'customers-3',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States44Data,
};

export const iconsNavigationIcon12States45Data = {
    src: '/img/fontawsome--bookmark--4@1x.png',
    className: 'icons-navigation-icon-12-states-20',
};

export const sidebarMenuItem25Data = {
    name: 'Thèmes articles',
    className: 'thmes-articles-22',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States45Data,
};

export const iconsNavigationIcon12States46Data = {
    src: '/img/ic-invoice-10@1x.png',
    className: 'icons-navigation-icon-12-states-5',
};

export const articles5Data = {
    className: 'articles-4',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States46Data,
};

export const tradingCrypto20Data = {
    iconPencil: '/img/fontawsome--pen--10@1x.png',
    name: 'Trading & Crypto',
    className: 'trading-crypto-1',
};

export const tradingCrypto21Data = {
    iconPencil: '/img/fontawsome--robot--3@1x.png',
    name: 'Bot Trading',
    className: 'bot-trading-4',
};

export const tradingCrypto23Data = {
    iconPencil: '/img/fontawsome--bitcoin--11@1x.png',
    name: 'Crypto Wallet',
    className: 'crypto-wallet-4',
};

export const tradingCrypto24Data = {
    iconPencil: '/img/fontawsome--handshake--10@1x.png',
    name: 'Broker',
    className: 'broker-4',
};

export const tradingCrypto25Data = {
    iconPencil: '/img/fontawsome--globe-europe--10@1x.png',
    name: 'Pays',
    className: 'pays-4',
};

export const abonnement5Data = {
    className: 'abonnement-4',
};

export const iconsNavigationIcon12States47Data = {
    src: '/img/ic-setting-11@1x.png',
    className: 'icons-navigation-icon-12-states-5',
};

export const sidebarMenuItem19Data = {
    name: 'Settings',
    className: 'settings-4',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States47Data,
};

export const buttonsBtnTextIcon36Data = {
    children: 'Supprimer',
    className: 'buttons-btn-text-icon-7',
};

export const buttonsBtnTextIcon37Data = {
    children: 'Sauvegarder les modifications',
    className: 'buttons-btn-text-icon-8',
};

export const titre21Data = {
    children: 'Thème',
};

export const email4Data = {
    email: 'Nom du Thème',
    elodieElodieGmailCom: 'Cryptomonnaies',
};

export const filtre7Data = {
    name: 'Type abonnement',
    className: 'filtre-6',
};

export const buttonsBtnTextIcon53Data = {
    children: 'Select icon',
    className: 'buttons-btn-text-icon-29',
};

export const topNavigationSearch5Data = {
    color: '/img/color-10@1x.png',
    className: 'top-navigation-search-4',
};

export const usersAvatarPhoto2States9Data = {
    image: '/img/image-10@1x.png',
    className: 'users-avatar-photo-2-states-7',
};

export const userGroup6Data = {
    usersAvatarPhoto2StatesProps: usersAvatarPhoto2States9Data,
};

export const topNavigation4Data = {
    groupe2: '/img/groupe-1-20@1x.png',
    className: 'top-navigation-2',
    topNavigationSearchProps: topNavigationSearch5Data,
    userGroupProps: userGroup6Data,
};

export const iconsNavigationIcon12States48Data = {
    src: '/img/ic-home-10@1x.png',
    className: 'icons-navigation-icon-12-states-5',
};

export const sidebarMenuItem20Data = {
    name: 'Home',
    className: 'home-4',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States48Data,
};

export const iconsNavigationIcon12States50Data = {
    src: '/img/fontawsome--bookmark--10@1x.png',
    className: 'icons-navigation-icon-12-states-21',
};

export const sidebarMenuItem26Data = {
    name: 'Thèmes articles',
    className: 'thmes-articles-4',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States50Data,
};

export const iconsNavigationIcon12States51Data = {
    src: '/img/ic-invoice-16@1x.png',
    className: 'icons-navigation-icon-12-states-22',
};

export const articles22Data = {
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States51Data,
};

export const tradingCrypto26Data = {
    iconPencil: '/img/fontawsome--pen--10@1x.png',
    name: 'Trading & Crypto',
    className: 'trading-crypto-2',
};

export const tradingCrypto27Data = {
    iconPencil: '/img/fontawsome--robot--3@1x.png',
    name: 'Bot Trading',
    className: 'bot-trading-5',
};

export const tradingCrypto28Data = {
    iconPencil: '/img/fontawsome--bitcoin--11@1x.png',
    name: 'Crypto Wallet',
    className: 'crypto-wallet-5',
};

export const tradingCrypto29Data = {
    iconPencil: '/img/fontawsome--handshake--10@1x.png',
    name: 'Broker',
    className: 'broker-5',
};

export const tradingCrypto30Data = {
    iconPencil: '/img/fontawsome--globe-europe--10@1x.png',
    name: 'Pays',
    className: 'pays-5',
};

export const abonnement6Data = {
    className: 'abonnement-5',
};

export const iconsNavigationIcon12States52Data = {
    src: '/img/ic-setting-11@1x.png',
    className: 'icons-navigation-icon-12-states-5',
};

export const sidebarMenuItem27Data = {
    name: 'Settings',
    className: 'settings-5',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States52Data,
};

export const filtre8Data = {
    name: 'Visible',
    className: 'filtre-7',
};

export const filtre9Data = {
    name: 'Thèmes articles',
    className: 'filtre-8',
};

export const iconsNavigationIcon12States53Data = {
    src: '/img/ic-calendar-13@1x.png',
    className: 'icons-navigation-icon-12-states-5',
};

export const buttonsBtnTextIcon22Data = {
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States53Data,
};

export const date2Data = {
    className: 'date-1',
    buttonsBtnTextIcon2Props: buttonsBtnTextIcon22Data,
};

export const articlesHistoriqueArticlesData = {
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

export const icSearch4Data = {
    className: 'x00-general-01-icons-2',
};

export const topNavigationSearch24Data = {
    icSearchProps: icSearch4Data,
};

export const usersAvatarPhoto2States10Data = {
    image: '/img/image-8@1x.png',
    className: 'users-avatar-photo-2-states-8',
};

export const userGroup7Data = {
    usersAvatarPhoto2StatesProps: usersAvatarPhoto2States10Data,
};

export const topNavigation23Data = {
    groupe2: '/img/groupe-1-21@1x.png',
    className: 'top-navigation-2',
    topNavigationSearch2Props: topNavigationSearch24Data,
    userGroupProps: userGroup7Data,
};

export const iconsNavigationIcon12States54Data = {
    src: '/img/ic-home-10@1x.png',
    className: 'icons-navigation-icon-12-states-5',
};

export const sidebarMenuItem28Data = {
    name: 'Home',
    className: 'home-5',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States54Data,
};

export const iconsNavigationIcon12States55Data = {
    src: '/img/ic-users-11@1x.png',
    className: 'icons-navigation-icon-12-states-5',
};

export const sidebarMenuItem29Data = {
    name: 'Utilisateurs',
    className: 'customers-5',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States55Data,
};

export const iconsNavigationIcon12States56Data = {
    src: '/img/fontawsome--bookmark--10@1x.png',
    className: 'icons-navigation-icon-12-states-23',
};

export const sidebarMenuItem30Data = {
    name: 'Thèmes articles',
    className: 'thmes-articles-5',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States56Data,
};

export const iconsNavigationIcon12States57Data = {
    src: '/img/ic-invoice-16@1x.png',
    className: 'icons-navigation-icon-12-states-24',
};

export const articles23Data = {
    className: 'articles-21',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States57Data,
};

export const tradingCrypto31Data = {
    iconPencil: '/img/fontawsome--pen--10@1x.png',
    name: 'Trading & Crypto',
    className: 'trading-crypto-3',
};

export const tradingCrypto32Data = {
    iconPencil: '/img/fontawsome--robot--3@1x.png',
    name: 'Bot Trading',
    className: 'bot-trading-6',
};

export const tradingCrypto33Data = {
    iconPencil: '/img/fontawsome--bitcoin--11@1x.png',
    name: 'Crypto Wallet',
    className: 'crypto-wallet-6',
};

export const tradingCrypto34Data = {
    iconPencil: '/img/fontawsome--handshake--10@1x.png',
    name: 'Broker',
    className: 'broker-6',
};

export const tradingCrypto35Data = {
    iconPencil: '/img/fontawsome--globe-europe--10@1x.png',
    name: 'Pays',
    className: 'pays-6',
};

export const abonnement7Data = {
    className: 'abonnement-6',
};

export const iconsNavigationIcon12States58Data = {
    src: '/img/ic-setting-11@1x.png',
    className: 'icons-navigation-icon-12-states-5',
};

export const sidebarMenuItem31Data = {
    name: 'Settings',
    className: 'settings-6',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States58Data,
};

export const buttonsBtnTextIcon38Data = {
    children: 'Supprimer',
    className: 'buttons-btn-text-icon-9',
};

export const buttonsBtnTextIcon39Data = {
    children: 'Sauvegarder les modifications',
    className: 'buttons-btn-text-icon-10',
};

export const buttonsBtnTextIcon54Data = {
    children: 'Select Image',
    className: 'buttons-btn-text-icon-30',
};

export const image11Data = {
    imagePrsentation: 'Image Présentation',
    buttonsBtnTextIcon5Props: buttonsBtnTextIcon54Data,
};

export const filtre10Data = {
    name: 'Thèmes articles',
    className: 'filtre-9',
};

export const iDFixe11Data = {
    idUser: 'Thème sélectionné',
    number: 'Cryptomonnaies',
    ligne6: '/img/ligne-6-10@1x.png',
    className: 'id-fixe-10',
};

export const buttonsBtnTextIcon55Data = {
    children: 'Select Image',
    className: 'buttons-btn-text-icon-31',
};

export const image12Data = {
    imagePrsentation: 'Image Article',
    className: 'image-2',
    buttonsBtnTextIcon5Props: buttonsBtnTextIcon55Data,
};

export const email5Data = {
    email: 'Titre',
    elodieElodieGmailCom: 'Le Bitcoin, c’est quoi ?',
    className: 'titre-article',
};

export const buttonsBtnTextIcon310Data = {
    children: 'Ajouter un Podcast',
    className: 'buttons-btn-text-icon-11',
};

export const iDFixe12Data = {
    idUser: 'Podcast',
    number: 'Nom du fichier',
    ligne6: '/img/ligne-6-10@1x.png',
    className: 'id-fixe-11',
};

export const buttonsBtnTextIcon311Data = {
    children: 'Ajouter un article',
    className: 'buttons-btn-text-icon-12',
};

export const filtre11Data = {
    name: 'Thèmes articles',
    className: 'filtre-10',
};

export const topNavigationSearch6Data = {
    color: '/img/color-10@1x.png',
    className: 'top-navigation-search-5',
};

export const usersAvatarPhoto2States11Data = {
    image: '/img/image-8@1x.png',
    className: 'users-avatar-photo-2-states-9',
};

export const userGroup8Data = {
    usersAvatarPhoto2StatesProps: usersAvatarPhoto2States11Data,
};

export const topNavigation5Data = {
    groupe2: '/img/groupe-1-7@1x.png',
    className: 'top-navigation-2',
    topNavigationSearchProps: topNavigationSearch6Data,
    userGroupProps: userGroup8Data,
};

export const iconsNavigationIcon12States59Data = {
    src: '/img/ic-home-10@1x.png',
    className: 'icons-navigation-icon-12-states-5',
};

export const sidebarMenuItem32Data = {
    name: 'Home',
    className: 'home-6',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States59Data,
};

export const iconsNavigationIcon12States60Data = {
    src: '/img/ic-users-11@1x.png',
    className: 'icons-navigation-icon-12-states-5',
};

export const sidebarMenuItem33Data = {
    name: 'Utilisateurs',
    className: 'customers-6',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States60Data,
};

export const iconsNavigationIcon12States61Data = {
    src: '/img/fontawsome--bookmark--10@1x.png',
    className: 'icons-navigation-icon-12-states-25',
};

export const sidebarMenuItem34Data = {
    name: 'Thèmes articles',
    className: 'thmes-articles-6',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States61Data,
};

export const iconsNavigationIcon12States62Data = {
    src: '/img/ic-invoice-16@1x.png',
    className: 'icons-navigation-icon-12-states-26',
};

export const articles24Data = {
    className: 'articles-22',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States62Data,
};

export const tradingCrypto36Data = {
    iconPencil: '/img/fontawsome--pen--10@1x.png',
    name: 'Trading & Crypto',
    className: 'trading-crypto-4',
};

export const tradingCrypto37Data = {
    iconPencil: '/img/fontawsome--robot--3@1x.png',
    name: 'Bot Trading',
    className: 'bot-trading-7',
};

export const tradingCrypto38Data = {
    iconPencil: '/img/fontawsome--bitcoin--11@1x.png',
    name: 'Crypto Wallet',
    className: 'crypto-wallet-7',
};

export const tradingCrypto39Data = {
    iconPencil: '/img/fontawsome--handshake--10@1x.png',
    name: 'Broker',
    className: 'broker-7',
};

export const tradingCrypto40Data = {
    iconPencil: '/img/fontawsome--globe-europe--10@1x.png',
    name: 'Pays',
    className: 'pays-7',
};

export const abonnement8Data = {
    className: 'abonnement-7',
};

export const iconsNavigationIcon12States63Data = {
    src: '/img/ic-setting-11@1x.png',
    className: 'icons-navigation-icon-12-states-5',
};

export const sidebarMenuItem35Data = {
    name: 'Settings',
    className: 'settings-7',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States63Data,
};

export const buttonsBtnTextIcon312Data = {
    children: 'Supprimer',
    className: 'buttons-btn-text-icon-13',
};

export const buttonsBtnTextIcon313Data = {
    children: 'Sauvegarder les modifications',
    className: 'buttons-btn-text-icon-14',
};

export const buttonsBtnTextIcon56Data = {
    children: 'Select Image',
    className: 'buttons-btn-text-icon-32',
};

export const image13Data = {
    imagePrsentation: 'Image Présentation',
    buttonsBtnTextIcon5Props: buttonsBtnTextIcon56Data,
};

export const filtre12Data = {
    name: 'Thèmes articles',
    className: 'filtre-11',
};

export const iDFixe13Data = {
    idUser: 'Thème sélectionné',
    number: 'Play To Earn',
    ligne6: '/img/ligne-6-10@1x.png',
    className: 'id-fixe-12',
};

export const buttonsBtnTextIcon57Data = {
    children: 'Select Image',
    className: 'buttons-btn-text-icon-33',
};

export const image14Data = {
    imagePrsentation: 'Image Article',
    className: 'nom-5',
    buttonsBtnTextIcon5Props: buttonsBtnTextIcon57Data,
};

export const email6Data = {
    email: 'Titre',
    elodieElodieGmailCom: 'Axie Infinity, Play to Earn',
    className: 'titre-3',
};

export const titre42Data = {
    className: 'titre-15',
};

export const titre52Data = {
    className: 'titre-17',
};

export const buttonsBtnTextIcon314Data = {
    children: 'Ajouter un Podcast',
    className: 'buttons-btn-text-icon-15',
};

export const iDFixe14Data = {
    idUser: 'Podcast',
    number: 'Nom du fichier',
    ligne6: '/img/ligne-6-10@1x.png',
    className: 'id-fixe-13',
};

export const buttonsBtnTextIcon315Data = {
    children: 'Ajouter un article',
    className: 'buttons-btn-text-icon-16',
};

export const filtre13Data = {
    name: 'Thèmes articles',
    className: 'filtre-12',
};

export const topNavigationSearch7Data = {
    color: '/img/color-10@1x.png',
    className: 'top-navigation-search-6',
};

export const usersAvatarPhoto2States12Data = {
    image: '/img/image-10@1x.png',
    className: 'users-avatar-photo-2-states-10',
};

export const userGroup9Data = {
    usersAvatarPhoto2StatesProps: usersAvatarPhoto2States12Data,
};

export const topNavigation6Data = {
    groupe2: '/img/groupe-1-20@1x.png',
    className: 'top-navigation-2',
    topNavigationSearchProps: topNavigationSearch7Data,
    userGroupProps: userGroup9Data,
};

export const iconsNavigationIcon12States64Data = {
    src: '/img/ic-home-10@1x.png',
    className: 'icons-navigation-icon-12-states-5',
};

export const sidebarMenuItem36Data = {
    name: 'Home',
    className: 'home-7',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States64Data,
};

export const iconsNavigationIcon12States65Data = {
    src: '/img/ic-users-11@1x.png',
    className: 'icons-navigation-icon-12-states-5',
};

export const sidebarMenuItem37Data = {
    name: 'Utilisateurs',
    className: 'customers-7',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States65Data,
};

export const iconsNavigationIcon12States66Data = {
    src: '/img/fontawsome--bookmark--10@1x.png',
    className: 'icons-navigation-icon-12-states-27',
};

export const sidebarMenuItem38Data = {
    name: 'Thèmes articles',
    className: 'thmes-articles-7',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States66Data,
};

export const iconsNavigationIcon12States67Data = {
    src: '/img/ic-invoice-10@1x.png',
    className: 'icons-navigation-icon-12-states-5',
};

export const articles6Data = {
    className: 'articles-5',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States67Data,
};

export const tradingCrypto210Data = {
    fontawsomePen: '/img/fontawsome--pen--11@1x.png',
    name: 'Trading & Crypto',
};

export const tradingCrypto41Data = {
    iconPencil: '/img/fontawsome--robot--3@1x.png',
    name: 'Bot Trading',
    className: 'bot-trading-8',
};

export const tradingCrypto42Data = {
    iconPencil: '/img/fontawsome--bitcoin--11@1x.png',
    name: 'Crypto Wallet',
    className: 'crypto-wallet-8',
};

export const tradingCrypto43Data = {
    iconPencil: '/img/fontawsome--handshake--10@1x.png',
    name: 'Broker',
    className: 'broker-8',
};

export const tradingCrypto44Data = {
    iconPencil: '/img/fontawsome--globe-europe--10@1x.png',
    name: 'Pays',
    className: 'pays-8',
};

export const abonnement9Data = {
    className: 'abonnement-8',
};

export const iconsNavigationIcon12States68Data = {
    src: '/img/ic-setting-11@1x.png',
    className: 'icons-navigation-icon-12-states-5',
};

export const sidebarMenuItem39Data = {
    name: 'Settings',
    className: 'settings-8',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States68Data,
};

export const buttonsBtnTextIcon316Data = {
    children: 'Sauvegarder les modifications',
    className: 'buttons-btn-text-icon-17',
};

export const email7Data = {
    email: 'Titre',
    elodieElodieGmailCom: 'Axie Infinity, Play to Earn',
    className: 'titre-page',
};

export const editeur1Data = {
    src: '/img/notes--details--text-editor-1@1x.png',
};

export const email8Data = {
    email: 'Titre',
    elodieElodieGmailCom: 'Axie Infinity, Play to Earn',
    className: 'titre-page-1',
};

export const editeur2Data = {
    src: '/img/notes--details--text-editor-1@1x.png',
};

export const topNavigationSearch8Data = {
    color: '/img/color-10@1x.png',
    className: 'top-navigation-search-7',
};

export const usersAvatarPhoto2States13Data = {
    image: '/img/image-11@1x.png',
    className: 'users-avatar-photo-2-states-11',
};

export const userGroup10Data = {
    usersAvatarPhoto2StatesProps: usersAvatarPhoto2States13Data,
};

export const topNavigation7Data = {
    groupe2: '/img/groupe-1-10@1x.png',
    className: 'top-navigation-2',
    topNavigationSearchProps: topNavigationSearch8Data,
    userGroupProps: userGroup10Data,
};

export const iconsNavigationIcon12States69Data = {
    src: '/img/ic-home-10@1x.png',
    className: 'icons-navigation-icon-12-states-5',
};

export const sidebarMenuItem40Data = {
    name: 'Home',
    className: 'home-8',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States69Data,
};

export const iconsNavigationIcon12States70Data = {
    src: '/img/ic-users-11@1x.png',
    className: 'icons-navigation-icon-12-states-5',
};

export const sidebarMenuItem41Data = {
    name: 'Utilisateurs',
    className: 'customers-8',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States70Data,
};

export const iconsNavigationIcon12States71Data = {
    src: '/img/fontawsome--bookmark--10@1x.png',
    className: 'icons-navigation-icon-12-states-28',
};

export const sidebarMenuItem42Data = {
    name: 'Thèmes articles',
    className: 'thmes-articles-8',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States71Data,
};

export const iconsNavigationIcon12States72Data = {
    src: '/img/ic-invoice-10@1x.png',
    className: 'icons-navigation-icon-12-states-5',
};

export const articles7Data = {
    className: 'articles-6',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States72Data,
};

export const tradingCrypto45Data = {
    iconPencil: '/img/fontawsome--pen--10@1x.png',
    name: 'Trading & Crypto',
    className: 'trading-crypto-5',
};

export const tradingCrypto211Data = {
    fontawsomePen: '/img/fontawsome--robot--9@1x.png',
    name: 'Bot Trading',
    className: 'bot-trading-22',
};

export const tradingCrypto46Data = {
    iconPencil: '/img/fontawsome--bitcoin--11@1x.png',
    name: 'Crypto Wallet',
    className: 'crypto-wallet-9',
};

export const tradingCrypto47Data = {
    iconPencil: '/img/fontawsome--handshake--10@1x.png',
    name: 'Broker',
    className: 'broker-9',
};

export const tradingCrypto48Data = {
    iconPencil: '/img/fontawsome--globe-europe--10@1x.png',
    name: 'Pays',
    className: 'pays-9',
};

export const abonnement10Data = {
    className: 'abonnement-9',
};

export const iconsNavigationIcon12States73Data = {
    src: '/img/ic-setting-11@1x.png',
    className: 'icons-navigation-icon-12-states-5',
};

export const sidebarMenuItem43Data = {
    name: 'Settings',
    className: 'settings-9',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States73Data,
};

export const buttonsBtnTextIcon317Data = {
    children: 'Sauvegarder les modifications',
    className: 'buttons-btn-text-icon-18',
};

export const topNavigationSearch9Data = {
    color: '/img/color-10@1x.png',
    className: 'top-navigation-search-8',
};

export const usersAvatarPhoto2States14Data = {
    image: '/img/image-11@1x.png',
    className: 'users-avatar-photo-2-states-12',
};

export const userGroup11Data = {
    usersAvatarPhoto2StatesProps: usersAvatarPhoto2States14Data,
};

export const topNavigation8Data = {
    groupe2: '/img/groupe-1-10@1x.png',
    className: 'top-navigation-2',
    topNavigationSearchProps: topNavigationSearch9Data,
    userGroupProps: userGroup11Data,
};

export const iconsNavigationIcon12States74Data = {
    src: '/img/ic-home-10@1x.png',
    className: 'icons-navigation-icon-12-states-5',
};

export const sidebarMenuItem44Data = {
    name: 'Home',
    className: 'home-9',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States74Data,
};

export const iconsNavigationIcon12States75Data = {
    src: '/img/ic-users-11@1x.png',
    className: 'icons-navigation-icon-12-states-5',
};

export const sidebarMenuItem45Data = {
    name: 'Utilisateurs',
    className: 'customers-9',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States75Data,
};

export const iconsNavigationIcon12States76Data = {
    src: '/img/fontawsome--bookmark--10@1x.png',
    className: 'icons-navigation-icon-12-states-29',
};

export const sidebarMenuItem46Data = {
    name: 'Thèmes articles',
    className: 'thmes-articles-9',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States76Data,
};

export const iconsNavigationIcon12States77Data = {
    src: '/img/ic-invoice-10@1x.png',
    className: 'icons-navigation-icon-12-states-5',
};

export const articles8Data = {
    className: 'articles-7',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States77Data,
};

export const tradingCrypto49Data = {
    iconPencil: '/img/fontawsome--pen--10@1x.png',
    name: 'Trading & Crypto',
    className: 'trading-crypto-6',
};

export const tradingCrypto50Data = {
    iconPencil: '/img/fontawsome--robot--10@1x.png',
    name: 'Bot Trading',
    className: 'bot-trading-9',
};

export const tradingCrypto212Data = {
    fontawsomePen: '/img/fontawsome--bitcoin--10@1x.png',
    name: 'Crypto Wallet',
    className: 'crypto-wallet-22',
};

export const tradingCrypto51Data = {
    iconPencil: '/img/fontawsome--handshake--10@1x.png',
    name: 'Broker',
    className: 'broker-10',
};

export const tradingCrypto52Data = {
    iconPencil: '/img/fontawsome--globe-europe--10@1x.png',
    name: 'Pays',
    className: 'pays-10',
};

export const abonnement11Data = {
    className: 'abonnement-10',
};

export const iconsNavigationIcon12States78Data = {
    src: '/img/ic-setting-11@1x.png',
    className: 'icons-navigation-icon-12-states-5',
};

export const sidebarMenuItem47Data = {
    name: 'Settings',
    className: 'settings-10',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States78Data,
};

export const buttonsBtnTextIcon318Data = {
    children: 'Sauvegarder les modifications',
    className: 'buttons-btn-text-icon-19',
};

export const titre22Data = {
    children: 'Crypto',
};

export const filtre14Data = {
    name: 'Cryptomonnaie',
    className: 'filtre-13',
};

export const devise1Data = {
    devise: 'Devise',
    phone: '47 705.05',
    ligne6: '/img/ligne-6-37@1x.png',
};

export const devise2Data = {
    devise: 'Pourcentage Wallet',
    phone: '50%',
    ligne6: '/img/ligne-6-39@1x.png',
    className: 'pourcentage-wallet',
};

export const buttonsBtnTextIcon58Data = {
    children: 'Ajouter une crypto',
    className: 'buttons-btn-text-icon-34',
};

export const boutonPourSupprimer3Data = {
    className: 'bouton-pour-supprimer-1',
};

export const editeur3Data = {
    src: '/img/notes--details--text-editor-4@1x.png',
};

export const iDFixe26Data = {
    dbut: 'Choisir une date',
    date: '22/03/2022',
    ligne6: '/img/ligne-6-1@1x.png',
    className: 'id-fixe-19',
};

export const topNavigationSearch10Data = {
    color: '/img/color-10@1x.png',
    className: 'top-navigation-search-9',
};

export const usersAvatarPhoto2States15Data = {
    image: '/img/image-11@1x.png',
    className: 'users-avatar-photo-2-states-13',
};

export const userGroup12Data = {
    usersAvatarPhoto2StatesProps: usersAvatarPhoto2States15Data,
};

export const topNavigation9Data = {
    groupe2: '/img/groupe-1-10@1x.png',
    className: 'top-navigation-2',
    topNavigationSearchProps: topNavigationSearch10Data,
    userGroupProps: userGroup12Data,
};

export const iconsNavigationIcon12States79Data = {
    src: '/img/ic-home-10@1x.png',
    className: 'icons-navigation-icon-12-states-5',
};

export const sidebarMenuItem48Data = {
    name: 'Home',
    className: 'home-10',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States79Data,
};

export const iconsNavigationIcon12States80Data = {
    src: '/img/ic-users-11@1x.png',
    className: 'icons-navigation-icon-12-states-5',
};

export const sidebarMenuItem49Data = {
    name: 'Utilisateurs',
    className: 'customers-10',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States80Data,
};

export const iconsNavigationIcon12States81Data = {
    src: '/img/fontawsome--bookmark--10@1x.png',
    className: 'icons-navigation-icon-12-states-30',
};

export const sidebarMenuItem50Data = {
    name: 'Thèmes articles',
    className: 'thmes-articles-10',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States81Data,
};

export const iconsNavigationIcon12States82Data = {
    src: '/img/ic-invoice-10@1x.png',
    className: 'icons-navigation-icon-12-states-5',
};

export const articles9Data = {
    className: 'articles-8',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States82Data,
};

export const tradingCrypto53Data = {
    iconPencil: '/img/fontawsome--pen--10@1x.png',
    name: 'Trading & Crypto',
    className: 'trading-crypto-7',
};

export const tradingCrypto54Data = {
    iconPencil: '/img/fontawsome--robot--10@1x.png',
    name: 'Bot Trading',
    className: 'bot-trading-10',
};

export const tradingCrypto55Data = {
    iconPencil: '/img/fontawsome--bitcoin--11@1x.png',
    name: 'Crypto Wallet',
    className: 'crypto-wallet-10',
};

export const tradingCrypto213Data = {
    fontawsomePen: '/img/fontawsome--handshake--11@1x.png',
    name: 'Broker',
    className: 'broker-21',
};

export const tradingCrypto56Data = {
    iconPencil: '/img/fontawsome--globe-europe--10@1x.png',
    name: 'Pays',
    className: 'pays-11',
};

export const abonnement12Data = {
    className: 'abonnement-11',
};

export const iconsNavigationIcon12States83Data = {
    src: '/img/ic-setting-11@1x.png',
    className: 'icons-navigation-icon-12-states-5',
};

export const sidebarMenuItem51Data = {
    name: 'Settings',
    className: 'settings-11',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States83Data,
};

export const groupe39323Data = {
    children: 'Créer un Broker',
    className: 'groupe-393-10',
};

export const buttonsBtnTextIcon62Data = {
    className: 'buttons-btn-text-icon-37',
    groupe3932Props: groupe39323Data,
};

export const icSearch5Data = {
    className: 'x00-general-01-icons-3',
};

export const topNavigationSearch25Data = {
    icSearchProps: icSearch5Data,
};

export const usersAvatarPhoto2States16Data = {
    image: '/img/image-14@1x.png',
    className: 'users-avatar-photo-2-states-14',
};

export const userGroup13Data = {
    usersAvatarPhoto2StatesProps: usersAvatarPhoto2States16Data,
};

export const topNavigation24Data = {
    groupe2: '/img/groupe-1-12@1x.png',
    className: 'top-navigation-2',
    topNavigationSearch2Props: topNavigationSearch25Data,
    userGroupProps: userGroup13Data,
};

export const iconsNavigationIcon12States84Data = {
    src: '/img/ic-home-10@1x.png',
    className: 'icons-navigation-icon-12-states-5',
};

export const sidebarMenuItem52Data = {
    name: 'Home',
    className: 'home-11',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States84Data,
};

export const iconsNavigationIcon12States85Data = {
    src: '/img/ic-users-11@1x.png',
    className: 'icons-navigation-icon-12-states-5',
};

export const sidebarMenuItem53Data = {
    name: 'Utilisateurs',
    className: 'customers-11',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States85Data,
};

export const iconsNavigationIcon12States86Data = {
    src: '/img/fontawsome--bookmark--10@1x.png',
    className: 'icons-navigation-icon-12-states-31',
};

export const sidebarMenuItem54Data = {
    name: 'Thèmes articles',
    className: 'thmes-articles-11',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States86Data,
};

export const iconsNavigationIcon12States87Data = {
    src: '/img/ic-invoice-10@1x.png',
    className: 'icons-navigation-icon-12-states-5',
};

export const articles10Data = {
    className: 'articles-9',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States87Data,
};

export const tradingCrypto57Data = {
    iconPencil: '/img/fontawsome--pen--10@1x.png',
    name: 'Trading & Crypto',
    className: 'trading-crypto-8',
};

export const tradingCrypto58Data = {
    iconPencil: '/img/fontawsome--robot--10@1x.png',
    name: 'Bot Trading',
    className: 'bot-trading-11',
};

export const tradingCrypto59Data = {
    iconPencil: '/img/fontawsome--bitcoin--11@1x.png',
    name: 'Crypto Wallet',
    className: 'crypto-wallet-11',
};

export const tradingCrypto214Data = {
    fontawsomePen: '/img/fontawsome--handshake--11@1x.png',
    name: 'Broker',
    className: 'broker-22',
};

export const tradingCrypto60Data = {
    iconPencil: '/img/fontawsome--globe-europe--10@1x.png',
    name: 'Pays',
    className: 'pays-12',
};

export const iconsNavigationIcon12States88Data = {
    src: '/img/ic-setting-11@1x.png',
    className: 'icons-navigation-icon-12-states-5',
};

export const sidebarMenuItem55Data = {
    name: 'Settings',
    className: 'settings-12',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States88Data,
};

export const buttonsBtnTextIcon319Data = {
    children: 'Créer Broker',
    className: 'buttons-btn-text-icon-20',
};

export const buttonsBtnTextIcon59Data = {
    children: 'Select Logo',
    className: 'buttons-btn-text-icon-35',
};

export const iDFixe15Data = {
    idUser: 'Thème sélectionné',
    number: 'Nom',
    ligne6: '/img/ligne-6-1@1x.png',
    className: 'thme-slectionn',
};

export const iDFixe16Data = {
    idUser: 'URL',
    number: 'https://……',
    ligne6: '/img/ligne-6-1@1x.png',
    className: 'url',
};

export const topNavigationSearch11Data = {
    color: '/img/color-10@1x.png',
    className: 'top-navigation-search-10',
};

export const usersAvatarPhoto2States17Data = {
    image: '/img/image-11@1x.png',
    className: 'users-avatar-photo-2-states-15',
};

export const userGroup14Data = {
    usersAvatarPhoto2StatesProps: usersAvatarPhoto2States17Data,
};

export const topNavigation10Data = {
    groupe2: '/img/groupe-1-10@1x.png',
    className: 'top-navigation-2',
    topNavigationSearchProps: topNavigationSearch11Data,
    userGroupProps: userGroup14Data,
};

export const iconsNavigationIcon12States89Data = {
    src: '/img/ic-home-10@1x.png',
    className: 'icons-navigation-icon-12-states-5',
};

export const sidebarMenuItem56Data = {
    name: 'Home',
    className: 'home-12',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States89Data,
};

export const iconsNavigationIcon12States90Data = {
    src: '/img/ic-users-11@1x.png',
    className: 'icons-navigation-icon-12-states-5',
};

export const sidebarMenuItem57Data = {
    name: 'Utilisateurs',
    className: 'customers-12',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States90Data,
};

export const iconsNavigationIcon12States91Data = {
    src: '/img/fontawsome--bookmark--10@1x.png',
    className: 'icons-navigation-icon-12-states-32',
};

export const sidebarMenuItem58Data = {
    name: 'Thèmes articles',
    className: 'thmes-articles-12',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States91Data,
};

export const iconsNavigationIcon12States92Data = {
    src: '/img/ic-invoice-10@1x.png',
    className: 'icons-navigation-icon-12-states-5',
};

export const articles11Data = {
    className: 'articles-10',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States92Data,
};

export const tradingCrypto61Data = {
    iconPencil: '/img/fontawsome--pen--10@1x.png',
    name: 'Trading & Crypto',
    className: 'trading-crypto-9',
};

export const tradingCrypto62Data = {
    iconPencil: '/img/fontawsome--robot--10@1x.png',
    name: 'Bot Trading',
    className: 'bot-trading-12',
};

export const tradingCrypto63Data = {
    iconPencil: '/img/fontawsome--bitcoin--11@1x.png',
    name: 'Crypto Wallet',
    className: 'crypto-wallet-12',
};

export const tradingCrypto64Data = {
    iconPencil: '/img/fontawsome--handshake--10@1x.png',
    name: 'Broker',
    className: 'broker-11',
};

export const tradingCrypto215Data = {
    fontawsomePen: '/img/fontawsome--globe-europe--13@1x.png',
    name: 'Pays',
    className: 'pays-22',
};

export const abonnement14Data = {
    className: 'abonnement-12',
};

export const iconsNavigationIcon12States93Data = {
    src: '/img/ic-setting-11@1x.png',
    className: 'icons-navigation-icon-12-states-5',
};

export const sidebarMenuItem59Data = {
    name: 'Settings',
    className: 'settings-13',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States93Data,
};

export const filtre15Data = {
    name: 'Visible',
    className: 'filtre-14',
};

export const groupe39331Data = {
    children: 'Créer un Pays',
    className: '',
};

export const buttonsBtnTextIcon71Data = {
    groupe3933Props: groupe39331Data,
};

export const topNavigationSearch12Data = {
    color: '/img/color-10@1x.png',
    className: 'top-navigation-search-11',
};

export const usersAvatarPhoto2States18Data = {
    image: '/img/image-11@1x.png',
    className: 'users-avatar-photo-2-states-16',
};

export const userGroup15Data = {
    usersAvatarPhoto2StatesProps: usersAvatarPhoto2States18Data,
};

export const topNavigation11Data = {
    groupe2: '/img/groupe-1-10@1x.png',
    className: 'top-navigation-2',
    topNavigationSearchProps: topNavigationSearch12Data,
    userGroupProps: userGroup15Data,
};

export const iconsNavigationIcon12States94Data = {
    src: '/img/ic-home-10@1x.png',
    className: 'icons-navigation-icon-12-states-5',
};

export const sidebarMenuItem60Data = {
    name: 'Home',
    className: 'home-13',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States94Data,
};

export const iconsNavigationIcon12States95Data = {
    src: '/img/ic-users-11@1x.png',
    className: 'icons-navigation-icon-12-states-5',
};

export const sidebarMenuItem61Data = {
    name: 'Utilisateurs',
    className: 'customers-13',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States95Data,
};

export const iconsNavigationIcon12States96Data = {
    src: '/img/fontawsome--bookmark--10@1x.png',
    className: 'icons-navigation-icon-12-states-33',
};

export const sidebarMenuItem62Data = {
    name: 'Thèmes articles',
    className: 'thmes-articles-13',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States96Data,
};

export const iconsNavigationIcon12States97Data = {
    src: '/img/ic-invoice-10@1x.png',
    className: 'icons-navigation-icon-12-states-5',
};

export const articles12Data = {
    className: 'articles-11',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States97Data,
};

export const tradingCrypto65Data = {
    iconPencil: '/img/fontawsome--pen--10@1x.png',
    name: 'Trading & Crypto',
    className: 'trading-crypto-10',
};

export const tradingCrypto66Data = {
    iconPencil: '/img/fontawsome--robot--10@1x.png',
    name: 'Bot Trading',
    className: 'bot-trading-13',
};

export const tradingCrypto67Data = {
    iconPencil: '/img/fontawsome--bitcoin--11@1x.png',
    name: 'Crypto Wallet',
    className: 'crypto-wallet-13',
};

export const tradingCrypto68Data = {
    iconPencil: '/img/fontawsome--handshake--10@1x.png',
    name: 'Broker',
    className: 'broker-12',
};

export const tradingCrypto69Data = {
    iconPencil: '/img/fontawsome--globe-europe--10@1x.png',
    name: 'Pays',
    className: 'pays-13',
};

export const abonnement15Data = {
    className: 'abonnement-13',
};

export const iconsNavigationIcon12States98Data = {
    src: '/img/ic-setting-33@1x.png',
    className: 'icons-navigation-icon-12-states-34',
};

export const sidebarMenuItem210Data = {
    name: '/img/frame-12@1x.png',
    className: 'settings-22',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States98Data,
};

export const buttonsBtnTextIcon320Data = {
    children: 'Sauvegarder',
    className: 'buttons-btn-text-icon-21',
};

export const toggle1Data = {
    activerLesSmsLinscription: 'Activer les SMS à l’inscription',
};

export const topNavigationSearch13Data = {
    color: '/img/color-10@1x.png',
    className: 'top-navigation-search-12',
};

export const usersAvatarPhoto2States19Data = {
    image: '/img/image-11@1x.png',
    className: 'users-avatar-photo-2-states-17',
};

export const userGroup16Data = {
    usersAvatarPhoto2StatesProps: usersAvatarPhoto2States19Data,
};

export const topNavigation12Data = {
    groupe2: '/img/groupe-1-10@1x.png',
    className: 'top-navigation-2',
    topNavigationSearchProps: topNavigationSearch13Data,
    userGroupProps: userGroup16Data,
};

export const iconsNavigationIcon12States99Data = {
    src: '/img/ic-home-10@1x.png',
    className: 'icons-navigation-icon-12-states-5',
};

export const sidebarMenuItem63Data = {
    name: 'Home',
    className: 'home-14',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States99Data,
};

export const iconsNavigationIcon12States100Data = {
    src: '/img/ic-users-11@1x.png',
    className: 'icons-navigation-icon-12-states-5',
};

export const sidebarMenuItem64Data = {
    name: 'Utilisateurs',
    className: 'customers-14',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States100Data,
};

export const iconsNavigationIcon12States101Data = {
    src: '/img/fontawsome--bookmark--10@1x.png',
    className: 'icons-navigation-icon-12-states-35',
};

export const sidebarMenuItem65Data = {
    name: 'Thèmes articles',
    className: 'thmes-articles-14',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States101Data,
};

export const iconsNavigationIcon12States102Data = {
    src: '/img/ic-invoice-10@1x.png',
    className: 'icons-navigation-icon-12-states-5',
};

export const articles13Data = {
    className: 'articles-12',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States102Data,
};

export const tradingCrypto70Data = {
    iconPencil: '/img/fontawsome--pen--10@1x.png',
    name: 'Trading & Crypto',
    className: 'trading-crypto-11',
};

export const tradingCrypto71Data = {
    iconPencil: '/img/fontawsome--robot--10@1x.png',
    name: 'Bot Trading',
    className: 'bot-trading-14',
};

export const tradingCrypto72Data = {
    iconPencil: '/img/fontawsome--bitcoin--11@1x.png',
    name: 'Crypto Wallet',
    className: 'crypto-wallet-14',
};

export const tradingCrypto73Data = {
    iconPencil: '/img/fontawsome--handshake--10@1x.png',
    name: 'Broker',
    className: 'broker-13',
};

export const tradingCrypto74Data = {
    iconPencil: '/img/fontawsome--globe-europe--10@1x.png',
    name: 'Pays',
    className: 'pays-14',
};

export const gestionAbonnements1Data = {
    children: 'Gestion Abonnements',
};

export const abonnement22Data = {
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

export const iconsNavigationIcon12States103Data = {
    src: '/img/ic-setting-11@1x.png',
    className: 'icons-navigation-icon-12-states-5',
};

export const sidebarMenuItem66Data = {
    name: 'Settings',
    className: 'settings-14',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States103Data,
};

export const filtre16Data = {
    name: 'Visible',
    className: 'filtre-15',
};

export const groupe3934Data = {
    children: 'Créer un abonnement',
    className: 'groupe-393-5',
};

export const buttonsBtnTextIcon43Data = {
    className: 'buttons-btn-text-icon-24',
    groupe393Props: groupe3934Data,
};

export const gridTable1Data = {
    name1: 'Nom',
    name2: 'Prix',
    name3: 'Durée',
    name4: 'Best Seller',
    name5: 'Visible',
};

export const icSearch6Data = {
    className: 'x00-general-01-icons-4',
};

export const topNavigationSearch26Data = {
    icSearchProps: icSearch6Data,
};

export const usersAvatarPhoto2States20Data = {
    image: '/img/image-14@1x.png',
    className: 'users-avatar-photo-2-states-18',
};

export const userGroup17Data = {
    usersAvatarPhoto2StatesProps: usersAvatarPhoto2States20Data,
};

export const topNavigation25Data = {
    groupe2: '/img/groupe-1-12@1x.png',
    className: 'top-navigation-2',
    topNavigationSearch2Props: topNavigationSearch26Data,
    userGroupProps: userGroup17Data,
};

export const iconsNavigationIcon12States104Data = {
    src: '/img/ic-home-10@1x.png',
    className: 'icons-navigation-icon-12-states-5',
};

export const sidebarMenuItem67Data = {
    name: 'Home',
    className: 'home-15',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States104Data,
};

export const iconsNavigationIcon12States105Data = {
    src: '/img/ic-users-11@1x.png',
    className: 'icons-navigation-icon-12-states-5',
};

export const sidebarMenuItem68Data = {
    name: 'Utilisateurs',
    className: 'customers-15',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States105Data,
};

export const iconsNavigationIcon12States106Data = {
    src: '/img/fontawsome--bookmark--10@1x.png',
    className: 'icons-navigation-icon-12-states-36',
};

export const sidebarMenuItem69Data = {
    name: 'Thèmes articles',
    className: 'thmes-articles-15',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States106Data,
};

export const iconsNavigationIcon12States107Data = {
    src: '/img/ic-invoice-10@1x.png',
    className: 'icons-navigation-icon-12-states-5',
};

export const articles14Data = {
    className: 'articles-13',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States107Data,
};

export const tradingCrypto75Data = {
    iconPencil: '/img/fontawsome--pen--10@1x.png',
    name: 'Trading & Crypto',
    className: 'trading-crypto-12',
};

export const tradingCrypto76Data = {
    iconPencil: '/img/fontawsome--robot--10@1x.png',
    name: 'Bot Trading',
    className: 'bot-trading-15',
};

export const tradingCrypto77Data = {
    iconPencil: '/img/fontawsome--bitcoin--11@1x.png',
    name: 'Crypto Wallet',
    className: 'crypto-wallet-15',
};

export const tradingCrypto78Data = {
    iconPencil: '/img/fontawsome--handshake--10@1x.png',
    name: 'Broker',
    className: 'broker-14',
};

export const tradingCrypto79Data = {
    iconPencil: '/img/fontawsome--globe-europe--10@1x.png',
    name: 'Pays',
    className: 'pays-15',
};

export const tradingCrypto80Data = {
    iconPencil: '/img/icon-material-payment-10@1x.png',
    name: 'Abonnement',
    className: 'abonnement',
};

export const iconsNavigationIcon12States108Data = {
    src: '/img/ic-setting-11@1x.png',
    className: 'icons-navigation-icon-12-states-5',
};

export const sidebarMenuItem70Data = {
    name: 'Settings',
    className: 'settings-15',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States108Data,
};

export const groupe3935Data = {
    children: 'Créer un abonnement',
    className: 'groupe-393-6',
};

export const buttonsBtnTextIcon44Data = {
    className: 'buttons-btn-text-icon-25',
    groupe393Props: groupe3935Data,
};

export const titre6Data = {
    children: 'Informations',
    className: 'titre-5',
};

export const iDFixe17Data = {
    idUser: 'Nom',
    number: 'Novice',
    ligne6: '/img/ligne-6-1@1x.png',
    className: 'nom-1',
};

export const iDFixe18Data = {
    idUser: 'Prix',
    number: '49.99 €',
    ligne6: '/img/ligne-6-1@1x.png',
    className: 'prix',
};

export const iDFixe19Data = {
    idUser: 'Durée',
    number: '30',
    ligne6: '/img/ligne-6-1@1x.png',
    className: 'dure',
};

export const type1Data = {
    type: 'Type',
    mensuel: 'Mensuel',
};

export const bestSeller1Data = {
    children: 'Best Seller',
};

export const bestSeller2Data = {
    children: 'Visible',
    className: 'visible',
};

export const toggle2Data = {
    activerLesSmsLinscription: 'Période d’essai',
    className: 'priode-dessai',
};

export const topNavigationSearch14Data = {
    color: '/img/color-10@1x.png',
    className: 'top-navigation-search-13',
};

export const usersAvatarPhoto2States21Data = {
    image: '/img/image-14@1x.png',
    className: 'users-avatar-photo-2-states-19',
};

export const userGroup18Data = {
    usersAvatarPhoto2StatesProps: usersAvatarPhoto2States21Data,
};

export const topNavigation13Data = {
    groupe2: '/img/groupe-1-17@1x.png',
    className: 'top-navigation-2',
    topNavigationSearchProps: topNavigationSearch14Data,
    userGroupProps: userGroup18Data,
};

export const iconsNavigationIcon12States109Data = {
    src: '/img/ic-home-10@1x.png',
    className: 'icons-navigation-icon-12-states-5',
};

export const sidebarMenuItem71Data = {
    name: 'Home',
    className: 'home-16',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States109Data,
};

export const iconsNavigationIcon12States110Data = {
    src: '/img/ic-users-11@1x.png',
    className: 'icons-navigation-icon-12-states-5',
};

export const sidebarMenuItem72Data = {
    name: 'Utilisateurs',
    className: 'customers-16',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States110Data,
};

export const iconsNavigationIcon12States111Data = {
    src: '/img/fontawsome--bookmark--10@1x.png',
    className: 'icons-navigation-icon-12-states-37',
};

export const sidebarMenuItem73Data = {
    name: 'Thèmes articles',
    className: 'thmes-articles-16',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States111Data,
};

export const iconsNavigationIcon12States112Data = {
    src: '/img/ic-invoice-10@1x.png',
    className: 'icons-navigation-icon-12-states-5',
};

export const articles15Data = {
    className: 'articles-14',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States112Data,
};

export const tradingCrypto81Data = {
    iconPencil: '/img/fontawsome--pen--10@1x.png',
    name: 'Trading & Crypto',
    className: 'trading-crypto-13',
};

export const tradingCrypto82Data = {
    iconPencil: '/img/fontawsome--robot--10@1x.png',
    name: 'Bot Trading',
    className: 'bot-trading-16',
};

export const tradingCrypto83Data = {
    iconPencil: '/img/fontawsome--bitcoin--11@1x.png',
    name: 'Crypto Wallet',
    className: 'crypto-wallet-16',
};

export const tradingCrypto84Data = {
    iconPencil: '/img/fontawsome--handshake--10@1x.png',
    name: 'Broker',
    className: 'broker-15',
};

export const tradingCrypto85Data = {
    iconPencil: '/img/fontawsome--globe-europe--10@1x.png',
    name: 'Pays',
    className: 'pays-16',
};

export const gestionAbonnements2Data = {
    children: 'Gestion Abonnements',
    className: 'gestion-abonnements-1',
};

export const gestionAbonnements3Data = {
    children: 'Code promo',
    className: 'code-promo-1',
};

export const essaiGratuit1Data = {
    name: 'Essai gratuit',
};

export const essaiGratuit2Data = {
    name: 'Code gratuit',
    className: 'code-gratuit-1',
};

export const abonnement32Data = {
    overlapGroup: '/img/frame-12@1x.png',
    iconMaterialPayment: '/img/icon-material-payment-15@1x.png',
    name: 'Abonnement',
    gestionAbonnements1Props: gestionAbonnements2Data,
    gestionAbonnements2Props: gestionAbonnements3Data,
    essaiGratuit1Props: essaiGratuit1Data,
    essaiGratuit2Props: essaiGratuit2Data,
};

export const iconsNavigationIcon12States113Data = {
    src: '/img/ic-setting-11@1x.png',
    className: 'icons-navigation-icon-12-states-5',
};

export const sidebarMenuItem74Data = {
    name: 'Settings',
    className: 'settings-16',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States113Data,
};

export const groupe3936Data = {
    children: 'Créer un abonnement',
    className: 'groupe-393-7',
};

export const buttonsBtnTextIcon45Data = {
    className: 'buttons-btn-text-icon-26',
    groupe393Props: groupe3936Data,
};

export const titre8Data = {
    children: 'Informations',
    className: 'titre-6',
};

export const iDFixe20Data = {
    idUser: 'Nom',
    number: 'Novice',
    ligne6: '/img/ligne-6-1@1x.png',
    className: 'nom-2',
};

export const iDFixe21Data = {
    idUser: 'Prix',
    number: '49.99 €',
    ligne6: '/img/ligne-6-1@1x.png',
    className: 'prix-1',
};

export const iDFixe27Data = {
    idUser: 'Durée',
    number: '30',
    ligne6: '/img/ligne-6-1@1x.png',
    className: 'dure-1',
};

export const type2Data = {
    type: 'Type',
    mensuel: 'Mensuel',
};

export const bestSeller3Data = {
    children: 'Best Seller',
};

export const bestSeller4Data = {
    children: 'Visible',
    className: 'visible-1',
};

export const priodeDessaiData = {
    on: 'ON',
    priodeDessai: 'Période d’essai',
};

export const iDFixe28Data = {
    idUser: 'Prix',
    number: '49.99 €',
    ligne6: '/img/ligne-6-1@1x.png',
    className: 'prix-2',
};

export const iDFixe29Data = {
    idUser: 'Durée',
    number: '30',
    ligne6: '/img/ligne-6-1@1x.png',
    className: 'dure-2',
};

export const type3Data = {
    type: 'Type',
    mensuel: 'Mensuel',
    className: 'type-2',
};

export const topNavigationSearch15Data = {
    color: '/img/color-10@1x.png',
    className: 'top-navigation-search-14',
};

export const usersAvatarPhoto2States22Data = {
    image: '/img/image-11@1x.png',
    className: 'users-avatar-photo-2-states-20',
};

export const userGroup19Data = {
    usersAvatarPhoto2StatesProps: usersAvatarPhoto2States22Data,
};

export const topNavigation14Data = {
    groupe2: '/img/groupe-1-10@1x.png',
    className: 'top-navigation-2',
    topNavigationSearchProps: topNavigationSearch15Data,
    userGroupProps: userGroup19Data,
};

export const iconsNavigationIcon12States114Data = {
    src: '/img/ic-home-10@1x.png',
    className: 'icons-navigation-icon-12-states-5',
};

export const sidebarMenuItem75Data = {
    name: 'Home',
    className: 'home-17',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States114Data,
};

export const iconsNavigationIcon12States115Data = {
    src: '/img/ic-users-11@1x.png',
    className: 'icons-navigation-icon-12-states-5',
};

export const sidebarMenuItem76Data = {
    name: 'Utilisateurs',
    className: 'customers-17',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States115Data,
};

export const iconsNavigationIcon12States116Data = {
    src: '/img/fontawsome--bookmark--10@1x.png',
    className: 'icons-navigation-icon-12-states-38',
};

export const sidebarMenuItem77Data = {
    name: 'Thèmes articles',
    className: 'thmes-articles-17',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States116Data,
};

export const iconsNavigationIcon12States117Data = {
    src: '/img/ic-invoice-10@1x.png',
    className: 'icons-navigation-icon-12-states-5',
};

export const articles16Data = {
    className: 'articles-15',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States117Data,
};

export const tradingCrypto86Data = {
    iconPencil: '/img/fontawsome--pen--10@1x.png',
    name: 'Trading & Crypto',
    className: 'trading-crypto-14',
};

export const tradingCrypto87Data = {
    iconPencil: '/img/fontawsome--robot--10@1x.png',
    name: 'Bot Trading',
    className: 'bot-trading-17',
};

export const tradingCrypto88Data = {
    iconPencil: '/img/fontawsome--bitcoin--11@1x.png',
    name: 'Crypto Wallet',
    className: 'crypto-wallet-17',
};

export const tradingCrypto89Data = {
    iconPencil: '/img/fontawsome--handshake--10@1x.png',
    name: 'Broker',
    className: 'broker-16',
};

export const tradingCrypto90Data = {
    iconPencil: '/img/fontawsome--globe-europe--10@1x.png',
    name: 'Pays',
    className: 'pays-17',
};

export const gestionAbonnements4Data = {
    children: 'Gestion Abonnements',
};

export const gestionAbonnements5Data = {
    children: 'Code promo',
    className: 'code-promo-2',
};

export const abonnement42Data = {
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

export const iconsNavigationIcon12States118Data = {
    src: '/img/ic-setting-11@1x.png',
    className: 'icons-navigation-icon-12-states-5',
};

export const sidebarMenuItem78Data = {
    name: 'Settings',
    className: 'settings-17',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States118Data,
};

export const filtre17Data = {
    name: 'Etat',
    className: 'filtre-16',
};

export const filtre18Data = {
    name: 'Utiliser',
    className: 'filtre-17',
};

export const gridTable2Data = {
    name1: 'Code',
    name2: 'Réduction',
    name3: 'Abonnement',
    name4: 'Nombre d’utilisation',
    name5: 'Etat (Actif/Désactiver)',
    className: 'grid-table-7',
};

export const icSearch7Data = {
    className: 'x00-general-01-icons-5',
};

export const topNavigationSearch27Data = {
    icSearchProps: icSearch7Data,
};

export const usersAvatarPhoto2States23Data = {
    image: '/img/image-14@1x.png',
    className: 'users-avatar-photo-2-states-21',
};

export const userGroup20Data = {
    usersAvatarPhoto2StatesProps: usersAvatarPhoto2States23Data,
};

export const topNavigation26Data = {
    groupe2: '/img/groupe-1-12@1x.png',
    className: 'top-navigation-2',
    topNavigationSearch2Props: topNavigationSearch27Data,
    userGroupProps: userGroup20Data,
};

export const iconsNavigationIcon12States119Data = {
    src: '/img/ic-home-10@1x.png',
    className: 'icons-navigation-icon-12-states-5',
};

export const sidebarMenuItem79Data = {
    name: 'Home',
    className: 'home-18',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States119Data,
};

export const iconsNavigationIcon12States120Data = {
    src: '/img/ic-users-11@1x.png',
    className: 'icons-navigation-icon-12-states-5',
};

export const sidebarMenuItem80Data = {
    name: 'Utilisateurs',
    className: 'customers-18',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States120Data,
};

export const iconsNavigationIcon12States121Data = {
    src: '/img/fontawsome--bookmark--10@1x.png',
    className: 'icons-navigation-icon-12-states-39',
};

export const sidebarMenuItem81Data = {
    name: 'Thèmes articles',
    className: 'thmes-articles-18',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States121Data,
};

export const iconsNavigationIcon12States122Data = {
    src: '/img/ic-invoice-10@1x.png',
    className: 'icons-navigation-icon-12-states-5',
};

export const articles17Data = {
    className: 'articles-16',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States122Data,
};

export const tradingCrypto91Data = {
    iconPencil: '/img/fontawsome--pen--10@1x.png',
    name: 'Trading & Crypto',
    className: 'trading-crypto-15',
};

export const tradingCrypto92Data = {
    iconPencil: '/img/fontawsome--robot--10@1x.png',
    name: 'Bot Trading',
    className: 'bot-trading-18',
};

export const tradingCrypto93Data = {
    iconPencil: '/img/fontawsome--bitcoin--11@1x.png',
    name: 'Crypto Wallet',
    className: 'crypto-wallet-18',
};

export const tradingCrypto94Data = {
    iconPencil: '/img/fontawsome--handshake--10@1x.png',
    name: 'Broker',
    className: 'broker-17',
};

export const tradingCrypto95Data = {
    iconPencil: '/img/fontawsome--globe-europe--10@1x.png',
    name: 'Pays',
    className: 'pays-18',
};

export const gestionAbonnements6Data = {
    children: 'Gestion Abonnements',
};

export const gestionAbonnements7Data = {
    children: 'Code promo',
    className: 'code-promo-3',
};

export const essaiGratuit3Data = {
    name: 'Essai gratuit',
    className: '',
};

export const essaiGratuit4Data = {
    name: 'Code gratuit',
    className: 'code-gratuit-2',
};

export const abonnement222Data = {
    overlapGroup: '/img/frame-12@1x.png',
    gestionAbonnements1Props: gestionAbonnements6Data,
    gestionAbonnements2Props: gestionAbonnements7Data,
    essaiGratuit1Props: essaiGratuit3Data,
    essaiGratuit2Props: essaiGratuit4Data,
};

export const iconsNavigationIcon12States123Data = {
    src: '/img/ic-setting-11@1x.png',
    className: 'icons-navigation-icon-12-states-5',
};

export const sidebarMenuItem82Data = {
    name: 'Settings',
    className: 'settings-18',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States123Data,
};

export const groupe393422Data = {
    children: 'Créer code promo',
    className: '',
};

export const buttonsBtnTextIcon821Data = {
    groupe3934Props: groupe393422Data,
};

export const titre9Data = {
    children: 'Informations',
    className: 'titre-7',
};

export const iDFixe30Data = {
    idUser: 'Nom',
    number: 'TEST30',
    ligne6: '/img/ligne-6-1@1x.png',
    className: 'nom-3',
};

export const iDFixe31Data = {
    idUser: 'Réduction en %',
    number: '30',
    ligne6: '/img/ligne-6-1@1x.png',
    className: 'rduction',
};

export const bestSeller5Data = {
    children: 'Actif',
    className: 'renouvellement-5',
};

export const type4Data = {
    type: 'Abonnement',
    mensuel: 'Choisir',
    className: 'abonnement-15',
};

export const abonnement422Data = {
    typeProps: type4Data,
};

export const topNavigationSearch16Data = {
    color: '/img/color-10@1x.png',
    className: 'top-navigation-search-15',
};

export const usersAvatarPhoto2States24Data = {
    image: '/img/image-22@1x.png',
    className: 'users-avatar-photo-2-states-22',
};

export const userGroup21Data = {
    usersAvatarPhoto2StatesProps: usersAvatarPhoto2States24Data,
};

export const topNavigation15Data = {
    groupe2: '/img/groupe-1-20@1x.png',
    className: 'top-navigation-2',
    topNavigationSearchProps: topNavigationSearch16Data,
    userGroupProps: userGroup21Data,
};

export const iconsNavigationIcon12States124Data = {
    src: '/img/ic-home-10@1x.png',
    className: 'icons-navigation-icon-12-states-5',
};

export const sidebarMenuItem83Data = {
    name: 'Home',
    className: 'home-19',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States124Data,
};

export const iconsNavigationIcon12States125Data = {
    src: '/img/ic-users-11@1x.png',
    className: 'icons-navigation-icon-12-states-5',
};

export const sidebarMenuItem84Data = {
    name: 'Utilisateurs',
    className: 'customers-19',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States125Data,
};

export const iconsNavigationIcon12States126Data = {
    src: '/img/fontawsome--bookmark--10@1x.png',
    className: 'icons-navigation-icon-12-states-40',
};

export const sidebarMenuItem85Data = {
    name: 'Thèmes articles',
    className: 'thmes-articles-19',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States126Data,
};

export const iconsNavigationIcon12States127Data = {
    src: '/img/ic-invoice-10@1x.png',
    className: 'icons-navigation-icon-12-states-5',
};

export const articles18Data = {
    className: 'articles-17',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States127Data,
};

export const tradingCrypto96Data = {
    iconPencil: '/img/fontawsome--pen--10@1x.png',
    name: 'Trading & Crypto',
    className: 'trading-crypto-16',
};

export const tradingCrypto97Data = {
    iconPencil: '/img/fontawsome--robot--10@1x.png',
    name: 'Bot Trading',
    className: 'bot-trading-19',
};

export const tradingCrypto98Data = {
    iconPencil: '/img/fontawsome--bitcoin--11@1x.png',
    name: 'Crypto Wallet',
    className: 'crypto-wallet-19',
};

export const tradingCrypto99Data = {
    iconPencil: '/img/fontawsome--handshake--10@1x.png',
    name: 'Broker',
    className: 'broker-18',
};

export const tradingCrypto100Data = {
    iconPencil: '/img/fontawsome--globe-europe--10@1x.png',
    name: 'Pays',
    className: 'pays-19',
};

export const gestionAbonnements8Data = {
    children: 'Gestion Abonnements',
};

export const gestionAbonnements9Data = {
    children: 'Code promo',
    className: 'code-promo-4',
};

export const essaiGratuit5Data = {
    name: 'Essai gratuit',
    className: 'essai-gratuit-2',
};

export const essaiGratuit6Data = {
    name: 'Code gratuit',
    className: 'code-gratuit-3',
};

export const abonnement223Data = {
    overlapGroup: '/img/frame-12@1x.png',
    gestionAbonnements1Props: gestionAbonnements8Data,
    gestionAbonnements2Props: gestionAbonnements9Data,
    essaiGratuit1Props: essaiGratuit5Data,
    essaiGratuit2Props: essaiGratuit6Data,
};

export const iconsNavigationIcon12States128Data = {
    src: '/img/ic-setting-11@1x.png',
    className: 'icons-navigation-icon-12-states-5',
};

export const sidebarMenuItem86Data = {
    name: 'Settings',
    className: 'settings-19',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States128Data,
};

export const filtre19Data = {
    name: 'Etat',
    className: 'filtre-18',
};

export const buttonsBtnTextIcon83Data = {
    className: 'buttons-btn-text-icon-41',
};

export const groupe39332Data = {
    children: 'Générer code',
    className: 'groupe-393-12',
};

export const buttonsBtnTextIcon72Data = {
    className: 'buttons-btn-text-icon-39',
    groupe3933Props: groupe39332Data,
};

export const icSearch8Data = {
    className: 'x00-general-01-icons-6',
};

export const topNavigationSearch28Data = {
    icSearchProps: icSearch8Data,
};

export const usersAvatarPhoto2States25Data = {
    image: '/img/image-23@1x.png',
    className: 'users-avatar-photo-2-states-23',
};

export const userGroup22Data = {
    usersAvatarPhoto2StatesProps: usersAvatarPhoto2States25Data,
};

export const topNavigation27Data = {
    groupe2: '/img/groupe-1-21@1x.png',
    className: 'top-navigation-2',
    topNavigationSearch2Props: topNavigationSearch28Data,
    userGroupProps: userGroup22Data,
};

export const iconsNavigationIcon12States129Data = {
    src: '/img/ic-home-10@1x.png',
    className: 'icons-navigation-icon-12-states-5',
};

export const sidebarMenuItem87Data = {
    name: 'Home',
    className: 'home-20',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States129Data,
};

export const iconsNavigationIcon12States130Data = {
    src: '/img/ic-users-11@1x.png',
    className: 'icons-navigation-icon-12-states-5',
};

export const sidebarMenuItem88Data = {
    name: 'Utilisateurs',
    className: 'customers-20',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States130Data,
};

export const iconsNavigationIcon12States131Data = {
    src: '/img/fontawsome--bookmark--10@1x.png',
    className: 'icons-navigation-icon-12-states-41',
};

export const sidebarMenuItem89Data = {
    name: 'Thèmes articles',
    className: 'thmes-articles-20',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States131Data,
};

export const iconsNavigationIcon12States132Data = {
    src: '/img/ic-invoice-10@1x.png',
    className: 'icons-navigation-icon-12-states-5',
};

export const articles19Data = {
    className: 'articles-18',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States132Data,
};

export const tradingCrypto101Data = {
    iconPencil: '/img/fontawsome--pen--10@1x.png',
    name: 'Trading & Crypto',
    className: 'trading-crypto-17',
};

export const tradingCrypto102Data = {
    iconPencil: '/img/fontawsome--robot--10@1x.png',
    name: 'Bot Trading',
    className: 'bot-trading-20',
};

export const tradingCrypto103Data = {
    iconPencil: '/img/fontawsome--bitcoin--11@1x.png',
    name: 'Crypto Wallet',
    className: 'crypto-wallet-20',
};

export const tradingCrypto104Data = {
    iconPencil: '/img/fontawsome--handshake--10@1x.png',
    name: 'Broker',
    className: 'broker-19',
};

export const tradingCrypto105Data = {
    iconPencil: '/img/fontawsome--globe-europe--10@1x.png',
    name: 'Pays',
    className: 'pays-20',
};

export const gestionAbonnements10Data = {
    children: 'Gestion Abonnements',
};

export const gestionAbonnements11Data = {
    children: 'Code promo',
    className: 'code-promo-5',
};

export const essaiGratuit7Data = {
    name: 'Essai gratuit',
    className: 'essai-gratuit-3',
};

export const essaiGratuit8Data = {
    name: 'Code gratuit',
    className: 'code-gratuit-4',
};

export const abonnement224Data = {
    overlapGroup: '/img/frame-12@1x.png',
    gestionAbonnements1Props: gestionAbonnements10Data,
    gestionAbonnements2Props: gestionAbonnements11Data,
    essaiGratuit1Props: essaiGratuit7Data,
    essaiGratuit2Props: essaiGratuit8Data,
};

export const iconsNavigationIcon12States133Data = {
    src: '/img/ic-setting-11@1x.png',
    className: 'icons-navigation-icon-12-states-5',
};

export const sidebarMenuItem90Data = {
    name: 'Settings',
    className: 'settings-20',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States133Data,
};

export const groupe393423Data = {
    children: 'Créer essai gratuit',
    className: 'groupe-393-15',
};

export const buttonsBtnTextIcon822Data = {
    className: 'buttons-btn-text-icon-43',
    groupe3934Props: groupe393423Data,
};

export const titre10Data = {
    children: 'Informations',
    className: 'titre-8',
};

export const iDFixe32Data = {
    idUser: 'Prix',
    number: '0',
    ligne6: '/img/ligne-6-1@1x.png',
    className: 'prix-3',
};

export const iDFixe33Data = {
    idUser: 'Durée d’essai',
    number: '30',
    ligne6: '/img/ligne-6-1@1x.png',
    className: 'dure-3',
};

export const bestSeller6Data = {
    children: 'Actif',
    className: 'visible-2',
};

export const type5Data = {
    type: 'Type',
    mensuel: 'Mensuel',
    className: 'type-3',
};

export const type6Data = {
    type: 'Sélectionner Abonnement',
    mensuel: 'Choisir',
    className: 'abonnement-16',
};

export const abonnement423Data = {
    className: 'abonnement-21',
    typeProps: type6Data,
};

export const iDFixe34Data = {
    idUser: 'Nom de la campagne (Essai gratuit)',
    number: 'Broker (30j)',
    ligne6: '/img/ligne-6-1@1x.png',
    className: 'prix-4',
};

export const topNavigationSearch17Data = {
    color: '/img/color-10@1x.png',
    className: 'top-navigation-search-16',
};

export const usersAvatarPhoto2States26Data = {
    image: '/img/image-22@1x.png',
    className: 'users-avatar-photo-2-states-24',
};

export const userGroup23Data = {
    usersAvatarPhoto2StatesProps: usersAvatarPhoto2States26Data,
};

export const topNavigation16Data = {
    groupe2: '/img/groupe-1-20@1x.png',
    className: 'top-navigation-2',
    topNavigationSearchProps: topNavigationSearch17Data,
    userGroupProps: userGroup23Data,
};

export const iconsNavigationIcon12States134Data = {
    src: '/img/ic-home-10@1x.png',
    className: 'icons-navigation-icon-12-states-5',
};

export const sidebarMenuItem91Data = {
    name: 'Home',
    className: 'home-21',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States134Data,
};

export const iconsNavigationIcon12States135Data = {
    src: '/img/ic-users-11@1x.png',
    className: 'icons-navigation-icon-12-states-5',
};

export const sidebarMenuItem92Data = {
    name: 'Utilisateurs',
    className: 'customers-21',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States135Data,
};

export const iconsNavigationIcon12States136Data = {
    src: '/img/fontawsome--bookmark--10@1x.png',
    className: 'icons-navigation-icon-12-states-42',
};

export const sidebarMenuItem93Data = {
    name: 'Thèmes articles',
    className: 'thmes-articles-21',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States136Data,
};

export const iconsNavigationIcon12States137Data = {
    src: '/img/ic-invoice-10@1x.png',
    className: 'icons-navigation-icon-12-states-5',
};

export const articles20Data = {
    className: 'articles-19',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States137Data,
};

export const tradingCrypto106Data = {
    iconPencil: '/img/fontawsome--pen--10@1x.png',
    name: 'Trading & Crypto',
    className: 'trading-crypto-18',
};

export const tradingCrypto107Data = {
    iconPencil: '/img/fontawsome--robot--10@1x.png',
    name: 'Bot Trading',
    className: 'bot-trading-21',
};

export const tradingCrypto108Data = {
    iconPencil: '/img/fontawsome--bitcoin--11@1x.png',
    name: 'Crypto Wallet',
    className: 'crypto-wallet-21',
};

export const tradingCrypto109Data = {
    iconPencil: '/img/fontawsome--handshake--10@1x.png',
    name: 'Broker',
    className: 'broker-20',
};

export const tradingCrypto110Data = {
    iconPencil: '/img/fontawsome--globe-europe--10@1x.png',
    name: 'Pays',
    className: 'pays-21',
};

export const essaiGratuit9Data = {
    name: 'Code gratuit',
    className: 'code-gratuit-5',
};

export const abonnement72Data = {
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

export const iconsNavigationIcon12States138Data = {
    src: '/img/ic-setting-11@1x.png',
    className: 'icons-navigation-icon-12-states-5',
};

export const sidebarMenuItem94Data = {
    name: 'Settings',
    className: 'settings-21',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States138Data,
};

export const filtre20Data = {
    name: 'Utiliser',
    className: 'filtre-19',
};

export const iconFeatherCopy2Data = {
    className: 'icon-feather-copy-1',
};

export const iconFeatherCopy3Data = {
    className: 'icon-feather-copy-2',
};
