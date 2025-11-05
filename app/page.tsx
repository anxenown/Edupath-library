"use client";
import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";
import Footer from "../components/footer";
import Header from "../components/header";
import CareerNLPChatBot from "@/components/CareerNLPChatBot";

// Define Book interface
interface Book {
  id: string;
  title: string;
  author: string;
  category: string;
  url: string;
  cover: string;
}


// BookCard component
const BookCard = ({ book }: { book: Book }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1">
      <div className="mb-4">
        <img
          src={book.cover}
          alt={`${book.title} cover`}
          className="w-full h-48 object-cover rounded-md mb-4"
        />
        <h3 className="text-xl font-bold text-gray-800">{book.title}</h3>
        <p className="text-sm text-gray-600">By {book.author}</p>
      </div>
      <div className="mb-4">
        <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
          {book.category}
        </span>
      </div>
      <a
        href={book.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block text-center bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300"
      >
        Download Free
      </a>
    </div>
  );
};

// BookList component
const BookList = ({ books }: { books: Book[] }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {books.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
};

// SearchBar component
const SearchBar = ({ onSearch }: { onSearch: (query: string) => void }) => {
  return (
    <div className="relative w-full max-w-lg">
      <input
        type="text"
        placeholder="Search for books by title, author, or category..."
        onChange={(e) => onSearch(e.target.value)}
        className="w-full p-4 pl-12 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-800"
      />
      <svg
        className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    </div>
  );
};

// Main Page component

export default function Home() {
  const [books, setBooks] = useState<Book[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchBooks = async () => {
      const snapshot = await getDocs(collection(db, "books"));
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Book[];
      setBooks(data);
    };
    fetchBooks();
  }, []);

  const filteredBooks = searchQuery
    ? books.filter(
        (book) =>
          book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          book.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
          book.category.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : books.slice(12, 23);

  return (
    <div
      className="min-h-screen py-8 px-4 sm:px-6 lg:px-12"
      style={{
        backgroundImage:
          'url("https://source.unsplash.com/random/1920x1080?library&bg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        backgroundColor: "rgba(255, 255, 255, 0.9)",
        backgroundBlendMode: "overlay",
      }}
    >
      <Header />
      <div className="max-w-7xl mx-auto">
        <header className="text-center mt-12 mb-12">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
            Welcome to EduPath Library
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover a world of knowledge with our vast collection of books
            across various categories. Search for your favorite titles or
            explore our curated selection below.
          </p>
        </header>
        <div className="mb-10 flex justify-center">
          <SearchBar onSearch={setSearchQuery} />
        </div>
        {filteredBooks.length > 0 ? (
          <>
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              {searchQuery ? "Search Results" : "Featured Books"}
            </h2>
            <BookList books={filteredBooks} />
          </>
        ) : (
          <p className="text-center text-gray-600 text-lg">
            No books found matching your search.
          </p>
        )}
        <CareerNLPChatBot/>
      </div>
      <br />
      <Footer />
    </div>
  );
}
