"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Flex,
  Separator,
  HStack,
  Heading,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Navigation } from "swiper/modules";
import { SingleCard } from "../../../components/shared";
import "swiper/css";
import "swiper/css/navigation";
import "./index.css";

const ProductCarousel = ({ info, products = [] }) => {
  const slidesPerView = useBreakpointValue({ base: 2, md: 4 });

  return (
    <Flex
      flexDir="column"
      align="center"
      mt={{ base: "10px", md: "50px" }}
      gap={{ base: "0px", xl: "50px" }}
      px={{ base: "20px", md: "60px", xl: "90px" }}
      py={{ base: "10px", md: "50px" }}
    >
      <HStack width="100%" gap={{ base: "10px", md: "40px" }}>
        <Heading
          flexShrink="0"
          textAlign="center"
          fontSize={{ base: "10px", xl: "3vw" }}
          fontWeight={600}
          lineHeight={{ base: "30px", md: "85px" }}
          mb={2}
        >
          {info}
        </Heading>
        <Separator flex={1} size="xl" />
      </HStack>

      <div className="swiper-wrapper2">
        <Swiper
          slidesPerView={slidesPerView}
          spaceBetween={slidesPerView === 2 ? 15 : 25}
          navigation={true}
          modules={[Navigation]}
        >
          {products.map((product, idx) => (
            <SwiperSlide key={idx}>
              <SingleCard key={idx} product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Flex>
  );
};

export default ProductCarousel;
