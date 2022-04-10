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
import '../css/SideBar.css';
import '../css/prices-page.css';
import '../css/trading-formations.css';
import '../css/trading-forex.css';
import '../css/bot-trading.css';
import '../css/bot-trading-traders.css';
import '../css/crypto-wallet.css';
import '../css/nos-trades.css';

function MyApp({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />;
}

export default MyApp;
