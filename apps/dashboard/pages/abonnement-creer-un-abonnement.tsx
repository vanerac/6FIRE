import React, { useEffect, useState } from 'react';
import Topbar from '../components/topbarNew';
import getAPIClient from '@shared/tools/apiClient';
import { Subscription } from '@shared/services';
import router from 'next/router';
import { useCookies } from 'react-cookie';
import SideBar from '../components/sidebarNew';

export default function CreerUnAbonnement() {
    const [cookies] = useCookies(['API_TOKEN']);
    const apiClient = getAPIClient(cookies['API_TOKEN']);

    const [$loading, setLoading] = useState(true);
    const [$error, setError] = useState('');
    const [$subscription, setSubscription] = useState<Subscription>();

    const [subscriptionName, setSubscriptionName] = useState('');
    const [subscriptionPrice, setSubscriptionPrice] = useState('');
    const [subscriptionTime, setSubscriptionTime] = useState('');
    const [subscriptionTimeType, setSubscriptionTimeType] = useState('');
    const [payementPlatform, setPayementPlatform] = useState('');
    const [descriptionLine, setDescriptionLine] = useState('');
    const [isTryingSession, setIsTryingSession] = useState(false);
    const [isHidden, setIsHidden] = useState(false);
    const [isBestSeller, setIsBestSeller] = useState(false);

    const id = 1;
    useEffect(() => {
        if (!cookies['API_TOKEN']) {
            console.log('no token');
            router.replace('/');
            return;
        }

        apiClient.subscription.getSubscriptionById(id).then(
            (res) => {
                setSubscription(res);
                setLoading(false);
            },
            (error) => {
                setError(error.i18n ?? error.message ?? 'Unknown error');
                setLoading(false);
            },
        );
    }, []);

    // submit all data
    const submit = () => {
        // print all data
        console.log(
            subscriptionName,
            subscriptionPrice,
            subscriptionTime,
            subscriptionTimeType,
            payementPlatform,
            descriptionLine,
            isTryingSession,
            isHidden,
            isBestSeller,
        );
    };

    return (
        <>
            <Topbar />
            <SideBar />
        </>
    );
}
