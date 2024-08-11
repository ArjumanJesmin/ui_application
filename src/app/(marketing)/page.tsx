import HeroSection from "@/components/homePage/HeroSection";
import NewsLetter from "@/components/homePage/NewsLetter";
import Pricing from "@/components/homePage/Pricing";
import Testimonials from "@/components/homePage/Testimonials";
import WithWork from "@/components/homePage/WithWork";

const HomePage = () => {
  return (
    <section className="w-full relative flex items-center flex-col justify-center px-4 md:px-0 py-8">
      {/* hero section */}
      <HeroSection />

      {/* how it works */}
      <WithWork />

      {/* Pricing */}
      <Pricing />
      {/* Testimonials */}
      <Testimonials />
      {/* newsletter */}
      <NewsLetter />
    </section>
  );
};

export default HomePage;
