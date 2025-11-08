"use client"

import Image from "next/image";

export default function WhyVaultLead() {
    return (
        <>
            <section>
                <div className="container">
                    <div className="why-leads-headings">
                        <h2 className="h3">Why DhatuVault Leads Clinical Trials</h2>

                        <p className="h6 text-rg">Regulatory-first architecture, AI-driven automation, and intelligent solutions Vault delivers secure, scalable, and inspection-ready trial management.</p>
                    </div>

                    <div className="why-leads-lists">
                        <div className="why-leads-list site-radius-20">
                            <Image src='/images/aboutpage/why-leads-compliance.webp' alt="" width={261} height={182}></Image>

                            <h3 className="h5 text-md">Compliance-First Architecture </h3>

                            <p>Built for global regulatory standards, Vault ensures your trial data is secure, auditable, and inspection-ready at all times.</p>
                        </div>

                        <div className="why-leads-list site-radius-20">
                            <Image src='/images/aboutpage/why-leads-ai-automation.webp' alt="" width={307} height={201}></Image>

                            <h3 className="h5 text-md">AI-Powered Automation</h3>

                            <p>DhatuVault&apos;s AI-powered automation classifies, validates, and manages trial documents reducing manual effort and eliminating errors.</p>
                        </div>

                        <div className="why-leads-list site-radius-20">
                            <Image src='/images/aboutpage/why-leads-dashboard.webp' alt="" width={363} height={197}></Image>
                            
                            <h3 className="h5 text-md">Real-Time Dashboards</h3>

                            <p>Monitor trials in real time with DhatuVault&apos;s interactive dashboards providing instant insights </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}