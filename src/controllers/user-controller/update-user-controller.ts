import { Request, Response } from "express";
import { updateUser } from "../../services/user-service/update-user-service";
import { i18n } from "../../i18n/i18n";

export async function UpdateUserController(req: Request, res: Response) {
  const userId = req.params.id;
  const { email, username, roleId, password } = req.body;

  const result = await updateUser({
    userId,
    email,
    username,
    password,
    roleId,
  });

  if (result.status === 200) {
    return res
      .status(result.status)
      .json({ message: i18n.__("user.updated.successfully") });
  } else {
    return res.status(result.status).json({ error: result.message });
  }
}
