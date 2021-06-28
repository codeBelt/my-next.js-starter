import React from 'react';
import { MainLayout } from '../../components/shared/main-layout/MainLayout';
import { GetServerSideProps, NextPage } from 'next';
import { AboutPage } from '../../components/pages/about-page/AboutPage';
import { typedServerSideTranslations } from '../../utils/i18n.utils';

interface IProps {}

const AboutRoute: NextPage<IProps> = (props) => {
  return (
    <MainLayout title="About">
      <AboutPage />
    </MainLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => ({
  props: {
    ...(await typedServerSideTranslations(context.locale!, ['AboutPage', 'CommonText'])),
  },
});

// ts-prune-ignore-next
export default AboutRoute;
