import React, { useEffect, useState } from 'react';
import Topbar from '../components/topbarNew';
import getAPIClient from '@shared/tools/apiClient';
import { Subscription } from '@shared/services';
import router from 'next/router';
import { useCookies } from 'react-cookie';
import DataTable from '../components/data-table';
import SideBar from '../components/sidebarNew';

export default function AbonnementGestionAbonnements() {
    const [cookies] = useCookies(['API_TOKEN']);
    const apiClient = getAPIClient(cookies['API_TOKEN']);

    const [$loading, setLoading] = useState(true);
    const [$error, setError] = useState('');
    const [subscriptions, setSubscriptions] = useState<Subscription[]>([]);

    useEffect(() => {
        if (!cookies['API_TOKEN']) {
            console.log('no token');
            router.replace('/');
            return;
        }

        apiClient.subscription.getSubscriptions().then(
            (res) => {
                setSubscriptions(res);
                setLoading(false);
            },
            (error) => {
                setError(error.i18n ?? error.message ?? 'Unknown error');
                setLoading(false);
            },
        );
    }, []);

    return (
        <div>
            <Topbar />
            <input type="hidden" id="anPageName" name="page" value="themes-articles-creation" />

            {/* Commone header wrapper */}

            <div className="inner-page-setup">
                <SideBar />
                <div className="inner-wrapper">
                    <div className="header">
                        <h2 className="title">Abonnements</h2>
                        {/* <button className="" id="export_data">
                            <i className="fa fa-upload"></i> <span>Export CSV</span>
                        </button> */}
                    </div>
                    <div className="table-header">
                        <div>
                            <a href={'/abonnement-creer-un-abonnement'}>
                                <button className={'bg_green'}>Créer un abonnement</button>
                            </a>
                        </div>
                    </div>
                    <DataTable
                        headers={[
                            {
                                key: 'id',
                                display: 'ID',
                            },
                            {
                                key: 'name',
                                display: 'Nom',
                            },
                            {
                                key: 'price',
                                display: 'Prix',
                            },
                            {
                                key: 'refreshRate',
                                display: 'Durée',
                            },
                            {
                                key: 'isBestValue',
                                display: 'Best Seller',
                            },
                            {
                                key: 'hidden',
                                display: 'Visible',
                            },
                        ]}
                        data={subscriptions.map((subscription) => ({
                            id: (subscription.id?.toString() as string) ?? '?',
                            name: subscription.name as string,
                            price: subscription.price as any,
                            refreshRate: subscription.refreshRate as any,
                            isBestValue: subscription.isBestValue as any,
                            hidden: subscription.hidden as any,
                        }))}
                        editCallback={console.log}
                        deleteCallback={console.log}
                    />
                </div>
            </div>
        </div>
    );
}
