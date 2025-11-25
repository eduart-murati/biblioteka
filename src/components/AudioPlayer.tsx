import { Box, CloseButton } from "@chakra-ui/react";

interface AudioPlayerProps {
  url: string;
  onClose: () => void;
  title?: string;
}

export default function AudioPlayer({ url, onClose, title }: AudioPlayerProps) {
  // Convert "view" link to "preview" link
  const previewUrl = url.replace("/view", "/preview");

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      w="100vw"
      h="100vh"
      bg="rgba(0,0,0,0.8)"
      display="flex"
      alignItems="center"
      justifyContent="center"
      zIndex={9999}
    >
      <Box position="relative" w={{ base: "90%", md: "60%" }} h="200px" bg="gray.800" borderRadius="md" overflow="hidden">
        <CloseButton
          position="absolute"
          top={2}
          right={2}
          color="white"
          onClick={onClose}
          zIndex={10}
        />
        <iframe
          src={previewUrl}
          width="100%"
          height="100%"
          style={{ border: "none" }}
          allow="autoplay"
          title={title || "Audio Player"}
        />
      </Box>
    </Box>
  );
}
