"use client";
import React, { useState } from "react";
import { Box, Stack, Fieldset, Input} from '@chakra-ui/react'
import { Field } from "../../components/ui/field";
import AuthButton from "./AuthButton";
import { forgotPassword } from "../../(auth)/actions";
import { useTranslations } from "next-intl";

const ForgotPassword = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const t = useTranslations("Login");
  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData(event.currentTarget);
    const result = await forgotPassword(formData);
    
    if (result.status === "success") {
      alert("Password reset link sent to your email");
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
            {/* Email Input */}
            <Field label={t("email")}>
              <Input
                type="email"
                name="email"
                placeholder={t("enteryourEmail")}
                variant="filled"
              />
            </Field>
          </Fieldset.Content>
          <AuthButton type={t("forgotPassword")} loading={loading} />
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

export default ForgotPassword;
