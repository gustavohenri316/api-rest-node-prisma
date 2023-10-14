import { Request, Response } from "express";
import { UpdateIdeaPhoto } from "../../services/idea-photo-service/update-idea-photo-service";
import { i18n } from "../../i18n/i18n";

export async function UpdateIdeaPhotoController(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const updatedData = req.body;

    const ideaPhoto = await UpdateIdeaPhoto(id, updatedData);

    return res.status(200).json(ideaPhoto);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: i18n.__("internal.server.error") });
  }
}
