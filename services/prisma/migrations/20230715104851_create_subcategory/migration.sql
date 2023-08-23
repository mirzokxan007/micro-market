-- CreateTable
CREATE TABLE "sub_category" (
    "id" UUID NOT NULL,
    "title" VARCHAR(200) NOT NULL,
    "category_id" UUID NOT NULL,
    "createdAt" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(0),
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "sub_category_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "sub_category" ADD CONSTRAINT "sub_category_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "category"("id") ON DELETE CASCADE ON UPDATE NO ACTION;
