import { Flex, Box, Text, Button } from "@chakra-ui/react";
import { Rating } from "../ui/rating";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

import { WishlistToggle } from "../../myAccount/wishlist/WishListToggle";

const SingleCard = ({ product }) => {
  const t = useTranslations("SingleCard");
  const image =
    product.image ||
    product?.product_images?.[0]?.image_url ||
    "/placeholder.webp";


  return (
    <Flex
      flexDir="column"
      gap={{ base: 1, md: 2 }}
      p={{ base: "8px", md: "10px" }}
      position="relative"
      zIndex="1"
      textAlign="center"
      background="#EEE2D8"
      borderRadius={{ base: "10px", md: "18px" }}
      w="100%"
    >
      <Box
        as={Link}
        href={`/products/${product.id}`}
        position="relative"
        width="100%"
        height={{ base: "170px", md: "270px" }}
      >
        <Image
          src={image}
          alt={product.name}
          width={270}
          height={250}
          style={{
            objectFit: "cover",
            width: "100%",
            height: "100%",
            borderRadius: "10px",
          }}
        />
        {product.discount && product.discount > 0 ? (
          <Text
            position="absolute"
            top="6%"
            left="6%"
            fontWeight={700}
            lineHeight={{ base: "12px", md: "32px" }}
            fontSize={{ base: "10px", md: "22px" }}
          >
            -{product.discount}
          </Text>
        ) : null}
      </Box>

      <Flex flexDir="column" gap={1} className="name-profession">
        <Box
          as={Link}
          href={`/products?brand=${encodeURIComponent(product.brand)}`}
        >
          <Text
            fontWeight="400"
            fontSize={{ base: "14px", md: "20px" }}
            lineHeight={{ base: "14px", md: "26px" }}
            textAlign="left"
            noOfLines={1}
          >
            {product.brand}
          </Text>
        </Box>
        <Text
          fontWeight="400"
          fontSize={{ base: "13px", md: "18px" }}
          lineHeight={{ base: "14px", md: "24px" }}
          textAlign="left"
          noOfLines={2}
        >
          {product.name}
        </Text>
      </Flex>

      <Flex className="rating" mt={1}>
        <Rating
          readOnly
          defaultValue={3}
          size={{ base: "sm", md: "md" }}
          colorPalette="orange"
        />
      </Flex>

      <Flex justify="space-between" alignItems="center">
        <Text
          fontWeight="500"
          fontSize={{ base: "14px", md: "20px" }}
          lineHeight={{ base: "14px", md: "26px" }}
        >
          {product.price}
        </Text>
        <WishlistToggle productId={product.id} initial={product.in_wishlist} />
      </Flex>

      <Flex justifyContent="center" w="100%">
        <Button
          as={Link}
          href={`/products/${product.id}`}
          borderRadius={{ base: "8px", md: "14px" }}
          h={{ base: "32px", md: "50px" }}
          bg="#0E623E"
          w="100%"
          transition="transform 0.3s ease, background-color 0.3s ease"
          _hover={{ transform: "scale(1.05)", bg: "#0C623E" }}
        >
          <Text
            fontWeight="500"
            fontSize={{ base: "12px", md: "20px" }}
            color="white"
            mt={1}
          >
            {t("viewPerfume")}
          </Text>
        </Button>
      </Flex>
    </Flex>
  );
};

export default SingleCard;
