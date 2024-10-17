import { Buku } from "@/types/BukuType";

// app/components/BookList.tsx
const BookList = ({ books }: { books: Buku[] }) => {
  return (
    <ul>
      {books.map((book) => (
        <li key={book.id}>
          <h2>{book.title}</h2>
          <p>{book.author}</p>
          <p>{book.description}</p>
          <p>Price: ${book.price}</p>
          <p>Stock: {book.stock}</p>
        </li>
      ))}
    </ul>
  );
};

export default BookList;
