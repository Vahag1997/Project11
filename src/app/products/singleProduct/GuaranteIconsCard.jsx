import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { TruckIcon, OriginalIcon, HandsIcon } from "./icons/SingleProductIcons";
import { getTranslations } from "next-intl/server";


const GuaranteIconsCard = async () => {

const t = await getTranslations("Guarante");
  return (
    <Flex flexDir="column" gap={{ base: "20px", md: "50px", lg: "70px" }}>
      <Flex
        gap={{ base: "10px", md: "15px", lg: "20px" }}
        justify="center"
        minH={{ base: "80px", md: "140px", lg: "160px" }}
        align="baseline"
        boxShadow="md"
        background="#F5F5F5"
        borderRadius="10px"
        px="20px"
        py={{ base: "8px", md: "20px", lg: "25px" }}
        flexWrap={{ base: "wrap", md: "nowrap" }}
      >
        <Flex
          flexDir="column"
          align="center"
          gap="10px"
          justify="center"
          flex="1"
        >
          <TruckIcon />
          <Text
            fontSize={{ base: "10px", md: "16px", lg: "18px" }}
            fontWeight={500}
          >
           {t("freeDelivery")}
          </Text>
        </Flex>
        <Flex
          flexDir="column"
          align="center"
          gap="10px"
          justify="center"
          flex="1"
        >
          <OriginalIcon />
          <Text
            fontSize={{ base: "10px", md: "16px", lg: "18px" }}
            fontWeight={500}
          >
          {t("100Original")}
          </Text>
        </Flex>
        <Flex
          flexDir="column"
          align="center"
          gap="10px"
          justify="center"
          flex="1"
        >
          <HandsIcon />
          <Text
            fontSize={{ base: "10px", md: "16px", lg: "18px" }}
            fontWeight={500}
          >
           {t("payOnDelivery")}
          </Text>
        </Flex>
      </Flex>

      <Flex
        flexDir="column"
        gap={{ base: "10px", md: "20px" }}
        borderRadius="10px"
        boxShadow="md"
      >
        <Heading
          fontWeight={800}
          fontSize={{ base: "22px", md: "26px", lg: "30px" }}
          lineHeight={{ base: "28px", md: "34px", lg: "39px" }}
          px={{ base: "20px", md: "30px", lg: "40px" }}
        >
         {t("description")}
        </Heading>
        <Box
          background="#F5F5F5"
          px={{ base: "20px", md: "30px", lg: "40px" }}
          py={{ base: "15px", md: "20px", lg: "25px" }}
        >
          <Text
            fontWeight={400}
            fontSize={{ base: "16px", md: "20px", lg: "25px" }}
            lineHeight={{ base: "24px", md: "28px", lg: "31px" }}
            letterSpacing="0.06em"
          >
            More details of the product here for example lorem ipsum more
            details of the product here for example lorem ipsum more details of
            the product here for example lorem. More details of the product here
            for example lorem ipsum more details of the product here for example
            lorem ipsum more details of the product here for example lorem. More
            details of the product here for example lorem ipsum more details of
            the product here for example lorem ipsum more details of the product
            here for example lorem. More details of the product here for example
            lorem ipsum more details of the product here for example lorem ipsum
            more details of the product here for example lorem. More details of
            the product here for example lorem ipsum more details of the product
            here for example lorem ipsum more details of the product here for
            example lorem.
          </Text>
        </Box>
      </Flex>
    </Flex>
  );
};

export default GuaranteIconsCard;
