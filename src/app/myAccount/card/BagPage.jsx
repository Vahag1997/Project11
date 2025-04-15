"use client";

import {
  Box,
  Button,
  Flex,
  Text,
  Image,
  Grid,
  Input,
  Separator,
  IconButton,
  Steps,
} from "@chakra-ui/react";
import {
  removeFromCard,
  updateCardQuantity,
} from "../../../../utils/supabase/dataActions";
import { IoIosTrash } from "react-icons/io";
import { useTranslations } from "use-intl";

export default function Card({ cartItems, setCartItems, totalPrice }) {

const t = useTranslations("Cart");
  const handleRemoveItem = async (productId, size) => {
    await removeFromCard(productId, size);
    setCartItems((prev) =>
      prev.filter(
        (item) => !(item.product_id === productId && item.size === size)
      )
    );
  };

  const handleUpdateQuantity = async (productId, size, newQty) => {
    if (newQty < 1) return;
    await updateCardQuantity(productId, size, newQty);
    setCartItems((prev) =>
      prev.map((item) => {
        if (item.product_id === productId && item.size === size) {
          return { ...item, quantity: newQty };
        }
        return item;
      })
    );
  };
  const discount = 90;


  return (
    <Grid
      templateColumns={{ base: "1fr", xl: "2fr 1fr" }}
      gap={10}
      maxW="1200px"
      mx="auto"
      py={8}
      px={{ base: 2, md: 6 }}
    >
      <Box>
        <Text fontSize={{ base: "2xl", md: "3xl" }} fontWeight="bold" mb={6}>
          {t("title")} ({cartItems.length})
        </Text>

        {cartItems.map((item) => (
          <Flex
            key={`${item.product_id}-${item.size}`}
            direction="row"
            alignItems={{ base: "flex-start", md: "center" }}
            mb={6}
            borderWidth={1}
            borderRadius="2xl"
            py={5}
            boxShadow="md"
            bg="white"
            transition="all 0.2s ease"
            _hover={{ boxShadow: "lg" }}
          >
            <Image
              src={item.image}
              alt={item.brand}
              h={{ base: "120px", md: "130px" }}
              objectFit="contain"
              borderRadius="xl"
              mx={{ base: "auto", md: 0 }}
            />

            <Flex
              flex={1}
              justifyContent="space-between"
              direction="column"
              gap={4}
              w="100%"
            >
              <Flex
                justifyContent="space-between"
                alignItems={{ base: "flex-start", sm: "center" }}
                direction={{ base: "column", sm: "row" }}
                gap={4}
              >
                <Flex
                  flexDir="column"
                  gap={{ base: "0px", md: "1px" }}
                  align={"baseline"}
                >
                  <Text
                    fontSize={{ base: "20px", md: "22px" }}
                    fontWeight={400}
                  >
                    {item.brand}
                  </Text>
                  <Text
                    fontSize={{ base: "18px", md: "20px" }}
                    color="gray.600"
                  >
                    {item.name}
                  </Text>
                  <Text fontSize="16px" color="gray.600">
                    {t("size")}: {item.size}
                  </Text>
                </Flex>
              </Flex>
              <Flex justify="space-between" paddingRight={2} align={"center"}>
                <Box textAlign={{ base: "left", sm: "right" }}>
                  {discount > 0 ? (
                    <Flex direction="column" align="start" gap={1}>
                      <Flex flexDir="row" align="center" gap={2}>
                        <Text
                          fontSize="sm"
                          color="gray.500"
                          textDecoration="line-through"
                        >
                          €
                          {(
                            (item.price * item.quantity) /
                            (1 - discount / 100)
                          ).toFixed(2)}
                        </Text>
                        <Box background="gray" borderRadius="10px" px="4px">
                          {" "}
                          <Text fontSize="xs" color="#ffffff">
                            {-discount}%{" "}
                          </Text>{" "}
                        </Box>
                      </Flex>
                      <Text
                        textAlign="left"
                        fontSize={{ base: "md", md: "lg" }}
                        fontWeight={400}
                        color="red.500"
                      >
                        € {(item.price * item.quantity).toFixed(2)}
                      </Text>
                    </Flex>
                  ) : (
                    <Text fontSize="sm" fontWeight="bold">
                      € {(item.price * item.quantity).toFixed(2)}
                    </Text>
                  )}
                </Box>

                <Flex
                  justifyContent={{ base: "center", sm: "flex-start" }}
                  alignItems="center"
                  gap={3}
                >
                  {item.quantity === 1 ? (
                    <IconButton
                      background={"none"}
                      color={"black"}
                      aria-label="Remove"
                      size={{ base: "xs", md: "sm" }}
                      rounded="full"
                      border={"1px solid #e4e4e7"}
                      onClick={() =>
                        handleRemoveItem(item.product_id, item.size)
                      }
                    >
                      {" "}
                      <IoIosTrash />
                    </IconButton>
                  ) : (
                    <Button
                      variant="outline"
                      size={{ base: "xs", md: "sm" }}
                      rounded="full"
                      onClick={() =>
                        handleUpdateQuantity(
                          item.product_id,
                          item.size,
                          item.quantity - 1
                        )
                      }
                    >
                      -
                    </Button>
                  )}

                  <Text>{item.quantity}</Text>

                  <Button
                    variant="outline"
                    size="xs"
                    rounded="full"
                    onClick={() =>
                      handleUpdateQuantity(
                        item.product_id,
                        item.size,
                        item.quantity + 1
                      )
                    }
                  >
                    +
                  </Button>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        ))}
      </Box>

      <Box
        borderWidth={1}
        borderRadius="2xl"
        p={8}
        boxShadow="xl"
        bg="gray.50"
        height="fit-content"
        position={{ lg: "sticky" }}
        top={20}
      >
        <Text fontSize={{ base: "xl", md: "2xl" }} fontWeight="bold" mb={4}>
          {t("orderSummary")}
        </Text>
        <Separator mb={4} />

        <Flex justify="space-between" mb={2}>
          <Text fontSize="sm">{t("subtotal")}</Text>
          <Text fontWeight="medium">€ {totalPrice.toFixed(2)}</Text>
        </Flex>
        <Flex justify="space-between" mb={2}>
          <Text fontSize="sm">{t("shipping")}</Text>
          <Text fontWeight="medium">{t("shippingFree")}</Text>
        </Flex>

        <Box mt={6} mb={4}>
          <Text mb={2} fontSize="sm" fontWeight="medium">
            {t("promo")}
          </Text>

          <Flex
            gap={2}
            direction={{ base: "column", sm: "row" }}
            align="center"
            justify="space-between"
            w="100%"
          >
            <Input
              placeholder="Enter code"
              size="sm"
              borderRadius="md"
              flex="1"
            />
            <Button
              size="sm"
              bg="black"
              color="white"
              _hover={{ bg: "gray.800" }}
              borderRadius="md"
              px={6}
            >
              {t("apply")}
            </Button>
          </Flex>
        </Box>

        <Separator mt={4} mb={4} />

        <Flex justify="space-between" fontWeight="bold" fontSize="lg">
          <Text>{t("total")}</Text>
          <Text>€ {totalPrice.toFixed(2)}</Text>
        </Flex>
        {cartItems.length > 0 ? (
          <Steps.NextTrigger asChild>
            <Button
              mt={6}
              colorScheme="green"
              size="lg"
              width="100%"
              borderRadius="xl"
              boxShadow="md"
            >
            {t("checkout")}
            </Button>
          </Steps.NextTrigger>
        ) : (
          <Button
            mt={6}
            colorScheme="gray"
            size="lg"
            width="100%"
            borderRadius="xl"
            boxShadow="md"
            isDisabled
          >
            {t("bagEmpty")}
          </Button>
        )}
      </Box>
    </Grid>
  );
}
