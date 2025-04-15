"use client";

import { useState } from "react";
import { loginWithFacebook } from "../../(auth)/actions";
import { IconButton, Text, Flex } from "@chakra-ui/react";
import { ImFacebook } from "react-icons/im";

const FacebookLoginButton = () => {
  const [loading, setLoading] = useState(false);

  const handleFacebookLogin = async () => {
    try {
      const result = await loginWithFacebook();
      if (result?.status === "redirect" && result.url) {
        window.location.href = result.url;
      } else {
        console.error("Login failed:", result.message);
      }
    } catch (error) {
      console.error("Facebook login failed", error);
    }
  };
  return (
    <Flex
      width="100%"
      justify="center"
      align="center"
      bg="#0075ff"
      borderRadius="10px"
    >
      <IconButton
        onClick={handleFacebookLogin}
        isLoading={loading}
        aria-label="Sign in with Facebook"
        background="none"
        disabled={loading}
        _active={{ background: "none" }}
        transition="transform 0.2s ease"
      >
        <Flex align="center" gap={2}>
          <Text color="white">Facebook</Text>
          <ImFacebook size={24} color="white" />
        </Flex>
      </IconButton>
    </Flex>
  );
};

export default FacebookLoginButton;
