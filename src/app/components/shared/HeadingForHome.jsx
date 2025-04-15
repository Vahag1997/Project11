import { Heading, Text, Flex } from "@chakra-ui/react"

const HeadingForHome = ({ heading, text, theme="#ffffff", ...rest}) => {

    return (
        <Flex flexDir="column" alignItems="center" gap="6px" {...rest}>
            <Heading textAlign="center" color={theme} fontSize={{base:"28px", sm:"5.56vw", lg:"3.33vw"}} fontWeight={600} lineHeight={{base: "30px", md:"85px"}} mb={2}>{heading}</Heading>
            <Text px='50px' textAlign="center" maxW="900px" color={theme} fontSize={{base:"13px", sm:"2.56vw", lg: "1.56vw"}} lineHeight={{base: "13px", md:"35px"}} mb={{base:2, md:6}}>{text}</Text>
        </Flex>
    )
}

export default HeadingForHome