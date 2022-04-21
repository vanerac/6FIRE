import { ApiClient } from '../../../shared/services/index';

const client = new ApiClient();

client.auth
    .login({
        email: 'NRvZD@VFfIGotdsOlLAoYH.jsn',
        password: 'adipisicing enim do nisi',
    })
    .then(console.log);
