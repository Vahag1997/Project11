import { Box, Container } from '@chakra-ui/react';

export default function AuthLayout({ children }) {
  return (
    <Box  display="flex" alignItems="center" justifyContent="center" p="75px">
      <Container
        bg="white"
        p={6}
        boxShadow="md"
        borderRadius="lg"
        maxW="md"
        w="full"
      >
        {children}
      </Container>
    </Box>
  );
}
