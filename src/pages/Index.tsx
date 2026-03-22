import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

import Services from "@/components/Services";
import BeforeAfter from "@/components/BeforeAfter";
import ServiceArea from "@/components/ServiceArea";
import AboutUs from "@/components/AboutUs";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      
      <Services />
      <HowItWorks />
      <BeforeAfter />
      <Testimonials />
      <FAQ />
      <ServiceArea />
      <CTASection />
      <AboutUs />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;
