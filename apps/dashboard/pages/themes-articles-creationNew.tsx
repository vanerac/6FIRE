import React from 'react';
import Topbar from '../components/topbarNew';

import style from '../styles/main.module.scss';
import Sidebar from '../components/sidebarNew';

export default function ThemesArticlesCreation() {
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
                            <button className='bg_red'>Supprimer</button>
                            <button className='bg_green'>Sauvegarder les modifications</button>
                        </div>
                    </div>
                    <div className="table-wrapper">
                        <div className="table-title bg_blue"><span>Theme</span></div>

                        {/* table content */}
                        <div className="table-content">
                            <div className="row-1 inline-flex">
                                <div className="single-item mr-30">
                                    <label className='small_title' htmlFor="">Nom du theme</label>
                                    <input type="text" placeholder='type you theme name' />
                                </div>
                                <div className="single-item">
                                    <label className='small_title' htmlFor="">Select</label>
                                    <select name="" id="">
                                        <option value="0">Select</option>
                                        <option value="0">theme one</option>
                                    </select>
                                </div>
                            </div>

                            <div className="row-1 inline-flex">
                                <div className="single-item mr-30">
                                    <label className='small_title' htmlFor="">Nom du theme</label>
                                    <div className="icon-box">
                                        <div className="thum">
                                            <img src="img/image-1-1@1x.png" alt="" />
                                        </div>
                                        <button className='upload_files'>Select icon</button>
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
