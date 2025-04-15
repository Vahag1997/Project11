// PriceRangeSlider.jsx
import { Box, Text, Flex, Input } from "@chakra-ui/react";
import { Slider, SliderTrack, SliderFilledTrack, SliderThumb } from "../components/ui/slider";
import { useState } from "react";

export default function PriceRangeSlider() {
  const [minPrice, setMinPrice] = useState(80);
  const [maxPrice, setMaxPrice] = useState(830);
  const [sliderValues, setSliderValues] = useState([minPrice, maxPrice]);

  const handleChange = (values) => {
    setSliderValues(values);
    setMinPrice(values[0]);
    setMaxPrice(values[1]);
  };

  return (
    <Box width="400px" p="4" borderRadius="lg" boxShadow="md" bg="white">
      <Flex justifyContent="space-between" mb="4">
        <Flex direction="column" alignItems="center">
          <Text fontWeight="bold">MIN PRICE</Text>
          <Input
            type="number"
            value={minPrice}
            onChange={(e) => setMinPrice(Number(e.target.value))}
            width="80px"
            textAlign="center"
            size="sm"
          />
        </Flex>

        <Flex direction="column" alignItems="center">
          <Text fontWeight="bold">MAX PRICE</Text>
          <Input
            type="number"
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
            width="80px"
            textAlign="center"
            size="sm"
          />
        </Flex>
      </Flex>

      <Slider
        aria-label="price-range"
        min={80}
        max={880}
        step={10}
        defaultValue={[minPrice, maxPrice]}
        onChange={handleChange}
        colorScheme="green"
      >
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb boxSize={4} index={0} />
        <SliderThumb boxSize={4} index={1} />
      </Slider>
    </Box>
  );
}
