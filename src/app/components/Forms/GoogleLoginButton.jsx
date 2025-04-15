"use client";
import { useState } from "react";
// import { signInWithGoogle } from "../../(auth)/actions";
import { loginWithGoogle } from "../../(auth)/actions";
import { IconButton, Text, Flex } from "@chakra-ui/react";
import { FaGoogle } from "react-icons/fa";

const GoogleLoginButton = () => {
  const [loading, _] = useState(false);

  // const handleGoogleLogin = async () => {
  //   try {
  //     await signInWithGoogle();
  //   } catch (error) {
  //     console.error("Google login failed", error);
  //   } finally {
  //   }
  // };
  const handleGoogleLogin = async () => {
    try {
      const result = await loginWithGoogle();
      if (result?.status === "redirect" && result.url) {
        window.location.href = result.url;
      } else {
        console.error("Login failed:", result.message);
      }
    } catch (error) {
      console.error("Google login failed", error);
    }
  };
  
  return (
       <Flex width="100%" justify="center" align="center" bg={"#f12727"} borderRadius={"10px"} >
      <IconButton
        onClick={handleGoogleLogin}
        isLoading={loading}
        aria-label="Sign in with Google"
        background="none"
        // borderRadius="full"
        _active={{ background: "none" }} // Disables background change on click
        disabled={loading}
      >
        <Text color="white">Google</Text>
        <FaGoogle size={24} color="white" />
      </IconButton>
    </Flex>
  );
};

export default GoogleLoginButton;
