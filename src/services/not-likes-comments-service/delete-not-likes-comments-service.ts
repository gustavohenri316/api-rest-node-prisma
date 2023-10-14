// services/did-not-likes-comment-service/delete-did-not-likes-comment.ts

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function deleteDidNotLikesComment(didNotLikesCommentId: string) {
  const deletedDidNotLikesComment = await prisma.didNotLikesComments.delete({
    where: {
      id: didNotLikesCommentId,
    },
  });

  return deletedDidNotLikesComment;
}
