import { Box, Grid, GridItem, Flex, Text, Heading } from "@chakra-ui/react"
import { HeadingForHome } from "../components/shared"
import { VALUESMAP } from "../components/constants/constants"


const Values = () => {
    return (
        <Box background="#093623">
            <HeadingForHome
            pt="70px"
                heading={"Core Values That Drive Our Success"}
                text={"At Narfum, our core values guide everything we do. They shape our commitment to providing exceptional fragrances and outstanding customer experiences"} />
            <Grid
                templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(3, 1fr)" }}
                gap={8}
                px="200px"
                mt="50px"
            >
                {VALUESMAP.map((item, index) => (
                    <GridItem
                        key={index}
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        bg="white"
                        borderRadius="20px"
                        boxShadow="md"
                        border="1px solid #9A6B6B"
                        cursor="pointer"
                        minH="300px"
                    >
                        <Flex flexDir="column" p="30px 45px 30px 45px" gap="10px">
                            {item.icon}
                            <Heading fontWeight={600} fontSize="25px" lineHeight="40px">{item.name}</Heading>
                            <Text fontWeight={400} fontSize="15px" lineHeight="30px">{item.description}</Text>
                        </Flex>
                    </GridItem>
                ))}
            </Grid>
        </Box>
    )
}

export default Values