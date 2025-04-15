"use client";
import { Box, Stack, Text, Center } from "@chakra-ui/react";
import Link from "next/link";
import { LoginForm } from "../../components/Forms";
import { useTranslations } from "next-intl";

const SignInPage = () => {
  const t = useTranslations("Login");
  return (
    <Center>
    <Box 
      w="full" 
      maxW="400px" 
      borderRadius="lg" 
    >
      <LoginForm />
      <Stack mt={4} direction="row" justify="center" align="center" spacing={2}>
        <Text color="gray.700" fontSize="sm">
          {t("dontHaveAccount")}
        </Text>
        <Link href="/register">
          <Text color="blue.500" fontSize="sm" fontWeight="medium" _hover={{ textDecor: "underline" }}>
            {t("createAccount")}
          </Text>
        </Link>
      </Stack>
    </Box>
  </Center>
  );
};

export default SignInPage;
