/*
  Warnings:

  - Added the required column `abilityScores` to the `Character` table without a default value. This is not possible if the table is not empty.
  - Added the required column `actions` to the `Character` table without a default value. This is not possible if the table is not empty.
  - Added the required column `class` to the `Character` table without a default value. This is not possible if the table is not empty.
  - Added the required column `initiative` to the `Character` table without a default value. This is not possible if the table is not empty.
  - Added the required column `inventory` to the `Character` table without a default value. This is not possible if the table is not empty.
  - Added the required column `race` to the `Character` table without a default value. This is not possible if the table is not empty.
  - Added the required column `skills` to the `Character` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Character" ADD COLUMN     "abilityScores" JSONB NOT NULL,
ADD COLUMN     "actions" JSONB NOT NULL,
ADD COLUMN     "class" TEXT NOT NULL,
ADD COLUMN     "initiative" TEXT NOT NULL,
ADD COLUMN     "inventory" JSONB NOT NULL,
ADD COLUMN     "notebook" TEXT[],
ADD COLUMN     "race" TEXT NOT NULL,
ADD COLUMN     "skills" JSONB NOT NULL;
