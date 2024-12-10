import { Box, Grid, GridItem, Button, Heading } from "@chakra-ui/react";
import { HeadingForHome } from ".";
import backImg from "../../../../public/images/splitBack.webp";

const FragranceType = ({ info }) => {

  const { heading, text } = info
  
  const fragrances = [
    { label: "ALL FRAGRANCES", colSpan: 2, rowSpan: 2 },
    { label: "MEN", colSpan: 1 },
    { label: "WOMEN", colSpan: 1 },
    { label: "UNISEX", colSpan: 2 },
  ];

  return (
    <Box textAlign="center" py={8} px="90px">
      <HeadingForHome
        heading={heading}
        text={text}
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

      <Button background='#0E623E' size="lg" variant="solid" fontWeight="bold" borderRadius="md">
        View All Products
      </Button>
    </Box>
  );
};

export default FragranceType;
