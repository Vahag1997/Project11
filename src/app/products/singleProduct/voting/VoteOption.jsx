import { Flex, Text, IconButton } from "@chakra-ui/react";
import { ProgressBar, ProgressRoot } from "../../../components/ui/progress";
import { GoPlus } from "react-icons/go";
import styles from "./voting.module.css";

const VoteOption = ({ label, value, onVote }) => (

    
    <Flex 
        gap={{base:"2px", md:"15px"}} 
        width="100%" 
        flexWrap="nowrap" 
        align="center" 
        justify="space-between"
    >
        {/* Label and Percentage */}
        <Flex 
            align="center" 
            gap="7.7px" 
            flex="1 1 auto" 
            minW="40%"  
        >
            <Text 
                fontSize={{ base: "16.5px", md: "22px" }} 
                fontWeight={400} 
                lineHeight={{ base: "23.1px", md: "27.5px" }} 
                flex="1"
            >
                {label}
            </Text>
            <Text 
                fontSize={{ base: "13.2px", md: "16.5px" }}  /* 10% increase from 12px and 15px */
                fontWeight={600}
                flex="none"
            >
                {value}%
            </Text>
        </Flex>

        {/* Progress Bar */}
        <ProgressRoot 
            flex="3" 
            value={value} 
            minW="46%"  
            maxW="46.2%"    
        >
            <ProgressBar value={value} height="9.9px" className={styles.example} />  {/* 10% increase from 9px */}
        </ProgressRoot>

        {/* Vote Button */}
        <IconButton
            flex="none"
            h="23.1px"   /* 10% increase from 21px */
            w="23.1px"   /* 10% increase from 21px */
            onClick={onVote}
            background="#0E623E"
            aria-label="Vote"
        >
            <GoPlus size={15.4} />  {/* 10% increase from 14px */}
        </IconButton>
    </Flex>
);

export default VoteOption;
