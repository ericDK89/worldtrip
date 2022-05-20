import { Flex, Image, Text, useBreakpointValue } from "@chakra-ui/react";

interface TravelTypesListProps {
  img: string;
  text: string;
}

export function TravelTypesList({ img, text }: TravelTypesListProps) {
  const isWideVersion = useBreakpointValue({
    base: true,
    sm: false,
  });

  return (
    <Flex align="center" direction={{ base: "row", sm: "column" }} justify="center">
      {isWideVersion ? (
        <Image src="YellowDot.png" alt="YellowDot" />
      ) : (
        <Image src={img} alt={text} />
      )}
      <Text
        color="gray.500"
        fontSize={{ base: "18px", sm: "24px" }}
        fontWeight={{ base: "medium", sm: "semibold" }}
        textAlign="center"
      >
        {text}
      </Text>
    </Flex>
  );
}
