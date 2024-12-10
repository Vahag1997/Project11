import { Box, Flex, Text, VStack, Link, Heading } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box bg="#093623" color="white" py={10}>
      <Flex
        direction={{ base: 'column', md: 'row' }}
        justify="space-evenly"
        align="start"
        mx="auto"
        px={5}
        mt="45px"
        
      >
        {/* Navigation Section */}
        <VStack align="start"  gap="15px">
          <Heading fontWeight={800} fontSize="30px" lineHeight="40px">NAVIGATION</Heading>
          <Link href="#" _hover={{ textDecoration: 'underline' }} color="#FFFFFF">
          <Text fontSize="20px" fontWeight={400} lineHeight="30px">HOME</Text></Link>
          <Link href="#" _hover={{ textDecoration: 'underline' }} color="#FFFFFF">
          <Text fontSize="20px" fontWeight={400} lineHeight="30px">ABOUT</Text></Link>
          <Link href="#" _hover={{ textDecoration: 'underline' }} color="#FFFFFF">
          <Text fontSize="20px" fontWeight={400} lineHeight="30px">BRANDS</Text></Link>
          <Link href="#" _hover={{ textDecoration: 'underline' }} color="#FFFFFF">
          <Text fontSize="20px" fontWeight={400} lineHeight="30px">BLOG</Text></Link>
          <Link href="#" _hover={{ textDecoration: 'underline' }} color="#FFFFFF">
          <Text fontSize="20px" fontWeight={400} lineHeight="30px">PRODUCTS</Text></Link>
          <Link href="#" _hover={{ textDecoration: 'underline' }} color="#FFFFFF">
          <Text fontSize="20px" fontWeight={400} lineHeight="30px">OFFERS</Text></Link>
        </VStack>
        <Box
          width="2px"
          bg="white"
          mx={5}
          minHeight={{ base: '0', md: '330px' }} 
          display={{ base: 'none', md: 'block' }} 
        />

        <VStack align="start" gap="15px">
          <Heading fontWeight={800} fontSize="30px" lineHeight="40px">COLLECTIONS</Heading>
          <Link href="#" _hover={{ textDecoration: 'underline' }} color="white">
          <Text fontSize="20px" fontWeight={400} lineHeight="30px"> PERFUME BRAND LIST</Text></Link>
          <Link href="#" _hover={{ textDecoration: 'underline' }} color="white">
          <Text fontSize="20px" fontWeight={400} lineHeight="30px"> PERFUMES LIST</Text></Link>
          <Link href="#" _hover={{ textDecoration: 'underline' }} color="white">
          <Text fontSize="20px" fontWeight={400} lineHeight="30px"> SEASONAL PERFUMES</Text></Link>
          <Link href="#" _hover={{ textDecoration: 'underline' }} color="white">
          <Text fontSize="20px" fontWeight={400} lineHeight="30px"> PERFUMES BY MOOD</Text></Link>
          <Link href="#" _hover={{ textDecoration: 'underline' }} color="white">
          <Text fontSize="20px" fontWeight={400} lineHeight="30px"> PERFUMES BY NOTES</Text></Link>
        </VStack>

        <Box
          width="2px"
          bg="white"
          mx={5}
          minHeight={{ base: '0', md: '330px' }} 
          display={{ base: 'none', md: 'block' }}/>

        <VStack align="start"  gap="15px">
          <Heading fontWeight={800} fontSize="30px" lineHeight="40px">CONTACT</Heading>
          <Text fontSize="20px" fontWeight={400} lineHeight="30px">Email: narffum@gmail.com</Text>
          <Text fontSize="20px" fontWeight={400} lineHeight="30px">Working Hours:</Text>
          <Text fontSize="20px" fontWeight={400} lineHeight="30px">Mon-Sun 8:00 AM - 4:00 PM</Text>
        </VStack>

        <Box
          width="2px"
          bg="white"
          mx={5}
          minHeight={{ base: '0', md: '330px' }} 
          display={{ base: 'none', md: 'block' }} 
        />
      </Flex>
      <Text textAlign="center" mt={12}>
        Copyright © 2024
      </Text>
    </Box>
  );
};
export default Footer;
