'use client';

import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { slides } from './data';
import Image from 'next/image';

const SliderSection = () => {
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return (
    <section className="text-center md:py-[2rem]">
      <h2 className="text-[20px] sm:text-[28px] font-semibold capitalize lg:text-[40px] md:text-[24px]">
        Technologies we work with
      </h2>
      <div className="max-w-[1000px] mx-auto">
        {!domLoaded ? (
          'loading'
        ) : (
          <Swiper
            modules={[Navigation, Pagination]}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="flex items-center justify-center mb-10 md:mb-14 bg-transparent">
                  <div className="flex w-full flex-col items-center justify-center">
                    <h4 className="lg:my-3.5 sm:my-2 my-1 text-[14px] font-semibold text-primary md:text-xl">
                      {slide.heading}
                    </h4>
                    <div className="md:my-2 lg:mt-5 my-1 grid gap-[10px] sm:gap-[30px] md:gap-[50px] lg:gap-[70px] grid-cols-4">
                      {slide.items.slice(0, 4).map((item, index) => (
                        <div key={index} className="flex">
                          <div className="flex flex-col items-center">
                            <div className="w-[45px] sm:w-[80px] md:w-[90px] lg:w-[100px]">
                              <Image
                                alt={item.name}
                                width={114}
                                height={114}
                                src={item.src}
                                layout="intrinsic" // Ensure layout is set properly
                                quality={100} // Increase image quality
                              />
                            </div>
                            <p className="mt-2 text-[12px] md:text-[14px] lg:text-[16px] hidden sm:block">
                              {item.name}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-5 my-1 grid gap-[10px] sm:gap-[30px] md:gap-[50px] lg:gap-[70px] grid-cols-3">
                      {slide.items.slice(4).map((item, index) => (
                        <div key={index} className="flex">
                          <div className="flex flex-col items-center">
                            <div className="w-[45px] sm:w-[80px] md:w-[90px] lg:w-[100px]">
                              <Image
                                alt={item.name}
                                width={114}
                                height={114}
                                src={item.src}
                                layout="intrinsic"
                                quality={100}
                              />
                            </div>
                            <p className="mt-2 text-[12px] text-black/50 md:text-[14px] lg:text-[16px] hidden sm:block">
                              {item.name}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </section>
  );
};

export default SliderSection;
