import React from 'react';
import Link from 'next/link';
import { IFilm } from '../../../domains/films/films.constants';
import { List } from './list/List';
import { Routes } from '../../../constants/Routes';

interface IProps {
  films: IFilm[];
}

export const FilmPages: React.FC<IProps> = (props) => {
  return (
    <div>
      <h1>Films List</h1>
      <p>
        Example fetching data from inside <code>getStaticProps()</code>.
      </p>
      <p>You are currently on: /films</p>
      <List films={props.films} />
      <p>
        <Link href={Routes.Index}>
          <a>Go home</a>
        </Link>
      </p>
    </div>
  );
};
