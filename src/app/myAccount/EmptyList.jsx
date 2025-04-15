import { EmptyState, Stack, VStack } from "@chakra-ui/react";
import { LuShoppingCart } from "react-icons/lu";

export default function EmptyCard({ title, description }) {
  return (
    <Stack>
      <EmptyState.Root size="lg">
        <EmptyState.Content>
          <EmptyState.Indicator>
            <LuShoppingCart />
          </EmptyState.Indicator>
          <VStack textAlign="center">
            <EmptyState.Title>{title}</EmptyState.Title>
            <EmptyState.Description>
              {description}
            </EmptyState.Description>
          </VStack>
        </EmptyState.Content>
      </EmptyState.Root>
    </Stack>
  );
};


