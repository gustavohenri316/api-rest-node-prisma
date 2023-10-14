import { Request, Response } from "express";
import { deleteUser } from "../../services/user-service/delete-user-service";
import { i18n } from "../../i18n/i18n";

export async function DeleteUserController(req: Request, res: Response) {
  const userId = req.params.id;
  try {
    await deleteUser(userId);
    return res
      .status(200)
      .json({ message: i18n.__("user.deleted.successfully") });
  } catch (err) {
    return res.status(500).json({ error: i18n.__("Internal server error") });
  }
}
