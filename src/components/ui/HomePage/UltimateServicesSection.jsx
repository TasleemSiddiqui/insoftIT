import Image from 'next/image';
import Link from 'next/link';

import { Button } from '../Elements/button';
import UltimateServiceCard from './Cards/UltimateServiceCard';
import { ultimateServices } from './data';

const UltimateServicesSection = () => {
  return (
    <section className="container">
      <div className="mt-2 sm:mt-6 mb-2 text-center">
        <h2 className="text-[20px] sm:text-[28px] font-bold md:text-[24px] lg:text-[40px]">
          Ultimate Services for your <br className="lg:block hidden" />{' '}
          Businesses
        </h2>
        <p className="max-w-[270px] sm:max-w-full mx-auto lg:my-3 text-[12px] sm:text-[14px] font-medium md:text-[14px] lg:text-[18px]">
          Discover the power of our comprehensive suite of digital services at
          Insoft IT.io
        </p>
      </div>
      <div className="flex w-full flex-col-reverse items-center justify-center lg:flex-row">
        <div className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-2 lg:gap-x-3 md:gap-x-6 sm:gap-y-5 xl:w-[60%]">
          {ultimateServices.map((service, index) => (
            <UltimateServiceCard
              key={index}
              title={service.title}
              description={service.description}
              imgSrc={service.imgSrc}
            />
          ))}
        </div>
        <div className="flex w-[80%] sm:h-full sm:w-full justify-center lg:justify-end xl:w-[40%]">
          <Image
            alt="ultimate"
            loading="lazy"
            width={567}
            height={567}
            className="lg:w-auto md:w-[300px]"
            src="/assets/ultimate.avif"
          />
        </div>
      </div>
      <div className="mx-auto flex w-[83%] sm:text-[14px] items-center justify-center md:w-full md:items-start lg:justify-start">
        <Link href="/contact">
          <Button>Contact Us</Button>
        </Link>
      </div>
    </section>
  );
};

export default UltimateServicesSection;
