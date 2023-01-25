import { Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const DisplayCard = ({ contentData, type }) => {
  console.log(contentData);

  return (
    <Flex direction="column" cursor="pointer" p={{ base: "0.5rem", md: "0" }}>
      <Link passHref href={`/${type}/${contentData.mal_id}`}>
        <Box
          mb="1rem"
          borderRadius="0.5rem"
          h={{ base: "15rem", md: "18rem" }}
          w="100%"
          position="relative"
        >
          <Image
            src={contentData.images.jpg.image_url}
            fill
            alt={contentData.title}
          />
        </Box>
        <Text color="gray.500" fontSize="0.75rem" fontWeight="bold">
          {contentData.title}
        </Text>
      </Link>
    </Flex>
  );
};

export default DisplayCard;
