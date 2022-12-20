import Slider from 'react-slick';

type SliderProps = {
  children: React.ReactNode;
  dots?: boolean;
  slidesToShow?: number;
  slidesToScroll?: number;
  arrowPosition?: 'inside' | 'outside';
};

export default function Carousel({
  children,
  slidesToShow = 1,
  slidesToScroll = 1,
}: SliderProps) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: slidesToScroll,
    autoplay: true,
    autoplaySpeed: 3000,
    dotsClass: 'slick-dots',
    responsive: [
      {
        breakpoint: 2800,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1450,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return <Slider {...settings}>{children}</Slider>;
}
