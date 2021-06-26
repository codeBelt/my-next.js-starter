import 'react-i18next';
import common from '../../public/static/locales/en/common.json';
import index from '../../public/static/locales/en/index.json';
import about from '../../public/static/locales/en/about.json';

declare module 'react-i18next' {
  interface CustomTypeOptions {
    defaultNS: 'common';
    resources: {
      common: typeof common;
      index: typeof index;
      about: typeof about;
    };
  }

  export type AppI18nNamespaces = keyof CustomTypeOptions['resources'] & string;
}

