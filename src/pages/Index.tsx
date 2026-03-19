import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustStats from "@/components/TrustStats";
import Services from "@/components/Services";
import BeforeAfter from "@/components/BeforeAfter";
import AboutUs from "@/components/AboutUs";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <TrustStats />
      <Services />
      <BeforeAfter />
      <AboutUs />
      <HowItWorks />
      <Testimonials />
      <FAQ />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
