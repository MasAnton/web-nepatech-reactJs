import { Carousel } from "flowbite-react";

const heroCarousel = () => {
  return (
    <Carousel indicators={false} slideInterval={6000}>
      <img src="../assets/img/carousel/hero/1.jpg" alt="..." />
      <img src="../assets/img/carousel/hero/1.jpg" alt="..." />
      <img
        src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
        alt="..."
      />
      <img
        src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
        alt="..."
      />
      <img
        src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
        alt="..."
      />
    </Carousel>
  );
};

export default heroCarousel;
