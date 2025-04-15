import Link from "next/link";
import { SignupForm } from "../../components/Forms";
import { Text, Box, Stack } from "@chakra-ui/react";
import { useTranslations } from "next-intl";

const Register = () => {
  const t = useTranslations("Login");
  return (
    <Box w="full" maxW="400px" borderRadius="lg">
      <SignupForm />
      <Stack mt={4} direction="row" justify="center" align="center" spacing={2}>
        <Text color="gray.700" fontSize="sm">
          {t("alreadyHaveAccount")}
        </Text>
        <Link href="/login">
          <Text
            color="blue.500"
            fontSize="sm"
            fontWeight="medium"
            _hover={{ textDecor: "underline" }}
          >
            {t("login")}
          </Text>
        </Link>
      </Stack>
    </Box>
  );
};

export default Register;
