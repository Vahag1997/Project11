"use client";

import { Box, Spinner, Steps, Flex } from "@chakra-ui/react";
import { LuUser, LuMapPin } from "react-icons/lu";
import { useEffect, useState } from "react";
import { getUserCardItems } from "../../../../utils/supabase/dataActions";
import BagPage from "./BagPage";
import ShippingForm from "./ShippingForm";
import ThanksPage from "./ThanksPage";
import EmptyList from "../EmptyList";
import { useTranslations } from "use-intl";

export default function CheckoutSteps() {
  const [cartItems, setCartItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
const t = useTranslations("Cart");

  useEffect(() => {
    async function fetchData() {
      const data = await getUserCardItems();
      setCartItems(data);
      setIsLoading(false);
    }
    fetchData();
  }, []);

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  if (isLoading) {
    return (
      <Flex justify="center" align="center" minH="300px">
        <Spinner size="xl" color="green.500" />
      </Flex>
    );
  }


  if (cartItems.length === 0) {
    return (
      <EmptyList
        title={t("emptyTitle")}
        description={t("emptyDescription")}
      />
    );
  }

  const steps = [
    {
      title: "Your Bag",
      icon: <LuUser />,
      content: (
        <BagPage
          cartItems={cartItems}
          setCartItems={setCartItems}
          isLoading={isLoading}
          totalPrice={totalPrice}
        />
      ),
    },
    {
      title: "Shipping",
      icon: <LuMapPin />,
      content: <ShippingForm cartItems={cartItems} totalPrice={totalPrice} />,
    },
  ];

  return (
    <Box mx="auto" py={10} px={4}>
      <Steps.Root defaultStep={0} count={steps.length}>
        <Steps.List mb={8} minW="600px" mx="auto">
          {steps.map((step, index) => (
            <Steps.Item key={index} index={index} title={step.title}>
              <Steps.Trigger>
                <Steps.Indicator />
                <Steps.Title>{step.title}</Steps.Title>
              </Steps.Trigger>
              <Steps.Separator />
            </Steps.Item>
          ))}
        </Steps.List>

        {steps.map((step, index) => (
          <Steps.Content key={index} index={index}>
            {step.content}
          </Steps.Content>
        ))}

        <Steps.CompletedContent>
          <ThanksPage />
        </Steps.CompletedContent>
      </Steps.Root>
    </Box>
  );
}
