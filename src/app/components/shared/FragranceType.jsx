import { Box, Grid, GridItem, Button, Heading, Text } from "@chakra-ui/react";
import { HeadingForHome } from ".";
import backImg from "../../../../public/images/splitBack.webp";

const fragrances = [
  { label: "ALL FRAGRANCES", colSpan: 2, rowSpan: 2 },
  { label: "MEN", colSpan: 1 },
  { label: "WOMEN", colSpan: 1 },
  { label: "UNISEX", colSpan: 2 },
];


const FragranceType = () => {

  
  return (
    <Box textAlign="center" py={8} px="90px">
      <HeadingForHome
        heading={"Shop by Fragrance Type"}
        text={"Explore our collections for men, women, unisex, and more to find your perfect scent"}
        theme="black"/>
     
      <Grid
        templateRows={{ base: "repeat(2, 1fr)", md: "repeat(2, 1fr)" }}
        templateColumns={{ base: "1fr", md: "repeat(4, 1fr)" }}
        gap={4}
        mb={6}
        position="relative"
        backgroundImage={`url(${backImg.src})`}
        backgroundPosition="center"
        backgroundSize="cover"
        backgroundRepeat="no-repeat"
        height="600px"
      >
        {fragrances.map((item, index) => (
          <GridItem
            key={index}
            colSpan={item.colSpan}
            rowSpan={item.rowSpan || 1}
            display="flex"
            alignItems="center"
            justifyContent="center"
            position="relative"
            bg="rgba(0, 0, 0, 0.5)"
            borderRadius="lg"
          >
            <Heading fontSize="64px" fontWeight={600} lineHeight="85px" color="#ffffff">
              {item.label}
            </Heading>
          </GridItem>
        ))}
      </Grid>

      <Button background='#0E623E' p="16px 24px" width="13vw" height="auto" variant="solid" borderRadius="14px">
      <Text fontSize='1.36vw' fontWeight={600} lineHeight="40px">View All Products</Text>
      </Button>
    </Box>
  );
};

export default FragranceType;
