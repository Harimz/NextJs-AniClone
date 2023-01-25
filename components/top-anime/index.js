import { Container, Flex, Grid, Text } from "@chakra-ui/react";
import React from "react";
import { useGetTopAnimeQuery } from "../../app/services/animeApi";
import LoadingSpinner from "../loading-spinner";
import TopAnimeCard from "./top-anime-card";

const TopAnime = () => {
  const { data: animeList, isFetching } = useGetTopAnimeQuery();

  if (isFetching) {
    return <LoadingSpinner />;
  }

  return (
    <>
      <Flex justify="space-between" color="gray.400" mb="3rem" mt="5rem">
        <Text fontWeight="bold" fontSize="1.25rem">
          TOP 100 ANIME
        </Text>
        <Text variant="link" cursor="pointer">
          View All
        </Text>
      </Flex>
      <Grid
        gridTemplateColumns={{
          base: "repeat(auto-fill, minmax(145px, 1fr))",
          lg: "repeat(1, 1fr)",
        }}
        gap="2rem"
      >
        {animeList.data.slice(0, 10).map((anime, i) => {
          return <TopAnimeCard key={anime.mal_id} anime={anime} colorId={i} />;
        })}
      </Grid>
    </>
  );
};

export default TopAnime;
