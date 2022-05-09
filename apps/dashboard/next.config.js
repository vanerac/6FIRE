const { withSentryConfig } = require('@sentry/nextjs');
const path = require('path');
/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    eslint: {
        ignoreDuringBuilds: true,
    },
    experimental: {
        externalDir: true,
    },
    env: {
        NEXT_PUBLIC_API_ROUTE: 'https://api.6fireinvest.com/api',
        // NEXT_PUBLIC_API_ROUTE: 'http://localhost:3333/api',
    },
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    cssModules: true,
};
const sentryWebpackPluginOptions = {
    // Additional config options for the Sentry Webpack plugin. Keep in mind that
    // the following options are set automatically, and overriding them is not
    // recommended:
    //   release, url, org, project, authToken, configFile, stripPrefix,
    //   urlPrefix, include, ignore

    silent: true, // Suppresses all logs
    // For all available options, see:
    // https://github.com/getsentry/sentry-webpack-plugin#options.
};

// Make sure adding Sentry options is the last code to run before exporting, to
// ensure that your source maps include changes from all other Webpack plugins
module.exports = withSentryConfig(nextConfig, sentryWebpackPluginOptions);
