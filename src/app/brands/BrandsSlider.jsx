import { getBrands } from "../../../utils/supabase/dataActions";
import Image from "next/image";
import { Box, SimpleGrid, Button, Text } from "@chakra-ui/react";
import { HeadingForHome } from "../components/shared";
import { getTranslations } from "next-intl/server";
import Link from "next/link";
import { get } from "http";

export default async function BrandSlider({ searchParams }) {
  const brands = await getBrands();
  const showAll = searchParams?.all === "true"; // Check if ?all=true is in the URL
  const t = await getTranslations("Brands");
  // Define brand count for mobile and desktop
  const itemsToShow = showAll ? brands.length : 12; // Show all if ?all=true, else show 12
  const displayedBrands = brands.slice(0, itemsToShow);

  return (
    <Box px={{ base: "20px", md: "10px" }} bg="gray.100">
      {/* Add an anchor to keep scroll position */}
      <div id="brands"></div>

      <HeadingForHome
        theme="dark"
        heading={t("title")}
        text={t("description")}
      />

      <Box px={{ base: "1px", md: "60px", lg: "80px" }} py={{ base: 4, md: 6 }}>
        <SimpleGrid
          columns={{ base: 3, md: 5 }}
          gap={{ base: 2, md: 4 }}
          className="brand-grid"
        >
          {displayedBrands.map(({ id, name, image }) => (
            <Box
              key={id}
              as={Link} // Make the whole box clickable
              href={`/products?brand=${encodeURIComponent(name)}`}
              p={4}
              bg="white"
              display="flex"
              textAlign="center"
              borderRadius={{ base: "5px", md: "15px" }}
              boxShadow="lg"
              cursor="pointer"
              _hover={{ transform: "scale(1.05)", boxShadow: "2xl" }}
              transition="all 0.3s ease"
              width="100%"
              position="relative"
              overflow="hidden"
              aspectRatio="1"
            >
              <Image
                src={image}
                alt={name}
                style={{
                  objectFit: "contain",
                  maxWidth: "100%",
                  maxHeight: "100%",
                  margin: "0 auto",
                }}
                width={300}
                height={200}
                sizes="100%"
                unoptimized
              />
            </Box>
          ))}
        </SimpleGrid>

        {/* View All / Show Less Button */}
        <Box textAlign="center" mt={{ base: 2, md: 6 }}>
          <Button
            as={Link}
            href={showAll ? "/brands#brands" : "?all=true#brands"} // Keeps the scroll position
            background="#0E623E"
            mt={{ base: "14px", md: "40px" }}
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
              {showAll ? t("viewAll2") : t("viewAll1")}
            </Text>
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
