"use client";

import { useEffect, useState } from "react";
import {
  Box,
  Heading,
  Text,
  Flex,
  Image,
  Separator,
  Stack,
  Spinner,
} from "@chakra-ui/react";
import { getUserOrdersWithItems } from "../../../../utils/supabase/dataActions";
import EmptyList from "../EmptyList";
import { useTranslations } from "use-intl";

export default function OrdersPage() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const t = useTranslations("Orders");

  useEffect(() => {
    async function fetchOrders() {
      try {
        const data = await getUserOrdersWithItems();
        setOrders(data);
      } catch (error) {
        console.error("Failed to fetch orders", error);
      } finally {
        setLoading(false);
      }
    }

    fetchOrders();
  }, []);

  if (loading) {
    return (
      <Flex justify="center" align="center" minH="300px">
        <Spinner size="xl" color="green.500" />
      </Flex>
    );
  }

  if (orders.length === 0) {
    return (
      <EmptyList
        title={t("emptyTitle")}
        description={t("emptyDescription")}
      />
    );
  }

  return (
    <Box maxW="960px" mx="auto" p={{ base: 4, md: 8 }}>
      <Heading fontSize={{ base: "2xl", md: "3xl" }} mb={8}>
        {t("title")}
      </Heading>

      <Stack spacing={8}>
        {orders.map((order) => (
          <Box
            key={order.id}
            p={{ base: 4, md: 6 }}
            border="1px solid"
            borderColor="gray.200"
            borderRadius="xl"
            bg="white"
            boxShadow="sm"
          >
            <Flex
              justify="space-between"
              direction={{ base: "column", sm: "row" }}
              mb={4}
              gap={2}
            >
              <Text fontWeight="medium" fontSize="sm" color="gray.600">
                {t("orderDate")}
                <strong style={{paddingLeft:"10px"}}>
                  {new Date(order.created_at).toLocaleDateString()}
                </strong>
              </Text>
              <Text fontWeight="medium" fontSize="sm" color="gray.600">
                {t("total")}
                <strong>€ {order.total_price?.toFixed(2) || "0.00"}</strong>
              </Text>
            </Flex>

            <Separator mb={4} />

            <Stack spacing={4}>
              {order.order_items.map((item) => {
                const primaryImage = item.perfumes?.product_images?.find(
                  (img) => img.image_type === "primary"
                );

                return (
                  <Flex
                    key={item.id}
                    gap={4}
                    align="center"
                    direction={{ base: "column", sm: "row" }}
                    bg="gray.50"
                    p={3}
                    borderRadius="md"
                    overflow="hidden"
                  >
                    <Image
                      src={primaryImage?.image_url || "/fallback.png"}
                      alt={item.perfumes?.name || "Perfume"}
                      boxSize="80px"
                      objectFit="cover"
                      borderRadius="md"
                      fallbackSrc="/fallback.png"
                    />
                    <Flex
                      flex="1"
                      direction="column"
                      textAlign={{ base: "center", sm: "left" }}
                    >
                      <Text fontSize="md" fontWeight="semibold">
                        {item.perfumes?.brand} – {item.perfumes?.name}
                      </Text>
                      <Text fontSize="sm" color="gray.600">
                      {t("size")}: {item.size} | {t("quantity")}: {item.quantity}
                      </Text>
                      <Text fontWeight="bold" mt={1}>
                        € {item.price.toFixed(2)}
                      </Text>
                    </Flex>
                  </Flex>
                );
              })}
            </Stack>
          </Box>
        ))}
      </Stack>
    </Box>
  );
}
