"use client";
import Image from "next/image";

const ContactHero = () => {
    return (
            <section className="contact-hero site-hero">
                <div className="container">
                    <div className="hero-cont-wrapper">
                        <div className="hero-headings text-white">
                            <h1 className=''>Connect with Vault Experts</h1>

                            <p className='h6 text-rg'>Connect with our Vault team for product inquiries, technical support, or customized solutions. Were here to guide your clinical operations journey.</p>
                        </div>

                        <div className="hero-hilight">
                            <Image src="/images/contactUs/contact-hero-img.webp" alt='About Hilight' width={638} height={422} className='cntct-hero-img page-img-hglt'></Image>
                        </div>
                    </div>
                </div>
            </section>
    )
}

export default ContactHero


