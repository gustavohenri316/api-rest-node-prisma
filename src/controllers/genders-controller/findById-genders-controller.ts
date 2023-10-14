import { Request, Response } from "express";
import { getGenderById } from "../../services/genders-service/findById-genders-service";
import { i18n } from "../../i18n/i18n";

export async function GetGenderByIdController(req: Request, res: Response) {
  const genderId = req.params.genderId;

  try {
    const gender = await getGenderById(genderId);
    if (!gender) {
      return res.status(404).json({ error: i18n.__("gender.not.found") });
    }
    return res.status(200).json(gender);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: i18n.__("internal.server.error") });
  }
}
