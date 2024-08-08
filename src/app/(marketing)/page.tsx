import HeroSection from "@/components/homePage/HeroSection";
import Pricing from "@/components/homePage/Pricing";
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
    </section>
  );
};

export default HomePage;
