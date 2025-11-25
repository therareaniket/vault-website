import ESignProcess from "@/components/Securitypage/ESignProcess";
import RegulatoryPreservation from "@/components/Securitypage/RegulatoryPreservation";
import SDLCStages from "@/components/Securitypage/SDLCstages";
import SecurePlatform from "@/components/Securitypage/SecurePlatform";
import SecurityAssurance from "@/components/Securitypage/SecurityAssurance";
import SecurityHero from "@/components/Securitypage/SecurityHero";
import { fetchGraphQL } from "@/lib/graphql";

type SecurityData = {
    page:{
        securitypage: {
            securityHeroTitle: string;
            securityHeroSubtitle: string;
            
            globalComplianceTitle: string;
            globalComplianceSubtitle: string;
            fda21Details: string;
            euAnnexDetails: string;
            hipaaDetails: string;
            gdprDetails: string;
            cdscoDetails: string;

            esignCeremonyTitle: string;
            esignCeremonySubtitle: string;
            esignStep1: string;
            esignStep2: string;
            esignStep3: string;
            esignStep4: string;
            esignStep5: string;

            secureWorkspacesTitle: string;
            secureWorkspacesSubtitle: string;

            regulatoryPreservationTitle: string;
            regulatoryPreservationSubtitle: string;

            sdlcTitle: string;
            sdlcSubtitle: string;
        }
    }
}

export default async function SecurityCompliance() {

        const Solution = await fetchGraphQL<SecurityData>(`
             query {
                page(id: "/security", idType: URI) {
                    securitypage {
                        securityHeroTitle
                        securityHeroSubtitle

                        globalComplianceTitle
                        globalComplianceSubtitle
                        fda21Details
                        euAnnexDetails
                        hipaaDetails
                        gdprDetails
                        cdscoDetails

                        esignCeremonyTitle
                        esignCeremonySubtitle
                        esignStep1
                        esignStep2
                        esignStep3
                        esignStep4
                        esignStep5

                        secureWorkspacesTitle
                        secureWorkspacesSubtitle

                        regulatoryPreservationTitle
                        regulatoryPreservationSubtitle

                        sdlcTitle
                        sdlcSubtitle
                    }
                }
            }`)
    
        const SecurityFetch = Solution.page.securitypage;

    return(
        <>
            <SecurityHero securityHeroTitle={SecurityFetch.securityHeroTitle} securityHeroSubtitle={SecurityFetch.securityHeroSubtitle} />

            <SecurityAssurance globalComplianceTitle={SecurityFetch.globalComplianceTitle} globalComplianceSubtitle={SecurityFetch.globalComplianceSubtitle} fda21Details={SecurityFetch.fda21Details} euAnnexDetails={SecurityFetch.euAnnexDetails} hipaaDetails={SecurityFetch.hipaaDetails} gdprDetails={SecurityFetch.gdprDetails} cdscoDetails={SecurityFetch.cdscoDetails}/>

            <ESignProcess esignCeremonyTitle={SecurityFetch.esignCeremonyTitle} esignCeremonySubtitle={SecurityFetch.esignCeremonySubtitle} esignStep1={SecurityFetch.esignStep1} esignStep2={SecurityFetch.esignStep2} esignStep3={SecurityFetch.esignStep3} esignStep4={SecurityFetch.esignStep4} esignStep5={SecurityFetch.esignStep5} />

            <SecurePlatform secureWorkspacesTitle={SecurityFetch.secureWorkspacesTitle} secureWorkspacesSubtitle={SecurityFetch.secureWorkspacesSubtitle} />

            <RegulatoryPreservation regulatoryPreservationTitle={SecurityFetch.regulatoryPreservationTitle} regulatoryPreservationSubtitle={SecurityFetch.regulatoryPreservationSubtitle} />

            <SDLCStages sdlcTitle={SecurityFetch.sdlcTitle} sdlcSubtitle={SecurityFetch.sdlcSubtitle}/>
        </>
    );
}