import type { NextPage } from 'next';
// import router from 'next/router';
import Footer from './components/footer';
import Header from './components/header';

const MentionsLegales: NextPage = (props: any) => {
    return (
        <div>
            <input type="hidden" id="anPageName" name="page" value="homepage-1" />
            <Header isOpenSideBar={props.useStateOpenSideBar} isEspaceTradingCrypto={true} />

            <div className="general_text_wrapper">
                <div className="main-title">
                    <h3 className="title">MENTIONS LÉGALES</h3>
                </div>

                {/* Text box with title, you can copy to generate new text block */}
                <div className="text">
                    {/* Text title */}
                    <p>Informations l&eacute;gales</p>

                    <p>
                        Le Site, www.6fireinvest.com, est &eacute;dit&eacute; par la soci&eacute;t&eacute; 6FIRE,
                        Soci&eacute;t&eacute; par actions simplifi&eacute;es, 13 rte de Pamproux - 79800 La Mothe
                        Saint-Heray - FRANCE sous le num&eacute;ro 83425043300010. Pour toute information ou conseil,
                        vous pouvez nous joindre par mail &agrave; : contact@6fireinvest.com.
                    </p>

                    <p>H&eacute;bergement</p>

                    <p>
                        Ce site est h&eacute;berg&eacute; exclusivement sur des datacenters en Europe (Irlande et
                        Allemagne) de la soci&eacute;t&eacute; Amazon Web Services (AWS ): Amazon Web Services Inc. 410
                        Terry Avenue North, Seattle, WA 98109-5210, USA http://aws.amazon.com
                    </p>

                    <p>
                        Mentions Les informations collect&eacute;es sur ce site sont destin&eacute;es au seul usage de
                        la soci&eacute;t&eacute; 6FIRE et ne seront en aucun cas mises &#1072; disposition de tierces
                        parties. Les d&eacute;nominations 6Fire Invest ainsi que le logo 6Fire Invest sont
                        r&eacute;serv&eacute;s &#1072; l&rsquo;usage de la soci&eacute;t&eacute; 6FIRE. Toute
                        reproduction ou utilisation faite sans l&rsquo;accord pr&eacute;alable de la
                        soci&eacute;t&eacute; 6FIRE est interdite, m&ecirc;me partielle.
                    </p>
                </div>
            </div>

            {/* Footer section */}
            <Footer />
        </div>
    );
};

export default MentionsLegales;
