import React from "react";
import { Container, Spinner } from "@chakra-ui/react";

const LoadingSpinner = () => {
  return (
    <Container
      display="flex"
      alignItems="center"
      justifyContent="center"
      mt="5rem"
    >
      <Spinner color="white" />
    </Container>
  );
};

export default LoadingSpinner;
