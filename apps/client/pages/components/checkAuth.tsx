import { useRouter } from 'next/router';
import Cookies from 'universal-cookie';

function checkAuth(WrappedComponent: any) {
    const cookies = new Cookies();

    return (props: any) => {
        if (typeof window !== 'undefined') {
            const Router = useRouter();
            if (!cookies.get('API_TOKEN')) {
                Router.replace('/');
                return null;
            }
            return <WrappedComponent {...props} />;
        }
        return null;
    };
}

export default checkAuth;
