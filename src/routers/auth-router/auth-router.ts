import { Router } from "express";
import { LoginUserController } from "../../controllers/auth-controller/auth-controller";

const routerAuth = Router();

routerAuth.post("/auth", LoginUserController);

export default routerAuth;
