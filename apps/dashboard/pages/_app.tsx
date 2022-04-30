// abonnement-code-gratuit.css
// articles-creer-un-article.css
// parametres.css
// abonnement-code-promo-creer.css
// articles-historique-articles.css
// pays.css
// abonnement-code-promo.css
// bot-trading.css
// styleguide.css
// abonnement-creer-un-abonn ement-periode-dessai.css
// broker-creer-un-broker.css
// themes-articles-creation.css
// abonnement-creer-un-abonnement.css
// broker.css
// themes-articles.css
// abonnement-essai-gratuit-creer-essai-gratuit.css
// crypto-wallet.css
// trading-crypto.css
// abonnement-essai-gratuit.css
// details-utilisateurs.css
// ui-inventory.css
// abonnement-gestion-abonnements.css
// globals.css
// utilisateurs.css
// articles-creer-un-article-1.css
// home.css
import '../styles/globals.css';
import '../styles/home.css';
import '../styles/abonnement-code-gratuit.css';
import '../styles/articles-creer-un-article.css';
import '../styles/parametres.css';
import '../styles/abonnement-code-promo-creer.css';
import '../styles/articles-historique-articles.css';
import '../styles/pays.css';
import '../styles/abonnement-code-promo.css';
import '../styles/bot-trading.css';
import '../styles/styleguide.css';
import '../styles/abonnement-creer-un-abonnement-periode-dessai.css';
import '../styles/broker-creer-un-broker.css';
import '../styles/themes-articles-creation.css';
import '../styles/abonnement-creer-un-abonnement.css';
import '../styles/broker.css';
import '../styles/themes-articles.css';
import '../styles/abonnement-essai-gratuit-creer-essai-gratuit.css';
import '../styles/crypto-wallet.css';
import '../styles/trading-crypto.css';
import '../styles/abonnement-essai-gratuit.css';
import '../styles/details-utilisateurs.css';
import '../styles/ui-inventory.css';
import '../styles/abonnement-gestion-abonnements.css';
import '../styles/utilisateurs.css';
import '../styles/articles-creer-un-article-1.css';
// New
import '../styles/topbar.css';
import '../styles/sidebarNew.css';

// SASS Variables are in here
import type { AppProps } from 'next/app';
import { CookiesProvider } from 'react-cookie';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <CookiesProvider>
            <Component {...pageProps} />;
        </CookiesProvider>
    );
}

export default MyApp;
