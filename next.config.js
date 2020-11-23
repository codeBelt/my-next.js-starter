const withPlugins = require('next-compose-plugins');
const withBundleAnalyzer = require('@next/bundle-analyzer');
const path = require('path');

// https://medium.com/ne-digital/how-to-reduce-next-js-bundle-size-68f7ac70c375
// https://medium.com/ne-digital/build-frontend-performance-monitor-dashboard-using-pagespeed-insights-e807a2caa6cf

module.exports = withPlugins(
  [
    withBundleAnalyzer({
      enabled: process.env.ANALYZE === 'true',
    }),
  ],
  {
    // Override the default .next build dir for GCloud leading period issue
    distDir: 'build',

    webpack: (config) => {
      const envMapper = {
        'parallax-dev': 'development',
        'parallax-staging': 'staging',
        'parallax-alpha': 'production',
      };
      const clientEnv = envMapper[process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID] || 'production';

      // https://blog.usejournal.com/my-awesome-custom-react-environment-variables-setup-8ebb0797d8ac
      config.resolve.alias['environment'] = path.join(__dirname, 'src', 'environments', clientEnv);

      return config;
    },
  }
);
