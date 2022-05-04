// import { PaylineWidget } from 'react-payline';

export default function PaymentWidget({
    token,
    onSuccess,
    onError,
}: {
    token: string;
    onSuccess: () => void;
    onError: () => void;
}) {
    return (
        <></>
        // <PaylineWidget
        //     token={token}
        //     template="column"
        //     embeddedRedirectionAllowed={false}
        //     // onFinalStateHasBeenReached={({ state }: { state: string }) => {
        //     //     if (state === 'PAYMENT_SUCCESS') {
        //     //         onSuccess();
        //     //         return true;
        //     //     } else {
        //     //         onError();
        //     //         return false;
        //     //     }
        //     // }}
        // />
    );
}
