import type { NextPage } from 'next';
// import Image from 'next/image';
import Header from './components/header';
import Footer from './components/footer';
// import checkAuth from './components/checkAuth';
import router from 'next/router';
import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import getAPIClient from '@shared/tools/apiClient';
import { UserStatus } from '@shared/services';
import Head from 'next/head';

const Compte: NextPage = (props: any) => {
    const [cookies] = useCookies(['API_TOKEN']);
    let apiClient = getAPIClient(cookies['API_TOKEN']);
    const [$me, setMe] = useState<UserStatus>();
    const [$loading, setLoading] = useState(true);
    const [$error, setError] = useState('');
    const [userInfo, setUserInfo] = useState({
        firstName: '',
        lastName: '',
        email: '',
        telephone: '',
    });
    const [confirmModif, setConfirmModif] = useState(false);

    useEffect(() => {
        if (!cookies['API_TOKEN']) {
            console.log('no token');
            router.replace('/');
            return;
        }
        apiClient = getAPIClient(cookies['API_TOKEN']);
        setLoading(true);
        apiClient.user
            .getMyStats()
            .then((res: any) => {
                setMe(res);
                setLoading(false);
            })
            .catch((error: any) => {
                setError(error.i18n ?? error.message ?? 'Unknown error');
                setLoading(false);
            });
    }, []);

    const updateUser = async (data: any) => {
        setLoading(true);
        console.log(data);
        apiClient.user
            .updateMyStats(data)
            .then((res) => {
                setMe(res);
                console.log('res => ', res);
                setLoading(false);
                alert('Modification effectuée avec succès');
                setUserInfo({
                    firstName: '',
                    lastName: '',
                    email: '',
                    telephone: '',
                });
                setConfirmModif(false);
            })
            .catch((error) => {
                setError(error.i18n ?? error.message ?? 'Unknown error');
                console.log('error');
                setLoading(false);
            });
    };

    return (
        <div>
            <Head>
                <title>Compte - Crypto Trader</title>
            </Head>
            <Header isOpenSideBar={props.useStateOpenSideBar} isEspaceTradingCrypto={false} />
            <div className="account-wrapper">
                <div className="breadcurm">
                    <span>Compte</span>
                    <img src="/img/info-icon/right-arrow.png" alt="" />
                    <span>Informations personnelles</span>
                </div>
                <div className="main-title">
                    <h1 className="title">
                        Informations personnelles<span>Modifiez vos données personnelles</span>
                    </h1>
                </div>

                <div className="infor-form">
                    <form action="#">
                        <div className="input-wrap">
                            <input
                                onChange={(e) => setUserInfo({ ...userInfo, firstName: e.target.value })}
                                type="text"
                                placeholder="* Nom"
                                value={userInfo.firstName}
                            />
                            <input
                                onChange={(e) => setUserInfo({ ...userInfo, lastName: e.target.value })}
                                type="text"
                                placeholder="* Prénom"
                                value={userInfo.lastName}
                            />
                            <input
                                onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })}
                                type="email"
                                placeholder="* Email"
                                value={userInfo.email}
                            />
                            <input
                                onChange={(e) => setUserInfo({ ...userInfo, telephone: e.target.value })}
                                type="tel"
                                placeholder="* Numéro de téléphone"
                                value={userInfo.telephone}
                            />
                        </div>

                        <div className="send_btn">
                            {confirmModif == false ? (
                                <button onClick={() => setConfirmModif(true)} type="submit" className="primary-button">
                                    <span>Modifier</span>
                                    <div className="right-arrow">
                                        <img src="/img/icon/right-arrow.png" alt="" />
                                    </div>
                                </button>
                            ) : (
                                <>
                                    <button
                                        onClick={() => {
                                            setUserInfo({
                                                firstName: '',
                                                lastName: '',
                                                email: '',
                                                telephone: '',
                                            });
                                            setConfirmModif(false);
                                        }}
                                        type="submit"
                                        className="primary-button">
                                        <span>Annuler</span>
                                        <div className="right-arrow">
                                            <img src="/img/icon/right-arrow.png" alt="" />
                                        </div>
                                    </button>
                                </>
                            )}
                        </div>
                    </form>
                </div>
                {confirmModif == true && (
                    <button
                        style={{ marginTop: '20px' }}
                        onClick={() => updateUser(userInfo)}
                        type="submit"
                        className="primary-button">
                        <span>Enregistrer</span>
                        <div className="right-arrow">
                            <img src="/img/icon/right-arrow.png" alt="" />
                        </div>
                    </button>
                )}
            </div>
            <Footer />
        </div>
    );
};

// export default checkAuth(ArticlesDetails);
export default Compte;
