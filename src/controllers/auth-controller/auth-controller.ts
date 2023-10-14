import { Request, Response } from "express";
import { loginUser } from "../../services/auth-service/auth-service";

export async function LoginUserController(req: Request, res: Response) {
  const { usernameOrEmail, password } = req.body;

  const result = await loginUser(usernameOrEmail, password);

  if (result.status === 200) {
    return res.status(result.status).json({ token: result.user?.id });
  } else {
    return res.status(result.status).json({ error: result.message });
  }
}
