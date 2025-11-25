import FeaturesLabs from "@/components/Solutionspage/SolutionFeaturesLab";
import SolutionHero from "@/components/Solutionspage/SolutionHero";
import StreamlinedOpera from "@/components/Solutionspage/SolutionStreamlineOps";
import TrialOversight from "@/components/Solutionspage/SolutionTrialOversight";
import { fetchGraphQL } from "@/lib/graphql";

type SolutionData = {
    page: {
        solutionpage:{
            solutionsHeroTitle: string;
            solutionsHeroSubtitle: string;

            operationsTitle: string;
            operationsSubtitle: string;

            oversightTitle: string;
            oversightSubtitle: string;
            oversightList1Title: string;
            oversightList1Subtitle: string;
            oversightList2Title: string;
            oversightList2Subtitle: string;
            oversightList3Title: string;
            oversightList3Subtitle: string;

            featuresLabsTitle: string;
            featuresLabsSubtitle: string;
            secureUploadDetails: string;
            validationEngineDetails: string;
            retentionArchiveDetails: string;
            notificationsDetails: string;

            glanceTitle: string;
            glanceSubtitle: string;
        }
    }
}

export default async function Solutions() {

    const Solution = await fetchGraphQL<SolutionData>(`
         query {
            page(id: "/solutions", idType: URI) {
                solutionpage {
                    solutionsHeroTitle
                    solutionsHeroSubtitle

                    operationsTitle
                    operationsSubtitle

                    oversightTitle
                    oversightSubtitle
                    oversightList1Title
                    oversightList1Subtitle
                    oversightList2Title
                    oversightList2Subtitle
                    oversightList3Title
                    oversightList3Subtitle

                    featuresLabsTitle
                    featuresLabsSubtitle
                    secureUploadDetails
                    validationEngineDetails
                    retentionArchiveDetails
                    notificationsDetails

                    glanceTitle
                    glanceSubtitle
                }
            }
        }`)

    const SolutionFetch = Solution.page.solutionpage;


    return (
        <>
            <SolutionHero solutionsHeroTitle={SolutionFetch.solutionsHeroTitle} solutionsHeroSubtitle={SolutionFetch.solutionsHeroSubtitle} />

            <StreamlinedOpera operationsTitle={SolutionFetch.operationsTitle} operationsSubtitle={SolutionFetch.operationsSubtitle} />

            <TrialOversight oversightTitle={SolutionFetch.oversightTitle} oversightSubtitle={SolutionFetch.oversightSubtitle} oversightList1Title={SolutionFetch.oversightList1Title} oversightList1Subtitle={SolutionFetch.oversightList1Subtitle} oversightList2Title={SolutionFetch.oversightList2Title} oversightList2Subtitle={SolutionFetch.oversightList2Subtitle} oversightList3Title={SolutionFetch.oversightList3Title} oversightList3Subtitle={SolutionFetch.oversightList3Subtitle} />

            <FeaturesLabs featuresLabsTitle={SolutionFetch.featuresLabsTitle} featuresLabsSubtitle={SolutionFetch.featuresLabsSubtitle} secureUploadDetails={SolutionFetch.secureUploadDetails} validationEngineDetails={SolutionFetch.validationEngineDetails} retentionArchiveDetails={SolutionFetch.retentionArchiveDetails} notificationsDetails={SolutionFetch.notificationsDetails} glanceTitle={SolutionFetch.glanceTitle} glanceSubtitle={SolutionFetch.glanceSubtitle} />
        </>
    );
}