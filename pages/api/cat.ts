// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import sizeOf from "image-size";

const catsDir = "test";

function randomIntFromInterval(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

type Data = {
  path: string;
  width: number;
  height: number;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const cat = `${randomIntFromInterval(
    1,
    2023
  )}.png`;
  const dimensions = sizeOf(`./public/cats/${cat}`)
  res.status(200).json({
    path: `https://cute-cat-generator.vercel.app/cats/${cat}`,
    width: dimensions.width,
    height: dimensions.height,
  });
}
