import React, { useEffect, useState } from 'react';
import Topbar from '../components/topbarNew';
import Sidebar from '../components/sidebarNew';
import getAPIClient from '@shared/tools/apiClient';
import { Trader } from '@shared/services';
import router, { useRouter } from 'next/router';
import { useCookies } from 'react-cookie';

export default function ThemesArticlesCreation() {
    // const { query } = useRouter();
    const [cookies] = useCookies(['API_TOKEN']);
    const apiClient = getAPIClient(cookies['API_TOKEN']);

    const [$loading, setLoading] = useState(true);
    const [$error, setError] = useState('');
    const [trader, setTrader] = useState<Trader>();

    useEffect(() => console.log('error', $error), [$error]);

    const [name, setName] = useState('');
    // const [iconUrl, setIconUrl] = useState('img/image-1-1@1x.png');
    const [rank, setRank] = useState(0);
    const [clientId, setClientId] = useState('');

    const { query } = useRouter();
    const { id } = query; // TODO

    // async function uploadImage(file: File) {
    //     const host: string = process.env.NEXT_PUBLIC_API_ROUTE || 'http://localhost:3333/api';
    //     const path = '/upload';
    //     const formData = new FormData();
    //     formData.append('file', file);
    //     const res = await fetch(`${host}${path}`, {
    //         method: 'POST',
    //         body: formData,
    //         headers: {
    //             Authorization: `Bearer ${cookies['API_TOKEN']}`,
    //         },
    //     });
    //
    //     const data = await res.json();
    //
    //     // setIconUrl(data.url);
    //     return { url: data.url };
    // }

    useEffect(() => {
        if (!cookies['API_TOKEN']) {
            console.log('no token');
            router.replace('/');
            return;
        }

        const { id } = query;
        if (id)
            apiClient.traders.getTraderById(id as unknown as number).then(
                (res) => {
                    console.log('res', res);
                    setLoading(false);
                    if (!res) return;
                    if (!res) {
                        setError('Theme not found');
                        return;
                    }
                    setTrader(res as Trader);
                    setRank(res.rank as number);
                    setName(res.name as string);
                    // setIconUrl(res.iconUrl as string);
                    setClientId(res.clientId as string);
                },
                (error) => {
                    setError(error.i18n ?? error.message ?? 'Unknown error');
                    setLoading(false);
                },
            );
    }, [query]);

    const $deleteTrader = () => {
        apiClient.traders.deleteTraderById(id as unknown as number).then(
            () => {
                router.replace('/bot-trading');
            },
            (error) => {
                setError(error.i18n ?? error.message ?? 'Unknown error');
                setLoading(false);
            },
        );
    };

    const createTrader = () => {
        apiClient.traders
            .createTrader({
                name,
                rank: +rank,
                clientId,
            })
            .then(
                (res) => {
                    if (res?.id) alert('Trader created');
                    else return alert('Error');
                    router.push('/bot-trading-creation?id=' + res.id);
                },
                (error) => {
                    setError(error.i18n ?? error.message ?? 'Unknown error');
                    setLoading(false);
                },
            );
    };

    const updateCuration = () => {
        apiClient.traders
            .updateTraderCuration([
                {
                    id: trader?.id,
                    name,
                    rank: +rank,
                    clientId,
                },
            ])
            .then(
                (res) => {
                    if (res?.id) alert('Trader created');
                    else return alert('Error');
                    router.push('/bot-trading-creation?id=' + res.id);
                },
                (error) => {
                    setError(error.i18n ?? error.message ?? 'Unknown error');
                    setLoading(false);
                },
            );
    };

    const save = () => {
        if (trader?.id) updateCuration();
        else createTrader();
    };
    return (
        <div>
            <Topbar />
            <input type="hidden" id="anPageName" name="page" value="themes-articles-creation" />

            {/* Commone header wrapper */}

            <div className="inner-page-setup">
                <Sidebar />

                <div className="inner-wrapper">
                    <div className="header">
                        <h2 className="title">{trader ? 'Modifier' : 'Creer'} un theme</h2>
                    </div>

                    <div className="table-header">
                        <div>
                            {trader?.id ? (
                                <button onClick={$deleteTrader} className="bg_red">
                                    Supprimer
                                </button>
                            ) : null}
                            <button onClick={save} className={'bg_green'}>
                                {trader ? 'Sauvegarder les modifications' : 'Créer le theme'}
                            </button>
                        </div>
                    </div>
                    <div className="table-wrapper">
                        <div className="table-title bg_blue">
                            <span>Trader</span>
                        </div>

                        {/* table content */}
                        <div className="table-content">
                            <div className="row-1 inline-flex">
                                <div className="single-item mr-30">
                                    <label className="small_title" htmlFor="">
                                        Nom du Trader
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="type you theme name"
                                        value={name}
                                        onChange={(event) => setName(event.target.value)}
                                    />
                                </div>
                                <div className="single-item mr-30">
                                    <label className="small_title" htmlFor="">
                                        Rank du trader
                                    </label>
                                    <input
                                        type="number"
                                        placeholder="type you theme name"
                                        value={rank}
                                        onChange={(event) => setRank(event.target.value as any)}
                                    />
                                </div>
                                <div className="single-item mr-30">
                                    <label className="small_title" htmlFor="">
                                        Id Binance du trader
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="type you theme name"
                                        value={clientId}
                                        onChange={(event) => setClientId(event.target.value)}
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
