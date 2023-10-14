import { Request, Response } from "express";
import { addProfileToUser } from "../../services/profile-service/create-profile-service";
import { i18n } from "../../i18n/i18n";

export async function CreateProfileController(req: Request, res: Response) {
  const { id } = req.params;
  const profileData = req.body;

  try {
    const profile = await addProfileToUser(id, profileData);
    res
      .status(201)
      .json({ message: i18n.__("profile.created.successfully"), profile });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: i18n.__("internal.server.error") });
  }
}
