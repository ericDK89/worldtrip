import { Box, Flex, Heading } from "@chakra-ui/react";
import { EuropeCities } from "./EuropeCities";

export function EuropeCitiesData() {
  return (
    <Box
      maxW="1250px"
      w="100%"
      mx="auto"
      mt={{ base: "32px", sm: "80px" }}
      mb="20px"
    >
      <Heading
        fontWeight="medium"
        fontSize={{ base: "24px", sm: "36px" }}
        color="gray.500"
      >
        Cidades +100
      </Heading>
      <Flex
        mt="40px"
        justifyContent={{ base: "center", sm: "space-between" }}
        wrap="wrap"
        gap="48px"
      >
        <EuropeCities
          img="/londres.png"
          title="Londres"
          text="Reino Unido"
          icon="/iconReinoUnido.svg"
        />
        <EuropeCities
          img="/paris.png"
          title="Paris"
          text="França"
          icon="/iconFranca.svg"
        />
        <EuropeCities
          img="/roma.png"
          title="Roma"
          text="Itália"
          icon="/iconItalia.svg"
        />
        <EuropeCities
          img="/praga.png"
          title="Praga"
          text="República Tcheca"
          icon="/iconRepublica.svg"
        />
        <EuropeCities
          img="/amsterda.png"
          title="Amsterdã"
          text="Holanda"
          icon="/iconHolanda.svg"
        />
      </Flex>
    </Box>
  );
}
