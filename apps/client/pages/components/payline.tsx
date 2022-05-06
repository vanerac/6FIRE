import React, { useEffect } from 'react';
import { PaylineProvider, PaylineWidget, usePayline } from 'react-payline';

export default function PaymentWrapper({
    token,
    successCb,
    errorCb,
    show,
}: {
    token: string;
    successCb: () => void;
    errorCb: ($message: string) => void;
    show: boolean;
}) {
    const paylineApi = usePayline();

    useEffect(() => {
        if (show) {
            paylineApi?.show();
        } else {
            paylineApi?.hide();
        }
    }, [show, paylineApi]);

    return (
        <PaylineProvider>
            <Payment token={token} successCb={successCb} errorCb={errorCb} />,
        </PaylineProvider>
    );
}

export function Payment({
    token,
    successCb,
    errorCb,
}: {
    token: string;
    successCb: () => void;
    errorCb: ($message: string) => void;
}) {
    useEffect(() => {
        const paylineApi = usePayline();
        console.log('Token', token);
        if (token.length) (paylineApi as any).show();
        else (paylineApi as any).hide();
    }, [token]);

    return (
        <PaylineWidget
            token={token}
            template="lightbox"
            embeddedRedirectionAllowed={true}
            onFinalStateHasBeenReached={
                (({ state }: { state: any }) => {
                    if (state === 'PAYMENT_SUCCESS') {
                        successCb();
                        return true;
                    } else {
                        errorCb(state);
                        return false;
                    }
                }) as any
            }
        />
    );
}
