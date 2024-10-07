import Image from 'next/image';

const ServiceCard = ({ src, alt, title, description, width, height }) => {
  return (
    <div className="flex flex-col items-center sm:justify-center justify-start">
      <div className="mb-2 lg:mb-7 flex h-[2rem] w-[2rem] md:h-[4rem] md:w-[4rem] lg:h-24 lg:w-24 items-center justify-center rounded-full bg-[#F0EEFF]">
        <Image
          loading="lazy"
          alt={alt}
          width={width}
          height={height}
          className="w-[20px] md:w-[30px] lg:w-auto"
          src={src}
        />
      </div>
      <div className="md:h-[80px] lg:h-[100px] flex flex-col justify-start items-center">
        <h4 className="lg:mb-2.5 md:mb-1 text-[12px] sm:text-[14px] h-[30px] leading-tight w-[70%] sm:w-full font-semibold text-primary lg:text-[22px]">
          {title}
        </h4>
        <p className="max-w-[341px] text-center text-[10px] sm:text-[12px] line-clamp-3 sm:line-clamp-none lg:text-[18px]">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
