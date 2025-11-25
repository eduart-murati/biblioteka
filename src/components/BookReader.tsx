import { Box, CloseButton, Text } from "@chakra-ui/react"
import { useColorModeValue } from "../components/ui/color-mode"

import { useRef } from "react"

interface Props {
  url: string
  onClose: () => void
  bookTitle?: string
}

export default function BookReader({ url, onClose, bookTitle }: Props) {
  const iframeRef = useRef<HTMLIFrameElement | null>(null)
  const overlayBg = useColorModeValue("rgba(255,255,255,0.85)", "rgba(0,0,0,0.85)")

  const handleClose = () => {
    if (iframeRef.current) iframeRef.current.src = "about:blank"
    onClose()
  }

  return (
    <Box position="fixed" top={0} left={0} w="100vw" h="100vh" bg={overlayBg} zIndex={9999} display="flex" alignItems="center" justifyContent="center">
      <Box position="relative" w={{ base: "95%", md: "90%", lg: "80%" }} h={{ base: "90%", md: "90%", lg: "85%" }} borderRadius="md" overflow="hidden" shadow="lg" bg={useColorModeValue("white","gray.900")}>
        <Box position="absolute" top={0} left={0} w="100%" h="50px" bg={useColorModeValue("gray.100","gray.800")} display="flex" alignItems="center" justifyContent="center">
          <Text color={useColorModeValue("black","white")} fontWeight="bold" maxW="70%" lineClamp={1} textAlign="center">{bookTitle || "Libri i zgjedhur"}</Text>
        </Box>
        <CloseButton position="absolute" top={2} right={2} zIndex={50} onClick={handleClose} />
        <iframe ref={iframeRef} src={url} width="100%" height="100%" style={{ border: "none" }} title="Book Reader" allow="autoplay; fullscreen" />
      </Box>
    </Box>
  )
}
