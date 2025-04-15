import { ResetPassword } from "../../components/Forms";
import { Box, Heading, Container } from "@chakra-ui/react";
import { useTranslations } from "next-intl";

export default function ResetPasswordPage() {

  const t = useTranslations("Login");
  return (
    <Container maxW="md" centerContent>
      <Box w="100%" p={6}>
        <Heading
          fontSize="30px"
          textAlign="center"
          fontWeight={600}
          color="gray.700"
        >
          {t("resetPassword")}
        </Heading>
        <ResetPassword />
      </Box>
    </Container>
  );
}
