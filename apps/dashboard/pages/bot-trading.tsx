import React, { useEffect, useState } from 'react';
import Topbar from '../components/topbarNew';
import getAPIClient from '@shared/tools/apiClient';
import router from 'next/router';
import { Trader } from '@shared/services';
import { useCookies } from 'react-cookie';
import Sidebar from '../components/sidebarNew';
import DataTable from '../components/data-table';

export default function BotTrading() {
    const [cookies] = useCookies(['API_TOKEN']);
    const apiClient = getAPIClient(cookies['API_TOKEN']);

    const [$loading, setLoading] = useState(true);
    const [$error, setError] = useState('');
    const [$curation, setCuration] = useState<(Trader & { isFollowing?: boolean })[]>([]);

    useEffect(() => {
        if (!cookies['API_TOKEN']) {
            console.log('no token');
            router.replace('/');
            return;
        }

        apiClient.traders.getTraderCuration().then(
            (res) => {
                setCuration(res);
                console.log(res);
                setLoading(false);
            },
            (error) => {
                setError(error.i18n ?? error.message ?? 'Unknown error');
                setLoading(false);
            },
        );
    }, []);

    const deleteTrader = (traderId: number) => {
        apiClient.traders.deleteTraderById(traderId).then(
            () => {
                alert('Trader supprimé');
                setCuration($curation.filter((trader) => trader.id !== traderId));
            },
            (error) => {
                alert('Erreur lors de la suppression du trader');
                setError(error.i18n ?? error.message ?? 'Unknown error');
            },
        );
    };

    return (
        <div>
            <Topbar />
            <div className="inner-page-setup">
                <Sidebar />
                <div className="inner-wrapper">
                    <div className="header">
                        <h2 className="title">Themes</h2>
                        {/*<button className="" id="export_data">*/}
                        {/*    <i className="fa fa-upload" /> <span>Export CSV</span>*/}
                        {/*</button>*/}
                    </div>
                    <div className="table-header">
                        <div>
                            <a href={'/bot-trading-creation'}>
                                <button className={'bg_green'}>Ajouter un trader</button>
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
                                key: 'clientId',
                                display: 'Trader Id',
                            },
                        ]}
                        data={$curation.map((trader) => ({
                            id: trader.id?.toString() ?? '?',
                            name: trader.name ?? '?',
                            clientId: trader.clientId ?? '?',
                            // visible: theme.hidden ? 'false' : 'true',
                        }))}
                        editCallback={(id) => router.replace(`/bot-trading-creation?id=${id}`)}
                        deleteCallback={(id) => deleteTrader(+id)}
                    />
                </div>
            </div>
        </div>
    );
}
