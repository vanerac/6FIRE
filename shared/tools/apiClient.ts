import Cookies from 'universal-cookie';
import {ApiClient} from "../services";

export default function getApiClient(host: string = process.env.NEXT_PUBLIC_API_ROUTE) {
    const cookies = new Cookies();
    cookies.get('API_TOKEN');
    return new ApiClient({
        TOKEN: cookies.get('API_TOKEN'),
        BASE: host || 'http://localhost:3333/api'
    });
}
