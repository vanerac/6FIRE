import React from 'react';
import Topbar from '../components/topbarNew';
import Sidebar from '../components/sidebarNew';

export default function ThemesArticlesCreation() {
    return (
        <div>
            <Topbar />
            <input type="hidden" id="anPageName" name="page" value="themes-articles-creation" />
            <Sidebar />
        </div>
    );
}
