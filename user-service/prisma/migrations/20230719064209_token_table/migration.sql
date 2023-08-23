-- CreateTable
CREATE TABLE "token" (
    "id" UUID NOT NULL,
    "accessToken" VARCHAR(200) NOT NULL,
    "refreshToken" VARCHAR(200) NOT NULL,
    "created_at" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(0) NOT NULL,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "token_pkey" PRIMARY KEY ("id")
);
