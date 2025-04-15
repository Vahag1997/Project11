"use client";
import { useState, useCallback, useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Flex, Heading, Text, Grid, GridItem } from "@chakra-ui/react";
import { Rating } from "../../../components/ui/rating";
import Image from "next/image";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "../singleCard.css";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import Link from "next/link";
import ProductCardAccord from "../ProductCardAccord";
import { useTranslations } from "next-intl";

const SingleProductCard = ({ product }) => {
  const [selectedSize, setSelectedSize] = useState("");
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const t = useTranslations("SingleCard");

  const findImageIndexByType = useCallback(
    (type) => product?.product_images.findIndex((img) => img.image_type === type),
    [product?.product_images]
  );

  const activeIndex = useMemo(() => {
    if (selectedSize === "5ml") {
      const smallIndex = findImageIndexByType("small_size");
      if (smallIndex !== -1) return smallIndex;
    }
    const primaryIndex = findImageIndexByType("primary");
    return primaryIndex !== -1 ? primaryIndex : 0;
  }, [selectedSize, findImageIndexByType]);

  const handleSizeChange = useCallback((event) => {
    setSelectedSize(event.value);
  }, []);


  return (
    <Grid
      className="gridContainer"
      gap={{ base: "8px", lg: "30px" }}
      alignItems="stretch"
      w={{ base: "100%", md: "90%" }}
      mx="auto"
      mt={{ base: "5px", md: "65px" }}
    >
      <GridItem
        className="productHeading"
        display="flex"
        flexDirection="column"
        alignSelf="start"
        px={{ base: "22px", md: "0px" }}
        mb={{ base: "0xp", lg: "-7%" }}
      >
        <Flex
          flexDir="column"
          gap={{ base: "2px", md: "14px" }}
          maxH="800px"
          w="100%"
          py={{ base: "4px", md: "6px", lg: "10px" }}
        >
          <Flex flexDir="column" gap={{ base: "0px", md: "10px", xl: "14px" }}>
            <Heading
              fontSize={{ base: "20px", md: "3xl", lg: "35px" }}
              fontWeight={600}
              lineHeight="26px"
            >
              {product?.brand.toUpperCase()}
            </Heading>
            <Heading
              fontSize={{ base: "20px", md: "4xl", lg: "30px" }}
              fontWeight={600}
              lineHeight="100%"
            >
              {product?.name}
            </Heading>
          </Flex>
          <Text fontSize={{ base: "12px", md: "17px" }} color="blue" textDecor="underline">
            <Link href="/">{t("all")} {product?.brand} {t("products")}</Link>
          </Text>
          <Rating readOnly defaultValue={3} size={{ base: "xs", md: "md" }} colorPalette="orange" />
        </Flex>
      </GridItem>

      <GridItem
        className="productImage"
        gap="15px"
        flex={1}
        w="100%"
        maxW={{ base: "89dvw", md: "49dvw" }}
        mx="auto"
      >
        <Swiper
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
          spaceBetween={10}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper2"
          onSwiper={(swiper) => {
            swiper.slideTo(activeIndex);
          }}
        >
          {product?.product_images.map(({ image_url }, index) => (
            <SwiperSlide key={`main-${index}`} className="swiperImage">
              <Image
                src={image_url}
                alt={`Slide ${index + 1}`}
                width={820}
                height={400}
                style={{ width: "100%", objectFit: "contain" }}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <Swiper
          onSwiper={setThumbsSwiper}
          slidesPerView={3}
          freeMode={true}
          navigation={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper"
        >
          {product?.product_images.map(({ image_url }, index) => (
            <SwiperSlide key={`thumb-${index}`} className="thumbSwiper">
              <Image
                src={image_url}
                alt={`Thumbnail ${index + 1}`}
                width={150}
                height={100}
                style={{ height: "auto", width: "100%", objectFit: "cover" }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </GridItem>

      <GridItem
        className="productAccord"
        w="100%"
        mb={{ base: "0px", lg: "170px" }}
        px={{ base: "22px", md: "0px" }}
      >
        <ProductCardAccord
          product={product}
          selectedSize={selectedSize}
          handleSizeChange={handleSizeChange}
        />
      </GridItem>
    </Grid>
  );
};

export default SingleProductCard;
