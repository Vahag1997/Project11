import { CallUsNow, FaqSection, SingleImageText } from "../components/shared";
import FilterMenu from "./FilterMenu";
import ProductCards from "./ProductCards";
import RadioForNotes from "./RadioForNotes";
import { Flex, Box } from "@chakra-ui/react";
import { getPerfumes } from "../../../utils/supabase/dataActions";

export default async function Products({ searchParams }) {
  const params = await searchParams;
  const page = parseInt(params.page) || 1;
  const sort = params.sort || null;


  const { data: perfumes, total } = await getPerfumes({
    gender: params.gender || null,
    brand: params.brand || null,
    minPrice: params.minPrice || null,
    maxPrice: params.maxPrice || null,
    note: params.note || null,
    sale: params.sale || null,
    page,
    perPage: 12,
    sort,
  });
console.log(perfumes, "perfumes");


  return (
    <div>
      <SingleImageText section={"products"} img="/headerImages/product.webp" />
      <Flex
        mt={{ base: "0px", md: "40px" }}
        px={{ base: "15px", md: "30px", xl: "50px" }}
        gap="50px"
        flexDir="column"
        justify={"center"}
        align={"start"}
        pb="120px"
      >
        <RadioForNotes />
        <Flex gap="15px" align="start">

          <Box display={{ base: "none", lg: "flex" }}>
            <FilterMenu />
          </Box>
     
          <ProductCards products={perfumes} currentPage={page} total={total} />
        </Flex>
      </Flex>
      <CallUsNow />
      <FaqSection />
    </div>
  );
}
