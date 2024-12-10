import React from "react";
import { Box, Text, Heading, Flex } from "@chakra-ui/react";
import { Rating } from "../../ui/rating";

const TestimonialCard = ({ data }) => {
  
  const { name, brand, review, date } = data

  return (
    
    <Box
      bg="#F7F6FB"
      boxShadow="md"
      textAlign="left"
      p="32px"
      minH="330px"
    >
      {/* Ensure all content is inside one container */}
      <Flex justify="space-between" flexDir="column" align="baseline" mb={2}  minH="280px">
        <Flex flexDir="column">
            <Flex align="baseline" gap="20px"> 
            <Heading fontSize="30px" fontWeight={600}>
            {name}
            </Heading>
            <Rating readOnly defaultValue={3} size="md" colorPalette="orange"/>
            </Flex>
  
      <Text fontSize="20px" color="gray.500" mb={4}>
        {brand}
      </Text>
        </Flex>
        <Text fontSize="20px" lineHeight="24px" fontWeight={400} mb={4}>
        “ {review} ”
      </Text>

      <Text fontSize="19px" lineHeight="26px" color="#B9B9B9">
        date submitted, {date}
      </Text>
      </Flex>



    </Box>
  );
};

export default TestimonialCard;
