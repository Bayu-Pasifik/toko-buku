// app/page.tsx
import BookList from './components/BookList';

const HomePage = async () => {
  const res = await fetch('http://localhost:3000/api/books');
  const data = await res.json();

  return (
    <div>
      <h1>Toko Baca</h1>
      <BookList books={data.books} />
    </div>
  );
};

export default HomePage;
