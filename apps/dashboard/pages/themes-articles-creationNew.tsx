import React, { FormEvent, useEffect, useState } from 'react';
import Topbar from '../components/topbarNew';
import Sidebar from '../components/sidebarNew';
import getAPIClient from '@shared/tools/apiClient';
import { Subscription, Theme } from '@shared/services';
import router, { useRouter } from 'next/router';
import { useCookies } from 'react-cookie';

export default function ThemesArticlesCreation() {
    // const { query } = useRouter();
    const [cookies] = useCookies(['API_TOKEN']);
    const apiClient = getAPIClient(cookies['API_TOKEN']);

    const [$loading, setLoading] = useState(true);
    const [$error, setError] = useState('');
    const [theme, setTheme] = useState<Theme>();
    const [subscriptions, setSubscriptions] = useState<Subscription[]>([]);

    const [title, setTitle] = useState('');
    const [selectedSubscriptionId, setSelectedSubscriptionId] = useState();
    const [iconUrl, setIconUrl] = useState('img/image-1-1@1x.png');
    const { query } = useRouter();
    const { id } = query; // TODO

    useEffect(() => {
        console.log('selectedSubscription', selectedSubscriptionId);
    }, [selectedSubscriptionId]);

    async function uploadImage(file: File) {
        const host: string = process.env.NEXT_PUBLIC_API_ROUTE || 'http://localhost:3333/api';
        const path = '/upload';
        const formData = new FormData();
        formData.append('file', file);
        const res = await fetch(`${host}${path}`, {
            method: 'POST',
            body: formData,
            headers: {
                Authorization: `Bearer ${cookies['API_TOKEN']}`,
            },
        });

        const data = await res.json();

        setIconUrl(data.url);
        return { url: data.url };
    }

    useEffect(() => {
        if (!cookies['API_TOKEN']) {
            console.log('no token');
            router.replace('/');
            return;
        }

        const { id } = query;
        if (id)
            apiClient.themes.getTheme(id as unknown as number).then(
                (res) => {
                    console.log('res', res);
                    setLoading(false);
                    if (!res) return;
                    if (!res) {
                        setError('Theme not found');
                        return;
                    }
                    setTheme(res);
                    setTitle(res.name as string);
                    setIconUrl(res.iconUrl as string);
                },
                (error) => {
                    setError(error.i18n ?? error.message ?? 'Unknown error');
                    setLoading(false);
                },
            );
        apiClient.subscription.getSubscriptions().then(
            (res) => {
                setSubscriptions(res);
                console.log('subscriptions => ', res);
                setLoading(false);
            },
            (error) => {
                setError(error.i18n ?? error.message ?? 'Unknown error');
                setLoading(false);
            },
        );
    }, [query]);

    const updateTheme = () => {
        apiClient.themes
            .updateTheme(id as unknown as number, {
                ...theme,
                iconUrl: iconUrl,
                name: title,
                subscriptionLevel: subscriptions.find((s) => s.id === selectedSubscriptionId)?.level ?? 0,
            })
            .then(
                (res) => {
                    setTheme(res);
                    setLoading(false);
                    alert('Theme updated');
                },
                (error) => {
                    setError(error.i18n ?? error.message ?? 'Unknown error');
                    setLoading(false);
                    alert('Echec de la sauvegarde, verifiez les champs');
                },
            );
    };

    const $deleteTheme = () => {
        apiClient.themes.deleteTheme(id as unknown as number).then(
            () => {
                alert('Theme Supprime');
                router.replace('/themes');
            },
            (error) => {
                setError(error.i18n ?? error.message ?? 'Unknown error');
                setLoading(false);
                alert('Echec de la suppression');
            },
        );
    };

    const createTheme = () => {
        console.log('createTheme => ', selectedSubscriptionId);
        // apiClient.themes
        //     .createTheme({
        //         name: title,
        //         iconUrl: iconUrl,
        //         subscriptionLevel: selectedSubscriptionId?.level ?? 0,
        //     })
        //     .then(
        //         (res) => {
        //             alert('Theme created');
        //             router.push('/themes-articles-creationNew?id=' + res.id);
        //         },
        //         (error) => {
        //             setError(error.i18n ?? error.message ?? 'Unknown error');
        //             setLoading(false);
        //             alert('Echec de la creation, verifiez les champs');
        //         },
        //     );
    };

    const save = () => {
        if (theme?.id) updateTheme();
        else createTheme();
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
                        <h2 className="title">{theme ? 'Modifier' : 'Creer'} un theme</h2>
                    </div>

                    <div className="table-header">
                        <div>
                            {theme?.id ? (
                                <button onClick={$deleteTheme} className="bg_red">
                                    Supprimer
                                </button>
                            ) : null}
                            <button onClick={save} className={'bg_green'}>
                                {theme ? 'Sauvegarder les modifications' : 'Créer le theme'}
                            </button>
                        </div>
                    </div>
                    <div className="table-wrapper">
                        <div className="table-title bg_blue">
                            <span>Theme</span>
                        </div>

                        {/* table content */}
                        <div className="table-content">
                            <div className="row-1 inline-flex">
                                <div className="single-item mr-30">
                                    <label className="small_title" htmlFor="">
                                        Nom du theme
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="type you theme name"
                                        value={title}
                                        onChange={(event) => setTitle(event.target.value)}
                                    />
                                </div>
                                <div className="single-item">
                                    <label className="small_title" htmlFor="">
                                        Select
                                    </label>
                                    <select
                                        name=""
                                        id=""
                                        onChange={(event) => setSelectedSubscriptionId(event.target.value as any)}>
                                        <option value="">Selectionnez un abonnement</option>
                                        {subscriptions.map((subscription) => (
                                            <option key={subscription.id} value={subscription.id}>
                                                {subscription.name} - {subscription.price}€ (Niveau {subscription.level}
                                                )
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            <div className="row-1 inline-flex">
                                <div className="single-item mr-30">
                                    <label className="small_title" htmlFor="">
                                        Nom du theme
                                    </label>
                                    <div className="icon-box">
                                        <div className="thum">
                                            <img src={iconUrl} alt="" />
                                        </div>
                                        <input
                                            onInput={(
                                                event: FormEvent<HTMLInputElement> & { target: { files: never[] } },
                                            ) => uploadImage(event.target.files[0])}
                                            type="file"
                                            className="upload_files"
                                            name="Select file"
                                        />
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
