"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import AuthButton from "./AuthButton";
import { GoogleLoginButton, FacebookLoginButton } from "../../components/Forms";
import {
  Box,
  Heading,
  Input,
  Stack,
  Text,
  Fieldset,
  Flex,
} from "@chakra-ui/react";
import { Field } from "../../components/ui/field";
import { login } from "../../(auth)/actions";
import Link from "next/link";
import { useTranslations } from "next-intl";

const LoginForm = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const router = useRouter();
  const t = useTranslations("Login");

  const validateForm = () => {
    let tempErrors = {};
    if (!formData.email.includes("@"))
      tempErrors.email = "Invalid email address";
    if (formData.password.length < 6)
      tempErrors.password = "Password must be at least 6 characters";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    if (!validateForm()) {
      setLoading(false);
      return;
    }

    const formPayload = new FormData();
    formPayload.append("email", formData.email);
    formPayload.append("password", formData.password);

    const result = await login(formPayload);

    if (result.status === "success") {
      router.push("/about");
    } else {
      setError(result.status);
    }
    setLoading(false);
  };

  return (
    <Box maxW="400px" mx="auto" px={6} borderRadius="lg">
      <Heading
        fontSize="30px"
        textAlign="center"
        fontWeight={600}
        color="gray.700"
      >
        {t("login")}
      </Heading>
      <form onSubmit={handleSubmit}>
        <Stack spacing={6} mt={8}>
          {/* Email & Password Inputs Inside Fieldset */}
          <Fieldset.Root>
            <Fieldset.Content>
              {/* Email Input */}
              <Field label={t("email")}>
                <Input
                  type="email"
                  name="email"
                  placeholder={t("enteryourEmail")}
                  variant="filled"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
                {errors.email && (
                  <Text color="red.500" fontSize="sm">
                    {errors.email}
                  </Text>
                )}
              </Field>

              {/* Password Input */}
              <Field label={t("password")}>
                <Input
                  type="password"
                  name="password"
                  placeholder={t("enteryourPassword")}
                  variant="filled"
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                />
                {errors.password && (
                  <Text color="red.500" fontSize="sm">
                    {errors.password}
                  </Text>
                )}
              </Field>
            </Fieldset.Content>
            <Link href="/forgot-password">
              <Text
                textAlign="end"
                color="black"
                fontSize="13px"
                textDecor="underline"
              >
                {t("forgotPassword")}
              </Text>
            </Link>
            <AuthButton type={t("signIn")} loading={loading} />
            <Flex justify={"space-between"} maxW={"400px"} gap={"10px"}>
              <FacebookLoginButton />
              <GoogleLoginButton />
            </Flex>
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

export default LoginForm;
