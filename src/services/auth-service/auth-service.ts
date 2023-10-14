import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { i18n } from "../../i18n/i18n";

const prisma = new PrismaClient();
const secretKey = "yourSecretKey";

export async function loginUser(usernameOrEmail: string, password: string) {
  try {
    const user = await prisma.user.findFirst({
      where: {
        OR: [{ email: usernameOrEmail }, { username: usernameOrEmail }],
      },
    });

    if (!user) {
      return {
        status: 401,
        message: i18n.__("invalid.username.email.or.password"),
      };
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return {
        status: 401,
        message: i18n.__("invalid.username.email.or.password"),
      };
    }

    const token = jwt.sign(
      { userId: user.id, username: user.username },
      secretKey,
      {
        expiresIn: "1h",
      }
    );

    return { status: 200, token, user };
  } catch (error) {
    return {
      status: 500,
      message: i18n.__("internal.server.error"),
    };
  }
}
