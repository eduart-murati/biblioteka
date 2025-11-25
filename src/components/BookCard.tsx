import {
  Card,
  CardBody,
  Image,
  Text,
  VStack,
  Button,
  AspectRatio,
} from "@chakra-ui/react";
// import no_image from "../assets/no_image.svg";

interface Props {
  item: { title: string; author?: string; img?: string; url: string };
  category: string;
  onClickRead?: () => void;
}

export default function BookCard({ item, onClickRead }: Props) {
  const isCoverAvailable = !!item.img;
  const imageUrl = item.img;

  // Funksion për të përcaktuar butonin bazuar në ekstensionin e file
  const getButtonLabel = (title: string) => {
    const lowerTitle = title.toLowerCase();
    if (lowerTitle.endsWith(".mp3")) return "Dëgjo";
    return "Lexo";
  };

  const buttonLabel = getButtonLabel(item.title);

  return (
    <Card.Root h="100%">
      {/* Image me raport 2/3 */}
      <AspectRatio ratio={2 / 3} w="100%">
        <Image
          src={imageUrl}
          alt={item.title}
          objectFit={isCoverAvailable ? "cover" : "contain"}
          p={isCoverAvailable ? 0 : 4}
          cursor={item.url ? "pointer" : "default"}
          _hover={{
            transform: item.url ? "scale(1.03)" : "none",
            transition: "0.2s",
          }}
          onClick={onClickRead}
        />
      </AspectRatio>

      <CardBody
        p={3}
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        h="120px"
      >
        <VStack align="flex-start" gap={1} w="100%">
          {/* Titulli */}
          <Text
            fontWeight="bold"
            fontSize="md"
            cursor={item.url ? "pointer" : "default"}
            onClick={onClickRead}
            lineClamp={1}
            title={item.title}
            w="100%"
          >
            {item.title}
          </Text>

          {/* Autori */}
          {item.author && (
            <Text
              fontSize="sm"
              color="gray.500"
              lineClamp={1}
              title={item.author}
              w="100%"
            >
              {item.author}
            </Text>
          )}

          {/* Butoni */}
          <Button
            colorScheme="blue"
            size="sm"
            width="100%"
            mt={2}
            onClick={onClickRead}
            disabled={!item.url}
          >
            {buttonLabel}
          </Button>
        </VStack>
      </CardBody>
    </Card.Root>
  );
}
