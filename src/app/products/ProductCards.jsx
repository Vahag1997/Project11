"use client";

import { Flex, Box, Button, Text } from "@chakra-ui/react";
import { SingleCard } from "../components/shared";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

const ProductCards = ({ products, currentPage, total }) => {
  const router = useRouter();
  const perPage = 12;
  const totalPages = Math.ceil(total / perPage);
  const t = useTranslations("ProductCards");

  const goToPage = (page) => {
    const params = new URLSearchParams(window.location.search);
    params.set("page", page);
    router.replace(`/products?${params.toString()}`, { scroll: false });
  };

  // Utility to generate page numbers for compact view
  const generatePages = () => {
    const pages = [];
    if (totalPages <= 7) {
      // Less than 7 pages — show all
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Large number of pages — compact logic
      pages.push(1); // Always show first page

      if (currentPage > 4) {
        pages.push("..."); // Add "..." before current block if needed
      }

      const beforeCurrent = Math.max(2, currentPage - 2);
      const afterCurrent = Math.min(totalPages - 1, currentPage + 2);

      for (let i = beforeCurrent; i <= afterCurrent; i++) {
        pages.push(i);
      }

      if (currentPage < totalPages - 3) {
        pages.push("..."); // Add "..." after current block if needed
      }

      pages.push(totalPages); // Always show last page
    }
    return pages;
  };

  const pages = generatePages();

  return (
    <Flex flexDir="column" align="center" justify="center">
      <Flex wrap="wrap" justify="center" gap="15px">
        {products.map((product) => (
          <Box
            cursor={{ base: "pointer" }}
            key={product.id}
            flex="1"
            minW={{
              base: "calc(50% - 10px)",
              sm: "calc(33.333% - 15px)",
              "2xl": "calc(25% - 15px)",
            }}
            // maxW={{
            //   base: "calc(50% - 10px)",
            //   sm: "calc(33.333% - 15px)",
            //   "2xl": "calc(32% - 15px)",
            // }}
            background="#EEE2D8"
            borderRadius="lg"
          >
            <SingleCard product={product} />
          </Box>
        ))}
      </Flex>

      {/* Pagination Controls */}
      <Flex mt="20px" gap="5px" wrap="wrap" justify="center" align="center">
        {/* Previous Button */}
        <Button
          onClick={() => goToPage(currentPage - 1)}
          isDisabled={currentPage <= 1}
          variant="outline"
          colorScheme="green"
        >
          {t("prev")}
        </Button>

        {/* Page Numbers (compact) */}
        {pages.map((page, index) =>
          page === "..." ? (
            <Text key={index} mx="2" fontWeight="bold">
              ...
            </Text>
          ) : (
            <Button
              key={page}
              onClick={() => goToPage(page)}
              variant={currentPage === page ? "solid" : "outline"}
              colorScheme="green"
            >
              {page}
            </Button>
          )
        )}

        {/* Next Button */}
        <Button
          onClick={() => goToPage(currentPage + 1)}
          isDisabled={currentPage >= totalPages}
          variant="outline"
          colorScheme="green"
        >
          {t("next")}
        </Button>
      </Flex>
    </Flex>
  );
};

export default ProductCards;
