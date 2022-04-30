/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseHttpRequest } from './core/BaseHttpRequest';
import type { OpenAPIConfig } from './core/OpenAPI';
import { AxiosHttpRequest } from './core/AxiosHttpRequest';

import { AdminService } from './services/AdminService';
import { AffiliationService } from './services/AffiliationService';
import { ArticleService } from './services/ArticleService';
import { AuthService } from './services/AuthService';
import { BrokerService } from './services/BrokerService';
import { CountryService } from './services/CountryService';
import { CryptoService } from './services/CryptoService';
import { OffersService } from './services/OffersService';
import { PaymentService } from './services/PaymentService';
import { SubscriptionService } from './services/SubscriptionService';
import { ThemesService } from './services/ThemesService';
import { TradersService } from './services/TradersService';
import { UsageService } from './services/UsageService';
import { UserService } from './services/UserService';

type HttpRequestConstructor = new (config: OpenAPIConfig) => BaseHttpRequest;

export class ApiClient {

    public readonly admin: AdminService;
    public readonly affiliation: AffiliationService;
    public readonly article: ArticleService;
    public readonly auth: AuthService;
    public readonly broker: BrokerService;
    public readonly country: CountryService;
    public readonly crypto: CryptoService;
    public readonly offers: OffersService;
    public readonly payment: PaymentService;
    public readonly subscription: SubscriptionService;
    public readonly themes: ThemesService;
    public readonly traders: TradersService;
    public readonly usage: UsageService;
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

        this.admin = new AdminService(this.request);
        this.affiliation = new AffiliationService(this.request);
        this.article = new ArticleService(this.request);
        this.auth = new AuthService(this.request);
        this.broker = new BrokerService(this.request);
        this.country = new CountryService(this.request);
        this.crypto = new CryptoService(this.request);
        this.offers = new OffersService(this.request);
        this.payment = new PaymentService(this.request);
        this.subscription = new SubscriptionService(this.request);
        this.themes = new ThemesService(this.request);
        this.traders = new TradersService(this.request);
        this.usage = new UsageService(this.request);
        this.user = new UserService(this.request);
    }
}
