'use client'
import { useState } from "react";
import { createListCollection } from "@chakra-ui/react"
import { Box, Input, Heading, Stack } from "@chakra-ui/react";
import {
    SelectContent,
    SelectItem,
    SelectLabel,
    SelectRoot,
    SelectTrigger,
    SelectValueText,
} from "../components/ui/select";


const RadioForNotes = () => {

    const [selectedValue, setSelectedValue] = useState("FRACGANCES");

    const options = [
        { id: "radio1", label: "FRACGANCES" },
        { id: "radio2", label: "HOME FRAGRANCE" },
        { id: "radio3", label: "ATOMIZER" },
    ];

    const handleChange = (label) => {
        setSelectedValue(label);
    };

    const frameworks = createListCollection({
        items: [
            { label: "Top Rated", value: "Top Rated" },
            { label: "Price Low to High", value: "Price Low to High" },
            { label: "Price High to Low", value: "Price High to Low" },
            { label: "New Arrivals", value: "New Arrivals" },
            { label: "All Sale", value: "All Sale" },
        ],
    })

    return (
        <Box
            display="flex"
            gap="15px"
            width="100%"
            justifyContent="space-between"
            alignItems="center"
            position="relative">
            <Stack direction="row" gap="20px">
                {options.map(({ id, label }) => (
                    <Box key={id} >
                        <Input display="none" type="radio" id={id} name="value" onClick={() => handleChange(label)} />
                        <Heading
                            as="label"
                            htmlFor={id}
                            minWidth="150px"
                            minHeight="70px"
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            border="2px solid #fff"
                            borderRadius="15px"
                            cursor="pointer"
                            fontSize="26px"
                            lineHeight='30px'
                            fontWeight={600}
                            fontFamily={"Playfair Display"}
                            color={selectedValue === label ? "#000000" : "#C6C6C6"}
                        >
                            {label}
                        </Heading>
                    </Box>
                ))}
            </Stack>
            <SelectRoot
                collection={frameworks}
                size="lg"
                width="320px"
                border="2px solid #000000"
                borderRadius="15px"
                overflow="hidden">
                <SelectLabel
                    pos="absolute"
                    top="-4px"
                    right="200px"
                    width="85px"
                    zIndex="1"
                    textAlign="center"
                    background="white"
                    fontSize="20px">Sort By</SelectLabel>
                <SelectTrigger>
                    <SelectValueText
                        placeholder="Select category"
                    />
                </SelectTrigger>
                <SelectContent>
                    {frameworks.items.map((movie) => (
                        <SelectItem item={movie} key={movie.value}>
                            {movie.label}
                        </SelectItem>
                    ))}
                </SelectContent>
            </SelectRoot>
        </Box>
    );
};

export default RadioForNotes;
