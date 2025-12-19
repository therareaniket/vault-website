"use client"

import Image from "next/image";

type SecuritiesProps = {
    certifiedPlatformsTitle: string;
    certifiedPlatformsSubtitle: string;

    certifiedPlatformsList: {
        platform1Title: string;
        platform1Subtitle: string;

        platform2Title: string;
        platform2Subtitle: string;

        platform3Title: string;
        platform3Subtitle: string;

        platform4Title: string;
        platform4Subtitle: string;
    }
}

export default function SecuritiesPlatform({ certifiedPlatformsTitle, certifiedPlatformsSubtitle, certifiedPlatformsList }: SecuritiesProps) {
    return(
        <>
            <section className="section">
                <div className="container">
                    <div className="security-headings">
                        <h2 className="h3">{certifiedPlatformsTitle}</h2>

                        <p className="h6 text-rg">{certifiedPlatformsSubtitle}</p>
                    </div>

                    <div className="security-list-wrapper">
                        <Image src="/images/aboutpage/dv-about-seccurity-updated.webp" alt="security-showcase" width={805} height={346} className="security-showcase site-radius-20"></Image>

                        <div className="security-lists">
                            <div className="security-list">
                                <div className="compli-icon site-radius-10">
                                    <Image src="/images/aboutpage/compliance-icon.svg" alt="" width={22} height={23}></Image>
                                </div>

                                <div className="compli-info">
                                    <h3 className="h5">{certifiedPlatformsList.platform1Title}</h3>

                                    <p style={{ color: "var(--grey)" }}>{certifiedPlatformsList.platform1Subtitle}</p>
                                </div>
                            </div>

                            <div className="security-list">
                                <div className="compli-icon site-radius-10">
                                    <Image src="/images/aboutpage/compliance-icon.svg" alt="" width={22} height={23}></Image>
                                </div>

                                <div className="compli-info">
                                    <h3 className="h5">{certifiedPlatformsList.platform2Title}</h3>

                                    <p style={{ color: "var(--grey)" }}>{certifiedPlatformsList.platform2Subtitle}</p>
                                </div>
                            </div>

                            <div className="security-list">
                                <div className="compli-icon site-radius-10">
                                    <Image src="/images/aboutpage/compliance-icon.svg" alt="" width={22} height={23}></Image>
                                </div>

                                <div className="compli-info">
                                    <h3 className="h5">{certifiedPlatformsList.platform3Title}</h3>

                                    <p style={{ color: "var(--grey)" }}>{certifiedPlatformsList.platform3Subtitle}</p>
                                </div>
                            </div>

                            <div className="security-list">
                                <div className="compli-icon site-radius-10">
                                    <Image src="/images/aboutpage/compliance-icon.svg" alt="" width={22} height={23}></Image>
                                </div>

                                <div className="compli-info">
                                    <h3 className="h5">{certifiedPlatformsList.platform4Title}</h3>

                                    <p style={{ color: "var(--grey)" }}>{certifiedPlatformsList.platform4Subtitle}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}