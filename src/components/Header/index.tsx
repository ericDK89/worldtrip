import { Flex, Icon, Image } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { CaretLeft } from "phosphor-react";

export function Header() {
  const { asPath } = useRouter();
  const notHomePage = asPath !== "/";

  return (
    <Flex
      as="header"
      justify="center"
      align="center"
      h={{ base: "50px", sm: "100px" }}
      position="relative"
    >
      {notHomePage && (
        <Link href="/" passHref>
          <a>
            <Icon
              as={CaretLeft}
              position="absolute"
              left={{ base: "16px", sm: "140px" }}
              top={{ base: "17px", sm: "34px" }}
              fontSize={{ base: "16px", sm: "32px" }}
              color="gray.500"
            />
          </a>
        </Link>
      )}
      <Image
        src="/Logo.svg"
        alt="Logo"
        w={{ base: "81px", sm: "184px" }}
        h={{ base: "20px", sm: "45px" }}
      />
    </Flex>
  );
}
