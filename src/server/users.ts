import { prisma } from "@/server/db";

export const getUsers = async () => {
  return await prisma.user.findMany();
};
