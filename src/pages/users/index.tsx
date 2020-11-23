import React from 'react';
import { GetStaticProps, NextPage } from 'next';
import Link from 'next/link';
import { Layout } from '../../components/shared/Layout';
import { List } from '../../components/List';
import { IUser } from '../../domains/users/users.constants';
import { getUsers } from '../../domains/users/users.services';

interface IProps {
  users: IUser[];
}

const WithStaticProps: NextPage<IProps> = (props) => (
  <Layout title="Users List | Next.js + TypeScript Example">
    <h1>Users List</h1>
    <p>
      Example fetching data from inside <code>getStaticProps()</code>.
    </p>
    <p>You are currently on: /users</p>
    <List users={props.users} />
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
  </Layout>
);

export default WithStaticProps;

export const getStaticProps: GetStaticProps = async () => {
  const users: IUser[] = await getUsers();

  return { props: { users } };
};
