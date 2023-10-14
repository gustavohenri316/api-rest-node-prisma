import { Request, Response } from "express";
import { getUserById } from "../../services/user-service/findById-user-service";
import { i18n } from "../../i18n/i18n";

export async function FindUserByIdController(req: Request, res: Response) {
  const id = req.params.id;

  if (!id) {
    return res.status(400).json({ error: i18n.__("invalid.user.id") });
  }

  const result = await getUserById(id);

  if (result.status === 200) {
    return res.status(result.status).json(result);
  } else {
    return res.status(result.status).json({ error: result.message });
  }
}
