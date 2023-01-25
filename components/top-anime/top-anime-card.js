import React from "react";
import { Box, Flex, Grid, Heading, Text } from "@chakra-ui/react";
import { getColor, getPercent } from "../../helpers/";
import { FiSmile } from "react-icons/fi";
import { useIsDark } from "../../hooks";
import Image from "next/image";
import Link from "next/link";

const TopAnimeCard = ({ anime, colorId }) => {
  const { isDark } = useIsDark();

  const mainColor = getColor[colorId]?.main;
  const subColor = getColor[colorId]?.sub;

  return (
    <>
      <Flex mb="0" display={{ base: "none", md: "none", lg: "flex" }}>
        <Flex w="5%" justify="center" align="center" mr="1rem">
          <Heading color="gray.500" fontSize="1.5rem">
            #{anime.rank}
          </Heading>
        </Flex>
        <Flex
          w="95%"
          bgColor={isDark ? "blue.400" : "white"}
          justify="space-between"
          p="0.5rem"
          borderRadius="0.5rem"
          boxShadow={isDark ? "" : " 0 14px 30px #C9D7E3AA,0 4px 4px #C9D7E3AA"}
        >
          <Flex align="center">
            <Box h="4rem" w="3rem" pos="relative" mr="1rem">
              <Image
                src={anime.images.jpg.image_url}
                fill
                mr="2rem"
                alt="anime-img"
              />
            </Box>

            <Flex flexDir="column">
              <Text
                variant="link"
                cursor="pointer"
                fontWeight="bold"
                _hover={{
                  color: mainColor,
                }}
              >
                <Link href={`/anime/${anime.mal_id}`}>{anime?.title}</Link>
              </Text>

              <Flex gap="0.5rem" mt="0.5rem">
                {anime.genres.map((obj, i) => (
                  <Box
                    key={Math.random()}
                    bgColor={mainColor}
                    p="3px 8px"
                    borderRadius="1rem"
                  >
                    <Text color={subColor} fontSize="0.5rem">
                      {obj.name}
                    </Text>
                  </Box>
                ))}
              </Flex>
            </Flex>
          </Flex>
          <Grid
            gridTemplateColumns="repeat(4, 85px)"
            gap="5rem"
            placeItems="center"
          >
            <Box>
              <FiSmile size={24} style={{ color: "#32C023" }} />
            </Box>
            <Box>
              <Text variant="link" fontWeight="bold">
                {getPercent(anime?.score)}%
              </Text>
              <Text variant="subLink">{anime?.members} users</Text>
            </Box>
            <Box>
              <Text variant="link" fontWeight="bold">
                {anime?.type}
              </Text>
              <Text variant="subLink">{anime?.episodes} episode(s)</Text>
            </Box>
            <Box>
              <Text variant="link" fontWeight="bold">
                {anime?.end_date ? anime?.end_date : "airing"}
              </Text>
              <Text variant="subLink">
                {anime?.end_date ? "finished" : "airing"}
              </Text>
            </Box>
          </Grid>
        </Flex>
      </Flex>
      <Flex
        direction="column"
        position="relative"
        display={{ base: "block", md: "block", lg: "none" }}
      >
        <Flex
          bgColor={mainColor}
          borderRadius="50%"
          h="3rem"
          w="3rem"
          justify="center"
          align="center"
          position="absolute"
          left="-0.5rem"
          top="-1rem"
          zIndex={1000}
        >
          <Text color={subColor} fontWeight="bold">
            #{anime.rank}
          </Text>
        </Flex>
        <Link passHref href={`/anime/${anime.mal_id}`}>
          <Box height="12rem" w="100%">
            <Image src={anime.images.jpg.image_url} alt={anime.title} fill />
          </Box>
        </Link>
        <Text color="gray.400">{anime.title}</Text>
      </Flex>
    </>
  );
};

export default TopAnimeCard;
