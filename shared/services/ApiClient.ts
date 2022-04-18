/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseHttpRequest } from './core/BaseHttpRequest';
import type { OpenAPIConfig } from './core/OpenAPI';
import { AxiosHttpRequest } from './core/AxiosHttpRequest';

import { ArticleService } from './services/ArticleService';
import { AuthService } from './services/AuthService';
import { CryptoService } from './services/CryptoService';
import { SubscriptionService } from './services/SubscriptionService';
import { ThemesService } from './services/ThemesService';
import { TradersService } from './services/TradersService';
import { UserService } from './services/UserService';

type HttpRequestConstructor = new (config: OpenAPIConfig) => BaseHttpRequest;

export class ApiClient {

    public readonly article: ArticleService;
    public readonly auth: AuthService;
    public readonly crypto: CryptoService;
    public readonly subscription: SubscriptionService;
    public readonly themes: ThemesService;
    public readonly traders: TradersService;
    public readonly user: UserService;

    public readonly request: BaseHttpRequest;

    constructor(config?: Partial<OpenAPIConfig>, HttpRequest: HttpRequestConstructor = AxiosHttpRequest) {
        this.request = new HttpRequest({
            BASE: config?.BASE ?? 'http://localhost:3333/api',
            VERSION: config?.VERSION ?? '3.0.0',
            WITH_CREDENTIALS: config?.WITH_CREDENTIALS ?? false,
            CREDENTIALS: config?.CREDENTIALS ?? 'include',
            TOKEN: config?.TOKEN,
            USERNAME: config?.USERNAME,
            PASSWORD: config?.PASSWORD,
            HEADERS: config?.HEADERS,
            ENCODE_PATH: config?.ENCODE_PATH,
        });

        this.article = new ArticleService(this.request);
        this.auth = new AuthService(this.request);
        this.crypto = new CryptoService(this.request);
        this.subscription = new SubscriptionService(this.request);
        this.themes = new ThemesService(this.request);
        this.traders = new TradersService(this.request);
        this.user = new UserService(this.request);
    }
}
