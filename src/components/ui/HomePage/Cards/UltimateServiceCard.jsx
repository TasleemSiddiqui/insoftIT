import Image from 'next/image';

const UltimateServiceCard = ({ title, description, imgSrc }) => {
  return (
    <div className="flex flex-col flex-wrap items-center justify-center gap-[10px] lg:items-start lg:justify-start">
      <div className="flex h-18 w-18 md:h-16 md:w-16 lg:h-24 lg:w-24 items-center justify-center rounded-full sm:bg-[#F0EEFF]">
        <Image
          alt={title}
          loading="lazy"
          width={42}
          height={42}
          className="w-[20px] sm:w-[30px] lg:w-[auto]"
          src={imgSrc}
        />
      </div>
      <div className="flex flex-col items-center justify-start sm:justify-start lg:items-start lg:justify-start w-full min-h-[90px]">
        <h4 className="mb-1 sm:mb-2 text-center text-[12px] md:text-[14px] lg:text-xl font-semibold text-primary">
          {title}
        </h4>
        <p className="max-w-[330px] text-[10px] line-clamp-3 sm:line-clamp-none text-center text-black/50 lg:text-start md:text-[14px] lg:text-[18px]">
          {description}
        </p>
      </div>
    </div>
  );
};

export default UltimateServiceCard;
