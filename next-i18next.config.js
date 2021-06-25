const path = require('path');

module.exports = {
  i18n: {
    locales: ['en', 'nl', 'no', 'es'],
    defaultLocale: 'en',
    localePath: path.resolve('./public/static/locales'),
  },
};
