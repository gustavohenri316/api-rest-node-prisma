import express from "express";
import cors from "cors";
import * as bodyParser from "body-parser";
import { config } from "dotenv";
import { i18n } from "./i18n/i18n";

import routerUser from "./routers/user-router/user-router";
import routerAuth from "./routers/auth-router/auth-router";
import roleRouter from "./routers/role-router/role-router";
import routerPermissions from "./routers/permissions-router/permissions-router";
import profileRouter from "./routers/profile-router/profile-router";
import genderRouter from "./routers/genders-router/genders-router";
import ideaRouter from "./routers/idea-router/idea-router";
import IdeaPhotoRouter from "./routers/idea-photo-router/idea-photo-router";
import commentsRouter from "./routers/comments-router/comments-router";
import likesCommentsRouter from "./routers/likes-comments-router/likes-comments-router";
import notLikesCommentsRouter from "./routers/not-likes-comments-router/not-likes-comments-router";

const main = async () => {
  config();
  const app = express();
  const PORT = 3333;

  app.use(i18n.init);

  app.use(function (req, res, next) {
    const acceptLanguage = req.headers["accept-language"];
    if (acceptLanguage) {
      i18n.setLocale(req, acceptLanguage);
    } else {
      i18n.setLocale(req, "en");
    }
    next();
  });
  app.use(express.json());
  app.use(cors());
  app.use(bodyParser.json());
  app.use("/api", [
    routerUser,
    routerAuth,
    roleRouter,
    routerPermissions,
    profileRouter,
    genderRouter,
    ideaRouter,
    IdeaPhotoRouter,
    commentsRouter,
    likesCommentsRouter,
    notLikesCommentsRouter,
  ]);

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

main();
