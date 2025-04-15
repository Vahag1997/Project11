import { Flex, Input, Text, Box } from "@chakra-ui/react";
import { InputGroup } from "../ui/input-group";
import { IoSearch } from "react-icons/io5";
import BurgerMenu from "./BurgerMenu";
import RunningText from "./RunningText";
import Navbar from "./Navbar";
import styles from "./burger.module.css";
import Image from "next/image";

export default function Header() {
  return (
    <div className={styles.mainHeaderComponent}>
      <Box boxShadow="md">
        <RunningText />
        <Flex
          // bg="#f4f4f5"
          px={{ base: "15px", md: "35px" }}
          py={2}
          justifyContent="space-between"
          align="center"
          flexDir={{ base: "row", md: "row-reverse" }}
        >
          <BurgerMenu />
          <Image
            src="/narffum-logo.png"
            alt="NARFFUM Logo"
            width={280}
            height={80}
          />
          <InputGroup width="17dvw" endElement={<IoSearch size={25} />}>
            <Input
              border="none"
              placeholder="Search ..."
              borderBottom="1px solid"
              borderRadius="23px"
            />
          </InputGroup>
        </Flex>
        <div className={styles.navDisplay}>
          <Navbar />{" "}
        </div>
      </Box>
    </div>
  );
}
