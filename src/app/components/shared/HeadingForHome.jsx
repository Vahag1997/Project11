import { Heading, Text, Flex } from "@chakra-ui/react"

const HeadingForHome = ({ heading, text, theme="#ffffff", ...rest}) => {

    return (
        <Flex flexDir="column" alignItems="center" {...rest}>
            <Heading color={theme} fontSize="60px" fontWeight={600} lineHeight="85px" mb={2}>{heading}</Heading>
            <Text  textAlign="center" maxW="900px" color={theme} fontSize="30px" lineHeight="39px" mb={6}>{text}</Text>
        </Flex>
    )
}

export default HeadingForHome