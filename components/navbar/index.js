import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Flex,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { useIsDark, useScrollDirection } from "../../hooks";
import BrowsePopover from "./browse-popover";
import { useSession, signOut } from "next-auth/react";
import { HiChevronDown } from "react-icons/hi";

const Navbar = () => {
  const { scrollDirection } = useScrollDirection();
  const { isDark } = useIsDark();
  const scrollingUp = scrollDirection === "UP";
  const { data: session, status } = useSession();

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

        <Flex gap="3rem">
          <BrowsePopover />

          {!session ? (
            <Flex gap="1rem">
              <Link passHref href="/login">
                <Button variant="primaryGhost">Login</Button>
              </Link>

              <Link passHref href="/signup">
                <Button variant="primary">Sign Up</Button>
              </Link>
            </Flex>
          ) : (
            <Popover>
              <PopoverTrigger>
                <Flex gap="0.5rem" alignItems="center" cursor="pointer">
                  <Image
                    src="/images/profile/default.png"
                    alt="profile picture"
                    height={16}
                    width={38}
                  />
                  <HiChevronDown size={22} color="gray" />
                </Flex>
              </PopoverTrigger>
              <PopoverContent border="none" w="15rem">
                <PopoverArrow />
                <PopoverBody
                  bgColor={isDark ? "blue.400" : "white"}
                  border="none"
                  outline="none"
                  p="1rem"
                >
                  <Button variant="primary" w="100%" onClick={() => signOut()}>
                    Logout
                  </Button>
                </PopoverBody>
              </PopoverContent>
            </Popover>
          )}
        </Flex>
      </Container>
    </Box>
  );
};

export default Navbar;
