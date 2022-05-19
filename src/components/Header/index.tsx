import { Flex, Image } from "@chakra-ui/react";

export function Header() {
  return (
    <Flex
      as="header"
      justify="center"
      align="center"
      h={{ base: "50px", sm: "100px" }}
    >
      <Image
        src="Logo.svg"
        alt="Logo"
        w={{ base: "81px", sm: "184px" }}
        h={{ base: "20px", sm: "45px" }}
      />
    </Flex>
  );
}
