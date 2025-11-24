"use client"

import Image from "next/image";

type WhyVaultLeads = {
    leadsClinicalTrialsTitle: string;
    leadsClinicalTrialsSubtitle: string;
}

export default function WhyVaultLead({leadsClinicalTrialsTitle, leadsClinicalTrialsSubtitle}:WhyVaultLeads) {
    return (
        <>
            <section>
                <div className="container">
                    <div className="why-leads-headings">
                        <h2 className="h3">{leadsClinicalTrialsTitle}</h2>

                        <p className="h6 text-rg">{leadsClinicalTrialsSubtitle}</p>
                    </div>

                    <div className="why-leads-lists">
                        <div className="why-leads-list site-radius-20">
                            <Image src='/images/dhatuVaultGifs/why-leads-compliance.gif' alt="" width={261} height={182}></Image>

                            <div className="leads-list-text">
                                <h3 className="h5 text-md">Compliance-First Architecture</h3>

                                <p className="text-18-ani">Built for global regulatory standards, DhatuVault ensures your trial data is secure, auditable, and inspection-ready.</p>
                            </div>
                        </div>

                        <div className="why-leads-list site-radius-20">
                            <Image src='/images/dhatuVaultGifs/why-leads-ai-automation.gif' alt="" width={307} height={201}></Image>

                            <div className="leads-list-text">
                                <h3 className="h5 text-md">Powered by AI Agents</h3>

                                <p className="text-18-ani">DhatuVault&apos;s AI-powered automation classifies, validates, and manages trial documents reducing manual effort.</p>
                            </div>
                        </div>


                        <div className="why-leads-list site-radius-20">
                            <Image src='/images/dhatuVaultGifs/why-leads-dashboard.gif' alt="" width={363} height={197}></Image>
                            <div className="leads-list-text">
                                <h3 className="h5 text-md">Real-Time Dashboards</h3>

                                <p className="text-18-ani">Monitor trials in real time with DhatuVault&apos;s interactive dashboards providing instant insights.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}