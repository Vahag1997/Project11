import {
  CallUsNow,
  ShareForm,
  FaqSection,
  SingleImageText,
} from "../components/shared";
import BrandSlider from "./BrandsSlider";

const Brands = ({ searchParams }) => {
  return (
    <>
      <SingleImageText section={"brands"} img="/headerImages/brands.webp" />
      <BrandSlider searchParams={searchParams}/>
      <ShareForm />
      <CallUsNow />
      <FaqSection />
    </>
  );
};

export default Brands;
