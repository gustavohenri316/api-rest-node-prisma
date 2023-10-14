import { Request, Response } from "express";
import { deleteIdea } from "../../services/idea-service/delete-idea-service";
import { i18n } from "../../i18n/i18n";

export async function DeleteIdeaController(req: Request, res: Response) {
  try {
    const ideaId = req.params.id;
    const result = await deleteIdea(ideaId);

    if (result) {
      return res
        .status(200)
        .json({ message: i18n.__("idea.deleted.successfull") });
    } else {
      return res.status(404).json({ error: i18n.__("idea.not.found") });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: i18n.__("internal.server.error") });
  }
}
