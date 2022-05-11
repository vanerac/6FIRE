import React, { useEffect, useState } from 'react';
import Topbar from '../components/topbarNew';
import getAPIClient from '@shared/tools/apiClient';
import { Subscription } from '@shared/services';
import router from 'next/router';
import { useCookies } from 'react-cookie';
import SideBar from '../components/sidebarNew';
import RichtextEditor from '../components/rich-editor';




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
                        <h2 className="title">Crypto Wallet</h2>
                    </div>

                    <div onClick={submit} className="table-header">
                        <div>
                            <button className="bg_green">Sauvegarder les modifications</button>
                        </div>
                    </div>

                    <div className="table-wrapper">
                        <div className="table-title bg_blue">
                            <span>Crypto</span>
                        </div>

                        {/* table content */}
                        <div className="table-content">

                            <div className="row-1 inline-flex">
                                <div className="grid-system">
                                    <div className='left-col'>
                                        <div className="single-item mr-30 flex-grow-1">
                                        <label className="small_title" htmlFor="">
                                        Sélectionner Abonnement
                                        </label>
                                        <select
                                            className='width-100'
                                            name=""
                                            id=""
                                            onChange={(e) => {
                                                setSubscriptionTimeType(e.target.value);
                                            }}>
                                            <option value="Mensuel">Mensuel</option>
                                            <option value="Trimestriel">Trimestriel</option>
                                            <option value="Semestriel">Semestriel</option>
                                            <option value="Annuel">Annuel</option>
                                        </select>
                                    </div>
                                    <div className="single-item mr-30 flex-grow-1">
                                        <label className="small_title" htmlFor="">
                                            Crypto Sélectionné
                                        </label>
                                        <input type="text" className='width-100' placeholder='Bitcoin' onChange={(e) => setSubscriptionName(e.target.value)} />
                                    </div>
                                    <div className="single-item mr-30 flex-grow-1">
                                        <label className="small_title" htmlFor="">
                                            Devise
                                        </label>
                                        <input type="text" placeholder='47 705.50' className='width-100' onChange={(e) => setSubscriptionPrice(e.target.value)} />
                                    </div>
                                    <div className="single-item mr-30 flex-grow-1">
                                        <label className="small_title" htmlFor="">
                                            Pourcentage Wallet
                                        </label>
                                        <input type="text" placeholder='50%' className='width-100' onChange={(e) => setSubscriptionPrice(e.target.value)} />
                                    </div>
                                    </div>
                                    <div className="rigth-col">
                                        <i className="fas fa-times color-red"></i>
                                    </div>
                                </div>
                            </div>

                            <div className="row-1 inline-flex">
                                <div className="single-item mr-30">
                                    <button className='crypto-button primary-button bg-orange'>Ajouter une crypto</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="table-wrapper">
                        <div className="table-title bg_blue">
                            <span>Message</span>
                        </div>

                        {/* table content */}
                        <div className="table-content">

                            <div className="row-1 inline-flex">
                                <div className="single-item mr-30">
                                    <div className="single-item mr-30 flex-grow-1">
                                        <label className="small_title" htmlFor="">
                                            Choisir une date
                                        </label>
                                        <input type="text" className='width-100' onChange={(e) => setSubscriptionName(e.target.value)} />
                                    </div>
                                </div>
                            </div>
                            <div className="row-1 inline-flex">
                                <div className="single-item">
                                    <div className="text_editor">
                                        <span>text editor component will go here..</span>
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
