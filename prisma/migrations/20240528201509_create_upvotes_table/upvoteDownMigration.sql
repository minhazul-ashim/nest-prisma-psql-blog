-- DropForeignKey
ALTER TABLE "upvotes" DROP CONSTRAINT "upvotes_blogId_fkey";

-- DropForeignKey
ALTER TABLE "upvotes" DROP CONSTRAINT "upvotes_userId_fkey";

-- DropTable
DROP TABLE "upvotes";

