import React from "react";
import {
  Box,
  Container,
  Flex,
  Grid,
  IconButton,
  List,
  ListItem,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { FaSun, FaMoon } from "react-icons/fa";

const Footer = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <Box as="footer" bgColor="blue.600" mt="50rem">
      <Container maxW="container.xl" p={{ base: "2rem", lg: "5rem" }}>
        <Flex justify="space-between" direction={{ base: "column", lg: "row" }}>
          <Box mb="2rem">
            <Text
              color="#3DB4F2"
              mb="1rem"
              fontWeight="semibold"
              fontSize="1.25rem"
            >
              Site Theme
            </Text>
            <IconButton
              icon={
                isDark ? (
                  <FaSun style={{ color: "white " }} />
                ) : (
                  <FaMoon style={{ color: "black" }} />
                )
              }
              onClick={toggleColorMode}
            />
          </Box>
          <Grid
            gridAutoFlow={{ base: "row", lg: "column" }}
            gap={{ base: "2rem", lg: "6rem" }}
          >
            <List color="gray.300" spacing={3}>
              <ListItem>Donate</ListItem>
              <ListItem>AniList.co</ListItem>
              <ListItem>AniChart.net</ListItem>
            </List>
            <List color="gray.300" spacing={3}>
              <ListItem>Apps</ListItem>
              <ListItem>Site Stats</ListItem>
              <ListItem>Recommendations</ListItem>
              <ListItem>API</ListItem>
            </List>
            <List color="gray.300" spacing={3}>
              <ListItem>Discord</ListItem>
              <ListItem>Twitter</ListItem>
              <ListItem>Facebook</ListItem>
              <ListItem>GitHub</ListItem>
            </List>
            <List color="gray.300" spacing={3}>
              <ListItem>Add Data</ListItem>
              <ListItem>Moderators</ListItem>
              <ListItem>Contact</ListItem>
              <ListItem>Terms & Privacy</ListItem>
              <ListItem>Site Map</ListItem>
            </List>
          </Grid>
        </Flex>
      </Container>
    </Box>
  );
};

export default Footer;
