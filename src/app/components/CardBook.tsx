// app/components/CardBook.tsx
import React from "react";

interface CardBookProps {
  id: number;
  title: string;
  author: string;
  description: string;
  price: number;
  stock: number;
  coverImageUrl?: string;
  publishedDate?: Date;
}

const CardBook: React.FC<CardBookProps> = ({
  id,
  title,
  author,
  description,
  price,
  stock,
  coverImageUrl,
  publishedDate,
}) => {
  return (
    <div className="flex bg-white shadow-lg rounded-lg p-5 mb-4 transition-transform transform hover:-translate-y-1">
      {coverImageUrl && (
        <img
          src={coverImageUrl}
          alt={title}
          className="w-32 h-48 object-cover rounded-md mr-4"
        />
      )}
      <div className="flex flex-col">
        <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
        <p className="text-gray-500 text-sm mb-2">by {author}</p>
        <p className="text-gray-700 text-sm mb-2">{description}</p>
        <p className="text-green-600 font-bold mb-1">${price}</p>
        <p className="text-gray-600 text-sm mb-1">Stock: {stock}</p>
        {publishedDate && (
          <p className="text-gray-500 text-xs">
            Published on: {new Date(publishedDate).toLocaleDateString()}
          </p>
        )}
      </div>
    </div>
  );
};

export default CardBook;
