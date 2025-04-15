import { Box, SimpleGrid, Heading } from "@chakra-ui/react";
import { getTranslations } from "next-intl/server";
import { getUserWishlist } from "../../../../utils/supabase/dataActions";
import SingleCard  from "../../components/shared/SingleCard";
import EmptyList from "../EmptyList";

export default async function WishlistPage() {
  const t = await getTranslations("Wishlist");
  const perfumes = await getUserWishlist();

  if (perfumes.length === 0) {
    return (
      <EmptyList
        title="Your wishlist is empty"
        description="Start exploring and save your favorite perfumes"
      />
    );
  }

  return (
    <Box px={{ base: 4, md: 8 }} py={8} textAlign={"center"}>
      <Heading fontWeight={700} fontSize={{ base: "20px", md: "38px" }} mb={10}>
        {t("title")}
      </Heading>
      <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} gap={4}>
        {perfumes.map((product) => (
          <SingleCard key={product.id} product={product} />
        ))}
      </SimpleGrid>
    </Box>
  );
}
