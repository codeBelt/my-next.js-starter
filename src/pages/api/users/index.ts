import { NextApiRequest, NextApiResponse } from 'next';
import { sampleUserData } from '../../../utils/sample-data';
import { IUser } from '../../../domains/users/users.constants';

type IResponseData = {
  users: IUser[];
};

export default (req: NextApiRequest, res: NextApiResponse<IResponseData>) => {
  res.json({ users: sampleUserData });
};
