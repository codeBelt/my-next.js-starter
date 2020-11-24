import React from 'react';
import { IFilm } from '../../../domains/films/films.constants';
import { ListDetail } from './list-detail/ListDetail';

interface IProps {
  film?: IFilm;
  errors?: string;
}

export const FilmPage: React.FC<IProps> = (props) => {
  if (props.errors) {
    return (
      <p>
        <span style={{ color: 'red' }}>Error:</span> {props.errors}
      </p>
    );
  }

  return <>{props.film && <ListDetail film={props.film} />}</>;
};
