import React from 'react';
import { useTranslation } from 'next-i18next';
import { Header } from 'semantic-ui-react';

interface IProps {}

export const IndexPage: React.FC<IProps> = (props) => {
  const { t } = useTranslation('common');

  return (
    <div>
      <Header as="h1">{t('home')}</Header>
      <div>{t('welcomeMessage')}</div>
    </div>
  );
};
