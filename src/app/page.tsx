import HomeHero from "@/components/HomePage/HomeHero";
import HomeStatistic from "@/components/HomePage/HomeStatistic";
import HomeSolution from "@/components/HomePage/HomeSolution";
import HomePricing from "@/components/HomePage/HomePricing";
import HomePricingNew from "@/components/HomePage/HomePricingNew";



export default function Home() {
  return (
    <>
      <HomeHero />

      <HomeStatistic />

      <HomeSolution />

      <HomePricing />
      {/* <HomePricingNew /> */}
    </>
  );
}
