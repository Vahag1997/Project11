"use client";
import { Box, Grid, GridItem, Flex, Text, Heading } from "@chakra-ui/react";
import { HeadingForHome } from "../components/shared";
import {
  HandsIcon,
  CheckIcon,
  HeartIcon,
  AvatarsIcon,
  HandLeafIcon,
  CommunityIcon,
} from "./icons/Valueicons";
import { useTranslations } from "next-intl";

const ICONS = [
  <HandsIcon />,
  <CheckIcon />,
  <HeartIcon />,
  <AvatarsIcon />,
  <HandLeafIcon />,
  <CommunityIcon />,
];

const Values = () => {
  const t = useTranslations("Values");

  return (
    <Box bg="#093623" color="white" py={{ base: "50px", md: "70px" }}>
      <HeadingForHome
        heading={t("heading")}
        text={t("description")}
      />

      <Grid
        align="stretch"
        templateColumns={{
          base: "repeat(1, minmax(0, 1fr))",
          md: "repeat(2, minmax(0, 1fr))",
          lg: "repeat(3, minmax(0, 1fr))"
        }}
        gap={{ base: 6, md: 8 }}
        px={{ base: "20px", md: "80px", xl: "120px" }}
        mt="40px"
      >
        {Array.from({ length: 6 }).map((_, index) => (
          <GridItem
            key={index}
            display="flex"
            flexDirection="column"
            height="100%"
            bg="white"
            borderRadius="20px"
            boxShadow="xl"
            transition="all 0.3s ease"
            _hover={{ transform: "scale(1.03)", boxShadow: "2xl" }}
          >
            <Flex
              direction="column"
              p={{ base: "20px", md: "25px" }}
              gap={{ base: "12px", md: "18px" }}
              height="100%"
              justify="space-between"
              flex="1"
            >
              <Flex
                flexDir="row"
                gap="16px"
                align="center"
                justify="flex-start"
                wrap="nowrap"
              >
                {ICONS[index]}
                <Heading
                  fontWeight={600}
                  fontSize={{ base: "20px", md: "26px" }}
                  lineHeight="32px"
                  color="gray.800"
                  flex="1"
                  textAlign="left"
                  noOfLines={2}
                >
                  {t(`items.${index}.name`)}
                </Heading>
              </Flex>

              <Text
                color="gray.600"
                fontWeight={400}
                fontSize={{ base: "14px", md: "15px" }}
                lineHeight="24px"
                flex="1"
                textAlign="left"
              >
                {t(`items.${index}.description`)}
              </Text>
            </Flex>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};

export default Values;
