import { Router } from "express";
import { CreateUserController } from "../../controllers/user-controller/create-user-controller";
import { UpdateUserController } from "../../controllers/user-controller/update-user-controller";
import { ReaderUsersController } from "../../controllers/user-controller/reader-user-controller";
import { DeleteUserController } from "../../controllers/user-controller/delete-user-controller";
import { FindUserByIdController } from "../../controllers/user-controller/findById-user-controller";

const routerUser = Router();

routerUser.get("/user", ReaderUsersController);
routerUser.post("/user", CreateUserController);
routerUser.patch("/user/:id", UpdateUserController);
routerUser.delete("/user/:id", DeleteUserController);
routerUser.get("/user/:id", FindUserByIdController);

export default routerUser;
