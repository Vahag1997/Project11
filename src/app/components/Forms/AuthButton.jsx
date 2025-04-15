"use client";
import { Button } from "@chakra-ui/react";

const AuthButton = ({ type, loading }) => {
  return (
    <Button
      isLoading={loading}
      type="submit"
      width="full"
      size="lg"
      fontSize="sm"
      fontWeight="medium"
      colorScheme="blue"
      borderRadius="10px"
      background="#093623"
      _disabled={{ bg: "gray.600", cursor: "not-allowed" }}
    >
      {type}
    </Button>
  );
};

export default AuthButton;
