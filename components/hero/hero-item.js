import React from "react";
import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

const HeroItem = ({ img, text, title }) => {
  return (
    <Flex>
      <Image
        src={img}
        h={28}
        w={28}
        mr={{ base: "1rem", lg: "3rem" }}
        alt="hero item"
      />
      <Box>
        <Heading size="sm" color="white" mb="1rem">
          {title}
        </Heading>
        <Text color="blue.100">{text}</Text>
      </Box>
    </Flex>
  );
};

export default HeroItem;
