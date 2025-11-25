"use client"

import { useEffect, useState } from "react";
import Image from "next/image";
import {  motion, } from 'framer-motion';

const timelineAnimation = (typeof window !== "undefined" && window.innerWidth >= 1100) ?  {
    initialLine: { width: '0%' },
    animateLine: { width: '100%', transition: { duration: 4, delay: 0.2 }, },

    initialDraft: { opacity: 0, y: 100, },
    animateDraft: { opacity: 1, y: '-5px', transition: { duration: 0.5, delay: 0.3 },},

    initialReview: { opacity: 0, y: -100, },
    animateReview: { opacity: 1, y: '-5px', transition: { duration: 0.5, delay: 0.8 },},

    initialApproved: { opacity: 0, y: 100, },
    animateApproved: { opacity: 1, y: '-5px', transition: { duration: 0.5, delay: 1.6 },},

    initialFinalize: { opacity: 0, y: -100, },
    animateFinalize: { opacity: 1, y: '-5px', transition: { duration: 0.5, delay: 2.4 },},

    initialArchived: { opacity: 0, y: 100, },
    animateArchived: { opacity: 1, y: '-5px', transition: { duration: 0.5, delay: 3.2 },},
} : {
    initialLine: { width: '0%' },
    animateLine: { width: '100%', },

    initialDraft: { opacity: 1, y: 'auto', },
    animateDraft: { opacity: 1, y: 'auto', },

    initialReview: { opacity: 1, y: 'auto', },
    animateReview: { opacity: 1, y: 'auto', },

    initialApproved: { opacity: 1, y: 'auto', },
    animateApproved: { opacity: 1, y: 'auto', },

    initialFinalize: { opacity: 1, y: 'auto', },
    animateFinalize: { opacity: 1, y: 'auto', },

    initialArchived: { opacity: 1, y: 'auto', },
    animateArchived: { opacity: 1, y: 'auto', },
}

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
                            <motion.div className="central-dot draft" variants={timelineAnimation} initial="initialDraft" whileInView="animateDraft" viewport={{ once: true, amount: 1 }}>
                                <div className="process-info">
                                    <h3 className="h5">Draft</h3>

                                    <p>Created by Ethan Carter <span>02 Oct 2025</span></p>
                                </div>

                                <div className="process-images">
                                    <Image src="/images/securitycompliancepage/timeline-draft.svg" alt="timeline-draft" width={80} height={250} draggable={false} className="prsrvt-procs-img"></Image>
                                </div>
                            </motion.div>

                            <motion.div className="central-dot in-review" variants={timelineAnimation} initial="initialReview" whileInView="animateReview" viewport={{ once: true, amount: 1 }}>
                                <div className="process-info alt-direction">
                                    <h3 className="h5">In Review</h3>

                                    <p>Reviewed by QA Team <span>05 Oct 2025</span></p>
                                </div>

                                <div className="process-images alt-direction">
                                    <Image src="/images/securitycompliancepage/timeline-in-review.svg" alt="timeline-draft" width={80} height={250} draggable={false} className="prsrvt-procs-img"></Image>
                                </div>
                            </motion.div>
                            
                            <motion.div className="central-dot approved" variants={timelineAnimation} initial="initialApproved" whileInView="animateApproved" viewport={{ once: true, amount: 1 }}>
                                <div className="process-info">
                                    <h3 className="h5">Approved</h3>

                                    <p>Approved by Regulatory Lead <span>06 Oct 2025</span></p>
                                </div>

                                <div className="process-images">
                                    <Image src="/images/securitycompliancepage/timeline-approved.svg" alt="timeline-approved" width={80} height={250} draggable={false} className="prsrvt-procs-img"></Image>
                                </div>
                            </motion.div>
                            
                            <motion.div className="central-dot finalized" variants={timelineAnimation} initial="initialFinalize" whileInView="animateFinalize" viewport={{ once: true, amount: 1 }}>
                                <div className="process-info alt-direction">
                                    <h3 className="h5">Finalized</h3>

                                    <p>Hash Generated & Version Locked <span>06 Oct 2025</span></p>
                                </div>

                                <div className="process-images alt-direction">
                                    <Image src="/images/securitycompliancepage/timeline-finalize.svg" alt="timeline-draft" width={80} height={250} draggable={false} className="prsrvt-procs-img"></Image>
                                </div>
                            </motion.div>
                            
                            <motion.div className="central-dot archived" variants={timelineAnimation} initial="initialArchived" whileInView="animateArchived" viewport={{ once: true, amount: 1 }}>
                                <div className="process-info">
                                    <h3 className="h5">Archived (WORM)</h3>

                                    <p>Immutable Storage Enabled Retain Until 2035 <span>07 Oct 2025</span></p>
                                </div>

                                <div className="process-images">
                                    <Image src="/images/securitycompliancepage/timeline-archived.svg" alt="timeline-archived" width={80} height={250} draggable={false} className="prsrvt-procs-img"></Image>
                                </div>
                            </motion.div>
                            
                            <motion.div className="central-line-animation" variants={timelineAnimation} initial="initialLine" whileInView="animateLine" viewport={{ once: true, amount: 1 }}></motion.div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}   