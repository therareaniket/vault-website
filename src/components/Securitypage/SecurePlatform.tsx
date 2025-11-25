"use client"

import Image from "next/image";

type SecurePlatformProps = {
    secureWorkspacesTitle: string;
    secureWorkspacesSubtitle: string;
}

export default function SecurePlatform({secureWorkspacesTitle, secureWorkspacesSubtitle} : SecurePlatformProps) {
    return(
        <>
            <section className="section secure-platform">
                <div className="container">
                    <div className="scr-pltfm-headings">
                        <h2 className="h3">{secureWorkspacesTitle}</h2>

                        <p className="h6 text-rg">{secureWorkspacesSubtitle}</p>
                    </div>

                    <div className="scr-pltfm-image">
                        <Image src="/images/securitycompliancepage/secure-platform-graph.svg" alt="" width={1600} height={980} draggable={false}></Image>
                    </div>
                </div>
            </section>
        </>
    );
}