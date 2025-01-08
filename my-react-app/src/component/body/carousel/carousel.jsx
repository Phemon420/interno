import React, { useEffect, useRef, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Box, styled } from "@mui/material";
import sl1 from "../../../assets/1nike.svg";
import sl2 from "../../../assets/2sugar.avif";
import sl3 from "../../../assets/3amy.avif";
import sl4 from "../../../assets/4benefit.avif";
import sl5 from "../../../assets/5hotmart.avif";
import sl6 from "../../../assets/6jenna.svg";
import sl7 from "../../../assets/7mindvalley.svg";

// Styled component for carousel items
const CarouselItem = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "100%",
  backgroundColor: "#fff",
  borderRadius: "10px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",
  padding: "0",
}));

const Gaga = styled(Box)`
  margin-top: 10px;
  align-items: center;
  padding: 0;
`;

// Array of images repeated twice
const photos = [
  { id: 1, src: sl1 },
  { id: 2, src: sl2 },
  { id: 3, src: sl3 },
  { id: 4, src: sl4 },
  { id: 5, src: sl5 },
  { id: 6, src: sl6 },
  { id: 7, src: sl7 },
  { id: 8, src: sl1 },
  { id: 9, src: sl2 },
  { id: 10, src: sl3 },
  { id: 11, src: sl4 },
  { id: 12, src: sl5 },
  { id: 13, src: sl6 },
  { id: 14, src: sl7 },
];

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1700 },
    items: 8,
  },
  desktop: {
    breakpoint: { max: 1700, min: 1024 },
    items: 6.5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 768, min: 0 },
    items: 1,
  },
};

const CarouselComponent = () => {
  const carouselRef = useRef(null);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    if (carouselRef.current) {
      const scrollY = window.scrollY;

      // If scrolling down and the current scroll position is significantly different from the last position
      if (scrollY > lastScrollY + 50) {
        carouselRef.current.next();
      }

      // If scrolling up and the current scroll position is significantly different from the last position
      if (scrollY < lastScrollY - 50) {
        carouselRef.current.previous();
      }

      // Update last scroll position
      setLastScrollY(scrollY);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <Gaga>
      <Box sx={{ margin: "0 auto", maxWidth: "1700px" }}>
        <Carousel
          responsive={responsive}
          customTransition="transform 300ms ease-in-out"
          containerClass="carousel-container"
          itemClass="carousel-item"
          swipeable={true}
          draggable={true}
          showDots={false}
          infinite={true}
          autoPlay={false}
          keyBoardControl={true}
          arrows={false}
          ref={carouselRef} // Reference to manipulate the carousel
        >
          {photos.map((photo) => (
            <CarouselItem key={photo.id}>
              <img
                src={photo.src}
                alt={`Slide ${photo.id}`}
                style={{ width: "70%", height: "70%" }}
              />
            </CarouselItem>
          ))}
        </Carousel>
      </Box>
    </Gaga>
  );
};

export default CarouselComponent;
