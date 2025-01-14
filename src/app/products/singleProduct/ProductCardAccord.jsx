import { Flex, Stack, Text, Heading, Button } from "@chakra-ui/react"
import Image from "next/image"
import {
    RadioCardItem,
    RadioCardLabel,
    RadioCardRoot,
} from "../../components/ui/radio-card"
import { Rating } from "../../components/ui/rating"
import ParfumeBottle from './icons/parfumeBottle.png'
import { ProgressBar, ProgressRoot } from "../../components/ui/progress"
import { HiOutlineShoppingBag } from "react-icons/hi2";
import Link from "next/link";
import './singleCard.css'


const items = [
    { value: "5ml", title: "5 ml", icon: ParfumeBottle, avialable: true },
    { value: "10ml", title: "10 ml", icon: ParfumeBottle, avialable: true },
    { value: "50ml", title: "50 ml", icon: ParfumeBottle, avialable: true},
    { value: "100ml", title: "100 ml", icon: ParfumeBottle, avialable: true},
    // { value: "125ml", title: "125 ml", icon: ParfumeBottle, avialable: false},
    // { value: "200ml", title: "200 ml", icon: ParfumeBottle, avialable: false},
    // { value: "250ml", title: "250 ml", icon: ParfumeBottle, avialable: false},
    // { value: "500ml", title: "500 ml", icon: ParfumeBottle, avialable: false},
]


const colorPalettes = [
    { color: "yellow", value: 90, name:"Vanilla" },
    { color: "pink", value: 70, name:"Flower" },
    { color: "gray", value: 50, name:"Leather" },
    { color: "red", value: 40, name:"WARM SPICE" },
    { color: "teal", value: 30, name:"Leather" },
]

const ProductCardAccord = () => {
    return (
        <Flex flexDir={"column"} gap="5" flex={1} maxH="800px" justify={"space-between"}>
            <Heading fontSize="50px"> MEMO </Heading>
            <Heading fontSize="50px"> IRISH LEATHER</Heading>
            <Text fontSize="20px" color="blue" textDecor="underline"> <Link href="/"> All Memo Products</Link></Text>
            <Rating readOnly defaultValue={3} size="md" colorPalette="orange" />
            <Text fontSize="50px"> $85-$110</Text>
            <RadioCardRoot
                orientation="horizontal"
                align="center"
                maxW="3xl"
                size="lg"
                defaultValue="5ml"
            >
                <RadioCardLabel>
                    <Text fontSize="20px" fontWeight={600}>SIZE</Text>
                </RadioCardLabel>
                <Flex align="stretch" gap="20px" mt="5px" flexWrap="wrap">
                    {items.map((item) => (
                        <RadioCardItem
                            label={item.title}
                            fontSize="xl"
                            flex="1 1 calc(25% - 1rem)"
                            icon={<Image width={65} height={32} src={item.icon} alt="ImageForBottle" color="fg.subtle" />}
                            indicator={false}
                            key={item.value}
                            value={item.value}
                            disabled={!item.avialable}
                            cursor={!item.avialable ? "not-allowed" : "pointer"}
                        />
                    ))}
                </Flex>
            </RadioCardRoot>
            <Button width="55%" background="#0E623E" fontSize="23px" py="33px" borderRadius="10px">
                <HiOutlineShoppingBag />
                <Text>Add to Cart </Text></Button>
                <Text textDecor="underline" fontSize="24px" lineHeight="29px">MAIN ACCORDS </Text>
            <Stack gap="2" align="flex-start">
                {colorPalettes.map(({ color, value, name }) => (
                    <Stack
                        align="center"
                        key={color}
                        direction="row"
                        gap="10"
                        // px="4"
                        pos={"relative"}
                    >
                        <Text
                            pos={"absolute"}
                            zIndex={1}
                            left={"35px"}
                            color="#FFFFFF"
                            fontWeight={400}
                            lineHeight={"15px"}
                            py={"6px"}
                            fontSize={"12px"}>{name.toUpperCase()}</Text>
                        <ProgressRoot
                            width="500px"
                            value={value}
                            colorPalette={color}
                            variant="outline"
                            shape={"square"}
                            size={"lg"}
                            className="progressBar"
                        >
                            <ProgressBar />
                        </ProgressRoot>
                    </Stack>
                ))}
            </Stack>
        </Flex>

    )
}


export default ProductCardAccord