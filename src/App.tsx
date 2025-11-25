// App.tsx
import { useState } from "react";
import { Box, Heading, Flex } from "@chakra-ui/react";
import ThemeToggle from "../src/components/ThemeToggle";
import BookGrid from "../src/components/BookGrid";
import BookReader from "../src/components/BookReader";
import SearchBar from "../src/components/SearchBar";
import { audioBooks, books, rareBooks } from "./data/data";
import Header from "../src/components/Header";
import { useColorModeValue } from "./components/ui/color-mode";

export default function App() {
  const [category, setCategory] = useState("audio"); // Default Audio
  const [search, setSearch] = useState("");
  const [selectedBook, setSelectedBook] = useState<any>(null);

  const bg = useColorModeValue("white", "gray.900");
  const color = useColorModeValue("black", "white");

  const categories: any = { audio: audioBooks, books: books, rare: rareBooks };

  // Filtrimi i librave sipas search, pa marrë parasysh kategorinë
  const filteredBooks = Object.values(categories)
    .flat() // bëjmë një array të thjeshtë për filtrim
    .filter(
      (item: any) =>
        item.title.toLowerCase().includes(search.toLowerCase()) ||
        (item.author &&
          item.author.toLowerCase().includes(search.toLowerCase()))
    )
    // Nëse search është bosh, trego vetëm librat e kategorisë aktive
    .filter((item: any) =>
      search ? true : categories[category].includes(item)
    );

  return (
    <Box bg={bg} color={color} minH="100vh">
      {/* Sticky Header + Search */}
      <Box position="sticky" top={0} bg={bg} zIndex={10} p={4} boxShadow="sm">
        <Flex
          justify="space-between"
          align="center"
          mb={4}
          flexWrap="wrap"
          gap={2}
        >
          <Heading size="md" flex="1" minW="150px">
            Biblioteka virtuale e FSHZH
          </Heading>
          <ThemeToggle />
        </Flex>

        {/* Kategoritë me ngjyra */}
        <Header category={category} setCategory={setCategory} />

        {/* SearchBar */}
        <SearchBar
          searchText={search}
          onSearchChange={setSearch}
          onSearchSubmit={() => {}}
        />
      </Box>

      {/* Librat */}
      <Box p={6}>
        <BookGrid
          books={filteredBooks}
          category={category}
          onSelectBook={(book: any) => setSelectedBook(book)}
          isLoading={false}
        />
      </Box>

      {/* Reader Modal */}
      {selectedBook && (
        <BookReader
          url={selectedBook.url}
          onClose={() => setSelectedBook(null)}
          bookTitle={selectedBook.title}
        />
      )}
    </Box>
  );
}
