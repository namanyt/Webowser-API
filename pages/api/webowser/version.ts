import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  needToUpdate: boolean;
  version?: string;
}

export default function handle(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.query.version != '1.0.1') {
    res.status(200).json({ needToUpdate: true, version: '1.0.1' });
  } else {
    res.status(200).json({ needToUpdate: false });
  }
}