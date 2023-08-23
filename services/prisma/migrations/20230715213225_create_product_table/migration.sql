-- CreateTable
CREATE TABLE "product" (
    "id" UUID NOT NULL,
    "title" VARCHAR(200) NOT NULL,
    "description" VARCHAR(200) NOT NULL,
    "price" VARCHAR(200) NOT NULL,
    "status" VARCHAR(10) DEFAULT 'all',
    "subcategory_id" UUID NOT NULL,
    "createdAt" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(0),
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "product_pkey" PRIMARY KEY ("id","subcategory_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "product_title_key" ON "product"("title");

-- AddForeignKey
ALTER TABLE "product" ADD CONSTRAINT "product_subcategory_id_fkey" FOREIGN KEY ("subcategory_id") REFERENCES "sub_category"("id") ON DELETE CASCADE ON UPDATE NO ACTION;
