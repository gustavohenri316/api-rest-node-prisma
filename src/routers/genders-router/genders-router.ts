import { Router } from "express";
import { CreateGenderController } from "../../controllers/genders-controller/create-genders-controller";
import { UpdateGenderController } from "../../controllers/genders-controller/update-genders-controller";
import { ReaderGendersController } from "../../controllers/genders-controller/reader-genders-controller";
import { GetGenderByIdController } from "../../controllers/genders-controller/findById-genders-controller";
import { DeleteGenderController } from "../../controllers/genders-controller/delete-genders-controller";

const genderRouter = Router();

genderRouter.post("/genders", CreateGenderController);
genderRouter.put("/genders/:genderId", UpdateGenderController);
genderRouter.get("/genders", ReaderGendersController);
genderRouter.get("/genders/:genderId", GetGenderByIdController);
genderRouter.delete("/genders/:genderId", DeleteGenderController);

export default genderRouter;
