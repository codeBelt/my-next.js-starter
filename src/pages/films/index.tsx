import React from 'react';
import { GetStaticProps, NextPage } from 'next';
import Link from 'next/link';
import { Layout } from '../../components/shared/Layout';
import { List } from '../../components/List';
import { IFilm } from '../../domains/films/films.constants';
import { getFilms } from '../../domains/films/films.services';

interface IProps {
  films: IFilm[];
}

const WithStaticProps: NextPage<IProps> = (props) => (
  <Layout title="Film List | Next.js + TypeScript Example">
    <h1>Films List</h1>
    <p>
      Example fetching data from inside <code>getStaticProps()</code>.
    </p>
    <p>You are currently on: /films</p>
    <List films={props.films} />
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
  </Layout>
);

export default WithStaticProps;

export const getStaticProps: GetStaticProps = async () => {
  const films: IFilm[] = await getFilms();

  return { props: { films } };
};
