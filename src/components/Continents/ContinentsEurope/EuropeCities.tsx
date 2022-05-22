import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

interface EuropeCitiesProps {
  img: string;
  title: string;
  text: string;
  icon: string;
}

export function EuropeCities({ img, title, text, icon }: EuropeCitiesProps) {
  return (
    <>
      <Box border="1px" borderColor="yellow.500" borderRadius="5px">
        <Image src={img} alt={title}/>
        <Flex justifyContent="space-around">
          <Box p="24px">
            <Heading
              fontFamily="Barlow"
              fontWeight="semibold"
              fontSize="20px"
              color="gray.500"
              mb="12px"
            >
              {title}
            </Heading>
            <Text fontFamily="Barlow" fontSize="16px" color="gray.400">
              {text}
            </Text>
          </Box>
          <Image src={icon} alt={title} />
        </Flex>
      </Box>
    </>
  );
}
