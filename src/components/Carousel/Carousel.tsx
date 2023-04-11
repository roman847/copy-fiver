import React, { FC } from "react";
import Slider from "react-slick";
import style from "./style.module.scss";

interface ISlidesToShowOptions {
  wideDesktop: number;
  desktop: number;
  tablet: number;
  smallTablet: number;
  mobile: number;
}

interface ICarouselProps {
  children: React.ReactNode;
  slidesToShow: ISlidesToShowOptions;
}

const Carousel: FC<ICarouselProps> = ({ children, slidesToShow }) => {
  const { wideDesktop, desktop, tablet, smallTablet, mobile } = slidesToShow;

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: wideDesktop,
    slidesToScroll: wideDesktop,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: desktop,
          slidesToScroll: desktop,
        },
      },
      {
        breakpoint: 950,
        settings: {
          slidesToShow: tablet,
          slidesToScroll: tablet,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: smallTablet,
          slidesToScroll: smallTablet,
        },
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: mobile,
          slidesToScroll: mobile,
        },
      },
    ],
  };

  return (
    <div className={style.container}>
      <Slider {...settings}>{children}</Slider>
    </div>
  );
};

export default Carousel;
