import React, { useEffect, useState } from 'react';
import Topbar from '../components/topbarNew';
import getAPIClient from '@shared/tools/apiClient';
import { Subscription } from '@shared/services';
import router from 'next/router';
import { useCookies } from 'react-cookie';
import SideBar from '../components/sidebarNew';

export default function CreerUnAbonnement() {
    const [cookies] = useCookies(['API_TOKEN']);
    const apiClient = getAPIClient(cookies['API_TOKEN']);

    const [$loading, $setLoading] = useState(true);
    const [$error, $setError] = useState('');
    const [$subscription, $setSubscription] = useState<Subscription>();

    const [subscriptionName, setSubscriptionName] = useState('');
    const [subscriptionPrice, setSubscriptionPrice] = useState('');
    const [$subscriptionTime, setSubscriptionTime] = useState('');
    const [$subscriptionTimeType, setSubscriptionTimeType] = useState('');
    const [$payementPlatform, setPayementPlatform] = useState('');
    const [descriptionLine, setDescriptionLine] = useState('');
    const [isTryingSession, setIsTryingSession] = useState(false);
    const [isHidden, setIsHidden] = useState(false);
    const [isBestSeller, setIsBestSeller] = useState(false);
    const [level, setLevel] = useState('');

    // const id = 1;
    useEffect(() => {
        if (!cookies['API_TOKEN']) {
            console.log('no token');
            router.replace('/');
            return;
        }

        // apiClient.subscription.getSubscriptionById(id).then(
        //     (res) => {
        //         setSubscription(res);
        //         setLoading(false);
        //     },
        //     (error) => {
        //         setError(error.i18n ?? error.message ?? 'Unknown error');
        //         setLoading(false);
        //     },
        // );
    }, []);

    const submit = () => {
        const newAbonnement = {
            // subscriptionName,
            // subscriptionPrice,
            // subscriptionTime,
            // subscriptionTimeType,
            // payementPlatform,
            // descriptionLine,
            // isTryingSession,
            // isHidden,
            // isBestSeller,
            name: subscriptionName,
            description: descriptionLine,
            refreshRate: 1,
            subscriptionType: 'SUBSCRIPTION',
            price: +subscriptionPrice,
            level: +level,
            hidden: isHidden,
            isBestValue: isBestSeller,
            // hasFreeTrial?: boolean;
            // freeTrialDays?: number;
        };

        apiClient.subscription.createSubscription(newAbonnement as any).then((res) => {
            console.log('res', res);
        });
        // alert('feature coming soon');
    };

    return (
        <div>
            <Topbar />
            <input type="hidden" id="anPageName" name="page" value="themes-articles-creation" />

            {/* Commone header wrapper */}

            <div className="inner-page-setup">
                <SideBar />

                <div className="inner-wrapper">
                    <div className="header">
                        <h2 className="title">Code promo</h2>
                    </div>

                    <div onClick={submit} className="table-header">
                        <div>
                            <button className="bg_green">Créer code promo</button>
                        </div>
                    </div>

                    <div className="table-wrapper">
                        <div className="table-title bg_blue">
                            <span>Informations</span>
                        </div>

                        {/* table content */}
                        <div className="table-content">

                            <div className="row-1 inline-flex">
                                <div className="single-item mr-30 flex-grow-1">
                                    <label className="small_title" htmlFor="">
                                    Nom
                                    </label>
                                    <input type="text" className='width-100' placeholder='TEST30' onChange={(e) => setSubscriptionName(e.target.value)} />
                                </div>
                                <div className="single-item mr-30 flex-grow-1">
                                    <label className="small_title" htmlFor="">
                                        Reduction fixe
                                    </label>
                                    <input type="text"  className='width-100' onChange={(e) => setSubscriptionName(e.target.value)} />
                                </div>
                                <div className="single-item mr-30 flex-grow-1">
                                    <label className="small_title" htmlFor="">
                                    Réduction en %
                                    </label>
                                    <input type="text" placeholder='30' className='width-100' onChange={(e) => setSubscriptionName(e.target.value)} />
                                </div>
                            </div>

                            <div className="row-1 inline-flex">
                                <div className="single-item mr-30">
                                    <label className="small_title" htmlFor="">
                                    Sélectionner Abonnement
                                    </label>
                                    <select
                                        className='custom-select-style'
                                        name=""
                                        id=""
                                        onChange={(e) => {
                                            setSubscriptionTimeType(e.target.value);
                                        }}>
                                        <option value="Mensuel">Abonnement</option>
                                    </select>
                                </div>
                                <div className="single-item mr-30">
                                    <div className="icon-box mt-30">
                                        <input
                                            checked={isBestSeller}
                                            onChange={() => setIsBestSeller(!isBestSeller)}
                                            type="checkbox"
                                            className="checkBox-item"
                                            name="Select file"
                                        />

                                        <label htmlFor="test">Actif</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
