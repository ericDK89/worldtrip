import { HStack } from "@chakra-ui/react";
import { EuropeBanner } from "./EuropeBanner";
import { EuropeCitiesData } from "./EuropeCitiesData";
import { EuropeStatic } from "./EuropeStatics";
import { EuropeText } from "./EuropeText";

export function ContinentsEurope() {
  return (
    <>
      <EuropeBanner />
      <HStack
        mt={{ base: "24px", sm: "80px" }}
        px={{ base: "16px", sm: "140px" }}
        justifyContent="space-around"
        alignItems="center"
        display={{ base: "block", sm: "flex" }}
      >
        <EuropeText />
        <EuropeStatic />
      </HStack>
      <EuropeCitiesData />
    </>
  );
}
