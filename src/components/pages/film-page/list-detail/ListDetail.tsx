import React from 'react';
import { IFilm } from '../../../../domains/films/films.constants';

interface IProps {
  film: IFilm;
}

export const ListDetail: React.FC<IProps> = (props) => {
  return (
    <div>
      <h1>Title {props.film.title}</h1>
      <p>ID: {props.film.episode_id}</p>
    </div>
  );
};
