'use client'

import {FragranceType, PopularBrands, ShopByNote, FaqSection, CallUsNow, BlogSection, FragranceCarousel, ShareForm } from "./components/shared"
import { PRODUCTS,TESTIMONIALSDATA, CARDSDATA } from "./components/constants/constants";
import Testimonials from "./components/shared/Testimonials/Testimonials";
import CardCarousel from "./components/shared/CardCarousel/CardCarousel";

const TEXT1 = {
  heading: "Shop by Fragrance Type",
  text: "Explore our collections for men, women, unisex, and more to find your perfect scent",
  theme: ""
}
const TEXT2 = {
  heading: "Our Best Sellers",
  text: "Discover the top fragrances our customers love, handpicked for their irresistible scents and lasting impressions",
  theme: ""
}

const TEXT3 = {
  heading: "Popular Brands",
  text: "Explore the most sought-after fragrance brands trusted for their quality and unforgettable scents",
  theme: ""
}


const TEXT4 = {
  heading: "New Arrivals",
  text: "Be the first to experience our latest fragrances, freshly added to our collection",
  theme: ""
}

const TEXT5 = {
  heading: "Shop By Note",
  text: "Search by your favorite fragrance notes, from floral to woody, and discover scents that match your style ",
  theme: ""
}

const TEXT6 = {
  heading: "ON SALE!",
  text: "Don't miss out on our special deals! Shop your favorite fragrances at unbeatable prices",
  theme: ""
}



export default function Home() {


  return (
    <div >
      <FragranceType info={TEXT1} />
      <CardCarousel products={PRODUCTS} info={TEXT2} slides={4}/>
      <PopularBrands info={TEXT3}/>
      <CardCarousel products={PRODUCTS} info={TEXT4} slides={4}/>
      <ShopByNote info={TEXT5}/>
      <CardCarousel products={PRODUCTS} info={TEXT6} slides={4}/>
      <Testimonials data={TESTIMONIALSDATA}/>
      <BlogSection cardsData={CARDSDATA}/>
      <FragranceCarousel/>
      <ShareForm/>
      <CallUsNow/>
      <FaqSection/>
      </div>
  );
}
