const Button = {
  baseStyle: {},
  sizes: {},
  variants: {
    primary: (props) => ({
      bg: "blue.200",
      color: "white",
      _hover: {
        transform: "scale(1.05)",
        boxShadow: "1px 3px 10px #3577FFAA",
      },
    }),
    headerPrimary: (props) => ({
      bg: "blue.200",
      color: "white",
      _hover: {
        boxShadow: "1px 3px 15px #3577FFAA",
      },
    }),
    form: (props) => ({
      bg: "blue.150",
      color: "white",
      fontWeight: "bold",
      padding: "1rem 2rem",
    }),
    primaryGhost: (props) => ({
      bg: "transparent",
      color: "gray.400",
      transition: "color 0.3s ease",
      cursor: "pointer",
      _hover: {
        color: "gray.100",
      },
    }),
  },
  defaultProps: {},
};

export default Button;
