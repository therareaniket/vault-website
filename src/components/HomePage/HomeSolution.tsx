"use client"

import Image from "next/image";

type SolutionsProps = {
    excellenceTitle: string;
    excellenceSubtitle: string;
    excellenceCard1Title: string;
    excellenceCard1Subtitle: string;
    excellenceCard2Title: string;
    excellenceCard2Subtitle: string;
    excellenceCard3Title: string;
    excellenceCard3Subtitle: string;
    excellenceCard4Title: string;
    excellenceCard4Subtitle: string;
    excellenceCard5Title: string;
    excellenceCard5Subtitle: string;
}

const HomeSolution = ({ excellenceTitle, excellenceSubtitle, excellenceCard1Title, excellenceCard1Subtitle, excellenceCard2Title, excellenceCard2Subtitle, excellenceCard3Title, excellenceCard3Subtitle, excellenceCard4Title, excellenceCard4Subtitle, excellenceCard5Title, excellenceCard5Subtitle }: SolutionsProps) => {
    return (
        <section className="section">
            <div className="container">
                <div className="home-solution-main">
                    <div className="home-solution-head">
                        <h2 className='text-sb home-solution-head-h2'>{excellenceTitle}</h2>

                        <p className='text-rg h6 home-solution-head-para'>{excellenceSubtitle}</p>
                    </div>

                    <div className='solution-card-main'>
                        <div className='solution-card-1'>
                            <div className="solution-card">
                                <div className='sol-card-1 site-radius-20'>
                                    <div className="sol-card-text-1">
                                        <h3 className='h4 text-rg'>{excellenceCard1Title}</h3>

                                        <p className='text-18 text-rg'>{excellenceCard1Subtitle}</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="solution-card">
                                <div className='sol-card-2 site-radius-20'>
                                    <div className="sol-card-text-2">
                                        <h3 className='h4 text-rg'>{excellenceCard2Title}</h3>

                                        <p className='text-18 text-rg'>{excellenceCard2Subtitle}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="solution-card">
                            <div className='solution-card-2 site-radius-20'>
                                <div className="solution-card-2-text">
                                    <h3 className='h4 text-rg'>{excellenceCard3Title}</h3>

                                    <p className='text-18 text-rg'>{excellenceCard3Subtitle}</p>

                                    <Image className="sol-vector-img" src="/images/HomePage/solution-img.png" alt="" width={415} height={319}></Image>
                                </div>
                            </div>
                        </div>

                        <div className='solution-card-3'>
                            <div className="solution-card">
                                <div className='sol-card-4 site-radius-20'>
                                    <div className="sol-card-text-3">
                                        <h3 className='h4 text-rg'>{excellenceCard4Title}</h3>

                                        <p className='text-18 text-rg'>{excellenceCard4Subtitle}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="solution-card">
                                <div className='sol-card-5 site-radius-20'>
                                    <div className="sol-card-text-4">
                                        <h3 className='h4 text-rg'>{excellenceCard5Title}</h3>

                                        <p className='text-18 text-rg'>{excellenceCard5Subtitle}</p>
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

export default HomeSolution