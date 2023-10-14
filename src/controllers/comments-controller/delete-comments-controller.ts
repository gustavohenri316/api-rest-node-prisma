// controllers/comment-controller/delete-comment.ts

import { Request, Response } from "express";
import { deleteComment } from "../../services/comments-service/delete-comments-service";

export async function DeleteCommentController(req: Request, res: Response) {
  try {
    const commentId = req.params.id;

    if (!commentId) {
      return res.status(400).json({ message: "Missing commentId" });
    }

    const deletedComment = await deleteComment(commentId);

    if (!deletedComment) {
      return res.status(404).json({ message: "Comment not found" });
    }

    return res.status(200).json(deletedComment);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}
