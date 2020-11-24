import React from 'react';
import Link from 'next/link';
import { IFilm } from '../../../../../domains/films/films.constants';
import { Routes, RoutesDynamicKey } from '../../../../../constants/Routes';

interface IProps {
  film: IFilm;
}

export const ListItem: React.FC<IProps> = (props) => {
  return (
    <Link href={Routes.Films_FilmId.replace(RoutesDynamicKey.FilmId, props.film.episode_id)}>
      <a>
        {props.film.episode_id}: {props.film.title}
      </a>
    </Link>
  );
};
