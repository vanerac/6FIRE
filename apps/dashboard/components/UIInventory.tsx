import React from 'react';
import Colour from './Colour';
import IconsNavigationIcon12States from './IconsNavigationIcon12States';
import IconsNavigationIcon12States2 from './IconsNavigationIcon12States2';
import SidebarMenuItem from './SidebarMenuItem';
import SidebarMenuItem2 from './SidebarMenuItem2';
import SidebarMenuItem3 from './SidebarMenuItem3';
import TabGroupElementsRegularTab2States from './TabGroupElementsRegularTab2States';
import TabGroupElementsRegularTab2States2 from './TabGroupElementsRegularTab2States2';
import ButtonsBtnTextIcon from './ButtonsBtnTextIcon';
import ButtonsBtnSmalText from './ButtonsBtnSmalText';
import TooltipPointerDown from './TooltipPointerDown';
import TooltipPointerLeft from './TooltipPointerLeft';
import UsersAvatarPhoto2States from './UsersAvatarPhoto2States';
import UsersAvatarPhoto2States2 from './UsersAvatarPhoto2States2';
import TopNavigationSearch from './TopNavigationSearch';
import PaginationPageNumber2States from './PaginationPageNumber2States';
import PaginationPageNumber2States2 from './PaginationPageNumber2States2';
import WidgetsDataCardWithCharts from './WidgetsDataCardWithCharts';
import WidgetsDataCardWithIcons from './WidgetsDataCardWithIcons';
import WidgetsElementsChartGraphLineBar from './WidgetsElementsChartGraphLineBar';
import WidgetsElementsChartGraphDoubleBar from './WidgetsElementsChartGraphDoubleBar';
import WidgetsElementsChartGraphStackedBar from './WidgetsElementsChartGraphStackedBar';
import Legend from './Legend';
import WidgetsCustomerRow from './WidgetsCustomerRow';
import WidgetsTableTableHeader from './WidgetsTableTableHeader';
import WidgetsTableTableRow from './WidgetsTableTableRow';
import styled from 'styled-components';
import { PoppinsNormalVulcan13px, PoppinsMediumVulcan28px, PoppinsNormalShadowBlue16px } from '../styledMixins';
import '../styles/UIInventory.css';

function UIInventory(props) {
    const {
        dashboardUiKit,
        createdByImpekable,
        impekable_Logo_White,
        title1,
        sales1,
        ligne351,
        sales2,
        ligne352,
        sales3,
        ligne353,
        sales4,
        ligne354,
        sales5,
        ligne355,
        title2,
        latoBold,
        aabbccdd1,
        latoRegular,
        aabbccdd2,
        latoLight1,
        title3,
        latoLight2,
        aabbccdd3,
        x01Colours,
        title4,
        title5,
        title6,
        title7,
        title8,
        title9,
        title10,
        title11,
        title12,
        title13,
        title14,
        title15,
        colour1Props,
        colour2Props,
        colour3Props,
        colour4Props,
        colour5Props,
        colour6Props,
        colour7Props,
        colour8Props,
        colour9Props,
        colour10Props,
        colour11Props,
        colour12Props,
        iconsNavigationIcon12States1Props,
        iconsNavigationIcon12States2Props,
        iconsNavigationIcon12States3Props,
        iconsNavigationIcon12States4Props,
        iconsNavigationIcon12States5Props,
        iconsNavigationIcon12States6Props,
        iconsNavigationIcon12States7Props,
        iconsNavigationIcon12States8Props,
        iconsNavigationIcon12States9Props,
        iconsNavigationIcon12States10Props,
        iconsNavigationIcon12States11Props,
        iconsNavigationIcon12States12Props,
        sidebarMenuItemProps,
        sidebarMenuItem2Props,
        sidebarMenuItem3Props,
        tabGroupElementsRegularTab2States1P,
        tabGroupElementsRegularTab2States2P,
        tabGroupElementsRegularTab2States2P2,
        buttonsBtnTextIconProps,
        buttonsBtnSmalTextProps,
        tooltipPointerDownProps,
        tooltipPointerLeftProps,
        usersAvatarPhoto2StatesProps,
        usersAvatarPhoto2States2Props,
        topNavigationSearchProps,
        iconsNavigationIcon12States13Props,
        paginationPageNumber2StatesProps,
        paginationPageNumber2States21Props,
        paginationPageNumber2States22Props,
        paginationPageNumber2States23Props,
        paginationPageNumber2States24Props,
        paginationPageNumber2States25Props,
        paginationPageNumber2States26Props,
        iconsNavigationIcon12States14Props,
        widgetsDataCardWithChartsProps,
        widgetsDataCardWithIconsProps,
        widgetsElementsChartGraphLineBarPro,
        widgetsElementsChartGraphDoubleBarP,
        widgetsElementsChartGraphStackedBar,
        legend1Props,
        legend2Props,
        widgetsCustomerRowProps,
        widgetsTableTableHeaderProps,
        widgetsTableTableRow1Props,
        widgetsTableTableRow2Props,
        widgetsTableTableRow3Props,
        widgetsTableTableRow4Props,
        widgetsTableTableRow5Props,
        widgetsTableTableRow6Props,
        widgetsTableTableRow7Props,
        widgetsTableTableRow8Props,
        widgetsTableTableRow9Props,
    } = props;

    return (
        <div className="container-center-horizontal">
            <div className="ui-inventory screen">
                <HEADER>
                    <DASHBOARDUIKIT>{dashboardUiKit}</DASHBOARDUIKIT>
                    <CreatedByImpekable>{createdByImpekable}</CreatedByImpekable>
                    <ImpekableLogoWhite
                        style={{ backgroundImage: `url(${impekable_Logo_White})` }}></ImpekableLogoWhite>
                </HEADER>
                <COLORS>
                    <FlexRow>
                        <FlexCol>
                            <Title>{title1}</Title>
                            <LinesBordersText>
                                <Title1>
                                    <Sales>{sales1}</Sales>
                                    <Ligne35 src={ligne351} />
                                </Title1>
                                <ColourContainer>
                                    <Colour x665Eff={colour1Props.x665Eff} rgb10294225={colour1Props.rgb10294225} />
                                    <Colour
                                        x665Eff={colour2Props.x665Eff}
                                        rgb10294225={colour2Props.rgb10294225}
                                        className={colour2Props.className}
                                    />
                                    <Colour
                                        x665Eff={colour3Props.x665Eff}
                                        rgb10294225={colour3Props.rgb10294225}
                                        className={colour3Props.className}
                                    />
                                </ColourContainer>
                            </LinesBordersText>
                        </FlexCol>
                        <Text>
                            <Groupe450>
                                <Sales1>{sales2}</Sales1>
                                <Ligne351 src={ligne352} />
                            </Groupe450>
                            <ColourContainer1>
                                <Colour
                                    x665Eff={colour4Props.x665Eff}
                                    rgb10294225={colour4Props.rgb10294225}
                                    className={colour4Props.className}
                                />
                                <Colour
                                    x665Eff={colour5Props.x665Eff}
                                    rgb10294225={colour5Props.rgb10294225}
                                    className={colour5Props.className}
                                />
                            </ColourContainer1>
                        </Text>
                        <MainCTA>
                            <Groupe451>
                                <Sales2>{sales3}</Sales2>
                                <Ligne352 src={ligne353} />
                            </Groupe451>
                            <Colour
                                x665Eff={colour6Props.x665Eff}
                                rgb10294225={colour6Props.rgb10294225}
                                className={colour6Props.className}
                            />
                        </MainCTA>
                    </FlexRow>
                    <TionContainer>
                        <Notification>
                            <Groupe451>
                                <Sales3>{sales4}</Sales3>
                                <Ligne352 src={ligne354} />
                            </Groupe451>
                            <Colour
                                x665Eff={colour7Props.x665Eff}
                                rgb10294225={colour7Props.rgb10294225}
                                className={colour7Props.className}
                            />
                        </Notification>
                        <Additional>
                            <Groupe453>
                                <Sales4>{sales5}</Sales4>
                                <Ligne353 src={ligne355} />
                            </Groupe453>
                            <ColourContainer2>
                                <Colour
                                    x665Eff={colour8Props.x665Eff}
                                    rgb10294225={colour8Props.rgb10294225}
                                    className={colour8Props.className}
                                />
                                <Colour
                                    x665Eff={colour9Props.x665Eff}
                                    rgb10294225={colour9Props.rgb10294225}
                                    className={colour9Props.className}
                                />
                                <Colour
                                    x665Eff={colour10Props.x665Eff}
                                    rgb10294225={colour10Props.rgb10294225}
                                    className={colour10Props.className}
                                />
                                <Colour
                                    x665Eff={colour11Props.x665Eff}
                                    rgb10294225={colour11Props.rgb10294225}
                                    className={colour11Props.className}
                                />
                                <Colour
                                    x665Eff={colour12Props.x665Eff}
                                    rgb10294225={colour12Props.rgb10294225}
                                    className={colour12Props.className}
                                />
                            </ColourContainer2>
                        </Additional>
                    </TionContainer>
                </COLORS>
                <TYPEFACE>
                    <FlexCol1>
                        <Title>{title2}</Title>
                        <Group>
                            <LatoBold>{latoBold}</LatoBold>
                            <AaBbCcDd>{aabbccdd1}</AaBbCcDd>
                        </Group>
                    </FlexCol1>
                    <Group1>
                        <LatoRegular>{latoRegular}</LatoRegular>
                        <AaBbCcDd1>{aabbccdd2}</AaBbCcDd1>
                    </Group1>
                    <Group2>
                        <LatoLight>{latoLight1}</LatoLight>
                        <Title2>{title3}</Title2>
                    </Group2>
                    <Group3>
                        <LatoLight1>{latoLight2}</LatoLight1>
                        <AaBbCcDd2>{aabbccdd3}</AaBbCcDd2>
                    </Group3>
                </TYPEFACE>
                <FlexRow1>
                    <ICONS>
                        <FlexCol2>
                            <X01Colours>
                                <X01Colours1>{x01Colours}</X01Colours1>
                            </X01Colours>
                            <IconsNavigationIconStatesContainer>
                                <IconsNavigationIcon12States src={iconsNavigationIcon12States1Props.src} />
                                <IconsNavigationIcon12States
                                    src={iconsNavigationIcon12States2Props.src}
                                    className={iconsNavigationIcon12States2Props.className}
                                />
                                <IconsNavigationIcon12States
                                    src={iconsNavigationIcon12States3Props.src}
                                    className={iconsNavigationIcon12States3Props.className}
                                />
                                <IconsNavigationIcon12States
                                    src={iconsNavigationIcon12States4Props.src}
                                    className={iconsNavigationIcon12States4Props.className}
                                />
                                <IconsNavigationIcon12States
                                    src={iconsNavigationIcon12States5Props.src}
                                    className={iconsNavigationIcon12States5Props.className}
                                />
                            </IconsNavigationIconStatesContainer>
                        </FlexCol2>
                        <FlexRow2>
                            <IconsNavigationIconStatesContainer1>
                                <IconsNavigationIcon12States
                                    src={iconsNavigationIcon12States6Props.src}
                                    className={iconsNavigationIcon12States6Props.className}
                                />
                                <IconsNavigationIcon12States
                                    src={iconsNavigationIcon12States7Props.src}
                                    className={iconsNavigationIcon12States7Props.className}
                                />
                            </IconsNavigationIconStatesContainer1>
                            <IconsNavigationIconStatesContainer2>
                                <IconsNavigationIcon12States2 />
                                <IconsNavigationIcon12States
                                    src={iconsNavigationIcon12States8Props.src}
                                    className={iconsNavigationIcon12States8Props.className}
                                />
                            </IconsNavigationIconStatesContainer2>
                            <IconsNavigationIconStatesContainer3>
                                <IconsNavigationIcon12States
                                    src={iconsNavigationIcon12States9Props.src}
                                    className={iconsNavigationIcon12States9Props.className}
                                />
                                <IconsNavigationIcon12States
                                    src={iconsNavigationIcon12States10Props.src}
                                    className={iconsNavigationIcon12States10Props.className}
                                />
                            </IconsNavigationIconStatesContainer3>
                            <IconsNavigationIcon12States
                                src={iconsNavigationIcon12States11Props.src}
                                className={iconsNavigationIcon12States11Props.className}
                            />
                            <IconsNavigationIcon12States
                                src={iconsNavigationIcon12States12Props.src}
                                className={iconsNavigationIcon12States12Props.className}
                            />
                        </FlexRow2>
                    </ICONS>
                    <SIDEBAR>
                        <Title3>{title4}</Title3>
                        <SidebarMenuItem
                            name={sidebarMenuItemProps.name}
                            iconsNavigationIcon12StatesProps={sidebarMenuItemProps.iconsNavigationIcon12StatesProps}
                        />
                        <SidebarMenuItem2
                            name={sidebarMenuItem2Props.name}
                            iconsNavigationIcon12StatesProps={sidebarMenuItem2Props.iconsNavigationIcon12StatesProps}
                        />
                        <SidebarMenuItem3
                            name={sidebarMenuItem3Props.name}
                            iconsNavigationIcon12StatesProps={sidebarMenuItem3Props.iconsNavigationIcon12StatesProps}
                        />
                    </SIDEBAR>
                    <TABS>
                        <Title3>{title5}</Title3>
                        <TabTabGroup>
                            <Tabs>
                                <TabGroupElementsRegularTab2States>
                                    {tabGroupElementsRegularTab2States1P.children}
                                </TabGroupElementsRegularTab2States>
                                <TabGroupElementsRegularTab2States
                                    className={tabGroupElementsRegularTab2States2P.className}>
                                    {tabGroupElementsRegularTab2States2P.children}
                                </TabGroupElementsRegularTab2States>
                                <TabGroupElementsRegularTab2States2>
                                    {tabGroupElementsRegularTab2States2P2.children}
                                </TabGroupElementsRegularTab2States2>
                            </Tabs>
                        </TabTabGroup>
                    </TABS>
                    <BUTTONS>
                        <Title3>{title6}</Title3>
                        <ButtonsBtnTextIcon
                            text={buttonsBtnTextIconProps.text}
                            iconsNavigationIcon12StatesProps={buttonsBtnTextIconProps.iconsNavigationIcon12StatesProps}
                        />
                        <ButtonsBtnSmalText
                            findOutMore={buttonsBtnSmalTextProps.findOutMore}
                            iconsChevronRightProps={buttonsBtnSmalTextProps.iconsChevronRightProps}
                        />
                    </BUTTONS>
                </FlexRow1>
                <FlexRow3>
                    <TOOLTIPS>
                        <FlexCol3>
                            <Title>{title7}</Title>
                            <TooltipPointerDown
                                bg={tooltipPointerDownProps.bg}
                                titlee={tooltipPointerDownProps.titlee}
                                x7501={tooltipPointerDownProps.x7501}
                                onlineSales1={tooltipPointerDownProps.onlineSales1}
                                x7502={tooltipPointerDownProps.x7502}
                                onlineSales2={tooltipPointerDownProps.onlineSales2}
                            />
                        </FlexCol3>
                        <TooltipPointerLeft {...tooltipPointerLeftProps} />
                    </TOOLTIPS>
                    <AVATARS>
                        <Title3>{title8}</Title3>
                        <UsersAvatarPhotoStatesContainer>
                            <UsersAvatarPhoto2States image={usersAvatarPhoto2StatesProps.image} />
                            <UsersAvatarPhoto2States2>
                                {usersAvatarPhoto2States2Props.children}
                            </UsersAvatarPhoto2States2>
                        </UsersAvatarPhotoStatesContainer>
                    </AVATARS>
                    <SEARCHBAR>
                        <Title3>{title9}</Title3>
                        <TopNavigationSearch color={topNavigationSearchProps.color} />
                    </SEARCHBAR>
                    <PAGINATION>
                        <Title3>{title10}</Title3>
                        <Pagination>
                            <IconsNavigationIcon12States
                                src={iconsNavigationIcon12States13Props.src}
                                className={iconsNavigationIcon12States13Props.className}
                            />
                            <PaginationPageNumber2States>
                                {paginationPageNumber2StatesProps.children}
                            </PaginationPageNumber2States>
                            <PaginationPageNumber2States2>
                                {paginationPageNumber2States21Props.children}
                            </PaginationPageNumber2States2>
                            <PaginationPageNumber2States2>
                                {paginationPageNumber2States22Props.children}
                            </PaginationPageNumber2States2>
                            <PaginationPageNumber2States2>
                                {paginationPageNumber2States23Props.children}
                            </PaginationPageNumber2States2>
                            <PaginationPageNumber2States2>
                                {paginationPageNumber2States24Props.children}
                            </PaginationPageNumber2States2>
                            <PaginationPageNumber2States2>
                                {paginationPageNumber2States25Props.children}
                            </PaginationPageNumber2States2>
                            <PaginationPageNumber2States2 className={paginationPageNumber2States26Props.className}>
                                {paginationPageNumber2States26Props.children}
                            </PaginationPageNumber2States2>
                            <IconsNavigationIcon12States
                                src={iconsNavigationIcon12States14Props.src}
                                className={iconsNavigationIcon12States14Props.className}
                            />
                        </Pagination>
                    </PAGINATION>
                </FlexRow3>
                <OverlapGroup2>
                    <FlexRow4>
                        <CARDS>
                            <Title3>{title11}</Title3>
                            <WidgetsDataCardWithCharts
                                sales={widgetsDataCardWithChartsProps.sales}
                                x27632={widgetsDataCardWithChartsProps.x27632}
                                widgetsElementsChartMiniChartProps={
                                    widgetsDataCardWithChartsProps.widgetsElementsChartMiniChartProps
                                }
                            />
                            <WidgetsDataCardWithIcons
                                sales={widgetsDataCardWithIconsProps.sales}
                                x27632={widgetsDataCardWithIconsProps.x27632}
                                widgetsElementsPriceProps={widgetsDataCardWithIconsProps.widgetsElementsPriceProps}
                                iconsWidgetIllustrationProps={
                                    widgetsDataCardWithIconsProps.iconsWidgetIllustrationProps
                                }
                            />
                        </CARDS>
                        <GRAPHBARS>
                            <Title3>{title12}</Title3>
                            <WidgetsElementsChartGraphContainer>
                                <WidgetsElementsChartGraphLineBar name={widgetsElementsChartGraphLineBarPro.name} />
                                <WidgetsElementsChartGraphDoubleBar
                                    greenBar={widgetsElementsChartGraphDoubleBarP.greenBar}
                                    blueBar={widgetsElementsChartGraphDoubleBarP.blueBar}
                                    month={widgetsElementsChartGraphDoubleBarP.month}
                                />
                                <WidgetsElementsChartGraphStackedBar>
                                    {widgetsElementsChartGraphStackedBar.children}
                                </WidgetsElementsChartGraphStackedBar>
                            </WidgetsElementsChartGraphContainer>
                        </GRAPHBARS>
                        <FlexCol4>
                            <LEGEND>
                                <Title3>{title13}</Title3>
                                <Legend2Items>
                                    <Legend>{legend1Props.children}</Legend>
                                    <Legend className={legend2Props.className}>{legend2Props.children}</Legend>
                                </Legend2Items>
                            </LEGEND>
                            <CUSTOMERS>
                                <Title4>{title14}</Title4>
                                <WidgetsCustomerRow
                                    customerId00222={widgetsCustomerRowProps.customerId00222}
                                    isabellaMoran={widgetsCustomerRowProps.isabellaMoran}
                                    usersAvatarPhoto2StatesProps={widgetsCustomerRowProps.usersAvatarPhoto2StatesProps}
                                    iconsNavigationIcon12StatesProps={
                                        widgetsCustomerRowProps.iconsNavigationIcon12StatesProps
                                    }
                                />
                            </CUSTOMERS>
                        </FlexCol4>
                    </FlexRow4>
                    <TABLES>
                        <Title3>{title15}</Title3>
                        <TABLES1>
                            <WidgetsTableTableHeader
                                paymentNumber={widgetsTableTableHeaderProps.paymentNumber}
                                dateTime1={widgetsTableTableHeaderProps.dateTime1}
                                dateTime2={widgetsTableTableHeaderProps.dateTime2}
                                amount1={widgetsTableTableHeaderProps.amount1}
                                amount2={widgetsTableTableHeaderProps.amount2}
                            />
                            <ScrollContainer>
                                <ScrollGroup>
                                    <WidgetsTableTableRow
                                        paymentFrom10321={widgetsTableTableRow1Props.paymentFrom10321}
                                        mar212019330Pm1={widgetsTableTableRow1Props.mar212019330Pm1}
                                        mar212019330Pm2={widgetsTableTableRow1Props.mar212019330Pm2}
                                        x250001={widgetsTableTableRow1Props.x250001}
                                        x250002={widgetsTableTableRow1Props.x250002}
                                    />
                                    <WidgetsTableTableRow
                                        paymentFrom10321={widgetsTableTableRow2Props.paymentFrom10321}
                                        mar212019330Pm1={widgetsTableTableRow2Props.mar212019330Pm1}
                                        mar212019330Pm2={widgetsTableTableRow2Props.mar212019330Pm2}
                                        x250001={widgetsTableTableRow2Props.x250001}
                                        x250002={widgetsTableTableRow2Props.x250002}
                                        className={widgetsTableTableRow2Props.className}
                                    />
                                    <WidgetsTableTableRow
                                        paymentFrom10321={widgetsTableTableRow3Props.paymentFrom10321}
                                        mar212019330Pm1={widgetsTableTableRow3Props.mar212019330Pm1}
                                        mar212019330Pm2={widgetsTableTableRow3Props.mar212019330Pm2}
                                        x250001={widgetsTableTableRow3Props.x250001}
                                        x250002={widgetsTableTableRow3Props.x250002}
                                        className={widgetsTableTableRow3Props.className}
                                    />
                                    <WidgetsTableTableRow
                                        paymentFrom10321={widgetsTableTableRow4Props.paymentFrom10321}
                                        mar212019330Pm1={widgetsTableTableRow4Props.mar212019330Pm1}
                                        mar212019330Pm2={widgetsTableTableRow4Props.mar212019330Pm2}
                                        x250001={widgetsTableTableRow4Props.x250001}
                                        x250002={widgetsTableTableRow4Props.x250002}
                                        className={widgetsTableTableRow4Props.className}
                                    />
                                    <WidgetsTableTableRow
                                        paymentFrom10321={widgetsTableTableRow5Props.paymentFrom10321}
                                        mar212019330Pm1={widgetsTableTableRow5Props.mar212019330Pm1}
                                        mar212019330Pm2={widgetsTableTableRow5Props.mar212019330Pm2}
                                        x250001={widgetsTableTableRow5Props.x250001}
                                        x250002={widgetsTableTableRow5Props.x250002}
                                        className={widgetsTableTableRow5Props.className}
                                    />
                                    <WidgetsTableTableRow
                                        paymentFrom10321={widgetsTableTableRow6Props.paymentFrom10321}
                                        mar212019330Pm1={widgetsTableTableRow6Props.mar212019330Pm1}
                                        mar212019330Pm2={widgetsTableTableRow6Props.mar212019330Pm2}
                                        x250001={widgetsTableTableRow6Props.x250001}
                                        x250002={widgetsTableTableRow6Props.x250002}
                                        className={widgetsTableTableRow6Props.className}
                                    />
                                    <WidgetsTableTableRow
                                        paymentFrom10321={widgetsTableTableRow7Props.paymentFrom10321}
                                        mar212019330Pm1={widgetsTableTableRow7Props.mar212019330Pm1}
                                        mar212019330Pm2={widgetsTableTableRow7Props.mar212019330Pm2}
                                        x250001={widgetsTableTableRow7Props.x250001}
                                        x250002={widgetsTableTableRow7Props.x250002}
                                        className={widgetsTableTableRow7Props.className}
                                    />
                                    <WidgetsTableTableRow
                                        paymentFrom10321={widgetsTableTableRow8Props.paymentFrom10321}
                                        mar212019330Pm1={widgetsTableTableRow8Props.mar212019330Pm1}
                                        mar212019330Pm2={widgetsTableTableRow8Props.mar212019330Pm2}
                                        x250001={widgetsTableTableRow8Props.x250001}
                                        x250002={widgetsTableTableRow8Props.x250002}
                                        className={widgetsTableTableRow8Props.className}
                                    />
                                    <WidgetsTableTableRow
                                        paymentFrom10321={widgetsTableTableRow9Props.paymentFrom10321}
                                        mar212019330Pm1={widgetsTableTableRow9Props.mar212019330Pm1}
                                        mar212019330Pm2={widgetsTableTableRow9Props.mar212019330Pm2}
                                        x250001={widgetsTableTableRow9Props.x250001}
                                        x250002={widgetsTableTableRow9Props.x250002}
                                        className={widgetsTableTableRow9Props.className}
                                    />
                                </ScrollGroup>
                                <Scroll></Scroll>
                            </ScrollContainer>
                        </TABLES1>
                    </TABLES>
                </OverlapGroup2>
            </div>
        </div>
    );
}

const HEADER = styled.div`
    height: 100px;
    display: flex;
    padding: 22.5px 80px;
    align-items: center;
    min-width: 1600px;
    background-color: var(--vulcan);
`;

const DASHBOARDUIKIT = styled.div`
    min-height: 41px;
    align-self: flex-end;
    min-width: 262px;
    font-family: var(--font-family-poppins-semibold-semibold);
    font-weight: 600;
    color: var(--white);
    font-size: var(--font-size-xxxl);
    letter-spacing: 0.12px;
    line-height: 28px;
    white-space: nowrap;
`;

const CreatedByImpekable = styled.div`
    min-height: 27px;
    margin-left: 926px;
    margin-top: 10px;
    min-width: 104px;
    font-family: var(--font-family-poppins);
    font-weight: 400;
    color: var(--white);
    font-size: 18px;
    letter-spacing: 0.11px;
    line-height: 18px;
    white-space: nowrap;
`;

const ImpekableLogoWhite = styled.div`
    width: 140px;
    height: 28px;
    margin-left: 8px;
    background-size: cover;
    background-position: 50% 50%;
`;

const COLORS = styled.div`
    width: 1420px;
    margin-top: 73px;
    margin-right: 19.5px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    min-height: 721px;
`;

const FlexRow = styled.div`
    height: 369px;
    margin-top: 6px;
    display: flex;
    align-items: flex-end;
    min-width: 1420px;
`;

const FlexCol = styled.div`
    width: 700px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    min-height: 369px;
`;

const Title = styled.div`
    ${PoppinsMediumVulcan28px}
    min-height: 41px;
    letter-spacing: 0.12px;
    line-height: 28px;
    white-space: nowrap;
`;

const LinesBordersText = styled.div`
    width: 700px;
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    min-height: 278px;
`;

const Title1 = styled.div`
    width: 697px;
    margin-left: 0.5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 44px;
`;

const Sales = styled.div`
    ${PoppinsNormalShadowBlue16px}
    min-height: 25px;
    margin-top: 4px;
    margin-left: 3px;
    min-width: 151px;
    letter-spacing: 0.1px;
    line-height: 16px;
    white-space: nowrap;
`;

const Ligne35 = styled.img`
    width: 697px;
    height: 1px;
    margin-top: 14px;
    object-fit: cover;
`;

const ColourContainer = styled.div`
    height: 214px;
    position: relative;
    margin-top: 21px;
    display: flex;
    align-items: flex-start;
    min-width: 700px;
`;

const Text = styled.div`
    width: 460px;
    margin-left: 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    min-height: 284px;
`;

const Groupe450 = styled.div`
    width: 456px;
    margin-left: 0.5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 50px;
`;

const Sales1 = styled.div`
    ${PoppinsNormalShadowBlue16px}
    min-height: 25px;
    margin-top: 4px;
    margin-left: 3px;
    min-width: 34px;
    letter-spacing: 0.1px;
    line-height: 16px;
    white-space: nowrap;
`;

const Ligne351 = styled.img`
    width: 456px;
    height: 1px;
    margin-top: 20px;
    object-fit: cover;
`;

const ColourContainer1 = styled.div`
    height: 214px;
    position: relative;
    margin-top: 21px;
    display: flex;
    align-items: flex-start;
    min-width: 460px;
`;

const MainCTA = styled.div`
    width: 220px;
    height: 284px;
    position: relative;
    margin-left: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const Groupe451 = styled.div`
    margin-left: 0.5px;
    flex: 1;
    max-height: 49.5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 49.5px;
`;

const Sales2 = styled.div`
    ${PoppinsNormalShadowBlue16px}
    min-height: 25px;
    margin-top: 4px;
    margin-left: 3px;
    min-width: 78px;
    letter-spacing: 0.1px;
    line-height: 16px;
    white-space: nowrap;
`;

const Ligne352 = styled.img`
    width: 220px;
    height: 1px;
    margin-top: 20px;
    object-fit: cover;
`;

const TionContainer = styled.div`
    margin-top: 62px;
    display: flex;
    align-items: flex-start;
    min-width: 1420px;
`;

const Notification = styled.div`
    width: 220px;
    height: 284px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const Sales3 = styled.div`
    ${PoppinsNormalShadowBlue16px}
    min-height: 25px;
    margin-top: 4px;
    margin-left: 3px;
    min-width: 94px;
    text-align: center;
    letter-spacing: 0.1px;
    line-height: 16px;
    white-space: nowrap;
`;

const Additional = styled.div`
    width: 1180px;
    margin-left: 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    min-height: 284px;
`;

const Groupe453 = styled.div`
    width: 1172px;
    margin-left: 0.5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 50px;
`;

const Sales4 = styled.div`
    ${PoppinsNormalShadowBlue16px}
    min-height: 25px;
    margin-top: 4px;
    margin-left: 3px;
    min-width: 84px;
    text-align: center;
    letter-spacing: 0.1px;
    line-height: 16px;
    white-space: nowrap;
`;

const Ligne353 = styled.img`
    width: 1172px;
    height: 1px;
    margin-top: 20px;
    object-fit: cover;
`;

const ColourContainer2 = styled.div`
    height: 214px;
    position: relative;
    margin-top: 21px;
    display: flex;
    align-items: flex-start;
    min-width: 1180px;
`;

const TYPEFACE = styled.div`
    height: 196px;
    margin-top: 111px;
    margin-right: 35px;
    display: flex;
    align-items: flex-end;
    min-width: 1405px;
`;

const FlexCol1 = styled.div`
    width: 306px;
    align-self: center;
    margin-top: 3.5px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    min-height: 188px;
`;

const Group = styled.div`
    width: 306px;
    height: 103px;
    margin-top: 44px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const LatoBold = styled.div`
    ${PoppinsNormalVulcan13px}
    width: 85px;
    height: 21px;
    margin-top: 3px;
    letter-spacing: 0;
    line-height: 13px;
    white-space: nowrap;
`;

const AaBbCcDd = styled.div`
    margin-right: -2px;
    flex: 1;
    max-height: 79px;
    margin-bottom: -13px;
    height: 79px;
    font-family: var(--font-family-poppins);
    font-weight: 700;
    color: var(--vulcan);
    font-size: 55px;
    letter-spacing: 0;
    line-height: 55px;
    white-space: nowrap;
`;

const Group1 = styled.div`
    width: 303px;
    height: 103px;
    margin-left: 64px;
    margin-bottom: 2px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const LatoRegular = styled.div`
    ${PoppinsNormalVulcan13px}
    width: 121px;
    height: 21px;
    margin-top: 3px;
    letter-spacing: 0;
    line-height: 13px;
    white-space: nowrap;
`;

const AaBbCcDd1 = styled.div`
    margin-right: -2px;
    flex: 1;
    max-height: 79px;
    margin-bottom: -13px;
    height: 79px;
    font-family: var(--font-family-poppins);
    font-weight: 600;
    color: var(--vulcan);
    font-size: 55px;
    letter-spacing: 0;
    line-height: 55px;
    white-space: nowrap;
`;

const Group2 = styled.div`
    width: 307px;
    height: 105px;
    margin-left: 64px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const LatoLight = styled.div`
    ${PoppinsNormalVulcan13px}
    width: 110px;
    height: 21px;
    margin-top: 3px;
    letter-spacing: 0;
    line-height: 13px;
    white-space: nowrap;
`;

const Title2 = styled.h1`
    margin-right: -2px;
    flex: 1;
    max-height: 81px;
    margin-bottom: -13.5px;
    height: 81px;
    font-family: var(--font-family-poppins);
    font-weight: 500;
    color: var(--vulcan);
    font-size: 56px;
    letter-spacing: 0;
    line-height: 56px;
    white-space: nowrap;
`;

const Group3 = styled.div`
    width: 304px;
    height: 105px;
    margin-left: 59px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const LatoLight1 = styled.div`
    ${PoppinsNormalVulcan13px}
    width: 111px;
    height: 21px;
    margin-top: 3px;
    letter-spacing: 0;
    line-height: 13px;
    white-space: nowrap;
`;

const AaBbCcDd2 = styled.div`
    margin-right: -2px;
    flex: 1;
    max-height: 81px;
    margin-bottom: -13.5px;
    height: 81px;
    font-family: var(--font-family-poppins);
    font-weight: 400;
    color: var(--vulcan);
    font-size: 56px;
    letter-spacing: 0;
    line-height: 56px;
    white-space: nowrap;
`;

const FlexRow1 = styled.div`
    height: 252px;
    align-self: flex-start;
    margin-top: 100px;
    margin-left: 80px;
    display: flex;
    align-items: flex-start;
    min-width: 1233px;
`;

const ICONS = styled.div`
    width: 240px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    min-height: 184px;
`;

const FlexCol2 = styled.div`
    width: 240px;
    margin-left: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    min-height: 104px;
`;

const X01Colours = styled.div`
    width: 91px;
    height: 39px;
    display: flex;
`;

const X01Colours1 = styled.div`
    ${PoppinsMediumVulcan28px}
    height: 41px;
    flex: 1;
    letter-spacing: 0.12px;
    line-height: 28px;
    white-space: nowrap;
`;

const IconsNavigationIconStatesContainer = styled.div`
    height: 24px;
    position: relative;
    margin-top: 41px;
    margin-left: 0;
    display: flex;
    align-items: flex-start;
    min-width: 240px;
`;

const FlexRow2 = styled.div`
    height: 64px;
    position: relative;
    margin-top: 16px;
    display: flex;
    align-items: flex-start;
    min-width: 240px;
`;

const IconsNavigationIconStatesContainer1 = styled.div`
    width: 24px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    min-height: 64px;
`;

const IconsNavigationIconStatesContainer2 = styled.div`
    width: 24px;
    position: relative;
    align-self: flex-end;
    margin-left: 30px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    min-height: 64px;
`;

const IconsNavigationIconStatesContainer3 = styled.div`
    width: 24px;
    position: relative;
    margin-left: 30px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    min-height: 64px;
`;

const SIDEBAR = styled.div`
    width: 230px;
    position: relative;
    margin-left: 130px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    min-height: 252px;
`;

const Title3 = styled.div`
    ${PoppinsMediumVulcan28px}
    min-height: 41px;
    margin-top: 6px;
    letter-spacing: 0.12px;
    line-height: 28px;
    white-space: nowrap;
`;

const TABS = styled.div`
    width: 188px;
    margin-left: 137px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    min-height: 100px;
`;

const TabTabGroup = styled.div`
    width: 188px;
    height: 36px;
    margin-top: 17px;
    display: flex;
    background-color: var(--snuff);
    border-radius: 4px;
`;

const Tabs = styled.div`
    margin-top: 1px;
    margin-left: 1px;
    margin-bottom: 1px;
    position: relative;
    display: flex;
    align-items: flex-start;
    min-width: 186px;
`;

const BUTTONS = styled.div`
    width: 130px;
    position: relative;
    margin-left: 178px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    min-height: 140px;
`;

const FlexRow3 = styled.div`
    margin-top: 100px;
    margin-right: 19px;
    display: flex;
    align-items: flex-start;
    min-width: 1421px;
`;

const TOOLTIPS = styled.div`
    height: 169px;
    position: relative;
    display: flex;
    align-items: flex-start;
    min-width: 302px;
`;

const FlexCol3 = styled.div`
    width: 132px;
    position: relative;
    margin-top: 5.5px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    min-height: 145px;
`;

const AVATARS = styled.div`
    width: 131px;
    margin-left: 68px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    min-height: 99px;
`;

const UsersAvatarPhotoStatesContainer = styled.div`
    height: 42px;
    position: relative;
    margin-top: 10px;
    display: flex;
    align-items: flex-start;
    min-width: 100px;
`;

const SEARCHBAR = styled.div`
    width: 175px;
    position: relative;
    margin-left: 236px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    min-height: 97px;
`;

const PAGINATION = styled.div`
    width: 318px;
    margin-left: 191px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    min-height: 97px;
`;

const Pagination = styled.div`
    height: 36px;
    position: relative;
    align-self: flex-end;
    margin-top: 14px;
    display: flex;
    align-items: center;
    min-width: 312px;
`;

const OverlapGroup2 = styled.div`
    width: 1600px;
    margin-top: 82px;
    display: flex;
    flex-direction: column;
    padding: 100px 36px;
    align-items: flex-start;
    min-height: 1184px;
    background-color: var(--zircon);
`;

const FlexRow4 = styled.div`
    height: 420px;
    align-self: flex-end;
    display: flex;
    align-items: flex-start;
    min-width: 1484px;
`;

const CARDS = styled.div`
    width: 410px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    min-height: 380px;
`;

const GRAPHBARS = styled.div`
    width: 177px;
    margin-left: 327px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    min-height: 420px;
`;

const WidgetsElementsChartGraphContainer = styled.div`
    height: 368px;
    position: relative;
    margin-top: 5px;
    margin-left: 1px;
    display: flex;
    align-items: flex-end;
    min-width: 160px;
`;

const FlexCol4 = styled.div`
    width: 410px;
    margin-left: 160px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    min-height: 319px;
`;

const LEGEND = styled.div`
    width: 166px;
    margin-left: 29px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    min-height: 90px;
`;

const Legend2Items = styled.div`
    width: 166px;
    height: 20px;
    position: relative;
    margin-top: 23px;
    display: flex;
    justify-content: space-between;
`;

const CUSTOMERS = styled.div`
    width: 410px;
    position: relative;
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    min-height: 129px;
`;

const Title4 = styled.div`
    ${PoppinsMediumVulcan28px}
    min-height: 41px;
    margin-top: 6px;
    margin-left: 29px;
    letter-spacing: 0.12px;
    line-height: 28px;
    white-space: nowrap;
`;

const TABLES = styled.div`
    width: 1210px;
    margin-top: 101px;
    margin-left: 44px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    min-height: 463px;
`;

const TABLES1 = styled.div`
    width: 1210px;
    position: relative;
    margin-top: 29px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    min-height: 387px;
    background-color: var(--white);
    border-radius: 6px;
    box-shadow: 0px 1px 4px #15223214;
`;

const ScrollContainer = styled.div`
    width: 1210px;
    height: 339px;
    position: relative;
`;

const ScrollGroup = styled.div`
    position: absolute;
    width: 1210px;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    min-height: 339px;
    overflow-y: scroll;

    &::-webkit-scrollbar {
        width: 0;
        display: none;
    }
`;

const Scroll = styled.div`
    position: absolute;
    width: 4px;
    height: 80px;
    top: 31px;
    left: 1201px;
    background-color: var(--mystic);
    border-radius: 5px;
`;

export default UIInventory;
