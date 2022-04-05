import type { AppProps } from 'next/app';
import '../css/register-web.css';
import '../css/styleguide.css';
import '../css/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />;
}

export default MyApp;
