import React from "react";
import { Container, GridItem, Grid } from "@chakra-ui/react";
// import Listing from "./components/listing";

const Profiles = () => {
  return (
    <Container maxW="container.xl" centerContent h="100%">
      {/* <Flex flexDirection="column" w="100%">
        <h3>Tabela de permissões</h3>
        <Listing />
      </Flex> */}
      <Grid
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(5, 1fr)"
        gap={4}
        h="100vh"
        w="100%"
      >
        <GridItem rowSpan={2} colSpan={1} bg="tomato" />
        <GridItem colSpan={2} bg="papayawhip" />
        <GridItem colSpan={2} bg="papayawhip" />
        <GridItem colSpan={4} bg="tomato" />
      </Grid>
    </Container>
  );
};

export default Profiles;
