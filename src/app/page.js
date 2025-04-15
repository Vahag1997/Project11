import {
  FragranceType,
  PopularBrands,
  ShopByNote,
  FaqSection,
  CallUsNow,
  BlogSection,
  FragranceCarousel,
  ShareForm,
} from "./components/shared";
import Testimonials from "./components/shared/Testimonials/Testimonials";
import CardCarousel from "./components/shared/CardCarousel/CardCarousel";
import { HeaderCarousel } from "./components/Header";
import {
  getBestSellers,
  getNewArrivals,
  getOnSale,
} from "../../utils/supabase/dataActions";


export default async function Home() {
  const bestSellers = await getBestSellers();
  const newArrivals = await getNewArrivals();
  const onSale = await getOnSale();


  return (
    <div>
      <HeaderCarousel />
      <FragranceType />
      <CardCarousel products={bestSellers} translationKey="bestSellers" />
      <PopularBrands />
      <CardCarousel products={newArrivals} translationKey="newArrivals" />
      <ShopByNote />
      <CardCarousel products={onSale} translationKey="onSale" />
      <Testimonials />
      <BlogSection />
      <FragranceCarousel />
      <ShareForm />
      <CallUsNow />
      <FaqSection />
    </div>
  );
}
