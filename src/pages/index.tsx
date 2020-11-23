import React from 'react';
import { Layout } from '../components/shared/Layout';
import { IndexPage } from '../components/pages/IndexPage';
import { NextPage } from 'next';

interface IProps {}

const IndexRoute: NextPage<IProps> = (props) => (
  <Layout title="Home | Next.js + TypeScript Example">
    <IndexPage />
  </Layout>
);

export default IndexRoute;
