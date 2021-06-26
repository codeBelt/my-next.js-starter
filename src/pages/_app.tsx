import 'semantic-ui-css/semantic.min.css';
import '../css/main.css';

import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { appWithTranslation, useTranslation } from 'next-i18next';
import { Container, Segment } from 'semantic-ui-react';
import { CurrentDate } from '../components/shared/CurrentDate';
import { Header } from '../components/shared/Header';

const NextApp: React.FC<AppProps> = (props) => {
  const { t } = useTranslation(['common']);

  return (
    <React.Fragment>
      <Head>
        <title>My Next.js Starter</title>
        {/* Use minimum-scale=1 to enable GPU rasterization */}
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no" />
      </Head>
      <div style={{ height: 20 }} />
      <Container>
        <Header />
        <CurrentDate />
        <Segment>
          <props.Component {...props.pageProps} />
        </Segment>
        <footer>
          <hr />
          <span>{t('common:copyright', { year: 2021 })} </span>
        </footer>
        http://www.lingoes.net/en/translator/langcode.htm
      </Container>
    </React.Fragment>
  );
};

// ts-prune-ignore-next
export default appWithTranslation(NextApp);
