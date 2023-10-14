import { Router } from "express";
import { CreateProfileController } from "../../controllers/profile-controller/create-profile-controller";
import { UpdateProfileController } from "../../controllers/profile-controller/update-profile-controller";
import { DeleteProfileController } from "../../controllers/profile-controller/delete-profile-controller";
import { FindByIdProfileController } from "../../controllers/profile-controller/findById-profile-controller";
import { ReaderProfilesController } from "../../controllers/profile-controller/reader-profile-controller";

const profileRouter = Router();

profileRouter.post("/user/:id/profile", CreateProfileController);
profileRouter.patch("/user/:userId/profile", UpdateProfileController);
profileRouter.delete("/profile/:profileId", DeleteProfileController);
profileRouter.get("/profile/:id", FindByIdProfileController);
profileRouter.get("/profiles", ReaderProfilesController);

export default profileRouter;
