import { Heading, Text, Flex } from "@chakra-ui/react"

const HeadingForHome = ({ heading, text, theme="#ffffff", ...rest}) => {

    return (
        <Flex flexDir="column" alignItems="center" {...rest}>
            <Heading color={theme} fontSize="3.33vw" fontWeight={600} lineHeight="85px" mb={2}>{heading}</Heading>
            <Text  textAlign="center" maxW="900px" color={theme} fontSize="1.56vw" lineHeight="39px" mb={6}>{text}</Text>
        </Flex>
    )
}

export default HeadingForHome