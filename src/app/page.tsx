import HomeBlogSection from "@/components/HomePage/HomeBlogSection";
import HomeFAQ from "@/components/HomePage/HomeFAQ";
import HomeHero from "@/components/HomePage/HomeHero";
import HomePricing from "@/components/HomePage/HomePricing";
import HomeRoleBaseSolSection from "@/components/HomePage/HomeRoleBaseSolSection";
import HomeSolution from "@/components/HomePage/HomeSolution";
import HomeStatistic from "@/components/HomePage/HomeStatistic";
import HomeTestimonial from "@/components/HomePage/HomeTestimonial";
import HomeVideo from "@/components/HomePage/HomeVideo";
import { fetchGraphQL } from "@/lib/graphql";


type HomepageData = {
    page: {
        homepage: {
            homeHeroTitle: string;
            homeHeroSubtitle: string;
            homeHeroCta1?: { url: string; title: string } | null;
            homeHeroCta2?: { url: string; title: string } | null;

            statisticsTitle: string;
            statisticsSubtitle: string;
            
            workflowTitle: string;
            workflowSubtitle: string;
            planning: string;
            edlTemplates: string;
            issueTracking: string;
            etmfViewer: string;
            integrationHub: string;
            blindingManagement: string;

            excellenceTitle: string;
            excellenceSubtitle: string;
            excellenceCard1Title: string;
            excellenceCard1Subtitle: string;
            excellenceCard2Title: string;
            excellenceCard2Subtitle: string;
            excellenceCard3Title: string;
            excellenceCard3Subtitle: string;
            excellenceCard4Title: string;
            excellenceCard4Subtitle: string;
            excellenceCard5Title: string;
            excellenceCard5Subtitle: string;

            pricingTitle: string;
            pricingSubtitle: string;
            planDetails: {
                standardUpdatedPrice: string;
                standardOldPrice: string;
                standardInclude1: string;
                standardInclude2: string;
                standardInclude3: string;
                standardInclude4: string;
                standardInclude5: string;

                enterpriseUpdatedPrice: string;
                enterpriseOldPrice: string;
                enterpriseInclude1: string;
                enterpriseInclude2: string;
                enterpriseInclude3: string;
                enterpriseInclude4: string;
                enterpriseInclude5: string;
            }

            blogsTitle: string;
            blogsSubtitle: string;

            testimonialsTitle: string;
            testimonialsSubtitle: string;
            testimonialReview1: string;
            testimonialReview2: string;
            testimonialReview3: string;
            testimonialReview4: string;

            faqTitle: string;
            faqSubtitle: string;

            faqList: {
                question1: string;
                answer1: string;
                question2: string;
                answer2: string;
                question3: string;
                answer3: string;
                question4: string;
                answer4: string;
                question5: string;
                answer5: string;
            }
        };
    };
}


export default async function Home() {

    const Home = await fetchGraphQL<HomepageData>(`
            query {
            page(id: "/", idType: URI) {
                homepage {
                    homeHeroTitle
                    homeHeroSubtitle
                    homeHeroCta1 { url  title }
                    homeHeroCta2 { url  title }

                    statisticsTitle
                    statisticsSubtitle

                    workflowTitle
                    workflowSubtitle
                    planning
                    edlTemplates
                    issueTracking
                    etmfViewer
                    integrationHub
                    blindingManagement

                    excellenceTitle
                    excellenceSubtitle
                    excellenceCard1Title
                    excellenceCard1Subtitle
                    excellenceCard2Title
                    excellenceCard2Subtitle
                    excellenceCard3Title
                    excellenceCard3Subtitle
                    excellenceCard4Title
                    excellenceCard4Subtitle
                    excellenceCard5Title
                    excellenceCard5Subtitle

                    pricingTitle
                    pricingSubtitle
                    planDetails {
                        standardUpdatedPrice
                        standardOldPrice
                        standardInclude1
                        standardInclude2
                        standardInclude3
                        standardInclude4
                        standardInclude5

                        enterpriseUpdatedPrice
                        enterpriseOldPrice
                        enterpriseInclude1
                        enterpriseInclude2
                        enterpriseInclude3
                        enterpriseInclude4
                        enterpriseInclude5
                    }

                    blogsTitle
                    blogsSubtitle

                    testimonialsTitle
                    testimonialsSubtitle
                    testimonialReview1
                    testimonialReview2
                    testimonialReview3
                    testimonialReview4

                    faqTitle
                    faqSubtitle

                    faqList {
                        question1
                        question2
                        question3
                        question4
                        question5
                        answer1
                        answer2
                        answer3
                        answer4
                        answer5
                    }
                }
            }
        }
        `)

    const HomeFetch = Home.page.homepage;
  return (
    <>
      <HomeHero home_hero_title={HomeFetch.homeHeroTitle} home_hero_subtitle={HomeFetch.homeHeroSubtitle} home_hero_cta_1={HomeFetch.homeHeroCta1} home_hero_cta_2={HomeFetch.homeHeroCta2} />

      <HomeStatistic statisticsTitle={HomeFetch.statisticsTitle} statisticsSubtitle={HomeFetch.statisticsSubtitle} />

      <HomeVideo />

      <HomeRoleBaseSolSection workflowTitle={HomeFetch.workflowTitle} workflowSubtitle={HomeFetch.workflowSubtitle} planning={HomeFetch.planning} edlTemplates={HomeFetch.edlTemplates} issueTracking={HomeFetch.issueTracking} etmfViewer={HomeFetch.etmfViewer} integrationHub={HomeFetch.integrationHub} blindingManagement={HomeFetch.blindingManagement} />

      <HomeSolution excellenceTitle={HomeFetch.excellenceTitle} excellenceSubtitle={HomeFetch.excellenceSubtitle} excellenceCard1Title={HomeFetch.excellenceCard1Title} excellenceCard1Subtitle={HomeFetch.excellenceCard1Subtitle} excellenceCard2Title={HomeFetch.excellenceCard2Title} excellenceCard2Subtitle={HomeFetch.excellenceCard2Subtitle} excellenceCard3Title={HomeFetch.excellenceCard3Title} excellenceCard3Subtitle={HomeFetch.excellenceCard3Subtitle} excellenceCard4Title={HomeFetch.excellenceCard4Title} excellenceCard4Subtitle={HomeFetch.excellenceCard4Subtitle} excellenceCard5Title={HomeFetch.excellenceCard5Title} excellenceCard5Subtitle={HomeFetch.excellenceCard5Subtitle} />

      <HomePricing pricingTitle={HomeFetch.pricingTitle} pricingSubtitle={HomeFetch.pricingSubtitle} planDetails={HomeFetch.planDetails} />
    
      <HomeBlogSection blogsTitle={HomeFetch.blogsTitle} blogsSubtitle={HomeFetch.blogsSubtitle} />
      
      <HomeTestimonial testimonialsTitle={HomeFetch.testimonialsTitle} testimonialsSubtitle={HomeFetch.testimonialsSubtitle} testimonialReview1={HomeFetch.testimonialReview1} testimonialReview2={HomeFetch.testimonialReview2} testimonialReview3={HomeFetch.testimonialReview3} testimonialReview4={HomeFetch.testimonialReview4} />

      <HomeFAQ faqTitle={HomeFetch.faqTitle} faqSubtitle={HomeFetch.faqSubtitle} faqList={HomeFetch.faqList} />
    </>
  );
}
