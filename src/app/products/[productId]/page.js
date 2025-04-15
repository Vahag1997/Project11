import {
  getPerfumeById,
  getSimilarProducts,
  getOtherBrandProducts,
} from "../../../../utils/supabase/dataActions";
import ClientSingleCard from "../singleProduct/singleProductCard/ClientSingleCard";
import ClientTestimonials from "../../components/shared/Testimonials/ClientTestimonials";
import ClientProductCarousel from "../singleProduct/productCarousel";
import { Flex, Box, VStack } from "@chakra-ui/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "../singleProduct/singleCard.css";
import {
  BlogSection,
  ShareForm,
  CallUsNow,
  FaqSection,
} from "../../components/shared";
import GuaranteIconsCard from "../singleProduct/GuaranteIconsCard";
import Voting from "../singleProduct/voting";
import { getTranslations } from "next-intl/server";
export default async function ProductPage({ params }) {

  const t = await getTranslations("Guarante");
  const { productId } = await params;
  const product = await getPerfumeById(productId);

  if (!product) {
    return <div>Product not found.</div>;
  }
  const similarProducts = await getSimilarProducts(productId);
  const otherBrandProducts = await getOtherBrandProducts(
    product.brand,
    productId
  );
console.log(product, "singlepage");

  return (
    <Box>
      <ClientSingleCard product={product} />
      <VStack px={{ base: "16px", md: "60px", xl: "90px" }} py={"50px"}>
        <Flex
          gap={{ base: "20px", lg: "35px" }}
          mt={{ base: "10px", lg: "70px" }}
          flexDir={{ base: "column", lg: "row" }}
          width="100%"
        >
          <Flex width={{ base: "100%", lg: "60%" }}>
            <GuaranteIconsCard />
          </Flex>
          <Flex width={{ base: "100%", lg: "40%" }}>
            <Voting productId={product?.id} />
          </Flex>
        </Flex>
      </VStack>
      <ClientTestimonials />
      <ClientProductCarousel
        info={t("similarProducts")}
        products={similarProducts}
      />
      <BlogSection />
      <ClientProductCarousel
        info={t("otherBrandProducts")}
        products={otherBrandProducts}
      />
      <ShareForm />
      <CallUsNow />
      <FaqSection />
    </Box>
  );
}
