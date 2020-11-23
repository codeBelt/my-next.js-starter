import React from 'react';
import Link from 'next/link';
import { IUser } from '../domains/users/users.constants';

interface IProps {
  user: IUser;
}

export const ListItem: React.FC<IProps> = (props) => (
  <Link href={`/users/${props.user.id}`}>
    <a>
      {props.user.id}: {props.user.name}
    </a>
  </Link>
);
