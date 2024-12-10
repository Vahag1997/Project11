import { Box, Grid, GridItem, Button} from "@chakra-ui/react";
import { HeadingForHome } from ".";
import Versace from "../../../../public/images/Versace.webp";
import Calvin from "../../../../public/images/Calvin.webp";
import Chanel from "../../../../public/images/Chanel.webp";
import Dolce from "../../../../public/images/Dolce.webp";
import Guess from "../../../../public/images/Guess.webp";
import JeanPaul from "../../../../public/images/JeanPaul.webp";
import MontBlanc from "../../../../public/images/MontBlanc.webp";
import Prada from "../../../../public/images/Prada.webp";
import Image from "next/image";

const PopularBrands = ({ info }) => {

    const { heading, text } = info
    const brands = [
        { name: "Calvin Klein", logo: Calvin },
        { name: "Dolce & Gabbana", logo: Dolce },
        { name: "Chanel", logo: Chanel },
        { name: "Prada", logo: Prada },
        { name: "Guess", logo: Guess },
        { name: "Mont Blanc", logo: MontBlanc },
        { name: "Jean Paul Gaultier", logo: JeanPaul },
        { name: "Versace", logo: Versace },
    ];

    return (
        <Box textAlign="center" py={8} px="90px">
            <HeadingForHome
                heading={heading}
                text={text}
                theme="black" />
            <Grid
                templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(4, 1fr)" }}
                gap={4}
                mb={6}
            >
                {brands.map((brand, index) => (
                    <GridItem
                        key={index}
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        bg="white"
                        borderRadius="20px"
                        boxShadow="md"
                        border="1px solid #9A6B6B"
                        p={4}
                        cursor="pointer" 
                    >
                     <Image src={brand.logo} alt={brand.name} height={305} width={400}  />
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

export default PopularBrands;
