"use client"

import Image from "next/image";

export default function RegulatoryPreservation(){
    return (
        <>
            <section className="section regulatory-preserv">
                <div className="container">
                    <div className="regulatory-headings">
                        <h2 className="h3">Immutable Vault Archiving for Regulatory Preservation</h2>

                        <p className="h6 text-rg">Preserve Your Records Immutably with Vault. WORM-based storage ensures tamper-proof protection, retention compliance, and audit-ready access</p>
                    </div>

                    <div className="prsrvtn-tl-procs">
                        <div className="process-main-wrapper">
                            <div className="central-dot draft">
                                <div className="process-info">
                                    <h3 className="h5">Draft</h3>

                                    <p>Created by Ethan Carter <span>02 Oct 2025</span></p>
                                </div>

                                <div className="process-images">
                                    <Image src="/images/securitycompliancepage/timeline-draft.svg" alt="timeline-draft" width={80} height={250} draggable={false} className="prsrvt-procs-img"></Image>
                                </div>
                            </div>

                            <div className="central-dot in-review">
                                <div className="process-info alt-direction">
                                    <h3 className="h5">In Review</h3>

                                    <p>Reviewed by QA Team <span>05 Oct 2025</span></p>
                                </div>

                                <div className="process-images alt-direction">
                                    <Image src="/images/securitycompliancepage/timeline-in-review.svg" alt="timeline-draft" width={80} height={250} draggable={false} className="prsrvt-procs-img"></Image>
                                </div>
                            </div>
                            
                            <div className="central-dot approved">
                                <div className="process-info">
                                    <h3 className="h5">Approved</h3>

                                    <p>Approved by Regulatory Lead <span>06 Oct 2025</span></p>
                                </div>

                                <div className="process-images">
                                    <Image src="/images/securitycompliancepage/timeline-approved.svg" alt="timeline-approved" width={80} height={250} draggable={false} className="prsrvt-procs-img"></Image>
                                </div>
                            </div>
                            
                            <div className="central-dot finalized">
                                <div className="process-info alt-direction">
                                    <h3 className="h5">Finalized</h3>

                                    <p>Hash Generated & Version Locked <span>06 Oct 2025</span></p>
                                </div>

                                <div className="process-images alt-direction">
                                    <Image src="/images/securitycompliancepage/timeline-finalize.svg" alt="timeline-draft" width={80} height={250} draggable={false} className="prsrvt-procs-img"></Image>
                                </div>
                            </div>
                            
                            <div className="central-dot archived">
                                <div className="process-info">
                                    <h3 className="h5">Archived (WORM)</h3>

                                    <p>Immutable Storage Enabled Retain Until 2035 <span>07 Oct 2025</span></p>
                                </div>

                                <div className="process-images">
                                    <Image src="/images/securitycompliancepage/timeline-archived.svg" alt="timeline-archived" width={80} height={250} draggable={false} className="prsrvt-procs-img"></Image>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}   