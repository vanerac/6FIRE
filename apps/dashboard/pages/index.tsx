import React from 'react';
import Topbar from '../components/topbarNew';
import Sidebar from '../components/sidebarNew';

export default function Index() {
    return (
        <div>
            <Topbar />
            <div className="inner-page-setup">
                <Sidebar />
            </div>
        </div>
    );
}
