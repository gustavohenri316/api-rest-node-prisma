import { Request, Response } from "express";
import { createIdeaPhoto } from "../../services/idea-photo-service/create-idea-photo-service";
import { i18n } from "../../i18n/i18n";

export async function CreateIdeaPhotoController(req: Request, res: Response) {
  try {
    const { photos, ideaId } = req.body;
    const ideaPhoto = await createIdeaPhoto(photos, ideaId);
    return res.status(201).json(ideaPhoto);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: i18n.__("internal.server.error") });
  }
}
