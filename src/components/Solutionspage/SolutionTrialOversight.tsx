"use client"

import Image from "next/image";

export default function TrialOversight() {
    return(
        <>
            <section>
                <div className="container">
                    <div className="trail-ovrsgt-headings">
                        <h2 className="h3">Trial Oversight Empowered With Intelligence</h2>

                        <p className="h6 text-rg">Discover how DhatuVault deliver actionable insights for faster decisions and accelerated trial success</p>
                    </div>

                    <div className="ovrsgt-lists">
                        <div className="ovrsgt-list">
                            <div className="ovrsgt-list-titles">
                                <h3 className="h5 text-sb">Real-time visibility into TMF completeness</h3>

                                <p>DhatuVault provides Real-time access to trial master file status enables centralized oversight, compliance tracking, and coordination</p>
                            </div>

                            <Image src="/images/solutionpage/real-time-visibility.webp" alt="real-time-visibility" width={493} height={246}></Image>
                        </div>

                        <div className="ovrsgt-list">
                            <div className="ovrsgt-list-titles">
                                <h3 className="h5 text-sb">Built-in compliance for audit readiness</h3>

                                <p>Automated workflows ensure each document meets regulatory requirements and quality standards through continuous validation</p>
                            </div>

                            <Image src="/images/solutionpage/compliance-audit.webp" alt="compliance-audit" width={493} height={246}></Image>
                        </div>

                        <div className="ovrsgt-list">
                            <div className="ovrsgt-list-titles">
                                <h3 className="h5 text-sb">Custom dashboards for milestone tracking </h3>

                                <p>Monitor site activation, enrollment progress, and data lock timelines with customizable realtime tracking and alerts</p>
                            </div>

                            <Image src="/images/solutionpage/milestone-tracking.webp" alt="milestone-tracking" width={493} height={246}></Image>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}