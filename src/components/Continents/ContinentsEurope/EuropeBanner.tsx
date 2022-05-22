import { Box, Heading } from "@chakra-ui/react";

export function EuropeBanner() {
  return (
    <Box
      w="100%"
      mx="auto"
      h={{ base: "150px", sm: "500px" }}
      display="flex"
      alignItems={{ base: "center", sm: "flex-end" }}
      justifyContent={{ base: "center", sm: "start" }}
      bgImage="/bannerEurope.png"
      bgRepeat="no-repeat"
      bgSize="cover"
      bgPos="bottom"
    >
      <Heading
        ml={{ base: "0px", sm: "140px" }}
        mb={{ base: "0px", sm: "59px" }}
        color="gray.100"
        fontWeight="semibold"
        fontSize={{ base: "28px", sm: "48px" }}
      >
        Europa
      </Heading>
    </Box>
  );
}
