"use client";

import { useEffect } from "react";
import Image from "next/image";

type ProvenClinicalProps = {
    trialInnovationTitle: string;
    trialInnovationParagraph1: string;
    trialInnovationParagraph2: string;
}

export default function ProvenClinicals({trialInnovationTitle, trialInnovationParagraph1, trialInnovationParagraph2}:ProvenClinicalProps) {

    useEffect(() => {
        const bars = document.querySelectorAll<HTMLElement>(".added-prog");
        const section = document.querySelector(".innovation-result");

        if (!section) return;

        // Hide all images initially
        bars.forEach((bar) => {
            const img = bar.querySelector("img") as HTMLImageElement | null;
            if (img) {
                img.style.opacity = "0";
                img.style.transition = "opacity 0.6s ease";
            }
        });

        // Intersection Observer
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    animateBars();
                    observer.disconnect();
                }
            },
            { threshold: 0.4 }
        );

        observer.observe(section);

        const animateBars = () => {
            bars.forEach((bar, index) => {
                const img = bar.querySelector("img") as HTMLImageElement | null;
                const finalWidth = getComputedStyle(bar).width;

                bar.dataset.final = finalWidth;
                bar.style.transition = "none";
                bar.style.width = "0px";

                // Start width animation
                setTimeout(() => {
                    bar.style.transition = "width 2.8s ease";
                    bar.style.width = finalWidth;
                }, 50 + index * 250);

                // After width animation finishes → fade in image
                setTimeout(() => {
                    if (img) img.style.opacity = "1";
                }, 2000 + index * 250); // 2.8s width + slight delay
            });
        };
    }, []);

    return (
        <>
            <section className="section">
                <div className="container">
                    <div className="proven-clinical-headings">
                        <h2 className="h3">{trialInnovationTitle}</h2>

                        <div className="info-paras">
                            <p className="h6 text-rg">{trialInnovationParagraph1}</p>

                            <p className="h6 text-rg">{trialInnovationParagraph2}</p>
                        </div>
                    </div>

                    <div className="innovation-result">
                        <Image
                            src="/images/aboutpage/proven-result.webp"
                            alt="proven-result"
                            width={720}
                            height={520}
                            className="site-radius-20 proven-result"
                        />

                        <div className="innov-nums">
                            <div className="innov-list">
                                <p>Faster document turnaround</p>
                                <div className="innov-prog-bar site-radius-5">
                                    <span className="added-prog eighty-percnt site-radius-5">
                                        <Image src="/images/aboutpage/80.svg" alt="compliance-icon" width={78} height={39} />
                                    </span>
                                </div>
                            </div>

                            <div className="innov-list">
                                <p>Lower compliance risk</p>
                                <div className="innov-prog-bar site-radius-5">
                                    <span className="added-prog forty-percnt site-radius-5">
                                        <Image src="/images/aboutpage/40.svg" alt="compliance-icon" width={78} height={39} />
                                    </span>
                                </div>
                            </div>

                            <div className="innov-list">
                                <p>Higher TMF completeness</p>
                                <div className="innov-prog-bar site-radius-5">
                                    <span className="added-prog sixty-percnt site-radius-5">
                                        <Image src="/images/aboutpage/60.svg" alt="compliance-icon" width={78} height={39} />
                                    </span>
                                </div>
                            </div>

                            <div className="innov-list">
                                <p>Documents processed monthly</p>
                                <div className="innov-prog-bar site-radius-5">
                                    <span className="added-prog hundred-percnt site-radius-5">
                                        <Image src="/images/aboutpage/200k.svg" alt="compliance-icon" width={78} height={39} />
                                    </span>
                                </div>
                            </div>

                            <div className="innov-list">
                                <p>System Uptime</p>
                                <div className="innov-prog-bar site-radius-5">
                                    <span className="added-prog ninety-nine-percnt site-radius-5">
                                        <Image src="/images/aboutpage/99.9.svg" alt="compliance-icon" width={78} height={39} />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
