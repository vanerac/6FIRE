import React from 'react';
//import Topbar from '../components/topbar';

import style from '../styles/main.module.scss';
import Sidebar from '../components/sidebar';

export default function ThemesArticlesCreation() {
    return (
        <div>
            <input type="hidden" id="anPageName" name="page" value="themes-articles-creation" />
            <Sidebar />
        </div>
    );
}
