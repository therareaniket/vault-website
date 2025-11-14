"use client"

import Image from "next/image";

export default function SecuritiesPlatform() {
    return(
        <>
            <section className="section">
                <div className="container">
                    <div className="security-headings">
                        <h2 className="h3">Security-Certified Platform</h2>

                        <p className="h6 text-rg">DhatuVault exceeds regulatory requirements with global certifications and encrypted data protection</p>
                    </div>

                    <div className="security-list-wrapper">
                        <Image src="/images/aboutpage/security-showcase.webp" alt="security-showcase" width={805} height={346} className="security-showcase"></Image>

                        <div className="security-lists">
                            <div className="security-list">
                                <div className="compli-icon site-radius-10">
                                    <Image src="/images/aboutpage/compliance-icon.svg" alt="" width={22} height={23}></Image>
                                </div>

                                <div className="compli-info">
                                    <h3 className="h5">21 CFR Part 11</h3>

                                    <p style={{ color: "var(--grey)" }}>Electronic records and signatures meet FDA standards for trustworthiness</p>
                                </div>
                            </div>

                            <div className="security-list">
                                <div className="compli-icon site-radius-10">
                                    <Image src="/images/aboutpage/compliance-icon.svg" alt="" width={22} height={23}></Image>
                                </div>

                                <div className="compli-info">
                                    <h3 className="h5">Annex 11</h3>

                                    <p style={{ color: "var(--grey)" }}>Ensures data integrity and system validation for GxP-regulated environments</p>
                                </div>
                            </div>

                            <div className="security-list">
                                <div className="compli-icon site-radius-10">
                                    <Image src="/images/aboutpage/compliance-icon.svg" alt="" width={22} height={23}></Image>
                                </div>

                                <div className="compli-info">
                                    <h3 className="h5">ISO 27001</h3>

                                    <p style={{ color: "var(--grey)" }}>DhatuVault maintains ISMS certification ensuring information security management excellence</p>
                                </div>
                            </div>

                            <div className="security-list">
                                <div className="compli-icon site-radius-10">
                                    <Image src="/images/aboutpage/compliance-icon.svg" alt="" width={22} height={23}></Image>
                                </div>

                                <div className="compli-info">
                                    <h3 className="h5">GDPR & HIPAA Ready</h3>

                                    <p style={{ color: "var(--grey)" }}>Maintains GDPR compliance for EU data protection and global privacy requirements</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}