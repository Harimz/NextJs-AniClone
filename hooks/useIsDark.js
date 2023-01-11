import { useColorMode } from "@chakra-ui/color-mode";

const useIsDark = () => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return { isDark };
};

export default useIsDark;
