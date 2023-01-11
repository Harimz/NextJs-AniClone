const TextStyles = {
  baseStyle: {},
  sizes: {},
  variants: {
    link: (props) => ({
      color: "gray.400",
      transition: "color 0.3s ease",
      cursor: "pointer",
      _hover: {
        color: "gray.100",
      },
    }),
    subLink: (props) => ({
      color: "gray.600",
      fontSize: "0.85rem",
      fontWeight: "semibold",
      transition: "color 0.3s ease",
      _hover: {
        color: "gray.400",
      },
    }),
  },
  defaultProps: {},
};

export default TextStyles;
