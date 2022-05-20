import { Box, Grid, GridItem } from "@chakra-ui/react";
import { TravelTypesList } from "./TravelTypesList";
import { TravelTypesText } from "./TravelTypesText";

export function TravelTypes() {
  return (
    <>
      <Grid
        templateColumns={{ base: "1fr 1fr", sm: "repeat(5, 1fr)" }}
        maxW="1160px"
        w="100%"
        mx="auto"
        mt={{ base: "36px", sm: "100px" }}
        mb={{ base: "36px", sm: "80px" }}
        justifyContent="space-between"
        gap={{ base: 1, sm: 0 }}
      >
        <GridItem>
          <TravelTypesList text="vida noturna" img="cocktail1.png" />
        </GridItem>

        <GridItem>
          <TravelTypesList text="praia" img="surf1.png" />
        </GridItem>

        <GridItem>
          <TravelTypesList text="moderno" img="building1.png" />
        </GridItem>

        <GridItem>
          <TravelTypesList text="clássico" img="museum1.png" />
        </GridItem>

        <GridItem colSpan={{ base: 2, sm: "auto" }}>
          <TravelTypesList text="e mais..." img="earth1.png" />
        </GridItem>
      </Grid>
      <Box
        w={{ base: "60px" }}
        border="1px"
        borderStyle="solid"
        color="gray.500"
        mx="auto"
        mb={{ base: "24px", sm: "52px" }}
      />
      <TravelTypesText />
    </>
  );
}
