import React from "react";
import { Icon } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { HeadingForHome } from "..";
import TestimonialCard from "./TestimonialCard";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { TESTIMONIALSDATA } from "../../constants/constants";
import styles from "./testimonials.module.css";

import "swiper/css";
import "swiper/css/navigation";

const Testimonial = () => {
  return (
    <div className={styles.testimonialContainer}>
      <HeadingForHome
        heading={"Testimonials"}
        text={"Hear what our customers are saying about their favorite Narffum scents"}
        theme="black"
      />
 <Swiper
  slidesPerView={3}
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
    </div>
  );
};

export default Testimonial;
