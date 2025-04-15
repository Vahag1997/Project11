import { Box, Grid, GridItem, Button, Text } from "@chakra-ui/react";
import { HeadingForHome } from ".";
import { BRANDS } from "../constants/constants";
import Image from "next/image";
import Link from "next/link";
import { getTranslations  } from "next-intl/server"

export default async function PopularBrands() {

  const t = await getTranslations("PopularBrands");
  return (
    <Box
      textAlign="center"
      py={{ base: 3, md: 8 }}
      px={{ base: "24px", md: "90px" }}
    >
      <HeadingForHome
        heading={t("title")}
        text={t("description")}
        theme="black"
      />
      <Grid
        templateColumns={{ base: "repeat(3, 1fr)", md: "repeat(4, 1fr)" }}
        gap={{ base: 2, md: 4 }}
      >
        {BRANDS.map((brand, index) => (
          <GridItem
            key={index}
            as={Link} // ✅ Make entire box clickable
            href={`/products?brand=${encodeURIComponent(brand.name)}`}
            display={{ base: index < 6 ? "flex" : "none", md: "flex" }}
            alignItems="center"
            justifyContent="center"
            bg="white"
            borderRadius={{ base: "5px", md: "20px" }}
            boxShadow="md"
            _hover={{ transform: "scale(1.05)", boxShadow: "2xl" }}
            transition="all 0.3s ease"
            border="1px solid rgb(183, 158, 158)"
            p={4}
            cursor="pointer"
            minH={{ base: "104px", md: "120px" }}
          >
            <Image
              src={brand.logo}
              alt={brand.name}
              height={305}
              width={400}
              style={{ objectFit: "contain" }}
            />
          </GridItem>
        ))}
      </Grid>

      <Button
        as={Link}
        href="/brands"
        background="#0E623E"
        mt={{ base: "14px", md: "40px" }}
        p={{ base: "4px 16px", md: "10px 24px" }}
        height={{ base: "33px", md: "auto" }}
        variant="solid"
        borderRadius={{ base: "6px", md: "14px" }}
        _hover={{ bg: "#09532C" }}
      >
        <Text
          fontSize={{ base: "12px", md: "1.36vw" }}
          fontWeight={{ base: 400, md: 600 }}
          lineHeight={{ base: "15px", md: "37px" }}
        >
          {t("viewAll")}
        </Text>
      </Button>
    </Box>
  );
}
