"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { SingleCard, HeadingForHome } from "..";
import { Icon, Text, Button, useBreakpointValue } from "@chakra-ui/react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import "swiper/css";
import "swiper/css/navigation";
import styles from "./cardCarousel.module.css";
import Link from "next/link";
import { useTranslations } from "next-intl";

const CardCarousel = ({ products, translationKey }) => {
  const slidesPerView = useBreakpointValue({ base: 2, md: 4 });

  const t = useTranslations("CardCarousel");

  const info = {
    heading: t(`${translationKey}.heading`),
    text: t(`${translationKey}.text`),
    button: t(`${translationKey}.button`),
  };
  const { heading, text, button } = info;

  const sortParam =
    translationKey === "bestSellers"
      ? "best-sellers"
      : translationKey === "newArrivals"
      ? "new-arrivals"
      : translationKey === "onSale"
      ? "all-sale"
      : "all-products";

  return (
    <div className={styles.carouselContainer}>
      <HeadingForHome heading={heading} text={text} />
      <div className={styles.swiperWrapper}>
        <Swiper
          slidesPerView={slidesPerView}
          spaceBetween={slidesPerView === 2 ? 15 : 25}
          navigation={{
            nextEl: `.${styles.productNextButton}`,
            prevEl: `.${styles.productPrevButton}`,
          }}
          modules={[Navigation]}
          className={styles.mySwiper}
        >
          {products.map((product, idx) => (
            <SwiperSlide key={idx}>
              <SingleCard key={idx} product={product} />
            </SwiperSlide>
          ))}
          <Icon className={styles.productNextButton} fontSize="xl">
            <IoIosArrowForward />
          </Icon>
          <Icon className={styles.productPrevButton} fontSize="xl">
            <IoIosArrowBack />
          </Icon>
        </Swiper>
      </div>

      {/* View All Button */}
      <Button
        as={Link}
        href={`/products?sort=${sortParam}&page=1`}
        mt={{ base: "14px", md: "40px" }}
        background="white"
        p={{ base: "4px 16px", md: "10px 24px" }}
        height={{ base: "33px", md: "auto" }}
        variant="solid"
        borderRadius={{ base: "6px", md: "14px" }}
      >
        <Text
          color="black"
          fontSize={{ base: "12px", md: "1.36vw" }}
          fontWeight={{ base: 400, md: 600 }}
          lineHeight={{ base: "15px", md: "37px" }}
        >
          {button}
        </Text>
      </Button>
    </div>
  );
};

export default CardCarousel;
