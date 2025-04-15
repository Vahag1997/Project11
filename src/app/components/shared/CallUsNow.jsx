import { Flex, Text, Button, Heading } from "@chakra-ui/react";
import { getTranslations } from "next-intl/server";

export default async function CallUsNow() {
  const t = await getTranslations("CallUsNow");
  return (
    <Flex
      backgroundImage="linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/images/BackTheme.webp')"
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      height={{ base: "280px", md: "320px", lg: "400px" }}
      align="center"
      justify="space-between"
      px={{ base: "20px", md: "60px", lg: "90px" }}
      py={{ base: "30px", md: "40px", lg: "60px" }}
      flexDirection={{ base: "column", md: "row" }}
      textAlign={{ base: "center", md: "left" }}
      boxShadow="0 4px 15px rgba(0, 0, 0, 0.3)"
      overflow="hidden"
    >
      <Flex
        flexDir="column"
        gap="15px"
        flex="1"
        maxW={{ base: "90%", md: "60%" }}
        padding={{ base: "20px", md: "0px" }}
      >
        <Heading
          fontSize={{ base: "28px", md: "45px", lg: "53px" }}
          fontWeight={600}
          lineHeight={{ base: "28px", md: "48px", lg: "58px" }}
          color="white"
          textShadow="1px 1px 3px rgba(0, 0, 0, 0.6)"
        >
          {t("title")}
        </Heading>
        <Text
          fontSize={{ base: "15px", md: "25px", lg: "32px" }}
          fontWeight={400}
          lineHeight={{ base: "16px", md: "30px", lg: "34px" }}
          color="white"
          textShadow="1px 1px 2px rgba(0, 0, 0, 0.5)"
          maxW="800px"
          mx={{ base: "auto", md: "0" }}
        >
          {t("description")}
        </Text>
      </Flex>
      <Button
        as="a"
        href="tel:+37494997884"
        mt={{ base: 4, md: 6 }}
        minW={{ base: "200px", md: "250px", lg: "300px" }}
        minH={{ base: "50px", md: "65px", lg: "75px" }}
        background="#0E623E"
        borderRadius="20px"
        _hover={{
          background: "#097246",
          transform: "scale(1.05)",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
        }}
        mx={{ base: "auto", md: "0" }}
      >
        <Text
          fontWeight={400}
          fontSize={{ base: "18px", md: "24px", lg: "27px" }}
          lineHeight={{ base: "22px", md: "30px", lg: "34px" }}
          color="white"
        >
          {t("button")}
        </Text>
      </Button>
    </Flex>
  );
}
