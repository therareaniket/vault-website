import HomeHero from "@/components/HomePage/HomeHero";
import HomeStatistic from "@/components/HomePage/HomeStatistic";
import HomeVideo from "@/components/HomePage/HomeVideo";
import HomeSolution from "@/components/HomePage/HomeSolution";
import HomePricing from "@/components/HomePage/HomePricing";
import HomeBlogSection from "@/components/HomePage/HomeBlogSection";
import HomeFAQ from "@/components/HomePage/HomeFAQ";
import HomeTestimonial from "@/components/HomePage/HomeTestimonial";
import HomeRoleBaseSolSection from "@/components/HomePage/HomeRoleBaseSolSection";




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
