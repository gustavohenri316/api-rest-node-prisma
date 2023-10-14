// controllers/comment-controller/create-comment.ts

import { Request, Response } from "express";
import { createComment } from "../../services/comments-service/create-comments-service";

export async function CreateCommentController(req: Request, res: Response) {
  try {
    const { userId, ideaId, description } = req.body;

    if (!userId || !ideaId || !description) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const comment = await createComment(userId, ideaId, description);

    return res.status(201).json(comment);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}
