-- DropForeignKey
ALTER TABLE "blogs" DROP CONSTRAINT "blogs_categoryId_fkey";

-- AlterTable
ALTER TABLE "blogs" DROP COLUMN "categoryId";

-- DropTable
DROP TABLE "categories";

