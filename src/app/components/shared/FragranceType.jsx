import { Box, Grid, GridItem, Button, Heading, Text } from "@chakra-ui/react";
import { HeadingForHome } from ".";
import backImg from "../../../../public/images/splitBack.webp";
import Link from "next/link";
import { useTranslations } from "next-intl";

const FragranceType = () => {
  const t = useTranslations("FragranceType");
  const f = useTranslations("FREGRANCES");

  const FREGRANCES = [
    { label: f("all"), colSpan: 2, rowSpan: 2 },
    { label: f("male"), value: "male", colSpan: 1 },
    { label: f("female"), value: "female", colSpan: 1 },
    { label: f("unisex"), value: "unisex", colSpan: 1, rowSpan: 1 },
  ];

  return (
    <Box
      textAlign="center"
      py={{ base: 0, md: 8 }}
      px={{ base: "16px", md: "90px" }}
      mb="18px"
    >
      <HeadingForHome
        heading={t("title")}
        text={t("description")}
        theme="black"
      />

      <Grid
        templateRows={{ base: "repeat(2, auto)", md: "repeat(2, 1fr)" }}
        templateColumns={{ base: "repeat(3, 1fr)", md: "repeat(4, 1fr)" }}
        gap={{ base: 1, md: 4 }}
        mb={{ base: "18px", md: 6 }}
        position="relative"
        height={{ base: "auto", md: "600px" }}
      >
        {FREGRANCES.map((item, index) => (
          <GridItem
            as={Link} // ✅ Makes the whole grid item clickable
            href={`/products${
              item.label !== f("all")
                ? `?gender=${encodeURIComponent(item.value)}`
                : ""
            }`}
            key={index}
            colSpan={{
              base: index === 0 ? 3 : 1,
              md: index === 3 ? 2 : item.colSpan,
            }}
            rowSpan={{ base: index === 0 ? 1 : "auto", md: item.rowSpan || 1 }}
            display="flex"
            alignItems="center"
            justifyContent="center"
            position="relative"
            bg="rgba(0, 0, 0, 0.8)"
            borderRadius={{ base: "6px", md: "20px" }}
            height={{
              base: item.label === f("all") ? "150px" : "88px",
              md: "auto",
            }}
            backgroundImage={`url(${backImg.src})`}
            backgroundSize="contain"
            backgroundAttachment="fixed"
            _hover={{ opacity: 0.9 }}
          >
            <Heading
              fontSize="3.33vw"
              fontWeight={600}
              lineHeight={{ base: "40px", xl: "80px" }}
              color="#ffffff"
            >
              {item.label}
            </Heading>
          </GridItem>
        ))}
      </Grid>

      <Button
        as={Link}
        href="/products"
        background="#0E623E"
        p={{ base: "4px 16px", md: "10px 24px" }}
        height={{ base: "33px", md: "auto" }}
        variant="solid"
        borderRadius={{ base: "6px", md: "14px" }}
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
};

export default FragranceType;
