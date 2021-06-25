import React from 'react';
import { useTranslation } from 'next-i18next';
import { Header } from 'semantic-ui-react';

interface IProps {}

export const AboutPage: React.FC<IProps> = (props) => {
  const { t } = useTranslation();

  return (
    <>
      <Header as="h1">{t('common:about')}</Header>
      <div>{t('about:aboutMessage')}</div>
    </>
  );
};
