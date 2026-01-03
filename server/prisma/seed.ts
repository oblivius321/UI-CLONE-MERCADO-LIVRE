import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.product.deleteMany();
  await prisma.variant.deleteMany();
  await prisma.image.deleteMany();
  await prisma.review.deleteMany();

  const p1 = await prisma.product.create({
    data: {
      title: 'Árvore Olly Pop 2.1m',
      description: 'Árvore de natal tradicional Olly Pop Premium Coleção Búzios de 2.1m verde',
      price: 99.99,
      images: { create: [{ url: '/images/arvre.jpeg' }] },
      variants: { create: [
        { name: '1.8 m', height: '1.8 m', price: 89.99 },
        { name: '2.1 m', height: '2.1 m', price: 99.99 },
        { name: '2.4 m', height: '2.4 m', price: 109.0 }
      ]},
      reviews: { create: [
        { author: 'João', text: 'Linda, grande e bem cheia. Recomendo.', rating: 5 }
      ]},
      specs: JSON.stringify({
        characteristics: { Marca: 'Olly Pop', Modelo: 'Coleção Búzios', Cor: 'Verde' },
      })
    }
  });

  console.log('Seed finished.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
