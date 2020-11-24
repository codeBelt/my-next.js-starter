import React from 'react';
import { ListItem } from './list-item/ListItem';
import { IFilm } from '../../../../domains/films/films.constants';

interface IProps {
  films: IFilm[];
}

export const List: React.FC<IProps> = (props) => {
  return (
    <ul>
      {props.films.map((film) => (
        <li key={film.episode_id}>
          <ListItem film={film} />
        </li>
      ))}
    </ul>
  );
};
