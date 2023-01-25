import { Container } from "@chakra-ui/react";
import {
  useGetTopAiringAnimeQuery,
  useGetTopUpcomingAnimeQuery,
} from "../app/services/animeApi";
import Display from "../components/display";
import Hero from "../components/hero";
import TopAnime from "../components/top-anime";

export default function Home() {
  const { data: airingData, isLoading: isFetchingAiring } =
    useGetTopAiringAnimeQuery();
  const { data: upcomingData, isLoading: isFetchingUpcoming } =
    useGetTopUpcomingAnimeQuery();

  return (
    <>
      <Hero />

      <Container maxW="container.xl" mt="10rem">
        <Display
          data={airingData}
          isFetching={isFetchingAiring}
          header="Airing Anime"
          limit={5}
          type="anime"
        />

        <Display
          data={upcomingData}
          isFetching={isFetchingUpcoming}
          header="Upcoming Anime"
          limit={5}
          type="anime"
        />

        <TopAnime />
      </Container>
    </>
  );
}
