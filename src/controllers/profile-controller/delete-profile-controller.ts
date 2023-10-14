import { Request, Response } from "express";
import { deleteProfile } from "../../services/profile-service/delete-profile-service";
import { i18n } from "../../i18n/i18n";

export async function DeleteProfileController(req: Request, res: Response) {
  const profileId = req.params.profileId;

  try {
    const deletedProfile = await deleteProfile(profileId);
    return res
      .status(200)
      .json({
        message: i18n.__("profile.deleted.successfully"),
        deletedProfile,
      });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: i18n.__("internal.server.error") });
  }
}
