import React, { useState } from "react";
import {
  Button,
  Flex,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import { FaBookOpen, FaPlay } from "react-icons/fa";
import { useIsDark } from "../../hooks";

const BrowsePopover = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isDark } = useIsDark();

  return (
    <Popover
      returnFocusOnClose={false}
      isOpen={isOpen}
      placement="bottom"
      closeOnBlur={false}
    >
      <PopoverTrigger>
        <Link passHref href="/search/anime">
          <Button variant="primaryGhost" onMouseOver={() => setIsOpen(true)}>
            Browse
          </Button>
        </Link>
      </PopoverTrigger>
      <PopoverContent
        onMouseOver={() => setIsOpen(true)}
        onMouseOut={() => setIsOpen(false)}
        bgColor={isDark ? "blue.400" : "white"}
        border="none"
      >
        <PopoverArrow bgColor={isDark ? "blue.400" : "white"} border="none" />
        <PopoverBody>
          <Flex direction="column">
            <Flex align="center" p="1rem 1rem 0 1rem">
              <FaPlay size={20} style={{ color: "#A0B1C5" }} />
              <Flex direction="column" ml="1rem">
                <Link passHref href="/search/anime">
                  <Text variant="link" fontWeight="bold" mb="0.5rem">
                    Anime
                  </Text>
                </Link>
                <SimpleGrid gridAutoFlow="column" spacing={2}>
                  <Link passHref href="/search/anime/top-100">
                    <Text variant="subLink" cursor="pointer">
                      Top 100
                    </Text>
                  </Link>
                  <Link passHref href="/search/anime/trending">
                    <Text variant="subLink">Trending</Text>
                  </Link>
                  <Link passHref href="/search/anime/top-movies">
                    <Text variant="subLink">Top Movies</Text>
                  </Link>
                </SimpleGrid>
              </Flex>
            </Flex>
            <Flex align="center" mt="1rem" p="0 1rem 1rem 1rem">
              <FaBookOpen size={20} style={{ color: "#A0B1C5" }} />
              <Flex direction="column" ml="1rem">
                <Link passHref href="/search/manga">
                  <Text variant="link" fontWeight="bold" mb="0.5rem">
                    Manga
                  </Text>
                </Link>
                <SimpleGrid gridAutoFlow="column" spacing={2}>
                  <Link passHref href="/search/manga/top-100">
                    <Text variant="subLink">Top 100</Text>
                  </Link>

                  <Link passHref href="/search/manga/top-manhwa">
                    <Text variant="subLink">Top Manhwa</Text>
                  </Link>
                </SimpleGrid>
              </Flex>
            </Flex>
          </Flex>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

export default BrowsePopover;
