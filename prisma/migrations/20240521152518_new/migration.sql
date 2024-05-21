-- DropForeignKey
ALTER TABLE "blogs" DROP CONSTRAINT "blogs_postedBy_fkey";

-- DropForeignKey
ALTER TABLE "comments" DROP CONSTRAINT "comments_blogId_fkey";

-- DropForeignKey
ALTER TABLE "comments" DROP CONSTRAINT "comments_createdBy_fkey";

-- AlterTable
ALTER TABLE "comments" ALTER COLUMN "blogId" SET DEFAULT 0;

-- AddForeignKey
ALTER TABLE "blogs" ADD CONSTRAINT "blogs_postedBy_fkey" FOREIGN KEY ("postedBy") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "comments" ADD CONSTRAINT "comments_createdBy_fkey" FOREIGN KEY ("createdBy") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "comments" ADD CONSTRAINT "comments_blogId_fkey" FOREIGN KEY ("blogId") REFERENCES "blogs"("id") ON DELETE CASCADE ON UPDATE CASCADE;
