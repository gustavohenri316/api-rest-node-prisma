import { Request, Response } from "express";
import { deleteGender } from "../../services/genders-service/delete-genders-service";
import { i18n } from "../../i18n/i18n";

export async function DeleteGenderController(req: Request, res: Response) {
  const genderId = req.params.genderId;

  try {
    const deletedGender = await deleteGender(genderId);
    return res
      .status(200)
      .json({ message: i18n.__("gender.deleted.successfully"), deletedGender });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: i18n.__("internal.server.error") });
  }
}
