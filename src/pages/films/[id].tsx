import React from 'react';
import { GetStaticProps, GetStaticPaths, NextPage } from 'next';
import { Layout } from '../../components/shared/Layout';
import { IFilm } from '../../domains/films/films.constants';
import { getFilm, getFilms } from '../../domains/films/films.services';
import { FilmPage } from '../../components/pages/film-page/FilmPage';

interface IProps {
  film?: IFilm;
  errors?: string;
}

const FilmRoute: NextPage<IProps> = (props) => {
  return (
    <Layout title={`${props.film ? props.film.title : 'Film Detail'} | Next.js + TypeScript Example`}>
      <FilmPage film={props.film} errors={props.errors} />
    </Layout>
  );
};

export default FilmRoute;

export const getStaticPaths: GetStaticPaths = async () => {
  const films = await getFilms();
  const paths = films.map((film) => ({
    params: { id: film.episode_id.toString() },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (props) => {
  try {
    const film = await getFilm(props.params?.id as string);

    return { props: { film } };
  } catch (err) {
    return { props: { errors: err.message } };
  }
};

// function Blog({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
// }
