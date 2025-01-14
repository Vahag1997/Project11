"use client";
import { Flex, Input, IconButton } from '@chakra-ui/react';
import { InputGroup } from '../ui/input-group';
import Image from 'next/image';
import myImage from '../../../../public/narffum-logo.png';
import { FaRegHeart } from "react-icons/fa";
import { IoSearch, IoBagOutline } from "react-icons/io5";
import { RxAvatar } from "react-icons/rx";
import { SelectFlag, SelectCurrency, HeaderCarousel } from '.';
// import dynamic from 'next/dynamic';


// const HeaderCarousel = dynamic(() => import('./HeaderCarousel'), {
//     ssr: false,
//   });

export default function Header() {
 
    

    return (
        <>
            <Flex bg="white" boxShadow="md" px="45px" py={4} justifyContent="space-between">
                <InputGroup width={300} endElement={<IoSearch size={25} />}>
                    <Input border="none" placeholder="Search ..." borderBottom="1px solid" borderRadius="23px" />
                </InputGroup>

                <Image src={myImage} alt='logo' width={250} height={100} />
                
                <Flex gap="15px">
                    <Flex>
                        <IconButton background="none" color="black" size="2xl"> <FaRegHeart width={60} height={60} /> </IconButton>
                        <IconButton background="none" color="black" size="2xl"> <IoBagOutline width={60} height={60} /> </IconButton>
                        <IconButton background="none" color="black" size="2xl">  <RxAvatar width={60} height={60} /> </IconButton>
                    </Flex>
                    <Flex gap="10px">
                        <SelectCurrency />
                        <SelectFlag />
                    </Flex>
                </Flex>
            </Flex>
            <HeaderCarousel/>
        </>
    );
}
