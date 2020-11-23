import React from 'react';
import { ListItem } from './ListItem';
import { IUser } from '../domains/users/users.constants';

interface IProps {
  users: IUser[];
}

export const List: React.FC<IProps> = (props) => {
  return (
    <ul>
      {props.users.map((user) => (
        <li key={user.id}>
          <ListItem user={user} />
        </li>
      ))}
    </ul>
  );
};
