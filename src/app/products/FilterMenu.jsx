"use client";
import {
  AccordionItem,
  AccordionItemContent,
  AccordionItemTrigger,
  AccordionRoot,
} from "../components/ui/accordion";
import { Button, Flex, Text } from "@chakra-ui/react";
import { Checkbox } from "../components/ui/checkbox";
import { useState } from "react";
import { useRouter } from "next/navigation";
import FILTER_KEYS from "./constants";
import { useTranslations } from "next-intl";

const BRAND_LIST = ["HISTOIRES DE PARFUMS", "VOSKANIAN PARFUMS", "BDK PARFUMS"];

const FilterMenu = () => {
  const router = useRouter();
  const [selectedValues, setSelectedValues] = useState({});
  const t = useTranslations("FilterCategories");

  const ITEMS = FILTER_KEYS.map((key) => ({
    value: key,
    title: t(`${key}.title`),
    text:
      key === "brand"
        ? BRAND_LIST
        : key === "price"
        ? []
        : Object.values(t.raw(`${key}.options`)),
  }));
  const handleCheckboxChange = (categoryKey, value) => {
    setSelectedValues((prev) => ({
      ...prev,
      [categoryKey]: value,
    }));
  };


  const handleDeleteValues = () => {
    setSelectedValues({});
    router.replace("/products");
  };

  const handleApplyChanges = () => {
    const params = new URLSearchParams();

    for (const key in selectedValues) {
      if (selectedValues[key]) {
        params.append(key, selectedValues[key]);
      }
    }
    router.replace(`/products?${params.toString()}`, { scroll: false });
  };

  return (
    <Flex
      padding="15px"
      flexDir="column"
      gap="10px"
      borderRadius="12px"
      boxShadow="lg"
      mx="auto"
      height="100%"
    >
      <AccordionRoot
        display="flex"
        flexDir="column"
        height={{ base: "60dvh", md: "auto" }}
        defaultValue={ITEMS.map((item) => item.value)}
        multiple
      >
        {ITEMS.map((item, index) => (
          <AccordionItem
            key={index}
            value={item.value}
            py="6px"
            flex="1"
            display="flex"
            flexDirection="column"
            justifyContent="center"
          >
            <AccordionItemTrigger
              flex="1"
              display="flex"
              alignItems="center"
              justifyContent="center"
              textAlign={{ base: "center", md: "left" }}
            >
              <Text
                fontSize={{ base: "16px", md: "18px" }}
                fontWeight={400}
                lineHeight={{ base: "20px", md: "22px" }}
                color="black"
              >
                {item.title}
              </Text>
            </AccordionItemTrigger>
            <AccordionItemContent
              flex="1"
              maxHeight="200px"
              overflowY="auto"
              paddingRight="10px"
            >
              {item.text.length > 0 &&
                item.text.map((category, idx) => (
                  <Flex key={idx} mt="5px" gap="20px">
                    <Checkbox
                      cursor="pointer"
                      checked={selectedValues[item.value] === category}
                      onClick={() => handleCheckboxChange(item.value, category)}
                    >
                      <Text fontSize="14px" color="black" lineHeight="25px">
                        {category}
                      </Text>
                    </Checkbox>
                  </Flex>
                ))}
            </AccordionItemContent>
          </AccordionItem>
        ))}
      </AccordionRoot>
      <Flex justify="space-between" gap="20px">
        <Button
          background="#DFDFDF"
          color="black"
          flex="1"
          minW={{ base: "100px", sm: "110px" }}
          _hover={{ background: "#E0E0E0" }}
          onClick={handleDeleteValues}
        >
          <Text fontSize="16px" lineHeight="26px">
          {t("reset")}
          </Text>
        </Button>
        <Button
          background="#0E623E"
          color="white"
          flex="1"
          minW={{ base: "100px", sm: "110px" }}
          _hover={{ background: "gray.800" }}
          onClick={handleApplyChanges} // ✅ Use updated apply function
        >
          <Text fontSize="16px" lineHeight="26px">
          {t("apply")}
          </Text>
        </Button>
      </Flex>
    </Flex>
  );
};

export default FilterMenu;
