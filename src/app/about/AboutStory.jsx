import { Box, Heading, Flex, Text, Button, Icon } from "@chakra-ui/react";
import { FiPhone } from "react-icons/fi";
import { HeadingForHome } from "../components/shared";
import Image from "next/image";
import Link from "next/link";
import { getTranslations } from "next-intl/server";

export default async function AboutStory() {
  
  const t = await getTranslations("AboutStory");

  return (
    <Box
      textAlign="center"
      px={{ base: "16px", md: "32px", lg: "64px" }}
      py={{ base: "10px", md: "60px", lg: "80px" }}
      bg="gray.50"
    >
      <HeadingForHome
        theme="dark"
        heading={t("contactHeading")}
        text={t("contactText")}
        mb={{ base: 4, md: 10 }}
      />
      <Flex
        direction={{ base: "column", xl: "row" }}
        gap={{ base: 2, md: 4 }}
        align="stretch"
        justify="center"
        minH="520px"
      >
        {/* Image Section */}
        <Box
          flex={{ base: "none", md: "1" }}
          display="flex"
          alignItems="center"
          justifyContent="center"
          height="35vw"
        >
          <Image
            src="/aboutImage/aboutPage.webp"
            alt={t("imageAlt")}
            width={600}
            height={500}
            objectFit="cover"
            priority
            unoptimized
            style={{ objectFit: "cover", width: "100%", height: "100%" }}
          />
        </Box>

        {/* Content Section */}
        <Flex
          flex="1"
          direction="column"
          gap={{ base: 4, md: 6 }}
          justify="space-around"
          align={{ base: "center", md: "flex-start" }}
        >
          <Flex flexDir="column" gap="30px">
            <Heading
              fontWeight="bold"
              lineHeight={{ base: "48px", md: "72px" }}
              fontSize={{ base: "32px", md: "58px" }}
              textAlign={{ base: "center", md: "left" }}
            >
              {t("ourStory")}
            </Heading>

            <Text
              fontSize={{ base: "16px", md: "25px" }}
              fontWeight="400"
              lineHeight={{ base: "28px", md: "35px" }}
              textAlign={{ base: "center", md: "left" }}
              color="gray.600"
            >
              {t("storyText")}
            </Text>
          </Flex>

          <Flex
            direction={{ base: "row", md: "column" }}
            gap="6"
            align={{ base: "center", md: "flex-start" }}
          >
            <Button
              as={Link}
              href="/products"
              minW={{ base: "100px", md: "150px", xl: "220px" }}
              height={{ base: "45px", md: "55px", xl: "65px" }}
              background="#0E623E"
              color="white"
              borderRadius="full"
              _hover={{ bg: "green.800" }}
            >
              <Text fontSize={{ base: "16px", md: "25px" }} fontWeight="500">
                {t("viewOffers")}
              </Text>
            </Button>

            <Flex gap="4" align="center">
              <Button
                as="a"
                href="tel:+37494997884"
                width={{ base: "45px", md: "55px", xl: "65px" }}
                height={{ base: "45px", md: "55px", xl: "65px" }}
                borderRadius="50%"
                background="#0E623E"
                _hover={{ background: "#0C5633" }}
              >
                <Icon fontSize="35px">
                  <FiPhone />
                </Icon>
              </Button>

              <Flex direction="column" align="baseline">
                <Text fontSize={{ base: "12px", md: "22px" }} fontWeight="500">
                  {t("callUs")}
                </Text>
                <Text fontSize={{ base: "12px", md: "22px" }} color="gray.500">
                  +374 (949) 997-884
                </Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
}
