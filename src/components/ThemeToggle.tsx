import { Button } from "@chakra-ui/react";
import { HiSun, HiMoon } from "react-icons/hi";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const currentTheme = theme === "system" ? systemTheme : theme;
  const IconComponent = currentTheme === "dark" ? HiSun : HiMoon;
  const iconColor = currentTheme === "dark" ? "yellow.400" : "blue.400";

  return (
    <Button
      variant="ghost"
      size="lg"
      onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
    >
      <IconComponent size={24} color={iconColor} />
    </Button>
  );
}
