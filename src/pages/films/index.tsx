import React from 'react';
import { GetStaticProps, NextPage } from 'next';
import { Layout } from '../../components/shared/Layout';
import { IFilm } from '../../domains/films/films.constants';
import { getFilms } from '../../domains/films/films.services';
import { FilmPages } from '../../components/pages/films-page/FilmsPage';

interface IProps {
  films: IFilm[];
}

const FilmsRoute: NextPage<IProps> = (props) => {
  return (
    <Layout title="Film List | Next.js + TypeScript Example">
      <FilmPages films={props.films} />
    </Layout>
  );
};

export default FilmsRoute;

export const getStaticProps: GetStaticProps = async () => {
  // TODO: how to handle errors
  const films: IFilm[] = await getFilms();

  return { props: { films } };
};
