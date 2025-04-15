import { Flex, Box, Heading, Text, Button } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

const BlogCard = ({ blog, idx, btn }) => {
  const { cover_image, title, excerpt, slug, created_at } = blog || {};

  return (
    <Box
      key={idx}
      as={Link}
      href={`/blog/${slug}`}
      passHref
      bg="white"
      borderRadius={{ base: "9px", md: "22px" }}
      boxShadow="lg"
      overflow="hidden"
      border="1px solid"
      display={{
        base: idx < 1 ? "block" : "none",
        md: idx < 2 ? "block" : "none",
        xl: idx < 3 ? "block" : "none",
      }}
    >
      {/* Image Section */}
      <Box height={{ base: "35.5vw", md: "25.5vw", xl: "15.5vw" }}>
        <Image
          src={cover_image}
          alt={title}
          width={400}
          height={250}
          style={{ objectFit: "cover", width: "100%", height: "100%" }}
          unoptimized
          loading="lazy"
        />
      </Box>

      {/* Content Section */}
      <Flex
        padding={{ base: "12px 9px", md: "20px 18px" }}
        gap={{ base: "7px", md: "10px" }}
        flexDir="column"
        align="stretch"
      >
        <Heading
          fontSize={{ base: "15px", md: "30px" }}
          fontWeight={600}
          lineHeight={{ base: "20px", md: "32px" }}
          textAlign="left"
          maxW="500px"
        >
          {title}
        </Heading>
        <Text
          fontSize={{ base: "10px", md: "20px" }}
          color="gray.600"
          textAlign="left"
          lineHeight={{ base: "11px", md: "21px" }}
        >
          {excerpt}
        </Text>

        {/* ✅ Remove `as={Link}` to prevent nested <a> */}
        <Button
          h={{ base: "20px", md: "40px" }}
          background="#0E623E"
          borderRadius={{ base: "4px", md: "10px" }}
          alignSelf="flex-start"
          mt={{ base: "10px", md: "20px" }}
          _hover={{ background: "#09532C" }}
        >
          <Text
            textAlign="left"
            fontSize={{ base: "9px", md: "20px" }}
            fontWeight={400}
            lineHeight={{ base: "11px", md: "24px" }}
          >
           {btn}
          </Text>
        </Button>
      </Flex>

      {/* Footer Section */}
      <Box
        bg="gray.50"
        px={{ base: "8px", md: "18px" }}
        paddingBottom={{ base: "8px", md: "12px" }}
        textAlign="left"
      >
        <Text
          paddingTop="8px"
          fontSize={{ base: "9px", md: "20px" }}
          lineHeight={{ base: "11px", md: "24px" }}
        >
          {new Date(created_at).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </Text>
      </Box>
    </Box>
  );
};

export default BlogCard;
