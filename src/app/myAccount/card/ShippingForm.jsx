"use client";

import {
  Box,
  Heading,
  Text,
  Separator,
  Stack,
  SimpleGrid,
  Field,
  Input,
  Textarea,
  Button,
} from "@chakra-ui/react";
import { useState } from "react";
import { toaster } from "../../components/ui/toaster";
import { Steps } from "@chakra-ui/react";
import { placeOrder } from "../../../../utils/supabase/dataActions";

export default function ShippingForm({ cartItems, totalPrice }) {

  const [form, setForm] = useState({
    name: "",
    surname: "",
    phone: "",
    city: "",
    address: "",
    description: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!form.name || form.name.length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }
    if (!form.surname || form.surname.length < 2) {
      newErrors.surname = "Surname must be at least 2 characters";
    }
    if (!form.phone || !/^\+374\d{8}$/.test(form.phone)) {
      newErrors.phone = "Phone must be in format +374XXXXXXXX";
    }
    if (!form.city || form.city.length < 2) {
      newErrors.city = "City must be at least 2 characters";
    }
    if (!form.address || form.address.length < 5) {
      newErrors.address = "Address must be at least 5 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNextStepValidation = async (e) => {
    if (!validateForm()) {
      e.preventDefault();
      toaster.create({
        description: "Fix validation errors before proceeding.",
        type: "error",
      });
      return;
    }

    try {
      
      setLoading(true);
      await placeOrder(form, cartItems, totalPrice);

      toaster.create({
        description: "Order placed successfully.",
        type: "success",
      });
    } catch (err) {
      e.preventDefault();
      console.log(err);
      
      toaster.create({
        description: "Error placing order. Try again.",
        type: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  const renderField = (field, label, placeholder, isTextarea = false) => (
    <Field.Root>
      <Field.Label>{label}</Field.Label>
      {isTextarea ? (
        <Textarea
          placeholder={placeholder}
          value={form[field]}
          onChange={handleChange(field)}
          borderColor={errors[field] ? "red.500" : undefined}
        />
      ) : (
        <Input
          placeholder={placeholder}
          value={form[field]}
          onChange={handleChange(field)}
          borderColor={errors[field] ? "red.500" : undefined}
        />
      )}
      {errors[field] && (
        <Text color="red.500" fontSize="xs" mt={1}>
          {errors[field]}
        </Text>
      )}
    </Field.Root>
  );

  return (
    <Box maxW="40rem" mx="auto" py={8} px={{ base: 2, md: 6 }}>
      <Heading mb={4}>Shipping</Heading>
      <Text color="gray.600" mb={6}>
        Please enter your shipping details.
      </Text>
      <Separator mb={6} />

      <Stack spacing={4}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
          {renderField("name", "Name", "John")}
          {renderField("surname", "Surname", "Doe")}
        </SimpleGrid>

        {renderField("phone", "Phone Number", "+37444123456")}
        {renderField("city", "City", "Yerevan")}
        {renderField("address", "Address", "5 Tumanyan St")}
        {renderField("description", "Order Description", "Optional note", true)}
      </Stack>

      <Separator my={6} />

      <Steps.NextTrigger asChild>
        <Button
          colorScheme="blackAlpha"
          size="lg"
          w="full"
          isLoading={loading}
          onClick={handleNextStepValidation}
        >
          Continue
        </Button>
      </Steps.NextTrigger>
    </Box>
  );
}
