"use client"

import Image from "next/image";

type TrialOversightProps = {  
    oversightTitle: string;
    oversightSubtitle: string;
    oversightList1Title: string;
    oversightList1Subtitle: string;
    oversightList2Title: string;
    oversightList2Subtitle: string;
    oversightList3Title: string;
    oversightList3Subtitle: string;
}

export default function TrialOversight({oversightTitle, oversightSubtitle, oversightList1Title, oversightList1Subtitle, oversightList2Title, oversightList2Subtitle, oversightList3Title, oversightList3Subtitle}:TrialOversightProps) {
    return(
        <>
            <section>
                <div className="container">
                    <div className="trail-ovrsgt-headings">
                        <h2 className="h3">{oversightTitle}</h2>

                        <p className="h6 text-rg">{oversightSubtitle}</p>
                    </div>

                    <div className="ovrsgt-lists">
                        <div className="ovrsgt-list">
                            <div className="ovrsgt-list-titles">
                                {/* <span className="for-animation"></span> */}
                                <h3 className="h5 text-sb">{oversightList1Title}</h3>

                                <p>{oversightList1Subtitle}</p>
                            </div>

                            <Image src="/images/solutionpage/real-time-visibility.webp" alt="real-time-visibility" width={493} height={246}></Image>
                        </div>

                        <div className="ovrsgt-list">
                            <div className="ovrsgt-list-titles">
                                <h3 className="h5 text-sb">{oversightList2Title}</h3>

                                <p>{oversightList2Subtitle}</p>
                            </div>

                            <Image src="/images/solutionpage/compliance-audit.webp" alt="compliance-audit" width={493} height={246}></Image>
                        </div>

                        <div className="ovrsgt-list">
                            <div className="ovrsgt-list-titles">
                                <h3 className="h5 text-sb">{oversightList3Title}</h3>

                                <p>{oversightList3Subtitle}</p>
                            </div>

                            <Image src="/images/solutionpage/milestone-tracking.webp" alt="milestone-tracking" width={493} height={246}></Image>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}