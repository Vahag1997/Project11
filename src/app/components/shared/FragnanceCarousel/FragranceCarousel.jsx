import { Box, Icon, Image } from "@chakra-ui/react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ARRAY } from "../../constants/constants";
import "swiper/css";
import { HeadingForHome } from "..";
import styles from './fragnance.module.css'


const FragranceCarousel = () => {

  return (
    <Box textAlign="center" py={12} pos="relative" px="190px">
      <HeadingForHome
        heading={"Experience Our Fragrances in Motion"}
        text={"Dive into the essence of our perfumes with immersive videos that bring each scent to life"}
        theme="black" />


      <Swiper
        slidesPerView={3}
        spaceBetween={40}
        modules={[Navigation]}
        navigation={{
          nextEl: `.${styles.customNextButton}`,
          prevEl: `.${styles.customPrevButton}`,
        }}
        className={styles.swiper}
      >
        {ARRAY.map((_, idx) => {
          return (
            <SwiperSlide className={styles.swiperSlide} key={idx}>
              <Box borderRadius="md" overflow="hidden">
                <Image
                  alt="Parfume 1"
                  src="https://s3-alpha-sig.figma.com/img/86c4/59c3/256dc27162dff1df74547f9a4f583129?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NVJFgCh0nW69BGdRqwIObFD5EfScn5PnZOOAO6FwXSvkWzSwUU4-UxrcMuu-QVnSwdMu4CRV1rxTeVFHEL5JFePYWyIcVttwhMWL08ttB63FkWoE5FMF57NfcrOQ7UIM7CMHIhzHQBpoyzWbAv5igB1JGLc6dlz5dzQxrCLCSLFY1Ys9VdyktHXDg57W-PBHoL5cv0XSbNyHQ6tCWWL9G9N74jndZ5bVgPt5~1Ntv87oxQbvtFWeCKoSJDWNwBJzAEnE2Sq2GWsJ-lVc~nvZ0RJ4rW0wmX9i6rxX9YmKvOBtCeLivcI6AR3YYcNW~jnqjc6OAdXXhwfrsmSuR-Eacg__"
                  objectFit="cover"
                  border="3px solid white"
                  borderRadius="20px"
                  layout="responsive"
                  width={400}
                  height={250}
                  style={{ objectFit: "cover", width: "100%", minHeight: "400px" }}
                  unoptimized
                />
                
              </Box>
            </SwiperSlide>
          );
        })}

        <Icon className={styles.customNextButton} fontSize="xl">
          <IoIosArrowForward />
        </Icon>
        <Icon className={styles.customPrevButton} fontSize="xl">
          <IoIosArrowBack />
        </Icon>
      </Swiper>
    </Box>
  );
};

export default FragranceCarousel;
