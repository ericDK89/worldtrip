import { Box, HStack, Text } from "@chakra-ui/react";

export function EuropeStatic() {
  return (
    <HStack justifyContent="space-around" maxW="490px" w="100%">
      <Box >
        <Text
          fontSize={{ base: "24px", sm: "48px" }}
          fontWeight="semibold"
          color="yellow.500"
          textAlign="center"
        >
          50
        </Text>
        <Text
          fontSize={{ base: "18px", sm: "24px" }}
          color="gray.500"
          fontWeight="semibold"
        >
          países
        </Text>
      </Box>

      <Box>
        <Text
          fontSize={{ base: "24px", sm: "48px" }}
          fontWeight="semibold"
          color="yellow.500"
          textAlign="center"
        >
          60
        </Text>
        <Text
          fontSize={{ base: "18px", sm: "24px" }}
          color="gray.500"
          fontWeight="semibold"
        >
          línguas
        </Text>
      </Box>

      <Box>
        <Text
          fontSize={{ base: "24px", sm: "48px" }}
          fontWeight="semibold"
          color="yellow.500"
          textAlign="center"
        >
          27
        </Text>
        <Text
          fontSize={{ base: "18px", sm: "24px" }}
          color="gray.500"
          fontWeight="semibold"
        >
          cidades +100
        </Text>
      </Box>
    </HStack>
  );
}
