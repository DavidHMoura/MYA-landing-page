import ScrollProgress from '@/components/ScrollProgress';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import Ticker from '@/components/Ticker';
import WhySection from '@/components/WhySection';
import ServicesSection from '@/components/ServicesSection';
import ProcessSection from '@/components/ProcessSection';
import SecuritySection from '@/components/SecuritySection';
import ProofSection from '@/components/ProofSection';
import FaqSection from '@/components/FaqSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';

const Index = () => {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <HeroSection />
      <Ticker />
      <WhySection />
      <ServicesSection />
      <ProcessSection />
      <SecuritySection />
      <ProofSection />
      <FaqSection />
      <ContactSection />
      <Footer />
      <WhatsAppFloat />
    </>
  );
};

export default Index;
