import { Flex, Text, IconButton } from "@chakra-ui/react";
import { ProgressBar, ProgressRoot } from "../../../components/ui/progress";
import { GoPlus } from "react-icons/go";
import styles from "./voting.module.css";


const VoteOption = ({ label, value, onVote }) => (
    <Flex gap="30px">
        {/* Label and Percentage */}
        <Flex justify="space-between" align="center" gap="10px" minW="350px">
            <Text fontSize="lg" fontWeight="medium">{label}</Text>
            <Text fontSize="lg" fontWeight="bold">{value}%</Text>
        </Flex>

        <Flex align={"center"} gap="10px">
            {/* Progress Bar */}
            <ProgressRoot maxW="100%" minW="300px" value={value}>
                <ProgressBar value={value} height="13px" className={styles.example}/>
            </ProgressRoot>

            {/* Vote Button */}
            <IconButton
                h="30px"
                onClick={onVote}
                background="#0E623E">
                <GoPlus />
            </IconButton>
        </Flex>
    </Flex>
);

export default VoteOption;
