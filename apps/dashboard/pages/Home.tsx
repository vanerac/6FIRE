import React from 'react';
import TopNavigationSearch from './components/TopNavigationSearch';
import UserGroup from './components/UserGroup';
import SidebarMenuItem2 from './components/SidebarMenuItem2';
import SidebarMenuItem from './components/SidebarMenuItem';
import Articles from './components/Articles';
import TradingCrypto from './TradingCrypto';
import Abonnement from './components/Abonnement';
import TabGroupElementsRegularTab2States from './components/TabGroupElementsRegularTab2States';
import TabGroupElementsRegularTab2States2 from './components/TabGroupElementsRegularTab2States2';
import Date from './components/Date';
import WidgetsDataCardWithIcons2 from './components/WidgetsDataCardWithIcons2';
import WidgetsDataCardWithIcons3 from './components/WidgetsDataCardWithIcons3';
import WidgetsDataCardWithIcons4 from './components/WidgetsDataCardWithIcons4';
import WidgetsDataCardWithIcons5 from './components/WidgetsDataCardWithIcons5';
import WidgetsDataCardWithCharts2 from './components/WidgetsDataCardWithCharts2';
import Legend from './components/Legend';
import ChartLeftValue from './components/ChartLeftValue';
import Day from './components/Day';
import TooltipPointerLeft2 from './components/TooltipPointerLeft2';
import styled from 'styled-components';
import { PoppinsNormalBlueBell12px, PoppinsSemiboldSemiBoldMirage24px } from '../styledMixins';
import './Home.css';

function Home(props: any) {
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
