import type { NextApiRequest, NextApiResponse } from "next";
import { getUsers } from "@/server/users";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const users = await getUsers();
  res.status(200).json({ name: "John Doe", users });
}
