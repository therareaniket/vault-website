"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@radix-ui/react-accordion";
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
            title: "AI Agents for auto-checking content",
            desc: "Intelligent algorithms sort, tag, and verify your documents for accuracy and compliance.",
            icon: "icon-grading",
            image: "/images/aboutpage/ai-agents.webp",
            imgWidth: 473,
            imgHeight: 387,
        },
        {
            title: "Review and approve with audit ready logs",
            desc: "Collaborate with your team and maintain detailed logs for full audit transparency.",
            icon: "icon-order_approve",
            image: "/images/aboutpage/approve-audit-ready.webp",
            imgWidth: 605,
            imgHeight: 382,
        },
        {
            title: "Monitor site readiness via dashboards",
            desc: "Get real-time insights into compliance status and system health through intuitive dashboards.",
            icon: "icon-assistant_on_hub",
            image: "/images/aboutpage/site-readiness.webp",
            imgWidth: 592,
            imgHeight: 320,
        },
        {
            title: "Export or archive with full compliance",
            desc: "Collaborate with your team and maintain detailed logs for full audit transparency.",
            icon: "icon-exit_to_app",
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

                    <div className="workflow-wrapper">
                        {/* LEFT IMAGE - changes dynamically */}
                        <div className="workflow-images">
                            <Image src={tabs[activeTab].image} alt="workflow" width={tabs[activeTab].imgWidth} height={tabs[activeTab].imgHeight} className="site-radius-10" priority={true} />
                        </div>

                        {/* RIGHT TAB LISTS */}
                        <div className="workflow-tabs">
                            <div className="workflow-tablists">

                                {tabs.map((tab, index) => (
                                    <div key={index} className={`wf-tablist ${activeTab === index ? "active-tablist" : ""}`} onClick={() => setActiveTab(index)} style={{ cursor: "pointer" }} >
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

                    <div className="workflow-accordion flex flex-col lg:hidden px-2">
                        <Accordion type="single" collapsible defaultValue="item-0" className="wf-accordian">
                            {tabs.map((tab, index) => (
                                <AccordionItem key={index} value={`item-${index}`} className="wf-accord-item">
                                    <AccordionTrigger className="wf-accord-trigr">
                                        <div className="flex items-center gap-3 accord-btn-text">
                                            <div className="wf-tab-icon site-radius-10"> <i className={tab.icon}></i> </div>
                                            <h3 className="h5">{tab.title}</h3>
                                        </div>
                                    </AccordionTrigger>

                                    <AccordionContent className="wf-accord-cont">
                                        <div className="wf-accrd-tab-info">
                                            <p style={{ color: "var(--grey)" }}>{tab.desc}</p>
                                            
                                            <Image src={tab.image} alt="workflow" width={tab.imgWidth} height={tab.imgHeight} className="site-radius-10 mb-3" />
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </div>
            </section>
        </>
    );
}