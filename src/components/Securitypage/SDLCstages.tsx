"use client"

import Image from "next/image";

type SDLCProps = {
    sdlcTitle: string;
    sdlcSubtitle: string;
}

export default function SDLCStages({sdlcTitle, sdlcSubtitle}: SDLCProps){
    return(
        <>
            <section className="section sdlc-stages">
                <div className="container">
                    <div className="sdlc-headings">
                        <h2 className="h3">{sdlcTitle}</h2>

                        <p className="h6 text-rg">{sdlcSubtitle}</p>
                    </div>

                    <div className="sdlc-imageblock">
                        <Image src="/images/securitycompliancepage/stages-wheel.svg" alt="" width={801} height={799} className="stages-wheel"></Image>

                        <div className="stages-details">
                            <p className="h6 text-rg">DhatuVault’s Secure SDLC’s each phase forms a continuous loop that reinforces reliability, trust, and regulatory confidence.</p>

                            <div className="stages-step">
                                <ul>
                                    <li className="h6">Threat Modeling</li>
                                </ul>

                                <p className="h6 text-rg">Anticipate and assess potential risks before development.</p>
                            </div>

                            <div className="stages-step">
                                <ul>
                                    <li className="h6">Code Reviews</li>
                                </ul>

                                <p className="h6 text-rg">Detect and eliminate vulnerabilities through peer validation.</p>
                            </div>

                            <div className="stages-step">
                                <ul>
                                    <li className="h6">Automated Security Scans</li>
                                </ul>

                                <p className="h6 text-rg">Continuously scan code and systems for real-time threats.</p>
                            </div>

                            <div className="stages-step">
                                <ul>
                                    <li className="h6">Penetration Testing</li>
                                </ul>

                                <p className="h6 text-rg">Validate defenses through simulated attack scenarios.</p>
                            </div>

                            <div className="stages-step">
                                <ul>
                                    <li className="h6">Continuous Monitoring</li>
                                </ul>

                                <p className="h6 text-rg">Maintain proactive security across the live environment.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    );
}