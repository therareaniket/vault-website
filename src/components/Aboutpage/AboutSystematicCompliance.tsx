"use client"

import Image from "next/image";

export default function SystematicCompliance () {
    return(
        <>
            <section className="section bg-black text-white">
                <div className="container">
                    <div className="sytmtc-comp-headings">
                        <h2 className="h3">Compliance Made Systematic</h2>

                        <p className="h6 text-rg">Enforces regulatory rigour with automated compliance controls</p>
                    </div>

                    <div className="systematic-highlgts">
                        <Image src="/images/aboutpage/systematic-showcase.webp" alt="systematic-showcase" width={870} height={544} className="systematic-img"></Image>

                        <div className="systematic-pointers">
                            <div className="pointer-items">
                                <div className="pointer-item site-radius-20 text-black" style={{ backgroundColor:'var(--green-light)' }}>
                                    <h3 className="h5">Operate Efficiently</h3>

                                    <p>Real-time trial monitoring, intelligent automation, and instant visibility</p>
                                </div>

                                <div className="pointer-item site-radius-20 text-black" style={{ backgroundColor:'var(--red-light)' }}>
                                    <h3 className="h5">Built on Four Strong Pillars</h3>

                                    <p>Delivers Design, Operate, Govern, and Integrations for trials</p>
                                </div>
                            </div>

                            <div className="pointer-items">
                                <div className="pointer-item site-radius-20 text-black" style={{ backgroundColor:'var(--yellow-light)' }}>
                                    <h3 className="h5">Inspection Confidence</h3>

                                    <p>DhatuVault delivers complete traceability and regulatory audit readiness alway</p>
                                </div>

                                <div className="pointer-item site-radius-20 text-black" style={{ backgroundColor:'var(--blue-light)' }}>
                                    <h3 className="h5">Smarter Trial Planning</h3>

                                    <p>Simplifies protocol design and eTMF configuration for faster startup</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}