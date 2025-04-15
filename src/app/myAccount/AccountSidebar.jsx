
"use client";
import { Button, Flex } from "@chakra-ui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AccountSidebar({ links }) {
  const pathname = usePathname();

  return (
    <Flex direction="column" gap={4} minW="200px" mt={20}>
      {links.map(({ href, label }) => (
        <Link key={href} href={href}>
          <Button
            variant={href === pathname ? "solid" : "outline"}
            w="100%"
            colorScheme={href === pathname ? "green" : undefined}
          >
            {label}
          </Button>
        </Link>
      ))}
    </Flex>
  );
}
