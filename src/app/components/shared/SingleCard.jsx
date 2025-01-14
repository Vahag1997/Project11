import { Flex, Box, Image, Text, IconButton, Button } from "@chakra-ui/react"
import { IoIosHeartEmpty } from "react-icons/io";
import { IconContext } from "react-icons";
import { Rating } from "../ui/rating";

const SingleCard = ({ product }) => {

    return (
        <>
                <Flex flexDir="column" gap={2} p={4} position="relative" zIndex="1" textAlign="center">
                    {/* Image */}
                    <Box
                        className="image"
                        width="auto"
                        height="auto"
                        mx="auto"
                        mt={1}
                        position="relative"
                    >
                        <Image
                            src={product.image}
                            alt={product.name}
                            border="3px solid white"
                            fill
                            borderRadius="20px"
                        />{product.discount &&  <Text position="absolute"
                            top="6%"
                            left="6%"
                            fontWeight={700}
                            lineHeight="30px"
                            fontSize="20px"
                        >-{product.discount}</Text>}
                      
                    </Box>
                    {/* Name and Description */}
                    <Flex flexDir="column" gap={1} className="name-profession" >
                        <Text fontWeight="400" fontSize="26px" lineHeight="33px" textAlign="left">
                            {product.name}
                        </Text>
                        <Text fontWeight="400" fontSize="26px" lineHeight="33px" textAlign="left">
                            {product.description}
                        </Text>
                    </Flex>

                    <Flex className="rating" mt={1}>
                    <Rating readOnly defaultValue={3} size="md" colorPalette="orange"/>
                    </Flex>
                    <Flex justify="space-between" alignItems="center">
                        <Text fontWeight="400" fontSize="24px" lineHeight="30px"> {product.price}</Text>
                        <IconButton bg="none">
                            <IconContext.Provider value={{ color: "black" }}>
                                <IoIosHeartEmpty style={{ width: "unset", height: "unset", fontSize: "1.8rem" }} />
                            </IconContext.Provider>
                        </IconButton>

                    </Flex>

                    {/* Buttons */}
                    <Flex  justifyContent="space-around" w="100%">
                        <Button borderRadius="11px" minH="60px" bg="#0E623E" w="100%">
                        <Text fontWeight="400" fontSize="20px" lineHeight="33px" color="white" _hover={{ bg: "#207439" }}>
                            ADD TO BAG
                        </Text>
                        </Button>
                    </Flex>
                </Flex>
        </>
    )
}

export default SingleCard