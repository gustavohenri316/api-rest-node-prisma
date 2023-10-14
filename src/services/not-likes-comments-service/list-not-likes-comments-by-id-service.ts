import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function listDidNotLikesComments(commentId: string) {
  const didNotLikesComments = await prisma.didNotLikesComments.findMany({
    where: {
      commentsId: commentId,
    },
    include: {
      user: true,
    },
  });

  return didNotLikesComments;
}
