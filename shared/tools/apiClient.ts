import {ApiClient} from '../services';

export default function getApiClient(
    token: string,
    host: string = process.env.NEXT_PUBLIC_API_ROUTE || 'http://api.6fireinvest.com/api',
) {
    return new ApiClient({
        TOKEN: token,
        BASE: host || 'http://api.6fireinvest.com/api',
    });
}
