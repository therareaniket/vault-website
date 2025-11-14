import HomeBlogSection from "@/components/HomePage/HomeBlogSection";
import HomeFAQ from "@/components/HomePage/HomeFAQ";
import HomeHero from "@/components/HomePage/HomeHero";
import HomePricing from "@/components/HomePage/HomePricing";
import HomeRoleBaseSolSection from "@/components/HomePage/HomeRoleBaseSolSection";
import HomeSolution from "@/components/HomePage/HomeSolution";
import HomeStatistic from "@/components/HomePage/HomeStatistic";
import HomeTestimonial from "@/components/HomePage/HomeTestimonial";
import HomeVideo from "@/components/HomePage/HomeVideo";



export default function Home() {
  return (
    <>
      <HomeHero />

      <HomeStatistic />

      <HomeVideo />

      <HomeRoleBaseSolSection />

      <HomeSolution />

      <HomePricing />
    
      <HomeBlogSection />
      
      <HomeTestimonial />

      <HomeFAQ />
    </>
  );
}
