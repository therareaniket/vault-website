"use client"

import Image from "next/image";

export default function SecurePlatform() {
    return(
        <>
            <section className="section secure-platform">
                <div className="container">
                    <div className="scr-pltfm-headings">
                        <h2 className="h3">Secure Workspaces. Unified Platform.</h2>

                        <p className="h6 text-rg">Each tenant operates as an independent Dhatuvault with complete data separation, user management, and workflow independence.</p>
                    </div>

                    <div className="scr-pltfm-image">
                        <Image src="/images/securitycompliancepage/secure-platform-graph.svg" alt="" width={1600} height={980} draggable={false}></Image>
                    </div>
                </div>
            </section>
        </>
    );
}