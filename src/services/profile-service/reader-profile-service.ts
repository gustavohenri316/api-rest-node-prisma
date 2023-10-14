import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function ReaderProfiles(page: number, itemsPerPage: number) {
  const totalCount = await prisma.profile.count();
  const profiles = await prisma.profile.findMany({
    skip: (page - 1) * itemsPerPage,
    take: itemsPerPage,
  });

  return { totalCount, currentPage: page, itemsPerPage, profiles };
}
