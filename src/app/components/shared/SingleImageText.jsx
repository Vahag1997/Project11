import { Box, Text, Heading } from "@chakra-ui/react";
import { getTranslations } from "next-intl/server";

export default async function SingleImageText({ section, img }) {
  const t = await getTranslations("SingleImageText");

  return (
    <Box
      as="section"
      position="relative"
      backgroundImage={`url(${img})`}
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      height={{ base: "400px", md: "500px", lg: "600px" }}
      display="flex"
      alignItems="center"
      justifyContent="center"
      color="white"
      textAlign="center"
      px={{ base: 4, md: 8 }}
    >
      {/* Dark Overlay */}
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        bg="rgba(0, 0, 0, 0.5)"
        zIndex={0}
      />

      {/* Text Content */}
      <Box position="relative" zIndex={1} maxW="800px" px={4}>
        <Heading
          as="h2"
          fontSize={{ base: "4xl", md: "60px" }}
          fontWeight={700}
          lineHeight="70px"
          mb={4}
        >
          {t(`${section}.heading`)}
        </Heading>
        <Text
          fontSize={{ base: "md", md: "lg" }}
          fontWeight={400}
          lineHeight="29px"
        >
          {t(`${section}.description`)}
        </Text>
      </Box>
    </Box>
  );
}
