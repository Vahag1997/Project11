"use client";
import { Box, Grid, GridItem, Heading, Button, Text } from "@chakra-ui/react";
import { HeadingForHome } from ".";
import { NOTES } from "../constants/constants";
import Image from "next/image";
import Link from "next/link";
import { useBreakpointValue } from "@chakra-ui/react";
import { useState } from "react";
import { useTranslations } from "next-intl";

const ShopByNote = () => {
  const defaultItems = useBreakpointValue({ base: 6, md: 8 });
  const [showAll, setShowAll] = useState(false);
  const t = useTranslations("ShopByNote");

  const displayedNotes = showAll ? NOTES : NOTES.slice(0, defaultItems);

  return (
    <Box
      textAlign="center"
      py={{ base: 3, md: 8 }}
      px={{ base: "24px", md: "90px" }}
    >
      <HeadingForHome
        heading={t("title")}
        text={t("description")}
        theme="black"
      />

      <Grid
        templateColumns={{ base: "repeat(3, 1fr)", md: "repeat(4, 1fr)" }}
        gap={{ base: 1, md: 4 }}
      >
        {displayedNotes.map((note, index) => (
          <GridItem
            key={index}
            as={Link}
            href={`/products?note=${encodeURIComponent(note.name)}`}
            display="flex"
            alignItems="center"
            justifyContent="center"
            bg="white"
            cursor="pointer"
            pos="relative"
            background="black"
            borderRadius={{ base: "10px", md: "20px" }}
            _hover={{
              transform: "scale(1.05)",
              boxShadow: "0px 0px 12px 0px #00000060",
            }}
            transition="all 0.2s ease-in-out"
            overflow="hidden"
            height={{ base: "120px", md: "270px" }}
          >
            <Image
              src={note.logo}
              alt={note.name}
              width={400}
              height={250}
              style={{
                objectFit: "cover",
                width: "100%",
                maxHeight: "290px",
                height: "100%",
                opacity: "0.5",
                borderRadius: "5px",
              }}
              unoptimized
            />
            <Heading
              pos="absolute"
              color="#ffffff"
              fontSize={{ base: "20px", md: "2.7vw"}}
            >
             {t(`notes.${note.name}`)}
            </Heading>
          </GridItem>
        ))}
      </Grid>

      {NOTES.length > defaultItems && (
        <Button
          onClick={() => setShowAll((prev) => !prev)}
          background="#0E623E"
          mt={{ base: "14px", md: "40px" }}
          p={{ base: "4px 16px", md: "10px 24px" }}
          height={{ base: "33px", md: "auto" }}
          variant="solid"
          borderRadius={{ base: "6px", md: "14px" }}
          _hover={{ bg: "#09532C" }}
        >
          <Text
            fontSize={{ base: "12px", md: "1.36vw" }}
            fontWeight={{ base: 400, md: 600 }}
            lineHeight={{ base: "15px", md: "37px" }}
          >
            {showAll ? t("button2") : t("button1")}
          </Text>
        </Button>
      )}
    </Box>
  );
};

export default ShopByNote;
