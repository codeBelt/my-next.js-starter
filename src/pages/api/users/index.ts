import { NextApiRequest, NextApiResponse } from 'next';

interface IResponseData {
  users: any[];
}

export default (req: NextApiRequest, res: NextApiResponse<IResponseData>) => {
  const sampleUserData = [
    { id: '101', name: 'Alice' },
    { id: '102', name: 'Bob' },
    { id: '103', name: 'Caroline' },
    { id: '104', name: 'Dave' },
  ];

  res.status(200).json({ users: sampleUserData });
};
