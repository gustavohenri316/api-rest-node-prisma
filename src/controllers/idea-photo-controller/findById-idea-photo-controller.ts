// controllers/idea-photo-controller/read-idea-photo-by-id.ts

import { Request, Response } from "express";
import { ReaderIdeaPhotoById } from "../../services/idea-photo-service/findById-idea-photo-service";

export async function ReaderIdeaPhotoByIdController(
  req: Request,
  res: Response
) {
  try {
    const ideaPhotoId = String(req.params.id);

    if (!ideaPhotoId) {
      return res.status(400).json({ message: "Invalid Idea Photo ID" });
    }

    const ideaPhoto = await ReaderIdeaPhotoById(String(ideaPhotoId));

    if (!ideaPhoto) {
      return res.status(404).json({ message: "Idea Photo not found" });
    }

    return res.status(200).json(ideaPhoto);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}
