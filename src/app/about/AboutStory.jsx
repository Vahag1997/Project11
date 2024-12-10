import { Box, Heading, Flex, Text, Button } from "@chakra-ui/react"
import { FiPhone } from "react-icons/fi";
import { Icon } from "@chakra-ui/react";
import Image from "next/image"

const AboutStory = () => {

    return (
        <Box textAlign="center">
            <Heading
            fontWeight={600}
            lineHeight="80px"
            fontSize="50px"
            >
                Our Story
            </Heading>
            <Flex
                direction={{ base: "column", md: "row" }}
                px="155px"
                mt="67px"
                mb="50px"
                gap={10}
                align="stretch"
                justify="space-between"
                minH="520px">

                <Box flex="1" display="flex" alignItems="stretch">
                    <Image
                        src={"https://s3-alpha-sig.figma.com/img/5a20/6df7/6ce6fdffc93a7a606c2131c069c8200e?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Af8IcXT7DubpJNEAsAY0Z0p19gHdEWhgZVAugBscaRk74wVKzxjT3uWs2wbTR8MlUugRo8xPv1oiXU54oA2rJzD0M1jN4mGEoLavJjpiYciEjBOSF6wRlGL8~E1Z2VaEmCHCI5-f0DXxi-m6zHnjEEuStAfAQ2PqFwP1vSZz5eIXCvw1-572iz3QnVSe~955ZDmPZ58hjzzEhHNurr7d~tDm9~uvO94m9wSbUsv5QrwXUCzoOLW0zfU121MBWE~MAZZR2~uf83wWSNN-etYOcgVPBCQ1LM-uAtEUAlF1U3aGQGhTymN52sYWYzQE8ULNLOuP5b8mQrHllKfInqMj5g__"}
                        alt="Story image"
                        layout="responsive"
                        width={800}
                        height={650}
                        objectFit="cover"
                        unoptimized
                    />
                </Box>
                <Flex
                    flex="1"
                    flexDir="column"
                    justify="space-between"
                    gap="15px"
                >
                    <Text
                        mt="100px"
                        fontSize="25px"
                        fontWeight={400}
                        lineHeight="25px"
                        textAlign="left">
                        Founded with a love for perfumes, Narfum has grown into a
                        trusted name in the fragrance world. We carefully curate a
                        selection of the finest scents to offer something for everyone.
                        From timeless classics to modern creations, we are here to help
                        you find the fragrance that feels like you</Text>
                    <Flex flexDir="column" gap="40px">
                        <Button
                            width="220px"
                            height="70px"
                            background="#0E623E"
                            borderRadius="50px">
                            <Text
                                fontSize="25px"
                                fontWeight={400}
                                lineHeight="25px"
                            >View Offers</Text></Button>

                        <Flex gap="30px">
                            <Button width="70px" height="70px" borderRadius="33px" background="#0E623E">
                                <Icon fontSize="35px"><FiPhone />
                                </Icon></Button>
                            <Flex flexDir="column" justify="space-between" align="baseline">
                                <Text fontSize="22px" lineHeight="30px">Call Us</Text>
                                <Text fontSize="22px" lineHeight="30px" color="#7A7A7A">+1 (234) 567 890 00</Text>
                            </Flex>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
        </Box>
    )
}

export default AboutStory