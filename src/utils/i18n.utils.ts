import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { AppI18nNamespaces } from 'react-i18next';

export const typedServerSideTranslations = (locale: string, keys: AppI18nNamespaces[]) => {
  return serverSideTranslations(locale as string, keys);
};
