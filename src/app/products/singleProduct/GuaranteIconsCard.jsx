import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import { TruckIcon, OriginalIcon, HandsIcon } from './icons/SingleProductIcons'


const GuaranteIconsCard = () => {

    return (
        <Flex mt="50px" flexDir={"column"} gap="70px">
            <Flex
                gap="20px"
                justify="center"
                w="50dvw"
                minH="160px"
                justifyContent="space-between"
                align={"baseline"}
                background={"#F5F5F5"}
                px={"70px"}
                py={"15px"}
            >
                <Flex flexDir={"column"} align={"center"} gap="15px" justify={"space-between"}>
                    <TruckIcon />
                    <Text>FREE DELIVERY</Text>
                </Flex>
                <Flex flexDir={"column"} align={"center"} gap="15px" justify={"space-between"}>
                    <OriginalIcon />
                    <Text>100% ORIGINAL</Text>
                </Flex>
                <Flex flexDir={"column"} align={"center"} gap="15px" justify={"space-between"}>
                    <HandsIcon />
                    <Text>PAY ON DELIVERY</Text>
                </Flex>
            </Flex>
            <Flex flexDir={"column"} gap={"30px"}>
                <Heading fontWeight={800} fontSize="30px" lineHeight="39px" px={"40px"}>DESCRIPTION</Heading>
                <Box background={"#F5F5F5"} px={"40px"} py={"25px"} w="70dvw">
                    <Text fontWeight={400} fontSize="25px" lineHeight="31px" letterSpacing="0.06em">
                        More details of the product here for example lorem ipsum more details of the product here for example lorem ipsum more details of the product here for example lorem.
                        more details of the product here for example lorem ipsum more details of the product here for example lorem ipsum more details of the product here for example lorem .
                        more details of the product here for example lorem ipsum more details of the product here for example lorem ipsum more details of the product here for example lorem . more details of the product here for example lorem ipsum more details of the product here for example lorem ipsum more details of the product here for example lorem more details of the product here for example lorem ipsum more details of the product here for example lorem ipsum more details of the product here for example lorem more details of the product here for example lorem ipsum more details of the product here for example lorem ipsum more details of the product here for example lorem
                    </Text>
                </Box>
            </Flex>
        </Flex>
    )
}

export default GuaranteIconsCard