export interface Book {
  id: number,
  title: string,
  cover: string,
  rating: string,
  review: string
};

export const books: Book[] = [
  {
    id: 1,
    title: "The Great Gatsby",
    cover: "/books/gatsby.jpg",
    rating: "4.5/5",
    review: "A classic look at the American Dream. The prose is beautiful."
  },
  // Add more books here
];