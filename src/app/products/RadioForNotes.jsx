"use client";
import { useState } from "react";
import {
  Box,
  Input,
  Heading,
  Stack,
  Text,
  createListCollection,
  Button,
  Flex,
} from "@chakra-ui/react";
import { BsFilterLeft } from "react-icons/bs";
import {
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectRoot,
  SelectTrigger,
  SelectValueText,
} from "../components/ui/select";
import {
  DrawerRoot,
  DrawerTrigger,
  DrawerBackdrop,
  DrawerContent,
  DrawerBody,
  DrawerCloseTrigger,
} from "../components/ui/drawer";
import FilterMenu from "./FilterMenu";
import { useRouter, useSearchParams } from "next/navigation";
import styles from "./radioForNotes.module.css";
import { useTranslations } from "next-intl";


const options = [
  { id: "radio1", label: "FRACGANCES" },
  { id: "radio2", label: "HOME FRAGRANCE" },
  { id: "radio3", label: "ATOMIZER" },
];

const RadioForNotes = () => {
  const [selectedValue, setSelectedValue] = useState("FRACGANCES");
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentSort = searchParams.get("sort") || "";
  const t = useTranslations("FilterMenu");

  const handleChange = (label) => {
    setSelectedValue(label);
  };

 

  const filterList = createListCollection({
    items: [
      { label: t("topRated"), value: "top-rated" },
      { label: t("priceAsc"), value: "price-asc" },
      { label: t("priceDesc"), value: "price-desc" },
      { label: t("newArrivals"), value: "new-arrivals" },
      { label: t("allSale"), value: "all-sale" },
    ],
    value: currentSort ? [currentSort] : [],
  });

  // Handle sort change and update URL
  const handleSortChange = (newCollection) => {
    const selectedSort = newCollection.value[0] || "";
    const params = new URLSearchParams(searchParams.toString());

    if (selectedSort) {
      params.set("sort", selectedSort);
    } else {
      params.delete("sort");
    }

    params.set("page", "1"); // Reset to page 1 when sort changes
    router.replace(`/products?${params.toString()}`, { scroll: false });
  };

  return (
    <Box
      display="flex"
      gap="15px"
      width="100%"
      justifyContent="space-between"
      alignItems={{ base: "end", lg: "center" }}
    >
      {/* Category Radio Buttons */}
      <Stack
        direction={{ base: "column", md: "row" }}
        gap={{ base: "10px", md: "20px" }}
        className={styles.radioCategory}
        alignItems={{ base: "stretch", md: "center" }}
      >
        {options.map(({ id, label }) => (
          <Box key={id} flex="1">
            <Input
              display="none"
              type="radio"
              id={id}
              name="value"
              onClick={() => handleChange(label)}
            />
            <Heading
              as="label"
              htmlFor={id}
              minWidth={{ base: "100%", md: "150px" }}
              minHeight={{ base: "50px", md: "70px" }}
              display="flex"
              alignItems="center"
              justifyContent="center"
              borderRadius="15px"
              cursor="pointer"
              fontSize={{ base: "18px", md: "22px" }}
              lineHeight={{ base: "22px", md: "28px" }}
              fontWeight={600}
              fontFamily="Playfair Display"
              color={selectedValue === label ? "#000000" : "#C6C6C6"}
              textAlign="center"
              paddingX="10px"
              transition="all 0.3s ease-in-out"
              overflow="hidden"
              whiteSpace="nowrap"
              textOverflow="ellipsis"
              _hover={{ borderColor: "#000", transform: "scale(1.05)" }}
            >
              {label}
            </Heading>
          </Box>
        ))}
      </Stack>

      {/* Sort Dropdown */}
      <SelectRoot
        collection={filterList}
        onValueChange={handleSortChange} // Collection-based change handler
        borderRadius="15px"
        overflow="hidden"
        maxW={{ base: "170px", md: "20vw" }}
        size="md"
      >
        <SelectLabel
          // width="85px"
          zIndex="1"
          textAlign="start"
          fontSize={{ base: "14px", md: "18px" }}
          ml="20px"
        >
         {t("label")}
        </SelectLabel>
        <SelectTrigger>
          <Box lineHeight={{ base: "14px", md: "30px" }}>
            <SelectValueText
              placeholder={t("placeholder")}
              fontSize={{ base: "14px", md: "18px" }}
              color="black"
              maxW="100%"
            />
          </Box>
        </SelectTrigger>
        <SelectContent>
          {filterList.items.map((item) => (
            <SelectItem item={item} key={item.value}>
              <Text fontSize={{ base: "14px", md: "18px" }} lineHeight="14px">
                {item.label}
              </Text>
            </SelectItem>
          ))}
        </SelectContent>
      </SelectRoot>

      {/* Mobile Filter Drawer */}
      <Box display={{ base: "block", lg: "none" }}>
        <DrawerRoot size="xs" open={open} onOpenChange={(e) => setOpen(e.open)}>
          <DrawerBackdrop />
          <DrawerTrigger asChild>
            <Button
              background="none"
              color="black"
              border="1px solid"
              borderRadius="7px"
            >
              <Heading fontSize="14px" lineHeight="14px">
                Filter
              </Heading>
              <BsFilterLeft />
            </Button>
          </DrawerTrigger>
          <DrawerContent color="white" top="61px">
            <Flex justify="space-between" align="baseline" paddingLeft="15px">
              <Text
                color="black"
                fontSize="18px"
                fontWeight={400}
                letterSpacing="1.35px"
              >
                Filter
              </Text>
              <DrawerCloseTrigger
                color="black"
                pos="relative"
                style={{ insetInlineEnd: "-5px" }}
              />
            </Flex>
            <DrawerBody p="0px">
              <FilterMenu />
            </DrawerBody>
          </DrawerContent>
        </DrawerRoot>
      </Box>
    </Box>
  );
};

export default RadioForNotes;
