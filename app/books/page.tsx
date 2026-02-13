"use client";
import { useState } from "react";
import Header from "../components/header";
import {books} from "./books";
import type { Book } from "./books";

export default function Books() {
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);

  return (
    <div className="m-[15px]">
      <div className="flex flex-col gap-10 items-center mb-10">
        <Header>
          <h1 className="text-2xl font-bold italic font-larken">
            books and stories that...
          </h1>
        </Header>
      </div>

      <div className="columns-2 md:columns-4 gap-4 space-y-4 pb-[50px]">
        {books.map((book) => (
          <div 
            key={book.id} 
            className="relative group cursor-pointer break-inside-avoid"
            onClick={() => setSelectedBook(book)}
          >
            {/* Book Cover */}
            <img
              className="w-full rounded-lg transition-transform duration-300 group-hover:scale-[1.02]"
              src={book.cover}
              alt={book.title}
            />

            {/* Hover Rating Overlay */}
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
              <p className="text-white font-larken text-xl font-bold">
                Rating: {book.rating}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Review Modal (Pop-up) */}
      {selectedBook && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setSelectedBook(null)}>
          <div className="bg-white p-8 rounded-2xl max-w-md w-full font-larken shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <h2 className="text-3xl font-bold mb-2">{selectedBook.title}</h2>
            <p className="text-lg font-bold mb-4 italic text-gray-600">My Rating: {selectedBook.rating}</p>
            <p className="leading-relaxed text-gray-800">{selectedBook.review}</p>
            <button 
              className="mt-6 w-full py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
              onClick={() => setSelectedBook(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}