import React, { useEffect, useState } from 'react';
import getAPIClient from '@shared/tools/apiClient';
import { useCookies } from 'react-cookie';

export default function Topbar() {
    // Todo: Add search functionally
    // Todo: Add dropdown functionality
    const [cookies] = useCookies(['API_TOKEN']);
    const apiClient = getAPIClient(cookies['API_TOKEN']);
    const [userInfo, setUserInfo] = useState('');

    useEffect(() => {
        // fecth data from a user
        apiClient.user.getMyStats().then((res) => {
            console.log(res);
            setUserInfo(res.firstName as any);
        });
    }, []);

    return (
        <div>
            <div className="top_navigation">
                <div className="left-col">
                    <a href="./" className="logo">
                        <img src="img/groupe-1-10@1x.png" alt="" />
                    </a>
                    {/* <input className="search poppins-normal-comet-14px" value={'Search...'} /> */}
                </div>
                <div className="right-col">
                    <div className="user-accounts">
                        <ul>
                            <li>
                                <img src="img/image-11@1x.png" alt="" />
                                <span className="name">{userInfo}</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
