import { Header } from '@/components/layout/Header/Header';
import { HeroSection } from '@/components/sections/Hero/HeroSection';
import { ServicesSection } from '@/components/sections/Services/ServicesSection';
import { SedationSection } from '@/components/sections/SedationSpecial/SedationSection';
import { AboutSection } from '@/components/sections/About/AboutSection';
import { MediaSection } from '@/components/sections/MediaGallery/MediaSection';
//import { FaqSection } from '@/components/sections/Faq/FaqSection';
import { ContactSection } from '@/components/sections/LocationContact/ContactSection';
import { Footer } from '@/components/layout/Footer/Footer';
import { WhatsAppFloat } from '@/components/layout/FloatingButtons/WhatsAppFloat';

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-brand-text-dark antialiased">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <SedationSection />
        <AboutSection />
        <MediaSection />
      {/* <FaqSection /> */}
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}