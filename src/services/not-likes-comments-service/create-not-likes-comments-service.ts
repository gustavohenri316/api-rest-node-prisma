import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function createDidNotLikesComment(
  userId: string,
  commentId: string
) {
  const didNotLikesComment = await prisma.didNotLikesComments.create({
    data: {
      userId,
      commentsId: commentId,
    },
  });

  return didNotLikesComment;
}
