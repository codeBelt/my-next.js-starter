import React from 'react';
import { useTranslation } from 'next-i18next';
import { Header } from 'semantic-ui-react';

interface IProps {}

export const AboutPage: React.FC<IProps> = (props) => {
  const { t } = useTranslation(['CommonText', 'AboutPage']);

  return (
    <>
      <Header as="h1">{t('CommonText:about')}</Header>
      <div>{t('AboutPage:aboutMessage')}</div>
    </>
  );
};
