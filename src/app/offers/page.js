'use client'
import { useState, useEffect } from "react";
import { CallUsNow, FaqSection, SingleImageText } from "../components/shared";
import FilterMenu from "../products/FilterMenu";
import ProductCards from "../products/ProductCards";
import RadioForNotes from "../products/RadioForNotes";
import { Flex } from "@chakra-ui/react";


const Offers = () => {

    const [isMobile, setIsMobile] =useState(true);
  
    useEffect(() => {
      const screenSizeCheck = () => {
        setIsMobile(window.innerWidth < 1023 ? true : false);
      };
      screenSizeCheck();
  
      window.addEventListener("resize", screenSizeCheck);
  
      return () => {
        window.removeEventListener("resize", screenSizeCheck);
      };
    }, []);

  return (
    <>
    <SingleImageText section={"offers"} img="/headerImages/product.webp" />
        <Flex mt={{base:"0px", md:"40px"}} px={{base:"15px", md: "90px", xl:"90px"}} gap="50px" flexDir="column" justify={"center"} align={"baseline"} pb="120px">
            <RadioForNotes  isMobile={isMobile}/>
            <Flex gap="15px">
            {!isMobile && <FilterMenu />} 
            <ProductCards />
            </Flex>
        </Flex>
      <CallUsNow/>
      <FaqSection/>
    </>
  );
}

export default Offers;