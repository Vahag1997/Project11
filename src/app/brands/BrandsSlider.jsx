import React from "react";
import { Box, SimpleGrid } from "@chakra-ui/react";
import Versace from "../../../public/images/Versace.webp";
import Image from "next/image";
import { HeadingForHome } from "../components/shared";

const BrandSlider = () => {
  const gridItems = Array.from({ length: 15 }, (_, index) => index + 1);

  return (
    <Box paddingTop="30px">
      <HeadingForHome
        theme="dark"
        heading={"Shop the most popular brands"}
        text={"Explore our selection of top-selling fragrance brands known for their quality and unique scents"} />
      <Box p={10} px="140px">
        <SimpleGrid columns={5} gap="22px">
          {gridItems.map((item) => (
            <Box
              key={item}
              color="white"
              p={4}
              textAlign="center"
              borderRadius="15px"
              boxShadow="0px 0px 9.35px 0px #00000040"
              cursor="pointer"
              _hover={{ transform: "scale(1.05)", boxShadow: "0px 0px 12px 0px #00000060" }}
              transition="all 0.2s ease-in-out"
              width="100%"
              aspectRatio="1.5"
            >
              <Image
                src={Versace}
                alt="brand image"
                width={350}
                height={200}
                unoptimized
                layout="responsive"
              />
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default BrandSlider;
