'use client'
import ContactForm from '@/components/ui/ContactPage/ContactForm';
import Portfolio from '@/components/shared/portfolio';
import Wrapper from '@/components/shared/Wrapper';
import { FaMobileAlt } from 'react-icons/fa';
import { Earth, Mail } from 'lucide-react';

const Contact = () => {
  return (
    <Wrapper>
      <div className="mb-[10px] sm:mb-[20px] md:mb-[20px]">
        <h1 className="text-center text-[18px] sm:text-[24px]  md:text-[28px] font-bold capitalize leading-[120%] lg:text-[48px]">
          Contact us
        </h1>
        <p className="my-1 sm:my-3.5 text-center text-[12px] md:text-[14px] lg:text-[18px] font-medium max-w-[80%] mx-auto  leading-[160%] tracking-[0.36px]">
          Ready to transform your business? Contact our Experts Now!
        </p>
      </div>
      <div className="rounded-[20px] sm:rounded-[40px] lg:rounded-[80px] bg-primary-foreground p-10">
        <div className="flex items-center xl:items-start justify-center sm:gap-10 gap-3 max-xl:flex-col-reverse">
          <div className="bg-primary sm:rounded-[20px] rounded-[10px]   sm:px-14 px-7 py-4 mb-3 sm:mb-0  sm:py-8  xl:min-h-[770px] w-full xl:w-auto">
            <h1 className="translate-[0.48px] text-[14px] sm:text-[18px] font-bold leading-[160%] text-white md:text-[24px]">
              Contact Information
            </h1>
            <p className="translate-[0.32px] text-[12px] sm:text-[14px] leading-[160%]  text-[#ffffff99] md:text-[16px]">
              Fill up the form and our Team will get back to you within 24
              hours.
            </p>
            <ul className="mt-5 sm:mt-9 flex flex-col justify-start gap-2.5 sm:gap-5">
              <li className="flex items-center justify-start  gap-2.5 sm:gap-5">
                <div className="p-1  rounded-full bg-primary-foreground">
                  <FaMobileAlt className="text-primary" size={20} />
                </div>{' '}
                +00000000000
              </li>
              <li className="flex items-center justify-start  gap-2.5 sm:gap-5">
                <div className="p-1  rounded-full bg-primary-foreground">
                  <Mail className="text-primary" size={20} />
                </div>{' '}
                +00000000000
              </li>
              <li className="flex items-center justify-start  gap-2.5 sm:gap-5">
                <div className="p-1  rounded-full bg-primary-foreground">
                  <Earth className="text-primary" size={20} />
                </div>{' '}
                +00000000000
              </li>
            </ul>
          </div>

          <div className="flex flex-col lg:pt-7 w-full">
            <ContactForm />
          </div>
        </div>
      </div>
      <div className="container items-center justify-center overflow-hidden pt-5 md:pt-4 lg:pt-8 text-center flex flex-col">
        <h2 className="text-[24px] sm:text-[24px]  md:text-[28px] font-semibold lg:text-[40px]">
          See Our Work
        </h2>
        <p class="ms:text-lg text-[12px] max-w-[280px] text-center my-1.5  md:my-1 lg:my-5 sm:max-w-[1050px] text-wrap break-normal sm:text-[14px] font-medium md:text-[14px] lg:text-[16px]">
          Explore our projects showcasing the diversity, expertise, and
          commitment to excellence that defines Insoft IT. Each project below
          represents a journey of challenges, creativity, and successful digital
          solutions.
        </p>
      </div>
      <div className="flex justify-center w-full">
        <Portfolio />
      </div>
    </Wrapper>
  );
};

export default Contact;
