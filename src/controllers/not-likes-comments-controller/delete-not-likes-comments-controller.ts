import { Request, Response } from "express";
import { deleteDidNotLikesComment } from "../../services/not-likes-comments-service/delete-not-likes-comments-service";

export async function DeleteDidNotLikesCommentController(
  req: Request,
  res: Response
) {
  try {
    const didNotLikesCommentId = req.params.didNotLikesCommentId;

    if (!didNotLikesCommentId) {
      return res.status(400).json({ message: "Missing didNotLikesCommentId" });
    }

    const deletedDidNotLikesComment = await deleteDidNotLikesComment(
      didNotLikesCommentId
    );

    return res.status(200).json(deletedDidNotLikesComment);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}
