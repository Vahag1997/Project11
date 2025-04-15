import {
  Box,
  Flex,
  Stack,
  Text,
  Button,
  IconButton,
  Grid,
  Separator,
  HStack,
} from "@chakra-ui/react";
import {
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaYoutube,
  FaWhatsapp,
  FaPhoneAlt,
  FaViber,
} from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { NAVLINKS } from "../constants/constants";

const Footer = async () => {
  const t = await getTranslations("Footer");
  const t2 = await getTranslations();
  return (
    <Box bg="#083522F2" color="white" py={12} px={{ base: 6, md: 20 }}>
      {/* Top Section - Logo */}
      <Stack align="center" spacing={3} mb={16}>
        <Flex width="100%" align="center" gap={12}>
          <Separator flex="1" />
          <Box flexShrink="0">
            <Image
              src="/narfume.webp"
              alt="NARFFUM Logo"
              width={280}
              height={80}
            />
          </Box>
          <Separator flex="1" />
        </Flex>
        <Text fontSize="xl" opacity={0.5} fontWeight={700} lineHeight="40px">
          {t("tagline")}
        </Text>
      </Stack>

      {/* Main Grid */}
      <Grid templateColumns={{ base: "1fr", md: "1fr 1fr 1fr" }} gap={10}>
        {/* Left Column - Newsletter */}
        <Stack spacing={4}>
          <Text
            fontWeight={700}
            lineHeight="35px"
            letterSpacing={0}
            fontSize="20px"
          >
            {t("joinTitle")}
          </Text>
          <Text
            fontWeight={700}
            lineHeight="30px"
            letterSpacing={0}
            fontSize="20px"
            mt={6}
          >
            {t("joinDescription")}
          </Text>

          <Button w="fit-content" bg="white" color="black" size="sm">
            <Link href="/register">
              <Text
                fontWeight={700}
                lineHeight="30px"
                letterSpacing={0}
                fontSize="17px"
                color={"black"}
              >
                {t("signUp")}
              </Text>
            </Link>
          </Button>

          <Text
            fontWeight={700}
            lineHeight="30px"
            letterSpacing={0}
            fontSize="20px"
            mt={6}
          >
            {t("signInPrompt")}
          </Text>
          <Button
            href="/login"
            w="fit-content"
            bg="white"
            color="black"
            size="sm"
          >
            <Link href="/login">
              <Text
                fontWeight={700}
                lineHeight="30px"
                letterSpacing={0}
                fontSize="17px"
                color={"black"}
              >
                {t("signIn")}
              </Text>
            </Link>
          </Button>
        </Stack>
        {/* Center Column - Nav Links */}
        <Stack
          gap={6}
          direction="column"
          align={{ md: "start", md: "center" }}
          justify={{ md: "start" }}
        >
          {NAVLINKS.map((nav) => (
            <Link
              key={nav.key}
              href={`/${nav.key === "home" ? "" : nav.key}`}
              _hover={{ textDecoration: "underline" }}
            >
              <Text
                fontSize="30px"
                fontWeight={400}
                lineHeight="100%"
                letterSpacing={0}
              >
                {t2(`Navigation.${nav.key}`)}
              </Text>
            </Link>
          ))}
        </Stack>

        {/* Right Column - Social & Contact */}
        <Stack spacing={4} justify="space-between">
          <Box>
            <Text
              fontWeight={700}
              lineHeight="30px"
              letterSpacing={0}
              fontSize="20px"
            >
              {t("socialTitle")}
            </Text>
            <Text
              fontWeight={700}
              lineHeight="30px"
              letterSpacing={0}
              fontSize="20px"
            >
              {t("newsAndUpdates")}:
            </Text>
            <Flex pt={2} gap={2} wrap="wrap">
              <IconButton
                background={"none"}
                aria-label="Facebook"
                isRound
                size="2xl"
              >
                <FaFacebook />
              </IconButton>
              <IconButton
                background={"none"}
                aria-label="Instagram"
                isRound
                size="2xl"
              >
                <FaInstagram />
              </IconButton>
              <IconButton
                background={"none"}
                aria-label="TikTok"
                isRound
                size="2xl"
              >
                <FaTiktok />
              </IconButton>
              <IconButton
                background={"none"}
                aria-label="YouTube"
                isRound
                size="2xl"
              >
                <FaYoutube />
              </IconButton>
              <IconButton
                background={"none"}
                aria-label="WhatsApp"
                isRound
                size="2xl"
              >
                <FaWhatsapp />
              </IconButton>
              <IconButton
                background={"none"}
                aria-label="Viber"
                isRound
                size="2xl"
              >
                <FaViber />
              </IconButton>
            </Flex>
          </Box>

          <Box>
            <Text
              fontWeight={700}
              lineHeight="30px"
              letterSpacing={0}
              fontSize="20px"
            >
              {t("workingHours")}
            </Text>
            <Text>{t("workingTime")}</Text>
          </Box>

          <Flex flexDir={"column"}>
            <Text
              fontWeight={700}
              lineHeight="30px"
              letterSpacing={0}
              fontSize="20px"
            >
              {t("feedback")}
            </Text>
            <Flex justify={"space-between"}>
              <Flex justify={"space-between"}>
                <Button
                  variant="solid"
                  background={"white"}
                  mt={2}
                  borderRadius={"12px"}
                  p={6}
                >
                  <FaPhoneAlt color="black" />
                  <Text
                    fontWeight={700}
                    lineHeight="30px"
                    letterSpacing={0}
                    fontSize="17px"
                    color={"black"}
                  >
                    +374 55 650 750
                  </Text>
                </Button>
              </Flex>

              <Box>
                <Text
                  fontWeight={700}
                  lineHeight="30px"
                  letterSpacing={0}
                  fontSize="17px"
                >
                  {t("email")}
                </Text>
                <Link
                  href="mailto:narffum@gmail.com"
                  fontWeight={700}
                  letterSpacing={0}
                  fontSize="17px"
                >
                  narffum@gmail.com
                </Link>
              </Box>
            </Flex>
          </Flex>
        </Stack>
      </Grid>
      <HStack gap={10} mt={16}>
        <Text
          flexShrink="0"
          fontWeight={400}
          fontSize="17px"
          lineHeight="25px"
          letterSpacing="0%"
        >
          Copyright © 2024
        </Text>
        <Separator flex="1" my={8} />
      </HStack>
    </Box>
  );
};

export default Footer;
