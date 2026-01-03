# Server (Postgres + Prisma) for UI Clone

Quick start:

1. Copy `.env.example` to `.env` (defaults to SQLite at `prisma/dev.db`).
2. Install dependencies and generate Prisma client:

```powershell
cd server
npm install
npm run prisma:generate
npm run prisma:migrate
npm run prisma:seed
npm run dev
```

> Optional: if you prefer Postgres, update `prisma/schema.prisma` provider/url and use `docker-compose up -d` to start the container.

The API will be available at `http://localhost:4000/api/products`.
