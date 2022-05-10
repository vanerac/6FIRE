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
                        <h2 className="title">Essai Gratuit</h2>
                        {/*<button className="" id="export_data">*/}
                        {/*    <i className="fa fa-upload" /> <span>Export CSV</span>*/}
                        {/*</button>*/}
                    </div>
                    <div className="table-header table-col-2">
                        <div className="left-col-search">
                            <div className="search-text">
                                <input type="text" placeholder='Rechercher...' />
                            </div>
                            <div className="selector">
                                <select name="" id="">
                                    <option value="0">select</option>
                                    <option value="0">Etat</option>
                                </select>
                            </div>
                        </div>
                        <div>
                            <a href={'/themes-articles-creationNew'}>
                                <button className={'bg_green'}>Créer un code promo</button>
                            </a>
                        </div>
                    </div>
                    <div className="table-wrapper">
                {/* table content */}
                <div className="table-content mt-0">
                    <table>
                        <thead>
                            <tr>
                                <td className="">Nom Campagne</td>
                                <td className="">Duree dessai</td>
                                <td className="">Type</td>
                                <td className="width-15">Etat (Activ/Desactiver)</td>
                                <td className="text-right">Action</td>
                            </tr>
                        </thead>

                        {/* single row */}
                        <tr>
                           <td>Broker (30j)</td>
                           <td>30</td>
                           <td>Mensule</td>
                           <td className="width-15">
                               <i className="far fa-check-square color-light-green"></i>
                           </td>
                           <td className="text-right flex-space-between">
                               <button className='code-generate bg-dard-blue'>Generer code</button>
                               <i className="fa fa-edit color-dard-blue mr-30"></i>
                               <i className="fas fa-times color-red"></i>
                           </td>
                        </tr>

                        {/* single row */}
                        <tr>
                           <td>Broker (30j)</td>
                           <td>30</td>
                           <td>Mensule</td>
                           <td className="width-15">
                               <i className="far fa-check-square color-light-green"></i>
                           </td>
                           <td className="text-right flex-space-between">
                               <button className='code-generate bg-dard-blue'>Generer code</button>
                               <i className="fa fa-edit color-dard-blue mr-30"></i>
                               <i className="fas fa-times color-red"></i>
                           </td>
                        </tr>

                        {/* single row */}
                        <tr>
                           <td>Broker (30j)</td>
                           <td>30</td>
                           <td>Mensule</td>
                           <td className="width-15">
                               <i className="far fa-check-square color-light-green"></i>
                           </td>
                           <td className="text-right flex-space-between">
                               <button className='code-generate bg-dard-blue'>Generer code</button>
                               <i className="fa fa-edit color-dard-blue mr-30"></i>
                               <i className="fas fa-times color-red"></i>
                           </td>
                        </tr>

                        {/* single row */}
                        <tr>
                           <td>Broker (30j)</td>
                           <td>30</td>
                           <td>Mensule</td>
                           <td className="width-15">
                               <i className="far fa-check-square color-light-green"></i>
                           </td>
                           <td className="text-right flex-space-between">
                               <button className='code-generate bg-dard-blue'>Generer code</button>
                               <i className="fa fa-edit color-dard-blue mr-30"></i>
                               <i className="fas fa-times color-red"></i>
                           </td>
                        </tr>
                    </table>
                </div>
            </div>
                </div>
            </div>
        </div>
    );
}
