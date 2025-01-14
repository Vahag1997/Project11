'use client'
import { Flex, Box } from "@chakra-ui/react"
import { SingleCard } from "../components/shared"
import Pagination from "../components/shared/Pagination"
import { PRODUCTS } from "../components/constants/constants"

const ProductCards = () => {
    return (
        <Flex flexDir="column" alignContent="center">
            <Flex flexWrap="wrap" justifyContent="flex-end" gap="25px" maxW="1600px">
                {PRODUCTS.map((item, index) => (
                    <Box
                        key={index}
                        minW="300px"
                        maxW="325px"
                        flexBasis="calc(25% - 25px)"
                        background="#EEE2D8"
                        borderRadius="20px"
                    >
                        <SingleCard product={item} />
                    </Box>
                ))}
            </Flex>
            <Pagination />
        </Flex>

    )
}

export default ProductCards