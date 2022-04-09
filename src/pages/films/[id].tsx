import React from 'react';
import { GetStaticProps, GetStaticPaths, NextPage } from 'next';
import { MainLayout } from '../../components/shared/main-layout/MainLayout';
import { IFilm } from '../../domains/films/films.constants';
import { getFilm, getFilms } from '../../domains/films/films.services';
import { FilmPage } from '../../components/pages/film-page/FilmPage';

interface IProps {
  film?: IFilm;
  errors?: string;
}

const FilmRoute: NextPage<IProps> = (props) => {
  return (
    <MainLayout title={`${props.film ? props.film.title : 'Film Detail'} | Next.js + TypeScript Example`}>
      <FilmPage
        film={props.film}
        errors={props.errors}
      />
    </MainLayout>
  );
};

/**
 * ts-prune-ignore-next
 */
export const getStaticPaths: GetStaticPaths = async () => {
  const films = await getFilms();
  const paths = films.map((film) => ({
    params: { id: film.episode_id.toString() },
  }));

  return { paths, fallback: false };
};

/**
 * ts-prune-ignore-next
 */
export const getStaticProps: GetStaticProps = async (props) => {
  try {
    const film = await getFilm(props.params?.id as string);

    return { props: { film } };
  } catch (err: any) {
    return { props: { errors: err.message } };
  }
};

// ts-prune-ignore-next
export default FilmRoute;
