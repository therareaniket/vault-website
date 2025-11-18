"use client"

import Image from "next/image";

export default function SecurityHero() {
    return(
        <>
            <section className="abt-hero site-hero">
                <div className="container">
                    <div className="hero-cont-wrapper">
                        <div className="hero-headings text-white">
                            <h1 className=''>Trusted Security. Proven Compliance.</h1>

                            <p className='h6 text-rg'>DhatuVault delivers enterprise-grade security and audit-ready compliance controls.</p>
                        </div>

                        <div className="hero-hilight">
                            <Image src="/images/securitycompliancepage/security-hero-hglt.webp" alt='About Hilight' width={580} height={385} className='page-img-hglt'></Image>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}