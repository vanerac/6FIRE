import React, { useEffect, useState } from 'react';
import Topbar from '../components/topbarNew';
import Sidebar from '../components/sidebarNew';
import getAPIClient from '@shared/tools/apiClient';
import { Subscription, Theme } from '@shared/services';
import router from 'next/router';
import { useCookies } from 'react-cookie';

export default function ThemesArticlesCreation() {
    // const { query } = useRouter();
    const [cookies] = useCookies(['API_TOKEN']);
    const apiClient = getAPIClient(cookies['API_TOKEN']);

    const [$loading, setLoading] = useState(true);
    const [$error, setError] = useState('');
    const [$theme, setTheme] = useState<Theme>();
    const [$subscriptions, setSubscriptions] = useState<Subscription[]>([]);

    const [title, $setTitle] = useState('');
    const [selectedSubscription, $setSelectedSubscription] = useState<Subscription>();

    const id = 1; // TODO

    useEffect(() => {
        if (!cookies['API_TOKEN']) {
            console.log('no token');
            router.replace('/');
            return;
        }

        if (id)
            apiClient.themes.getTheme(id).then(
                (res) => {
                    setTheme(res);
                    setLoading(false);
                },
                (error) => {
                    setError(error.i18n ?? error.message ?? 'Unknown error');
                    setLoading(false);
                },
            );
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

    const updateTheme = () => {
        apiClient.themes
            .updateTheme(id, {
                ...$theme,
                name: title,
                subscriptionLevel: selectedSubscription?.level ?? 0,
            })
            .then(
                (res) => {
                    setTheme(res);
                    setLoading(false);
                },
                (error) => {
                    setError(error.i18n ?? error.message ?? 'Unknown error');
                    setLoading(false);
                },
            );
    };

    const $deleteTheme = () => {
        apiClient.themes.deleteTheme(id).then(
            () => {
                router.replace('/themes');
            },
            (error) => {
                setError(error.i18n ?? error.message ?? 'Unknown error');
                setLoading(false);
            },
        );
    };

    const createTheme = () => {
        apiClient.themes
            .createTheme({
                name: title,
                subscriptionLevel: selectedSubscription?.level ?? 0,
            })
            .then(
                () => {
                    alert('Theme created');
                },
                (error) => {
                    setError(error.i18n ?? error.message ?? 'Unknown error');
                    setLoading(false);
                },
            );
    };

    const $save = () => {
        if ($theme?.id) updateTheme();
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
                        <h2 className="title">Creer un theme</h2>
                    </div>

                    <div className="table-header">
                        <div>
                            <button className="bg_red">Supprimer</button>
                            <button className="bg_green">Sauvegarder les modifications</button>
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
                                    <input type="text" placeholder="type you theme name" />
                                </div>
                                <div className="single-item">
                                    <label className="small_title" htmlFor="">
                                        Select
                                    </label>
                                    <select name="" id="">
                                        <option value="0">Select</option>
                                        <option value="0">theme one</option>
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
                                            <img src="img/image-1-1@1x.png" alt="" />
                                        </div>
                                        <button className="upload_files">Select icon</button>
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
