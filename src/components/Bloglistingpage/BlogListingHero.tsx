"use client"
import Image from 'next/image';

export default function BlogListingHero() {
    return (
        <>
            <section className="abt-hero site-hero">
                <div className="container">
                    <div className="hero-cont-wrapper">
                        <div className="hero-headings text-white">
                            <h1 className=''>Smart Insights, Better Decisions</h1>

                            <p className='h6 text-rg'>Expert Insights on Trial Operations, Compliance, and Innovation.</p>
                        </div>

                        <div className="hero-hilight">
                            <Image src="/images/blogspage/blog-banner-final.webp" alt='About Hilight' width={601} height={299} className='page-img-hglt'></Image>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="page-info">
                        <h2 className='h3'>Transform Your Trial Operations Insights</h2>

                        <p className='h6 text-rg'>Expert Analysis, Deep Dives, and Industry Innovation Stay informed with curated content on trial transformation, compliance excellence, and operational leadership</p>
                    </div>
                </div>
            </section>
        </>
    );
}