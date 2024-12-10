import { Box, Text, VStack, HStack, Flex, Collapsible } from "@chakra-ui/react";
import { IoIosArrowDown } from "react-icons/io";
import { HeadingForHome } from ".";
import { IconContext } from "react-icons";
import { FAQS, FAQSHEADER } from "../constants/constants";



const FaqSection = () => {

    const { heading, text, theme } = FAQSHEADER

    return (
        <Flex
            mx="auto"
            mt={{ base: "6", md: "10" }}
            px={{ base: "4", md: "8", lg: "90px" }}
            mb="120px"
            flexDir="column"
            justify="center"
            align="center"
            width="100%"
        >
            <HeadingForHome heading={heading} text={text} theme={theme} />
            <VStack spacing="6" align="stretch" width="85%" mt="40px">
                {FAQS.map((faq, index) => (
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
                                    <Text flex="1" textAlign="left" lineHeight="25px" fontSize={{ base: "sm", md: "lg" }}>
                                        {faq.question}
                                    </Text>
                                    <IconContext.Provider value={{ color: "black" }}>
                                        <IoIosArrowDown style={{ width: "unset", height: "unset", fontSize: "1.8rem" }} />
                                    </IconContext.Provider>
                                </HStack>
                            </Collapsible.Trigger>
                            <Collapsible.Content>
                                <Box
                                    padding="4"
                                    color="gray.600"
                                    fontSize={{ base: "sm", md: "md" }}
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

export default FaqSection;


