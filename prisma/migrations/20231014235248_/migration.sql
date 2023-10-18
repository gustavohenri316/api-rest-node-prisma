/*
  Warnings:

  - You are about to drop the column `address` on the `profiles` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_profiles" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "full_name" TEXT,
    "avatar_url" TEXT,
    "phone" TEXT,
    "gendersId" TEXT,
    "state" TEXT,
    "city" TEXT,
    "neighborhood" TEXT,
    "street" TEXT,
    "number" TEXT,
    "complement" TEXT,
    "birthDate" TEXT,
    "cep" TEXT,
    CONSTRAINT "profiles_gendersId_fkey" FOREIGN KEY ("gendersId") REFERENCES "genders" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_profiles" ("avatar_url", "cep", "city", "complement", "full_name", "gendersId", "id", "neighborhood", "number", "phone", "state", "street") SELECT "avatar_url", "cep", "city", "complement", "full_name", "gendersId", "id", "neighborhood", "number", "phone", "state", "street" FROM "profiles";
DROP TABLE "profiles";
ALTER TABLE "new_profiles" RENAME TO "profiles";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
