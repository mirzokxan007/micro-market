import { registerAs } from '@nestjs/config';

declare interface CategoryServiceOptions {
  host: string;
  port: number;
}

export const marketConfig = registerAs<CategoryServiceOptions>('market', (): CategoryServiceOptions => ({
    host: process.env.CATEGORY_HOST,
    port: process.env.CATEGORY_PORT ? parseInt(process.env.CATEGORY_PORT, 10) : undefined,
  }),
);
