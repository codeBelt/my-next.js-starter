import React from 'react';
import { Layout } from '../../components/shared/Layout';
import { NextPage } from 'next';
import { AboutPage } from '../../components/pages/about-page/AboutPage';

interface IProps {}

const AboutRoute: NextPage<IProps> = (props) => {
  return (
    <Layout title="About">
      <AboutPage />
    </Layout>
  );
};

export default AboutRoute;
