import React, { useEffect, useState } from 'react';
import Topbar from '../components/topbarNew';
import getAPIClient from '@shared/tools/apiClient';
import { User } from '@shared/services';
import router, { useRouter } from 'next/router';
import { useCookies } from 'react-cookie';
import SideBar from '../components/sidebarNew';

// import { ApiClient } from '@shared/services';
// const apiClient = new ApiClient();

// get userId from params
export default function DetailsUtilisateurs($args: any) {
    const [cookies] = useCookies(['API_TOKEN']);
    const apiClient = getAPIClient(cookies['API_TOKEN']);

    const [$loading, setLoading] = useState(true);
    const [$error, setError] = useState('');
    const [user, setUser] = useState<User>();
    const { query } = useRouter();

    // const [email, setEmail] = useState('');
    // const [firstName, setFirstName] = useState('');
    // const [lastName, setLastName] = useState('');
    // const [telephone, setTelephone] = useState('');
    // const [note, setNote] = useState('');
    // const [registrationDate, setRegistrationDate] = useState('');
    const [mailConfirmed, $setMailConfirmed] = useState(false);
    const [isMember, setIsMember] = useState(false);
    // const [userId, setUserId] = useState('');
    // set all useState about subscription
    const [$subscriptionPrice, setSubscriptionPrice] = useState('');
    const [$subscriptionType, setSubscriptionType] = useState('');
    const [$subscriptionStartDate, setSubscriptionStartDate] = useState('');
    const [$subscriptionEndDate, setSubscriptionEndDate] = useState('');
    const [$subscriptionTransactionType, setSubscriptionTransactionType] = useState('');
    const [$subscriptionTransactionId, setSubscriptionTransactionId] = useState('');
    const [subscriptionRenewal, setSubscriptionRenewal] = useState(false);
    const [subscriptionIsActive, setSubscriptionisAcrtive] = useState(false);
    const [$subscriptionResiliationDate, setSubscriptionResiliationDate] = useState('');
    const [userHasNoSubscriptions, setUserHasNoSubscriptions] = useState(false);

    useEffect(() => {
        if (!cookies['API_TOKEN']) {
            console.log('no token');
            router.replace('/');
            return;
        }

        console.log('userId', query.id);

        apiClient.user.getUser(query.id as any).then(
            (res) => {
                setUser(res);
                setLoading(false);
                console.log(res.UserSubscription);
                if (res.UserSubscription) {
                    setUserHasNoSubscriptions(true);
                }
            },
            (error) => {
                setError(error.i18n ?? error.message ?? 'Unknown error');
                setLoading(false);
            },
        );
    }, [query]);

    const $updateUser = () => {
        if (!user || !user.id) return alert('No user');
        console.log(query.id);

        const newUser = {
            // ...user,
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName,
            telephone: user.telephone,
            note: user.note,
            verifiedEmail: mailConfirmed,
            // UserSubscription: {
            //     ...user.UserSubscription,
            // },
        };

        console.log(newUser);

        apiClient.user.updateUser(user.id, newUser as User).then(
            (res) => {
                setUser(res);
                setLoading(false);
                alert('User updated');
            },
            (error) => {
                setError(error.i18n ?? error.message ?? 'Unknown error');
                setLoading(false);
            },
        );
    };

    const $changePassword = () => {
        if (!user || !user.id) return alert('No user');

        // TODO: this will be changed to a route that changes the password to a random string
        const password = prompt('New password');
        if (!password) return;

        apiClient.user.updateUser(user.id, { ...user, password }).then(
            (res) => {
                setUser(res);
                setLoading(false);
            },
            (error) => {
                setError(error.i18n ?? error.message ?? 'Unknown error');
                setLoading(false);
            },
        );
    };

    const $cancelSubscription = () => {
        if (!user || !user.id) return alert('No user');

        apiClient.user.deleteUserSubscription(user.id).then(
            (res) => {
                setUser(res);
                setLoading(false);
            },
            (error) => {
                setError(error.i18n ?? error.message ?? 'Unknown error');
                setLoading(false);
            },
        );
    };

    const $deleteUser = () => {
        if (!user || !user.id) return alert('No user');

        apiClient.user.deleteUser(user.id).then(
            (res) => {
                setUser(res);
                setLoading(false);
                router.push('/utilisateurs');
            },
            (error) => {
                setError(error.i18n ?? error.message ?? 'Unknown error');
                setLoading(false);
            },
        );
    };

    const timestampToDate = (timestamp: number) => {
        const date = new Date(timestamp);
        return date.toLocaleDateString('fr-FR');
    };

    return (
        <div>
            <Topbar />
            <input type="hidden" id="anPageName" name="page" value="themes-articles-creation" />

            {/* Commone header wrapper */}

            <div className="inner-page-setup">
                <SideBar />

                <div className="inner-wrapper">
                    <div className="header">
                        {/* <h2 className="title">{theme ? 'Modifier' : 'Creer'} un theme</h2> */}
                    </div>

                    <div className="table-header button">
                        <div>
                            <button onClick={$updateUser} className="bg_green">
                                Sauvegarder
                            </button>
                            <button onClick={$changePassword} className="bg_green">
                                Changer le mot de passe
                            </button>
                            <button onClick={$cancelSubscription} className="bg_green">
                                Annuler la souscription
                            </button>
                            <button onClick={$deleteUser} className="bg_red">
                                Supprimer le compte
                            </button>
                        </div>
                    </div>

                    <div className="table-wrapper">
                        <div className="table-title bg_blue">
                            <span>Données utilisateurs</span>
                        </div>

                        {/* table content */}
                        <div className="table-content">
                            <div className="row-1 inline-flex">
                                <div className="test">
                                    <div className="single-item mr-30">
                                        <label className="small_title" htmlFor="">
                                            Email
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="type your mail"
                                            // value={title}
                                            defaultValue={user ? user.email : ''}
                                            onChange={(event) => setUser({ ...user, email: event.target.value })}
                                        />
                                    </div>
                                    <div className="single-item mr-30">
                                        <label className="small_title" htmlFor="">
                                            Prénom
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="type your first Name"
                                            // value={title}
                                            defaultValue={user ? user.firstName : ''}
                                            onChange={(event) => setUser({ ...user, firstName: event.target.value })}
                                        />
                                    </div>
                                    <div className="single-item mr-30">
                                        <label className="small_title" htmlFor="">
                                            Nom
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="type you last Name"
                                            // value={title}
                                            defaultValue={user ? user.lastName : ''}
                                            onChange={(event) => setUser({ ...user, lastName: event.target.value })}
                                        />
                                    </div>
                                    <div className="single-item mr-30">
                                        <label className="small_title" htmlFor="">
                                            ID Utilisateur
                                        </label>
                                        <input
                                            type="text"
                                            // value={title}
                                            value={user ? user.id : ''}
                                            // onChange={(event) => setUserId(event.target.value)}
                                        />
                                    </div>
                                    <div className="single-item mr-30">
                                        <label className="small_title" htmlFor="">
                                            Numéro de téléphone
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="type the user phone number"
                                            // value={title}
                                            defaultValue={user ? user.telephone : ''}
                                            onChange={(event) => setUser({ ...user, telephone: event.target.value })}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="table-wrapper">
                        <div className="table-title bg_blue">
                            <span>Données de Connexion</span>
                        </div>

                        {/* table content */}
                        <div className="table-content">
                            <div className="row-1 inline-flex">
                                <div className="single-item mr-30">
                                    <label className="small_title" htmlFor="">
                                        Date d&apos;inscription
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Not available"
                                        value={user ? timestampToDate(user.createdAt as any) : ''}
                                        // onChange={(event) => setTitle(event.target.value)}
                                    />
                                </div>
                                <div className="single-item mr-30">
                                    Email confirmé
                                    <input
                                        type="checkbox"
                                        // missing value isMailConfirmed
                                        checked={user ? user.verifiedEmail : false}
                                        onChange={() => setUser({ ...user, verifiedEmail: !user?.verifiedEmail })}
                                    />
                                </div>
                                <div className="single-item mr-30">
                                    Membre
                                    <input type="checkbox" checked={isMember} onChange={() => setIsMember(!isMember)} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="table-wrapper">
                        <div className="table-title bg_blue">
                            <span>Notes</span>
                        </div>

                        {/* table content */}
                        <div className="table-content">
                            <div className="row-1 inline-flex">
                                <div className="single-item mr-30">
                                    <input
                                        type="text"
                                        placeholder="Notes..."
                                        // value={title}
                                        defaultValue={user ? user.note : ''}
                                        onChange={(event) => setUser({ ...user, note: event.target.value })}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    {userHasNoSubscriptions == false ? (
                        <div className="table-wrapper">
                            <div className="table-title bg_blue">
                                <span>Abonnement</span>
                            </div>

                            {/* table content */}
                            <div className="table-content">
                                <div className="row-1 inline-flex">
                                    <div className="test">
                                        <div className="single-item mr-30">
                                            <label className="small_title" htmlFor="">
                                                Prix
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="type the user subscription price"
                                                // value={title}
                                                onChange={(event) => setSubscriptionPrice(event.target.value)}
                                            />
                                        </div>
                                        <div className="single-item mr-30">
                                            <label className="small_title" htmlFor="">
                                                Type d&apos;abonnement
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="type the user subscription type"
                                                // value={title}
                                                onChange={(event) => setSubscriptionType(event.target.value)}
                                            />
                                        </div>
                                        <div className="single-item mr-30">
                                            <label className="small_title" htmlFor="">
                                                Début
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="type the user subscription start date"
                                                // value={title}
                                                onChange={(event) => setSubscriptionStartDate(event.target.value)}
                                            />
                                        </div>
                                        <div className="single-item mr-30">
                                            <label className="small_title" htmlFor="">
                                                Fin
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="type the user subscription end date"
                                                // value={title}
                                                onChange={(event) => setSubscriptionEndDate(event.target.value)}
                                            />
                                        </div>
                                        <div className="single-item mr-30">
                                            <label className="small_title" htmlFor="">
                                                Type de transaction
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="type the user subscription transaction type"
                                                // value={title}
                                                onChange={(event) => setSubscriptionTransactionType(event.target.value)}
                                            />
                                        </div>
                                        <div className="single-item mr-30">
                                            <label className="small_title" htmlFor="">
                                                Transaction Id
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="type the user subscription transaction id"
                                                // value={title}
                                                onChange={(event) => setSubscriptionTransactionId(event.target.value)}
                                            />
                                        </div>
                                        <div className="single-item mr-30">
                                            Renouvellement
                                            <input
                                                type="checkbox"
                                                checked={subscriptionRenewal}
                                                onChange={() => setSubscriptionRenewal(!subscriptionRenewal)}
                                            />
                                        </div>
                                        <div className="single-item mr-30">
                                            Actif
                                            <input
                                                type="checkbox"
                                                checked={subscriptionIsActive}
                                                onChange={() => setSubscriptionisAcrtive(!subscriptionIsActive)}
                                            />
                                        </div>
                                        <div className="single-item mr-30">
                                            <br></br>
                                            <button>Modifier la transaction</button>
                                        </div>
                                        <div className="single-item mr-30">
                                            <label className="small_title" htmlFor="">
                                                Date de résiliation
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="type the user subscription end date"
                                                // value={title}
                                                onChange={(event) => setSubscriptionResiliationDate(event.target.value)}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <p>L&apos;utilisateur n&apos;a pas d&apos;abonnement !</p>
                    )}
                </div>
            </div>
        </div>
    );
}
