import AboutHero from "@/components/Aboutpage/AboutHero";
import ProvenClinicals from "@/components/Aboutpage/AboutProvenClinicals";
import AboutRoles from "@/components/Aboutpage/AboutRoles";
import SecuritiesPlatform from "@/components/Aboutpage/AboutSecurities";
import SystematicCompliance from "@/components/Aboutpage/AboutSystematicCompliance";
import WhyVaultLead from "@/components/Aboutpage/AboutWhyVaultLeads";

export default function About () {
    return(
        <>
            <AboutHero />

            <AboutRoles />

            <WhyVaultLead />

            {/* <ProvenClinicals /> */}

            <SystematicCompliance />

            <SecuritiesPlatform />
        </>
    );
}
