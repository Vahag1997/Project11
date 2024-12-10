"use client";

import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Box, Flex, Image, IconButton } from "@chakra-ui/react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { IconContext } from "react-icons";
import Navbar from "./Navbar";
import { usePathname } from 'next/navigation';

const HeaderCarousel = ({ slides }) => {
    const pathname = usePathname();
    console.log(pathname.slice(1), "nameee");

    const [emblaRef, emblaApi] = useEmblaCarousel({
        align: "start",
        loop: true,
    });

    const [selectedIndex, setSelectedIndex] = useState(0);
    const [scrollSnaps, setScrollSnaps] = useState([]);

    // Set default value based on the current path
    useEffect(() => {
        if (!emblaApi) return;

        // Determine default slide index based on the pathname
        const defaultIndex = {
            "home": 0,
            "about": 1,
            "brands": 2,
            "blog": 3,
        }[pathname.slice(1)] || 0; 

        // Scroll to the default slide
        emblaApi.scrollTo(defaultIndex);
        setSelectedIndex(defaultIndex);
    }, [pathname, emblaApi]);

    const scrollTo = useCallback((index) => emblaApi?.scrollTo(index), [emblaApi]);
    const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setSelectedIndex(emblaApi.selectedScrollSnap());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        setScrollSnaps(emblaApi.scrollSnapList());
        emblaApi.on("select", onSelect);
        return () => emblaApi.off("select", onSelect);
    }, [emblaApi, onSelect]);

    return (
        <>
            <Box maxW="100%" mx="auto" position="relative">
                <Navbar />
                <Box overflow="hidden" ref={emblaRef}>
                    <Flex>
                        {slides.map((slide, idx) => (
                            <Box key={idx} flex="0 0 100%">
                                <Image
                                    src={slide.image}
                                    alt={slide.title}
                                    w="full"
                                    objectFit="cover"
                                    height="600px"
                                    filter="brightness(50%)"
                                />
                            </Box>
                        ))}
                    </Flex>
                </Box>

                <Flex justify="space-between" mt={4}>
                    <IconButton
                        aria-label="Scroll Left"
                        position="absolute"
                        bottom="50%"
                        transform="translateY(-50%)"
                        zIndex={10}
                        onClick={scrollPrev}
                        bg="none">
                        <IconContext.Provider value={{ color: "#FFFFFFB2" }}>
                            <IoIosArrowBack style={{ width: "unset", height: "unset", fontSize: "4.2rem" }} />
                        </IconContext.Provider>
                    </IconButton>

                    <IconButton
                        aria-label="Scroll Right"
                        position="absolute"
                        bottom="50%"
                        right="0px"
                        transform="translateY(-50%)"
                        zIndex={10}
                        onClick={scrollNext}
                        bg="none">
                        <IconContext.Provider value={{ color: "#FFFFFFB2" }}>
                            <IoIosArrowForward style={{ width: "unset", height: "unset", fontSize: "4.2rem" }} />
                        </IconContext.Provider>
                    </IconButton>
                </Flex>
            </Box>
        </>
    );
};

export default HeaderCarousel;
