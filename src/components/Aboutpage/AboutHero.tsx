"use client"
import Image from 'next/image';

export default function AboutHero() {
    return (
        <>
            <section className="abt-hero site-hero">
                <div className="container">
                    <div className="hero-cont-wrapper">
                        <div className="hero-headings text-white">
                            <h1 className=''>Built for Compliant, Connected Research</h1>

                            <p className='h6 text-rg'>Delivering secure, scalable solutions that protect your data and simplify compliance.</p>
                        </div>

                        <div className="hero-hilight">
                            <Image src="/images/aboutpage/abt-hero-hglt.webp" alt='About Hilight' width={601} height={299} className='page-img-hglt'></Image>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="page-info">
                        <h2 className='h3'>Trusted Clinical Oversight and Audit-Ready Compliance</h2>

                        <p className='h6 text-rg'>DhatuVault Portal centralizes all clinical trial documentation with inspection-ready controls for approvals and access management throughout the study lifecycle. The platform enforces role-based permissions for sensitive content, maintains complete audit trails of all actions, and automates approval workflows—ensuring 21 CFR Part 11 compliance and regulatory readiness at every step.</p>
                    </div>
                </div>
            </section>
        </>
    );
}

