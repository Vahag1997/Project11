import { Flex, Text, Button, Heading } from "@chakra-ui/react";

const CallUsNow = () => {


    return (
        <Flex
            backgroundImage="linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('/images/BackTheme.webp')" backgroundSize="cover"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            height="375px"
            align="center"
            justify="space-between"
            px="90px"
        >
            <Flex flexDir="column" gap="10px">
                <Heading fontSize="50px" fontWeight={600} lineHeight="90px" color="white">Cant Find What You are Looking For?</Heading>
                <Text fontSize='28px' fontWeight={400} lineHeight="45px" color="white" maxW="900px">Let us know, and our team will assist you in
                    finding the perfect fragrance. We are just a click away!</Text>
            </Flex>
            <Button
                mt={6}
                minW="300px"
                minH="75px"
                background='#0E623E'
                borderRadius="20px"
                _hover={{
                    background: "#097246",
                    transform: "scale(1.05)",
                    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
                }}
            >
                <Text
                    fontWeight={400}
                    fontSize="27px"
                    lineHeight="34px">
                    Call us now
                </Text>
            </Button>
        </Flex>

    );
};

export default CallUsNow;
