import { Request, Response } from "express";
import { updateGender } from "../../services/genders-service/update-genders-service";
import { i18n } from "../../i18n/i18n";

export async function UpdateGenderController(req: Request, res: Response) {
  const genderId = req.params.genderId;
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ error: i18n.__("name.required") });
  }

  try {
    const updatedGender = await updateGender(genderId, name);

    const response = {
      message: i18n.__("gender.updated.success"),
      updatedGender,
    };

    return res.status(200).json(response);
  } catch (error) {
    console.error(error);

    const errorMessage = i18n.__("internal.server.error");

    return res.status(500).json({ error: errorMessage });
  }
}
