import { SimpleGrid } from "@chakra-ui/react";
import BookCard from "./BookCard";
import BookCardSkeleton from "./BookCardSkeleton";

interface Props {
  books: any[];
  category: string;
  onSelectBook: (book: any) => void;
  isLoading?: boolean;
}

export default function BookGrid({
  books,
  category,
  onSelectBook,
  isLoading,
}: Props) {
  return (
    <SimpleGrid
      gap={6}
      width="100%"
      // Fiksojmë numrin e kolonave për desktop, tablet dhe mobile
      columns={{ base: 2, sm: 3, md: 4, lg: 6 }}
    >
      {isLoading
        ? Array.from({ length: 6 }).map((_, i) => <BookCardSkeleton key={i} />)
        : books.map((book, i) => (
            <BookCard
              key={i}
              item={book}
              category={category} // kalojmë kategorinë tek BookCard
              onClickRead={() => book.url && onSelectBook(book)}
            />
          ))}
    </SimpleGrid>
  );
}
