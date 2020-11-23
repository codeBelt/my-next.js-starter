import React from 'react';
import { GetStaticProps, GetStaticPaths, NextPage } from 'next';
import { Layout } from '../../components/shared/Layout';
import { ListDetail } from '../../components/ListDetail';
import { IUser } from '../../domains/users/users.constants';
import { getUsers } from '../../domains/users/users.services';

interface IProps {
  user?: IUser;
  errors?: string;
}

const StaticPropsDetail: NextPage<IProps> = (props) => {
  console.log(`props`, props);
  if (props.errors) {
    return (
      <Layout title="Error | Next.js + TypeScript Example">
        <p>
          <span style={{ color: 'red' }}>Error:</span> {props.errors}
        </p>
      </Layout>
    );
  }

  return (
    <Layout title={`${props.user ? props.user.name : 'User Detail'} | Next.js + TypeScript Example`}>
      {props.user && <ListDetail user={props.user} />}
    </Layout>
  );
};

export default StaticPropsDetail;

export const getStaticPaths: GetStaticPaths = async () => {
  const users = await getUsers();

  const paths = users.map((user) => ({
    params: { id: user.id.toString() },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const users = await getUsers();
    const id = params?.id;
    const user = users.find((data) => data.id === id);

    return { props: { user } };
  } catch (err) {
    return { props: { errors: err.message } };
  }
};

// function Blog({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
// }
