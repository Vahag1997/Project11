import { Box, Text, VStack, HStack, Flex, Collapsible } from "@chakra-ui/react";
import { IoIosArrowDown } from "react-icons/io";
import { HeadingForHome } from ".";
import { getTranslations } from "next-intl/server";

export default async function FaqSection() {

  const t = await getTranslations("FaqSection");
  const faqs = t.raw("faqs"); 
  return (
    <Flex
      mx="auto"
      mt={{ base: "6", md: "10" }}
      px={{ base: "4", md: "8", lg: "90px" }}
      mb={{ base: "30px", md: "120px" }}
      flexDir="column"
      justify="center"
      align="center"
      width="100%"
    >
      <HeadingForHome heading={t("title")} text={t("description")} theme="black" />
      <VStack spacing="6" align="stretch" width="85%" mt="40px">
        {faqs.map((faq, index) => (
          <Box
            key={index}
            borderBottom="1px solid"
            borderColor="gray.300"
            pb="4"
            width="100%"
          >
            <Collapsible.Root>
              <Collapsible.Trigger paddingY="3" width="100%">
                <HStack justify="space-between" align="center" width="100%">
                  <Text
                    color="black"
                    flex="1"
                    textAlign="left"
                    lineHeight={{ base: "22px", md: "43px" }}
                    fontSize={{ base: "16px", md: "25px", xl: "30px" }}
                    fontWeight={400}
                  >
                    {faq.question}
                  </Text>
                    <IoIosArrowDown
                      style={{
                        width: "unset",
                        height: "unset",
                        fontSize: "1.5rem",
                      }}
                    />
                </HStack>
              </Collapsible.Trigger>
              <Collapsible.Content>
                <Box
                  padding="4"
                  color="gray.600"
                  fontSize={{ base: "md", md: "lg" }}
                  textAlign="left"
                >
                  {faq.answer}
                </Box>
              </Collapsible.Content>
            </Collapsible.Root>
          </Box>
        ))}
      </VStack>
    </Flex>
  );
};

