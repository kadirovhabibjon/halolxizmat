import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import ServiceCategories from "@/components/home/ServiceCategories";
import HowItWorks from "@/components/home/HowItWorks";
import FeaturedProviders from "@/components/home/FeaturedProviders";
import Testimonials from "@/components/home/Testimonials";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <ServiceCategories />
        <HowItWorks />
        <FeaturedProviders />
        <Testimonials />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
