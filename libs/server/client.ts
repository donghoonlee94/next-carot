import { PrismaClient } from '@prisma/client';

declare global {
    var client: PrismaClient | undefined;
}

// 클라이언트가 여러번 중복 생성되는 이슈가 있음.
const client = global.client || new PrismaClient();

if (process.env.NODE_ENV === "development") global.client = client;

export default client;
