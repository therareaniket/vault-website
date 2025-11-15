"use client"

import Image from "next/image";
import { useState } from "react";

export default function Workflow(){

    const [activeTab, setActiveTab] = useState(0);

    const tabs = [
        {
            title: "Upload documents via secure portal",
            desc: "Easily submit files through our encrypted platform, ensuring data privacy from the start.",
            icon: "icon-uploadIcon",
            image: "/images/aboutpage/upload-docs.webp",
            imgWidth: 646,
            imgHeight: 394,
        },
        {
            title: "AI Agents auto-classifies and validate content",
            desc: "Intelligent algorithms sort, tag, and verify your documents for accuracy and compliance.",
            icon: "icon-uploadIcon",
            image: "/images/aboutpage/ai-agents.webp",
            imgWidth: 473,
            imgHeight: 387,
        },
        {
            title: "Review and approve with audit ready logs",
            desc: "Collaborate with your team and maintain detailed logs for full audit transparency.",
            icon: "icon-uploadIcon",
            image: "/images/aboutpage/approve-audit-ready.webp",
            imgWidth: 605,
            imgHeight: 382,
        },
        {
            title: "Monitor site readiness via dashboards",
            desc: "Get real-time insights into compliance status and system health through intuitive dashboards.",
            icon: "icon-uploadIcon",
            image: "/images/aboutpage/site-readiness.webp",
            imgWidth: 592,
            imgHeight: 320,
        },
        {
            title: "Export or archive with full compliance",
            desc: "Collaborate with your team and maintain detailed logs for full audit transparency.",
            icon: "icon-uploadIcon",
            image: "/images/aboutpage/export-archive.webp",
            imgWidth: 559,
            imgHeight: 382,
        },
    ];

    return(
        <>
            <section className="about-roles">
                <div className="container">
                    <div className="workflow-headings">
                        <h2 className="h3">Vault-Driven Workflow</h2>

                        <p className="h6 text-rg">Experience a secure, step-by-step approach to manage compliance with confidence and clarity.</p>
                    </div>

                    {/* <div className="workflow-wrapper">
                        <div className="workflow-images">
                            <Image src="/images/aboutpage/upload-docs.webp" alt="" width={646} height={394}></Image>
                        </div>

                        <div className="workflow-tabs">
                            <div className="workflow-tablists">
                                <div className="wf-tablist">
                                    <div className="wf-tab-icon site-radius-10">
                                        <i className="icon-uploadIcon"></i>
                                    </div>

                                    <div className="wf-tab-info">
                                        <h3 className="h5">Upload documents via secure portal</h3>

                                        <p style={{ color:"var(--grey)" }}>Easily submit files through our encrypted platform, ensuring data privacy from the start.</p>
                                    </div> 
                                </div>

                                <div className="wf-tablist">
                                    <div className="wf-tab-icon site-radius-10">
                                        <i className="icon-uploadIcon"></i>
                                    </div>

                                    <div className="wf-tab-info">
                                        <h3 className="h5">AI Agents auto-classifies and validate content</h3>

                                        <p style={{ color:"var(--grey)" }}>Intelligent algorithms sort, tag, and verify your documents for accuracy and compliance.</p>
                                    </div> 
                                </div>

                                <div className="wf-tablist">
                                    <div className="wf-tab-icon site-radius-10">
                                        <i className="icon-uploadIcon"></i>
                                    </div>

                                    <div className="wf-tab-info">
                                        <h3 className="h5">Review and approve with audit ready logs</h3>

                                        <p style={{ color:"var(--grey)" }}>Collaborate with your team and maintain detailed  logs for full audit transparency.</p>
                                    </div> 
                                </div>

                                <div className="wf-tablist">
                                    <div className="wf-tab-icon site-radius-10">
                                        <i className="icon-uploadIcon"></i>
                                    </div>

                                    <div className="wf-tab-info">
                                        <h3 className="h5">Monitor site readiness via dashboards</h3>

                                        <p style={{ color:"var(--grey)" }}>Get real-time insights into compliance status and system health through intuitive dashboards.</p>
                                    </div> 
                                </div>

                                <div className="wf-tablist">
                                    <div className="wf-tab-icon site-radius-10">
                                        <i className="icon-uploadIcon"></i>
                                    </div>

                                    <div className="wf-tab-info">
                                        <h3 className="h5">Export or archive with full compliance</h3>

                                        <p style={{ color:"var(--grey)" }}>Collaborate with your team and maintain detailed logs for full audit transparency.</p>
                                    </div> 
                                </div>
                            </div>
                        </div>
                    </div> */}

                    <div className="workflow-wrapper">
                        {/* LEFT IMAGE - changes dynamically */}
                        <div className="workflow-images">
                            <Image
                                src={tabs[activeTab].image}
                                alt="workflow"
                                width={tabs[activeTab].imgWidth}
                                height={tabs[activeTab].imgHeight}
                                className="site-radius-10"
                            />
                        </div>

                        {/* RIGHT TAB LISTS */}
                        <div className="workflow-tabs">
                            <div className="workflow-tablists">

                                {tabs.map((tab, index) => (
                                    <div
                                        key={index}
                                        className={`wf-tablist ${activeTab === index ? "active-tablist" : ""}`}
                                        onClick={() => setActiveTab(index)}
                                        style={{ cursor: "pointer" }}
                                    >
                                        <div className="wf-tab-icon site-radius-10">
                                            <i className={tab.icon}></i>
                                        </div>

                                        <div className="wf-tab-info">
                                            <h3 className="h5">{tab.title}</h3>
                                            <p style={{ color: "var(--grey)" }}>{tab.desc}</p>
                                        </div>
                                    </div>
                                ))}

                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}