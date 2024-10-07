import FAQ from '@/components/ui/HomePage/FAQ';
import HomeSection from '@/components/ui/HomePage/HomeSection';
import InfoSection from '@/components/ui/HomePage/InfoSection';
import LatestProjectsSection from '@/components/ui/HomePage/LatestProjectsSection';
import HomePortfolio from '@/components/ui/HomePage/HomePortfolio';
import ProcessSection from '@/components/ui/HomePage/ProcessSection';
import ServiceSection from '@/components/ui/HomePage/ServiceSection';
import SliderSection from '@/components/ui/HomePage/SliderSection';
import Testimonials from '@/components/ui/HomePage/Testimonials';
import UltimateServicesSection from '@/components/ui/HomePage/UltimateServicesSection';

import Wrapper from '@/components/shared/Wrapper';

export default function Home() {
  return (
    <Wrapper>
      <HomeSection />
      <ServiceSection />
      <SliderSection />
      <ProcessSection />
      <HomePortfolio />
      <InfoSection />
      <LatestProjectsSection />
      <UltimateServicesSection />
      <Testimonials />
      <FAQ />
    </Wrapper>
  );
}
