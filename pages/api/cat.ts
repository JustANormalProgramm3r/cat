// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

const catsDir = "test";

function randomIntFromInterval(min: number, max: number) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}

type Data = {
  path: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
	res.status(400).json({ path: `/cats/${randomIntFromInterval(1,2023)}.png` });
}
