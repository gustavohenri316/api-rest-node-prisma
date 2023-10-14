import { Router } from "express";
import { CreateCommentController } from "../../controllers/comments-controller/create-comments-controller";
import { UpdateCommentController } from "../../controllers/comments-controller/update-comments-controller";
import { ReaderCommentsController } from "../../controllers/comments-controller/reader-comments-controller";
import { DeleteCommentController } from "../../controllers/comments-controller/delete-comments-controller";

const commentsRouter = Router();

commentsRouter.post("/comments", CreateCommentController);
commentsRouter.get("/comments", ReaderCommentsController);
commentsRouter.put("/comments/:id", UpdateCommentController);
commentsRouter.delete("/comments/:id", DeleteCommentController);

export default commentsRouter;
