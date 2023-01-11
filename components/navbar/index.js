import { Box, Button, Container, Flex, Spacer, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useIsDark, useScrollDirection } from "../../hooks";

const Navbar = () => {
  const { scrollDirection } = useScrollDirection();
  const { isDark } = useIsDark();
  const scrollingUp = scrollDirection === "UP";

  return (
    <Box
      position="sticky"
      left="0"
      right="0"
      top="0"
      as="nav"
      bg={isDark ? "blue.300" : "darkPurple"}
      transform={scrollingUp ? "translateY(0)" : "translateY(-10rem)"}
      transition="transform 0.3s ease-in-out"
      zIndex="999"
      display={{ base: "none", md: "block" }}
    >
      <Container
        maxW="container.xl"
        display="flex"
        alignItems="center"
        p="0.5rem"
        justifyContent="space-between"
      >
        <Link passHref href="/">
          <Image
            src="/images/icon.svg"
            alt="Anilist logo"
            width={46}
            height={46}
          />
        </Link>

        <Flex gap="1rem">
          <Link passHref href="/login">
            <Button variant="primaryGhost">Login</Button>
          </Link>

          <Link passHref href="/signup">
            <Button variant="primary">Sign Up</Button>
          </Link>
        </Flex>
      </Container>
    </Box>
  );
};

export default Navbar;
