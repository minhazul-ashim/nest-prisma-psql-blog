-- CreateTable
CREATE TABLE "subcategories" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "categoryId" INTEGER,

    CONSTRAINT "subcategories_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "subcategories" ADD CONSTRAINT "subcategories_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "categories"("id") ON DELETE SET NULL ON UPDATE SET NULL;
