import { Flex, Link } from "@chakra-ui/react";

const navLinks = [
  { href: "/", label: "HOME" },
  { href: "about", label: "ABOUT" },
  { href: "brands", label: "BRANDS" },
  { href: "products", label: "PRODUCTS" },
  { href: "offers", label: "OFFERS" },
  { href: "blog", label: "BLOG" },
];

const Navbar = () => {
  return (
    <Flex
      as="nav"
      justify="center"
      bg="transparent"
      px={8}
      py={8}
      position="absolute"
      top={0}
      width="100%"
      zIndex={1000}
    >
      <Flex gap="70px">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            fontWeight={700}
            color="#FFFFFF"
            fontSize="18px"
            lineHeight="29px"
            _hover={{ color: "yellow.500", textDecoration: "none" }}
          >
            {link.label}
          </Link>
        ))}
      </Flex>
    </Flex>
  );
};

export default Navbar;
