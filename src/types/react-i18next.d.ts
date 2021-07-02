import 'react-i18next';
import CommonText from '../../public/static/locales/en/CommonText.json';
import IndexPage from '../../public/static/locales/en/IndexPage.json';
import AboutPage from '../../public/static/locales/en/AboutPage.json';

declare module 'react-i18next' {
  interface CustomTypeOptions {
    defaultNS: 'CommonText';
    resources: {
      CommonText: typeof CommonText;
      IndexPage: typeof IndexPage;
      AboutPage: typeof AboutPage;
    };
  }

  export type AppI18nNamespaces = keyof CustomTypeOptions['resources'] & string;
}

