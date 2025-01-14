'use client'
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Box } from "@chakra-ui/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import  './singleCard.css'
import { FreeMode, Navigation, Thumbs } from "swiper/modules";



const SingleProductCard = () => {

      const [thumbsSwiper, setThumbsSwiper] = useState(null);
    
      const images = [
       "https://rouge.am/upload/resize_cache/webp/iblock/bef/n9nfwc9jkgwvmo26b8abcxtn4nryr31w.webp",
       "https://rouge.am/upload/resize_cache/webp/iblock/486/e50lm7jp05df6u01g9pk0339bs5c2iso.webp",
      ];

  return (
    <Box gap="15px" flex={1}>
      {/* Main Swiper for displaying large images */}
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        spaceBetween={10}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {images.map((imgUrl, index) => (
          <SwiperSlide key={`main-${index}`}>
            <Image src={imgUrl} alt={`Slide ${index + 1}`} width={800} height={600}/>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Thumbnail Swiper */}
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={2}
        freeMode={true}
        navigation={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {images.map((imgUrl, index) => (
          <SwiperSlide key={`thumb-${index}`} className="thumbSwiper">
            <Image src={imgUrl} alt={`Thumbnail ${index + 1}`} width={200} height={150}/>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}

export default SingleProductCard;