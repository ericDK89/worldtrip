import { Box, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";
import { Keyboard, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

export function Slides() {
  return (
    <Box
      mt={{ base: "20px", sm: "52px" }}
      mb={{ base: "24px", sm: "40px" }}
      maxWidth="1240px"
      w="100%"
      mx="auto"
    >
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        keyboard={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        rewind={true}
        speed={600}
        className="mySwiper"
        modules={[Navigation, Pagination, Keyboard]}
      >
        <SwiperSlide>
          <Link href="continents/europe" passHref>
            <a>
              <Heading
                h={{ base: "250px", sm: "450px" }}
                fontWeight="700"
                fontSize={{ base: "24px", sm: "48px" }}
                color="gray.100"
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                bgImage="url(Europe.png)"
                bgSize="cover"
                bgRepeat="no-repeat"
              >
                Europa <br />
                <Text
                  mt={{ base: "12px", sm: "16px" }}
                  fontSize={{ base: "14px", sm: "24px" }}
                >
                  O continente mais antigo
                </Text>
              </Heading>
            </a>
          </Link>
        </SwiperSlide>

        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
      </Swiper>
    </Box>
  );
}
