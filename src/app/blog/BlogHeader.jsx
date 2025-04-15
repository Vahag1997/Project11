import { Flex, Heading, Text } from "@chakra-ui/react";
import { getTranslations } from "next-intl/server";

export default async function BlogPage() {
  const t = await getTranslations("BlogHeader");
  return (
    <Flex
      align="center"
      flexDir="column"
      gap={{ base: "20px", md: "40px" }}
      px={{ base: "20px", md: "40px", lg: "80px" }}
      mt="20px"
      mb="40px"
    >
      <Heading
        fontWeight={400}
        fontSize={{ base: "32px", md: "45px", lg: "55px" }}
        lineHeight={{ base: "36px", md: "50px", lg: "60px" }}
        textAlign="center"
      >
        {t("heading")}
      </Heading>
      <Text
        fontSize={{ base: "16px", md: "20px", lg: "30px" }}
        fontWeight={400}
        lineHeight={{ base: "22px", md: "28px", lg: "38px" }}
        textAlign="center"
      >
        {t("text")}
      </Text>
    </Flex>
  );
}
