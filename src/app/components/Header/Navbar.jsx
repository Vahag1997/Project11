"use client";
import { Flex, Link } from "@chakra-ui/react";
import { NAVLINKS } from "../constants/constants";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";

const EXCLUDED_PATHS = [
  "/login",
  "/register",
  "/forgot-password",
  "/reset-password",
  "/myAccount",
  "/myAccount/wishlist",
  "/myAccount/orders",
  "/myAccount/card",
  "/blog",
];

const Navbar = () => {

  const t = useTranslations("Navigation");
  const pathname = usePathname();
  const isExcluded = EXCLUDED_PATHS.includes(pathname);

  const isDynamicPage =
    pathname.startsWith("/products/") || pathname.startsWith("/blog/");
  const validPage = !isExcluded && !isDynamicPage;

  return (
    <Flex
      as="nav"
      justify="center"
      bg="transparent"
      px={8}
      py={!validPage ? 4 : 7}
      position={!validPage ? "flex" : "absolute"}
      width="100%"
      zIndex={1000}
    >
      <Flex gap="70px" border="none">
        {NAVLINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            fontWeight={700}
            color={validPage ? "white" : "black"}
            fontSize={{ md: "16px", xl: "18px" }}
            lineHeight="29px"
            position="relative"
            _after={{
              content: "''",
              position: "absolute",
              width: "0%",
              height: "2px",
              bottom: 0,
              left: 0,
              bg: validPage ? "gray.300" : "black",
              transition: "width 0.3s ease",
            }}
            _hover={{
              textDecoration: "none",
              _after: {
                width: "100%",
              },
            }}
            _focus={{
              outline: "none",
              boxShadow: "none",
            }}
            _focusVisible={{
              outline: "none",
              boxShadow: "none",
            }}
          >
            {t(link.key)}
          </Link>
        ))}
      </Flex>
    </Flex>
  );
};

export default Navbar;
