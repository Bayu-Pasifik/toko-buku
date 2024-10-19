// app/hooks/useBooks.ts
import axios from 'axios';
import { Buku } from '@/types/BukuType';
import { useQuery } from '@tanstack/react-query';

// const fetchBooks = async () => {
//   const response = await axios.get<Buku[]>('/api/books');
//   return response.data; // data langsung diekstrak dari response
// };

async function fetchBooks() : Promise<Buku[]> {
    try {
      const response = await axios.get('/api/books');
      return response.data.books;  
    } catch (error) {
        console.error(error);
        throw error;
    }
  
}

export const useBooks = () => {
  return useQuery<Buku[], Error>({
    queryKey: ['books'],
    queryFn: fetchBooks,
    staleTime: 1000 * 60 * 60 * 24,
  });
};
