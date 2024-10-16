import React from 'react';
import Wrapper from '@/components/shared/Wrapper';
import InstituteForm from '@/components/ui/institutePage/intituteForm'
const InstituteServices = () => {
  return (
    <Wrapper>
      <section className="pb-5 lg:pb-28 pt-[30px]">
        <div class="flex flex-col items-center justify-center ">
          <h1 class="text-center text-[20px]  sm:text-[28px] font-bold capitalize sm:leading-[120%] md:text-[48px]">
            Institute Services
          </h1>
          <div class="max-w-[1050px] my-2 sm:mt-0">
            <p class=" sm:my-3.5 text-center text-[12px] sm:text-[14px] font-medium  leading-tight  sm:leading-[160%] tracking-[0.36px] md:text-[18px]">
            Insoft It envisions a world where technology becomes a decisive
              tool for every individual, leading to businesses thriving through
              innovation and users experiencing seamless, convenient digital
              interactions.
            </p>
            <InstituteForm/>
          </div>
          
        </div>
      </section>
    </Wrapper>
  );
};

export default InstituteServices;
