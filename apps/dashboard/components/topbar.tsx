import React from 'react';

export default function Topbar() {
    // Todo: Add search functionally
    // Todo: Add dropdown functionality
    return (
        <div className="top-navigation">
            <div className="rectangle"></div>
            <div className="top-navigation-search">
                <div className="x00-general-01-icons">
                    <img className="color" src="img/color-10@1x.png" />
                </div>
                <input className="search poppins-normal-comet-14px" value={'Search...'} />
            </div>
            <div className="user-group">
                <div className="users-avatar-photo-2-states">
                    {/*<img className="oval" src="img/oval-10@1x.png" />*/}
                    <img className="image" src="img/image-11@1x.png" />
                </div>

                <div className="monica-simons poppins-normal-white-14px">Elodie</div>
                <div className="icons-chevron-down">
                    <img className="trac" src="img/home-10@1x.png" />
                    <img className="trac" src="img/trac--400-10@1x.png" />
                </div>
            </div>
            <div className="groupe-2">
                <img className="groupe-1" src="img/groupe-1-10@1x.png" />
            </div>
        </div>
    );
}
