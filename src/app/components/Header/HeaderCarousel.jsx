"use client";
import React from "react";
import { Box, Image, Icon } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { HOMEPAGESLIDES } from "../constants/constants";
import styles from "./burger.module.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

const HeaderCarousel = () => {
  return (
    <Box maxW="100%" mx="auto" pos="relative">
      {/* Swiper Carousel */}
      <Swiper
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }} 
        navigation={{
          nextEl: `.${styles.nextButton}`,
          prevEl: `.${styles.prevButton}`,
        }}
        modules={[Navigation, Autoplay]}
        className={styles.swiper}
      >
        {HOMEPAGESLIDES.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <Image
              src={slide.image}
              alt={slide.title}
              w="full"
              objectFit="cover"
              height={{ base: "220px", md: "600px" }}
              filter="brightness(50%)"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons */}
      <Icon
        aria-label="Previous Slide"
        className={styles.prevButton}
        position="absolute"
        left="10px"
        top="50%"
        transform="translateY(-50%)"
        zIndex={10}
        bg="none"
      >
        <IoIosArrowBack style={{ color: "#FFFFFFB2" }} />
      </Icon>
      
      <Icon
        aria-label="Next Slide"
        className={styles.nextButton}
        position="absolute"
        right="10px"
        top="50%"
        transform="translateY(-50%)"
        zIndex={10}
        bg="none"
      >
        <IoIosArrowForward style={{ color: "#FFFFFFB2" }} />
      </Icon>
    </Box>
  );
};

export default HeaderCarousel;
