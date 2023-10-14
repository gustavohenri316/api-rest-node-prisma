import { Request, Response } from "express";
import { getProfileById } from "../../services/profile-service/findById-profile-service";
import { i18n } from "../../i18n/i18n";

export async function FindByIdProfileController(req: Request, res: Response) {
  const profileId = req.params.id;

  try {
    const profile = await getProfileById(profileId);
    if (!profile) {
      return res.status(404).json({ error: i18n.__("profile.not.found") });
    }
    return res.status(200).json(profile);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: i18n.__("internal.server.error") });
  }
}
