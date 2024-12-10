import { Box, Grid, GridItem, Button, AspectRatio, Heading } from "@chakra-ui/react";
import { HeadingForHome } from ".";
import Citrus from "../../../../public/images/Citrus.webp";
import Leather from "../../../../public/images/Leather.webp";
import Floral from "../../../../public/images/Floral.webp";
import Tobacco from "../../../../public/images/Tobacco.webp";
import Spicy from "../../../../public/images/Spicy.webp";
import Fruty from "../../../../public/images/Fruty.webp";
import Vanille from "../../../../public/images/Vanille.webp";
import Woody from "../../../../public/images/Woody.webp";
import Image from "next/image";

const ShopByNote = ({ info }) => {

    const { heading, text } = info
    const brands = [
        { name: "FLORAL", logo: Floral },
        { name: "WOODY", logo: Woody },
        { name: "TOBACCO", logo: Tobacco },
        { name: "VANILLE", logo: Vanille },
        { name: "SPICY", logo: Spicy },
        { name: "CITRUS", logo: Citrus },
        { name: "LEATHER", logo: Leather },
        { name: "FRUTY", logo: Fruty },
    ];

    return (
        <Box textAlign="center" py={8} px="90px">
            <HeadingForHome
                heading={heading}
                text={text}
                theme="black" />
            <Grid
                templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(4, 1fr)" }}
                gap={6}
                mb={6}
            >
                {brands.map((brand, index) => (
                    <GridItem
                        key={index}
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        bg="white"
                        cursor="pointer"
                        pos="relative"
                        background="black"
                        borderRadius="20px"
                        _hover={{ transform: "scale(1.05)", boxShadow: "0px 0px 12px 0px #00000060" }}
                        transition="all 0.2s ease-in-out"
                    >
                        <Image
                            src={brand.logo}
                            alt={brand.name}
                            layout="responsive"
                            width={400}
                            height={250}
                            style={{
                                objectFit: "cover",
                                width: "100%",
                                maxHeight: "290px",
                                borderRadius: "20px",
                                opacity: "0.5"
                            }}
                            unoptimized
                        />
                        <Heading pos="absolute" color="#ffffff" fontSize="64px">{brand.name}</Heading>
                    </GridItem>
                ))}
            </Grid>

            <Button
                background="#0E623E"
                size="lg"
                variant="solid"
                fontWeight="bold"
                borderRadius="md"
                color="white"
                _hover={{ bg: "#09532C" }}
            >
                View All Brands
            </Button>
        </Box>
    );
};

export default ShopByNote;
