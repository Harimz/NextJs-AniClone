import React from "react";
import { Flex, Grid, Text } from "@chakra-ui/react";
import LoadingSpinner from "../loading-spinner";
import DisplayCard from "./display-card";

const Display = ({ data, isFetching, limit = 6, header, type }) => {
  if (isFetching) return <LoadingSpinner />;

  const displayData = data?.data;

  return (
    <Flex mt="5rem" flexDir="column">
      <Text mb="1rem">{header}</Text>

      <Grid
        templateColumns={{
          base: "repeat(auto-fit, minmax(156px, 1fr))",
          md: "repeat(auto-fit, minmax(166px, 1fr))",
        }}
        gap={{ base: 0, md: 6 }}
      >
        {displayData?.slice(0, limit++).map((item) => (
          <DisplayCard key={item.mal_id} contentData={item} type={type} />
        ))}
      </Grid>
    </Flex>
  );
};

export default Display;
