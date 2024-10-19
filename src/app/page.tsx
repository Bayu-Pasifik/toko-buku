// app/home/page.tsx
"use client";
import CardBook from "./components/CardBook";
import { useBooks } from "./hooks/useBooks";

export default function HomePage() {
  const { data: books, error, isLoading } = useBooks();

  if (isLoading) {
    return <div className="text-center mt-10">Loading...</div>;
  }

  if (error) {
    return (
      <div className="text-center mt-10 text-red-500">
        Error: {error.message}
      </div>
    );
  }

  return (
    <div className="p-5">
      <h1 className="text-3xl font-bold text-center mb-10">Toko Baca</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {books?.map((book) => (
          <CardBook
            key={book.id}
            id={book.id}
            title={book.title}
            author={book.author}
            description={book.description}
            price={book.price}
            stock={book.stock}
            coverImageUrl={book.coverImageUrl}
            publishedDate={book.publishedDate}
          />
        ))}
      </div>
    </div>
  );
}
