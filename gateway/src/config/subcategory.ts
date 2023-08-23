import { registerAs } from '@nestjs/config';

declare interface CategoryServiceOptions {
  host: string;
  port: number;
}

export const marketConfig = registerAs<CategoryServiceOptions>('subcategory', (): CategoryServiceOptions => ({
    host: process.env.SUBCATEGORY_HOST,
    port: process.env.SUBCATEGORY_PORT ? parseInt(process.env.CATEGORY_PORT, 10) : undefined,
  }),
);
