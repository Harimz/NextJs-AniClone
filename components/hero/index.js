import React from "react";
import {
  Box,
  Button,
  Container,
  Heading,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import HeroItem from "./hero-item";

import { FaChevronCircleRight } from "react-icons/fa";
import Link from "next/link";

const Hero = () => {
  return (
    <Container
      maxW="container.xl"
      p={{ base: "4rem 1rem 1rem 1rem", lg: "5rem" }}
      bgColor="blue.500"
      mt={{ base: 0, lg: "3rem" }}
      borderRadius={{ base: "0", lg: "1.5rem" }}
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <Box textAlign="center" mb="5rem">
        <Heading color="white" mb="2rem">
          The next-generation anime platform
        </Heading>
        <Text
          color="blue.100"
          fontSize="1.5rem"
          margin="auto"
          w={{ base: "100%", lg: "80%" }}
        >
          Track, share and discover your favorite anime and manga with AniClone.
        </Text>
      </Box>

      <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={12}>
        <HeroItem
          img="/images/hero/obsessions.svg"
          title="Discover your obsessions"
          text="What are your highest rated genres or most watched voice actors? Follow your watching habits time with in-depth statistics."
        />
        <HeroItem
          img="/images/hero/anywhere.svg"
          title="Bring AniList anywhere"
          text="Keep track of your progress on-the-go with one of many AniList apps across IOS, Android, macOS, and Windows."
        />
        <HeroItem
          img="/images/hero/conversation.svg"
          title="Join the conversation"
          text="Share your thoughts with our thriving community, make friends, socialize, and recieve recommendations."
        />
        <HeroItem
          img="/images/hero/tweak.svg"
          title="Tweak it to your liking"
          text="Customize your scoring system, title format, color shceme, and much more! Also, we have a dark mode."
        />
      </SimpleGrid>
      <Link passHref href="signup">
        <Button
          rightIcon={<FaChevronCircleRight size={28} />}
          variant="headerPrimary"
          size="lg"
          borderRadius="2rem"
          transform={{ base: "translateY(2.25rem)", lg: "translateY(6.5rem)" }}
          p="1rem 3rem"
        >
          Join Now
        </Button>
      </Link>
    </Container>
  );
};

export default Hero;
