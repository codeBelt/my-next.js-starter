import React from 'react';
import { IUser } from '../domains/users/users.constants';

interface IProps {
  user: IUser;
}

export const ListDetail: React.FC<IProps> = (props) => (
  <div>
    <h1>Detail for {props.user.name}</h1>
    <p>ID: {props.user.id}</p>
  </div>
);
