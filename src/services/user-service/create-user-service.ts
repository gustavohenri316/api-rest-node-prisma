import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import { i18n } from "../../i18n/i18n";

const prisma = new PrismaClient();
const saltRounds = 10;

type CreateUserTypes = {
  email: string;
  username: string;
  password: string;
  roleId: string | null;
};

export async function createUser({
  email,
  username,
  password,
  roleId,
}: CreateUserTypes) {
  if (!email || !username || !password) {
    return {
      status: 400,
      message: i18n.__("all.fields.are.required"),
    };
  }

  const existingUser = await prisma.user.findFirst({
    where: {
      OR: [{ email }, { username }],
    },
  });

  if (existingUser) {
    return {
      status: 400,
      message: i18n.__("email.or.username.is.already.in.use"),
    };
  }

  try {
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const createUserInput: any = {
      email,
      password: hashedPassword,
      username,
      roleId: roleId || null,
    };

    const user = await prisma.user.create({
      data: createUserInput,
    });

    return {
      status: 201,
      user,
    };
  } catch (error: unknown) {
    console.error(error);
    return {
      status: 500,
      message: i18n.__("internal.server.error"),
    };
  }
}
