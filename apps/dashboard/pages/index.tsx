import React, { useEffect } from 'react';
import Topbar from '../components/topbarNew';
import Sidebar from '../components/sidebarNew';
import router from 'next/router';
import { useCookies } from 'react-cookie';

export default function Index() {
    const [cookies] = useCookies(['API_TOKEN']);

    useEffect(() => {
        if (!cookies['API_TOKEN']) {
            console.log('no token');
            router.replace('/login');
            return;
        }
    }, []);
    return (
        <div>
            <Topbar />
            <div className="inner-page-setup">
                <Sidebar />
            </div>
        </div>
    );
}
