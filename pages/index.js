import { Container } from "@chakra-ui/react";
import { useGetTopAnimeFilterQuery } from "../app/services/animeApi";
import Display from "../components/display";
import Hero from "../components/hero";
import TopAnime from "../components/top-anime";

export default function Home() {
  const { data: airingData, isLoading: isFetchingAiring } =
    useGetTopAnimeFilterQuery("filter=airing");
  const { data: upcomingData, isLoading: isFetchingUpcoming } =
    useGetTopAnimeFilterQuery("filter=upcoming");

  return (
    <>
      <Hero />

      <Container maxW="container.xl" mt="10rem">
        <Display
          data={airingData}
          isFetching={isFetchingAiring}
          header="Airing Anime"
          type="anime"
        />

        <Display
          data={upcomingData}
          isFetching={isFetchingUpcoming}
          header="Upcoming Anime"
          type="anime"
        />

        <TopAnime />
      </Container>
    </>
  );
}
