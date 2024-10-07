import ServiceCard from './Cards/ServiceCard';
import { services } from './data';
const ServiceSection = () => {
  return (
    <section className="container text-center my-4 mx-auto sm:mt-8 lg:mb-16 sm:mb-8">
      <div className="flex flex-col flex-wrap items-center justify-center">
        <h2 className="text-[20px] sm:text-[24px] font-semibold lg:text-[40px]">
          Transforming Visions into Digital Masterpieces
        </h2>
        <h1 className="my-2 md:my-2.5 lg:mb-5 md:max-w-[950px] md:text-[16px] lg:text-[22px] mx-auto max-w-[300px] text-[12px] sm:text-[14px] font-semibold capitalize">
          with our top-notch graphic designing, website development and
          blockchain services
        </h1>
        <p className="font-medium w-full md:max-w-[795px] max-w-[250px] mx-auto text-[12px] sm:text-[14px] md:text-[14px] lg:text-[18px]">
          Cubicus envisions a world where technology becomes a decisive tool for
          every individual, leading to businesses thriving through innovation
          and users experiencing seamless, convenient digital interactions.
        </p>
      </div>

      <div className="mt-[27px] grid grid-cols-2 gap-y-2 gap-x-3 sm:gap-10 lg:gap-20 md:grid-cols-3">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            src={service.src}
            alt={service.alt}
            title={service.title}
            description={service.description}
            width={service.width}
            height={service.height}
          />
        ))}
      </div>
    </section>
  );
};

export default ServiceSection;
