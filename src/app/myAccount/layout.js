import { Box, Flex } from "@chakra-ui/react";
import { getTranslations } from "next-intl/server";
import AccountSidebar from "./AccountSidebar";


export default async function AccountLayout({ children }) {

  const t = await getTranslations("Account");
  const links = [
    { href: "/myAccount", label: t("account") },
    { href: "/myAccount/orders", label: t("orders") },
    { href: "/myAccount/wishlist", label: t("wishlist") },
    { href: "/myAccount/card", label: t("card") },
  ];

  return (
    <Box  mx="auto" p={{ base: 4, md: 8 }}>
      <Flex direction={{ base: "column", md: "row" }} gap={10}>
        <Flex direction="column" gap={4} minW="200px" mt={20}>
          <AccountSidebar links={links} />
        </Flex>
        <Box flex="1">{children}</Box>
      </Flex>
    </Box>
  );
}
