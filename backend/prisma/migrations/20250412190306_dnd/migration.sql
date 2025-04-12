/*
  Warnings:

  - The primary key for the `Character` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `createdAt` on the `Character` table. All the data in the column will be lost.
  - You are about to drop the column `stats` on the `Character` table. All the data in the column will be lost.
  - The primary key for the `Session` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `state` on the `Session` table. All the data in the column will be lost.
  - Added the required column `ac` to the `Character` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hp` to the `Character` table without a default value. This is not possible if the table is not empty.
  - Added the required column `maxHp` to the `Character` table without a default value. This is not possible if the table is not empty.
  - Added the required column `session_id` to the `Character` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `Character` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dmId` to the `Session` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Character" DROP CONSTRAINT "Character_pkey",
DROP COLUMN "createdAt",
DROP COLUMN "stats",
ADD COLUMN     "ac" INTEGER NOT NULL,
ADD COLUMN     "hp" INTEGER NOT NULL,
ADD COLUMN     "maxHp" INTEGER NOT NULL,
ADD COLUMN     "session_id" TEXT NOT NULL,
ADD COLUMN     "statusEffects" JSONB,
ADD COLUMN     "type" TEXT NOT NULL,
ADD COLUMN     "userId" INTEGER,
ADD COLUMN     "websiteUrl" TEXT,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Character_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Character_id_seq";

-- AlterTable
ALTER TABLE "Session" DROP CONSTRAINT "Session_pkey",
DROP COLUMN "state",
ADD COLUMN     "dmId" TEXT NOT NULL,
ADD COLUMN     "isActive" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "roundCounter" INTEGER NOT NULL DEFAULT 0,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Session_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Session_id_seq";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "isDm" BOOLEAN NOT NULL DEFAULT false;

-- CreateTable
CREATE TABLE "Spell" (
    "id" TEXT NOT NULL,
    "character_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "level" INTEGER NOT NULL,

    CONSTRAINT "Spell_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TurnOrder" (
    "id" TEXT NOT NULL,
    "session_id" TEXT NOT NULL,
    "character_id" TEXT NOT NULL,
    "initiative" INTEGER NOT NULL,
    "turnIndex" INTEGER NOT NULL,
    "isCurrent" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "TurnOrder_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Spell" ADD CONSTRAINT "Spell_character_id_fkey" FOREIGN KEY ("character_id") REFERENCES "Character"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Character" ADD CONSTRAINT "Character_session_id_fkey" FOREIGN KEY ("session_id") REFERENCES "Session"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Character" ADD CONSTRAINT "Character_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TurnOrder" ADD CONSTRAINT "TurnOrder_session_id_fkey" FOREIGN KEY ("session_id") REFERENCES "Session"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TurnOrder" ADD CONSTRAINT "TurnOrder_character_id_fkey" FOREIGN KEY ("character_id") REFERENCES "Character"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
