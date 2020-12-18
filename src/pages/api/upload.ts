import { NextApiRequest, NextApiResponse } from 'next';
import nextConnect from 'next-connect';
import multer from 'multer';
import fs from 'fs';
import path from 'path';

interface IResponseData {
  data: string[];
}
interface NextConnectApiRequest extends NextApiRequest {
  file: Express.Multer.File;
}

const outputFolderName = 'uploads';
const apiRoute = nextConnect();

// const oneMegabyteInBytes = 1000000;
const upload = multer({
  // limits: { fileSize: oneMegabyteInBytes * 2 },
  storage: multer.diskStorage({
    destination: `./public/${outputFolderName}`,
    filename: (req, file, cb) => cb(null, file.originalname),
  }),
});

apiRoute.use(upload.single('theFile'));

apiRoute.post(async (req: NextConnectApiRequest, res: NextApiResponse<IResponseData>) => {
  const dir = path.resolve(`./public/${outputFolderName}`);
  const filenames = fs.readdirSync(dir);
  const images = filenames.map((name) => `/${outputFolderName}/${name}`);

  res.status(200).json({ data: images });
});

export const config = {
  api: {
    bodyParser: false, // Disallow body parsing, consume as stream
  },
};
export default apiRoute;
