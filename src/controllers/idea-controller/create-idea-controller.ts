import { Request, Response } from "express";
import { createIdea } from "../../services/idea-service/create-idea-service";
import { i18n } from "../../i18n/i18n";

export async function CreateIdeaController(req: Request, res: Response) {
  const ideaData = req.body;

  try {
    const idea = await createIdea(ideaData);
    return res
      .status(201)
      .json({ message: i18n.__("idea.created.successfully"), idea });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: i18n.__("internal.server.error") });
  }
}
