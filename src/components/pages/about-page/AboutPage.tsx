import React from 'react';
import { useTranslation } from 'react-i18next';
import { Header } from 'semantic-ui-react';

interface IProps {}

export const AboutPage: React.FC<IProps> = (props) => {
  const { t, ready } = useTranslation(['CommonText', 'AboutPage'], { useSuspense: false });

  if (!ready) {
    return null;
  }

  return (
    <>
      <Header as="h1">{t('CommonText:about')}</Header>
      <div>{t('AboutPage:aboutMessage')}</div>
    </>
  );
};
