import React from 'react';
import TopNavigationSearch from '../components/TopNavigationSearch';
import UserGroup from '../components/UserGroup';
import SidebarMenuItem2 from '../components/SidebarMenuItem2';
import SidebarMenuItem from '../components/SidebarMenuItem';
import Articles from '../components/Articles';
import TradingCrypto from './TradingCrypto';
import Abonnement from '../components/Abonnement';
import TabGroupElementsRegularTab2States from '../components/TabGroupElementsRegularTab2States';
import TabGroupElementsRegularTab2States2 from '../components/TabGroupElementsRegularTab2States2';
import Date from '../components/Date';
import WidgetsDataCardWithIcons2 from '../components/WidgetsDataCardWithIcons2';
import WidgetsDataCardWithIcons3 from '../components/WidgetsDataCardWithIcons3';
import WidgetsDataCardWithIcons4 from '../components/WidgetsDataCardWithIcons4';
import WidgetsDataCardWithIcons5 from '../components/WidgetsDataCardWithIcons5';
import WidgetsDataCardWithCharts2 from '../components/WidgetsDataCardWithCharts2';
import Legend from '../components/Legend';
import ChartLeftValue from '../components/ChartLeftValue';
import Day from '../components/Day';
import TooltipPointerLeft2 from '../components/TooltipPointerLeft2';
import styled from 'styled-components';
import { PoppinsNormalBlueBell12px, PoppinsSemiboldSemiBoldMirage24px } from '../styledMixins';

function Home({ data: props }: { data: HomeData }) {
    const {
        groupe2,
        analytics,
        customerGrowth,
        text2,
        text3,
        text4,
        text5,
        text6,
        topNavigationSearchProps,
        userGroupProps,
        sidebarMenuItem2Props,
        sidebarMenuItem1Props,
        sidebarMenuItem2Props2,
        articlesProps,
        tradingCrypto1Props,
        tradingCrypto2Props,
        tradingCrypto3Props,
        tradingCrypto4Props,
        tradingCrypto5Props,
        sidebarMenuItem3Props,
        tabGroupElementsRegularTab2States1Props,
        tabGroupElementsRegularTab2States2Props,
        tabGroupElementsRegularTab2States2Props2,
        dateProps,
        widgetsDataCardWithIcons2Props,
        widgetsDataCardWithIcons3Props,
        widgetsDataCardWithIcons4Props,
        widgetsDataCardWithIcons5Props,
        widgetsDataCardWithCharts21Props,
        widgetsDataCardWithCharts22Props,
        widgetsDataCardWithCharts23Props,
        legendProps,
        chartLeftValue1Props,
        chartLeftValue2Props,
        chartLeftValue3Props,
        chartLeftValue4Props,
        chartLeftValue5Props,
        chartLeftValue6Props,
        chartLeftValue7Props,
        dayProps,
        tooltipPointerLeft2Props,
    } = props;

    return (
        <div className="container-center-horizontal">
            <div className="home screen">
                <TopNavigation>
                    <Groupe2 style={{ backgroundImage: `url(${groupe2})` }}></Groupe2>
                    <TopNavigationSearch
                        color={topNavigationSearchProps.color}
                        className={topNavigationSearchProps.className}
                    />
                    <UserGroup usersAvatarPhoto2StatesProps={userGroupProps.usersAvatarPhoto2StatesProps} />
                </TopNavigation>
                <FlexRow>
                    <Sidebar>
                        <SidebarMenuItem2
                            name={sidebarMenuItem2Props.name}
                            className={sidebarMenuItem2Props.className}
                            iconsNavigationIcon12StatesProps={sidebarMenuItem2Props.iconsNavigationIcon12StatesProps}
                        />
                        <SidebarMenuItem
                            name={sidebarMenuItem1Props.name}
                            className={sidebarMenuItem1Props.className}
                            iconsNavigationIcon12StatesProps={sidebarMenuItem1Props.iconsNavigationIcon12StatesProps}
                        />
                        <SidebarMenuItem
                            name={sidebarMenuItem2Props2.name}
                            className={sidebarMenuItem2Props2.className}
                            iconsNavigationIcon12StatesProps={sidebarMenuItem2Props2.iconsNavigationIcon12StatesProps}
                        />
                        <Articles iconsNavigationIcon12StatesProps={articlesProps.iconsNavigationIcon12StatesProps} />
                        <TradingCrypto iconPencil={tradingCrypto1Props.iconPencil} name={tradingCrypto1Props.name} />
                        <TradingCrypto
                            iconPencil={tradingCrypto2Props.iconPencil}
                            name={tradingCrypto2Props.name}
                            className={tradingCrypto2Props.className}
                        />
                        <TradingCrypto
                            iconPencil={tradingCrypto3Props.iconPencil}
                            name={tradingCrypto3Props.name}
                            className={tradingCrypto3Props.className}
                        />
                        <TradingCrypto
                            iconPencil={tradingCrypto4Props.iconPencil}
                            name={tradingCrypto4Props.name}
                            className={tradingCrypto4Props.className}
                        />
                        <TradingCrypto
                            iconPencil={tradingCrypto5Props.iconPencil}
                            name={tradingCrypto5Props.name}
                            className={tradingCrypto5Props.className}
                        />
                        <Abonnement />
                        <SidebarMenuItem
                            name={sidebarMenuItem3Props.name}
                            className={sidebarMenuItem3Props.className}
                            iconsNavigationIcon12StatesProps={sidebarMenuItem3Props.iconsNavigationIcon12StatesProps}
                        />
                    </Sidebar>
                    <FlexCol>
                        <FlexRow1>
                            <Analytics>{analytics}</Analytics>
                            <SortFilter>
                                <Tabs>
                                    <TabGroup>
                                        <Tabs1>
                                            <TabGroupElementsRegularTab2States>
                                                {tabGroupElementsRegularTab2States1Props.children}
                                            </TabGroupElementsRegularTab2States>
                                            <TabGroupElementsRegularTab2States2
                                                className={tabGroupElementsRegularTab2States2Props.className}>
                                                {tabGroupElementsRegularTab2States2Props.children}
                                            </TabGroupElementsRegularTab2States2>
                                            <TabGroupElementsRegularTab2States
                                                className={tabGroupElementsRegularTab2States2Props2.className}>
                                                {tabGroupElementsRegularTab2States2Props2.children}
                                            </TabGroupElementsRegularTab2States>
                                        </Tabs1>
                                    </TabGroup>
                                </Tabs>
                                <Date buttonsBtnTextIcon2Props={dateProps.buttonsBtnTextIcon2Props} />
                            </SortFilter>
                        </FlexRow1>
                        <DataCard>
                            <WidgetsDataCardWithIcons2
                                sales={widgetsDataCardWithIcons2Props.sales}
                                x27632={widgetsDataCardWithIcons2Props.x27632}
                                iconsWidgetIllustrationProps={
                                    widgetsDataCardWithIcons2Props.iconsWidgetIllustrationProps
                                }
                            />
                            <WidgetsDataCardWithIcons3
                                sales={widgetsDataCardWithIcons3Props.sales}
                                x27632={widgetsDataCardWithIcons3Props.x27632}
                                iconsWidgetIllustration2Props={
                                    widgetsDataCardWithIcons3Props.iconsWidgetIllustration2Props
                                }
                            />
                            <WidgetsDataCardWithIcons4
                                sales={widgetsDataCardWithIcons4Props.sales}
                                x27632={widgetsDataCardWithIcons4Props.x27632}
                                iconsWidgetIllustration3Props={
                                    widgetsDataCardWithIcons4Props.iconsWidgetIllustration3Props
                                }
                            />
                            <WidgetsDataCardWithIcons5
                                sales={widgetsDataCardWithIcons5Props.sales}
                                x27632={widgetsDataCardWithIcons5Props.x27632}
                                iconsWidgetIllustration4Props={
                                    widgetsDataCardWithIcons5Props.iconsWidgetIllustration4Props
                                }
                            />
                        </DataCard>
                        <DataWidgets>
                            <WidgetsDataCardWithCharts2
                                sales={widgetsDataCardWithCharts21Props.sales}
                                x27632={widgetsDataCardWithCharts21Props.x27632}
                                widgetsElementsChartMiniChartProps={
                                    widgetsDataCardWithCharts21Props.widgetsElementsChartMiniChartProps
                                }
                            />
                            <WidgetsDataCardWithCharts2
                                sales={widgetsDataCardWithCharts22Props.sales}
                                x27632={widgetsDataCardWithCharts22Props.x27632}
                                className={widgetsDataCardWithCharts22Props.className}
                                widgetsElementsChartMiniChartProps={
                                    widgetsDataCardWithCharts22Props.widgetsElementsChartMiniChartProps
                                }
                            />
                            <WidgetsDataCardWithCharts2
                                sales={widgetsDataCardWithCharts23Props.sales}
                                x27632={widgetsDataCardWithCharts23Props.x27632}
                                className={widgetsDataCardWithCharts23Props.className}
                                widgetsElementsChartMiniChartProps={
                                    widgetsDataCardWithCharts23Props.widgetsElementsChartMiniChartProps
                                }
                            />
                        </DataWidgets>
                        <CustomerGrowth>
                            <CustomerGrowth1>{customerGrowth}</CustomerGrowth1>
                            <Legend1>
                                <Legend className={legendProps.className}>{legendProps.children}</Legend>
                            </Legend1>
                            <OverlapGroup1>
                                <Value>
                                    <ChartLeftValue>{chartLeftValue1Props.children}</ChartLeftValue>
                                    <ChartLeftValue className={chartLeftValue2Props.className}>
                                        {chartLeftValue2Props.children}
                                    </ChartLeftValue>
                                    <ChartLeftValue className={chartLeftValue3Props.className}>
                                        {chartLeftValue3Props.children}
                                    </ChartLeftValue>
                                    <ChartLeftValue className={chartLeftValue4Props.className}>
                                        {chartLeftValue4Props.children}
                                    </ChartLeftValue>
                                    <OverlapGroup>
                                        <ChartLeftValue className={chartLeftValue5Props.className}>
                                            {chartLeftValue5Props.children}
                                        </ChartLeftValue>
                                        <ChartLeftValue className={chartLeftValue6Props.className}>
                                            {chartLeftValue6Props.children}
                                        </ChartLeftValue>
                                        <ChartLeftValue className={chartLeftValue7Props.className}>
                                            {chartLeftValue7Props.children}
                                        </ChartLeftValue>
                                        <Day />
                                        <Day1>
                                            <Rectangle615></Rectangle615>
                                            <Text2>{text2}</Text2>
                                        </Day1>
                                        <Day2>
                                            <Rectangle6151></Rectangle6151>
                                            <Text2>{text3}</Text2>
                                        </Day2>
                                        <Day3>
                                            <Rectangle6152></Rectangle6152>
                                            <Text4>{text4}</Text4>
                                        </Day3>
                                        <Day4>
                                            <Rectangle6153></Rectangle6153>
                                            <Text4>{text5}</Text4>
                                        </Day4>
                                        <Day5>
                                            <Rectangle6154></Rectangle6154>
                                            <Text4>{text6}</Text4>
                                        </Day5>
                                        <Day className={dayProps.className} />
                                    </OverlapGroup>
                                </Value>
                                <GroupeDfilant4>
                                    <TooltipPointerLeft2
                                        bg={tooltipPointerLeft2Props.bg}
                                        titlee={tooltipPointerLeft2Props.titlee}
                                        x750={tooltipPointerLeft2Props.x750}
                                        onlineSales={tooltipPointerLeft2Props.onlineSales}
                                    />
                                </GroupeDfilant4>
                            </OverlapGroup1>
                        </CustomerGrowth>
                    </FlexCol>
                </FlexRow>
            </div>
        </div>
    );
}

const TopNavigation = styled.div`
    height: 68px;
    position: relative;
    display: flex;
    padding: 14px 40px;
    justify-content: flex-end;
    align-items: center;
    min-width: 1600px;
    background-color: var(--vulcan);
    box-shadow: 0px 1px 4px #15223214;
`;

const Groupe2 = styled.div`
    width: 113px;
    height: 21px;
    margin-top: 0;
    background-size: cover;
    background-position: 50% 50%;
`;

const FlexRow = styled.div`
    height: 938px;
    display: flex;
    align-items: center;
    min-width: 1562px;
`;

const Sidebar = styled.div`
    width: 250px;
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 20px 0;
    align-items: flex-start;
    min-height: 938px;
    background-color: var(--white);
`;

const FlexCol = styled.div`
    width: 1272px;
    margin-left: 40px;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    min-height: 842px;
`;

const FlexRow1 = styled.div`
    align-self: flex-end;
    margin-right: 2px;
    display: flex;
    align-items: flex-start;
    min-width: 1259px;
`;

const Analytics = styled.div`
    ${PoppinsSemiboldSemiBoldMirage24px}
    min-height: 35px;
    align-self: flex-end;
    min-width: 74px;
    text-align: center;
    letter-spacing: 0.1px;
    line-height: 36px;
    white-space: nowrap;
`;

const SortFilter = styled.div`
    width: 407px;
    height: 36px;
    position: relative;
    margin-left: 778px;
    display: flex;
    justify-content: space-between;
`;

const Tabs = styled.div`
    width: 188px;
    display: flex;
`;

const TabGroup = styled.div`
    flex: 1;
    width: 188px;
    display: flex;
    background-color: var(--snuff);
    border-radius: 4px;
`;

const Tabs1 = styled.div`
    margin-top: 1px;
    margin-left: 1px;
    margin-bottom: 1px;
    position: relative;
    display: flex;
    align-items: flex-start;
    min-width: 186px;
`;

const DataCard = styled.div`
    height: 150px;
    position: relative;
    margin-top: 38px;
    display: flex;
    align-items: flex-start;
    min-width: 1272px;
`;

const DataWidgets = styled.div`
    height: 134px;
    position: relative;
    margin-top: 22px;
    display: flex;
    align-items: flex-start;
    min-width: 1270px;
`;

const CustomerGrowth = styled.div`
    width: 840px;
    margin-top: 22px;
    display: flex;
    flex-direction: column;
    padding: 33.5px 27.6px;
    align-items: flex-start;
    min-height: 440px;
    background-color: var(--white);
    border-radius: 6px;
    box-shadow: 0px 1px 4px #15223214;
`;

const CustomerGrowth1 = styled.div`
    min-height: 27px;
    margin-left: 2.39px;
    font-family: var(--font-family-poppins);
    font-weight: 600;
    color: var(--vulcan);
    font-size: 18px;
    letter-spacing: 0.11px;
    line-height: 18px;
    white-space: nowrap;
`;

const Legend1 = styled.div`
    width: 170px;
    height: 20px;
    position: relative;
    margin-top: 10px;
    margin-left: 2.39px;
    display: flex;
`;

const OverlapGroup1 = styled.div`
    width: 777px;
    height: 283px;
    position: relative;
    align-self: flex-end;
    margin-top: 30px;
`;

const Value = styled.div`
    position: absolute;
    width: 777px;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    min-height: 283px;
`;

const OverlapGroup = styled.div`
    width: 774px;
    height: 126px;
    position: relative;
    margin-top: 22px;
    margin-left: 3px;
`;

const Day1 = styled.div`
    position: absolute;
    width: 42px;
    top: 66px;
    left: 147px;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 60px;
`;

const Rectangle615 = styled.div`
    width: 7px;
    height: 28px;
    margin-right: 3px;
    background-color: var(--blue-ribbon);
`;

const Text2 = styled.div`
    ${PoppinsNormalBlueBell12px}
    width: 42px;
    margin-bottom: -1px;
    min-height: 19px;
    margin-top: 11px;
    letter-spacing: 0;
    line-height: 20px;
    white-space: nowrap;
`;

const Day2 = styled.div`
    position: absolute;
    width: 42px;
    top: 46px;
    left: 237px;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 80px;
`;

const Rectangle6151 = styled.div`
    width: 7px;
    height: 48px;
    margin-right: 3px;
    background-color: var(--blue-ribbon);
`;

const Day3 = styled.div`
    position: absolute;
    width: 42px;
    top: 76px;
    left: 327px;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 50px;
`;

const Rectangle6152 = styled.div`
    width: 7px;
    height: 18px;
    margin-right: 3px;
    background-color: var(--blue-ribbon);
`;

const Text4 = styled.div`
    ${PoppinsNormalBlueBell12px}
    width: 42px;
    margin-bottom: -1px;
    min-height: 19px;
    margin-top: 11px;
    text-align: center;
    letter-spacing: 0;
    line-height: 20px;
    white-space: nowrap;
`;

const Day4 = styled.div`
    position: absolute;
    width: 42px;
    top: 16px;
    left: 417px;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 110px;
`;

const Rectangle6153 = styled.div`
    width: 7px;
    height: 78px;
    margin-right: 3px;
    background-color: var(--blue-ribbon);
`;

const Day5 = styled.div`
    position: absolute;
    width: 42px;
    top: 55px;
    left: 507px;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 71px;
`;

const Rectangle6154 = styled.div`
    width: 7px;
    height: 39px;
    margin-right: 3px;
    background-color: var(--blue-ribbon);
`;

const GroupeDfilant4 = styled.div`
    position: absolute;
    height: 60px;
    top: 107px;
    left: 79px;
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
    min-width: 675px;
    overflow-x: scroll;

    &::-webkit-scrollbar {
        width: 0;
        display: none;
    }
`;

export default Home;
export const iconsNavigationIcon12States23Data = {
    src: '/img/fontawsome--bookmark--10@1x.png',
    className: 'icons-navigation-icon-12-states-14',
};
export const sidebarMenuItem5Data = {
    name: 'Thèmes articles',
    className: 'thmes-articles',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States23Data,
};
export const iconsNavigationIcon12States24Data = {
    src: '/img/ic-invoice-10@1x.png',
    className: 'icons-navigation-icon-12-states-5',
};

export const articles1Data = {
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States24Data,
};

export const iconsNavigationIcon12States26Data = {
    src: '/img/ic-calendar-13@1x.png',
    className: 'icons-navigation-icon-12-states-5',
};

export const buttonsBtnTextIcon21Data = {
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States26Data,
};
export const date1Data = {
    buttonsBtnTextIcon2Props: buttonsBtnTextIcon21Data,
};
export const day2Data = {
    className: 'day-6',
};

export const usersAvatarPhoto2States4Data = {
    image: '/img/image-2@1x.png',
    className: 'users-avatar-photo-2-states-2',
};

export const userGroup1Data = {
    usersAvatarPhoto2StatesProps: usersAvatarPhoto2States4Data,
};

export const topNavigationSearch2Data = {
    color: '/img/color-2@1x.png',
    className: 'top-navigation-search-1',
};

export const iconsNavigationIcon12States20Data = {
    src: '/img/ic-home-10@1x.png',
    className: 'icons-navigation-icon-12-states-13',
};

export const sidebarMenuItem22Data = {
    name: 'Home',
    className: 'home-22',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States20Data,
};

export const iconsNavigationIcon12States21Data = {
    src: '/img/ic-users-11@1x.png',
    className: 'icons-navigation-icon-12-states-5',
};

export const sidebarMenuItem4Data = {
    name: 'Utilisateurs',
    className: 'customers-1',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States21Data,
};

export const tradingCrypto1Data = {
    iconPencil: '/img/fontawsome--pen--10@1x.png',
    name: 'Trading & Crypto',
};

export const tradingCrypto2Data = {
    iconPencil: '/img/fontawsome--robot--3@1x.png',
    name: 'Bot Trading',
    className: 'bot-trading',
};

export const tradingCrypto3Data = {
    iconPencil: '/img/fontawsome--bitcoin--11@1x.png',
    name: 'Crypto Wallet',
    className: 'crypto-wallet',
};

export const tradingCrypto4Data = {
    iconPencil: '/img/fontawsome--handshake--10@1x.png',
    name: 'Broker',
    className: 'broker',
};

export const tradingCrypto5Data = {
    iconPencil: '/img/fontawsome--globe-europe--10@1x.png',
    name: 'Pays',
    className: 'pays',
};

export const iconsNavigationIcon12States25Data = {
    src: '/img/ic-setting-11@1x.png',
    className: 'icons-navigation-icon-12-states-5',
};

export const sidebarMenuItem6Data = {
    name: 'Settings',
    className: 'settings',
    iconsNavigationIcon12StatesProps: iconsNavigationIcon12States25Data,
};

export const tabGroupElementsRegularTab2States3Data = {
    children: 'Days',
};

export const tabGroupElementsRegularTab2States23Data = {
    children: 'Weeks',
    className: 'tab-group-_-elements-5',
};

export const tabGroupElementsRegularTab2States4Data = {
    children: 'Months',
    className: 'tab-group-_-elements-3',
};

export const iconsWidgetIllustration2Data = {
    src: '/img/ic-users-7@1x.png',
    className: 'icons-widget-illustration-1',
};

export const widgetsDataCardWithIcons2Data = {
    sales: 'Utilisateurs Total',
    x27632: '10.000',
    iconsWidgetIllustrationProps: iconsWidgetIllustration2Data,
};

export const iconFeatherUserPlus1Data = {
    trac463: '/img/trac--463-1@1x.png',
    trac464: '/img/trac--464-1@1x.png',
    trac465: '/img/trac--465-1@1x.png',
    trac466: '/img/trac--466-1@1x.png',
};

export const iconsWidgetIllustration22Data = {
    iconFeatherUserPlusProps: iconFeatherUserPlus1Data,
};

export const widgetsDataCardWithIcons3Data = {
    sales: 'Membres Total',
    x27632: '1002',
    iconsWidgetIllustration2Props: iconsWidgetIllustration22Data,
};

export const iconsWidgetIllustration3Data = {
    src: '/img/usd-circle-2@1x.png',
};

export const widgetsDataCardWithIcons4Data = {
    sales: 'Nouveaux utilisateurs',
    x27632: '+52',
    iconsWidgetIllustration3Props: iconsWidgetIllustration3Data,
};

export const iconFeatherUserPlus2Data = {
    trac463: '/img/trac--463@1x.png',
    trac464: '/img/trac--464@1x.png',
    trac465: '/img/trac--465@1x.png',
    trac466: '/img/trac--466@1x.png',
};

export const iconsWidgetIllustration4Data = {
    iconFeatherUserPlusProps: iconFeatherUserPlus2Data,
};

export const widgetsDataCardWithIcons5Data = {
    sales: 'Nouveaux membres',
    x27632: '+42',
    iconsWidgetIllustration4Props: iconsWidgetIllustration4Data,
};

export const widgetsElementsChartMiniChart2Data = {
    chart: '/img/path-4-copy-6-10@1x.png',
    path4Copy8: '/img/path-4-copy-8-10@1x.png',
    className: 'widgets-_-elements-chart-mini-chart-1',
};

export const widgetsDataCardWithCharts21Data = {
    sales: 'Licence Novice',
    x27632: '806',
    widgetsElementsChartMiniChartProps: widgetsElementsChartMiniChart2Data,
};

export const widgetsElementsChartMiniChart3Data = {
    chart: '/img/path-4-copy-6-8@1x.png',
    path4Copy8: '/img/path-4-copy-8-8@1x.png',
    className: 'widgets-_-elements-chart-mini-chart-2',
};

export const widgetsDataCardWithCharts22Data = {
    sales: 'Licence Confirmé',
    x27632: '192',
    className: 'widgets-data-card-with-charts-2',
    widgetsElementsChartMiniChartProps: widgetsElementsChartMiniChart3Data,
};

export const widgetsElementsChartMiniChart4Data = {
    chart: '/img/path-4-copy-6-3@1x.png',
    path4Copy8: '/img/path-4-copy-8-3@1x.png',
    className: 'widgets-_-elements-chart-mini-chart-3',
};

export const widgetsDataCardWithCharts23Data = {
    sales: 'Licence Partenaire',
    x27632: '4',
    className: 'widgets-data-card-with-charts-3',
    widgetsElementsChartMiniChartProps: widgetsElementsChartMiniChart4Data,
};

export const legend3Data = {
    children: 'Nouveaux utilisateurs',
    className: 'online',
};

export const chartLeftValue1Data = {
    children: '1200',
};
export const chartLeftValue2Data = {
    children: '1000',
    className: 'chart-left-value-1',
};
export const chartLeftValue3Data = {
    children: '800',
    className: 'chart-left-value-2',
};
export const chartLeftValue4Data = {
    children: '600',
    className: 'chart-left-value-3',
};
export const chartLeftValue5Data = {
    children: '400',
    className: 'chart-left-value-4',
};
export const chartLeftValue6Data = {
    children: '200',
    className: 'chart-left-value-5',
};
export const chartLeftValue7Data = {
    children: '0',
    className: 'chart-left-value-6',
};
export const tooltipPointerLeft2Data = {
    bg: '/img/bg-4@1x.png',
    titlee: '01 avril, 2022',
    x750: '402',
    onlineSales: 'Nouveaux utilisateurs',
};

interface HomeData {
    groupe2: string;
    analytics: string;
    customerGrowth: string;
    text2: string;
    text3: string;
    text4: string;
    text5: string;
    text6: string;
    topNavigationSearchProps: { color: string; className: string };
    userGroupProps: { usersAvatarPhoto2StatesProps: { image: string; className: string } };
    sidebarMenuItem2Props: {
        name: string;
        className: string;
        iconsNavigationIcon12StatesProps: { src: string; className: string };
    };
    sidebarMenuItem1Props: {
        name: string;
        className: string;
        iconsNavigationIcon12StatesProps: { src: string; className: string };
    };
    sidebarMenuItem2Props2: {
        name: string;
        className: string;
        iconsNavigationIcon12StatesProps: { src: string; className: string };
    };
    articlesProps: { iconsNavigationIcon12StatesProps: { src: string; className: string } };
    tradingCrypto1Props: { name: string; iconPencil: string };
    tradingCrypto2Props: { name: string; iconPencil: string; className: string };
    tradingCrypto3Props: { name: string; iconPencil: string; className: string };
    tradingCrypto4Props: { name: string; iconPencil: string; className: string };
    tradingCrypto5Props: { name: string; iconPencil: string; className: string };
    sidebarMenuItem3Props: {
        name: string;
        className: string;
        iconsNavigationIcon12StatesProps: { src: string; className: string };
    };
    tabGroupElementsRegularTab2States1Props: { children: string };
    tabGroupElementsRegularTab2States2Props: { children: string; className: string };
    tabGroupElementsRegularTab2States2Props2: { children: string; className: string };
    dateProps: { buttonsBtnTextIcon2Props: { iconsNavigationIcon12StatesProps: { src: string; className: string } } };
    widgetsDataCardWithIcons2Props: {
        x27632: string;
        iconsWidgetIllustrationProps: { src: string; className: string };
        sales: string;
    };
    widgetsDataCardWithIcons3Props: {
        iconsWidgetIllustration2Props: {
            iconFeatherUserPlusProps: { trac463: string; trac464: string; trac465: string; trac466: string };
        };
        x27632: string;
        sales: string;
    };
    widgetsDataCardWithIcons4Props: { iconsWidgetIllustration3Props: { src: string }; x27632: string; sales: string };
    widgetsDataCardWithIcons5Props: {
        x27632: string;
        iconsWidgetIllustration4Props: {
            iconFeatherUserPlusProps: { trac463: string; trac464: string; trac465: string; trac466: string };
        };
        sales: string;
    };
    widgetsDataCardWithCharts21Props: {
        widgetsElementsChartMiniChartProps: { path4Copy8: string; className: string; chart: string };
        x27632: string;
        sales: string;
    };
    widgetsDataCardWithCharts22Props: {
        widgetsElementsChartMiniChartProps: { path4Copy8: string; className: string; chart: string };
        x27632: string;
        className: string;
        sales: string;
    };
    widgetsDataCardWithCharts23Props: {
        widgetsElementsChartMiniChartProps: { path4Copy8: string; className: string; chart: string };
        x27632: string;
        className: string;
        sales: string;
    };
    legendProps: { children: string; className: string };
    chartLeftValue1Props: { children: string };
    chartLeftValue2Props: { children: string; className: string };
    chartLeftValue3Props: { children: string; className: string };
    chartLeftValue4Props: { children: string; className: string };
    chartLeftValue5Props: { children: string; className: string };
    chartLeftValue6Props: { children: string; className: string };
    chartLeftValue7Props: { children: string; className: string };
    dayProps: { className: string };
    tooltipPointerLeft2Props: { onlineSales: string; bg: string; titlee: string; x750: string };
}

export const homeData: HomeData = {
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
