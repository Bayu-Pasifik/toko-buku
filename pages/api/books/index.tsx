// pages/api/books/index.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../../src/lib/prisma';
import { Buku } from '@/types/BukuType';

type Data = {
  books?: Buku[];
  error?: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'GET') {
    try {
      const books = await prisma.book.findMany();
      res.status(200).json({ books  } as Data);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch books' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
