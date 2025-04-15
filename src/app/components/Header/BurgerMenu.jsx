"use client";
import { useState, useEffect } from "react";
import { IconButton, Flex, Text, Button } from "@chakra-ui/react";
import {
  DrawerRoot,
  DrawerTrigger,
  DrawerBackdrop,
  DrawerContent,
  DrawerBody,
  DrawerCloseTrigger,
} from "../ui/drawer";
import { Box } from "@chakra-ui/react";
import Link from "next/link";
import { FaBarsStaggered } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { RxAvatar } from "react-icons/rx";
import { FaYoutube } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { IoBagOutline } from "react-icons/io5";
import { SelectFlag } from ".";
import { NAVLINKS } from "../constants/constants";
import styles from "./burger.module.css";
import { MenuContent, MenuItem, MenuRoot, MenuTrigger } from "../ui/menu";
import { useTranslations } from "next-intl";
import { getUserSession, signOut } from "../../(auth)/actions";

const BurgerMenu = () => {
  const [open, setOpen] = useState(false);
  const [myAccount, setMyAccount] = useState(null);
  const t = useTranslations("Login");
  const t2 = useTranslations("Navigation");


  useEffect(() => {
    const getUser = async () => {
      const result = await getUserSession();
      if (result === null) return;

      setMyAccount(result.user);
    };
    getUser();
  }, []);

  const handleLogout = async () => {
    setMyAccount(() => null);
    await signOut();
  };

  return (
    <>
      <div className={styles.isDesktop}>
        <Flex gap="15px">
          <Flex>
            <IconButton
              as={Link}
              href="/myAccount/wishlist"
              aria-label="Wishlist"
              background="none"
              color="black"
              size={{ md: "xl", xl: "2xl" }}
              border="none"
              _hover={{
                color: "#0E623E",
                transform: "scale(1.1)",
                transition: "all 0.2s ease-in-out",
              }}
              _focus={{ outline: "none", boxShadow: "none" }}
              _focusVisible={{ outline: "none", boxShadow: "none" }}
            >
              <FaRegHeart />
            </IconButton>

            <IconButton
              aria-label="Cart"
              background="none"
              as={Link}
              href="/myAccount/card"
              color="black"
              size={{ md: "xl", xl: "2xl" }}
              border="none"
              _hover={{
                color: "#0E623E",
                transform: "scale(1.1)",
                transition: "all 0.2s ease-in-out",
              }}
              _focus={{ outline: "none", boxShadow: "none" }}
              _focusVisible={{ outline: "none", boxShadow: "none" }}
            >
              <IoBagOutline />
            </IconButton>

            <MenuRoot>
              <MenuTrigger asChild>
                <IconButton
                  aria-label="Account"
                  background="none"
                  color="black"
                  size={{ md: "xl", xl: "2xl" }}
                  border="none"
                  _hover={{
                    color: "#0E623E",
                    transform: "scale(1.1)",
                    transition: "all 0.2s ease-in-out",
                  }}
                  _focus={{ outline: "none", boxShadow: "none" }}
                  _focusVisible={{ outline: "none", boxShadow: "none" }}
                >
                  <RxAvatar />
                </IconButton>
              </MenuTrigger>
              <MenuContent>
                {myAccount ? (
                  <>
                    <Box p={2} textAlign={"center"}>
                      <Text fontSize="15px" fontWeight="500">
                        Hi {myAccount?.user_metadata?.full_name || user_metadata?.username}
                      </Text>
                    </Box>

                    <MenuItem asChild value="account">
                      <Link href="/myAccount">
                        <Text fontSize="15px" fontWeight="500" margin="0 auto">
                          {"Account"}
                        </Text>
                      </Link>
                    </MenuItem>
                    <MenuItem asChild value="orders">
                      <Link href="/myAccount/orders">
                        <Text fontSize="15px" fontWeight="500" margin="0 auto">
                          {"Orders"}
                        </Text>
                      </Link>
                    </MenuItem>
                    <MenuItem asChild value="logout">
                      <Button
                        onClick={handleLogout}
                        background="none"
                        textAlign="center"
                        _hover={{ background: "gray.100" }}
                        transition="background 0.2s ease"
                      >
                        <Text fontSize="15px" fontWeight="500" margin="0 auto">
                          {"Logout"}
                        </Text>
                      </Button>
                    </MenuItem>
                  </>
                ) : (
                  <>
                    <MenuItem asChild value="login">
                      <Link href="/login">
                        <Text fontSize="15px" fontWeight="500" margin="0 auto">
                          {t("login")}
                        </Text>
                      </Link>
                    </MenuItem>
                    <MenuItem asChild value="register">
                      <Link href="/register">
                        <Text fontSize="15px" fontWeight="500" margin="0 auto">
                          {t("register")}
                        </Text>
                      </Link>
                    </MenuItem>
                  </>
                )}
              </MenuContent>
            </MenuRoot>
          </Flex>

          <Flex gap="10px">
            <SelectFlag />
          </Flex>
        </Flex>
      </div>

      <div className={styles.isMobile}>
        <DrawerRoot
          size="full"
          placement="start"
          open={open}
          onOpenChange={(e) => setOpen(e.open)}
        >
          {/* Frosted Glass Backdrop with Fallback */}
          <DrawerBackdrop
            style={{
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
            }}
          />

          {/* Drawer Trigger */}
          <DrawerTrigger asChild>
            <IconButton variant="none" size="sm" aria-label="Open Menu">
              <FaBarsStaggered />
            </IconButton>
          </DrawerTrigger>

          {/* Drawer Content */}
          <DrawerContent
            bg="white"
            color="#222"
            m="12px"
            borderRadius="14px"
            boxShadow="0px 4px 20px rgba(0, 0, 0, 0.12)"
            minHeight="100dvh" // Ensures full-screen fit
          >
            {/* Drawer Body */}
            <DrawerBody padding="35px 25px">
              {/* Navigation Links */}
              <Box
                as="nav"
                display="flex"
                flexDir="column"
                gap="4px"
                marginTop="10px"
              >
                {NAVLINKS.map(({ key, href }) => (
                  <Box key={key}>
                    <Link
                      href={href}
                      style={{
                        fontWeight: 600,
                        color: "#222",
                        fontSize: "20px",
                        lineHeight: "30px",
                        textDecoration: "none",
                        padding: "14px 0",
                        display: "block",
                        textAlign: "center",
                        transition: "color 0.2s ease-in-out",
                      }}
                      onClick={() => setOpen(false)}
                      onTouchStart={(e) => (e.target.style.color = "#0070f3")} // Mobile-friendly highlight
                      onTouchEnd={(e) => (e.target.style.color = "#222")}
                    >
                      {t2(key)}
                    </Link>
                  </Box>
                ))}
              </Box>

              {/* Additional Sections */}
              <Box marginTop="15px" padding="20px 0">
                {/* Elegant Divider */}
                <Box
                  width="85%"
                  height="1px"
                  background="rgba(0, 0, 0, 0.08)"
                  margin="0 auto 22px auto"
                />

                {/* Login/Register Section */}
                <Box display="flex" flexDir="column" alignItems="center">
                  <Text fontSize="15px" color="#555" fontWeight="500">
                    {t("alreadyHaveAccount")}
                  </Text>
                  <Box display="flex" gap="14px" marginTop="14px">
                    <Button
                      background="#0B6840"
                      size="sm"
                      borderRadius="22px"
                      px="5vw" // Scales based on screen width
                      fontWeight="500"
                      boxShadow="0px 2px 10px rgba(0, 112, 243, 0.2)"
                      _active={{ transform: "scale(0.95)" }} // Mobile tap effect
                      transition="color 0.2s ease-in-out, transform 0.2s ease-in-out"
                    >
                      {t("login")}
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      borderRadius="22px"
                      border="0.5px solid #0B6840"
                      px="5vw"
                      fontWeight="500"
                      _active={{ background: "rgba(0, 112, 243, 0.08)" }}
                      transition="color 0.2s ease-in-out, transform 0.2s ease-in-out"
                    >
                      {t("register")}
                    </Button>
                  </Box>
                </Box>

                {/* Elegant Divider */}
                <Box
                  width="85%"
                  height="1px"
                  background="rgba(0, 0, 0, 0.08)"
                  margin="22px auto"
                />

                {/* Social Media Section */}
                <Box display="flex" flexDir="column" alignItems="center">
                  <Text fontSize="15px" color="#555" fontWeight="500">
                    Follow us on
                  </Text>
                  <Box display="flex" gap="18px" marginTop="14px">
                    <IconButton
                      size={"2xl"}
                      aria-label="Facebook"
                      background={"none"}
                    >
                      <FaFacebook color="#0B6840" />
                    </IconButton>
                    <IconButton
                      size={"2xl"}
                      aria-label="YouTube"
                      background={"none"}
                    >
                      <FaYoutube color="#0B6840" />
                    </IconButton>
                    <IconButton
                      size={"2xl"}
                      aria-label="Instagram"
                      background={"none"}
                    >
                      <AiFillInstagram color="#0B6840" />
                    </IconButton>
                  </Box>
                </Box>
              </Box>
            </DrawerBody>

            {/* Close Button */}
            <DrawerCloseTrigger color="#222" fontSize="24px" />
          </DrawerContent>
        </DrawerRoot>
      </div>
    </>
  );
};

export default BurgerMenu;
