import express from 'express';
import dotenv from 'dotenv';
import productsRouter from './routes/products';
import prisma from './prismaClient';

dotenv.config();

const app = express();
app.use(express.json());

app.use('/api/products', productsRouter);

app.get('/health', async (req, res) => {
  try {
    await prisma.$queryRaw`SELECT 1`;
    res.json({ ok: true });
  } catch (e) {
    res.status(500).json({ ok: false, error: String(e) });
  }
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
