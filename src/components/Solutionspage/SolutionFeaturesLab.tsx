"use client"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@radix-ui/react-accordion";
import Image from "next/image";
import { useState } from "react";

export default function FeaturesLabs() {

    const [activeIndex, setActiveIndex] = useState(0);

    const features = [
        {
            title: "Secure Uploads",
            icon: "icon-uploadIcon",
            contentTitle: "Controlled Access for Sensitive Data",
            contentDesc: "Ensure the confidentiality of critical documents with secure upload mechanisms. Role-based access controls and encryption protocols safeguard sensitive information, allowing only authorized users to view or manage files. This minimizes the risk of data breaches and ensures compliance with industry regulations.",
        },
        {
            title: "Validation Engine",
            icon: "icon-uploadIcon",
            contentTitle: "Automated Checks for Document Integrity",
            contentDesc: "Ensure every document meets your standards before it enters your system. The Validation Engine performs real-time, automated checks for format, completeness, and consistency. This reduces manual review time, flags discrepancies early, and guarantees that only accurate, compliant data is processed.",
        },
        {
            title: "Retention & Archive",
            icon: "icon-uploadIcon",
            contentTitle: "Policy-Based Lifecycle Management",
            contentDesc: "Manage your data with confidence using intelligent retention and archiving policies. Files are automatically categorized and stored based on regulatory and operational requirements. Whether it's short-term retention or long-term archival, this system ensures timely disposal, secure storage, and audit-readiness.",
        },
        {
            title: "Notifications",
            icon: "icon-uploadIcon",
            contentTitle: "Real-Time Alerts for Missing or Delayed Files",
            contentDesc: "Never miss a critical update. The notification system delivers instant alerts for missing, delayed, or non-compliant documents. Stay informed and take immediate action to resolve issues, keeping workflows smooth and ensuring deadlines are met without surprises.",
        },
    ];

    return(
        <>
            <section className="section features-of-lab">
                <div className="container">
                    <div className="features-lab-headings">
                        <h2 className="h3">Essential DhatuVault Features for Labs</h2>
        
                        <p className="h6 text-rg">Explore the most relevant modules designed to support secure data handling, validation, and lifecycle management in lab operations</p>
                    </div>

                    <div className="features-lab-list-wrapper">
                        <div className="featu-lab-butns">
                            {features.map((item, index) => (
                                <button
                                    key={index}
                                    className={`feat-lab-btn ${activeIndex === index ? "active-feat-btn" : ""}`}
                                    onClick={() => setActiveIndex(index)}
                                >
                                    <span className="h5 text-md">
                                        <i className={`${item.icon} mr-[10px]`}></i>
                                        {item.title}
                                    </span>
                                </button>
                            ))}
                        </div>

                        <div className="featu-lab-content">
                            <div className="featu-lab-data site-radius-20">
                                <div className="featu-lab-item">
                                    <span className={`h2 ${features[activeIndex].icon}`}></span>
                                    <h3 className="h5">{features[activeIndex].contentTitle}</h3>
                                    <p>{features[activeIndex].contentDesc}</p>
                                </div>
                            </div>
                        </div>
                    </div>      

                    <Accordion type="single" collapsible className="w-full mt-10 space-y-4 feat-lab-mob-acrdn">
                        {features.map((item, index) => (
                            <AccordionItem key={index} value={`item-${index}`} className="border border-gray-200 rounded-xl px-4 accord-item">
                                <AccordionTrigger className="py-4 flex items-start gap-3 text-left pb-0 accord-trigr">
                                    <i className={`${item.icon} text-xl pt-[4px]`}></i>
                                    <span className="h5 text-md">{item.title}</span>
                                </AccordionTrigger>

                                <AccordionContent className="accord-content">
                                    <div className="p-4 bg-[var(--blue-light)] rounded-xl">
                                        {/* <span className={`h2 ${item.icon}`}></span> */}
                                        <h3 className="h5 mt-3">{item.contentTitle}</h3>
                                        <p className="mt-2">{item.contentDesc}</p>
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>

            <section className="section trial-performance">
                <div className="container">
                    <div className="trail-prfmnc-headings">
                        <h2 className="h3">Trial Performance at a Glance</h2>

                        <p className="h6 text-rg">DhatuVault delivers quantifiable operational metrics enabling informed decisions and measurable continuous improvement across trials</p>
                    </div>

                    <div className="performace-glance">
                        <div className="glance-lists">
                            <div className="glance-list site-radius-20" style={{ backgroundColor: 'var(--blue-light)' }}>
                                <div className="glanc-list-icons">
                                    <Image src="/images/solutionpage/CAPA-closure.png" alt="CAPA-closure" width={44} height={44}></Image>

                                    <span className="h4">50%</span>
                                </div>

                                <div className="glace-content">
                                    <p className="h6">CAPA Closure Time</p>

                                    <p>Reduced by 50%</p>
                                </div>
                            </div>

                            <div className="glance-list site-radius-20" style={{ backgroundColor: 'var(--green-light)' }}>
                                <div className="glanc-list-icons">
                                    <Image src="/images/solutionpage/TMF-completeness.png" alt="TMF-completeness" width={44} height={44}></Image>

                                    <span className="h4">{">95%"}</span>
                                </div>

                                <div className="glace-content">
                                    <p className="h6">TMF Completeness</p>

                                    <p>Consistently above 95%</p>
                                </div>
                            </div>

                            <div className="glance-list site-radius-20" style={{ backgroundColor: 'var(--purple-light)' }}>
                                <div className="glanc-list-icons">
                                    <Image src="/images/solutionpage/document-turnaround.png" alt="document-turnaround" width={44} height={44}></Image>

                                    <span className="h4">{"≤ 3 min"}</span>
                                </div>

                                <div className="glace-content">
                                    <p className="h6">Document Turnaround</p>

                                    <p>Ultra-fast processing</p>
                                </div>
                            </div>

                            <div className="glance-list site-radius-20" style={{ backgroundColor: 'var(--orange-light)' }}>
                                <div className="glanc-list-icons">
                                    <Image src="/images/solutionpage/inspection-readiness.png" alt="inspection-readiness" width={44} height={44}></Image>

                                    <span className="h4">{">90%"}</span>
                                </div>

                                <div className="glace-content">
                                    <p className="h6">Inspection Readiness Score</p>

                                    <p>Always audit-ready</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}