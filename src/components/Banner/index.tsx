import { Box, Flex, Image, Text } from "@chakra-ui/react";

export function Banner() {
  return (
    <Flex
      bgImage="url(/Background.jpg)"
      bgSize="cover"
      justify="flex-start"
      align="center"
      position="relative"
      h={{ base: "163px", sm: "335px" }}
      px="4"
    >
      <Box>
        <Text
          color="gray.100"
          fontWeight="medium"
          fontSize={{ base: "20", sm: "36px" }}
          lineHeight={{ base: "30px", sm: "54px" }}
          mb="2"
          ml={{ base: "0", sm: "140px" }}
        >
          5 Continentes, <br /> infinitas possibilidades
        </Text>
        <Text
          color="gray.200"
          fontSize={{ base: "16px", sm: "20px" }}
          lineHeight={{ sm: "30px" }}
          ml={{ base: "0", sm: "140px" }}
        >
          Chegou a hora de tirar do papel a viagem que você sempre sonhou.
        </Text>
      </Box>
      <Image
        src="Airplane.svg"
        alt="Airplane"
        display={{ base: "none", sm: "block" }}
        position="absolute"
        left="1200px"
        top="70px"
      />
    </Flex>
  );
}
