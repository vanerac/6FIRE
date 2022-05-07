import React, { useEffect, useState } from 'react';
import getAPIClient from '@shared/tools/apiClient';
import { User } from '@shared/services';
import router from 'next/router';
import { useCookies } from 'react-cookie';
// import { User } from '@shared/services';
// import apiClient from '@shared/tools/apiClient';
import Topbar from '../components/topbarNew';
import Sidebar from '../components/sidebarNew';
import DataTable from '../components/data-table';

export default function Utilisateurs() {
    const [cookies] = useCookies(['API_TOKEN']);
    const apiClient = getAPIClient(cookies['API_TOKEN']);

    const [$loading, setLoading] = useState(true);
    const [$error, setError] = useState('');
    const [$users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        if (!cookies['API_TOKEN']) {
            console.log('no token');
            router.replace('/');
            return;
        }

        apiClient.user.getUsers().then(
            (res) => {
                setUsers(res);
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
                <Sidebar />

                <div className="inner-wrapper">
                    <div className="header">
                        <h2 className="title">Utilisateurs</h2>
                        <button className="" id="export_data">
                            <i className="fa fa-upload"></i> <span>Export CSV</span>
                        </button>
                    </div>

                    {/*<div className="table-filter">*/}
                    {/*    <input type="text" placeholder="Rechercher" />*/}

                    {/*    <select name="" id="">*/}
                    {/*        <option value="0">Member</option>*/}
                    {/*    </select>*/}

                    {/*    <select name="" id="">*/}
                    {/*        <option value="0">Type abonnement</option>*/}
                    {/*    </select>*/}

                    {/*    <select name="" id="">*/}
                    {/*        <option value="0">Duree abonnement</option>*/}
                    {/*    </select>*/}

                    {/*    <select name="" id="">*/}
                    {/*        <option value="0">Abonnement resiller</option>*/}
                    {/*    </select>*/}

                    {/*    <div className="date-wrap">*/}
                    {/*        <select name="" id="">*/}
                    {/*            <option value="0">Jan 2021</option>*/}
                    {/*        </select>*/}
                    {/*        <select name="" id="">*/}
                    {/*            <option value="0">Jan 2022</option>*/}
                    {/*        </select>*/}
                    {/*    </div>*/}
                    {/*</div>*/}

                    <DataTable
                        headers={[
                            {
                                key: 'id',
                                display: 'ID',
                            },
                            {
                                key: 'email',
                                display: 'Email',
                            },
                            {
                                key: 'firstname',
                                display: 'Prénom',
                            },
                            {
                                key: 'lastname',
                                display: 'Nom',
                            },

                            {
                                key: 'phone',
                                display: 'Téléphone',
                            },
                            {
                                key: 'abonnement',
                                display: 'Abonnement',
                            },
                        ]}
                        data={$users.map((user) => ({
                            id: (user.id?.toString() as string) ?? '?',
                            email: user.email as string,
                            firstname: user.firstName as string,
                            lastname: user.lastName as string,
                            phone: user.telephone as string,
                            abonnement:
                                user.UserSubscription?.find((s) => s.status === 'active')?.Subscription?.name ??
                                'Aucun',
                        }))}
                        editCallback={(id) => router.push(`/details-utilisateurs?id=${id}`)}
                        deleteCallback={console.log}
                    />
                </div>
            </div>
        </div>
    );
}
