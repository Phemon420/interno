import React, { useRef } from "react";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import { styled, Box } from "@mui/material";
import sl1 from "../../../assets/sl1.png";
import sl2 from "../../../assets/sl2.png";
import sl3 from "../../../assets/sl3.png";
import sl4 from "../../../assets/sl4.png";

const Fufi = styled(Box)`
  margin-left: 16%;
  margin-right: 16%;
  margin-top: 75px;
  margin-bottom: 75px;
  position: relative; /* Ensure relative positioning for custom button placement */
  overflow: visible; /* Allow custom buttons to overflow the container */
  padding:0;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  transform: translateZ(0);

  /* Hover effect */
  &:hover {
    transform: scale(1.05); /* Slightly scale up */
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15); /* Add a stronger shadow */
  }
`;

const ButtonWrapper = styled(Box)`
  position: absolute;
  bottom: -80px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
`;

const ArrowButton = styled("div")`
  background: rgb(255, 255, 255);
  border: 1px solid black;
  border-radius: 50%;
  position: relative;
  width: 3rem;
  height: 3rem;
  cursor: pointer;
  display: flex; /* Use flex to align within its parent container */
  justify-content: center;
  align-items: center;

  &::before,
  &::after {
    content: "";
    position: absolute;
    left: 50%;
    top: 50%;
    width: 1.6rem;
    height: 1.6rem;
    margin: -0.8rem;
    background: url("https://mccdn.me/martech/next-lp/_next/static/media/ArrowRight-black.7c561375.svg") no-repeat 50%;
    transition: transform 0.5s cubic-bezier(0.43, 0.195, 0.02, 1), opacity 0.5s cubic-bezier(0.43, 0.195, 0.02, 1);
  }

  /* The arrow after (initially hidden, will slide in on hover) */
  &::after {
    transform: translate3d(-80%, 0, 0);
    opacity: 0;
  }

  /* Hover effect */
  &:hover::before {
    opacity: 0;
    transform: translate3d(120%, 0, 0); /* Move arrow to the right and fade out */
  }

  &:hover::after {
    opacity: 1;
    transform: translate3d(0, 0, 0); /* Arrow appears from the left */
  }
`;



const ArrowButton1 = styled("div")`
  background: rgb(255, 255, 255);
  border: 1px solid black;
  border-radius: 50%;
  position: relative;
  width: 3rem;
  height: 3rem;
  cursor: pointer;
  display: flex; /* Use flex to align within its parent container */
  justify-content: center;
  align-items: center;

  &::before,
  &::after {
    content: "";
    position: absolute;
    left: 50%;
    top: 50%;
    width: 1.6rem;
    height: 1.6rem;
    margin: -0.8rem;
    background: url("https://mccdn.me/martech/next-lp/_next/static/media/ArrowRight-black.7c561375.svg") no-repeat 50%;
    transform: rotate(180deg);
    transition: transform 0.5s cubic-bezier(0.43, 0.195, 0.02, 1), opacity 0.5s cubic-bezier(0.43, 0.195, 0.02, 1);
  }

  /* The arrow after (initially hidden, will slide in on hover) */
  &::after {
    transform: translate3d(80%, 0, 0);
    opacity: 0;
  }

  /* Hover effect */
  &:hover::before {
    opacity: 0;
    transform: translate3d(-120%, 0, 0) rotate(180deg); /* Move arrow to the right and fade out */
  }

  &:hover::after {
    opacity: 1;
    transform: translate3d(0, 0, 0) rotate(180deg); /* Arrow appears from the left */
  }
`;

const responsive = {
  allDevices: {
    breakpoint: { max: 3000, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const ImageCarousel = () => {
  const carouselRef = useRef(null); // Create a reference to the carousel

  // Function to navigate to the previous slide
  const handlePrevious = () => {
    if (carouselRef.current) {
      carouselRef.current.previous();
    }
  };

  // Function to navigate to the next slide
  const handleNext = () => {
    if (carouselRef.current) {
      carouselRef.current.next();
    }
  };

  const images = [sl1, sl2, sl3, sl4];

  return (
    <Fufi>
      <Carousel
        ref={carouselRef} // Assign ref to carousel
        responsive={responsive}
        swipeable={true}
        draggable={true}
        showDots={false}
        infinite={true}
        autoPlay={false}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        renderButtonGroupOutside={true} // Ensures custom buttons are outside slides
        arrows={false} // Hides default arrows
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            style={{
              width: "100%",
              height: "100%",
              borderRadius: "10px",
              objectFit: "cover",
            }}
          />
        ))}
      </Carousel>
      
      {/* Custom Button Group */}
      <ButtonWrapper>
        <ArrowButton1 onClick={handlePrevious}>
          ←
        </ArrowButton1>
        <ArrowButton onClick={handleNext}>
          →
        </ArrowButton>
      </ButtonWrapper>
    </Fufi>
  );
};

export default ImageCarousel;
