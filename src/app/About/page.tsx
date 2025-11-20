import AboutHero from "@/components/Aboutpage/AboutHero";
import ProvenClinicals from "@/components/Aboutpage/AboutProvenClinicals";
import AboutRoles from "@/components/Aboutpage/AboutRoles";
import SecuritiesPlatform from "@/components/Aboutpage/AboutSecurities";
import SystematicCompliance from "@/components/Aboutpage/AboutSystematicCompliance";
import WhyVaultLead from "@/components/Aboutpage/AboutWhyVaultLeads";
import Workflow from "@/components/Aboutpage/AboutWorkflow";
import { fetchGraphQL } from "@/lib/graphql";

type AboutData = {
    page: {
        aboutpage: {
            aboutHeroTitle: string;
            aboutHeroSubtitle: string;

            infoTitle: string;
            infoSubtitle: string;

            vaultWorkflowTitle: string;
            vaultWorkflowSubtitle: string;
            vaultProcessFlow: {
                flow1Title: string;
                flow1Subtitle: string;

                flow2Title: string;
                flow2Subtitle: string;

                flow3Title: string;
                flow3Subtitle: string;

                flow4Title: string;
                flow4Subtitle: string;

                flow5Title: string;
                flow5Subtitle: string;
            }

            rolesTitle: string;
            rolesSubtitle: string;

            leadsClinicalTrialsTitle: string;
            leadsClinicalTrialsSubtitle: string;

            trialInnovationTitle: string;
            trialInnovationParagraph1: string;
            trialInnovationParagraph2: string;

            systematicComplianceTitle: string;
            systematicComplianceSubtitle: string;

            certifiedPlatformsTitle: string;
            certifiedPlatformsSubtitle: string;

            certifiedPlatformsList: {
                platform1Title: string;
                platform1Subtitle: string;

                platform2Title: string;
                platform2Subtitle: string;

                platform3Title: string;
                platform3Subtitle: string;

                platform4Title: string;
                platform4Subtitle: string;
            }
        };
    };
}

export default async function About () {

    const About = await fetchGraphQL<AboutData>(`
            query {
            page(id: "/about-us", idType: URI) {
                aboutpage {
                    aboutHeroTitle
                    aboutHeroSubtitle

                    infoTitle
                    infoSubtitle

                    vaultWorkflowTitle
                    vaultWorkflowSubtitle
                    vaultProcessFlow {
                        flow1Title
                        flow1Subtitle

                        flow2Title
                        flow2Subtitle

                        flow3Title
                        flow3Subtitle

                        flow4Title
                        flow4Subtitle

                        flow5Title
                        flow5Subtitle
                    }

                    rolesTitle
                    rolesSubtitle

                    leadsClinicalTrialsTitle
                    leadsClinicalTrialsSubtitle

                    trialInnovationTitle
                    trialInnovationParagraph1
                    trialInnovationParagraph2

                    systematicComplianceTitle
                    systematicComplianceSubtitle

                    certifiedPlatformsTitle
                    certifiedPlatformsSubtitle

                    certifiedPlatformsList {
                        platform1Title
                        platform1Subtitle

                        platform2Title
                        platform2Subtitle

                        platform3Title
                        platform3Subtitle

                        platform4Title
                        platform4Subtitle
                    }
                }
            }
    }`)

    const AboutFetch = About.page.aboutpage;
    return(
        <>
            <AboutHero aboutHeroTitle={AboutFetch.aboutHeroTitle} aboutHeroSubtitle={AboutFetch.aboutHeroSubtitle} infoTitle={AboutFetch.infoTitle} infoSubtitle={AboutFetch.infoSubtitle} />

            <Workflow vaultWorkflowTitle={AboutFetch.vaultWorkflowTitle} vaultWorkflowSubtitle={AboutFetch.vaultWorkflowSubtitle} vaultProcessFlow={AboutFetch.vaultProcessFlow}/>

            <AboutRoles rolesTitle={AboutFetch.rolesTitle} rolesSubtitle={AboutFetch.rolesSubtitle}/>

            <WhyVaultLead leadsClinicalTrialsTitle={AboutFetch.leadsClinicalTrialsTitle} leadsClinicalTrialsSubtitle={AboutFetch.leadsClinicalTrialsSubtitle} />

            <ProvenClinicals trialInnovationTitle={AboutFetch.trialInnovationTitle} trialInnovationParagraph1={AboutFetch.trialInnovationParagraph1} trialInnovationParagraph2={AboutFetch.trialInnovationParagraph2} />

            <SystematicCompliance systematicComplianceTitle={AboutFetch.systematicComplianceTitle} systematicComplianceSubtitle={AboutFetch.systematicComplianceSubtitle} />

            <SecuritiesPlatform certifiedPlatformsTitle={AboutFetch.certifiedPlatformsTitle} certifiedPlatformsSubtitle={AboutFetch.certifiedPlatformsSubtitle} certifiedPlatformsList={AboutFetch.certifiedPlatformsList}/>
        </>
    );
}
