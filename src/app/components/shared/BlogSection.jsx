import { Box, Text, Heading, Flex, Button, Grid } from "@chakra-ui/react"
import Image from "next/image"
import { HeadingForHome } from "."


const BlogSection = ({ cardsData }) => {


    return (
        <Box textAlign="center" py={8} px="90px" background="#093623">
            <HeadingForHome
                heading={"Perfume Magazine"}
                text={"Stay up to date with the latest in the world of fragrances, expert tips, and insider news"}
            />
            {/* Responsive Stack for Cards */}
            <Grid
            mt="20px"
            templateColumns="repeat(3, 1fr)" // 3 columns
            px="50px"
            gap={6} // gap between grid items
        >
            {cardsData.map((card, idx) => (
                <Box
                    key={idx}
                    bg="white"
                    borderRadius="22px"
                    boxShadow="lg"
                    overflow="hidden"
                    border="1px solid"
                >
                    {/* Image Section */}
                    <Image
                        src={card.imageSrc}
                        alt={card.title}
                        width={400}
                        height={250}
                        style={{ objectFit: "cover", width: "100%", height: "auto" }}
                        unoptimized
                    />

                    {/* Content Section */}
                    <Flex padding="25px" mt="10px" gap="20px" flexDir="column" spacing='20px' align="stretch">
                        <Heading fontSize="30px" fontWeight="bold" textAlign="left" maxW="500px">
                            {card.title}
                        </Heading>
                        <Text fontSize="20px" color="gray.600" textAlign="left">
                            {card.description}
                        </Text>
                        <Button background="#0E623E" borderRadius="10px" textAlign="left" variant="solid" fontSize="17px" width="200px" alignSelf="flex-start">
                            Read More
                        </Button>
                    </Flex>

                    {/* Footer Section */}
                    <Box bg="gray.50" px={4} py={2} textAlign="left">
                        <Text fontSize="ls">
                            {card.date}
                        </Text>
                    </Box>
                </Box>
            ))}
        </Grid>
            <Button mt="20px" borderRadius="14px" width="300px" height="77px" background="#FFFFFF">
                <Text fontSize="25px" color="#093623"> View All Blog</Text>
            </Button>
        </Box>
    )
}

export default BlogSection