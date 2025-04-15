import { Flex, Spinner } from "@chakra-ui/react"

export default function Loading() {
    return (
        <Flex justify="center" align="center" height="300px">
            <Spinner size="xl" color="green.500" />
        </Flex>
    )
}
