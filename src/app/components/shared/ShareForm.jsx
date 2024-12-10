import React from "react";
import {
    Box,
    Flex,
    Input,
    Button,
    Textarea,
    Image,
    Text
} from "@chakra-ui/react";
import { Field } from "../ui/field";
import { HeadingForHome } from ".";

const ShareForm = ({ ...rest }) => {
    return (
        <Box bg="#093623" color="white" p={10} mx="auto" minHeight="600px" {...rest}>
            <HeadingForHome
                heading={"Got Something Share?"}
                text={"We'd love to hear from you! Whether you have a question or just want to say hello, reach out to us—we're here to help."}
            />
            <Flex
                direction={{ base: "column", md: "row" }}
                px={['20px', '50px', '100px', '155px']}
                mt="67px"
                mb="50px"
                gap={10}
                align="stretch" // Ensures both columns stretch to equal height
                justify="space-between"
                height="100%" // Full height for flex container
            >
                {/* Left Section with Image */}
                <Box flex="1" display="flex" alignItems="stretch">
                    <Image
                        src="https://s3-alpha-sig.figma.com/img/8ffa/aba8/1a4e7ba95a4b056125461fbc3bc324c6?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SABPfUbSCmwwVGMMd54dOmbi4jRSXeWD7VUkPDScwVb7NLXAPlQvaSlw~gr-0Z4dP4SrOryQCny~HlC1n1EK~HFDL4D4AQEpFtJ7YzxV8A~f7RnQlmtMhDNnq6mjH-axemYDAsZ7jlro-miy7eNbGJj6zqbhzfrpcnFmSEjflDFtO10aSdPuXUMmx7bvfzKP~Qm96EqvZalbmbwX5qXhEl1-XfbLcltPz4SgRxYzynPQryp~hYS66mQ~BtP4Gwlx5Ykm6oYxtzfdDniWTs8MSCncxVM24MB-pBG~7aL68rwsyR8m8fkD5Bm6L0UNMNP9yP-9QdRu-UuX28Qy3T2Lmg__" // Update with the actual image path
                        alt="Fragrance Display"
                        objectFit="cover"
                        borderRadius="20px"
                        width="100%"
                        height="100%" // Ensures the image takes full height
                        style={{ objectFit: "cover", minHeight: "550px" }} // Ensures it covers the height properly
                        unoptimized
                    />
                </Box>

                {/* Right Section with Form */}
                <Box flex="1" display="flex" flexDirection="column" justifyContent="space-between">
                    <Flex flexDir="column" gap="30px" height="100%">
                        {/* Full Name Input */}
                        <Flex gap={['20px', '30px', '40px', '50px']}>
                            <Field>
                                <Text fontSize="20px" fontWeight={400} mb={1}>
                                    FULL NAME
                                </Text>
                                <Input
                                    placeholder="Full Name"
                                    type="text"
                                    variant="outline"
                                    bg="white"
                                    borderRadius="8px"
                                    minH="66px"
                                    _placeholder={{ fontSize: "16px", color: "gray.500" }}
                                />

                            </Field>
                            <Field>
                                <Text fontSize="20px" fontWeight={400} mb={1}>
                                    EMAIL
                                </Text>
                                <Input
                                    placeholder="Email"
                                    type="email"
                                    variant="outline"
                                    bg="white"
                                    borderRadius="8px"
                                    minH="66px" />
                            </Field>
                        </Flex>

                        {/* Subject Input */}
                        <Flex gap="50px">
                            <Field>
                                <Text fontSize="20px" fontWeight={400} mb={1}>
                                    SUBJECT
                                </Text>
                                <Input
                                    placeholder="Subject"
                                    type="text"
                                    variant="outline"
                                    bg="white"
                                    borderRadius="8px"
                                    minH="66px"
                                />
                            </Field>

                            {/* Phone Input */}
                            <Field>
                                <Text fontSize="20px" fontWeight={400} mb={1}>
                                    PHONE
                                </Text>
                                <Input
                                    placeholder="Enter your phone"
                                    type="number"
                                    variant="outline"
                                    bg="white"
                                    borderRadius="8px"
                                    minH="66px"
                                />
                            </Field>
                        </Flex>

                        {/* Details Textarea */}
                        <Flex flexDir="column" gap="15px">
                            <Field>
                                <Text fontSize="20px" fontWeight={400} mb={1}>
                                    DETAILS
                                </Text>
                                <Textarea
                                    placeholder="Details"
                                    rows={4}
                                    borderRadius="8px"
                                    bg="white"
                                    color="black"
                                    minH="175px"
                                    resize="vertical"
                                    _placeholder={{ color: "gray.500" }}
                                />
                            </Field>

                            {/* Submit Button */}
                            <Button
                                height="65px"
                                colorScheme="teal"
                                width="255px"
                                borderRadius="8px"
                                bg="white">
                                <Text color="black" fontSize="25px">Submit</Text>
                            </Button>
                        </Flex>
                    </Flex>
                </Box>
            </Flex>
        </Box>
    );
};

export default ShareForm;
