import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const filepath = path.resolve(__dirname, '../../../static/access.txt');

  let content = '';
  if (fs.existsSync(filepath)) {
    const buff = fs.readFileSync(filepath);
    content = buff.toString();
  }

  res.status(200).send(content);
}
