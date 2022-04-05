import React from "react";
import "./Carousel.scss";
import Carousel from "react-bootstrap/Carousel";

type Props = {
  images: string[];
};

const MyCarousel = ({ images }: Props) => {
  return (
    <div className="my-carousel">
      <Carousel >
        {images.map((image: string, index: number) => (
          <Carousel.Item key={index}>
            <img className="d-block w-100" src={image} alt={`Slide ${index}`} />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default MyCarousel;
