/*
  Warnings:

  - You are about to drop the column `did_not_like` on the `comments` table. All the data in the column will be lost.
  - You are about to drop the column `likes` on the `comments` table. All the data in the column will be lost.
  - Added the required column `likesCommentsId` to the `comments` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "likes_comments" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "commentsId" TEXT,
    CONSTRAINT "likes_comments_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "likes_comments_commentsId_fkey" FOREIGN KEY ("commentsId") REFERENCES "comments" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "did_not_like_comments" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "commentsId" TEXT,
    "userId" TEXT NOT NULL,
    CONSTRAINT "did_not_like_comments_commentsId_fkey" FOREIGN KEY ("commentsId") REFERENCES "comments" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "did_not_like_comments_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_comments" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "description" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    "ideaId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "likesCommentsId" TEXT NOT NULL,
    CONSTRAINT "comments_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "comments_ideaId_fkey" FOREIGN KEY ("ideaId") REFERENCES "idea" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_comments" ("created_at", "description", "id", "ideaId", "updated_at", "userId") SELECT "created_at", "description", "id", "ideaId", "updated_at", "userId" FROM "comments";
DROP TABLE "comments";
ALTER TABLE "new_comments" RENAME TO "comments";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
