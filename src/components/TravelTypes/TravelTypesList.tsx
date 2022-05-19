import { Grid, GridItem, Image, Text } from "@chakra-ui/react";

export function TravelTypesList() {
  return (
    <Grid
      maxW="1160px"
      w="100%"
      mx="auto"
      templateColumns={{ base: "repeat(3, 1fr)", sm: "repeat(5, 1fr)" }}
      px={{ base: "5", sm: "0" }}
      gap={{ base: "0", sm: "20" }}
      mt="100px"
    >
      <GridItem
        display={{ base: "block", sm: "flex" }}
        flexDir="column"
        alignItems="center"
        colStart={1}
      >
        <Image
          src="cocktail1.png"
          alt="cocktail"
          display={{ base: "none", sm: "block" }}
        />
        <Text
          mt="24px"
          fontWeight={{ base: "medium", sm: "semibold" }}
          fontSize={{ base: "18px", sm: "24px" }}
          lineHeight={{ base: "27px", sm: "36px" }}
          textAlign="center"
          color="gray.500"
        >
          vida noturna
        </Text>
      </GridItem>
      <GridItem
        display="flex"
        flexDir="column"
        alignItems="center"
        colStart={{ base: 3, sm: "auto" }}
      >
        <Image
          src="surf 1.png"
          alt="cocktail"
          display={{ base: "none", sm: "block" }}
        />
        <Text
          mt="24px"
          fontWeight={{ base: "medium", sm: "semibold" }}
          fontSize={{ base: "18px", sm: "24px" }}
          lineHeight={{ base: "27px", sm: "36px" }}
          color="gray.500"
        >
          praia
        </Text>
      </GridItem>
      <GridItem display="flex" flexDir="column" alignItems="center">
        <Image
          src="building 1.png"
          alt="cocktail"
          display={{ base: "none", sm: "block" }}
        />
        <Text
          mt="24px"
          fontWeight={{ base: "medium", sm: "semibold" }}
          fontSize={{ base: "18px", sm: "24px" }}
          lineHeight={{ base: "27px", sm: "36px" }}
          color="gray.500"
        >
          morderno
        </Text>
      </GridItem>
      <GridItem
        display="flex"
        flexDir="column"
        alignItems="center"
        colStart={{ base: 3, sm: "auto" }}
      >
        <Image
          src="museum 1.png"
          alt="cocktail"
          display={{ base: "none", sm: "block" }}
        />
        <Text
          mt="24px"
          fontWeight={{ base: "medium", sm: "semibold" }}
          fontSize={{ base: "18px", sm: "24px" }}
          lineHeight={{ base: "27px", sm: "36px" }}
          color="gray.500"
        >
          clássico
        </Text>
      </GridItem>
      <GridItem
        display="flex"
        flexDir="column"
        alignItems="center"
        colStart={{ base: 2, sm: "auto" }}
      >
        <Image
          src="earth 1.png"
          alt="cocktail"
          display={{ base: "none", sm: "block" }}
        />
        <Text
          mt="24px"
          fontWeight={{ base: "medium", sm: "semibold" }}
          fontSize={{ base: "18px", sm: "24px" }}
          lineHeight={{ base: "27px", sm: "36px" }}
          color="gray.500"
        >
          e mais...
        </Text>
      </GridItem>
    </Grid>
  );
}
