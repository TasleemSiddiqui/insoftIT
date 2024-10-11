import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/Elements/accordion";

const FAQ = () => {
  return (
    <section className="container flex flex-col items-center justify-center py-3 sm:py-6 text-center lg:w-[1055px]">
      <h4 class=" text-[24px]  sm:text-[28px] font-semibold md:text-[28px] lg:text-[40px]">
        Frequently Asked Questions
      </h4>
      <p class=" text-[12px] max-w-[1055px] mt-1  mb-5 lg:mt-3 md:mb-10 sm:text-[16px] font-[500] text-black/50 md:text-[14px] lg:text-[18px] text-center">
        From customizing existing platforms to building bespoke solutions from
        scratch, we have helped businesses of all sizes establish a strong
        online presence, drive sales, and maximize their e-commerce potential.
        <br class="hidden lg:block" />
        Got questions? We've got answers.
      </p>
      <div className="w-full lg:w-[840px]">
        <Accordion type="single" collapsible>
          <AccordionItem
            value="item-1"
            className="border-b-0 mb-6 bg-white rounded-3xl px-4 py-3 "
          >
            <AccordionTrigger className="text-primary hover:no-underline text-[10px] sm:text-[12px] md:text-[14] lg:text-[18px] leading-3">
              What services does Insoft IT offer?
            </AccordionTrigger>
            <AccordionContent className="text-left text-gray-400 text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] ">
              Insoft IT offers a wide range of services including mobile app
              development, website designing, SaaS development, blockchain
              development, e-commerce solutions, digital marketing and graphic
              designing.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion type="single" collapsible>
          <AccordionItem
            value="item-1"
            className="border-b-0 mb-6 bg-white rounded-3xl px-4 py-3 "
          >
            <AccordionTrigger className="text-primary hover:no-underline text-[10px] sm:text-[12px] md:text-[14] lg:text-[18px] leading-3">
              How experienced is Insoft IT in software development?
            </AccordionTrigger>
            <AccordionContent className="text-left text-gray-400 text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] ">
              With over five years of experience in the industry, Insoft IT has
              a team of skilled professionals who are experts in their
              respective fields, ensuring top-notch quality andreliability in
              all our projects.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion type="single" collapsible>
          <AccordionItem
            value="item-1"
            className="border-b-0 mb-6 bg-white rounded-3xl px-4 py-3 "
          >
            <AccordionTrigger className="text-primary hover:no-underline text-[10px] sm:text-[12px] md:text-[14] lg:text-[18px] leading-3">
              Can Insoft IT handle custom software development projects?
            </AccordionTrigger>
            <AccordionContent className="text-left text-gray-400 text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] ">
              Yes, Insoft IT specializes in custom software development
              tailored to the unique needs and requirements of each client. From
              concept to deployment, we work closely withour clients to deliver
              bespoke solutions that drive success.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion type="single" collapsible>
          <AccordionItem
            value="item-1"
            className="border-b-0 mb-6 bg-white rounded-3xl px-4 py-3 "
          >
            <AccordionTrigger className="text-primary hover:no-underline text-[10px] sm:text-[12px] md:text-[14] lg:text-[18px] leading-3">
              What technologies does Insoft IT work with?
            </AccordionTrigger>
            <AccordionContent className="text-left text-gray-400 text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] ">
              Insoft IT leverages a wide array of cutting-edge technologies
              including but not limited to React.js, Vue.js, WordPress, Magento,
              Swift, Python, Java, and many more to deliver innovative and
              scalable solutions.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
