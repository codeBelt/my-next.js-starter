import { IFilm } from './films.constants';
import axios from 'axios';

export const getFilms = async (): Promise<IFilm[]> => {
  const response = await axios.get('https://swapi.dev/api/films');

  return response.data.results;
};

export const getFilm = async (id: string): Promise<IFilm[]> => {
  const response = await axios.get(`https://swapi.dev/api/films/${id}`);

  return response.data;
};
