"use client";

import React, { useMemo, useTransition } from "react";
import { Flex, Stack, Text, Button, Progress, Box } from "@chakra-ui/react";
import Image from "next/image";
import {
  RadioCardItem,
  RadioCardLabel,
  RadioCardRoot,
} from "../../components/ui/radio-card";
import { getLuminance } from "../../../../utils/helpers/functions";
import { useTranslations } from "next-intl";
import { IoBagOutline } from "react-icons/io5";
import { addToCard } from "../../../../utils/supabase/dataActions";
import "./singleCard.css";

const ProductCardAccord = ({ product, selectedSize, handleSizeChange }) => {
  const { product_sizes = [], product_accords = [] } = product;
  const t = useTranslations("SingleCard");
  const [isPending, startTransition] = useTransition();

  const lowestPrice = product_sizes?.[0]?.price || 0;
  const highestPrice = product_sizes?.[product_sizes.length - 1]?.price || 0;

  const findPrice = (size) =>
    product_sizes.find((item) => item.size === size)?.price || 0;
  const computedPrice = useMemo(() => findPrice(selectedSize), [selectedSize]);

  const handleAddToCard = () => {
    const price = findPrice(selectedSize);
    const image = product.product_images?.[0]?.image_url || "";
    const payload = {
      productId: product.id,
      size: selectedSize,
      price,
      brand: product.brand,
      image,
      name: product.name,
    };

    startTransition(() => {
      addToCard(payload);
    });
  };

  return (
    <Flex
      flexDir="column"
      gap={{ base: "10px", md: "13px" }}
      flex={1}
      maxH="800px"
      justify="space-between"
      w="100%"
      py={{ base: "4px", md: "6px", lg: "10px" }}
    >
      <RadioCardRoot
        orientation="horizontal"
        align="center"
        value={selectedSize}
        onValueChange={handleSizeChange}
      >
        <RadioCardLabel>
          <Text fontSize={{ base: "17px", md: "23px" }} fontWeight={600}>
            {t("size")}
          </Text>
        </RadioCardLabel>
        <Flex
          align="stretch"
          gap={{ base: "5px", md: "10px" }}
          mt="5px"
          flexWrap="wrap"
        >
          {product_sizes.map((item) => (
            <RadioCardItem
              label={item.size}
              fontSize={{ base: "11px", md: "15px" }}
              background="#ffffff"
              flex={{
                base: "1 1 25%",
                md: "1 1 50%",
                lg: "1 1 calc(50% - 1rem)",
              }}
              maxWidth={{ base: "90px", md: "120px" }}
              icon={
                <Image
                  width={50}
                  height={22}
                  src={product?.product_images[0].image_url}
                  alt="ImageForBottle"
                  color="fg.subtle"
                />
              }
              indicator={false}
              key={item.size}
              value={item.size}
              cursor="pointer"
            />
          ))}
        </Flex>
      </RadioCardRoot>

      <Text
        fontSize={{ base: "22px", md: "2xl", lg: "32px" }}
        textAlign={{ base: "center", md: "left" }}
      >
        {selectedSize
          ? `$${computedPrice}`
          : `$${lowestPrice} - $${highestPrice}`}
      </Text>

      <Flex width="100%" justify={{ base: "center", md: "flex-start" }}>
        <Button
          width={{ base: "85%", md: "55%" }}
          background="#0E623E"
          fontSize={{ base: "18px", md: "23px" }}
          py={{ base: "24px", md: "33px" }}
          borderRadius="10px"
          isLoading={isPending}
          onClick={handleAddToCard}
          isDisabled={!selectedSize}
        >
          <Text>{t("addToBag")}</Text>
          <IoBagOutline />
        </Button>
      </Flex>

      <Text
        textDecor="underline"
        fontSize="24px"
        lineHeight="29px"
        fontWeight={250}
        letterSpacing="0%"
        mt={{ base: "10px", md: "0px" }}
      >
        {t("accords")}
      </Text>

      <Stack
        gap={{ base: "15px", md: "25px" }}
        align="flex-start"
        pos={"relative"}
      >
        {product_accords.map(({ color, intensity, accord_name }) => {
          const textColor = getLuminance(color) > 0.7 ? "black" : "white";

          return (
            <Box width={"100%"} pos={"relative"} key={accord_name}>
              <Progress.Root
                width="100%"
                maxW="500px"
                value={intensity}
                variant="outline"
                shape="square"
                className="progressBar"
              >
                <Progress.Track height={{ base: "25px", md: "32px" }}>
                  <Progress.Range borderRadius="20px" background={color} />
                </Progress.Track>
              </Progress.Root>
              <Text
                pos="absolute"
                top={"0px"}
                fontSize={{ base: "12px", md: "16px" }}
                fontWeight="bold"
                color={textColor}
                textAlign="center"
                px="3"
                py="1"
              >
                {accord_name}
              </Text>
            </Box>
          );
        })}
      </Stack>
    </Flex>
  );
};

export default ProductCardAccord;
