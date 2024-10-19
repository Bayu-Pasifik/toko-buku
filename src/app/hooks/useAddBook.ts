// app/hooks/useAddBook.ts
import { useMutation } from '@tanstack/react-query';
import { Buku } from '@/types/BukuType'; // Pastikan path ini sesuai

const addBook = async (bookData: Buku) => {
  const response = await fetch('/api/books', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(bookData),
  });

  if (!response.ok) {
    throw new Error('Failed to add book');
  }

  return response.json(); // Mengembalikan data buku baru
};

export const useAddBook = () => {
  return useMutation<Buku, Error, Buku>({
    mutationFn: addBook,
  });
};
