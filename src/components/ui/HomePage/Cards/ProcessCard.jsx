import Image from 'next/image';

const ProcessCard = ({ title, description, bgColor, imgSrc }) => (
  <div className="flex flex-col items-center justify-center">
    <div
      className={`mb-1.5 lg:mb-6 sm:mb-3 flex h-9 w-9 sm:h-12 sm:w-12 lg:h-16 lg:w-16 items-center justify-center rounded-[10px] lg:rounded-[20px]`}
      style={{ backgroundColor: bgColor }}
    >
      <Image
        loading="lazy"
        alt={title}
        width={128}
        height={128}
        className="h-5 w-5 lg:h-8 lg:w-8 md:h-6 md:w-6"
        src={imgSrc}
      />
    </div>
    <h5 className="mb-1.5 sm:mb-2 lg:mb-2.5 text-[14px] md:text-[14px] lg:text-[18px] font-semibold">
      {title}
    </h5>
    <p className="max-h-[116px] text-[10px] max-w-[370px] line-clamp-3 sm:line-clamp-none text-center md:text-[14px] lg:text-[18px] text-black/50">
      {description}
    </p>
  </div>
);
export default ProcessCard;
