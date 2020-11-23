import { IUser } from './users.constants';
import axios from 'axios';

export const getUsers = async (): Promise<IUser[]> => {
  const response = await axios.get('http://localhost:3000/api/users');

  return response.data.users;
};
