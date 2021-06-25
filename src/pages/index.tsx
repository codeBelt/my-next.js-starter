import React from 'react';
import { MainLayout } from '../components/shared/main-layout/MainLayout';
import { IndexPage } from '../components/pages/index-page/IndexPage';
import { GetServerSideProps, NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

interface IProps {}

const IndexRoute: NextPage<IProps> = (props) => {
  return (
    <MainLayout title="Home | Next.js + TypeScript Example">
      <IndexPage />
    </MainLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => ({
  props: {
    ...(await serverSideTranslations(context.locale!, ['about', 'common'])),
  },
});

// ts-prune-ignore-next
export default IndexRoute;
