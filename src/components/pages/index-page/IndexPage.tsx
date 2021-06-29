import React from 'react';
import { useTranslation } from 'react-i18next';
import { Header } from 'semantic-ui-react';

interface IProps {}

export const IndexPage: React.FC<IProps> = (props) => {
  const { t, ready } = useTranslation(['CommonText', 'IndexPage'], { useSuspense: false });

  if (!ready) {
    return null;
  }

  return (
    <div>
      <Header as="h1">{t('CommonText:home')}</Header>
      <p>{t('IndexPage:welcomeMessage')}</p>
      <p>{t('IndexPage:cartItems', { count: 1 })}</p>
      <p>{t('IndexPage:cartItems', { count: 3 })}</p>
      <p>{t('IndexPage:nested.one')}</p>
      <p>{t('IndexPage:nested.two')}</p>
    </div>
  );
};
