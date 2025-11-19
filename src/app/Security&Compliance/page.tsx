import ESignProcess from "@/components/Securitypage/ESignProcess";
import RegulatoryPreservation from "@/components/Securitypage/RegulatoryPreservation";
import SDLCStages from "@/components/Securitypage/SDLCstages";
import SecurePlatform from "@/components/Securitypage/SecurePlatform";
import SecurityAssurance from "@/components/Securitypage/SecurityAssurance";
import SecurityHero from "@/components/Securitypage/SecurityHero";

export default function SecurityCompliance() {
    return(
        <>
            <SecurityHero />

            <SecurityAssurance />

            <ESignProcess />

            <SecurePlatform />

            <RegulatoryPreservation />

            <SDLCStages />
        </>
    );
}