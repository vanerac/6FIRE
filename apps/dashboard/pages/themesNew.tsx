import React, { useEffect, useState } from 'react';
import Topbar from '../components/topbarNew';
import getAPIClient from '@shared/tools/apiClient';
import { Theme } from '@shared/services';
import router from 'next/router';
import { useCookies } from 'react-cookie';
import Sidebar from '../components/sidebarNew';
import DataTable from '../components/data-table';
// import { Theme } from '@shared/services';
// import apiClient from '@shared/tools/apiClient';

export default function ThemesArticles() {
    // const { query } = useRouter();
    const [cookies] = useCookies(['API_TOKEN']);
    const apiClient = getAPIClient(cookies['API_TOKEN']);

    const [$loading, setLoading] = useState(true);
    const [$error, setError] = useState('');
    const [$themes, setThemes] = useState<Theme[]>([]);

    useEffect(() => {
        if (!cookies['API_TOKEN']) {
            console.log('no token');
            router.replace('/');
            return;
        }

        apiClient.themes.getThemes().then(
            (res) => {
                setThemes(res);
                setLoading(false);
            },
            (error) => {
                setError(error.i18n ?? error.message ?? 'Unknown error');
                setLoading(false);
            },
        );
    }, []);

    const deleteTheme = async (themeId: number) => {
        console.log('deleteTheme', themeId);
        try {
            await apiClient.themes.deleteTheme(themeId);

            alert('Theme supprimé');
            const newThemes = $themes.filter((theme) => theme.id !== themeId);

            setThemes(newThemes);
        } catch (e) {
            console.log(e);
            alert('Echec de suppression');
        }
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
                            <a href={'/themes-articles-creationNew'}>
                                <button className={'bg_green'}>Créer un theme</button>
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
                                key: 'subscription',
                                display: "Niveau d'Abonnement",
                            },
                        ]}
                        data={$themes.map((theme) => ({
                            id: theme.id?.toString() ?? '?',
                            subscription: theme?.subscriptionLevel?.toString() ?? '?',
                            name: theme.name ?? '?',
                            // visible: theme.hidden ? 'false' : 'true',
                        }))}
                        editCallback={(id) => router.push(`/themes-articles-creationNew?id=${id}`)}
                        deleteCallback={(id) => deleteTheme(+id)}
                    />
                </div>
            </div>
        </div>
    );
}
