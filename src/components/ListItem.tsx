import React from 'react';
import Link from 'next/link';
import { IFilm } from '../domains/films/films.constants';

interface IProps {
  film: IFilm;
}

export const ListItem: React.FC<IProps> = (props) => (
  <Link href={`/films/${props.film.episode_id}`}>
    <a>
      {props.film.episode_id}: {props.film.title}
    </a>
  </Link>
);
