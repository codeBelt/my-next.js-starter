import { IFilm } from './films.constants';
import axios from 'axios';
import environment from 'environment';

export const getFilms = async (): Promise<IFilm[]> => {
  const response = await axios.get(environment.api.films);

  return response.data.results;
};

export const getFilm = async (id: string): Promise<IFilm[]> => {
  const url = environment.api.film.replace(':filmId', id);
  const response = await axios.get(url);

  return response.data;
};
