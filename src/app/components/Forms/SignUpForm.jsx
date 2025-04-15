"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Box, Input, Stack, Heading, Text, Fieldset } from "@chakra-ui/react";
import { Field } from "../../components/ui/field";
import AuthButton from "./AuthButton";
import { signUp } from "../../(auth)/actions";
import { useTranslations } from "next-intl";

const SignUpForm = () => {
  // const [formData, setFormData] = useState({
  //   username: "",
  //   email: "",
  //   password: "",
  // });
  const router = useRouter();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const t = useTranslations("Login");
  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(null);
    const formData = new FormData(event.target);
    const result = await signUp(formData);

    if (result.status === "success") {
      router.push("/");
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
        {t("createAccount")}
      </Heading>
      <form onSubmit={handleSubmit}>
        <Stack spacing={6} mt={8}>
          {/* Personal Information */}
          <Fieldset.Root>
            <Fieldset.Content>
              <Field label={t("username")}>
                <Input
                  type="text"
                  name="username"
                  //   value={formData.username}
                  //   onChange={handleChange}
                  placeholder={t("username")}
                  variant="filled"
                />
                {error && <Text color="red.500">{error}</Text>}
              </Field>

              {/* <Field label="Last Name" invalid={!!errors.lastName}>
                <Input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Last Name"
                  variant="filled"
                />
                {errors.lastName && <Text color="red.500">{errors.lastName}</Text>}
              </Field> */}
            </Fieldset.Content>
          </Fieldset.Root>

          {/* Account Details */}
          <Fieldset.Root>
            <Fieldset.Content>
              <Field label={t("email")}>
                <Input
                  type="email"
                  name="email"
                  //   value={formData.email}
                  //   onChange={handleChange}
                  placeholder={t("email")}
                  variant="filled"
                />
                {error && <Text color="red.500">{error}</Text>}
              </Field>

              <Field label={t("password")}>
                <Input
                  type="password"
                  name="password"
                  //   value={formData.password}
                  //   onChange={handleChange}
                  placeholder={t("newPassword")}
                  variant="filled"
                />
                {error && <Text color="red.500">{error}</Text>}
              </Field>
            </Fieldset.Content>
          </Fieldset.Root>

          {/* Submit Button */}
          <AuthButton type={t("signUp")} loading={loading}></AuthButton>
        </Stack>
      </form>
    </Box>
  );
};

export default SignUpForm;
