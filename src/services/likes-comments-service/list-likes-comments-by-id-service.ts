// services/likes-comment-service/list-likes-comments.ts

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function listLikesCommentsByCommentId(commentId: string) {
  const likesComments = await prisma.likesComments.findMany({
    where: {
      commentsId: commentId,
    },
    include: {
      user: true,
    },
  });

  return likesComments;
}
