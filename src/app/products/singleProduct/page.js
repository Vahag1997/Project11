'use client'
import React from "react";
import { Flex, Box } from "@chakra-ui/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import './singleCard.css'
import ProductCardAccord from "./ProductCardAccord";
import SingleProductCard from "./SingleProductCard";
import GuaranteIconsCard from "./GuaranteIconsCard";
import Testimonial from "../../components/shared/Testimonials/Testimonials";
import Voting from "./voting";


const SingleProduct = () => {

  return (
    <Box px={"90px"} py={"50px"}>
      <Flex gap="15px" mt="50px" >
        <SingleProductCard />
        <ProductCardAccord />
      </Flex>
      <GuaranteIconsCard />
      <Testimonial/>
      <Voting/>
    </Box>
  );
};

export default SingleProduct;
