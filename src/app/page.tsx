import HomeBlogSection from "@/components/Homepage/HomeBlogSection";
import HomeFAQ from "@/components/Homepage/HomeFAQ";
import HomeHero from "@/components/Homepage/HomeHero";
import HomePricing from "@/components/Homepage/HomePricing";
import HomeRoleBaseSolSection from "@/components/Homepage/HomeRoleBaseSolSection";
import HomeSolution from "@/components/Homepage/HomeSolution";
import HomeStatistic from "@/components/Homepage/HomeStatistic";
import HomeTestimonial from "@/components/Homepage/HomeTestimonial";
import HomeVideo from "@/components/Homepage/HomeVideo";


export default function Home() {
  return (
    <>
      <HomeHero />

      <HomeStatistic />

      <HomeVideo />

      {/* <HomeRoleBaseSolSection /> */}

      <HomeSolution />

      <HomePricing />
    
      <HomeBlogSection />
      
      <HomeTestimonial />

      <HomeFAQ />
    </>
  );
}
