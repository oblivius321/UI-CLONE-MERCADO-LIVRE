import { Router } from 'express';
import prisma from '../prismaClient';

const router = Router();

router.get('/', async (req, res) => {
  const products = await prisma.product.findMany({ include: { images: true, variants: true, reviews: true } });
  res.json(products);
});

router.get('/:id', async (req, res) => {
  const id = Number(req.params.id);
  const product = await prisma.product.findUnique({ where: { id }, include: { images: true, variants: true, reviews: true } });
  if (!product) return res.status(404).json({ error: 'Not found' });
  res.json(product);
});

router.post('/', async (req, res) => {
  // simple dev-only create endpoint
  const { title, description, price } = req.body;
  const product = await prisma.product.create({ data: { title, description, price: Number(price || 0) } });
  res.status(201).json(product);
});

export default router;
