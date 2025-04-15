import { Box, Text, Flex, Button, Grid } from "@chakra-ui/react";
import BlogCard from "./BlogCard";
import { HeadingForHome } from "../components/shared";
import Link from "next/link";
import { getBlogs } from "../../../utils/supabase/dataActions";
import { getTranslations } from "next-intl/server";

export default async function BlogBody() {
  const blogs = await getBlogs();
const t = await getTranslations("BlogSection");
const f = await getTranslations("Blog");
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
        {blogs.map((blog, idx) => (
          <BlogCard blog={blog} idx={idx} key={blog.id} btn={f("readMore")} />
        ))}
      </Grid>

      <Flex justifyContent="space-around">
        <Button
          as={Link}
          href={"/blog"}
          mt={{ base: "14px", md: "40px" }}
          background="white"
          p={{ base: "4px 16px", md: "10px 24px" }}
          h={{ base: "28px", md: "60px" }}
          variant="solid"
          borderRadius={{ base: "6px", md: "14px" }}
        >
          <Text
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
