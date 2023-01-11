import React, { useState } from "react";
import { Box, Button, Container, Flex } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { useIsDark, useScrollDirection } from "../../hooks";
import BrowsePopover from "./browse-popover";

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
      display={["none", "block"]}
    >
      <Container
        maxW="container.lg"
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
          <BrowsePopover />

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
