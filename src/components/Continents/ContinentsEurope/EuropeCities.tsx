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
      <Flex>
        <Box
          w="256px"
          h="279px"
          border="1px"
          borderTop="0px"
          borderColor="yellow.500"
          borderRadius="5px"
        >
          <Image src={img} alt={title} w="256px" h="173px" />
          <Flex justifyContent="center" align="center">
            <Box pl="24px">
              <Heading fontFamily="Barlow">{title}</Heading>
              <Text>{text}</Text>
            </Box>
            <Image src={icon} alt={title} />
          </Flex>
        </Box>
      </Flex>
    </>
  );
}
