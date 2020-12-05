import React from 'react';
import { GetStaticProps, NextPage } from 'next';
import { MainLayout } from '../../components/shared/main-layout/MainLayout';
import { IFilm } from '../../domains/films/films.constants';
import { getFilms } from '../../domains/films/films.services';
import { FilmPages } from '../../components/pages/films-page/FilmsPage';

interface IProps {
  films: IFilm[];
}

const FilmsRoute: NextPage<IProps> = (props) => {
  return (
    <MainLayout title="Film List | Next.js + TypeScript Example">
      <FilmPages films={props.films} />
    </MainLayout>
  );
};

export default FilmsRoute;

export const getStaticProps: GetStaticProps = async () => {
  // TODO: how to handle errors
  const films: IFilm[] = await getFilms();

  return { props: { films } };
};
