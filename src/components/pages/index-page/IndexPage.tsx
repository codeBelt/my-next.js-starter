import React from 'react';
import { useTranslation } from 'next-i18next';
import { Header } from 'semantic-ui-react';

interface IProps {}

export const IndexPage: React.FC<IProps> = (props) => {
  const { t } = useTranslation(['common', 'index']);

  return (
    <div>
      <Header as="h1">{t('common:home')}</Header>
      <div>{t('index:welcomeMessage')}</div>
    </div>
  );
};
