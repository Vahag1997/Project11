import { Box, Text, Heading, Flex, Button, Grid } from "@chakra-ui/react";
import Image from "next/image";
import { HeadingForHome } from ".";
import Link from "next/link";
import { getBlogs } from "../../../../utils/supabase/dataActions";
import { getTranslations } from "next-intl/server";

export default async function BlogSection() {
  const blogs = await getBlogs();
  const t = await getTranslations("BlogSection");

  return (
    <Box
      textAlign="center"
      py={8}
      px={{ base: "60px", md: "90px" }}
      background="#093623"
    >
      <HeadingForHome
        heading={t("title")}
        text={t("description")}
        suppressHydrationWarning
      />
      <Grid
        mt="20px"
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          xl: "repeat(3, 1fr)",
        }}
        gap={6}
      >
        {blogs.slice(0, 3).map((blog, idx) => (
          <Box
            key={blog.id}
            bg="white"
            borderRadius={{ base: "9px", md: "22px" }}
            boxShadow="lg"
            overflow="hidden"
            border="1px solid"
          >
            <Box height={{ base: "35.5vw", md: "25.5vw", xl: "15.5vw" }}>
              <Image
                src={blog.cover_image}
                alt={blog.title}
                width={400}
                height={250}
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
                unoptimized
                loading="lazy"
              />
            </Box>
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
                {blog.title}
              </Heading>
              <Text
                fontSize={{ base: "10px", md: "20px" }}
                color="gray.600"
                textAlign="left"
                lineHeight={{ base: "11px", md: "21px" }}
              >
                {blog.excerpt}
              </Text>
              <Button
                as={Link}
                href={`/blog/${blog.slug}`}
                h={{ base: "20px", md: "40px" }}
                background="#0E623E"
                borderRadius={{ base: "4px", md: "10px" }}
                alignSelf="flex-start"
                mt={{ base: "10px", md: "20px" }}
              >
                <Text
                  textAlign="left"
                  fontSize={{ base: "9px", md: "20px" }}
                  fontWeight={400}
                  lineHeight={{ base: "11px", md: "24px" }}
                >
                  Read More
                </Text>
              </Button>
            </Flex>
            <Box
              bg="gray.50"
              px={{ base: "8px", md: "18px" }}
              paddingBottom={{ base: "8px", md: "12px" }}
              textAlign="left"
            >
            </Box>
          </Box>
        ))}
      </Grid>

      <Flex justifyContent="space-around" suppressHydrationWarning>
        <Button
          as={Link}
          suppressHydrationWarning
          href={"/blog"}
          mt={{ base: "14px", md: "40px" }}
          background="white"
          p={{ base: "4px 16px", md: "10px 24px" }}
          h={{ base: "28px", md: "60px" }}
          variant="solid"
          borderRadius={{ base: "6px", md: "14px" }}
        >
          <Text
            suppressHydrationWarning
            color="black"
            fontSize={{ base: "12px", md: "1.36vw" }}
            fontWeight={{ base: 400, md: 600 }}
            lineHeight={{ base: "15px", md: "37px" }}
          >
            {t("button")}
          </Text>
        </Button>
      </Flex>
    </Box>
  );
}
