"use client";   
import Image from "next/image";

const HomeHero = () => {
    return (
        <section className="home-hero">
            <div className="hero-bg-video">
                <video src="/images/HomePage/hero-bg-mp.mp4" loop autoPlay muted suppressHydrationWarning className="hero-video"></video>
            </div>

            <div className="hero-overlay"></div>
                <div className="container">
                    <div className="home-hero-content">
                        <div className="hero-content-text">
                            <h1 className="hero-title text-sb">Intelligent Vault for Compliant Clinical Trials</h1>

                            <p className="hero-subtitle text-rg h6">
                                Secure, automated vault system built for global compliance, seamless scalability, and effortless document management.
                            </p>

                            <div className="home-hero-buttons">
                                <button className="btn-bg btn-padding text-md text-18">Book a Demo</button>

                                <button className="btn-padding explore-prod-btn text-md text-18 site-radius-10 btn-secondary">Explore Product</button>
                            </div>
                        </div>

                        <div className="hero-content-images">
                            <div className="image-content-1">
                                <Image className="home-hero-img-1" src="/images/HomePage/demo-2.webp" alt="" width={297} height={279}></Image>

                                <Image className="home-hero-img-2" src="/images/HomePage/hero-img-2.webp" alt="" width={344} height={150}></Image>
                            </div>

                            <div className="image-content-2">
                                <Image className="home-hero-img-3" src="/images/HomePage/hero-img-3.webp" alt="" width={236} height={216}></Image>

                                <Image className="home-hero-img-4" src="/images/HomePage/demo.webp" alt="" width={250} height={200}></Image>

                                <Image className="home-hero-img-5" src="/images/HomePage/demo-1.webp" alt="" width={264} height={118}></Image>
                            </div>
                        </div>
                    </div>
                </div>
        </section>
    );
};

export default HomeHero;