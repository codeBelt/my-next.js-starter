import React from 'react';
import { GetStaticProps, GetStaticPaths, NextPage } from 'next';
import { Layout } from '../../components/shared/Layout';
import { ListDetail } from '../../components/ListDetail';
import { IFilm } from '../../domains/films/films.constants';
import { getFilm, getFilms } from '../../domains/films/films.services';

interface IProps {
  film?: IFilm;
  errors?: string;
}

const StaticPropsDetail: NextPage<IProps> = (props) => {
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
    <Layout title={`${props.film ? props.film.title : 'Film Detail'} | Next.js + TypeScript Example`}>
      {props.film && <ListDetail film={props.film} />}
    </Layout>
  );
};

export default StaticPropsDetail;

export const getStaticPaths: GetStaticPaths = async () => {
  const films = await getFilms();
  const paths = films.map((film) => ({
    params: { id: film.episode_id.toString() },
  }));

  // { fallback: false } means other routes should 404.
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
