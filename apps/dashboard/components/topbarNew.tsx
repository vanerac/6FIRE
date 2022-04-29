import React from 'react';

export default function Topbar() {
    // Todo: Add search functionally
    // Todo: Add dropdown functionality
    return (
        <div>
            <div className="top_navigation">
                <div className="left-col">
                    <a href="./" className="logo"><img src="img/groupe-1-10@1x.png" alt="" /></a>
                    <input className="search poppins-normal-comet-14px" value={'Search...'} />
                </div>
                <div className="right-col">
                    <div className="user-accounts">
                        <ul>
                            <li>
                                <img src="img/image-11@1x.png" alt="" />
                                <span className="name">Elodie</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

