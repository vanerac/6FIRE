// @ts-ignore
import cookieCutter from 'cookie-cutter';
import {ApiClient} from '../services';

export default function apiClient() {
    // get token from cookies
    const token = cookieCutter.get('myCookieName');
    return new ApiClient({
        TOKEN: token,
    });
}
