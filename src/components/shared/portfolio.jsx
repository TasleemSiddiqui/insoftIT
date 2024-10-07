import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/Elements/tabs';
import Image from 'next/image';
import { portfolioData } from '../ui/HomePage/data';

const Portfolio = () => {
  return (
    <section className="justify-center items-center mx-auto w-full">
      <Tabs defaultValue="mobileApp">
        {/* TabsList for tab navigation */}
        <TabsList
          className={`h-fit flex flex-wrap md:flex-nowrap overflow-x-auto p-1 `}
        >
          {Object.keys(portfolioData).map((key) => (
            <TabsTrigger
              key={key}
              value={key}
              className="text-[12px] md:text-[16px] md:flex flex-wrap  "
            >
              {key.charAt(0).toUpperCase() + key.slice(1)}
            </TabsTrigger>
          ))}
        </TabsList>

        {/* TabsContent for each tab's content */}
        {Object.entries(portfolioData).map(([key, { paragraph, images }]) => (
          <TabsContent
            key={key}
            value={key}
            className="flex flex-col flex-wrap items-center justify-center mt-0"
          >
            {/* Paragraph Section */}
            <p className="sm:mt-3.5 mt-2 md:max-w-[850px] lg:max-w-[930px] sm:pb-10 break-normal pb-5 sm:text-[14px] text-[12px] font-medium text-black/50 md:text-[14px] lg:text-[18px]">
              {paragraph}
            </p>

            {/* Images Section */}
            <div className="sm:grid md:gap-[40px] gap-x-[25px] gap-y-[20px] sm:gap-[20px] justify-center sm:grid-cols-3 flex flex-wrap items-center">
              {images.map((img) => (
                <Image
                  key={img.id}
                  src={img.src}
                  alt={img.alt}
                  className="sm:h-auto sm:!w-full rounded-xl w-[120px] md:h-[220px] lg:h-[400px]"
                  height={300}
                  width={300}
                  layout="responsive" // Ensure responsive layout for better image scaling
                />
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
};

export default Portfolio;
