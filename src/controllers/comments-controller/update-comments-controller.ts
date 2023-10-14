import { Request, Response } from "express";
import { updateComment } from "../../services/comments-service/update-comments-service";

export async function UpdateCommentController(req: Request, res: Response) {
  try {
    const commentId = req.params.id;
    const { description } = req.body;

    if (!commentId || !description) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const updatedComment = await updateComment(commentId, description);

    if (!updatedComment) {
      return res.status(404).json({ message: "Comment not found" });
    }

    return res.status(200).json(updatedComment);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}
