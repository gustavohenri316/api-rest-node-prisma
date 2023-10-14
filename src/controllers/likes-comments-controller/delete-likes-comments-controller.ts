import { Request, Response } from "express";
import { deleteLikesComment } from "../../services/likes-comments-service/delete-likes-comments-service";

export async function DeleteLikesCommentController(
  req: Request,
  res: Response
) {
  try {
    const likesCommentId = req.params.id;

    if (!likesCommentId) {
      return res.status(400).json({ message: "Missing likesCommentId" });
    }

    const deletedLikesComment = await deleteLikesComment(likesCommentId);

    return res.status(200).json(deletedLikesComment);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}
