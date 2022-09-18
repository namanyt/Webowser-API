import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  needToUpdate: boolean;
  version?: string;
}

const version = "1.0.2"

export default function handle(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.query.version != version) {
    res.status(200).json({ needToUpdate: true, version: version });
  } else {
    res.status(200).json({ needToUpdate: false });
  }
}