'use client'
import { CallUsNow, FaqSection } from "../components/shared"
import FilterMenu from "./FilterMenu"
import ProductCards from "./ProductCards"
import RadioForNotes from "./RadioForNotes"
import { Flex } from "@chakra-ui/react"




const Products = () => {

    return (
        <>
        <Flex mt="40px" px="82px" gap="100px" flexDir="column" justify={"center"} align={"baseline"} pb="120px">
            <RadioForNotes/>
            <Flex gap="15px">
            <FilterMenu />
            <ProductCards />
            </Flex>
        </Flex>
        <CallUsNow/>
        <FaqSection/>
        </>
    )
}

export default Products