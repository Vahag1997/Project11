"use client";
import React, { useState, useEffect } from "react";
import { Icon, Box, useBreakpointValue } from "@chakra-ui/react";
import { useTranslations } from "next-intl";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { HeadingForHome } from "..";
import TestimonialCard from "./TestimonialCard";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { TESTIMONIALSDATA } from "../../constants/constants";
import Loading from "../Loading";
import styles from "./testimonials.module.css";
import "swiper/css";
import "swiper/css/navigation";

const Testimonial = () => {
  const slidesPerView = useBreakpointValue({ base: 1, md: 3 });
  const [loading, setLoading] = useState(true);
  const t = useTranslations("Testimonials");

  useEffect(() => {
    setLoading(false);
  }, []);
  if (loading) {
    return <Loading />;
  }
  return (
    <Box
      paddingTop={{ base: "20px", md: 8 }}
      paddingBottom={{ base: "40px", md: "150px" }}
      px={{ base: "40px", md: "90px" }}
      className={styles.testimonialContainer}
    >
      <HeadingForHome
        heading={t("title")}
        text={t("description")}
        theme="black"
      />
      <Swiper
        slidesPerView={slidesPerView}
        spaceBetween={40}
        navigation={{
          nextEl: `.${styles.customNextButton}`,
          prevEl: `.${styles.customPrevButton}`,
        }}
        modules={[Navigation]}
        className={styles.swiper}
      >
        {TESTIMONIALSDATA.map((product, idx) => (
          <SwiperSlide key={idx} className={styles.swiperSlide}>
            <TestimonialCard key={idx} data={product} />
          </SwiperSlide>
        ))}
        <Icon className={styles.customNextButton} fontSize="2xl">
          <IoIosArrowForward />
        </Icon>
        <Icon className={styles.customPrevButton} fontSize="2xl">
          <IoIosArrowBack />
        </Icon>
      </Swiper>
    </Box>
  );
};

export default Testimonial;
