import {
  getBlogBySlug,
  incrementBlogViews,
} from "../../../../utils/supabase/dataActions";
import Image from "next/image";
import { Box, Heading, Text, Flex } from "@chakra-ui/react";
import { getTranslations } from "next-intl/server";

export default async function BlogPost({ params }) {
  const { slug } = await params;
  const t = await getTranslations("Blog");
  await incrementBlogViews(slug);
  const blog = await getBlogBySlug(slug);

  if (!blog) return <h1>Blog not found</h1>;

  return (
    <Box
      px={{ base: "20px", md: "40px" }}
      py={{ base: 6, md: 12 }}
      maxW="900px"
      mx="auto"
    >
      <Heading as="h1" size="xl" textAlign="center" mb={4}>
        {blog.title}
      </Heading>
      <Text fontSize="sm" color="gray.500" textAlign="center" mb={6}>
        {t("author")} {blog.author} •{" "}
        {new Date(blog.created_at).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </Text>
      <Image
        src={blog.cover_image}
        alt={blog.title}
        width={800}
        height={400}
        style={{
          borderRadius: "12px",
          objectFit: "cover",
          width: "100%",
          marginBottom: "40px",
        }}
      />
      {blog.sections.length > 0 && (
        <Box mt={{ base: "60px", md: "150px" }}>
          {blog.sections.map((section, index) => (
            <Box key={index} textAlign="left" mb={10}>
              <Text
                fontSize={{ base: "md", md: "lg" }}
                lineHeight="1.8"
                mb={4}
                px={{ base: "10px", md: "0px" }}
                dangerouslySetInnerHTML={{ __html: section.content }}
              />
              {section.image && (
                <Box display="flex" justifyContent="center">
                  <Image
                    src={section.image}
                    alt={`Section ${index + 1}`}
                    width={800}
                    height={450}
                    style={{
                      borderRadius: "12px",
                      objectFit: "cover",
                      width: "100%",
                      maxHeight: "400px",
                    }}
                  />
                </Box>
              )}
            </Box>
          ))}
        </Box>
      )}
      <Flex justify="center" mt={4}>
        <Text fontSize="sm" color="gray.500">
          {t("view")}: {blog.views}
        </Text>
      </Flex>
    </Box>
  );
}
