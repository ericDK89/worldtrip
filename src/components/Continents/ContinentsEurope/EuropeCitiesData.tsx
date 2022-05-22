import { Box, Heading, HStack } from "@chakra-ui/react";
import { EuropeCities } from "./EuropeCities";

export function EuropeCitiesData() {
  return (
    <Box
      maxW="1160px"
      w="100%"
      maxH="1531px"
      h="100%"
      mx="auto"
      mt={{ base: "32px", sm: "80px" }}
      gap="48px"
    >
      <Heading
        ml="16px"
        fontWeight="medium"
        fontSize={{ base: "24px", sm: "36px" }}
        color="gray.500"
      >
        Cidades +100
      </Heading>
      <HStack
        mt="40px"
        wrap="wrap"
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
      </HStack>
    </Box>
  );
}
