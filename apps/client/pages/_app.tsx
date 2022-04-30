import type { AppProps } from 'next/app';
import '../css/register-web.css';
import '../css/styleguide.css';
import '../css/globals.css';
import '../css/homepage.css';
import '../css/connexion.css';
import '../css/homepage-1.css';
import '../css/articles-details.css';
import '../css/articles-details-entreprise.css';
import '../css/trading.css';
import '../css/prices-page.css';
import '../css/trading-formations.css';
import '../css/trading-forex.css';
import '../css/bot-trading.css';
import '../css/bot-trading-traders.css';
import '../css/crypto-wallet.css';
import '../css/nos-trades.css';
import '../css/header.css';
import '../css/footer.css';

import Head from 'next/head';

import { CookiesProvider } from 'react-cookie';

// import Cookies from 'universal-cookie';

function MyApp({ Component, pageProps }: AppProps) {
    // set a cookie to avoid the user to be redirected to the login page in developpement mode
    // const [$cookies, setCookies] = useCookies(['API_TOKEN']);
    // setCookies('API_TOKEN', 'OK', { path: '/' });

    return (
        <>
            <Head>
                <link rel="shortcut icon" href="/logo-single.png" />
            </Head>
            <CookiesProvider>
                <Component {...pageProps} />
            </CookiesProvider>
        </>
    );
}

export default MyApp;
