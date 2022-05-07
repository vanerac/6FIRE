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

    const [$loading, setLoading] = useState(true);
    const [$error, setError] = useState('');
    const [$subscription, setSubscription] = useState<Subscription>();

    const [subscriptionName, setSubscriptionName] = useState('');
    const [subscriptionPrice, setSubscriptionPrice] = useState('');
    const [subscriptionTime, setSubscriptionTime] = useState('');
    const [subscriptionTimeType, setSubscriptionTimeType] = useState('');
    const [payementPlatform, setPayementPlatform] = useState('');
    const [descriptionLine, setDescriptionLine] = useState('');
    const [isTryingSession, setIsTryingSession] = useState(false);
    const [isHidden, setIsHidden] = useState(false);
    const [isBestSeller, setIsBestSeller] = useState(false);

    const id = 1;
    useEffect(() => {
        if (!cookies['API_TOKEN']) {
            console.log('no token');
            router.replace('/');
            return;
        }

        apiClient.subscription.getSubscriptionById(id).then(
            (res) => {
                setSubscription(res);
                setLoading(false);
            },
            (error) => {
                setError(error.i18n ?? error.message ?? 'Unknown error');
                setLoading(false);
            },
        );
    }, []);

    // submit all data
    const submit = () => {
        // print all data
        console.log(
            subscriptionName,
            subscriptionPrice,
            subscriptionTime,
            subscriptionTimeType,
            payementPlatform,
            descriptionLine,
            isTryingSession,
            isHidden,
            isBestSeller,
        );
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
                        <h2 className="title">Gestion abonnements </h2>
                    </div>

                    <div className="table-header">
                        <div>
                                <button className="bg_green">
                                    Creer un abonnement
                                </button>
                        </div>
                    </div>
                    <div className="table-wrapper">
                        <div className="table-title bg_blue">
                            <span>Information</span>
                        </div>

                        {/* table content */}
                        <div className="table-content">
                            <div className="row-1 inline-flex">
                                <div className="single-item mr-30">
                                    <label className="small_title" htmlFor="">
                                        Nom 
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Novice"
                                    />
                                </div>
                                <div className="single-item mr-30">
                                    <label className="small_title" htmlFor="">
                                        Prix
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="49.99 &euro;"
                                    />
                                </div>
                                <div className="single-item mr-30">
                                    <label className="small_title" htmlFor="">
                                        Duree
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="30"
                                    />
                                </div>
                                <div className="single-item">
                                    <label className="small_title" htmlFor="">
                                        Type
                                    </label>
                                    <select
                                        name=""
                                        id=""
                                    >
                                        <option value="">
                                            Mensuel
                                        </option>
                                    </select>
                                </div>
                            </div>

                            <div className="row-1 inline-flex">
                                <div className="single-item mr-30">
                                    <div className="icon-box">
                                        <input
                                            type="checkbox"
                                            className="checkBox-item"
                                            name="Select file"
                                        />
                                        
                                        <label htmlFor="test">Best seller</label>
                                    </div>
                                </div>
                                <div className="single-item mr-30">
                                    <div className="icon-box">
                                        <input
                                            type="checkbox"
                                            className="checkBox-item"
                                            name="Select file"
                                        />
                                        
                                        <label htmlFor="test">Visible</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="table-wrapper">
                        <div className="table-title bg_blue">
                            <span>Plateforme de paiement</span>
                        </div>

                        {/* table content */}
                        <div className="table-content">
                            <div className="row-1 inline-flex">
                                
                                <div className="single-item">
                                    <label className="small_title" htmlFor="">
                                    Plateforme de paiement
                                    </label>
                                    <select
                                        name=""
                                        id=""
                                    >
                                        <option value="">
                                            Plateforme
                                        </option>
                                        <option value="">
                                            Plateforme de
                                        </option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="table-wrapper">
                        <div className="table-title bg_blue">
                            <span>Lignes descriptives</span>
                        </div>

                        {/* table content */}
                        <div className="table-content">
                            <div className="row-1 inline-flex">
                                
                                <div className="single-item">
                                    <input
                                        type="text"
                                        placeholder="Lignes 1"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
