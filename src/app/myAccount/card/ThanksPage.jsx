import { Box, Text } from "@chakra-ui/react";


export default function ThanksPage() {
  return (
    <Box textAlign="center" py={10} px={6}>
      <Text fontSize="2xl" fontWeight="bold" mb={4}>
        Thank you for your order!
      </Text>
      <Text fontSize="md" color="gray.600">
        We will contact you shortly with your order details.
      </Text>
    </Box>
  );
}
