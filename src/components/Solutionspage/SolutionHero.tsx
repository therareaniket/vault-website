"use client"

import Image from "next/image";

export default function SolutionHero() {
    return(
        <>
            <section className="abt-hero site-hero">
                <div className="container">
                    <div className="hero-cont-wrapper">
                        <div className="hero-headings text-white">
                            <h1 className=''>Centralized Control. Accelerated Trials.</h1>

                            <p className='h6 text-rg'>One platform for sponsors, CROs, and sites—managing trials faster with unified oversight and real-time visibility.</p>
                        </div>

                        <div className="hero-hilight">
                            <Image src="/images/solutionpage/solu-hero-hglt.webp" alt='About Hilight' width={578} height={475} className='page-img-hglt'></Image>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}