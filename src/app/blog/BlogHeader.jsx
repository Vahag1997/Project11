import { Flex, Heading, Text } from "@chakra-ui/react"
import { HeadingForHome } from "../components/shared"


const BlogHeader = () => {

    return (
        <Flex align="center" flexDir="column" gap="40px" px="80px" mt="20px" mb="40px">
            <Heading fontWeight={400} fontSize="55px" lineHeight="28px" > Why Follow Our Blog?</Heading>
            <Text fontSize="30px" fontWeight={400} lineHeight="28px" textAlign="center">Expert Insights: Contributions from perfumers, fragrance consultants, and enthusiasts.
                Engaging Content: Easy-to-follow guides, comparisons, and fun olfactory trivia.
                Interactive Community: Share your favorite scents and discover new ones through our growing community of fragrance lovers.
                Are you ready to dive into the world of fragrances?</Text>
        </Flex>
    )
}

export default BlogHeader