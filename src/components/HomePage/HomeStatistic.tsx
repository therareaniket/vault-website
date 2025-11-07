"use client";
import React from 'react'
import Image from "next/image";


const HomeStatistic = () => {
    return (
        <section className="statistic-section section">
            <div className="container">
                <div className="statistic-main">
                    <div className='home-stats-head'>
                        <h2 className='text-sb'>Accelerate Trial with Vault’s Intelligent Platform</h2>

                        <p className='h6 text-rg home-stats-para'>Vault is designed for modern clinical operations, unifying document control, AI-powered automation, and compliance first workflows. Whether you’re a sponsor, CRO, site partner, Vault ensures fast, and compliant trial delivery.</p>

                        <div className='stats-section-cards'>
                            <div className='stats-lines'>
                                <Image className="stats-rectangle-1" src="/images/HomePage/stats-rectangle.svg" alt="" width={415} height={222}></Image>

                                <Image className="stats-rectangle-2" src="/images/HomePage/stats-rectangle.svg" alt="" width={415} height={222}></Image>

                                <Image className="stats-clock" src="/images/HomePage/statistic-clock-svg.svg" alt="" width={54} height={54}></Image>

                                <Image className="stats-rocket" src="/images/HomePage/statistic-rocket-launch.svg" alt="" width={54} height={54}></Image>

                                <Image className="stats-reverse" src="/images/HomePage/statisctic-reverse.svg" alt="" width={60} height={63}></Image>
                            </div>

                            <div className='stats-path-line'>
                                <div className='stats-card-1 site-radius-20'>
                                    <div className="stats-card-1-text">
                                        <h3 className='h2 text-sb'>85%</h3>
                                        <p className='h6 text-rg text-grey'>Faster Document Turnaround</p>
                                    </div>
                                </div>

                                <div className='stats-card-2 site-radius-20'>
                                    <div className="stats-card-2-text stats-card-1-text">
                                        <h3 className='h2 text-sb'>40%</h3>
                                        <p className='h6 text-rg text-grey'>Lower Compliance Risk</p>
                                    </div>
                                </div>

                                <div className='stats-card-3 site-radius-20'>
                                    <div className="stats-card-3-text stats-card-1-text">
                                        <h3 className='h2 text-sb'>60%</h3>
                                        <p className='h6 text-rg text-light-grey'>Higher TMP Completeness rate metrics</p>
                                    </div>
                                </div>

                                <div className='stats-card-4 site-radius-20'>
                                    <div className="stats-card-4-text stats-card-1-text">
                                        <h3 className='h2 text-sb'>99.9%</h3>
                                        <p className='h6 text-rg text-grey'>System Uptime Trial Operations</p>
                                    </div>
                                </div>

                                <div className='stats-card-5 site-radius-20'>
                                    <div className="stats-card-5-text stats-card-1-text">
                                        <h3 className='h2 text-sb'>5x</h3>
                                        <p className='h6 text-rg text-grey'>Productivity Boost</p>
                                    </div>
                                </div>
                            </div>

                            <div className='stats-path-line statistics-hide'>
                                <div className='stats-card-1 site-radius-20'>
                                    <div className="stats-card-1-text">
                                        <h3 className='h2 text-sb'>85%</h3>
                                        <p className='h6 text-rg text-grey'>Faster Document Turnaround</p>
                                    </div>
                                </div>

                                <div className='stats-card-2 site-radius-20'>
                                    <div className="stats-card-2-text stats-card-1-text">
                                        <h3 className='h2 text-sb'>40%</h3>
                                        <p className='h6 text-rg text-grey'>Lower Compliance Risk</p>
                                    </div>
                                </div>

                                <div className='stats-card-3 site-radius-20'>
                                    <div className="stats-card-3-text stats-card-1-text">
                                        <h3 className='h2 text-sb'>60%</h3>
                                        <p className='h6 text-rg text-light-grey'>Higher TMP Completeness rate metrics</p>
                                    </div>
                                </div>

                                <div className='stats-card-4 site-radius-20'>
                                    <div className="stats-card-4-text stats-card-1-text">
                                        <h3 className='h2 text-sb'>99.9%</h3>
                                        <p className='h6 text-rg text-grey'>System Uptime Trial Operations</p>
                                    </div>
                                </div>

                                <div className='stats-card-5 site-radius-20'>
                                    <div className="stats-card-5-text stats-card-1-text">
                                        <h3 className='h2 text-sb'>5x</h3>
                                        <p className='h6 text-rg text-grey'>Productivity Boost</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeStatistic