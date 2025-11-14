import FeaturesLabs from "@/components/Solutionspage/SolutionFeaturesLab";
import SolutionHero from "@/components/Solutionspage/SolutionHero";
import StreamlinedOpera from "@/components/Solutionspage/SolutionStreamlineOps";
import TrialOversight from "@/components/Solutionspage/SolutionTrialOversight";

export default function Solutions() {
    return (
        <>
            <SolutionHero />

            <StreamlinedOpera />

            <TrialOversight />

            <FeaturesLabs />
        </>
    );
}