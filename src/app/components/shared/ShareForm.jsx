"use client";
import React, { useState } from "react";
import {
  Box,
  Flex,
  Input,
  Button,
  Textarea,
  Image,
  Text,
} from "@chakra-ui/react";
import { Field } from "../ui/field";
import { HeadingForHome } from ".";
import { useTranslations } from "next-intl";

const ShareForm = ({ ...rest }) => {
  const t = useTranslations("ShareForm");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    phone: "",
    details: "",
  });

  return (
    <Box
      bg="#093623"
      color="white"
      py={{ base: 5, md: 8 }}
      mx="auto"
      minHeight="600px"
      {...rest}
    >
      <HeadingForHome
        heading={t("title")}
        text={t("description")}
        mb={{ base: 4, md: 10 }}
      />
      <Flex
        direction={{ base: "column", lg: "row" }}
        px={{ base: "20px", sm: "50px", xl: "115px" }}
        mt={{ base: "15px", md: "67px" }}
        mb={{ base: "20px", md: "50px" }}
        gap={{ base: 6, md: 10 }}
        align="stretch"
        justify="space-between"
      >
        {/* Left Section with Image */}
        <Box flex="1" display="flex" alignItems="stretch">
          <Image
            src="/share-form.webp"
            alt="Fragrance Display"
            objectFit="cover"
            borderRadius="20px"
            width="100%"
            height={{ base: "300px", md: "100%" }}
          />
        </Box>

        {/* Right Section with Form */}
        <Box
          flex="1"
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
        >
          <Flex flexDir="column" gap={6} height="100%">
            {/* Full Name & Email */}
            <Flex
              direction={{ base: "column", md: "row" }}
              gap={{ base: "10px", md: "30px" }}
            >
              <Field>
                <Text fontSize={{ base: "13px", md: "18px" }} fontWeight={400}>
                  {t("fullName")}
                </Text>
                <Input
                  placeholder={t("fullNamePlaceholder")}
                  type="text"
                  variant="outline"
                  bg="white"
                  borderRadius="8px"
                  minH="3.4vw"
                  _placeholder={{ fontSize: "16px", color: "gray.500" }}
                />
              </Field>
              <Field>
                <Text fontSize={{ base: "13px", md: "18px" }} fontWeight={400}>
                  {t("email")}
                </Text>
                <Input
                  placeholder={t("emailPlaceholder")}
                  type="email"
                  variant="outline"
                  bg="white"
                  borderRadius="8px"
                  minH="3.4vw"
                />
              </Field>
            </Flex>

            {/* Subject & Phone */}
            <Flex
              direction={{ base: "column", md: "row" }}
              gap={{ base: "10px", md: "30px" }}
            >
              <Field>
                <Text fontSize={{ base: "13px", md: "18px" }} fontWeight={400}>
                  {t("subject")}
                </Text>
                <Input
                  placeholder={t("subjectPlaceholder")}
                  type="text"
                  variant="outline"
                  bg="white"
                  borderRadius="8px"
                  minH="3.4vw"
                />
              </Field>
              <Field>
                <Text fontSize={{ base: "13px", md: "18px" }} fontWeight={400}>
                  {t("phone")}
                </Text>
                <Input
                  placeholder={t("phonePlaceholder")}
                  type="number"
                  variant="outline"
                  bg="white"
                  borderRadius="8px"
                  minH="3.4vw"
                />
              </Field>
            </Flex>

            {/* Details & Submit */}
            <Flex
              direction="column"
              gap={4}
              align={{ base: "center", md: "stretch" }}
            >
              <Field width="100%">
                <Text fontSize={{ base: "13px", md: "18px" }} fontWeight={400}>
                  {t("details")}
                </Text>
                <Textarea
                  placeholder={t("detailsPlaceholder")}
                  rows={4}
                  borderRadius="8px"
                  bg="white"
                  color="black"
                  minH="175px"
                  resize="vertical"
                  _placeholder={{ color: "gray.500" }}
                />
              </Field>
              <Button
                minH="3.4vw"
                colorScheme="teal"
                width={{ base: "100%", md: "255px" }}
                borderRadius="8px"
                bg="white"
              >
                <Text color="black" fontSize={{ base: "16px", md: "20px" }}>
                  {t("submit")}
                </Text>
              </Button>
            </Flex>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default ShareForm;
