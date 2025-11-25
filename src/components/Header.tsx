import { HStack, Button } from "@chakra-ui/react";
import { useColorModeValue } from "../components/ui/color-mode";

interface Props {
  category: string;
  setCategory: (c: string) => void;
}

export default function Header({ category, setCategory }: Props) {
  const buttons = [
    { id: "audio", label: "Libra Audio", light: "purple.200", dark: "purple.200", activeLight: "purple.500", activeDark: "purple.500", text: "white" },
    { id: "books", label: "Libra PDF", light: "red.200", dark: "red.200", activeLight: "red.500", activeDark: "red.500", text: "white" },
    { id: "rare", label: "Libra të rrallë", light: "orange.200", dark: "orange.200", activeLight: "orange.500", activeDark: "orange.500", text: "white" },
  ];

  return (
    <HStack gap={3} justify="center" mb={6} wrap="wrap">
      {buttons.map((btn) => {
        const isActive = category === btn.id;

        // Ngjyra bazë (pa klik) dhe ngjyra e zgjidhjes
        const bg = isActive
          ? useColorModeValue(btn.activeLight, btn.activeDark)
          : useColorModeValue(btn.light, btn.dark);
        const color = isActive ? btn.text : useColorModeValue("black", "white");
        const borderColor = useColorModeValue(btn.light, btn.dark);

        return (
          <Button
            key={btn.id}
            onClick={() => setCategory(btn.id)}
            bg={bg}
            color={color}
            borderWidth={1}
            borderColor={borderColor}
            variant="solid"
            _hover={{
              bg: isActive
                ? useColorModeValue(btn.activeLight, btn.activeDark)
                : useColorModeValue(btn.activeLight, btn.activeDark),
              color: btn.text,
            }}
            _active={{
              bg: useColorModeValue(btn.activeLight, btn.activeDark),
              color: btn.text,
              borderColor: useColorModeValue(btn.activeLight, btn.activeDark),
            }}
            _focus={{
              boxShadow: "outline",
            }}
            flex="1"
            minW="100px"
          >
            {btn.label}
          </Button>
        );
      })}
    </HStack>
  );
}
