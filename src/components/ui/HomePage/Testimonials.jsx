'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { testimonials } from './data';

const Testimonials = () => {
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="container mx-auto overflow-hidden pt-5 sm:h-auto h-[280px] md:mt-[45px] xl:flex">
      <div className="w-full xl:w-[35%]">
        <div className="flex justify-between xl:flex-col">
          <div className="flex !w-full flex-col">
            <h4 className="!w-full text-[18px]  sm:text-[1.5rem] font-bold sm:w-[1.8rem] md:text-[24px]  lg:text-[2.2rem] xl:text-[2.5rem]">
              Clients Testimonials
            </h4>
          </div>
          <div className="flex w-full items-center justify-center">
            <Image
              loading="lazy"
              alt="quote"
              src="/assets/quote.svg"
              width={230}
              height={230}
              className="w-[80px] sm:w-[150px] md:w-[120px] xl:w-[180px]"
            />
          </div>
        </div>
      </div>

      <div className="testimonials-bg relative w-full xl:w-[65%] h-[300px] sm:h-[380px]">
        {!domLoaded ? (
          'loading...'
        ) : (
          <Slider {...settings} className="py-[20px] sm:py-[70px]">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="sm:!w-[600px] px-1 sm:px-5">
                <div className="flex max-w-[800px] sm:h-[230px] overflow-hidden flex-col gap-y-2 sm:gap-[24px] rounded-[10px] bg-white px-3 py-4 sm:p-[40px]">
                  <div className="flex items-center gap-[10px] sm:gap-[15px]">
                    <div>
                      <h5 className="text-[16px] sm:text-[18px] font-[500] text-primary">
                        {testimonial.name}
                      </h5>
                      <h6 className="text-[12px] sm:text-[16px] font-[500]">
                        {testimonial.role}
                      </h6>
                    </div>
                  </div>
                  <p className="text-[10px] sm:text-[16px] w-full line-clamp-3 font-normal sm:leading-[26px]">
                    {testimonial.text}
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        )}
      </div>
    </section>
  );
};

export default Testimonials;
