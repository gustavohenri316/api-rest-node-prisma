import { Request, Response } from "express";
import { createUser } from "../../services/user-service/create-user-service";
import { i18n } from "../../i18n/i18n";

export async function CreateUserController(req: Request, res: Response) {
  const { email, username, password } = req.body;
  let roleId = null;

  if (req.body.roleId) {
    roleId = req.body.roleId;
  }

  const result = await createUser({
    email,
    username,
    password,
    roleId,
  });

  if (result.status === 201) {
    return res.status(result.status).json({
      status: result.status,
      message: i18n.__("user.created.successfully"),
    });
  } else {
    return res.status(result.status).json({ error: result.message });
  }
}
