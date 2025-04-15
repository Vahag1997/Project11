import React from "react";
import { Box, Text, Heading, Flex } from "@chakra-ui/react";
import { Rating } from "../../ui/rating";

const TestimonialCard = ({ data }) => {
  const { name, brand, review, date } = data;

  return (
    <Box
      bg="#F7F6FB"
      boxShadow="0 4px 12px rgba(0, 0, 0, 0.1)"
      textAlign="left"
      p={{ base: "16px", md: "32px" }}
      borderRadius="10px"
      transition="all 0.2s ease-in-out"
      _hover={{
        boxShadow: "0 8px 24px rgba(0, 0, 0, 0.15)",
        transform: "translateY(-2px)",
      }}
      zIndex={9999}
      width="100%"
    >
      {/* Ensure all content is inside one container */}
      <Flex
        justify="space-between"
        flexDir="column"
        align="baseline"
        mb={2}
        minH={{ base: "150px", xl: "280px" }}
        width={{ base: "58vw", xl: "auto" }}
      >
        <Flex flexDir="column">
          <Flex align="baseline" gap="20px">
            <Heading
              whiteSpace="nowrap"
              fontSize={{ base: "17px", xl: "1.7vw" }}
              fontWeight={600}
              lineHeight={{ base: "22px", xl: "40px" }}
            >
              {name}
            </Heading>
            <Rating readOnly defaultValue={3} size="md" colorPalette="orange" />
          </Flex>

          <Text
            fontSize={{ base: "10px", xl: "20px" }}
            fontWeight={400}
            color="gray.500"
            mb={4}
          >
            {brand}
          </Text>
        </Flex>
        <Text
          fontSize={{ base: "10px", xl: "20px" }}
          lineHeight={{ base: "12px", xl: "24px" }}
          fontWeight={400}
          mb={4}
        >
          “ {review} ”
        </Text>

        <Text
          fontSize={{ base: "13px", xl: "20px" }}
          lineHeight={{ base: "12px", xl: "24px" }}
          color="#B9B9B9"
        >
          date submitted, {date}
        </Text>
      </Flex>
    </Box>
  );
};

export default TestimonialCard;
