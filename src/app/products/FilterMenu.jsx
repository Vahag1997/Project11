'use client'

import { AccordionItem, AccordionItemContent, AccordionItemTrigger, AccordionRoot } from "../components/ui/accordion";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { Checkbox } from "../components/ui/checkbox";
import { useState } from "react";

const items = [
    { value: "brands", title: "BRANDS", text: ["Some value 1...", "Some value 2..."] },
    { value: "price", title: "PRICE", text: ["Some value 1...", "Some value 2..."] },
    { value: "brand-note", title: "BRAND NOTE", text: ["SENSUAL", "FRASH", "WOODY", "FLORAL", "FRUITY", "WARM & SPICY"] },
    { value: "gender", title: "GENDER", text: ["MALE", "FEMALE", "UNISEX"] },
    { value: "size", title: "SIZE", text: ["TRAVEL", "SMALL", "MEDIUM", "LARGE", "XL"] },
    { value: "sale", title: "SALE", text: ["10%", "20%", "30%", "40%", "50%", "60%", "70%", "80%"] },
];

const FilterMenu = () => {
    const [selectedValues, setSelectedValues] = useState({});

    const handleCheckboxChange = (categoryKey, value) => {
        setSelectedValues((prev) => ({
            ...prev,
            [categoryKey]: value,
        }));
    };

    const handleDeleteValues = () => {
        setSelectedValues({})
    }

    const handleApplyChanges = () => {
        return null
    }

    return (
        <Flex maxW="350px" minW="320px" padding="10px" flexDir="column" gap="15px">
            <AccordionRoot collapsible>
                {items.map((item, index) => (
                    <AccordionItem key={index} value={item.value} py="17px">
                        <AccordionItemTrigger fontSize="25px" color="black">
                            <Text fontSize="23px" fontWeight={400} lineHeight="29px">
                                {item.title}
                            </Text>
                        </AccordionItemTrigger>
                        {item.text.map((category, idx) => (
                            <Box key={idx} mt="2px">
                                <AccordionItemContent>
                                    <Checkbox
                                        cursor='pointer'
                                        checked={selectedValues[item.value] === category}
                                        onClick={() => handleCheckboxChange(item.value, category)}
                                    >
                                        <Text padding="5px" fontSize="18px">{category}</Text>
                                    </Checkbox>
                                </AccordionItemContent>
                            </Box>
                        ))}
                    </AccordionItem>
                ))}
            </AccordionRoot>
            <Flex justify="space-between">
                <Button background="#DFDFDF" color="black" minW="140px" onClick={handleDeleteValues}>
                    <Text fontSize="20px" lineHeight="26px">Reset </Text>
                </Button>
                <Button background="#DFDFDF" color="black" minW="140px" onClick={handleApplyChanges}>
                    <Text fontSize="20px" lineHeight="26px">Apply</Text></Button>
            </Flex>
        </Flex>
    );
};

export default FilterMenu;
