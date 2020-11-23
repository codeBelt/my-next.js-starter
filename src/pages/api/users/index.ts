import { NextApiRequest, NextApiResponse } from 'next';
import { IUser } from '../../../domains/users/users.constants';

type IResponseData = {
  users: IUser[];
};

export default (req: NextApiRequest, res: NextApiResponse<IResponseData>) => {
  const sampleUserData: IUser[] = [
    { id: '101', name: 'Alice' },
    { id: '102', name: 'Bob' },
    { id: '103', name: 'Caroline' },
    { id: '104', name: 'Dave' },
  ];

  res.status(200).json({ users: sampleUserData });
};
