// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/lib/db";
import { user } from ".prisma/client";

type Data = {
  name: string;
  users: user[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const users = await prisma.user.findMany();
  res.status(200).json({ name: "John Doe", users });
}
