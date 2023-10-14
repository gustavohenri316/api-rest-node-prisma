import { Request, Response } from "express";
import {
  getProfileByUserId,
  updateProfile,
} from "../../services/profile-service/update-profile-service";
import { i18n } from "../../i18n/i18n";

export async function UpdateProfileController(req: Request, res: Response) {
  const userId = req.params.userId;
  const updatedData = req.body;

  try {
    const existingProfile = await getProfileByUserId(userId);
    if (!existingProfile) {
      return res.status(404).json({ error: i18n.__("profile.not.found") });
    }

    const updatedProfileData: any = {};
    if (updatedData.full_name) {
      updatedProfileData.full_name = updatedData.full_name;
    }
    if (updatedData.avatar_url) {
      updatedProfileData.avatar_url = updatedData.avatar_url;
    }
    if (updatedData.address) {
      updatedProfileData.address = updatedData.address;
    }
    if (updatedData.phone) {
      updatedProfileData.phone = updatedData.phone;
    }
    const updatedProfile = await updateProfile(
      existingProfile.id,
      updatedProfileData
    );

    return res.status(200).json({
      message: i18n.__("profile.updated.successfully"),
      updatedProfile,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: i18n.__("internal.server.error") });
  }
}
