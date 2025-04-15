"use client";
import React from "react";
import { Box, Icon, Image, useBreakpointValue } from "@chakra-ui/react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ARRAY } from "../../constants/constants";
import "swiper/css";
import { HeadingForHome } from "..";
import styles from './fragnance.module.css'


const FragranceCarousel = () => {
  
   const slidesPerView = useBreakpointValue({ base: 2, md: 4 });

  return (
    <Box textAlign="center" py={{base:6,md:12}} pos="relative" px={{base:"10px", md:"60px", xl:"90px"}}>
      <HeadingForHome
        heading={"Experience Our Fragrances in Motion"}
        text={"Dive into the essence of our perfumes with immersive videos that bring each scent to life"}
        theme="black" />


      <Swiper
        slidesPerView={slidesPerView === 4 ? 3 : 2}
        spaceBetween={slidesPerView === 2 ? 8 : 20}
        modules={[Navigation]}
        navigation={{
          nextEl: `.${styles.customNextButton}`,
          prevEl: `.${styles.customPrevButton}`,
        }}
        className={styles.swiper}
      >
        {ARRAY.map((_, idx) => {
          return (
            <SwiperSlide className={styles.swiperSlideFregnance} key={idx}>
              <Box borderRadius="md" overflow="hidden" height={{base:"140px", md:"250px", xl:"350px"}}>
                <Image
                  alt="Parfume 1"
                  src="https://s3-alpha-sig.figma.com/img/86c4/59c3/256dc27162dff1df74547f9a4f583129?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=DFElmkJhw4YC-SpewDbPjRujR8PTGhizJ-TNbSKE1GYbTHyGY29QDnCGAIeufWOxkADCYZdfsSkDPz9HXgyfCgxYsHzX0OHIIBbbPtBjv5qb6ivEe4-plftcBYheCAyzhq1d40e-it0XvgESSV6J1GGcyMWNA5Gjl4PgVizVcjtqrPQPBcWrdEwZnpug181-beeCQagzjSCe4po-3-K0FhMLepYkvI1zfFwmw9f8AajimWIF66pa0F3vT539yl6csSfMl1QkKQsm5mnmyGPShfXuAVct3chEeyA5WRdXB5XfDBcSvwjGY6A2K81WuY77pstm4Kop5v5rkD3KG5xzFQ__"
                  objectFit="cover"
                  border="3px solid white"
                  borderRadius="20px"
                  width={400}
                  height={400}
                  style={{ objectFit: "cover", maxWidth: "100%", maxHeight:"100%"}}
                  unoptimized
                />
                
              </Box>
            </SwiperSlide>
          );
        })}

        <Icon className={styles.customNextButton} fontSize="xl">
          <IoIosArrowForward />
        </Icon>
        <Icon className={styles.customPrevButton} fontSize="xl">
          <IoIosArrowBack />
        </Icon>
      </Swiper>
    </Box>
  );
};

export default FragranceCarousel;
