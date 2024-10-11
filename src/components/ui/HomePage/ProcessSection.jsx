import ProcessCard from './Cards/ProcessCard';
import { processSteps } from './data';

const ProcessSection = () => {
  return (
    <section className="container flex justify-center gap-16 text-start lg:py-5">
      <div>
        <div className="flex flex-col flex-wrap items-center justify-center">
          <h2 className="text-center text-[24px] sm:text-[28px] font-semibold md:text-[28px] lg:text-[40px] py-2">
            Our Process
          </h2>
          <h4 className="mt-2 text-center sm:max-w-[795px] max-w-[280px] text-[14px] font-semibold text-primary md:text-xl">
            Strategic Digital Solutions, Seamless User Experiences
          </h4>
          <p className="my-2 max-w-[270px] mx-auto sm:my-2.5 lg:my-5 sm:max-w-[1110px] text-center text-[12px] sm:text-[14px] font-medium text-black/50 md:text-[16px] lg:text-[18px]">
            Insoft IT believes in a collaborative team approach for web and
            graphic designing, social media marketing, digital marketing, web
            and app development, and blockchain development. Our iterative
            design and development process is designed to ensure clarity, trust,
            and customer satisfaction every step of the way. Here's how we bring
            your ideas to life.
          </p>
        </div>
        <div className="mt-2 md:mt-4 lg:mt-8 grid grid-cols-2 gap-x-4 items-start justify-center gap-y-4 md:gap-x-12 md:gap-y-8 lg:gap-16 md:grid-cols-3">
          {processSteps.map((step, index) => (
            <ProcessCard
              key={index}
              title={step.title}
              description={step.description}
              bgColor={step.bgColor}
              imgSrc={step.imgSrc}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
