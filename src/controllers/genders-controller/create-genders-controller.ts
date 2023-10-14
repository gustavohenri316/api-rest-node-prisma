import { Request, Response } from "express";
import { createGender } from "../../services/genders-service/create-genders-service";
import { i18n } from "../../i18n/i18n";

export async function CreateGenderController(req: Request, res: Response) {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ error: i18n.__("name.required") });
  }

  try {
    const newGender = await createGender(name);
    return res
      .status(201)
      .json({ message: i18n.__("gender.created.successfully"), newGender });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: i18n.__("internal.server.error") });
  }
}
