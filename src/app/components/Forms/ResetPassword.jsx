"use client";
import React, { useState } from "react";
import AuthButton from "./AuthButton";
import { Box, Input, Stack, Text, Fieldset } from "@chakra-ui/react";
import { Field } from "../../components/ui/field";
import { useRouter, useSearchParams } from "next/navigation";
import { resetPassword } from "../../(auth)/actions";
import { useTranslations } from "next-intl";

const ResetPassword = () => {
  const searchParams = useSearchParams();
  const [error, setError] = useState(null);
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const t = useTranslations("Login");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData(event.currentTarget);
    const result = await resetPassword(formData, searchParams.get("code"));

    if (result.status === "success") {
      router.push("/");
    } else {
      setError(result.status);
    }

    setLoading(false);
  };
  return (
<Box
  maxW="400px"
  mx="auto"
  borderRadius="lg"
>
  <form onSubmit={handleSubmit}>
    <Stack spacing={6} mt={8}>
      <Fieldset.Root>
        <Fieldset.Content>
          {/* New Password Input */}
          <Field label={t("newPassword")}>
            <Input
              type="password"
              name="password"
              placeholder={t("enternewPassword")}
              variant="filled"
            />
          </Field>
        </Fieldset.Content>
        <AuthButton type={t("resetPassword")} loading={loading} />
      </Fieldset.Root>

      {/* Error Message */}
      {error && (
        <Text color="red.500" fontSize="sm" textAlign="center">
          {error}
        </Text>
      )}
    </Stack>
  </form>
</Box>

  );
};

export default ResetPassword;
