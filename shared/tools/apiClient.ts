import { ApiClient } from '../services';

export default function getApiClient(
    token: string,
    host: string = process.env.NEXT_PUBLIC_API_ROUTE || 'http://localhost:3333/api',
) {
    console.log(token);
    return new ApiClient({
        TOKEN: token,
        BASE: host || 'http://localhost:3333/api',
    });
}
