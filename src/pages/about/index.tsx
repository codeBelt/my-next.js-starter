import React from 'react';
import { MainLayout } from '../../components/shared/main-layout/MainLayout';
import { NextPage } from 'next';
import { AboutPage } from '../../components/pages/about-page/AboutPage';

interface IProps {}

const AboutRoute: NextPage<IProps> = (props) => {
  return (
    <MainLayout title="About">
      <AboutPage />
    </MainLayout>
  );
};

export default AboutRoute;
