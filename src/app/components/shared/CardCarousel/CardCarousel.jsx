import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { SingleCard, HeadingForHome } from "..";
import "swiper/css";
import "swiper/css/navigation";
import "./cardCarousel.css";

const CardCarousel = ({ products, info, slides }) => {

  const { heading, text } = info

  return (
    <div className="carousel-container">
      <HeadingForHome heading={heading} text={text}/>
      <div className="swiper-wrapper">
        <Swiper
          slidesPerView={slides}
          spaceBetween={40}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          {products.map((product, idx) => (
            <SwiperSlide key={idx}>
              <SingleCard key={idx} product={product}/>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* View All Button */}
      <button className="view-all-btn">View All Products</button>
    </div>
  );
};

export default CardCarousel;

