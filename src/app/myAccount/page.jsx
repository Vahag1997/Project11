import {
  Box,
  Heading,
  Text,
  Flex,
  Button,
  Input,
  Avatar,
  Separator,
} from "@chakra-ui/react";
import { getTranslations } from "next-intl/server";
import { Logout } from "../components/Forms";
import { getUserSession } from "../(auth)/actions";

export default async function AccountDashboard() {
  const t = await getTranslations("Account");
  const { user } = await getUserSession();

  const providers = user?.app_metadata?.providers || [];
  const isEmailAuth = providers.length === 1 && providers[0] === "email";

  const userName =
    user?.user_metadata?.full_name ||
    user?.user_metadata?.name ||
    user?.user_metadata?.username ||
    "";
  const userEmail = user?.email || "";
  const userAvatar =
    user?.user_metadata?.avatar_url || user?.user_metadata?.picture || null;

  return (
    <Box px={{ base: 4, md: 10 }} py={{ base: 8, md: 12 }} maxW="4xl" mx="auto">
      <Flex direction={{ base: "column", sm: "row" }} align="center" gap={4} mb={6}>
        {userAvatar && (
          <Avatar.Root>
          <Avatar.Fallback name={userName} size={{ base: "lg", md: "xl" }}/>
          <Avatar.Image src={userAvatar} />
        </Avatar.Root>
        )}

        <Box textAlign={{ base: "center", sm: "left" }}>
          <Heading fontSize={{ base: "xl", md: "2xl" }}>
            {t("greeting")}, {userName || "User"}
          </Heading>
          <Text fontSize={{ base: "md", md: "lg" }} color="gray.600">
            {t("dashboardMessage")}
          </Text>
        </Box>
      </Flex>

      <Separator mb={6} />

      <Heading fontSize={{ base: "lg", md: "xl" }} mb={4}>
        {t("profileInfo")}
      </Heading>

      <Flex direction="column" gap={5} maxW="100%">
        <Box>
          <Text mb={1} fontWeight={500} fontSize={{ base: "sm", md: "md" }}>
            {t("fullName")}
          </Text>
          <Input
            defaultValue={userName}
            placeholder={t("fullNamePlaceholder")}
            size="md"
          />
        </Box>

        {isEmailAuth ? (
          <>
            <Box>
              <Text mb={1} fontWeight={500} fontSize={{ base: "sm", md: "md" }}>
                {t("email")}
              </Text>
              <Input defaultValue={userEmail} placeholder={t("email")} size="md" />
            </Box>

            <Box>
              <Text mb={1} fontWeight={500} fontSize={{ base: "sm", md: "md" }}>
                {t("password")}
              </Text>
              <Input type="password" placeholder={t("newPassword")} size="md" />
            </Box>
          </>
        ) : (
          <Box>
            <Text mb={1} fontWeight={500} fontSize={{ base: "sm", md: "md" }}>
              {t("email")}
            </Text>
            <Input disabled defaultValue={userEmail} placeholder={t("email")} size="md" />
          </Box>
        )}

        <Button mt={4} colorScheme="green" size="md" alignSelf={{ base: "center", sm: "flex-start" }}>
          {t("saveChanges")}
        </Button>
      </Flex>

      <Box mt={10}>
        <Logout />
      </Box>
    </Box>
  );
}
